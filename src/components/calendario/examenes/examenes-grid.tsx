import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

interface ExamenDetalle {
    id: string;
    materia: string;
    docente: string;
    modalidad: string;
    horario_hora: string;
    orden: number;
}

interface ExamenTurno {
    id: string;
    dia: string;
    mes: string;
    sede: string;
    horarios_examenes_detalle: ExamenDetalle[];
}

interface CarreraOption {
    id: string;
    name: string;
}

interface ExamenesGridProps {
    carreraId: string;
    carreraName: string;
    carreras: CarreraOption[];
    mes?: string;
}

export function ExamenesGrid({
    carreraId,
    carreraName,
    carreras,
    mes,
}: ExamenesGridProps) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [searchParams] = useSearchParams();

    const [data, setData] = useState<ExamenTurno[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let active = true;

        async function load() {
            setLoading(true);
            setError(null);
            try {
                const params = new URLSearchParams({ tipo: "examenes" });
                if (mes) params.set("mes", mes);

                const apiBase = import.meta.env.VITE_API_URL || "/api/public";
                const res = await fetch(
                    `${apiBase}/carreras/${carreraId}/horarios?${params.toString()}`,
                );
                const json = await res.json();
                if (!res.ok) {
                    throw new Error(
                        json.error ?? "No se pudieron cargar los exámenes",
                    );
                }

                if (active) setData(json.data ?? []);
            } catch (err) {
                if (active)
                    setError(
                        err instanceof Error ? err.message : "Error inesperado",
                    );
            } finally {
                if (active) setLoading(false);
            }
        }

        load();
        return () => {
            active = false;
        };
    }, [carreraId, mes]);

    const bloques = useMemo(() => data, [data]);

    const mesSeleccionado = useMemo(() => {
        if (mes && mes.trim()) return mes.trim();
        return bloques[0]?.mes?.trim() || "";
    }, [bloques, mes]);

    const encabezado = mesSeleccionado
        ? `${carreraName} - Llamado mes de ${mesSeleccionado}`
        : carreraName;

    const handleCarreraChange = (nextCarreraId: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("carreraId", nextCarreraId);
        navigate(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="space-y-4">
            <section className="pt-3">
                <label className="space-y-1">
                    <span className="block text-sm font-semibold uppercase tracking-wide text-zinc-800">
                        Exámenes de la Carrera:
                    </span>
                    <select
                        value={carreraId}
                        onChange={(e) => handleCarreraChange(e.target.value)}
                        className="h-10 w-full max-w-xl border border-zinc-500 bg-white px-3 text-base"
                    >
                        {carreras.map((carrera) => (
                            <option key={carrera.id} value={carrera.id}>
                                {carrera.name}
                            </option>
                        ))}
                    </select>
                </label>
            </section>

            {loading && (
                <p className="text-sm text-muted-foreground">
                    Cargando exámenes...
                </p>
            )}

            {!loading && error && (
                <p className="text-sm text-destructive">{error}</p>
            )}

            {!loading && !error && bloques.length === 0 && (
                <p className="text-sm text-muted-foreground">
                    No hay exámenes cargados.
                </p>
            )}

            {!loading && !error && bloques.length > 0 && (
                <div className="overflow-x-auto border border-emerald-700 bg-white">
                    <table className="min-w-full border-collapse text-sm">
                        <thead>
                            <tr>
                                <th
                                    colSpan={5}
                                    className="border border-emerald-700 bg-emerald-300 py-2 px-4 text-center text-lg font-medium"
                                >
                                    {encabezado}
                                </th>
                            </tr>
                            <tr className="bg-emerald-200">
                                <th className="w-[170px] border border-emerald-700 py-2 px-3 text-center font-medium">
                                    Día
                                </th>
                                <th className="w-[260px] border border-emerald-700 py-2 px-3 text-center font-medium">
                                    Materia
                                </th>
                                <th className="w-[250px] border border-emerald-700 py-2 px-3 text-center font-medium">
                                    Horario
                                </th>
                                <th className="w-[170px] border border-emerald-700 py-2 px-3 text-center font-medium">
                                    Modalidad
                                </th>
                                <th className="w-[280px] border border-emerald-700 py-2 px-3 text-center font-medium">
                                    Docente
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {bloques.map((turno) => {
                                const detalles =
                                    turno.horarios_examenes_detalle;

                                if (!detalles.length) {
                                    return (
                                        <tr key={turno.id}>
                                            <td className="border border-emerald-700 bg-emerald-200 px-3 py-3 text-center align-middle">
                                                {turno.dia}
                                            </td>
                                            <td
                                                colSpan={4}
                                                className="border border-emerald-700 px-3 py-3 text-center text-muted-foreground"
                                            >
                                                Sin mesas cargadas
                                            </td>
                                        </tr>
                                    );
                                }

                                return detalles.map((detalle, index) => (
                                    <tr
                                        key={detalle.id}
                                        className="odd:bg-amber-100 even:bg-orange-100"
                                    >
                                        {index === 0 && (
                                            <td
                                                rowSpan={detalles.length}
                                                className="border border-emerald-700 bg-emerald-200 px-3 py-2 text-center align-middle font-medium"
                                            >
                                                {turno.dia}
                                            </td>
                                        )}
                                        <td className="border border-emerald-700 px-3 py-2 text-center">
                                            {detalle.materia}
                                        </td>
                                        <td className="border border-emerald-700 px-3 py-2 text-center">
                                            {detalle.horario_hora || "-"}
                                        </td>
                                        <td className="border border-emerald-700 px-3 py-2 text-center">
                                            {detalle.modalidad || "-"}
                                        </td>
                                        <td className="border border-emerald-700 px-3 py-2 text-center">
                                            {detalle.docente || "-"}
                                        </td>
                                    </tr>
                                ));
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
