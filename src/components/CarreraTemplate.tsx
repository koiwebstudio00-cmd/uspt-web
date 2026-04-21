import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";
import { cn } from "@/lib/utils";
import {
    GraduationCap,
    MapPin,
    Download,
    BookOpen,
    Clock,
    Calendar,
    Award,
    Users,
    Globe,
    CheckCircle,
} from "lucide-react";
import type { Carrera, Instituto } from "@/lib/types/database";
import WhatsApp from "./icons/Wp";

interface CarreraWithInstituto extends Carrera {
    instituto: Instituto;
}

interface CarreraTemplateProps {
    carrera: CarreraWithInstituto;
    relatedCareers?: Carrera[];
}

// ── Shared style helpers ──────────────────────────────────────────────────────
const iconBox =
    "w-9 h-9 flex items-center justify-center bg-primary/10 text-primary flex-shrink-0";
const sectionLabel =
    "text-xs font-semibold uppercase tracking-widest text-primary mb-2";
const sectionTitle =
    "text-3xl md:text-5xl font-heading font-medium text-foreground mb-6";
const divider = "w-10 h-0.5 bg-primary mb-8";

const requisitos = [
    "Fotocopia de DNI",
    "Fotocopia de título secundario legalizada o constancia en trámite",
    "Certificado de buena salud",
    "2 fotos carnet",
    "Completar ficha con acuerdo de admisión",
];

const CarreraTemplate = ({
    carrera,
    relatedCareers = [],
}: CarreraTemplateProps) => {
    const breadcrumbItems = [
        { label: "Universidad", href: "/universidad" },
        { label: "Carreras", href: "/carreras" },
        { label: carrera.name },
    ];

    const quickFacts = [
        {
            icon: GraduationCap,
            label: "Nivel",
            value: carrera.clasificacion || "Grado",
        },
        { icon: Globe, label: "Modalidad", value: carrera.modalidad },
        {
            icon: MapPin,
            label: "Sede",
            value: carrera.sede || "Campus Central",
        },
        { icon: Users, label: "Duración", value: `${carrera.duration} años` },
    ];

    const documentos = [
        carrera.plan_estudio_url && {
            icon: BookOpen,
            title: "Plan de Estudios",
            description: "Descargá el plan de estudios completo",
            url: carrera.plan_estudio_url,
        },
        carrera.horarios_cursado && {
            icon: Clock,
            title: "Horarios de Cursado",
            description: "Consultá los horarios disponibles",
            url: carrera.horarios_cursado,
        },
        carrera.fecha_examenes && {
            icon: Calendar,
            title: "Fechas de Exámenes",
            description: "Calendario de exámenes actualizado",
            url: carrera.fecha_examenes,
        },
        carrera.resolution_url && {
            icon: Award,
            title: "Resolución Ministerial",
            description: "Resolución oficial de la carrera",
            url: carrera.resolution_url,
        },
    ].filter(Boolean) as {
        icon: React.ElementType;
        title: string;
        description: string;
        url: string;
    }[];

    const hasDocumentos = documentos.length > 0;

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                {/* ── Hero ── */}
                <HeroPageComponent
                    title={carrera.name}
                    description={carrera.instituto.name}
                    imageUrl="/images/IMG_4688.webp"
                    minHeight="450px"
                />

                <div className="container pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* ── Quick Facts ── */}
                <section className="py-8 md:py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 lg:grid-cols-4 border border-muted2">
                            {quickFacts.map((fact, i) => (
                                <div
                                    key={fact.label}
                                    className={cn(
                                        "p-6 flex flex-col gap-2 hover:bg-primary/5 transition-colors",
                                        i < quickFacts.length - 1
                                            ? "border-b lg:border-b-0 lg:border-r border-muted2"
                                            : "",
                                        i % 2 !== 0
                                            ? "border-l lg:border-l-0 border-muted2"
                                            : "",
                                    )}
                                >
                                    <div className={iconBox}>
                                        <fact.icon className="w-4 h-4" />
                                    </div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                                        {fact.label}
                                    </p>
                                    <p className="font-heading font-bold text-foreground text-base leading-tight">
                                        {fact.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Descripción + Perfil del Egresado ── */}
                {(carrera.description || carrera.perfil_egresado) && (
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="grid lg:grid-cols-2 gap-14 items-start">
                                {carrera.description && (
                                    <div>
                                        <p className={sectionLabel}>
                                            La carrera
                                        </p>
                                        <h2 className={sectionTitle}>
                                            Sobre la Carrera
                                        </h2>
                                        <div className={divider} />
                                        <p className="text-muted-foreground font-body leading-relaxed">
                                            {carrera.description}
                                        </p>
                                    </div>
                                )}

                                {carrera.perfil_egresado && (
                                    <div>
                                        <p className={sectionLabel}>
                                            Salida laboral
                                        </p>
                                        <h2 className={sectionTitle}>
                                            Perfil del Egresado
                                        </h2>
                                        <div className={divider} />
                                        <p className="text-muted-foreground font-body leading-relaxed whitespace-pre-line">
                                            {carrera.perfil_egresado}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── Documentos ── */}
                {hasDocumentos && (
                    <section className="py-20 bg-primary/5">
                        <div className="container mx-auto px-4">
                            <p className={sectionLabel}>Recursos</p>
                            <h2 className={sectionTitle}>
                                Documentos y Recursos
                            </h2>
                            <div className={divider} />

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 border border-muted2">
                                {documentos.map((doc, i) => (
                                    <a
                                        key={doc.title}
                                        href={doc.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={cn(
                                            "group flex flex-col gap-4 p-7 bg-white hover:bg-primary/5 transition-colors",
                                            i < documentos.length - 1
                                                ? "border-b sm:border-b-0 sm:border-r border-muted2"
                                                : "",
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                iconBox,
                                                "group-hover:bg-primary group-hover:text-white transition-colors",
                                            )}
                                        >
                                            <doc.icon className="w-4 h-4" />
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors mb-1">
                                                {doc.title}
                                            </p>
                                            <p className="text-xs text-muted-foreground font-body leading-snug">
                                                {doc.description}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:underline">
                                            <Download className="w-3.5 h-3.5" />
                                            Descargar PDF
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── Requisitos + Contacto ── */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-14 items-start">
                            {/* Requisitos */}
                            <div>
                                <p className={sectionLabel}>Admisión</p>
                                <h2 className={sectionTitle}>
                                    Requisitos de Admisión
                                </h2>
                                <div className={divider} />

                                <div className="border border-muted2">
                                    {requisitos.map((req, idx) => (
                                        <div
                                            key={idx}
                                            className={cn(
                                                "flex items-start gap-4 p-5 hover:bg-primary/5 transition-colors",
                                                idx < requisitos.length - 1
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

                            {/* Contacto WhatsApp */}
                            <div className="flex flex-col">
                                <p className={sectionLabel}>Consultas</p>
                                <h2 className={sectionTitle}>¿Tenés dudas?</h2>
                                <div className={divider} />

                                <div className="border border-muted2 p-8 flex flex-col gap-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-9 h-9 flex items-center justify-center bg-green-500/10 text-green-600 flex-shrink-0">
                                            <WhatsApp className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="font-heading font-semibold text-foreground mb-1">
                                                Asesoramiento personalizado
                                            </p>
                                            <p className="text-sm text-muted-foreground font-body leading-relaxed">
                                                Contactanos por WhatsApp y te
                                                asesoramos sobre los requisitos,
                                                aranceles y todo lo que
                                                necesitás saber sobre{" "}
                                                <span className="text-foreground font-medium">
                                                    {carrera.name}
                                                </span>
                                                .
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-t border-muted2 pt-6 space-y-3">
                                        {[
                                            "Proceso de inscripción",
                                            "Aranceles y becas disponibles",
                                            "Plan de estudios detallado",
                                            "Requisitos de admisión",
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-2.5 text-sm text-muted-foreground font-body"
                                            >
                                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href={`https://api.whatsapp.com/send?phone=5493816050625&text=Hola,%20me%20gustaria%20consultar%20a%20la%20USPT%20sobre%20${encodeURIComponent(carrera.name)}.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 text-sm font-semibold transition-colors w-full"
                                    >
                                        Consultar por WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CarreraTemplate;
