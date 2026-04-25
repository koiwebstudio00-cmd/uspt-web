import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import {
    Award,
    Users,
    Globe2,
    Leaf,
    BookOpen,
    Lightbulb,
    Target,
    Building,
    Monitor,
    Heart,
    Trophy,
    Palette,
} from "lucide-react";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import CtaPage from "@/components/CtaPage";

const breadcrumbItems = [{ label: "Nosotros", href: "/nosotros" }];

const ventajas = [
    {
        icon: Award,
        title: "Programa de becas",
        description: "Desde 2008 apoyando trayectorias con mérito y compromiso.",
    },
    {
        icon: Users,
        title: "Inclusión y apoyo",
        description: "Acompañamiento integral a estudiantes de bajos recursos.",
    },
    {
        icon: Globe2,
        title: "Pacto Global ONU",
        description: "Adherimos a los principios de Naciones Unidas.",
    },
    {
        icon: Leaf,
        title: "Sustentabilidad",
        description: "Gestión responsable y proyectos de impacto ambiental.",
    },
];

// ── Slider ────────────────────────────────────────────────────────────────────

const sliderImages = [
    { src: "/images/nosotros-2.webp", alt: "Archivo histórico USPT" },
    { src: "/images/nosotros-1.webp", alt: "Campus actual USPT" },
    { src: "/images/IMG_4687.webp", alt: "Estudiantes USPT" },
];

const PhotoSlider: React.FC = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % sliderImages.length);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="aspect-square overflow-hidden border border-muted2 relative">
            {sliderImages.map((img, index) => (
                <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000"
                    style={{ opacity: index === current ? 1 : 0 }}
                />
            ))}
        </div>
    );
};

// ── Secciones ─────────────────────────────────────────────────────────────────

const HeroInstitucional: React.FC = () => (
    <section>
        <HeroPageComponent
            title="Somos la Universidad de San Pablo – Tucumán"
            description="La primera universidad privada laica del NOA, creada para formar líderes del futuro."
            imageUrl="/images/IMG_4691.webp"
        />
        <div className="container pt-8">
            <Breadcrumbs items={breadcrumbItems} />
        </div>
    </section>
);

const HistoriaFundacion: React.FC = () => {
    const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    return (
        <section id="historia" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div
                        ref={ref.elementRef}
                        className={cn(
                            "animate-on-scroll",
                            ref.isIntersecting ? "animate-fade-in-up" : "",
                        )}
                    >
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                            Nuestra historia
                        </p>
                        <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                            Más de 15 años formando profesionales
                        </h2>
                        <div className="w-10 h-0.5 bg-primary mb-8" />

                        <div className="prose prose-lg max-w-none font-body space-y-6">
                            <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
                                La Universidad de San Pablo – Tucumán (USPT) fue
                                creada en{" "}
                                <strong className="text-primary">2008</strong>{" "}
                                con una misión clara: potenciar el desarrollo del
                                NOA. En{" "}
                                <strong className="text-primary">2010</strong>{" "}
                                marcamos un hito importante con la apertura de
                                las primeras sedes e inicio de nuestras carreras
                                fundacionales, estableciendo las bases de lo que
                                sería una institución comprometida con la
                                excelencia académica.
                            </p>
                            <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
                                Para{" "}
                                <strong className="text-primary">2015</strong>,
                                habíamos logrado importantes reconocimientos
                                académicos y la expansión de nuestra oferta de
                                grado y posgrado. El año{" "}
                                <strong className="text-primary">2020</strong>{" "}
                                nos desafió a reinventarnos, llevando adelante
                                una transformación digital que fortaleció
                                significativamente la experiencia educativa de
                                nuestros estudiantes.
                            </p>
                            <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
                                En{" "}
                                <strong className="text-primary">2023</strong>,
                                alcanzamos nuevas acreditaciones y establecimos
                                alianzas estratégicas tanto nacionales como
                                internacionales, reafirmando nuestro compromiso
                                con la calidad educativa y la proyección global
                                de nuestros programas académicos.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                                A lo largo de nuestra historia consolidamos una
                                comunidad académica comprometida con la
                                excelencia, la inclusión y el impacto social,
                                siempre con mirada de futuro.
                            </p>
                        </div>
                    </div>

                    <PhotoSlider />
                </div>
            </div>
        </section>
    );
};

const RSE: React.FC = () => (
    <section id="rse" className="py-20 bg-primary/10">
        <div className="container mx-auto px-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Responsabilidad Social
            </p>
            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                Responsabilidad Social Empresaria
            </h2>
            <div className="w-10 h-0.5 bg-primary mb-8" />
            <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mb-12">
                Crecemos junto a nuestra comunidad con programas e iniciativas
                que promueven la inclusión, la sostenibilidad y la ciudadanía
                global.
            </p>
        </div>
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-muted2">
                {ventajas.map((v, i) => (
                    <div
                        key={v.title}
                        className={cn(
                            "p-6 flex flex-col gap-2 bg-white hover:bg-primary/5 transition-colors",
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
                            {v.title}
                        </p>
                        <p className="font-body text-sm text-foreground leading-snug">
                            {v.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const MisionVisionValores: React.FC = () => {
    const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    return (
        <section id="mision-vision" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div
                    ref={ref.elementRef}
                    className={cn(
                        "grid lg:grid-cols-2 gap-0 min-h-[600px] overflow-hidden border border-muted2 animate-on-scroll",
                        ref.isIntersecting ? "animate-fade-in-up" : "",
                    )}
                >
                    {/* Imagen */}
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0">
                            <img
                                src="/images/IMG_4691.webp"
                                alt="Campus Universidad de San Pablo – Tucumán"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/60" />
                        </div>
                        <div className="relative z-10 text-center text-white p-8">
                            <div className="w-14 h-14 bg-white/20 flex items-center justify-center mx-auto mb-4">
                                <Target className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-2">
                                Formando Líderes
                            </h3>
                            <p className="text-white/90 font-body">
                                Comprometidos con el desarrollo regional
                            </p>
                        </div>
                    </div>

                    {/* Contenido */}
                    <div className="bg-white flex items-center">
                        <div className="p-8 lg:p-12 w-full">
                            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                                Nuestra misión
                            </p>
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Misión institucional
                            </h2>
                            <div className="w-10 h-0.5 bg-primary mb-8" />

                            <div className="space-y-5 font-body">
                                <p className="text-lg text-foreground leading-relaxed">
                                    La Universidad de San Pablo – Tucumán asume
                                    la misión de{" "}
                                    <strong className="text-primary">
                                        formar profesionales íntegros
                                    </strong>
                                    , con pensamiento crítico, compromiso ético y
                                    capacidad de liderazgo, orientados a
                                    transformar la realidad social, cultural y
                                    productiva de la región.
                                </p>
                                <p className="text-lg text-foreground leading-relaxed">
                                    Promueve la{" "}
                                    <strong className="text-primary">
                                        generación, aplicación y transferencia del
                                        conocimiento
                                    </strong>{" "}
                                    científico, tecnológico y artístico,
                                    consolidando una comunidad académica
                                    comprometida con el desarrollo humano
                                    sustentable, la innovación y la excelencia
                                    educativa.
                                </p>
                                <p className="text-lg text-foreground leading-relaxed">
                                    Desde sus institutos y áreas académicas,
                                    impulsa la{" "}
                                    <strong className="text-primary">
                                        articulación con la sociedad
                                    </strong>{" "}
                                    a través de proyectos de extensión,
                                    investigación y formación continua.
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary" />
                                <div className="w-2 h-2 bg-primary/60" />
                                <div className="w-2 h-2 bg-primary/30" />
                                <span className="text-sm text-muted-foreground font-body">
                                    Compromiso con la excelencia académica
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


const AutoridadesInstitucionales: React.FC = () => {
    const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

    const directores = [
        {
            icon: Lightbulb,
            name: "MG. Karina Gonzales",
            instituto:
                "Instituto de Desarrollo e Innovación Tecnológica para la Competitividad Territorial",
            email: "fpzamora@uspt.edu.ar",
        },
        {
            icon: Palette,
            name: "Diseñador Industrial José María Simón",
            instituto: "Instituto de Diseño, Estrategia & Creatividad",
            email: "jsimon@uspt.edu.ar",
        },
        {
            icon: Heart,
            name: "Dr. Horacio Deza",
            instituto: "Instituto de Salud y Calidad de Vida",
            email: "ddeza@uspt.edu.ar",
        },
        {
            icon: Monitor,
            name: "Lic. Agustina Pedraza",
            instituto:
                "Instituto de Educación a Distancia y Tecnología Educativa",
            email: "apedraza@uspt.edu.ar",
        },
        {
            icon: Lightbulb,
            name: "Lic. Agustina Pedraza",
            instituto: "Instituto de Innovación Educativa",
            email: "apedraza@uspt.edu.ar",
        },
        {
            icon: Trophy,
            name: "Federico Egloff",
            instituto: "Instituto de Educación y Gestión Deportiva",
            email: "fegloff@uspt.edu.ar",
        },
    ];

    return (
        <section
            id="autoridades"
            className="py-20 bg-white border-t border-muted/40"
        >
            <div className="container mx-auto px-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                    Gobierno universitario
                </p>
                <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                    Autoridades Institucionales
                </h2>
                <div className="w-10 h-0.5 bg-primary mb-12" />

                <div
                    ref={ref.elementRef}
                    className={cn(
                        "space-y-8 animate-on-scroll",
                        ref.isIntersecting ? "animate-fade-in-up" : "",
                    )}
                >
                    {/* Fundación */}
                    <div className="border border-muted2 p-8">
                        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
                            Fundación para el Desarrollo
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-9 h-9 bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                <Users className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="font-heading font-bold text-foreground">
                                    Dra. Catalina Inés Lonac
                                </p>
                                <p className="text-sm text-muted-foreground font-body">
                                    Presidenta
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Rectorado */}
                    <div className="border border-muted2">
                        <div className="px-8 py-5 border-b border-muted2">
                            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                Universidad de San Pablo – Tucumán · Rectorado
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3">
                            {[
                                {
                                    icon: Award,
                                    name: "Dr. Ramiro Albarracín",
                                    cargo: "Rector",
                                },
                                {
                                    icon: Building,
                                    name: "Arq. Matías Rohmer Litzman",
                                    cargo: "Vicerrector",
                                },
                                {
                                    icon: BookOpen,
                                    name: "Lic. Alejandra Sánchez",
                                    cargo: "Secretaria Académica",
                                },
                            ].map((p, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "flex items-center gap-4 p-8 hover:bg-primary/5 transition-colors",
                                        i < 2
                                            ? "border-b md:border-b-0 md:border-r border-muted2"
                                            : "",
                                    )}
                                >
                                    <div className="w-9 h-9 bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                        <p.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-heading font-bold text-foreground text-sm">
                                            {p.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground font-body">
                                            {p.cargo}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Directores */}
                    <div className="border border-muted2">
                        <div className="px-8 py-5 border-b border-muted2">
                            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                                Directores de Institutos
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2">
                            {directores.map((d, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        "flex items-start gap-4 p-6 hover:bg-primary/5 transition-colors",
                                        i % 2 === 0 &&
                                            i < directores.length - 1
                                            ? "border-b md:border-r border-muted2"
                                            : "",
                                        i % 2 !== 0 &&
                                            i < directores.length - 1
                                            ? "border-b border-muted2"
                                            : "",
                                    )}
                                >
                                    <div className="w-9 h-9 bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <d.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="font-heading font-bold text-foreground text-sm">
                                            {d.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground font-body leading-relaxed mb-1">
                                            {d.instituto}
                                        </p>
                                        <p className="text-xs text-primary font-body">
                                            {d.email}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// ── Page ──────────────────────────────────────────────────────────────────────

const Nosotros: React.FC = () => (
    <div className="min-h-screen bg-background">
        <Navbar1 />
        <main>
            <HeroInstitucional />
            <HistoriaFundacion />
            <RSE />
            <MisionVisionValores />
            <AutoridadesInstitucionales />
            <CtaPage
                title="Una universidad con historia, visión y compromiso con el futuro"
                description=""
                buttonText="Explorá nuestra oferta"
                url="/universidad"
            />
        </main>
        <Footer />
    </div>
);

export default Nosotros;
