import React, { useState, useEffect } from "react";
import heroImage from "@/assets/hero-university.jpg";
// Se elimina Header para evitar import no usado
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import {
    Award,
    Users,
    Globe2,
    Leaf,
    BookOpen,
    Handshake,
    Lightbulb,
    Target,
    Gem,
    Building,
    Monitor,
    Heart,
    Trophy,
    Palette,
} from "lucide-react";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import InfoAdd from "@/components/InfoAdd";
import CtaPage from "@/components/CtaPage";

const breadcrumbItems = [{ label: "Nosotros", href: "/nosotros" }];

const ventajas = [
    {
        icon: <Award className="" />,
        title: "Programa de becas",
        description:
            "Desde 2008 apoyando trayectorias con mérito y compromiso.",
    },
    {
        icon: <Users className="" />,
        title: "Inclusión y apoyo",
        description: "Acompañamiento integral a estudiantes de bajos recursos.",
    },
    {
        icon: <Globe2 className="" />,
        title: "Pacto Global ONU",
        description: "Adherimos a los principios de Naciones Unidas.",
    },
    {
        icon: <Leaf className="" />,
        title: "Sustentabilidad",
        description: "Gestión responsable y proyectos de impacto ambiental.",
    },
];

const HeroInstitucional: React.FC = () => {
    const titleRef = useIntersectionObserver<HTMLHeadingElement>({
        threshold: 0.3,
    });
    const subtitleRef = useIntersectionObserver<HTMLParagraphElement>({
        threshold: 0.3,
    });
    const buttonsRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
    });

    return (
        <section className="">
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
};

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

const HistoriaFundacion: React.FC = () => {
    const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    return (
        <section id="historia" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Historia institucional */}
                    <div
                        ref={ref.elementRef}
                        className={cn(
                            "animate-on-scroll",
                            ref.isIntersecting ? "animate-fade-in-up" : "",
                        )}
                    >
                        <div className="prose prose-lg max-w-none font-body">
                            <p className="text-foreground/90 leading-relaxed mb-6">
                                La Universidad de San Pablo – Tucumán (USPT)
                                fue creada en{" "}
                                <strong className="text-primary">2008</strong>{" "}
                                con una misión clara: potenciar el desarrollo
                                del NOA. En{" "}
                                <strong className="text-primary">2010</strong>{" "}
                                marcamos un hito importante con la apertura de
                                las primeras sedes e inicio de nuestras carreras
                                fundacionales, estableciendo las bases de lo que
                                sería una institución comprometida con la
                                excelencia académica.
                            </p>
                            <p className="text-foreground/90 leading-relaxed mb-6">
                                Para{" "}
                                <strong className="text-primary">2015</strong>,
                                habíamos logrado importantes reconocimientos
                                académicos y la expansión de nuestra oferta de
                                grado y posgrado, consolidando nuestra posición
                                como referente educativo en la región. El año{" "}
                                <strong className="text-primary">2020</strong>{" "}
                                nos desafió a reinventarnos, llevando adelante
                                una transformación digital que fortaleció
                                significativamente la experiencia educativa de
                                nuestros estudiantes.
                            </p>
                            <p className="text-foreground/90 leading-relaxed mb-6">
                                En{" "}
                                <strong className="text-primary">2023</strong>,
                                alcanzamos nuevas acreditaciones y establecimos
                                alianzas estratégicas tanto nacionales como
                                internacionales, reafirmando nuestro compromiso
                                con la calidad educativa y la proyección global
                                de nuestros programas académicos.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-8">
                                A lo largo de nuestra historia consolidamos una
                                comunidad académica comprometida con la
                                excelencia, la inclusión y el impacto social,
                                siempre con mirada de futuro.
                            </p>
                        </div>
                    </div>

                    {/* Slider de fotos */}
                    <PhotoSlider />
                </div>
            </div>
        </section>
    );
};

const RSE: React.FC = () => {
    const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    return (
        <section id="rse" className="py-20 bg-primary/10  ">
            <div className="">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl mt-10 font-heading font-medium text-foreground mb-6">
                        Responsabilidad Social Empresaria
                    </h2>
                    <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                        Crecemos junto a nuestra comunidad con programas e
                        iniciativas que promueven la inclusión, la
                        sostenibilidad y la ciudadanía global.
                    </p>
                </div>
                <InfoAdd items={ventajas} columnas={4} />
            </div>
        </section>
    );
};

const MisionVisionValores: React.FC = () => {
    const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    return (
        <section id="mision-vision" className="py-20 bg-white ">
            <div className="container mx-auto px-4">
                <div
                    ref={ref.elementRef}
                    className={cn(
                        "grid lg:grid-cols-2 gap-0 min-h-[600px]  overflow-hidden shadow-lg animate-on-scroll",
                        ref.isIntersecting ? "animate-fade-in-up" : "",
                    )}
                >
                    {/* Columna izquierda - Imagen de fondo */}
                    <div className="relative bg-gradient-to-br from-primary/90 to-primary/70 flex items-center justify-center">
                        <div className="absolute inset-0">
                            <img
                                src="/images/IMG_4691.webp"
                                alt="Campus Universidad de San Pablo – Tucumán"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/60" />
                        </div>
                        <div className="relative z-10 text-center text-white p-8">
                            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold font-heading mb-2">
                                Formando Líderes
                            </h3>
                            <p className="text-white/90 font-body">
                                Comprometidos con el desarrollo regional
                            </p>
                        </div>
                    </div>

                    {/* Columna derecha - Contenido textual */}
                    <div className="bg-white flex items-center">
                        <div className="p-8 lg:p-12 w-full">
                            {/* Encabezado */}
                            <div className="mb-8">
                                <h2 className="text-sm font-bold tracking-wider text-muted-foreground uppercase mb-2 font-heading">
                                    NUESTRA MISIÓN
                                </h2>
                                <div className="w-12 h-0.5 bg-primary mb-6"></div>
                            </div>

                            {/* Contenido */}
                            <div className="space-y-6 font-body">
                                <p className="text-lg text-foreground leading-relaxed">
                                    La Universidad de San Pablo – Tucumán
                                    asume la misión de
                                    <strong className="text-primary">
                                        {" "}
                                        formar profesionales íntegros
                                    </strong>
                                    , con pensamiento crítico, compromiso ético
                                    y capacidad de liderazgo, orientados a
                                    transformar la realidad social, cultural y
                                    productiva de la región.
                                </p>

                                <p className="text-lg text-foreground leading-relaxed">
                                    Promueve la{" "}
                                    <strong className="text-primary">
                                        generación, aplicación y transferencia
                                        del conocimiento
                                    </strong>{" "}
                                    científico, tecnológico y artístico,
                                    consolidando una comunidad académica
                                    comprometida con el desarrollo humano
                                    sustentable, la innovación y la excelencia
                                    educativa.
                                </p>

                                <p className="text-lg text-foreground leading-relaxed">
                                    Desde sus institutos y áreas académicas,
                                    impulsa la
                                    <strong className="text-primary">
                                        {" "}
                                        articulación con la sociedad
                                    </strong>{" "}
                                    a través de proyectos de extensión,
                                    investigación y formación continua,
                                    contribuyendo activamente al progreso de
                                    Tucumán y del país.
                                </p>
                            </div>

                            {/* Elementos decorativos */}
                            <div className="mt-8 flex items-center gap-4">
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                                    <div className="w-2 h-2 rounded-full bg-primary/30"></div>
                                </div>
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

const ResponsabilidadesInstitucionales: React.FC = () => {
    const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    return (
        <>
            <div></div>
        </>
    );
};

const StaffInstitucional: React.FC = () => {
    const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    return (
        <section
            id="staff"
            className="py-20 bg-muted/30 border-t border-muted/40"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                        Staff
                    </h2>
                    <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                        Presidenta, Rector, Vicerrector y equipo institucional.
                    </p>
                </div>
                <div
                    ref={ref.elementRef}
                    className={cn(
                        "grid md:grid-cols-3 gap-6 animate-on-scroll",
                        ref.isIntersecting ? "animate-fade-in-up" : "",
                    )}
                >
                    {[
                        {
                            title: "Presidenta",
                            name: "Dra. Catalina Inés Lonac",
                        },
                        { title: "Rector", name: "Dr. Ramiro Albarracín" },
                        {
                            title: "Vicerrector",
                            name: "Arq. Matías Rohmer Litzman",
                        },
                    ].map((p, i) => (
                        <Card key={i} className="border-muted2">
                            <CardHeader>
                                <CardTitle className="text-lg font-heading text-primary">
                                    {p.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-semibold">{p.name}</p>
                                <p className="text-muted-foreground text-sm">
                                    Autoridad institucional
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const AutoridadesInstitucionales: React.FC = () => {
    const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    return (
        <section
            id="autoridades"
            className="py-20 bg-white border-t border-muted/40"
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                        Autoridades Institucionales
                    </h2>
                </div>

                <div
                    ref={ref.elementRef}
                    className={cn(
                        "space-y-8 animate-on-scroll",
                        ref.isIntersecting ? "animate-fade-in-up" : "",
                    )}
                >
                    {/* Fundación para el Desarrollo */}
                    <Card className="border-muted2">
                        <CardHeader>
                            <CardTitle className="text-xl font-heading text-primary">
                                Fundación para el Desarrollo
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold">
                                        Dra. Catalina Inés Lonac
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                        Presidenta
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Universidad de San Pablo – Tucumán - Rectorado */}
                    <Card className="border-muted2">
                        <CardHeader>
                            <CardTitle className="text-xl font-heading text-primary">
                                Universidad de San Pablo – Tucumán - Rectorado
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                                        <Award className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            Dr. Ramiro Albarracín
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            Rector
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                                        <Building className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            Arq. Matías Rohmer Litzman
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            Vicerrector
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                                        <BookOpen className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">
                                            Lic. Alejandra Sánchez
                                        </p>
                                        <p className="text-muted-foreground text-sm">
                                            Secretaria Académica
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Directores de Institutos */}
                    <Card className="border-muted2">
                        <CardHeader>
                            <CardTitle className="text-xl font-heading text-primary">
                                Directores de Institutos
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                                            <Lightbulb className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                MG. Karina Gonzales
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Instituto de Desarrollo e
                                                Innovación Tecnológica para la
                                                Competitividad Territorial
                                            </p>
                                            <p className="text-primary text-xs">
                                                fpzamora@uspt.edu.ar
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                                            <Palette className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Diseñador Industrial José María
                                                Simón
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Instituto de Diseño, Estrategia
                                                & Creatividad
                                            </p>
                                            <p className="text-primary text-xs">
                                                jsimon@uspt.edu.ar
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                                            <Heart className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Dr. Horacio Deza
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Instituto de Salud y Calidad de
                                                Vida
                                            </p>
                                            <p className="text-primary text-xs">
                                                ddeza@uspt.edu.ar
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                                            <Monitor className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Lic. Agustina Pedraza
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Instituto de Educación a
                                                Distancia y Tecnología Educativa
                                            </p>
                                            <p className="text-primary text-xs">
                                                apedraza@uspt.edu.ar
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                                            <Lightbulb className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Lic. Agustina Pedraza
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Instituto de Innovación
                                                Educativa
                                            </p>
                                            <p className="text-primary text-xs">
                                                apedraza@uspt.edu.ar
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                                            <Trophy className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="font-semibold">
                                                Federico Egloff
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Instituto de Educación y Gestión
                                                Deportiva
                                            </p>
                                            <p className="text-primary text-xs">
                                                fegloff@uspt.edu.ar
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

<CtaPage
    title="Una universidad con historia, visión y compromiso con el
                        futuro"
    description="Comenzá tu inscripción online o solicitá más
                            información sobre la carrera que te interesa"
    url="/contacto"
/>;

const Nosotros: React.FC = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />
            <main>
                <HeroInstitucional />
                <HistoriaFundacion />
                <RSE />
                <MisionVisionValores />
                <ResponsabilidadesInstitucionales />
                <AutoridadesInstitucionales />
                <CtaPage
                    title="Una universidad con historia, visión y compromiso con el
                        futuro"
                    description=""
                    buttonText="Explorá nuestra oferta"
                    url="/universidad"
                />
            </main>
            <Footer />
        </div>
    );
};

export default Nosotros;
