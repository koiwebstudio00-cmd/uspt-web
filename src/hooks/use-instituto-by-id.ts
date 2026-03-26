import { useState, useEffect } from "react";
import { getInstitutoById, getCarrerasByInstituto } from "@/lib/data";
import type { Instituto, Carrera } from "@/lib/types/database";

interface UseInstitutoByIdResult {
    instituto: Instituto | null;
    carreras: Carrera[];
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook to fetch an instituto and its related carreras from Supabase
 * @param institutoId - The ID of the instituto to fetch
 */
export function useInstitutoById(institutoId: number): UseInstitutoByIdResult {
    const [instituto, setInstituto] = useState<Instituto | null>(null);
    const [carreras, setCarreras] = useState<Carrera[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchInstitutoData() {
            try {
                setLoading(true);
                setError(null);

                // Fetch instituto and carreras in parallel for better performance
                const [institutoData, carrerasData] = await Promise.all([
                    getInstitutoById(institutoId),
                    getCarrerasByInstituto(institutoId),
                ]);

                if (isMounted) {
                    if (!institutoData) {
                        setError("Instituto no encontrado");
                        setInstituto(null);
                        setCarreras([]);
                    } else {
                        setInstituto(institutoData);
                        setCarreras(carrerasData);
                    }
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar datos del instituto"
                    );
                    console.error("Error loading instituto data:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchInstitutoData();

        return () => {
            isMounted = false;
        };
    }, [institutoId]);

    return { instituto, carreras, loading, error };
}
