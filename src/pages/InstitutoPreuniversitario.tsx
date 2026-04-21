import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import {
    GraduationCap,
    BookOpen,
    Award,
    Heart,
    Target,
    Star,
    Calendar,
    MapPin,
    Phone,
    Mail,
    Clock,
    Code2,
    Leaf,
    Compass,
    CheckCircle,
} from "lucide-react";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";

const InstitutoPreuniversitario = () => {
    const presentacionRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.1,
    });
    const ofertaRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.1,
    });
    const orientacionesRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.1,
    });
    const historiaRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.1,
    });

    const breadcrumbItems = [{ label: "Instituto Preuniversitario" }];

    const highlights = [
        {
            icon: Clock,
            label: "Jornada extendida",
            value: "8 horas diarias",
            sub: "Lunes a Viernes, desde las 8:00 hs",
        },
        {
            icon: BookOpen,
            label: "Primer año académico",
            value: "2020",
            sub: "Primera escuela preuniversitaria privada",
        },
        {
            icon: GraduationCap,
            label: "Bachillerato",
            value: "6 años",
            sub: "Ciclo Básico (3) + Ciclo Orientado (3)",
        },
        {
            icon: Star,
            label: "Inglés intensivo",
            value: "Certificación internacional",
            sub: "Inglés y portugués desde 1.° año",
        },
    ];

    const caracteristicas = [
        { icon: Target, text: "Autodisciplina y autogestión del aprendizaje" },
        { icon: CheckCircle, text: "Jornada extendida de 8 horas" },
        { icon: BookOpen, text: "Enseñanza de inglés intensivo" },
        { icon: Award, text: "Talleres de medios audiovisuales y arte" },
        { icon: Heart, text: "Campamentos y viajes de estudio" },
        { icon: Star, text: "Aprendizaje por proyectos colaborativos" },
    ];

    const orientaciones = [
        {
            icon: Code2,
            name: "Tecnología y Desarrollo de Software",
            fullName:
                "Bachiller con Orientación en Informática – Especialización en Desarrollo de Software",
            description:
                "Prepara estudiantes para el mundo digital, la programación y las tecnologías de la información.",
            materias: [
                "Programación",
                "Base de Datos",
                "Redes",
                "Sistemas Operativos",
                "Desarrollo Web",
            ],
            perfil: "Estudiantes interesados en carreras tecnológicas, programación y sistemas informáticos.",
        },
        {
            icon: Leaf,
            name: "Ciencias Naturales y Medio Ambiente",
            fullName:
                "Bachiller con Orientación en Ciencias Naturales – Especialización en Preservación del Medio Ambiente",
            description:
                "Sólida base científica con enfoque en la preservación ambiental y el desarrollo sostenible.",
            materias: [
                "Biología",
                "Química",
                "Física",
                "Ecología",
                "Gestión Ambiental",
            ],
            perfil: "Estudiantes orientados a carreras científicas, ambientales y de preservación natural.",
        },
        {
            icon: Compass,
            name: "Turismo y Turismo Cultural",
            fullName:
                "Bachiller con Orientación en Turismo – Especialización en Turismo Cultural",
            description:
                "Formación de profesionales en gestión turística, hotelería y patrimonio cultural regional e internacional.",
            materias: [
                "Historia Cultural",
                "Geografía Turística",
                "Gestión Hotelera",
                "Idiomas",
                "Patrimonio",
            ],
            perfil: "Estudiantes interesados en turismo, hotelería, gestión cultural y servicios.",
        },
    ];

    const materiasCicloBásico = [
        "Matemática",
        "Lengua y Literatura",
        "Inglés",
        "Portugués",
        "Historia",
        "Construcción de Ciudadanía",
        "Geografía",
        "Ciencias Biológicas",
        "Física",
        "Química",
        "Música",
        "Artes Visuales",
        "Educación Física",
    ];

    const talleres = [
        "Intensificación en idiomas extranjeros",
        "Arte y medios audiovisuales",
        "Deporte y actividades físicas",
        "Tecnologías aplicadas",
        "Ceremonial y Protocolo",
        "Campamentos y viajes de estudio",
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                {/* Hero */}
                <HeroPageComponent
                    imageUrl="/images/IMG_4688.webp"
                    title="Instituto Preuniversitario San Pablo Tucumán"
                    description="La primera escuela preuniversitaria de gestión privada de Tucumán"
                    minHeight="480px"
                />
                <div className="container pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* ── 1. PRESENTACIÓN RÁPIDA ── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        {/* Intro */}
                        <div className="max-w-4xl mb-16">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                                    Instituto Preuniversitario
                                </p>
                                <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6 leading-tight">
                                    Formamos estudiantes críticos, reflexivos y
                                    autónomos
                                </h2>
                                <div className="w-10 h-0.5 bg-primary mb-6" />
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    Preparados para los desafíos del mundo
                                    actual y la vida universitaria. A través de
                                    propuestas innovadoras, aprendizaje por
                                    proyectos y trabajo colaborativo, promovemos
                                    una educación que trasciende lo académico y
                                    potencia el desarrollo integral de cada
                                    alumno.
                                </p>
                                <p className="text-muted-foreground font-body leading-relaxed">
                                    Nuestra misión es brindar una educación de
                                    calidad que forme personas libres,
                                    comprometidas y capaces de pensar, crear y
                                    transformar su realidad.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 2. OFERTA ACADÉMICA ── */}
                <section id="orientaciones" className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <div className="mb-16">
                            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                                Oferta Académica
                            </p>
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Estructura del Bachillerato
                            </h2>
                            <div className="w-10 h-0.5 bg-primary mb-4" />
                            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl">
                                Bachillerato de 6 años dividido en Ciclo Básico
                                común (3 años) y Ciclo Orientado con tres
                                especializaciones (3 años).
                            </p>
                        </div>

                        {/* Ciclo Básico */}
                        <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
                            <div className="border border-muted2 bg-white p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-9 h-9 bg-primary/10 text-primary flex items-center justify-center">
                                        <BookOpen className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-xl text-foreground">
                                            Ciclo Básico
                                        </h3>
                                        <p className="text-xs text-muted-foreground">
                                            3 años — Formación general común
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground font-body mb-5 leading-relaxed">
                                    Formación general común a todas las
                                    orientaciones. Permite a los estudiantes
                                    definir su vocación a lo largo de la
                                    trayectoria.
                                </p>
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                                    Espacios Curriculares
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {materiasCicloBásico.map((m) => (
                                        <span
                                            key={m}
                                            className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium"
                                        >
                                            {m}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="border border-muted2 bg-white p-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-9 h-9 bg-primary/10 text-primary flex items-center justify-center">
                                        <Star className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-xl text-foreground">
                                            Talleres Especiales
                                        </h3>
                                        <p className="text-xs text-muted-foreground">
                                            Actividades complementarias
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground font-body mb-5 leading-relaxed">
                                    Propuestas extracurriculares que enriquecen
                                    la formación académica y personal de los
                                    estudiantes.
                                </p>
                                <div className="space-y-3">
                                    {talleres.map((t, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 text-sm text-muted-foreground font-body"
                                        >
                                            <div className="w-1.5 h-1.5 bg-primary flex-shrink-0" />
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Ciclo Orientado */}
                        <div className="mb-8">
                            <h3 className="text-2xl font-heading font-semibold text-foreground mb-2">
                                Ciclo Orientado
                            </h3>
                            <p className="text-muted-foreground font-body mb-8">
                                3 años · Tres especializaciones para profundizar
                                en áreas específicas del conocimiento.
                            </p>
                        </div>

                        <div
                            ref={orientacionesRef.elementRef}
                            className={cn(
                                "grid md:grid-cols-3 border border-muted2 animate-on-scroll",
                                orientacionesRef.isIntersecting
                                    ? "animate-fade-in-up"
                                    : "",
                            )}
                        >
                            {orientaciones.map((o, i) => (
                                <div
                                    key={o.name}
                                    className={cn(
                                        "p-7 bg-white hover:bg-primary/5 transition-colors flex flex-col gap-4",
                                        i < orientaciones.length - 1
                                            ? "border-b md:border-b-0 md:border-r border-muted2"
                                            : "",
                                    )}
                                >
                                    <div className="w-9 h-9 bg-primary/10 text-primary flex items-center justify-center">
                                        <o.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-heading font-bold text-foreground mb-1 leading-tight">
                                            {o.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground font-body italic mb-3">
                                            {o.fullName}
                                        </p>
                                        <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                                            {o.description}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                                            Materias
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {o.materias.map((m) => (
                                                <span
                                                    key={m}
                                                    className="px-2 py-0.5 bg-muted/40 text-foreground text-xs"
                                                >
                                                    {m}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground font-body mt-auto pt-3 border-t border-muted2">
                                        <span className="font-semibold text-foreground">
                                            Perfil:{" "}
                                        </span>
                                        {o.perfil}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 3. HISTORIA E INFORMACIÓN INSTITUCIONAL ── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Historia */}
                            <div
                                ref={historiaRef.elementRef}
                                className={cn(
                                    "animate-on-scroll",
                                    historiaRef.isIntersecting
                                        ? "animate-fade-in-up"
                                        : "",
                                )}
                            >
                                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                                    Historia
                                </p>
                                <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                    Nuestra historia
                                </h2>
                                <div className="w-10 h-0.5 bg-primary mb-8" />

                                <div className="prose prose-sm max-w-none text-muted-foreground font-body leading-relaxed space-y-4">
                                    <p>
                                        El Instituto Preuniversitario San Pablo
                                        Tucumán es la primera escuela
                                        preuniversitaria de gestión privada.
                                        Fue fundado por la Universidad de San
                                        Pablo – Tucumán y comenzó su primer año
                                        académico en 2020 con el nivel
                                        secundario.
                                    </p>
                                    <p>
                                        Entre las características del
                                        establecimiento se destacan la{" "}
                                        <strong className="text-foreground">
                                            autodisciplina
                                        </strong>
                                        , la{" "}
                                        <strong className="text-foreground">
                                            jornada extendida
                                        </strong>{" "}
                                        (ocho horas desde las 8:00), la
                                        enseñanza del{" "}
                                        <strong className="text-foreground">
                                            inglés intensivo
                                        </strong>{" "}
                                        y la participación en talleres de medios
                                        audiovisuales y de arte, además de
                                        campamentos.
                                    </p>
                                    <p>
                                        Luego del ciclo básico de tres años, el
                                        ciclo orientado ofrece tres opciones:{" "}
                                        <strong className="text-foreground">
                                            Tecnología y Desarrollo de Software
                                        </strong>
                                        ;{" "}
                                        <strong className="text-foreground">
                                            Ciencias Naturales y Medio Ambiente
                                        </strong>
                                        ; y{" "}
                                        <strong className="text-foreground">
                                            Turismo y Turismo Cultural
                                        </strong>
                                        .
                                    </p>
                                </div>

                                {/* Visión y Valores */}
                                <div className="mt-10 space-y-4">
                                    <div className="border-l-4 border-primary bg-primary/5 p-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Target className="w-4 h-4 text-primary" />
                                            <h3 className="font-heading font-bold text-foreground">
                                                Nuestra Visión
                                            </h3>
                                        </div>
                                        <p className="text-sm text-muted-foreground font-body leading-relaxed">
                                            Avanzamos en la concepción de un
                                            Polo Educativo donde las acciones
                                            pedagógicas acompañan a las personas
                                            desde temprana edad hasta la
                                            formación superior, colaborando en
                                            la construcción de ciudadanos que
                                            influyan positivamente en su medio
                                            social, cultural y económico.
                                        </p>
                                    </div>
                                    <div className="border-l-4 border-primary bg-primary p-6">
                                        <div className="flex items-center gap-2 mb-2">
                                            <Award className="w-4 h-4 text-white" />
                                            <h3 className="font-heading font-bold text-white">
                                                Nuestros Valores
                                            </h3>
                                        </div>
                                        <p className="text-sm text-white/90 font-body leading-relaxed">
                                            Sostenemos un trabajo profesional
                                            docente que acompaña la autogestión
                                            de los aprendizajes y una
                                            convivencia basada en la
                                            autodisciplina y el respeto mutuo.
                                            Nuestra comunidad educativa se
                                            consolida con un profundo sentido de
                                            pertenencia y compromiso con la
                                            excelencia.
                                        </p>
                                    </div>
                                </div>

                                {/* Características */}
                                <div className="mt-10">
                                    <h3 className="font-heading font-bold text-foreground mb-4">
                                        Características distintivas
                                    </h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {caracteristicas.map((c, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-2.5 text-sm text-muted-foreground font-body"
                                            >
                                                <c.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                <span>{c.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Información institucional */}
                            <div className="space-y-8">
                                {/* Imagen */}
                                <div className="relative overflow-hidden border border-muted2 h-64">
                                    <img
                                        src="/images/ipre-img.jpeg"
                                        alt="Instituto Preuniversitario San Pablo Tucumán"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <p className="font-heading font-bold text-lg">
                                            Instituto Preuniversitario San Pablo
                                            Tucumán
                                        </p>
                                        <p className="text-white/80 text-sm">
                                            Formando estudiantes librepensantes
                                            y ciudadanos del mundo
                                        </p>
                                    </div>
                                </div>

                                {/* Contacto */}
                                <div className="border border-muted2 p-8">
                                    <h3 className="font-heading font-bold text-xl text-foreground mb-6">
                                        Información de Contacto
                                    </h3>
                                    <div className="space-y-5">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-sm text-foreground">
                                                    Ubicación
                                                </p>
                                                <p className="text-muted-foreground text-sm font-body">
                                                    Campus San Pablo — Sede del
                                                    Nivel Secundario
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="font-semibold text-sm text-foreground">
                                                    Teléfonos
                                                </p>
                                                <p className="text-muted-foreground text-sm font-body">
                                                    +54 9 381 495-2972
                                                    <br />
                                                    +54 9 381 680-2457
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Vida estudiantil condensada */}
                                <div className="border border-muted2 p-8">
                                    <h3 className="font-heading font-bold text-xl text-foreground mb-5">
                                        Vida Estudiantil
                                    </h3>
                                    <div className="space-y-4">
                                        {[
                                            {
                                                title: "Talleres de Arte y Medios",
                                                desc: "Talleres de medios audiovisuales, arte visual y expresión creativa.",
                                            },
                                            {
                                                title: "Idiomas Intensivos",
                                                desc: "Inglés y portugués con certificaciones internacionales desde 1.° año.",
                                            },
                                            {
                                                title: "Campamentos Educativos",
                                                desc: "Campamentos, viajes de estudio y experiencias formativas al aire libre.",
                                            },
                                            {
                                                title: "Tutorías y Acompañamiento",
                                                desc: "Seguimiento permanente de las trayectorias y orientación vocacional.",
                                            },
                                            {
                                                title: "Comedor Universitario",
                                                desc: "Almuerzo opcional en el Comedor Universitario del campus.",
                                            },
                                        ].map((item, i) => (
                                            <div
                                                key={i}
                                                className={cn(
                                                    "pb-4 text-sm",
                                                    i < 4
                                                        ? "border-b border-muted2"
                                                        : "",
                                                )}
                                            >
                                                <p className="font-semibold text-foreground mb-0.5">
                                                    {item.title}
                                                </p>
                                                <p className="text-muted-foreground font-body">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center border border-muted2 bg-white p-8 md:p-12">
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                                    Dirección Institucional
                                </p>
                                <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6 leading-tight">
                                    Acompañamiento cercano para la trayectoria
                                    de cada estudiante
                                </h2>
                                <div className="w-10 h-0.5 bg-primary mb-6" />
                                <p className="text-muted-foreground font-body leading-relaxed mb-4">
                                    La dirección institucional del Instituto
                                    Preuniversitario San Pablo Tucumán acompaña
                                    el desarrollo académico, personal y humano
                                    de los estudiantes, fortaleciendo una
                                    propuesta educativa basada en la
                                    autodisciplina, la innovación y el
                                    compromiso con la comunidad.
                                </p>
                                <p className="text-sm text-muted-foreground font-body">
                                    Dirección Institucional — Instituto
                                    Preuniversitario San Pablo Tucumán
                                </p>
                            </div>

                            <div className="relative">
                                <div className="aspect-[4/5] overflow-hidden border border-muted2 max-w-sm mx-auto">
                                    <img
                                        src="/images/autoridad-ipre.png"
                                        alt="Directora del Instituto Preuniversitario San Pablo Tucumán"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── 4. CTA ── */}
                <CtaPage
                    title="Formá parte del primer Instituto Preuniversitario de gestión privada"
                    description="Descubrí una educación secundaria innovadora con jornada extendida, idiomas intensivos y formación por proyectos que te prepara para la universidad"
                    url="/contacto"
                />
            </main>

            <Footer />
        </div>
    );
};

export default InstitutoPreuniversitario;
