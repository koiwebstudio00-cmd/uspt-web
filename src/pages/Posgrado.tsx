import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    GraduationCap,
    Users,
    Award,
    BookOpen,
    Globe,
    MapPin,
    Clock,
    Loader2,
    AlertCircle,
    ChevronLeft,
    ChevronRight,
    ArrowRight,
} from "lucide-react";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";

import { usePosgrados } from "@/hooks/use-posgrados";
import { Link } from "react-router-dom";
import { useCursos } from "@/hooks/use-cursos";
import { Badge } from "@/components/ui/badge";

const COURSES_PER_PAGE = 9;

const Posgrado = () => {
    // Fetch all posgrados from Supabase
    const { posgrados, loading, error } = usePosgrados();

    // Obtener cursos desde la base de datos
    const {
        cursos: cursosOnline,
        loading: loadingCursos,
        error: errorCursos,
        count,
    } = useCursos("Cursos | Posgrado");

    // Estado de paginación
    const [currentPage, setCurrentPage] = useState(1);
    const [isChangingPage, setIsChangingPage] = useState(false);
    const coursesRef = useRef<HTMLDivElement>(null);

    // Calcular paginación
    const totalPages = Math.ceil(cursosOnline.length / COURSES_PER_PAGE);
    const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
    const endIndex = startIndex + COURSES_PER_PAGE;
    const currentCursos = cursosOnline.slice(startIndex, endIndex);

    // Resetear a página 1 cuando cambien los cursos
    useEffect(() => {
        setCurrentPage(1);
    }, [cursosOnline.length]);

    // Manejar cambio de página con loader
    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages || newPage === currentPage)
            return;

        setIsChangingPage(true);

        // Simular un pequeño delay para mostrar el loader
        setTimeout(() => {
            setCurrentPage(newPage);
            setIsChangingPage(false);

            // Scroll suave al inicio de la sección de cursos
            if (coursesRef.current) {
                coursesRef.current.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 300);
    };

    // Función para renderizar los tags de un curso
    const renderTags = (tags: string[] | string | null | undefined) => {
        let processedTags: string[] = [];
        if (!tags) return null;

        if (Array.isArray(tags)) {
            processedTags = tags.map((t: unknown) => {
                if (typeof t === "object" && t !== null) {
                    const obj = t as { name?: string; fullname?: string };
                    return obj.name || obj.fullname || JSON.stringify(t);
                }
                return String(t);
            });
        } else if (typeof tags === "string") {
            try {
                if (tags.startsWith("[") && tags.endsWith("]")) {
                    processedTags = JSON.parse(tags);
                } else if (tags.startsWith("{") && tags.endsWith("}")) {
                    processedTags = tags
                        .slice(1, -1)
                        .split(",")
                        .map((t) => t.trim().replace(/^"(.*)"$/, "$1"));
                } else if (tags.includes(",")) {
                    processedTags = tags.split(",").map((t) => t.trim());
                } else {
                    processedTags = [tags.trim()];
                }
            } catch (e) {
                processedTags = [tags];
            }
        }

        if (processedTags.length === 0) return null;

        return processedTags.map((tag, idx) => (
            <Badge
                key={idx}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 cursor-default"
            >
                {tag}
            </Badge>
        ));
    };

    const normalizeTipo = (tipo: string | null | undefined) =>
        (tipo || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim()
            .toLowerCase();

    // Filter posgrados by tipo (acepta variaciones con/sin tildes y singular/plural)
    const maestrias = posgrados.filter((p) =>
        normalizeTipo(p.tipo).startsWith("maestr"),
    );
    const posgrades = posgrados.filter((p) =>
        normalizeTipo(p.tipo).startsWith("posgra"),
    );
    const especializaciones = posgrados.filter((p) =>
        normalizeTipo(p.tipo).startsWith("especializacion"),
    );
    const cursosPosgrado = posgrados.filter((p) =>
        normalizeTipo(p.tipo).startsWith("curso"),
    );

    const breadcrumbItems = [
        { label: "Universidad", href: "/universidad" },
        { label: "Posgrado" },
    ];

    const ventajas = [
        {
            icon: GraduationCap,
            label: "Excelencia Académica",
            value: "Estándares internacionales",
            description:
                "Programas diseñados con estándares internacionales de calidad",
        },
        {
            icon: Users,
            label: "Claustro de Elite",
            value: "Docentes especializados",
            description:
                "Profesores con amplia experiencia académica y profesional",
        },
        {
            icon: Award,
            label: "Reconocimiento Oficial",
            value: "Validez nacional e internacional",
            description: "Títulos con validez nacional e internacional",
        },
        {
            icon: BookOpen,
            label: "Investigación Aplicada",
            value: "Vinculación profesional",
            description:
                "Proyectos de investigación vinculados con la realidad profesional",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}
                <HeroPageComponent
                    title="Posgrado USPT"
                    description="Potenciá tu carrera profesional con nuestros
                                programas de maestrías y especializaciones.
                                Formación de excelencia para líderes del futuro."
                    imageUrl="/images/posgrado.webp"
                    minHeight="450"
                />

                <div className="container pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Ventajas Section */}
                <section className="py-8 md:py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 border border-muted2">
                            {ventajas.map((v, i) => (
                                <div
                                    key={v.label}
                                    className={cn(
                                        "p-6 flex flex-col gap-2 hover:bg-primary/5 transition-colors",
                                        i < ventajas.length - 1
                                            ? "border-b lg:border-b-0 lg:border-r border-muted2"
                                            : "",
                                        i % 2 !== 0
                                            ? "border-l lg:border-l-0 border-muted2"
                                            : "",
                                    )}
                                >
                                    <div className="w-9 h-9 flex items-center justify-center bg-primary/10 text-primary flex-shrink-0">
                                        <v.icon className="w-4 h-4" />
                                    </div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                                        {v.label}
                                    </p>
                                    <p className="font-heading font-bold text-foreground text-base leading-tight">
                                        {v.value}
                                    </p>
                                    <p className="text-xs text-muted-foreground font-body leading-snug">
                                        {v.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Posgrados Section */}
                <section className="bg-primary/10 py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Posgrados
                            </h2>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                                Programas de posgrado para profundizar
                                conocimientos y desarrollar competencias de
                                liderazgo
                            </p>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-12 h-12 animate-spin text-primary" />
                            </div>
                        ) : error ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    Error al cargar los posgrados
                                </p>
                            </div>
                        ) : posgrades.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    No hay posgrados disponibles en este momento
                                </p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {posgrades.map((posgrado) => (
                                    <Card
                                        key={posgrado.id}
                                        className="border-muted2 hover:shadow-lg transition-all duration-300"
                                    >
                                        <CardHeader>
                                            <div className="flex items-start justify-between mb-2">
                                                <CardTitle className="text-xl font-heading text-primary flex-1">
                                                    {posgrado.name}
                                                </CardTitle>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>
                                                        {posgrado.duration}{" "}
                                                        {posgrado.duration === 1
                                                            ? "año"
                                                            : "años"}
                                                    </span>
                                                </div>
                                                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                                                    {posgrado.modalidad}
                                                </span>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground font-body mb-4 line-clamp-3">
                                                {posgrado.description}
                                            </p>
                                            <div className="flex gap-2">
                                                <Link
                                                    to={`/posgrado/${posgrado.slug}`}
                                                    className="flex-1"
                                                >
                                                    <UniversityButton
                                                        variant="primary"
                                                        size="sm"
                                                        className="w-full"
                                                    >
                                                        Más Información
                                                    </UniversityButton>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
                {/* Maestrías Section */}
                <section className="bg-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Maestrías
                            </h2>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                                Programas de maestría para profundizar
                                conocimientos y desarrollar competencias de
                                liderazgo
                            </p>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-12 h-12 animate-spin text-primary" />
                            </div>
                        ) : error ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    Error al cargar las maestrías
                                </p>
                            </div>
                        ) : maestrias.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    No hay maestrías disponibles en este momento
                                </p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {maestrias.map((maestria) => (
                                    <Card
                                        key={maestria.id}
                                        className="border-muted2 hover:shadow-lg transition-all duration-300"
                                    >
                                        <CardHeader>
                                            <div className="flex items-start justify-between mb-2">
                                                <CardTitle className="text-xl font-heading text-primary flex-1">
                                                    {maestria.name}
                                                </CardTitle>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>
                                                        {maestria.duration}{" "}
                                                        {maestria.duration === 1
                                                            ? "año"
                                                            : "años"}
                                                    </span>
                                                </div>
                                                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                                                    {maestria.modalidad}
                                                </span>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground font-body mb-4 line-clamp-3">
                                                {maestria.description}
                                            </p>
                                            <div className="flex gap-2">
                                                <Link
                                                    to={`/posgrado/${maestria.slug}`}
                                                    className="flex-1"
                                                >
                                                    <UniversityButton
                                                        variant="primary"
                                                        size="sm"
                                                        className="w-full"
                                                    >
                                                        Más Información
                                                    </UniversityButton>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Especializaciones Section */}
                <section className="py-20 bg-primary/10">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Especializaciones
                            </h2>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                                Programas de especialización para actualizar y
                                profundizar conocimientos específicos
                            </p>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-12 h-12 animate-spin text-primary" />
                            </div>
                        ) : error ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    Error al cargar las especializaciones
                                </p>
                            </div>
                        ) : especializaciones.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    No hay especializaciones disponibles en este
                                    momento
                                </p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {especializaciones.map((esp) => (
                                    <Card
                                        key={esp.id}
                                        className="border-muted2 hover:shadow-md transition-shadow"
                                    >
                                        <CardHeader>
                                            <CardTitle className="text-lg font-heading text-primary mb-2">
                                                {esp.name}
                                            </CardTitle>
                                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                <Clock className="w-4 h-4" />
                                                <span>
                                                    {esp.duration}{" "}
                                                    {esp.duration === 1
                                                        ? "año"
                                                        : "años"}
                                                </span>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground font-body mb-4 line-clamp-3">
                                                {esp.description}
                                            </p>
                                            <div className="flex gap-2">
                                                <Link
                                                    to={`/posgrado/${esp.slug}`}
                                                    className="flex-1"
                                                >
                                                    <UniversityButton
                                                        variant="primary"
                                                        size="sm"
                                                        className="w-full"
                                                    >
                                                        Más Información
                                                    </UniversityButton>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
                {/* Cursos Section */}
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Cursos
                            </h2>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                                Cursos de posgrado para actualizar y profundizar
                                conocimientos en áreas específicas
                            </p>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-12 h-12 animate-spin text-primary" />
                            </div>
                        ) : error ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    Error al cargar los cursos
                                </p>
                            </div>
                        ) : cursosPosgrado.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    No hay cursos disponibles en este momento
                                </p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {cursosPosgrado.map((curso) => (
                                    <Card
                                        key={curso.id}
                                        className="group border-muted2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden flex flex-col h-full"
                                    >
                                        <div className="relative h-44 overflow-hidden">
                                            <img
                                                src={
                                                    curso.featured_img ||
                                                    "/images/posgrado.webp"
                                                }
                                                alt={curso.name}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                        </div>

                                        <div className="p-8 pb-4 flex flex-col items-center text-center flex-grow">
                                            <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                                                {curso.name}
                                            </h3>

                                            <p className="text-muted-foreground font-body leading-relaxed line-clamp-4 text-sm mb-6">
                                                {curso.description}
                                            </p>

                                            <div className="w-full grid grid-cols-1 gap-2 mt-auto">
                                                {[
                                                    {
                                                        icon: Globe,
                                                        label: curso.modalidad,
                                                    },
                                                    {
                                                        icon: MapPin,
                                                        label: curso.sede,
                                                    },
                                                    {
                                                        icon: Clock,
                                                        label: `${curso.duration} ${
                                                            curso.duration === 1
                                                                ? "año"
                                                                : "años"
                                                        }`,
                                                    },
                                                ].map(
                                                    (item, idx) =>
                                                        item.label && (
                                                            <div
                                                                key={idx}
                                                                className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/30 px-3 py-2 rounded-lg border border-transparent hover:border-primary/20 transition-all"
                                                            >
                                                                <item.icon className="w-3.5 h-3.5 text-primary" />
                                                                <span className="truncate">
                                                                    {item.label}
                                                                </span>
                                                            </div>
                                                        ),
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-6 pt-0 mt-auto border-t border-muted/50 bg-muted/5 group-hover:bg-white transition-colors duration-500">
                                            {curso.slug ? (
                                                <Link
                                                    to={`/posgrado/${curso.slug}`}
                                                    className="flex items-center justify-center gap-2 text-primary font-semibold text-sm group/btn w-full py-2"
                                                >
                                                    <span>Ver Detalle</span>
                                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                                </Link>
                                            ) : (
                                                <span className="block text-center text-sm text-muted-foreground py-2">
                                                    Próximamente
                                                </span>
                                            )}
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Cursos Disponibles */}
                <section ref={coursesRef} className="py-20 ">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Cursos y Talleres Online
                            </h2>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                                Explora nuestra oferta actual de cursos de
                                posgrado
                            </p>
                            {count !== null && count > 0 && (
                                <p className="text-sm text-muted-foreground mt-2">
                                    {count}{" "}
                                    {count === 1
                                        ? "curso disponible"
                                        : "cursos disponibles"}
                                </p>
                            )}
                        </div>

                        {/* Loading State */}
                        {loadingCursos && (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                                <span className="ml-3 text-muted-foreground">
                                    Cargando cursos...
                                </span>
                            </div>
                        )}

                        {/* Error State */}
                        {errorCursos && (
                            <div className="flex flex-col items-center justify-center py-12">
                                <AlertCircle className="w-12 h-12 text-destructive mb-4" />
                                <p className="text-destructive font-semibold mb-2">
                                    Error al cargar los cursos
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {errorCursos}
                                </p>
                            </div>
                        )}

                        {/* Empty State */}
                        {!loadingCursos &&
                            !errorCursos &&
                            cursosOnline.length === 0 && (
                                <div className="flex flex-col items-center justify-center py-12">
                                    <BookOpen className="w-12 h-12 text-muted-foreground mb-4" />
                                    <p className="text-muted-foreground font-semibold mb-2">
                                        No hay cursos disponibles
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Vuelve pronto para ver nuevas ofertas
                                    </p>
                                </div>
                            )}

                        {/* Courses Grid */}
                        {!loadingCursos &&
                            !errorCursos &&
                            cursosOnline.length > 0 && (
                                <>
                                    {/* Page Change Loader Overlay */}
                                    {isChangingPage && (
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg min-h-[400px]">
                                                <div className="flex flex-col items-center">
                                                    <Loader2 className="w-10 h-10 animate-spin text-primary mb-3" />
                                                    <span className="text-muted-foreground font-medium">
                                                        Cargando página{" "}
                                                        {currentPage}...
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div
                                        className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 ${isChangingPage ? "opacity-50" : ""}`}
                                    >
                                        {currentCursos.map((curso) => (
                                            <Card
                                                key={curso.id}
                                                className="border-muted2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
                                            >
                                                <div className="relative aspect-video overflow-hidden">
                                                    {curso.featured_img ? (
                                                        <img
                                                            src={
                                                                curso.featured_img
                                                            }
                                                            alt={
                                                                curso.fullname ||
                                                                curso.displayName ||
                                                                ""
                                                            }
                                                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                                        />
                                                    ) : (
                                                        <img
                                                            src="/images/extension.webp"
                                                            alt={
                                                                curso.fullname ||
                                                                curso.displayName ||
                                                                ""
                                                            }
                                                            className="h-full w-full object-cover object-bottom transition-transform duration-500 hover:scale-105"
                                                        />
                                                    )}
                                                </div>
                                                <CardHeader className="flex-1">
                                                    <div className="space-y-3">
                                                        <CardTitle className="text-lg font-heading text-primary leading-tight">
                                                            {curso.fullname ||
                                                                curso.displayName ||
                                                                "Curso sin nombre"}
                                                        </CardTitle>
                                                        <div className="flex flex-wrap items-center gap-2">
                                                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                                                {
                                                                    curso
                                                                        .courseCategories
                                                                        .name
                                                                }
                                                            </span>
                                                            {renderTags(
                                                                curso.tags,
                                                            )}
                                                            {curso.modalidad && (
                                                                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                                                    {
                                                                        curso.modalidad
                                                                    }
                                                                </span>
                                                            )}
                                                        </div>
                                                        {curso.price !== null &&
                                                            curso.price !==
                                                                undefined && (
                                                                <div className="text-lg font-bold text-primary">
                                                                    ${" "}
                                                                    {
                                                                        curso.price
                                                                    }
                                                                </div>
                                                            )}
                                                    </div>
                                                </CardHeader>
                                                <CardContent className="pt-0">
                                                    <Link
                                                        to={`/cursos/${curso.id}`}
                                                        className="w-full"
                                                    >
                                                        <UniversityButton
                                                            variant="primary"
                                                            size="sm"
                                                            className="w-full flex items-center justify-center gap-2"
                                                        >
                                                            Ver detalle
                                                            <ArrowRight className="w-4 h-4" />
                                                        </UniversityButton>
                                                    </Link>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>

                                    {/* Pagination Controls */}
                                    {totalPages > 1 && (
                                        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    onClick={() =>
                                                        handlePageChange(
                                                            currentPage - 1,
                                                        )
                                                    }
                                                    disabled={
                                                        currentPage === 1 ||
                                                        isChangingPage
                                                    }
                                                    className="p-2 border border-muted2 hover:bg-primary/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                    aria-label="Página anterior"
                                                >
                                                    <ChevronLeft className="w-5 h-5" />
                                                </button>

                                                <div className="flex items-center gap-1">
                                                    {Array.from(
                                                        { length: totalPages },
                                                        (_, i) => i + 1,
                                                    ).map((page) => {
                                                        // Mostrar solo algunas páginas alrededor de la actual
                                                        if (
                                                            page === 1 ||
                                                            page ===
                                                                totalPages ||
                                                            (page >=
                                                                currentPage -
                                                                    1 &&
                                                                page <=
                                                                    currentPage +
                                                                        1)
                                                        ) {
                                                            return (
                                                                <button
                                                                    key={page}
                                                                    onClick={() =>
                                                                        handlePageChange(
                                                                            page,
                                                                        )
                                                                    }
                                                                    disabled={
                                                                        isChangingPage
                                                                    }
                                                                    className={`min-w-[40px] h-10 px-3 font-medium transition-colors ${
                                                                        page ===
                                                                        currentPage
                                                                            ? "bg-primary text-white"
                                                                            : "border border-muted2 hover:bg-primary/5"
                                                                    } disabled:cursor-not-allowed`}
                                                                >
                                                                    {page}
                                                                </button>
                                                            );
                                                        } else if (
                                                            page ===
                                                                currentPage -
                                                                    2 ||
                                                            page ===
                                                                currentPage + 2
                                                        ) {
                                                            return (
                                                                <span
                                                                    key={page}
                                                                    className="px-2"
                                                                >
                                                                    ...
                                                                </span>
                                                            );
                                                        }
                                                        return null;
                                                    })}
                                                </div>

                                                <button
                                                    onClick={() =>
                                                        handlePageChange(
                                                            currentPage + 1,
                                                        )
                                                    }
                                                    disabled={
                                                        currentPage ===
                                                            totalPages ||
                                                        isChangingPage
                                                    }
                                                    className="p-2 border border-muted2 hover:bg-primary/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                                    aria-label="Página siguiente"
                                                >
                                                    <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </div>

                                            <p className="text-sm text-muted-foreground">
                                                Página {currentPage} de{" "}
                                                {totalPages}
                                            </p>
                                        </div>
                                    )}
                                </>
                            )}
                    </div>
                </section>

                {/* CTA Section */}

                <CtaPage
                    title="Llevá tu carrera al siguiente nivel"
                    description="Descubrí cómo nuestros programas de posgrado pueden
                            transformar tu futuro profesional"
                    url="/contacto"
                />
            </main>

            <Footer />
        </div>
    );
};

export default Posgrado;
