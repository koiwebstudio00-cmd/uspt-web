import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import type { CourseWithCategory } from "./use-cursos";

interface UseCursoByIdResult {
    curso: CourseWithCategory | null;
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook to fetch a single course by its ID from Supabase
 * @param id - The ID of the course to fetch
 */
export function useCursoById(id: string | number): UseCursoByIdResult {
    const [curso, setCurso] = useState<CourseWithCategory | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchCurso() {
            try {
                setLoading(true);
                setError(null);

                const { data, error: fetchError } = await supabase
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
                    )
                    .eq("id", Number(id))
                    .single();

                if (fetchError) {
                    throw fetchError;
                }

                if (isMounted) {
                    setCurso(data as CourseWithCategory);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar el curso",
                    );
                    console.error("Error loading curso:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        if (id) {
            fetchCurso();
        } else {
            setLoading(false);
        }

        return () => {
            isMounted = false;
        };
    }, [id]);

    return { curso, loading, error };
}
