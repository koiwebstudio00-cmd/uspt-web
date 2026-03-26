import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import { ServiceType } from "@/lib/types/database";

interface ServiceAvailability {
    tramites: boolean;
    reserva: boolean;
    diaEstudiante: boolean;
}

interface UseServiceAvailabilityResult {
    availability: ServiceAvailability;
    loading: boolean;
    error: string | null;
}

const DEFAULT_AVAILABILITY: ServiceAvailability = {
    tramites: false,
    reserva: false,
    diaEstudiante: false,
};

/**
 * Hook optimizado para verificar la disponibilidad de cada tipo de servicio.
 *
 * Realiza una única query a Supabase proyectando solo el campo `tipo`,
 * luego agrupa en cliente para derivar si cada tipo tiene al menos 1 servicio activo.
 *
 * Esto reemplaza el uso de 3 hooks separados (useTramites, useReservaServices,
 * useDiaEstudiante) cuando solo se necesita saber si el tipo está disponible.
 */
export function useServiceAvailability(): UseServiceAvailabilityResult {
    const [availability, setAvailability] =
        useState<ServiceAvailability>(DEFAULT_AVAILABILITY);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchAvailability() {
            try {
                setLoading(true);
                setError(null);

                // Una sola query, solo el campo `tipo` — mínima transferencia de datos
                const { data, error: queryError } = await supabase
                    .from("services")
                    .select("tipo")
                    .eq("is_active", true);

                if (queryError) throw queryError;

                if (isMounted) {
                    const rows = data ?? [];

                    // Contar servicios activos por tipo en cliente
                    const counts: Record<string, number> = {};
                    for (const row of rows) {
                        counts[row.tipo] = (counts[row.tipo] ?? 0) + 1;
                    }

                    setAvailability({
                        tramites: (counts[ServiceType.TRAMITE] ?? 0) > 0,
                        reserva: (counts[ServiceType.RESERVA] ?? 0) > 0,
                        diaEstudiante:
                            (counts[ServiceType.DIA_DEL_ESTUDIANTE] ?? 0) > 0,
                    });
                }
            } catch (err) {
                if (isMounted) {
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

    return { availability, loading, error };
}
