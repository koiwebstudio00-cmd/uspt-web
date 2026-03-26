import { useState, useEffect } from "react";
import { getServicesByType } from "@/lib/data";
import type { Service } from "@/lib/types/database";

interface UseTramitesResult {
    tramites: Service[];
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook to fetch tramites from Supabase
 * Optimized with caching and error handling
 */
export function useTramites(): UseTramitesResult {
    const [tramites, setTramites] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchTramites() {
            try {
                setLoading(true);
                setError(null);

                const data = await getServicesByType("tramite");

                if (isMounted) {
                    setTramites(data);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar trámites"
                    );
                    console.error("Error loading tramites:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchTramites();

        return () => {
            isMounted = false;
        };
    }, []);

    return { tramites, loading, error };
}
