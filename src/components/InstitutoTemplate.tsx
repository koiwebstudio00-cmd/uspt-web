import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import {
    Award,
    BookOpen,
    Clock,
    MapPin,
    Mail,
    Phone,
    Users,
    GraduationCap,
    ArrowRight,
    PersonStanding,
    Calendar,
    Globe,
} from "lucide-react";

import { Navbar1 } from "./Navbar";
import { HeroPageComponent } from "./HeroPageComponent";
import { Link } from "react-router-dom";
import CtaPage from "./CtaPage";

interface Career {
    id: string;
    name: string;
    description: string;
    perfil_egresado: string;
    modalidad: string;
    sede: string;
    slug: string;
    resolution_url: string;
    plan_estudio_url: string;
    horarios_cursado: string;
    fecha_examenes: string;
}

interface Institute {
    id: number;
    name: string;
    director: string;
    secretario: string;
    mision: string;
    objetivos: string;
    careers: Career[];
}

interface InstitutoTemplateProps {
    institute: Institute;
    slug: string;
}

const InstitutoTemplate = ({ institute, slug }: InstitutoTemplateProps) => {
    if (!institute) {
        return <div>No institute data found</div>;
    }

    const breadcrumbItems = [
        { label: "Universidad", href: "/universidad" },
        { label: "Institutos", href: "/institutos" },
        { label: institute.name },
    ];

    // Función para generar descripción del instituto basada en sus carreras
    const getInstituteDescription = () => {
        const areas = institute.careers.map((career) => {
            if (career.name.toLowerCase().includes("diseño")) return "diseño";
            if (career.name.toLowerCase().includes("arquitectura"))
                return "arquitectura";
            if (career.name.toLowerCase().includes("medicina"))
                return "medicina";
            if (career.name.toLowerCase().includes("salud")) return "salud";
            if (career.name.toLowerCase().includes("deporte")) return "deporte";
            if (
                career.name.toLowerCase().includes("abogacía") ||
                career.name.toLowerCase().includes("derecho")
            )
                return "derecho";
            if (
                career.name.toLowerCase().includes("contador") ||
                career.name.toLowerCase().includes("finanzas")
            )
                return "economía";
            if (
                career.name.toLowerCase().includes("tecnología") ||
                career.name.toLowerCase().includes("datos")
            )
                return "tecnología";
            if (career.name.toLowerCase().includes("educación"))
                return "educación";
            return "formación profesional";
        });

        const uniqueAreas = [...new Set(areas)];
        return `Formamos profesionales especializados en ${uniqueAreas.join(
            ", ",
        )}, con una visión integral que combina excelencia académica, práctica profesional y compromiso social.`;
    };

    // Función para obtener imagen del instituto
    const getInstituteImage = () => {
        if (slug.includes("diseno")) return "/images/instituo-diseno.png";
        return "/placeholder.svg"; // Imagen por defecto
    };

    // Función para obtener color del instituto
    const getInstituteColor = () => {
        if (slug.includes("diseno"))
            return "from-purple-500/70 via-purple-400/40";
        if (slug.includes("salud")) return "from-green-500/70 via-green-400/40";
        if (slug.includes("deporte")) return "from-blue-500/70 via-blue-400/40";
        if (slug.includes("social"))
            return "from-orange-500/70 via-orange-400/40";
        if (slug.includes("tecnologia"))
            return "from-cyan-500/70 via-cyan-400/40";
        if (slug.includes("distancia"))
            return "from-indigo-500/70 via-indigo-400/40";
        return "from-primary/70 via-primary/40";
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}
                <HeroPageComponent
                    imageUrl="/images/IMG_4688.webp"
                    title={institute.name}
                    description={getInstituteDescription()}
                    minHeight="500px"
                />
                <div className="container pt-8 pb-4">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Misión y Objetivos del Instituto */}
                {(institute.mision || institute.objetivos) && (
                    <section className="py-16 bg-muted/20">
                        <div className="container mx-auto px-4">
                            <div className="max-w-7xl mx-auto">
                                <div className="grid md:grid-cols-2 gap-8 items-start">
                                    {/* Imagen a la izquierda */}
                                    <div className="relative h-full min-h-[400px] md:min-h-[500px] overflow-hidden">
                                        <img
                                            src="/images/institucional.jpg"
                                            alt={institute.name}
                                            className="absolute inset-0 h-full w-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                            <h3 className="text-2xl font-bold font-heading mb-2">
                                                {institute.name}
                                            </h3>
                                            <p className="text-white/90 text-sm">
                                                Formando profesionales de
                                                excelencia
                                            </p>
                                        </div>
                                    </div>

                                    {/* Cards de Misión y Objetivos a la derecha */}
                                    <div className="space-y-6">
                                        {institute.mision && (
                                            <div className="bg-primary/10 p-8 border-l-4 border-primary">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <Award className="w-6 h-6 text-primary flex-shrink-0" />
                                                    <h2 className="text-2xl font-bold font-heading text-foreground">
                                                        Nuestra Misión
                                                    </h2>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed font-body">
                                                    {institute.mision}
                                                </p>
                                            </div>
                                        )}

                                        {institute.objetivos && (
                                            <div className="bg-primary p-8 text-white border-l-4 border-primary-foreground">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <GraduationCap className="w-6 h-6 text-white flex-shrink-0" />
                                                    <h2 className="text-2xl font-bold font-heading">
                                                        Nuestros Objetivos
                                                    </h2>
                                                </div>
                                                <p className="text-white/90 leading-relaxed font-body whitespace-pre-line">
                                                    {institute.objetivos}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Carreras del Instituto */}
                <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
                                Nuestras Carreras
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Descubrí las propuestas académicas que tenemos
                                para vos
                            </p>
                        </div>

                        {institute.careers && institute.careers.length > 0 ? (
                            <div className="max-w-6xl mx-auto space-y-8">
                                {institute.careers.map((seccion, index) => {
                                    // Hook individual para cada card
                                    const cardRef =
                                        useIntersectionObserver<HTMLDivElement>(
                                            {
                                                threshold: 0.2,
                                            },
                                        );

                                    return (
                                        <Card
                                            key={index}
                                            ref={cardRef.elementRef}
                                            className={cn(
                                                "border-muted2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 bg-white overflow-hidden animate-on-scroll",
                                                cardRef.isIntersecting
                                                    ? "animate-fade-in-up"
                                                    : "",
                                            )}
                                        >
                                            <div className="grid md:grid-cols-2 gap-0">
                                                {/* Imagen */}
                                                <div className="relative h-64 md:h-auto overflow-hidden">
                                                    <img
                                                        src="/images/institucional.jpg"
                                                        alt={seccion.name}
                                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r" />
                                                </div>

                                                {/* Contenido */}
                                                <div className="p-8 md:p-10 flex flex-col justify-center space-y-6">
                                                    <div>
                                                        <h3 className="text-2xl md:text-3xl font-heading text-foreground mb-3">
                                                            {seccion.name}
                                                        </h3>
                                                        <p className="text-muted-foreground font-body leading-relaxed line-clamp-3">
                                                            {
                                                                seccion.description
                                                            }
                                                        </p>
                                                    </div>

                                                    {/* Metadatos */}
                                                    <div className="flex flex-wrap gap-4">
                                                        {[
                                                            {
                                                                icon: Globe,
                                                                label: seccion?.modalidad,
                                                            },
                                                            {
                                                                icon: MapPin,
                                                                label: seccion?.sede,
                                                            },
                                                        ].map(
                                                            (item, idx) =>
                                                                item.label && (
                                                                    <div
                                                                        key={
                                                                            idx
                                                                        }
                                                                        className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full"
                                                                    >
                                                                        <item.icon className="w-4 h-4 text-primary" />
                                                                        <span>
                                                                            {
                                                                                item.label
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                ),
                                                        )}
                                                    </div>

                                                    {/* Botón Ver Detalle */}
                                                    {seccion.id && (
                                                        <Link
                                                            to={`/carreras/${seccion.slug}`}
                                                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg group w-fit"
                                                        >
                                                            <span>
                                                                Ver Detalle
                                                            </span>
                                                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                                        </Link>
                                                    )}
                                                </div>
                                            </div>
                                        </Card>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="text-center py-20 max-w-md mx-auto">
                                <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center">
                                    <BookOpen className="w-10 h-10 text-muted-foreground" />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-3">
                                    No hay carreras disponibles
                                </h3>
                                <p className="text-muted-foreground">
                                    Este instituto no tiene carreras registradas
                                    actualmente.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Información de Admisión */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold font-heading text-foreground mb-4">
                                    Información Importante
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    Todo lo que necesitás saber para comenzar
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Requisitos de Admisión */}
                                <Card className="border-muted2 shadow-lg">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <BookOpen className="w-6 h-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-2xl font-heading">
                                                Requisitos de Admisión
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-4 cursor-default">
                                            {[
                                                "Fotocopia de DNI",
                                                "Fotocopia de título secundario legalizada o constancia en trámite",
                                                "Certificado de buena salud",
                                                "2 fotos carnet",
                                                "Completar ficha con acuerdo de admisión",
                                            ].map((req, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-3 group"
                                                >
                                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                                        <span className="text-primary font-semibold text-xs">
                                                            {idx + 1}
                                                        </span>
                                                    </div>
                                                    <span className="text-muted-foreground font-body leading-relaxed">
                                                        {req}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                {/* Información del Instituto */}
                                <Card className="border-muted2 shadow-lg">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <Users className="w-6 h-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-2xl font-heading">
                                                Información del Instituto
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-5">
                                            {institute.director && (
                                                <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                        <Users className="w-5 h-5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-foreground mb-1">
                                                            Director
                                                        </p>
                                                        <p className="text-muted-foreground text-sm">
                                                            {institute.director}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                            {institute.secretario && (
                                                <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                        <Users className="w-5 h-5 text-primary" />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-foreground mb-1">
                                                            Secretario
                                                        </p>
                                                        <p className="text-muted-foreground text-sm">
                                                            {
                                                                institute.secretario
                                                            }
                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                    <MapPin className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-foreground mb-1">
                                                        Ubicación
                                                    </p>
                                                    <p className="text-muted-foreground text-sm">
                                                        Campus Universitario
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                    <Mail className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-foreground mb-1">
                                                        Email
                                                    </p>
                                                    <p className="text-muted-foreground text-sm">
                                                        informes@uspt.edu.ar
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <CtaPage
                    title="Comenzá tu carrera profesional"
                    description="Formá parte de una comunidad académica comprometida
                            con la excelencia y el desarrollo profesional"
                    url="/contacto"
                />
            </main>

            <Footer />
        </div>
    );
};

export default InstitutoTemplate;
