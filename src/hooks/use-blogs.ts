import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import type { Blog } from "@/lib/types/database";

interface UseBlogsOptions {
    status?: string; // Filtro por estado (ej: "published", "draft")
    category?: string; // Filtro por categoría
    limit?: number; // Límite de resultados
    orderBy?: "publish_date" | "created_at" | "updated_at"; // Campo para ordenar
    ascending?: boolean; // Orden ascendente/descendente
}

interface UseBlogsResult {
    blogs: Blog[];
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook genérico para obtener blogs desde Supabase
 * Permite filtrar por estado, categoría, y más opciones
 *
 * @param options - Opciones de filtrado y configuración
 * @returns Objeto con blogs, loading y error
 *
 * @example
 * // Obtener blogs publicados
 * const { blogs, loading, error } = useBlogs({ status: "published", limit: 3 });
 *
 * @example
 * // Obtener todos los blogs de una categoría
 * const { blogs, loading, error } = useBlogs({ category: "Eventos" });
 *
 * @example
 * // Obtener todos los blogs
 * const { blogs, loading, error } = useBlogs();
 */
export function useBlogs(options?: UseBlogsOptions): UseBlogsResult {
    const {
        status,
        category,
        limit,
        orderBy = "publish_date",
        ascending = false, // Por defecto, más recientes primero
    } = options || {};

    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchBlogs() {
            try {
                setLoading(true);
                setError(null);

                // Construir la query
                let query = supabase.from("blog").select("*");

                // Aplicar filtros
                if (status) {
                    query = query.eq("status", status);
                }

                if (category) {
                    query = query.contains("category", [category]);
                }

                // Aplicar ordenamiento
                query = query.order(orderBy, { ascending });

                // Aplicar límite si se especifica
                if (limit !== undefined && limit > 0) {
                    query = query.limit(limit);
                }

                const { data, error: fetchError } = await query;

                if (fetchError) {
                    throw fetchError;
                }

                if (isMounted) {
                    setBlogs((data || []) as Blog[]);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar los blogs",
                    );
                    console.error("Error loading blogs:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchBlogs();

        return () => {
            isMounted = false;
        };
    }, [status, category, limit, orderBy, ascending]);

    return { blogs, loading, error };
}
