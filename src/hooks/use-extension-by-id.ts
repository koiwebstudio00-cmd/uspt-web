import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import type { Extension } from "@/lib/types/database";

interface UseExtensionByIdResult {
    extension: Extension | null;
    loading: boolean;
    error: string | null;
}

export function useExtensionById(id: string): UseExtensionByIdResult {
    const [extension, setExtension] = useState<Extension | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchExtensionById() {
            try {
                setLoading(true);
                setError(null);

                if (!id) {
                    throw new Error("ID de curso inválido");
                }

                const { data, error: fetchError } = await supabase
                    .from("extension")
                    .select("*")
                    .eq("id", id)
                    .single();

                if (fetchError) {
                    throw fetchError;
                }

                if (!data) {
                    throw new Error("Curso no encontrado");
                }

                if (isMounted) {
                    setExtension(data as Extension);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar el curso",
                    );
                    setExtension(null);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchExtensionById();

        return () => {
            isMounted = false;
        };
    }, [id]);

    return { extension, loading, error };
}
