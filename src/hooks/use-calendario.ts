import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";

export interface CalendarioAcademico {
    id: string;
    tipo: string;
    titulo: string;
    archivo_url: string;
    notas: {
        periodo?: string;
        descripcion?: string;
        anio_lectivo?: string;
    } | null;
}

export function useCalendario() {
    const [calendario, setCalendario] = useState<CalendarioAcademico | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchCalendario() {
            try {
                setLoading(true);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const { data, error: fetchError } = await (supabase.from("utilidades" as any) as any)
                    .select("*")
                    .eq("tipo", "calendario_academico")
                    .eq("activo", true)
                    .maybeSingle();

                if (fetchError) throw fetchError;
                
                if (isMounted) {
                    setCalendario(data as CalendarioAcademico);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : "Error al cargar el calendario");
                    setLoading(false);
                }
            }
        }

        fetchCalendario();

        return () => {
            isMounted = false;
        };
    }, []);

    return { calendario, loading, error };
}
