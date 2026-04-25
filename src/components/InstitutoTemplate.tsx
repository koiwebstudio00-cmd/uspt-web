import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import {
    Globe,
    Award,
    BookOpen,
    Clock,
    MapPin,
    Mail,
    Phone,
    Users,
    GraduationCap,
    ArrowRight,
    Building2,
    Palette,
    PencilRuler,
    Microscope,
    Stethoscope,
    Scale,
    Calculator,
    Cpu,
    Laptop,
    Leaf,
    Activity,
    HeartPulse,
    Gavel,
    Briefcase,
    Zap,
    Shield,
    Camera,
    Utensils,
    Trees,
    Mountain,
    UserCircle,
    Brain,
    Trophy,
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
    clasificacion: string;
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
    heroImage?: string;
}

const InstitutoTemplate = ({
    institute,
    slug,
    heroImage = "/images/IMG_4688.webp",
}: InstitutoTemplateProps) => {
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

    const getCareerIcon = (name: string) => {
        const n = name.toLowerCase();
        if (n.includes("arquitectura")) return Building2;
        if (n.includes("diseño textil")) return Palette;
        if (n.includes("diseño industrial")) return PencilRuler;
        if (n.includes("paisajismo")) return Trees;
        if (n.includes("guía de montaña")) return Mountain;
        if (n.includes("alto rendimiento")) return Activity;
        if (n.includes("gestión deportiva")) return Trophy;
        if (n.includes("abogacía") || n.includes("derecho")) return Scale;
        if (n.includes("contador")) return Calculator;
        if (n.includes("ciencia política")) return Gavel;
        if (n.includes("comercio exterior")) return Globe;
        if (n.includes("alimentos") || n.includes("bromatología"))
            return Utensils;
        if (n.includes("guardaparque")) return Shield;
        if (n.includes("datos")) return Cpu;
        if (n.includes("energías renovables")) return Zap;
        if (n.includes("seguridad ciudadana")) return Shield;
        if (n.includes("medicina")) return HeartPulse;
        if (n.includes("kinesiología")) return Activity;
        if (n.includes("fonoaudiología")) return Brain;
        if (n.includes("emergencias médicas")) return HeartPulse;
        return GraduationCap;
    };



    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}
                <HeroPageComponent
                    imageUrl={heroImage}
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
                                                    <h2 className="text-2xl font-medium font-heading text-foreground">
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
                                                    <h2 className="text-2xl font-medium font-heading">
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
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Nuestras Carreras
                            </h2>
                            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
                                Descubrí las propuestas académicas que tenemos
                                para vos
                            </p>
                        </div>

                        {institute.careers && institute.careers.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                                {institute.careers.map((seccion, index) => {
                                    const cardRef = useIntersectionObserver<HTMLDivElement>({
                                        threshold: 0.1,
                                    });

                                    const CareerIcon = getCareerIcon(seccion.name);

                                    return (
                                        <Card
                                            key={index}
                                            ref={cardRef.elementRef}
                                            className={cn(
                                                "group border-muted2 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 bg-white overflow-hidden animate-on-scroll flex flex-col h-full",
                                                cardRef.isIntersecting ? "animate-fade-in-up" : ""
                                            )}
                                        >
                                            {/* Top Icon Section */}
                                            <div className="p-8 pb-4 flex flex-col items-center text-center flex-grow">
                                                <div className="w-20 h-20 bg-primary/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-3 shadow-sm group-hover:shadow-primary/20">
                                                    <CareerIcon className="w-10 h-10 text-primary transition-colors duration-500 group-hover:text-white" />
                                                </div>

                                                <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                                                    {seccion.name}
                                                </h3>

                                                <p className="text-muted-foreground font-body leading-relaxed line-clamp-4 text-sm mb-6">
                                                    {seccion.description}
                                                </p>

                                                {/* Metadatos - Grid inside card */}
                                                <div className="w-full grid grid-cols-1 gap-2 mt-auto">
                                                    {[
                                                        {
                                                            icon: Globe,
                                                            label: seccion?.modalidad,
                                                        },
                                                        {
                                                            icon: MapPin,
                                                            label: seccion?.sede,
                                                        },
                                                        {
                                                            icon: GraduationCap,
                                                            label: seccion?.clasificacion,
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

                                            {/* Footer with Button */}
                                            <div className="p-6 pt-0 mt-auto border-t border-muted/50 bg-muted/5 group-hover:bg-white transition-colors duration-500">
                                                {seccion.id && (
                                                    <Link
                                                        to={`/carreras/${seccion.slug}`}
                                                        className="flex items-center justify-center gap-2 text-primary font-semibold text-sm group/btn w-full py-2"
                                                    >
                                                        <span>Ver Detalle</span>
                                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                                    </Link>
                                                )}
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
                                <h3 className="text-2xl font-heading font-bold text-foreground mb-3">
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

                {/* Requisitos + Info del Instituto */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-14 items-start">

                            {/* Requisitos */}
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                                    Admisión
                                </p>
                                <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                    Requisitos de Admisión
                                </h2>
                                <div className="w-10 h-0.5 bg-primary mb-8" />

                                <div className="border border-muted2">
                                    {[
                                        "Fotocopia de DNI",
                                        "Fotocopia de título secundario legalizada o constancia en trámite",
                                        "Certificado de buena salud",
                                        "2 fotos carnet",
                                        "Completar ficha con acuerdo de admisión",
                                    ].map((req, idx, arr) => (
                                        <div
                                            key={idx}
                                            className={cn(
                                                "flex items-start gap-4 p-5 hover:bg-primary/5 transition-colors",
                                                idx < arr.length - 1
                                                    ? "border-b border-muted2"
                                                    : "",
                                            )}
                                        >
                                            <div className="w-6 h-6 flex items-center justify-center bg-primary/10 text-primary flex-shrink-0 mt-0.5">
                                                <span className="text-xs font-bold">
                                                    {idx + 1}
                                                </span>
                                            </div>
                                            <span className="text-sm text-muted-foreground font-body leading-relaxed">
                                                {req}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Información del Instituto */}
                            <div className="flex flex-col">
                                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
                                    Información
                                </p>
                                <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                    Información del Instituto
                                </h2>
                                <div className="w-10 h-0.5 bg-primary mb-8" />

                                <div className="border border-muted2">
                                    {institute.director && (
                                        <div className="flex items-start gap-4 p-5 border-b border-muted2 hover:bg-primary/5 transition-colors">
                                            <div className="w-9 h-9 flex items-center justify-center bg-primary/10 text-primary flex-shrink-0">
                                                <Users className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                                                    Director
                                                </p>
                                                <p className="text-sm text-foreground font-body">
                                                    {institute.director}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {institute.secretario && (
                                        <div className="flex items-start gap-4 p-5 border-b border-muted2 hover:bg-primary/5 transition-colors">
                                            <div className="w-9 h-9 flex items-center justify-center bg-primary/10 text-primary flex-shrink-0">
                                                <Users className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                                                    Secretario
                                                </p>
                                                <p className="text-sm text-foreground font-body">
                                                    {institute.secretario}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="flex items-start gap-4 p-5 border-b border-muted2 hover:bg-primary/5 transition-colors">
                                        <div className="w-9 h-9 flex items-center justify-center bg-primary/10 text-primary flex-shrink-0">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                                                Ubicación
                                            </p>
                                            <p className="text-sm text-foreground font-body">
                                                Campus Universitario
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 p-5 hover:bg-primary/5 transition-colors">
                                        <div className="w-9 h-9 flex items-center justify-center bg-primary/10 text-primary flex-shrink-0">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                                                Email
                                            </p>
                                            <p className="text-sm text-foreground font-body">
                                                informes@uspt.edu.ar
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
