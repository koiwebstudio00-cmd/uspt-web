import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import type { Carrera, Instituto } from "@/lib/types/database";

interface CarreraWithInstituto extends Carrera {
    instituto: Instituto;
}

interface UseCarreraBySlugResult {
    carrera: CarreraWithInstituto | null;
    relatedCareers: Carrera[];
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook to fetch a carrera and its instituto by slug from Supabase
 * Also fetches related careers from the same instituto
 * @param slug - The slug of the carrera to fetch
 */
export function useCarreraBySlug(slug: string): UseCarreraBySlugResult {
    const [carrera, setCarrera] = useState<CarreraWithInstituto | null>(null);
    const [relatedCareers, setRelatedCareers] = useState<Carrera[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchCarrera() {
            try {
                setLoading(true);
                setError(null);

                // Fetch carrera with instituto using JOIN
                const { data, error: fetchError } = await supabase
                    .from("carreras")
                    .select(
                        `
            *,
            instituto:institutos!inner(*)
          `
                    )
                    .eq("slug", slug)
                    .single();

                if (fetchError) {
                    throw fetchError;
                }

                if (!data) {
                    if (isMounted) {
                        setError("Carrera no encontrada");
                        setCarrera(null);
                    }
                    return;
                }

                const carreraData = data as CarreraWithInstituto;

                if (isMounted) {
                    setCarrera(carreraData);
                }

                // Fetch related careers from the same instituto (excluding current carrera)
                const { data: relatedData, error: relatedError } =
                    await supabase
                        .from("carreras")
                        .select("*")
                        .eq("instituto_id", carreraData.instituto_id)
                        .neq("id", carreraData.id)
                        .limit(6);

                if (relatedError) {
                    console.error(
                        "Error fetching related careers:",
                        relatedError
                    );
                } else if (isMounted) {
                    setRelatedCareers(relatedData || []);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar la carrera"
                    );
                    console.error("Error loading carrera:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        if (slug) {
            fetchCarrera();
        } else {
            setLoading(false);
            setError("Slug no proporcionado");
        }

        return () => {
            isMounted = false;
        };
    }, [slug]);

    return { carrera, relatedCareers, loading, error };
}
