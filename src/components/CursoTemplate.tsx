import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import {
    BookOpen,
    Clock,
    Tag,
    CreditCard,
    Monitor,
    CheckCircle,
} from "lucide-react";
import type { CourseWithCategory } from "@/hooks/use-cursos";
import WhatsApp from "./icons/Wp";

interface CursoTemplateProps {
    curso: CourseWithCategory;
}

// ── Shared style helpers (same as CarreraTemplate) ──────────────────────────
const iconBox =
    "w-9 h-9 flex items-center justify-center bg-primary/10 text-primary flex-shrink-0";
const sectionLabel =
    "text-xs font-semibold uppercase tracking-widest text-primary mb-2";
const sectionTitle =
    "text-3xl md:text-5xl font-heading font-medium text-foreground mb-6";
const divider = "w-10 h-0.5 bg-primary mb-8";

// ── Tag parser (same logic as ExtensionUniversitaria) ──────────────────────
function parseTags(tags: string[] | string | null | undefined): string[] {
    if (!tags) return [];

    if (Array.isArray(tags)) {
        return tags.map((t) => {
            if (typeof t === "object" && t !== null) {
                const obj = t as { name?: string; fullname?: string };
                return obj.name || obj.fullname || JSON.stringify(t);
            }
            return String(t);
        });
    }

    if (typeof tags === "string") {
        try {
            if (tags.startsWith("[") && tags.endsWith("]"))
                return JSON.parse(tags);
            if (tags.startsWith("{") && tags.endsWith("}"))
                return tags
                    .slice(1, -1)
                    .split(",")
                    .map((t) => t.trim().replace(/^"(.*)"$/, "$1"));
            if (tags.includes(","))
                return tags.split(",").map((t) => t.trim());
            return [tags.trim()];
        } catch {
            return [tags];
        }
    }

    return [];
}

const CursoTemplate = ({ curso }: CursoTemplateProps) => {
    const courseName =
        curso.fullname || curso.displayName || "Curso sin nombre";

    const breadcrumbItems = [
        { label: "Universidad", href: "/universidad" },
        { label: "Extensión Universitaria", href: "/extension-universitaria" },
        { label: courseName },
    ];

    const tags = parseTags(curso.tags);

    const quickFacts = [
        {
            icon: Tag,
            label: "Categoría",
            value: curso.courseCategories.name,
        },
        {
            icon: Monitor,
            label: "Modalidad",
            value: curso.modalidad || "Presencial",
        },
        {
            icon: Clock,
            label: "Disponibilidad",
            value: "Consultar fechas",
        },
        {
            icon: CreditCard,
            label: "Costo",
            value:
                curso.price != null && curso.price > 0
                    ? `$ ${curso.price}`
                    : "Consultar",
        },
    ];

    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5493816266870&text=Hola,%20me%20gustar%C3%ADa%20inscribirme%20en%20el%20curso:%20${encodeURIComponent(courseName)}`;

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                {/* ── Hero ── */}
                <HeroPageComponent
                    title={courseName}
                    description={curso.courseCategories.name}
                    imageUrl={
                        curso.featured_img || "/images/extension.webp"
                    }
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

                

                {/* ── Descripción del curso ── */}
                {curso.summary && (
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="grid lg:grid-cols-2 gap-14 items-start">
                                <div>
                                    <p className={sectionLabel}>El curso</p>
                                    <h2 className={sectionTitle}>
                                        Sobre el Curso
                                    </h2>
                                    <div className={divider} />
                                    <div
                                        className="text-muted-foreground font-body leading-relaxed prose prose-sm max-w-none"
                                        dangerouslySetInnerHTML={{
                                            __html: curso.summary,
                                        }}
                                    />
                                </div>

                                {/* ── Precio destacado ── */}
                                {curso.price != null && curso.price > 0 && (
                                    <div>
                                        <p className={sectionLabel}>
                                            Inversión
                                        </p>
                                        <h2 className={sectionTitle}>
                                            Costo del Curso
                                        </h2>
                                        <div className={divider} />

                                        <div className="border border-muted2 p-8">
                                            <div className="flex items-baseline gap-2 mb-6">
                                                <span className="text-5xl font-heading font-bold text-primary">
                                                    ${" "}
                                                    {curso.price.toLocaleString(
                                                        "es-AR",
                                                    )}
                                                </span>
                                            </div>
                                            <div className="space-y-3 border-t border-muted2 pt-6">
                                                {[
                                                    "Certificado de participación incluido",
                                                    "Material didáctico",
                                                    "Acceso a recursos online",
                                                    "Soporte docente durante el curso",
                                                ].map((item, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-center gap-2.5 text-sm text-muted-foreground font-body"
                                                    >
                                                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── Inscripción + Contacto ── */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-14 items-start">
                            {/* Proceso de inscripción */}
                            <div>
                                <p className={sectionLabel}>Inscripción</p>
                                <h2 className={sectionTitle}>
                                    ¿Cómo inscribirte?
                                </h2>
                                <div className={divider} />

                                <div className="border border-muted2">
                                    {[
                                        "Revisá los detalles y requisitos del curso",
                                        "Contactanos por WhatsApp para confirmar disponibilidad",
                                        "Realizá el pago a través de nuestro sistema online",
                                        "¡Comenzá a aprender!",
                                    ].map((step, idx) => (
                                        <div
                                            key={idx}
                                            className={cn(
                                                "flex items-start gap-4 p-5 hover:bg-primary/5 transition-colors",
                                                idx < 3
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
                                                {step}
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
                                                aranceles y todo lo que necesitás
                                                saber sobre{" "}
                                                <span className="text-foreground font-medium">
                                                    {courseName}
                                                </span>
                                                .
                                            </p>
                                        </div>
                                    </div>

                                    <div className="border-t border-muted2 pt-6 space-y-3">
                                        {[
                                            "Proceso de inscripción",
                                            "Aranceles y becas disponibles",
                                            "Fechas de inicio",
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
                                        {/* Pago online solo si tiene precio */}
                                        {curso.price != null &&
                                            curso.price > 0 && (
                                                <Link
                                                    to={`/pagar-curso/${curso.id}`}
                                                    className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 text-white px-6 py-3.5 text-sm font-semibold transition-colors w-full"
                                                >
                                                    <CreditCard className="w-4 h-4" />
                                                    Inscribirme / Pagar online
                                                </Link>
                                            )}

                                        <a
                                            href={whatsappUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-2.5 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 text-sm font-semibold transition-colors w-full"
                                        >
                                            <WhatsApp className="w-4 h-4" />
                                            Consultar por WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Featured image full-width (si tiene imagen y no es la default) ── */}
                {/* {curso.featured_img && (
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-4">
                            <p className={sectionLabel}>Recursos</p>
                            <h2 className={sectionTitle}>
                                Más sobre el Curso
                            </h2>
                            <div className={divider} />
                            <div className="relative aspect-video max-w-4xl overflow-hidden border border-muted2">
                                <img
                                    src={curso.featured_img}
                                    alt={courseName}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </section>
                )} */}

                {/* ── Tags ── */}
                {tags.length > 0 && (
                    <section className="py-4 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-center gap-2">
                                <p className={sectionLabel}>Etiquetas:</p>
                                {tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <CtaPage
                    title="Construyamos soluciones juntos"
                    description="Participá activamente en la construcción colectiva de soluciones a las problemáticas sociales, culturales y productivas de nuestra comunidad"
                    url="/extension-universitaria"
                />
            </main>

            <Footer />
        </div>
    );
};

export default CursoTemplate;
