import { useState, useEffect } from "react";
import { useCarreras } from "./use-carreras";

export interface HorarioDetalle {
    id: string;
    materia: string;
    docente: string;
    modalidad: string;
    horario_hora: string;
    orden: number;
}

export interface HorarioBloque {
    id: string;
    dia: string;
    anio?: number;
    cuatrimestre?: number;
    mes?: string;
    sede: string;
    horarios_cursado_detalle?: HorarioDetalle[];
    horarios_examenes_detalle?: HorarioDetalle[];
}

interface UseHorariosProps {
    carreraId?: string;
    tipo: "cursado" | "examenes";
    anio?: number;
    mes?: string;
}

export function useHorarios({ carreraId, tipo, anio, mes }: UseHorariosProps) {
    const { carreras, loading: loadingCarreras } = useCarreras();
    const [data, setData] = useState<HorarioBloque[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const apiBase = import.meta.env.VITE_API_URL;

    useEffect(() => {
        if (!carreraId) return;

        let active = true;

        async function load() {
            setLoading(true);
            setError(null);
            try {
                const params = new URLSearchParams({ tipo });
                if (anio) params.set("anio", String(anio));
                if (mes) params.set("mes", mes);

                const res = await fetch(
                    `${apiBase}/carreras/${carreraId}/horarios?${params.toString()}`,
                    { cache: "no-store" }
                );
                
                if (!res.ok) {
                    const json = await res.json();
                    throw new Error(json.error ?? "No se pudieron cargar los horarios");
                }

                const json = await res.json();
                if (active) setData(json.data ?? []);
            } catch (err) {
                if (active) setError(err instanceof Error ? err.message : "Error inesperado");
            } finally {
                if (active) setLoading(false);
            }
        }

        load();
        return () => {
            active = false;
        };
    }, [carreraId, tipo, anio, mes, apiBase]);

    return { data, loading, error, carreras, loadingCarreras };
}
