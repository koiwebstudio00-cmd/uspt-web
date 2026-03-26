import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import type { Posgrado, Instituto, TipoPosgrado } from "@/lib/types/database";

interface PosgradoWithInstituto extends Posgrado {
    instituto: Instituto;
}

interface UsePosgradosResult {
    posgrados: PosgradoWithInstituto[];
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook to fetch all posgrados with their institutos from Supabase
 * @param tipo - Optional filter by tipo (Maestría, Especialización, Posgrado)
 */
export function usePosgrados(tipo?: TipoPosgrado): UsePosgradosResult {
    const [posgrados, setPosgrados] = useState<PosgradoWithInstituto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchPosgrados() {
            try {
                setLoading(true);
                setError(null);

                // Build query with instituto JOIN
                let query = supabase
                    .from("posgrados")
                    .select(
                        `
            *,
            instituto:institutos!inner(*)
          `,
                    )
                    .order("created_at", { ascending: false });

                // Apply tipo filter if provided
                if (tipo) {
                    query = query.eq("tipo", tipo);
                }

                const { data, error: fetchError } = await query;

                if (fetchError) {
                    throw fetchError;
                }

                if (isMounted) {
                    setPosgrados((data as PosgradoWithInstituto[]) || []);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar los posgrados",
                    );
                    console.error("Error loading posgrados:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchPosgrados();

        return () => {
            isMounted = false;
        };
    }, [tipo]);

    return { posgrados, loading, error };
}
