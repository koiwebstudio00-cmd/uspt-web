// Se elimina Header para evitar import no usado
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCursos } from "@/hooks/use-cursos";
import { useExtension } from "@/hooks/use-extension";
import {
    Award,
    Users,
    MapPin,
    Globe,
    Clock,
    Phone,
    Mail,
    GraduationCap,
    ArrowRight,
    Loader2,
    AlertCircle,
    ChevronLeft,
    ChevronRight,
    User,
    Building,
    Calendar,
    BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";
import { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";

const COURSES_PER_PAGE = 9;

const ExtensionUniversitaria = () => {
    // Obtener cursos online desde la base de datos (tabla courses)
    const {
        cursos: cursosOnline,
        loading: loadingCursosOnline,
        error: errorCursosOnline,
        count,
    } = useCursos();

    // Obtener cursos de extensión desde la base de datos (tabla extension)
    const {
        extension: extensionItems,
        loading: loadingExtension,
        error: errorExtension,
    } = useExtension();

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

    const breadcrumbItems = [
        { label: "Universidad", href: "/universidad" },
        { label: "Extensión Universitaria" },
    ];

    const secciones = [
        {
            title: "Nuestra Misión",
            description:
                "El Área de Extensión Universitaria tiene como misión articular la universidad con la sociedad mediante la promoción, transferencia y aplicación de conocimientos, saberes y prácticas académicas, científicas, tecnológicas, artísticas y culturales.",
        },
        {
            title: "Nuestros Objetivos",
            description:
                "Contribuir al desarrollo humano integral, la equidad social y la sostenibilidad, fomentando la participación activa de estudiantes, docentes y comunidades en la construcción colectiva de soluciones a las problemáticas sociales, culturales y productivas.",
        },
    ];

    const proyectos = [
        {
            titulo: "“Hablemos de nuestros derechos”",
            descripcion: "Ciclo de capacitación sobre derecho del consumidor junto a Asociación de Consumidores del NOA.",
            docentes: "Muler Germán; Goldman María Verónica; Casa Gonzalo; Salvi Nicolás",
            instituto: "IESPYC",
            anio: "2025"
        },
        {
            titulo: "“Fortalecimiento institucional de la Fundación Los Ángeles de Marcos Eliseo”",
            descripcion: "El presente plan de acción se enmarca en una tarea de extensión universitaria en colaboración con organismos gubernamentales provinciales, con el objetivo de fortalecer la operatividad, sostenibilidad y visibilidad institucional de la Fundación Los Ángeles de Marcos Eliseo.",
            docentes: "Arce Karina; Luna Lucas Ernesto",
            instituto: "Extensión Universitaria",
            anio: "2025"
        },
        {
            titulo: "“Clínica de Ejercicio Profesional Arquitectónico”",
            descripcion: "Clínicas ambulatorias de ejercicio profesional de arquitectura, promoviendo el contacto directo entre estudiantes avanzados y la sociedad a través de instancias de evaluación crítica y asesoramiento sobre problemáticas de hábitat y construcción.",
            docentes: "Arq. Rodolfo Luciano Jaime Castillo; Arq. Miguel Ángel Cabral",
            instituto: "IDEC",
            anio: ""
        },
        {
            titulo: "“La Antártida Argentina: un sitio para desarrollar hipótesis de terraformación”",
            descripcion: "Selección y exposición de cuatro proyectos teóricos desarrollados durante el ciclo lectivo 2024 con estudiantes de cuarto año. Incluye charla y exposición de referentes del Instituto Antártico Argentino con quienes se realizó dicho trabajo.",
            docentes: "Arq. Rodolfo Luciano Jaime Castillo; Arq. Miguel Ángel Cabral",
            instituto: "IDEC",
            anio: "2025"
        },
        {
            titulo: "“Ceremonial en minutos”",
            descripcion: "Micro videos informativos sobre normas de comportamiento en ámbitos laborales, sociales y diplomáticos, considerando el respeto por las diversas culturas y sus valores, con el objetivo de dar a conocer las competencias desarrolladas en la Licenciatura y Tecnicatura en Ceremonial y Protocolo.",
            docentes: "Falú Liliana; Luque Silvia",
            instituto: "IESPYC",
            anio: "2025"
        },
        {
            titulo: "“Apoyo y seguimiento a agricultores familiares de Tucumán para el desarrollo y fomento del cultivo y productos de yacón”",
            descripcion: "El objetivo general de este proyecto es el apoyo y seguimiento a agricultores familiares, mediante la incorporación de plantines de yacón y capacitaciones desarrolladas en el marco de actas acuerdo interinstitucional.",
            docentes: "Colombo Marcela; Ríos Daniel",
            instituto: "IDITEC",
            anio: "2025"
        }
    ];

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


    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}
                <HeroPageComponent
                    imageUrl="/images/IMG_4688.webp"
                    title="Extensión Universitaria"
                    description="Articulamos la universidad con la sociedad
                                mediante la promoción, transferencia y
                                aplicación de conocimientos, saberes y prácticas
                                académicas, científicas, tecnológicas,
                                artísticas y culturales"
                    minHeight="450px"
                />
                <div className="container pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                <section className="py-16 bg-muted/20">
                    <div className="container mx-auto px-4">
                        <div className="">
                            <div className="grid md:grid-cols-2 gap-8 items-start">
                                {/* Imagen a la izquierda */}
                                <div className="relative h-full min-h-[400px] md:min-h-[500px] overflow-hidden">
                                    <img
                                        src="/images/institucional.jpg"
                                        alt="Extensión Universitaria"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                        <h3 className="text-2xl font-bold font-heading mb-2">
                                            Extensión Universitaria
                                        </h3>
                                        <p className="text-white/90 text-sm">
                                            Articulando la universidad con la
                                            sociedad
                                        </p>
                                    </div>
                                </div>

                                {/* Cards de Misión y Objetivos a la derecha */}
                                <div className="space-y-6 h-full flex-col">
                                    <div className="lg:h-1/2 bg-primary/10 p-8 border-l-4 border-primary">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Award className="w-6 h-6 text-primary flex-shrink-0" />
                                            <h2 className="text-2xl font-medium font-heading text-foreground">
                                                {secciones[0].title}
                                            </h2>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed font-body">
                                            {secciones[0].description}
                                        </p>
                                    </div>

                                    <div className="bg-primary p-8 text-white border-l-4 border-primary/30">
                                        <div className="flex items-center gap-3 mb-4">
                                            <GraduationCap className="w-6 h-6 text-white flex-shrink-0" />
                                            <h2 className="text-2xl font-medium font-heading">
                                                {secciones[1].title}
                                            </h2>
                                        </div>
                                        <p className="text-white/90 leading-relaxed font-body">
                                            {secciones[1].description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cursos de Extensión */}
                <section className="py-20 bg-muted/30" id="cursos-extension">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Cursos
                            </h2>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                                Cursos de extensión para actualizar y
                                profundizar conocimientos en áreas específicas
                            </p>
                        </div>

                        {loadingExtension ? (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-12 h-12 animate-spin text-primary" />
                            </div>
                        ) : errorExtension ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    Error al cargar los cursos de extensión
                                </p>
                            </div>
                        ) : extensionItems.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    No hay cursos disponibles en este momento
                                </p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {extensionItems.map((curso) => (
                                    <Card
                                        key={curso.id}
                                        id={curso.slug || undefined}
                                        className="group border-muted2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden flex flex-col h-full"
                                    >
                                        <div className="relative h-44 overflow-hidden">
                                            <img
                                                src={
                                                    curso.featured_img ||
                                                    "/images/extension.webp"
                                                }
                                                alt={curso.nombre}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                        </div>

                                        <div className="p-8 pb-4 flex flex-col items-center text-center flex-grow">
                                            <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                                                {curso.nombre}
                                            </h3>

                                            <p className="text-muted-foreground font-body leading-relaxed line-clamp-4 text-sm mb-6">
                                                {curso.descripcion}
                                            </p>

                                            <div className="w-full grid grid-cols-1 gap-2 mt-auto">
                                                {[
                                                    {
                                                        icon: Globe,
                                                        label: curso.modalidad,
                                                    },
                                                    {
                                                        icon: BookOpen,
                                                        label: curso.tipo,
                                                    },
                                                    {
                                                        icon: Clock,
                                                        label: `${curso.duration} ${
                                                            curso.duration === 1
                                                                ? "mes"
                                                                : "meses"
                                                        }`,
                                                    },
                                                    {
                                                        icon: GraduationCap,
                                                        label: `${curso.carga_horaria} hs`,
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
                                            {curso.precio > 0 && (
                                                <p className="text-center text-primary font-semibold text-sm mb-2">
                                                    ${curso.precio}
                                                </p>
                                            )}
                                            {curso.slug ? (
                                                <Link
                                                    to={`/extension-universitaria/cursos/${curso.slug}`}
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
                <section ref={coursesRef} className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Cursos y Talleres Asincrónicos
                            </h2>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                                Explora nuestra oferta actual de cursos de
                                extensión universitaria
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
                        {loadingCursosOnline && (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                                <span className="ml-3 text-muted-foreground">
                                    Cargando cursos...
                                </span>
                            </div>
                        )}

                        {/* Error State */}
                        {errorCursosOnline && (
                            <div className="flex flex-col items-center justify-center py-12">
                                <AlertCircle className="w-12 h-12 text-destructive mb-4" />
                                <p className="text-destructive font-semibold mb-2">
                                    Error al cargar los cursos
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {errorCursosOnline}
                                </p>
                            </div>
                        )}

                        {/* Empty State */}
                        {!loadingCursosOnline &&
                            !errorCursosOnline &&
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
                        {!loadingCursosOnline &&
                            !errorCursosOnline &&
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
                                                        src={curso.featured_img}
                                                        alt={curso.fullname || curso.displayName || ""}
                                                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                                    />
                                                ) : (
                                                    <img
                                                        src="/images/extension.webp"
                                                        alt={curso.fullname || curso.displayName || ""}
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
                                                        {renderTags(curso.tags)}
                                                        {curso.modalidad && (
                                                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                                                {curso.modalidad}
                                                            </span>
                                                        )}
                                                    </div>
                                                    {curso.price !== null &&
                                                        curso.price !==
                                                            undefined && (
                                                            <div className="text-lg font-bold text-primary">
                                                                $ {curso.price}
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
                                                        page === totalPages ||
                                                        (page >=
                                                            currentPage - 1 &&
                                                            page <=
                                                                currentPage + 1)
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
                                                            currentPage - 2 ||
                                                        page === currentPage + 2
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
                                            Página {currentPage} de {totalPages}
                                        </p>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </section>

                {/* Información Adicional */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-heading font-medium text-foreground mb-6">
                                    ¿Cómo inscribirte?
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                                            1
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">
                                                Elegí tu curso
                                            </h4>
                                            <p className="text-muted-foreground text-sm">
                                                Explorá nuestra oferta y
                                                encontrá el programa que más te
                                                interese
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                                            2
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">
                                                Inscribite online
                                            </h4>
                                            <p className="text-muted-foreground text-sm">
                                                Completá el formulario de
                                                inscripción desde nuestra web
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                                            3
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1">
                                                Comenzá a aprender
                                            </h4>
                                            <p className="text-muted-foreground text-sm">
                                                Participá de las clases y obtené
                                                tu certificado de participación
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-muted/30 rounded-xl p-8">
                                <h4 className="text-xl font-bold font-heading mb-4">
                                    Información de Contacto
                                </h4>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        <span className="text-muted-foreground">
                                            Área de Extensión Universitaria
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-primary" />
                                        <span className="text-muted-foreground">
                                            Lunes a Viernes: 9:00 - 17:00
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-primary" />
                                        <span className="text-muted-foreground">
                                            extension@uspt.edu.ar
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-primary" />
                                        <span className="text-muted-foreground">
                                            54-381-4530630 Int. 243
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Autoridades */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Autoridades
                            </h2>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                                Equipo directivo del Área de Extensión
                                Universitaria
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <Card className="border-muted2">
                                <CardHeader className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4">
                                        <Users className="w-10 h-10" />
                                    </div>
                                    <CardTitle className="text-2xl font-heading text-primary">
                                        Dr. Juan Grande
                                    </CardTitle>
                                    <p className="text-muted-foreground font-body">
                                        Director de Extensión y Cultura
                                    </p>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                            <Mail className="w-4 h-4 text-primary" />
                                            <span>jgrande@uspt.edu.ar</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                            <Mail className="w-4 h-4 text-primary" />
                                            <span>extension@uspt.edu.ar</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                            <Phone className="w-4 h-4 text-primary" />
                                            <span>54-381-4530630 Int. 243</span>
                                        </div>
                                        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                            <Clock className="w-4 h-4 text-primary" />
                                            <span>
                                                Lunes a Viernes: 9:00 - 17:00hs
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-16 text-center">
                            Proyectos de Extensión
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {proyectos.map((proyecto, index) => (
                                <Card key={index} className="border-muted2 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                                    <CardHeader className="bg-muted/30 pb-4">
                                        <CardTitle className="text-xl font-heading font-semibold text-primary">
                                            {proyecto.titulo}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-8 flex-1 flex flex-col">
                                        <div className="flex-1">
                                            <p className="text-muted-foreground leading-relaxed font-body mb-8">
                                                {proyecto.descripcion}
                                            </p>
                                        </div>
                                        
                                        <div className="space-y-3 pt-6 border-t border-muted">
                                            <div className="flex items-start gap-3">
                                                <User className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                <p className="text-sm">
                                                    <span className="font-semibold">Docentes:</span>{" "}
                                                    <span className="text-muted-foreground">{proyecto.docentes}</span>
                                                </p>
                                            </div>
                                            
                                            <div className="flex items-center gap-3">
                                                <Building className="w-5 h-5 text-primary shrink-0" />
                                                <p className="text-sm">
                                                    <span className="font-semibold">Instituto:</span>{" "}
                                                    <span className="text-muted-foreground">{proyecto.instituto}</span>
                                                </p>
                                            </div>

                                            {proyecto.anio && (
                                                <div className="flex items-center gap-3">
                                                    <Calendar className="w-5 h-5 text-primary shrink-0" />
                                                    <p className="text-sm">
                                                        <span className="font-semibold">Año:</span>{" "}
                                                        <span className="text-muted-foreground">{proyecto.anio}</span>
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <CtaPage
                    title="Construyamos soluciones juntos"
                    description="Participá activamente en la construcción colectiva
                            de soluciones a las problemáticas sociales,
                            culturales y productivas de nuestra comunidad"
                    url="/contacto"
                />
            </main>

            <Footer />
        </div>
    );
};

export default ExtensionUniversitaria;
