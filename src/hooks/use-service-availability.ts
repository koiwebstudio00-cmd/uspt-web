import { useState, useEffect } from "react";
import { getActiveServiceTypesWithServices } from "@/lib/data/services";
import type { ServiceTypeRecord } from "@/lib/types/database";

interface UseServiceAvailabilityResult {
    activeServiceTypes: ServiceTypeRecord[];
    loading: boolean;
    error: string | null;
}

/**
 * Obtiene los tipos de servicio que actualmente tienen al menos un servicio activo.
 */
export function useServiceAvailability(): UseServiceAvailabilityResult {
    const [activeServiceTypes, setActiveServiceTypes] = useState<
        ServiceTypeRecord[]
    >([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchAvailability() {
            try {
                setLoading(true);
                setError(null);

                const types = await getActiveServiceTypesWithServices();

                if (isMounted) {
                    setActiveServiceTypes(types);
                }
            } catch (err) {
                if (isMounted) {
                    setActiveServiceTypes([]);
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al verificar disponibilidad de servicios",
                    );
                    console.error("Error fetching service availability:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchAvailability();

        return () => {
            isMounted = false;
        };
    }, []);

    return { activeServiceTypes, loading, error };
}
