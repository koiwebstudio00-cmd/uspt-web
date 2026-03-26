import { useState, useEffect } from "react";
import { getServicesByType } from "@/lib/data";
import type { Service } from "@/lib/types/database";

interface UseReservaServicesResult {
    reservaPersonal: Service | null;
    reservaGrupal: Service | null;
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook to fetch Reserva San Pablo services from Supabase
 * Fetches both personal and grupal reservation types
 */
export function useReservaServices(): UseReservaServicesResult {
    const [reservaPersonal, setReservaPersonal] = useState<Service | null>(
        null
    );
    const [reservaGrupal, setReservaGrupal] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchReservaServices() {
            try {
                setLoading(true);
                setError(null);

                // Fetch all reserva type services
                const data = await getServicesByType("reserva");

                if (isMounted) {
                    // Find personal and grupal reservations by codigo or nombre
                    const personal = data.find(
                        (s) =>
                            s.codigo.toLowerCase().includes("personal") ||
                            s.nombre.toLowerCase().includes("personal")
                    );
                    const grupal = data.find(
                        (s) =>
                            s.codigo.toLowerCase().includes("grupal") ||
                            s.nombre.toLowerCase().includes("grupal")
                    );

                    setReservaPersonal(personal || null);
                    setReservaGrupal(grupal || null);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar servicios de reserva"
                    );
                    console.error("Error loading reserva services:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchReservaServices();

        return () => {
            isMounted = false;
        };
    }, []);

    return { reservaPersonal, reservaGrupal, loading, error };
}
