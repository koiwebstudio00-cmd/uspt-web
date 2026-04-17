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
                    const normalize = (value: string) =>
                        value
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .toLowerCase();

                    // Find personal and grupal reservations by codigo or nombre
                    const personal = data.find(
                        (s) =>
                            normalize(s.codigo).includes("personal") ||
                            normalize(s.nombre).includes("personal") ||
                            normalize(s.codigo).includes("individual") ||
                            normalize(s.nombre).includes("individual")
                    );
                    const grupal = data.find(
                        (s) =>
                            normalize(s.codigo).includes("grupal") ||
                            normalize(s.nombre).includes("grupal") ||
                            normalize(s.codigo).includes("grupo") ||
                            normalize(s.nombre).includes("grupo")
                    );

                    if (personal || grupal) {
                        setReservaPersonal(personal || null);
                        setReservaGrupal(grupal || null);
                        return;
                    }

                    // Fallback defensivo si nombres/códigos no siguen convención
                    if (data.length === 1) {
                        setReservaPersonal(data[0]);
                        setReservaGrupal(null);
                        return;
                    }

                    if (data.length >= 2) {
                        const sortedByPrice = [...data].sort(
                            (a, b) => a.precio - b.precio,
                        );
                        setReservaPersonal(sortedByPrice[0] || null);
                        setReservaGrupal(sortedByPrice[1] || null);
                        return;
                    }

                    setReservaPersonal(null);
                    setReservaGrupal(null);
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
