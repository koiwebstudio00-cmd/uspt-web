import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import type { Posgrado, Instituto } from "@/lib/types/database";

interface PosgradoWithInstituto extends Posgrado {
    instituto: Instituto | null;
}

interface UsePosgradoBySlugResult {
    posgrado: PosgradoWithInstituto | null;
    relatedPosgrados: Posgrado[];
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook to fetch a posgrado and its instituto by slug from Supabase
 * Also fetches related posgrados from the same instituto
 * @param slug - The slug of the posgrado to fetch
 */
export function usePosgradoBySlug(slug: string): UsePosgradoBySlugResult {
    const [posgrado, setPosgrado] = useState<PosgradoWithInstituto | null>(
        null,
    );
    const [relatedPosgrados, setRelatedPosgrados] = useState<Posgrado[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchPosgrado() {
            try {
                setLoading(true);
                setError(null);

                // LEFT JOIN: trae el posgrado aunque el instituto relacionado no exista
                const { data, error: fetchError } = await supabase
                    .from("posgrados")
                    .select(
                        `
            *,
            instituto:institutos!posgrados_instituto_id_fkey(*)
          `,
                    )
                    .eq("slug", slug)
                    .single();

                if (fetchError) {
                    throw fetchError;
                }

                if (!data) {
                    if (isMounted) {
                        setError("Posgrado no encontrado");
                        setPosgrado(null);
                    }
                    return;
                }

                const posgradoData = data as PosgradoWithInstituto;

                if (isMounted) {
                    setPosgrado(posgradoData);
                }

                // Fetch related posgrados from the same instituto (excluding current posgrado)
                const { data: relatedData, error: relatedError } =
                    await supabase
                        .from("posgrados")
                        .select("*")
                        .eq("instituto_id", posgradoData.instituto_id)
                        .neq("id", posgradoData.id)
                        .limit(6);

                if (relatedError) {
                    console.error(
                        "Error fetching related posgrados:",
                        relatedError,
                    );
                } else if (isMounted) {
                    setRelatedPosgrados(relatedData || []);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar el posgrado",
                    );
                    console.error("Error loading posgrado:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        if (slug) {
            fetchPosgrado();
        } else {
            setLoading(false);
            setError("Slug no proporcionado");
        }

        return () => {
            isMounted = false;
        };
    }, [slug]);

    return { posgrado, relatedPosgrados, loading, error };
}
