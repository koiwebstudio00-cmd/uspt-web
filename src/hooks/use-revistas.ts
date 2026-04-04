import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import type { RevistaCientifica } from "@/lib/types/database";

interface UseRevistasResult {
    revistas: RevistaCientifica[];
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook to fetch all active revistas_cientificas from Supabase,
 * ordered by sort_order ascending.
 */
export function useRevistas(): UseRevistasResult {
    const [revistas, setRevistas] = useState<RevistaCientifica[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchRevistas() {
            try {
                setLoading(true);
                setError(null);

                const { data, error: fetchError } = await supabase
                    .from("revistas_cientificas")
                    .select("*")
                    .eq("is_active", true);
                if (fetchError) throw fetchError;

                if (isMounted) {
                    setRevistas((data as RevistaCientifica[]) || []);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar las revistas",
                    );
                    console.error("Error loading revistas_cientificas:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchRevistas();

        return () => {
            isMounted = false;
        };
    }, []);

    return { revistas, loading, error };
}
