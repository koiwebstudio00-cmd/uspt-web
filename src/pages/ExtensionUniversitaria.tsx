// Se elimina Header para evitar import no usado
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCursos, type CourseWithCategory } from "@/hooks/use-cursos";
import {
    Award,
    Users,
    BookOpen,
    MapPin,
    Clock,
    Phone,
    Mail,
    GraduationCap,
    ArrowRight,
    MessageCircle,
    Loader2,
    AlertCircle,
    ChevronLeft,
    ChevronRight,
    CreditCard,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { useState, useEffect, useRef } from "react";
import WhatsApp from "@/components/icons/Wp";

const COURSES_PER_PAGE = 9;

const ExtensionUniversitaria = () => {
    // Obtener cursos desde la base de datos
    const { cursos, loading, error, count } = useCursos();

    // Estado para el modal de información de curso
    const [selectedCurso, setSelectedCurso] =
        useState<CourseWithCategory | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Estado de paginación
    const [currentPage, setCurrentPage] = useState(1);
    const [isChangingPage, setIsChangingPage] = useState(false);
    const coursesRef = useRef<HTMLDivElement>(null);

    // Calcular paginación
    const totalPages = Math.ceil(cursos.length / COURSES_PER_PAGE);
    const startIndex = (currentPage - 1) * COURSES_PER_PAGE;
    const endIndex = startIndex + COURSES_PER_PAGE;
    const currentCursos = cursos.slice(startIndex, endIndex);

    // Resetear a página 1 cuando cambien los cursos
    useEffect(() => {
        setCurrentPage(1);
    }, [cursos.length]);

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

    const whatsappLink =
        "https://api.whatsapp.com/send?phone=+5493816266870&text=Hola,%20me%20gustaria%20inscribirme%20en%20la%20USP-T%20";

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
                        <div className="max-w-7xl mx-auto">
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
                                <div className="space-y-6">
                                    <div className="bg-primary/10 p-8 border-l-4 border-primary">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Award className="w-6 h-6 text-primary flex-shrink-0" />
                                            <h2 className="text-2xl font-bold font-heading text-foreground">
                                                {secciones[0].title}
                                            </h2>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed font-body">
                                            {secciones[0].description}
                                        </p>
                                    </div>

                                    <div className="bg-primary p-8 text-white border-l-4 border-primary-foreground">
                                        <div className="flex items-center gap-3 mb-4">
                                            <GraduationCap className="w-6 h-6 text-white flex-shrink-0" />
                                            <h2 className="text-2xl font-bold font-heading">
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

                {/* Cursos Disponibles */}
                <section ref={coursesRef} className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl mb-4">
                                Cursos y Talleres Disponibles
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
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
                        {loading && (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                                <span className="ml-3 text-muted-foreground">
                                    Cargando cursos...
                                </span>
                            </div>
                        )}

                        {/* Error State */}
                        {error && (
                            <div className="flex flex-col items-center justify-center py-12">
                                <AlertCircle className="w-12 h-12 text-destructive mb-4" />
                                <p className="text-destructive font-semibold mb-2">
                                    Error al cargar los cursos
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {error}
                                </p>
                            </div>
                        )}

                        {/* Empty State */}
                        {!loading && !error && cursos.length === 0 && (
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
                        {!loading && !error && cursos.length > 0 && (
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
                                            <CardHeader className="flex-1">
                                                <div className="space-y-3">
                                                    <CardTitle className="text-lg font-heading text-primary leading-tight">
                                                        {curso.fullname ||
                                                            curso.displayName ||
                                                            "Curso sin nombre"}
                                                    </CardTitle>
                                                    <div className="flex items-center gap-2">
                                                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                                            {
                                                                curso
                                                                    .courseCategories
                                                                    .name
                                                            }
                                                        </span>
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
                                                <UniversityButton
                                                    variant="primary"
                                                    size="sm"
                                                    className="w-full flex items-center justify-center gap-2"
                                                    onClick={() => {
                                                        setSelectedCurso(curso);
                                                        setIsModalOpen(true);
                                                    }}
                                                >
                                                    Más información
                                                </UniversityButton>
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

                {/* Autoridades */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl   mb-4">
                                Autoridades
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
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

                {/* Información Adicional */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl  mb-6">
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

            {/* Modal de Información del Curso */}
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent className="sm:max-w-[600px] border-muted2 max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-heading text-primary leading-tight">
                            {selectedCurso?.fullname ||
                                selectedCurso?.displayName ||
                                "Información del Curso"}
                        </DialogTitle>
                        <div className="flex items-center gap-2 mt-2">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                {selectedCurso?.courseCategories?.name}
                            </span>
                        </div>
                    </DialogHeader>

                    <div className="space-y-6 py-4">
                        {/* Descripción/Resumen */}
                        <div className="space-y-2">
                            <h4 className="font-semibold text-foreground flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-primary" />
                                Descripción del curso
                            </h4>
                            <div
                                className="text-muted-foreground text-sm leading-relaxed font-body prose prose-sm max-w-none"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        selectedCurso?.summary ||
                                        "No hay una descripción detallada disponible para este curso en este momento.",
                                }}
                            />
                        </div>

                        {/* Precio */}
                        {selectedCurso?.price !== null &&
                            selectedCurso?.price !== undefined && (
                                <div className="p-4 bg-primary/5 border border-primary/20 flex items-center justify-between">
                                    <span className="font-medium text-foreground">
                                        Costo del curso:
                                    </span>
                                    <span className="text-2xl font-bold text-primary">
                                        $ {selectedCurso.price}
                                    </span>
                                </div>
                            )}
                    </div>

                    <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:gap-2">
                        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto order-1 sm:order-2">
                            {selectedCurso?.price &&
                                selectedCurso?.price > 0 && (
                                    <Link
                                        to={`/pagar-curso/${selectedCurso.id}`}
                                        className="w-full sm:w-auto"
                                    >
                                        <UniversityButton
                                            variant="primary"
                                            className="w-full flex items-center justify-center gap-2"
                                        >
                                            <CreditCard className="w-4 h-4" />
                                            Pagar desde la web
                                        </UniversityButton>
                                    </Link>
                                )}
                            <a
                                href={`https://api.whatsapp.com/send?phone=+5493816266870&text=Hola,%20me%20gustaria%20inscribirme%20en%20el%20curso:%20${encodeURIComponent(selectedCurso?.fullname || selectedCurso?.displayName || "")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <UniversityButton
                                    variant="primary"
                                    className="w-full flex items-center justify-center gap-2 bg-white border border-green-600 hover:bg-green-600 hover:text-white text-green-600"
                                >
                                    <WhatsApp className="w-4 h-4" />
                                    Pagar por WhatsApp
                                </UniversityButton>
                            </a>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ExtensionUniversitaria;
