import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import type { Extension } from "@/lib/types/database";
import { MAX_VALUE_REG } from "recharts/types/util/ChartUtils";

interface UseExtensionResult {
    extension: Extension[];
    loading: boolean;
    error: string | null;
}

/**
 * Hook para obtener registros desde la tabla extension.
 * @param tipo Filtro opcional por tipo
 */
export function useExtension(tipo?: string): UseExtensionResult {
    const [extension, setExtension] = useState<Extension[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchExtension() {
            try {
                setLoading(true);
                setError(null);

                let query = supabase
                    .from("extension")
                    .select("*")
                    .order("created_at", { ascending: false });

                if (tipo) {
                    query = query.eq("tipo", tipo);
                }

                const { data, error: fetchError } = await query;
                
                if (fetchError) {
                    throw fetchError;
                }

                if (isMounted) {
                    setExtension((data as Extension[]) || []);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar cursos de extensión",
                    );
                    console.error("Error loading extension:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchExtension();

        return () => {
            isMounted = false;
        };
    }, [tipo]);

    return { extension, loading, error };
}
