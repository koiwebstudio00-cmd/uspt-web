import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import type { Extension } from "@/lib/types/database";

interface UseExtensionBySlugResult {
    extension: Extension | null;
    relatedExtension: Extension[];
    loading: boolean;
    error: string | null;
}

/**
 * Hook para obtener un curso de extensión por slug
 * y traer cursos relacionados por tipo.
 */
export function useExtensionBySlug(slug: string): UseExtensionBySlugResult {
    const [extension, setExtension] = useState<Extension | null>(null);
    const [relatedExtension, setRelatedExtension] = useState<Extension[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchExtensionBySlug() {
            try {
                setLoading(true);
                setError(null);

                const { data, error: fetchError } = await supabase
                    .from("extension")
                    .select("*")
                    .eq("slug", slug)
                    .single();

                if (fetchError) {
                    throw fetchError;
                }

                if (!data) {
                    if (isMounted) {
                        setError("Curso no encontrado");
                        setExtension(null);
                    }
                    return;
                }

                const extensionData = data as Extension;

                if (isMounted) {
                    setExtension(extensionData);
                }

                const { data: relatedData, error: relatedError } =
                    await supabase
                        .from("extension")
                        .select("*")
                        .eq("tipo", extensionData.tipo)
                        .neq("id", extensionData.id)
                        .limit(6);

                if (relatedError) {
                    console.error(
                        "Error fetching related extension courses:",
                        relatedError,
                    );
                } else if (isMounted) {
                    setRelatedExtension((relatedData as Extension[]) || []);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar el curso",
                    );
                    console.error("Error loading extension by slug:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        if (slug) {
            fetchExtensionBySlug();
        } else {
            setLoading(false);
            setError("Slug no proporcionado");
        }

        return () => {
            isMounted = false;
        };
    }, [slug]);

    return { extension, relatedExtension, loading, error };
}
