import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
    Monitor,
    BookOpen,
    FileText,
    CreditCard,
    Calendar,
    Users,
    DollarSign,
    Handshake,
    Heart,
    Cloud,
    HelpCircle,
    Timer,
    Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const serviciosGenerales = [
    {
        icon: DollarSign,
        title: "Becas y Descuentos",
        description:
            "Programas de apoyo económico para estudiantes destacados y familias.",
    },
    {
        icon: CreditCard,
        title: "Pagos Online",
        description:
            "Sistema de pagos digital seguro y flexible con múltiples opciones.",
    },
    {
        icon: Handshake,
        title: "Pasantías",
        description:
            "Conexión directa con empresas para oportunidades laborales.",
    },
    {
        icon: Heart,
        title: "Comunidad Estudiantil",
        description:
            "Grupos de estudio, actividades extracurriculares y red de egresados.",
    },
    {
        icon: Cloud,
        title: "Plataforma Virtual",
        description:
            "Campus virtual 24/7 con materiales, clases grabadas y herramientas.",
    },
    {
        icon: HelpCircle,
        title: "Soporte Académico",
        description: "Acompañamiento personalizado con tutorías y asesorías.",
    },
    {
        icon: Timer,
        title: "Flexibilidad Horaria",
        description:
            "Modalidades presenciales y a distancia para tu ritmo de vida.",
    },
    {
        icon: Layers,
        title: "Certificaciones",
        description:
            "Títulos oficiales reconocidos que potencian tu perfil profesional.",
    },
];

const accesosAlumno = [
    {
        icon: Monitor,
        title: "Campus Virtual",
        description: "Accedé a tus materias, notas y recursos",
        link: "https://virtual.uspt.edu.ar/",
        external: true,
    },
    {
        icon: BookOpen,
        title: "Consulta de Expedientes",
        description: "Consultá tus expedientes en línea",
        link: "http://131.221.64.30/consultas/",
        external: true,
    },
    {
        icon: FileText,
        title: "Trámites Online",
        description: "Certificados, constancias y más",
        link: "/pagos/tramites-varios",
        external: false,
    },
    {
        icon: CreditCard,
        title: "Pagos Online",
        description: "Abonás cuotas y aranceles",
        link: "/pagos-online",
        external: false,
    },
    {
        icon: Calendar,
        title: "Calendario Académico",
        description: "Fechas importantes y cronograma",
        link: "#",
        external: false,
    },
    {
        icon: Users,
        title: "Turnos",
        description: "Solicitá turnos para atención presencial",
        link: "http://131.221.64.30/turnero/",
        external: true,
    },
];

const Services = () => {
    const titleRef = useIntersectionObserver<HTMLHeadingElement>({
        threshold: 0.3,
    });
    const descriptionRef = useIntersectionObserver<HTMLParagraphElement>({
        threshold: 0.3,
    });
    const featuresRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });
    const alumnosRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.1,
    });

    return (
        <>
            {/* ── Servicios generales ── */}
            <section className="bg-primary/10 py-28">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2
                            ref={titleRef.elementRef}
                            className={cn(
                                "text-4xl md:text-5xl font-heading font-medium mb-6 animate-on-scroll animate-fade-in-scale",
                                titleRef.isIntersecting
                                    ? "animate-fade-in-scale"
                                    : "",
                            )}
                        >
                            Servicios
                        </h2>
                        <p
                            ref={descriptionRef.elementRef}
                            className={cn(
                                "text-xl text-muted-foreground max-w-3xl mx-auto font-body animate-on-scroll animate-fade-in-up",
                                descriptionRef.isIntersecting
                                    ? "animate-fade-in-up"
                                    : "",
                            )}
                            style={{ transitionDelay: "0.2s" }}
                        >
                            Ofrecemos un ecosistema completo de servicios
                            diseñados para acompañarte en toda tu trayectoria
                            académica y profesional.
                        </p>
                    </div>

                    <div
                        ref={featuresRef.elementRef}
                        className={cn(
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-muted2 animate-on-scroll",
                            featuresRef.isIntersecting
                                ? "animate-fade-in-up"
                                : "",
                        )}
                        style={{ transitionDelay: "0.4s" }}
                    >
                        {serviciosGenerales.map((servicio, index) => (
                            <div
                                key={servicio.title}
                                className="flex flex-col gap-3 p-6 group bg-white hover:bg-primary/5 transition-colors"
                            >
                                <div className="w-9 h-9 flex items-center justify-center bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                    <servicio.icon className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-tight mb-1">
                                        {servicio.title}
                                    </p>
                                    <p className="text-xs text-muted-foreground font-body leading-snug">
                                        {servicio.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Portal del Alumno ── */}
            <section className="bg-white py-20 border-t border-muted2">
                <div className="container mx-auto px-4">
                    {/* Encabezado */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-center gap-4 mb-12">
                        <div>
                            <h2 className="text-center text-4xl md:text-5xl font-heading font-medium">
                                Accesos rápidos
                            </h2>
                        </div>
                    </div>

                    {/* Grid de accesos */}
                    <div
                        ref={alumnosRef.elementRef}
                        className={cn(
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate-on-scroll bg-muted/30",
                            alumnosRef.isIntersecting
                                ? "animate-fade-in-up"
                                : "",
                        )}
                    >
                        {accesosAlumno.map((acceso, index) => {
                            const content = (
                                <div className="flex flex-col gap-3 p-6 group cursor-pointer hover:bg-primary/5 transition-colors h-full">
                                    <div className="w-9 h-9 flex items-center justify-center bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <acceso.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-heading font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-tight mb-1">
                                            {acceso.title}
                                        </p>
                                        <p className="text-xs text-muted-foreground font-body leading-snug">
                                            {acceso.description}
                                        </p>
                                    </div>
                                </div>
                            );

                            return acceso.external ? (
                                <a
                                    key={acceso.title}
                                    href={acceso.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {content}
                                </a>
                            ) : (
                                <Link key={acceso.title} to={acceso.link}>
                                    {content}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
