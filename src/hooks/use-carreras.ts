import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import type { Carrera, Instituto } from "@/lib/types/database";

interface CarreraWithInstituto extends Carrera {
    instituto: Instituto;
}

interface UseCarrerasOptions {
    modalidad?: string; // Filtro opcional por modalidad (ej: "a distancia", "presencial")
    institutoId?: number; // Filtro opcional por instituto
    includeInstituto?: boolean; // Si debe incluir datos del instituto (JOIN)
    orderBy?: "name" | "created_at"; // Campo para ordenar
    ascending?: boolean; // Orden ascendente/descendente
}

interface UseCarrerasResult {
    carreras: Carrera[] | CarreraWithInstituto[];
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook genérico para obtener carreras desde Supabase
 * Permite filtrar por modalidad, instituto, y más opciones
 *
 * @param options - Opciones de filtrado y configuración
 * @returns Objeto con carreras, loading y error
 *
 * @example
 * // Obtener todas las carreras a distancia
 * const { carreras, loading, error } = useCarreras({ modalidad: "a distancia" });
 *
 * @example
 * // Obtener carreras de un instituto específico
 * const { carreras, loading, error } = useCarreras({ institutoId: 1 });
 *
 * @example
 * // Obtener todas las carreras
 * const { carreras, loading, error } = useCarreras();
 */
export function useCarreras(options?: UseCarrerasOptions): UseCarrerasResult {
    const {
        modalidad,
        institutoId,
        includeInstituto = false,
        orderBy = "name",
        ascending = true,
    } = options || {};

    const [carreras, setCarreras] = useState<
        Carrera[] | CarreraWithInstituto[]
    >([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchCarreras() {
            try {
                setLoading(true);
                setError(null);

                // Construir la query dependiendo si se incluye instituto o no
                if (includeInstituto) {
                    // Query con JOIN
                    let query = supabase.from("carreras").select(
                        `
                            *,
                            instituto:institutos!inner(*)
                        `
                    );

                    // Aplicar filtros
                    if (modalidad) {
                        query = query.eq("modalidad", modalidad);
                    }

                    if (institutoId !== undefined) {
                        query = query.eq("instituto_id", institutoId);
                    }

                    // Aplicar ordenamiento
                    query = query.order(orderBy, { ascending });

                    const { data, error: fetchError } = await query;

                    if (fetchError) {
                        throw fetchError;
                    }

                    if (isMounted) {
                        setCarreras(data || []);
                    }
                } else {
                    // Query sin JOIN
                    let query = supabase.from("carreras").select("*");

                    // Aplicar filtros
                    if (modalidad) {
                        query = query.eq("modalidad", modalidad);
                    }

                    if (institutoId !== undefined) {
                        query = query.eq("instituto_id", institutoId);
                    }

                    // Aplicar ordenamiento
                    query = query.order(orderBy, { ascending });

                    const { data, error: fetchError } = await query;

                    if (fetchError) {
                        throw fetchError;
                    }

                    if (isMounted) {
                        setCarreras(data || []);
                    }
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar las carreras"
                    );
                    console.error("Error loading carreras:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchCarreras();

        return () => {
            isMounted = false;
        };
    }, [modalidad, institutoId, includeInstituto, orderBy, ascending]);

    return { carreras, loading, error };
}
