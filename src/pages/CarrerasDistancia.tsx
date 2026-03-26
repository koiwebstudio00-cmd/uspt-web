import { useState } from "react";
import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDebounce } from "@/hooks/use-debounce";
import { useCarreras } from "@/hooks/use-carreras";
import {
    Search,
    Filter,
    Users,
    Loader2,
    AlertCircle,
    Monitor,
    Clock,
    Award,
    Globe,
    MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import CtaPage from "@/components/CtaPage";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import InfoAdd from "@/components/InfoAdd";

const CarrerasDistancia = () => {
    const [filtroNivel, setFiltroNivel] = useState("todos");
    const [busqueda, setBusqueda] = useState("");

    // Fetch carreras from Supabase with modalidad "a distancia"
    const {
        carreras: carrerasFromDB,
        loading,
        error,
    } = useCarreras({
        modalidad: "a distancia",
        orderBy: "name",
        ascending: true,
    });

    // Debounce para la búsqueda con delay de 500ms
    const debouncedBusqueda = useDebounce(busqueda, 500);

    // Estado para mostrar el loader durante la búsqueda
    const isSearching = busqueda !== debouncedBusqueda;

    const breadcrumbItems = [
        { label: "Universidad", href: "/universidad" },
        { label: "Carreras a Distancia" },
    ];

    const ventajas = [
        {
            icon: <Monitor />,
            title: "Plataforma Virtual Avanzada",
            description:
                "Campus virtual de última generación con recursos multimedia interactivos",
        },
        {
            icon: <Clock />,
            title: "Flexibilidad Horaria",
            description:
                "Estudia a tu ritmo, compatibilizando con trabajo y familia",
        },
        {
            icon: <Users />,
            title: "Tutorías Personalizadas",
            description:
                "Acompañamiento docente continuo y clases virtuales en vivo",
        },
        {
            icon: <Award />,
            title: "Títulos Oficiales",
            description:
                "Misma validez académica que las carreras presenciales",
        },
    ];

    // Función para determinar el nivel de la carrera basado en el nombre
    // TODO: Agregar campo "nivel" a la tabla carreras en el futuro
    const getNivel = (titulo: string) => {
        if (titulo.startsWith("Tecnicatura")) {
            return "Tecnicatura";
        } else if (titulo.startsWith("Profesorado")) {
            return "Profesorado";
        } else if (
            titulo === "Medicina" ||
            titulo === "Abogacía" ||
            titulo === "Procuración" ||
            titulo === "Arquitectura" ||
            titulo === "Contador Público"
        ) {
            return "Grado";
        } else if (titulo.startsWith("Licenciatura")) {
            return "Licenciatura";
        }
        return "Grado";
    };

    // Transformar los datos de Supabase para mantener compatibilidad con el componente
    const carreras = carrerasFromDB.map((carrera) => ({
        name: carrera.name,
        nivel: getNivel(carrera.name),
        description: carrera.description,
        link: `/carreras/${carrera.slug}`,
        modality: carrera.modalidad,
        slug: carrera.slug,
        sede: carrera.sede,
    }));

    // Obtener niveles únicos para el filtro
    const niveles = [
        ...new Set(carreras.map((carrera) => carrera.nivel)),
    ].sort();

    const carrerasFiltradas = carreras.filter((carrera) => {
        const matchNivel =
            filtroNivel === "todos" || carrera.nivel === filtroNivel;
        const matchBusqueda = carrera.name
            .toLowerCase()
            .includes(debouncedBusqueda.toLowerCase());
        return matchNivel && matchBusqueda;
    });

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />
            <main className="">
                {/* Hero Section */}
                <HeroPageComponent
                    title="Carreras a Distancia"
                    description="Formación universitaria de calidad con la
                                flexibilidad que necesitas. Estudia desde
                                cualquier lugar con nuestro innovador sistema de
                                educación virtual."
                    minHeight="450"
                    imageUrl="/images/educacion-distancia.webp"
                />
                <div className="container pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Filtros y Búsqueda */}
                <section className="py-8 md:py-16 bg-white border-b border-muted2">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row gap-4 md:items-center">
                            {/* Búsqueda */}
                            <div className="relative flex-1 max-w-md">
                                {isSearching ? (
                                    <Loader2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 animate-spin" />
                                ) : (
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                )}
                                <input
                                    type="text"
                                    placeholder="Buscar carrera..."
                                    value={busqueda}
                                    onChange={(e) =>
                                        setBusqueda(e.target.value)
                                    }
                                    className="w-full pl-10 pr-4 py-2 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>

                            {/* Filtros */}
                            <div className="flex flex-col md:flex-row gap-4 md:items-center">
                                <div className="flex items-center gap-2">
                                    <Filter className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">
                                        Filtrar por:
                                    </span>
                                </div>

                                <select
                                    value={filtroNivel}
                                    onChange={(e) =>
                                        setFiltroNivel(e.target.value)
                                    }
                                    className="px-3 py-2 border border-muted2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                >
                                    <option value="todos">
                                        Todos los Niveles
                                    </option>
                                    {niveles.map((nivel) => (
                                        <option key={nivel} value={nivel}>
                                            {nivel}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Listado de Carreras */}
                <section className="py-12 bg-muted/30">
                    <div className="container mx-auto px-4">
                        {/* Loading state */}
                        {loading ? (
                            <div className="flex justify-center items-center py-20">
                                <div className="text-center space-y-4">
                                    <Loader2 className="w-12 h-12 animate-spin mx-auto text-primary" />
                                    <p className="text-muted-foreground">
                                        Cargando carreras...
                                    </p>
                                </div>
                            </div>
                        ) : error ? (
                            /* Error state */
                            <div className="flex justify-center items-center py-20">
                                <div className="text-center space-y-4">
                                    <AlertCircle className="w-12 h-12 mx-auto text-destructive" />
                                    <div>
                                        <p className="text-lg font-semibold text-foreground mb-2">
                                            Error al cargar las carreras
                                        </p>
                                        <p className="text-muted-foreground">
                                            {error}
                                        </p>
                                    </div>
                                    <UniversityButton
                                        variant="primary"
                                        onClick={() => window.location.reload()}
                                    >
                                        Reintentar
                                    </UniversityButton>
                                </div>
                            </div>
                        ) : (
                            <>
                                {/* Contador de resultados */}
                                {!isSearching && (
                                    <div className="mb-6">
                                        <p className="text-sm text-muted-foreground">
                                            Mostrando {carrerasFiltradas.length}{" "}
                                            de {carreras.length} carreras
                                            {filtroNivel !== "todos" &&
                                                ` • Nivel: ${filtroNivel}`}
                                            {debouncedBusqueda &&
                                                ` • Búsqueda: "${debouncedBusqueda}"`}
                                        </p>
                                    </div>
                                )}
                                {isSearching ? (
                                    <div className="flex justify-center items-center py-20">
                                        <div className="text-center">
                                            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
                                            <p className="text-muted-foreground">
                                                Buscando carreras...
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {carrerasFiltradas.map(
                                            (carrera, index) => (
                                                <Card
                                                    key={index}
                                                    className="border-muted2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                                >
                                                    <CardHeader>
                                                        <div className="flex items-start justify-between mb-3">
                                                            <CardTitle className="text-lg font-heading text-primary flex-1 leading-tight">
                                                                {carrera.name}
                                                            </CardTitle>
                                                            <span
                                                                className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                                    carrera.nivel ===
                                                                    "Grado"
                                                                        ? "bg-primary/10 text-primary"
                                                                        : carrera.nivel ===
                                                                            "Licenciatura"
                                                                          ? "bg-blue-100 text-blue-700"
                                                                          : carrera.nivel ===
                                                                              "Tecnicatura"
                                                                            ? "bg-green-100 text-green-700"
                                                                            : "bg-orange-100 text-orange-700"
                                                                }`}
                                                            >
                                                                {carrera.nivel}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                            {[
                                                                {
                                                                    icon: Globe,
                                                                    label: carrera.modality,
                                                                },
                                                                {
                                                                    icon: MapPin,
                                                                    label: carrera.sede,
                                                                },
                                                            ].map(
                                                                (item, idx) => (
                                                                    <li
                                                                        key={
                                                                            idx
                                                                        }
                                                                        className="flex items-start gap-2 text-sm text-muted-foreground"
                                                                    >
                                                                        {item.label && (
                                                                            <>
                                                                                <item.icon className="w-4 h-4" />
                                                                                <span>
                                                                                    {
                                                                                        item.label
                                                                                    }
                                                                                </span>
                                                                            </>
                                                                        )}
                                                                    </li>
                                                                ),
                                                            )}
                                                        </div>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <p className="text-muted-foreground font-body mb-4 text-sm line-clamp-3">
                                                            {
                                                                carrera.description
                                                            }
                                                        </p>
                                                        <div className="flex gap-2">
                                                            <Link
                                                                to={
                                                                    carrera.link
                                                                }
                                                                className="flex-1"
                                                            >
                                                                <UniversityButton
                                                                    variant="primary"
                                                                    size="sm"
                                                                    className="w-full"
                                                                >
                                                                    Ver Carrera
                                                                </UniversityButton>
                                                            </Link>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                            ),
                                        )}
                                    </div>
                                )}

                                {!isSearching &&
                                    !loading &&
                                    !error &&
                                    carrerasFiltradas.length === 0 && (
                                        <div className="text-center py-12">
                                            <p className="text-muted-foreground font-body">
                                                No se encontraron carreras con
                                                los filtros seleccionados.
                                            </p>
                                            <UniversityButton
                                                variant="primary"
                                                className="mt-4"
                                                onClick={() => {
                                                    setFiltroNivel("todos");
                                                    setBusqueda("");
                                                }}
                                            >
                                                Limpiar Filtros
                                            </UniversityButton>
                                        </div>
                                    )}
                            </>
                        )}
                    </div>
                </section>

                {/* Ventajas Section - Movida antes del CTA */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl mb-4 font-heading">
                                Ventajas de Estudiar a Distancia
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
                                Descubrí los beneficios de nuestra modalidad
                                virtual
                            </p>
                        </div>
                        <InfoAdd items={ventajas} columnas={4} />
                    </div>
                </section>

                {/* CTA Section */}
                <CtaPage
                    title="¿Ya elegiste tu carrera?"
                    description="Comenzá tu inscripción online o solicitá más
                            información sobre la carrera que te interesa"
                    url="/contacto"
                />
            </main>

            <Footer />
        </div>
    );
};

export default CarrerasDistancia;
