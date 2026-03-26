import { useState, useEffect } from "react";
import { getServicesByType } from "@/lib/data";
import type { Service } from "@/lib/types/database";

interface UseDiaEstudianteResult {
    service: Service | null;
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook to fetch Día del Estudiante service from Supabase
 */
export function useDiaEstudiante(): UseDiaEstudianteResult {
    const [service, setService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchDiaEstudianteService() {
            try {
                setLoading(true);
                setError(null);

                // Fetch dia_del_estudiante type services
                const data = await getServicesByType("dia_del_estudiante");

                if (isMounted) {
                    // Get the first (and should be only) dia del estudiante service
                    setService(data[0] || null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar servicio"
                    );
                    console.error("Error loading dia estudiante service:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchDiaEstudianteService();

        return () => {
            isMounted = false;
        };
    }, []);

    return { service, loading, error };
}
