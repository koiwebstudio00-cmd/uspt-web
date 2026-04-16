import { Link, useSearchParams } from "react-router-dom";
import { useCarreras } from "@/hooks/use-carreras";
import { CursadoGrid } from "./cursado-grid";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function HorariosPage() {
    const [searchParams] = useSearchParams();
    const { carreras, loading, error } = useCarreras();

    if (loading) {
        return (
            <div className="flex justify-center items-center p-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <span className="ml-3 text-muted-foreground">
                    Cargando carreras...
                </span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-8 text-center text-destructive">
                <p>Error: {error}</p>
            </div>
        );
    }

    if (!carreras || carreras.length === 0) {
        return (
            <div className="p-8 text-center text-muted-foreground">
                <p>No se encontraron carreras disponibles.</p>
            </div>
        );
    }

    const requestedCarreraId = searchParams.get("carreraId")?.trim();
    const carreraSeleccionada =
        carreras.find((carrera) => carrera.id === requestedCarreraId) ??
        carreras[0];

    const requestedAnio = Number(searchParams.get("anio"));
    const anioSeleccionado =
        Number.isInteger(requestedAnio) &&
        requestedAnio >= 1 &&
        requestedAnio <= 5
            ? requestedAnio
            : 1;

    return (
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-5">
            <CursadoGrid
                carreraId={carreraSeleccionada.id}
                carreraName={carreraSeleccionada.name}
                carreras={carreras.map((c) => ({ id: c.id, name: c.name }))}
                anio={anioSeleccionado}
            />
        </main>
    );
}
