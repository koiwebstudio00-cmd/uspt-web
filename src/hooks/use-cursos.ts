import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import type { Course } from "@/lib/types/database";

// Interfaz para la categoría parcial que viene del JOIN
interface CourseCategoryPartial {
    id: number;
    name: string;
    moodle_category_id: number;
}

export interface CourseWithCategory extends Course {
    courseCategories: CourseCategoryPartial;
}

interface UseCursosResult {
    cursos: CourseWithCategory[];
    loading: boolean;
    error: string | null;
    count: number | null;
}

/**
 * Custom hook para obtener cursos desde Supabase según la categoría
 *
 * @param category Nombre de la categoría a buscar (por defecto "Cursos | Extensión")
 * @returns Objeto con cursos, loading, error y count
 *
 * @example
 * const { cursos, loading, error, count } = useCursos("Cursos | Posgrado");
 */
export function useCursos(category: string = "Cursos | Extensión"): UseCursosResult {
    const [cursos, setCursos] = useState<CourseWithCategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchCursos() {
            try {
                setLoading(true);
                setError(null);

                // Query exacta como la especificada por el usuario
                const query = supabase
                    .from("courses")
                    .select(
                        `
                        *,
                        courseCategories!inner(
                            id,
                            name,
                            moodle_category_id
                        )
                    `,
                        { count: "exact" },
                    )
                    .ilike("courseCategories.name", `${category}%`)
                    .order("last_sync_at", { ascending: false });

                const {
                    data,
                    error: fetchError,
                    count: totalCount,
                } = await query;

                if (fetchError) {
                    throw fetchError;
                }

                if (isMounted) {
                    setCursos((data as CourseWithCategory[]) || []);
                    setCount(totalCount);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar los cursos",
                    );
                    console.error("Error loading cursos:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchCursos();

        return () => {
            isMounted = false;
        };
    }, [category]);

    return { cursos, loading, error, count };
}
