import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";
import type { Blog } from "@/lib/types/database";

interface UseBlogBySlugResult {
    blog: Blog | null;
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook para obtener un blog específico por su slug desde Supabase
 *
 * @param slug - El slug del blog a obtener
 * @returns Objeto con blog, loading y error
 *
 * @example
 * const { blog, loading, error } = useBlogBySlug("mi-primer-blog");
 */
export function useBlogBySlug(slug: string | undefined): UseBlogBySlugResult {
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchBlog() {
            // Si no hay slug, no hacer nada
            if (!slug) {
                if (isMounted) {
                    setLoading(false);
                    setError("No se proporcionó un slug");
                }
                return;
            }

            try {
                setLoading(true);
                setError(null);
                setBlog(null);

                // Consultar el blog por slug
                const { data, error: fetchError } = await supabase
                    .from("blog")
                    .select("*")
                    .eq("slug", slug)
                    .single();

                if (fetchError) {
                    throw fetchError;
                }

                if (isMounted) {
                    setBlog(data as Blog);
                }
            } catch (err) {
                if (isMounted) {
                    // Si el error es "not found", mostrar mensaje específico
                    if (
                        err instanceof Error &&
                        err.message.includes("not found")
                    ) {
                        setError("Blog no encontrado");
                    } else {
                        setError(
                            err instanceof Error
                                ? err.message
                                : "Error al cargar el blog",
                        );
                    }
                    console.error("Error loading blog:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchBlog();

        return () => {
            isMounted = false;
        };
    }, [slug]);

    return { blog, loading, error };
}
