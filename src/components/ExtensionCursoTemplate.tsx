import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { cn } from "@/lib/utils";
import {
    BookOpen,
    Clock,
    GraduationCap,
    Globe,
    Goal,
    CheckCircle,
    CreditCard,
} from "lucide-react";
import type { Extension } from "@/lib/types/database";
import WhatsApp from "./icons/Wp";
import { Link } from "react-router-dom";

interface ExtensionCursoTemplateProps {
    extension: Extension;
    relatedExtension?: Extension[];
}

// ── Shared style helpers ──────────────────────────────────────────────────────
const iconBox =
    "w-9 h-9 flex items-center justify-center bg-primary/10 text-primary flex-shrink-0";
const sectionLabel =
    "text-xs font-semibold uppercase tracking-widest text-primary mb-2";
const sectionTitle =
    "text-3xl md:text-5xl font-heading font-medium text-foreground mb-6";
const divider = "w-10 h-0.5 bg-primary mb-8";

const ExtensionCursoTemplate = ({
    extension,
    relatedExtension = [],
}: ExtensionCursoTemplateProps) => {
    const breadcrumbItems = [
        { label: "Universidad", href: "/universidad" },
        { label: "Extensión Universitaria", href: "/extension-universitaria" },
        { label: extension.nombre },
    ];

    const quickFacts = [
        {
            icon: BookOpen,
            label: "Tipo",
            value: extension.tipo,
        },
        {
            icon: Globe,
            label: "Modalidad",
            value: extension.modalidad,
        },
        {
            icon: GraduationCap,
            label: "Carga Horaria",
            value: `${extension.carga_horaria} hs`,
        },
        {
            icon: Clock,
            label: "Duración",
            value: `${extension.duration}`,
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                {/* ── Hero ── */}
                <HeroPageComponent
                    title={extension.nombre}
                    description={extension.tipo}
                    imageUrl={extension.featured_img || "/images/extension.webp"}
                    minHeight="450px"
                />

                <div className="container pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* ── Quick Facts ── */}
                <section className="py-8 md:py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-muted2">
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

                {/* ── Descripción + Objetivo ── */}
                {(extension.descripcion || extension.objetivo) && (
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="grid lg:grid-cols-2 gap-14 items-start">
                                {extension.descripcion && (
                                    <div>
                                        <p className={sectionLabel}>
                                            El curso
                                        </p>
                                        <h2 className={sectionTitle}>
                                            Sobre el Curso
                                        </h2>
                                        <div className={divider} />
                                        <p className="text-muted-foreground font-body leading-relaxed whitespace-pre-line">
                                            {extension.descripcion}
                                        </p>
                                    </div>
                                )}

                                {extension.objetivo && (
                                    <div>
                                        <p className={sectionLabel}>
                                            Finalidad
                                        </p>
                                        <h2 className={sectionTitle}>
                                            Objetivo
                                        </h2>
                                        <div className={divider} />
                                        <p className="text-muted-foreground font-body leading-relaxed whitespace-pre-line">
                                            {extension.objetivo}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── Consultas ── */}
                <section className="py-20 bg-muted/30">
                    <div className="max-w-5xl mx-auto px-4">
                        
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
                                                    {extension.nombre}
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

                                    <div className="flex flex-col gap-3">
                                        {extension.precio != null &&
                                            extension.precio > 0 && (
                                                <Link
                                                    to={`/pagar-extension/${extension.id}`}
                                                    className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 text-white px-6 py-3.5 text-sm font-semibold transition-colors w-full"
                                                >
                                                    <CreditCard className="w-4 h-4" />
                                                    Inscribirme / Pagar online
                                                </Link>
                                            )}

                                        <a
                                            href={`https://api.whatsapp.com/send?phone=5493816050625&text=Hola,%20me%20gustaria%20consultar%20a%20la%20USPT%20sobre%20${encodeURIComponent(extension.nombre)}.`}
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

export default ExtensionCursoTemplate;
