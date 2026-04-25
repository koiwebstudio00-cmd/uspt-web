import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

interface CursadoDetalle {
    id: string;
    materia: string;
    docente: string;
    modalidad: string;
    horario_hora: string;
    orden: number;
}

interface CursadoBloque {
    id: string;
    dia: string;
    anio: number;
    cuatrimestre: number;
    sede: string;
    horarios_cursado_detalle: CursadoDetalle[];
}

interface CarreraOption {
    id: string;
    name: string;
}

interface CursadoGridProps {
    carreraId: string;
    carreraName: string;
    carreras: CarreraOption[];
    anio: number;
}

const ANIOS = [1, 2, 3, 4, 5];
const DAY_ORDER: Record<string, number> = {
    lunes: 1,
    martes: 2,
    miercoles: 3,
    miércoles: 3,
    jueves: 4,
    viernes: 5,
    sabado: 6,
    sábado: 6,
    domingo: 7,
};

function normalizeDay(day: string) {
    return day.trim().toLowerCase();
}

function anioLabel(anio: number) {
    switch (anio) {
        case 1:
            return "1er Año";
        case 2:
            return "2do Año";
        case 3:
            return "3er Año";
        case 4:
            return "4to Año";
        case 5:
            return "5to Año";
        default:
            return `${anio}° Año`;
    }
}

function cuatrimestreLabel(cuatrimestre: number) {
    if (cuatrimestre === 1) return "1er Cuatrimestre";
    if (cuatrimestre === 2) return "2do Cuatrimestre";
    return `${cuatrimestre}° Cuatrimestre`;
}

export function CursadoGrid({
    carreraId,
    carreraName,
    carreras,
    anio,
}: CursadoGridProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const [data, setData] = useState<CursadoBloque[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const apiBase = import.meta.env.VITE_API_URL || "/api/public";

    useEffect(() => {
        if (!carreraId) {
            setData([]);
            setError(null);
            setLoading(false);
            return;
        }

        let active = true;

        async function load() {
            setLoading(true);
            setError(null);
            try {
                const params = new URLSearchParams({
                    tipo: "cursado",
                    anio: String(anio),
                });

                const res = await fetch(
                    `${apiBase}/carreras/${carreraId}/horarios?${params.toString()}`,
                    { cache: "no-store" },
                );
                const contentType = res.headers.get("content-type") || "";
                const payload = contentType.includes("application/json")
                    ? await res.json()
                    : null;

                if (!res.ok) {
                    throw new Error(
                        payload?.error ?? "No se pudieron cargar los horarios",
                    );
                }

                if (active) setData(Array.isArray(payload?.data) ? payload.data : []);
            } catch (err) {
                if (active)
                    setError(
                        err instanceof Error ? err.message : "Error inesperado",
                    );
            } finally {
                if (active) setLoading(false);
            }
        }

        if (carreraId) {
            load();
        }

        return () => {
            active = false;
        };
    }, [anio, carreraId, apiBase]);

    const grupos = useMemo(() => {
        const map = new Map<
            string,
            { cuatrimestre: number; sede: string; bloques: CursadoBloque[] }
        >();

        data.forEach((item) => {
            const key = `${item.cuatrimestre}|${item.sede || ""}`;
            const group = map.get(key) ?? {
                cuatrimestre: item.cuatrimestre,
                sede: item.sede,
                bloques: [],
            };
            group.bloques.push({
                ...item,
                horarios_cursado_detalle: [...item.horarios_cursado_detalle].sort(
                    (a, b) => a.orden - b.orden,
                ),
            });
            map.set(key, group);
        });

        return Array.from(map.values())
            .map((group) => ({
                ...group,
                bloques: [...group.bloques].sort((a, b) => {
                    const dayA = DAY_ORDER[normalizeDay(a.dia)] ?? 99;
                    const dayB = DAY_ORDER[normalizeDay(b.dia)] ?? 99;
                    if (dayA !== dayB) return dayA - dayB;
                    return a.dia.localeCompare(b.dia);
                }),
            }))
            .sort((a, b) => {
                if (a.cuatrimestre !== b.cuatrimestre)
                    return a.cuatrimestre - b.cuatrimestre;
                return a.sede.localeCompare(b.sede);
            });
    }, [data]);

    const updateParams = (nextCarreraId: string, nextAnio: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("carreraId", nextCarreraId);
        params.set("anio", String(nextAnio));
        navigate(`${location.pathname}?${params.toString()}`);
    };

    const handleCarreraChange = (value: string) => {
        updateParams(value, anio);
    };

    const handleAnioChange = (value: string) => {
        const nextAnio = Number(value);
        updateParams(carreraId, Number.isFinite(nextAnio) ? nextAnio : 1);
    };

    return (
        <div className="space-y-6">
            <section className="pt-3">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-1">
                        <span className="block text-sm font-semibold uppercase tracking-wide text-zinc-800">
                            Carrera:
                        </span>
                        <select
                            value={carreraId}
                            onChange={(e) =>
                                handleCarreraChange(e.target.value)
                            }
                            className="h-10 w-full border border-zinc-500 bg-white px-3 text-base outline-none focus:ring-1 focus:ring-zinc-500"
                        >
                            {carreras.map((carrera) => (
                                <option key={carrera.id} value={carrera.id}>
                                    {carrera.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-1">
                        <span className="block text-sm font-semibold uppercase tracking-wide text-zinc-800">
                            Año de Cursado:
                        </span>
                        <select
                            value={String(anio)}
                            onChange={(e) => handleAnioChange(e.target.value)}
                            className="h-10 w-full border border-zinc-500 bg-white px-3 text-base outline-none focus:ring-1 focus:ring-zinc-500"
                        >
                            {ANIOS.map((item) => (
                                <option key={item} value={item}>
                                    {anioLabel(item)}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </section>

            {loading && (
                <div className="py-12 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    <p className="ml-3 text-sm text-muted-foreground">
                        Cargando horarios...
                    </p>
                </div>
            )}

            {!loading && error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-sm text-red-600">{error}</p>
                </div>
            )}

            {!loading && !error && grupos.length === 0 && (
                <div className="py-12 text-center bg-zinc-50 border border-dashed border-zinc-200 rounded-lg">
                    <p className="text-muted-foreground">
                        No hay horarios cargados para el año seleccionado.
                    </p>
                </div>
            )}

            {!loading && !error && grupos.length > 0 && (
                <div className="space-y-8">
                    {grupos.map((grupo) => {
                        const titulo = `${carreraName} - ${anioLabel(anio)} - ${cuatrimestreLabel(
                            grupo.cuatrimestre,
                        )}${grupo.sede ? ` - ${grupo.sede}` : ""}`;

                        return (
                            <div
                                key={`${grupo.cuatrimestre}-${grupo.sede || "sin-sede"}`}
                                className="space-y-3"
                            >
                                <div className="border border-emerald-700 bg-violet-200 py-3 px-4 text-center text-lg font-bold text-zinc-900 shadow-sm rounded-t-lg">
                                    {titulo}
                                </div>

                                <div className="overflow-x-auto border border-emerald-700 bg-white rounded-b-lg shadow-md">
                                    <table className="min-w-full border-collapse text-sm">
                                        <thead>
                                            <tr className="bg-violet-100 border-b border-emerald-700">
                                                <th className="w-[120px] border-r border-emerald-700 px-3 py-3 text-center font-bold text-zinc-800 uppercase tracking-wider">
                                                    Día
                                                </th>
                                                <th className="border-r border-emerald-700 px-4 py-3 text-left font-bold text-zinc-800 uppercase tracking-wider">
                                                    Materia
                                                </th>
                                                <th className="w-[180px] border-r border-emerald-700 px-3 py-3 text-center font-bold text-zinc-800 uppercase tracking-wider">
                                                    Horario
                                                </th>
                                                <th className="w-[150px] border-r border-emerald-700 px-3 py-3 text-center font-bold text-zinc-800 uppercase tracking-wider">
                                                    Modalidad
                                                </th>
                                                <th className="px-4 py-3 text-left font-bold text-zinc-800 uppercase tracking-wider">
                                                    Docente
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {grupo.bloques.map((bloque) => {
                                                const detalles =
                                                    bloque.horarios_cursado_detalle;

                                                if (!detalles.length) {
                                                    return (
                                                        <tr
                                                            key={bloque.id}
                                                            className="border-b border-zinc-200"
                                                        >
                                                            <td className="border-r border-emerald-700 bg-violet-100 px-3 py-4 text-center align-middle font-bold text-zinc-800 uppercase text-xs">
                                                                {bloque.dia}
                                                            </td>
                                                            <td
                                                                colSpan={4}
                                                                className="px-6 py-4 text-center text-zinc-400 italic bg-white"
                                                            >
                                                                Sin materias
                                                                cargadas
                                                            </td>
                                                        </tr>
                                                    );
                                                }

                                                return detalles.map(
                                                    (detalle, index) => (
                                                        <tr
                                                            key={detalle.id}
                                                            className="border-b border-zinc-200 transition-colors hover:bg-amber-100"
                                                        >
                                                            {index === 0 && (
                                                                <td
                                                                    rowSpan={
                                                                        detalles.length
                                                                    }
                                                                    className="border-r border-emerald-700 bg-violet-100 px-3 py-3 text-center align-middle font-bold text-zinc-800 uppercase text-xs"
                                                                >
                                                                    {bloque.dia}
                                                                </td>
                                                            )}
                                                            <td className="border-r border-zinc-200 px-4 py-3 text-zinc-900 font-medium bg-amber-50/30">
                                                                {
                                                                    detalle.materia
                                                                }
                                                            </td>
                                                            <td className="border-r border-zinc-200 px-3 py-3 text-center text-zinc-700 bg-amber-50/40">
                                                                {detalle.horario_hora ||
                                                                    "-"}
                                                            </td>
                                                            <td className="border-r border-zinc-200 px-3 py-3 text-center bg-amber-50/50">
                                                                <span
                                                                    className={`px-2 py-1 rounded text-xs font-semibold ${
                                                                        detalle.modalidad
                                                                            ?.toLowerCase()
                                                                            .includes(
                                                                                "presencial",
                                                                            )
                                                                            ? "bg-green-100 text-green-800"
                                                                            : "bg-blue-100 text-blue-800"
                                                                    }`}
                                                                >
                                                                    {detalle.modalidad ||
                                                                        "-"}
                                                                </span>
                                                            </td>
                                                            <td className="px-4 py-3 text-zinc-600 italic bg-amber-50/20">
                                                                {detalle.docente ||
                                                                    "-"}
                                                            </td>
                                                        </tr>
                                                    ),
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
