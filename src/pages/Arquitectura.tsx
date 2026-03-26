import React from "react";
import heroImage from "@/assets/hero-university.jpg";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
// Se elimina Header para evitar import no usado
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    GraduationCap,
    Hourglass,
    Building2,
    MapPin,
    LayoutTemplate,
    Download,
    Quote,
} from "lucide-react";
import { Navbar1 } from "@/components/Navbar";

const HeroSection: React.FC = () => {
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
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            <img
                src={heroImage}
                alt="Estudiantes de arquitectura"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <h1
                    ref={titleRef.elementRef}
                    className={cn(
                        "text-4xl md:text-6xl font-bold mb-4 font-heading animate-on-scroll animate-fade-in-scale",
                        titleRef.isIntersecting ? "animate-fade-in-scale" : ""
                    )}
                >
                    Arquitectura
                </h1>
                <p
                    ref={subtitleRef.elementRef}
                    className={cn(
                        "text-lg md:text-xl font-body text-white/90 animate-on-scroll animate-fade-in-up",
                        subtitleRef.isIntersecting ? "animate-fade-in-up" : ""
                    )}
                    style={{ transitionDelay: "0.15s" }}
                >
                    Duración: 5 años | Modalidad: Presencial | Instituto:
                    Diseño, Estrategia y Creatividad
                </p>

                <div
                    ref={buttonsRef.elementRef}
                    className={cn(
                        "mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll animate-slide-in-down",
                        buttonsRef.isIntersecting ? "animate-slide-in-down" : ""
                    )}
                    style={{ transitionDelay: "0.3s" }}
                >
                    <UniversityButton asChild variant="primary" size="lg">
                        <a href="/#contacto">Inscribite ahora</a>
                    </UniversityButton>
                    <UniversityButton asChild variant="tertiary" size="lg">
                        <a href="/#contacto" className="text-white">
                            Solicitá información
                        </a>
                    </UniversityButton>
                </div>
            </div>
        </section>
    );
};

const QuickFacts: React.FC = () => {
    const sectionRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });

    const facts = [
        { icon: GraduationCap, label: "Título", value: "Arquitecto/a" },
        { icon: Hourglass, label: "Duración", value: "5 años – 4550 hs" },
        { icon: Building2, label: "Modalidad", value: "Presencial" },
        { icon: MapPin, label: "Sede", value: "Campus Central" },
        {
            icon: LayoutTemplate,
            label: "Instituto",
            value: "Diseño, Estrategia y Creatividad",
        },
    ];

    return (
        <div>
            <Navbar1 />
            <section className="py-4 lg:py-10 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div
                        ref={sectionRef.elementRef}
                        className={cn(
                            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 animate-on-scroll animate-scale-in",
                            sectionRef.isIntersecting ? "animate-scale-in" : ""
                        )}
                    >
                        {facts.map((f) => (
                            <Card key={f.label} className="border-muted2">
                                <CardHeader className="pt-6 pb-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                                            <f.icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm uppercase tracking-wide text-muted-foreground">
                                            {f.label}
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pb-6 pt-3">
                                    <p className="text-base font-medium font-body">
                                        {f.value}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const GraduateProfile: React.FC = () => {
    const textRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.25,
    });
    const imgRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.25 });

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
                <div
                    ref={textRef.elementRef}
                    className={cn(
                        "animate-on-scroll",
                        textRef.isIntersecting ? "animate-slide-in-left" : ""
                    )}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-heading">
                        Perfil del egresado
                    </h2>
                    <p className="text-muted-foreground mb-4 font-body">
                        Como Arquitecto/a podrás liderar, diseñar y gestionar
                        proyectos arquitectónicos y urbanos con enfoque en
                        sostenibilidad, innovación y compromiso social.
                    </p>
                    <ul className="space-y-2 text-muted-foreground font-body">
                        <li>• Empresas constructoras y desarrolladoras</li>
                        <li>• Estudios de arquitectura y diseño</li>
                        <li>• Organismos públicos de planificación urbana</li>
                        <li>• Docencia e investigación</li>
                    </ul>
                </div>
                <div
                    ref={imgRef.elementRef}
                    className={cn(
                        "relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-muted2 animate-on-scroll",
                        imgRef.isIntersecting ? "animate-slide-in-right" : ""
                    )}
                >
                    <img
                        src="/placeholder.svg"
                        alt="Egresados de Arquitectura trabajando"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

const StudyPlan: React.FC = () => {
    const sectionRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });

    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading">
                        Plan de estudios
                    </h2>
                    <UniversityButton asChild variant="tertiary">
                        <a
                            href="#plan-pdf"
                            className="inline-flex items-center gap-2"
                        >
                            <Download className="w-4 h-4" /> Descargar Plan
                            (PDF)
                        </a>
                    </UniversityButton>
                </div>

                <div
                    ref={sectionRef.elementRef}
                    className={cn(
                        "animate-on-scroll animate-fade-in-up",
                        sectionRef.isIntersecting ? "animate-fade-in-up" : ""
                    )}
                >
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="year1">
                            <AccordionTrigger>Primer año</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc pl-6 space-y-1 font-body">
                                    <li>Introducción a la Arquitectura</li>
                                    <li>Dibujo y Representación</li>
                                    <li>Materiales y Construcción I</li>
                                    <li>Historia de la Arquitectura I</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="year2">
                            <AccordionTrigger>Segundo año</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc pl-6 space-y-1 font-body">
                                    <li>Proyecto Arquitectónico I</li>
                                    <li>Estructuras I</li>
                                    <li>Instalaciones I</li>
                                    <li>Historia de la Arquitectura II</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="year3">
                            <AccordionTrigger>Tercer año</AccordionTrigger>
                            <AccordionContent>
                                <ul className="list-disc pl-6 space-y-1 font-body">
                                    <li>Urbanismo I</li>
                                    <li>Proyecto Arquitectónico II</li>
                                    <li>Materiales y Construcción II</li>
                                    <li>Estructuras II</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

const OfficialResolution: React.FC = () => {
    const ref = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <div
                    ref={ref.elementRef}
                    className={cn(
                        "border border-muted2 p-6 rounded-lg md:p-8 animate-on-scroll",
                        ref.isIntersecting ? "animate-fade-in" : ""
                    )}
                >
                    <h3 className="text-2xl font-bold mb-2 text-primary font-heading">
                        Resolución oficial
                    </h3>
                    <p className="text-muted-foreground font-body mb-4">
                        La carrera se encuentra aprobada por resolución N° XXX
                        del Ministerio de Educación de Tucumán.
                    </p>
                    <UniversityButton asChild variant="tertiary">
                        <a
                            href="#resolucion-pdf"
                            className="inline-flex items-center gap-2"
                        >
                            <Download className="w-4 h-4" /> Descargar
                            resolución
                        </a>
                    </UniversityButton>
                </div>
            </div>
        </section>
    );
};

const TestimonialsBlock: React.FC = () => {
    const gridRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });
    const items = [
        {
            name: "María López",
            role: "Egresada 2023",
            quote: "La carrera me dio herramientas reales para dirigir proyectos y trabajar con equipos multidisciplinarios.",
        },
        {
            name: "Juan Pérez",
            role: "Estudiante",
            quote: "Los talleres y laboratorios son de primer nivel. Aprendés haciendo desde el primer año.",
        },
        {
            name: "Ana Torres",
            role: "Docente",
            quote: "Nos enfocamos en innovación y sostenibilidad, para que cada proyecto tenga impacto en la comunidad.",
        },
    ];

    return (
        <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary font-heading">
                    Comunidad y Testimonios
                </h2>
                <div
                    ref={gridRef.elementRef}
                    className={cn(
                        "grid md:grid-cols-3 gap-6 animate-on-scroll",
                        gridRef.isIntersecting ? "animate-scale-in" : ""
                    )}
                >
                    {items.map((t, i) => (
                        <Card key={i} className="relative border-muted2">
                            <CardContent className="p-6">
                                <Quote className="w-6 h-6 text-primary mb-4" />
                                <p className="text-muted-foreground font-body">
                                    {t.quote}
                                </p>
                                <div className="flex items-center gap-3 mt-4">
                                    <Avatar>
                                        <img
                                            src="/placeholder.svg"
                                            alt={t.name}
                                        />
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold font-heading">
                                            {t.name}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {t.role}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const RelatedPrograms: React.FC = () => {
    const itemsCarreras = [
        { title: "Diseño y Comunicación Visual" },
        { title: "Diseño de Interiores" },
        { title: "Ingeniería Civil" },
        { title: "Gestión de Obras Viales" },
    ];

    const itemsCursos = [
        { title: "AutoCAD y Revit" },
        { title: "Diseño Paramétrico" },
        { title: "Gestión de Proyectos (PMI)" },
        { title: "Eficiencia Energética" },
    ];

    return (
        <section className="py-16">
            <div className="container mx-auto px-4 space-y-10">
                <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary font-heading">
                        Carreras afines
                    </h3>
                    <div className="relative">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {itemsCarreras.map((it, idx) => (
                                    <CarouselItem
                                        key={idx}
                                        className="md:basis-1/2 lg:basis-1/3"
                                    >
                                        <Card className="h-full border-muted2">
                                            <CardContent className="p-6 flex flex-col justify-between h-full">
                                                <div>
                                                    <h4 className="text-lg font-semibold font-heading mb-2">
                                                        {it.title}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground font-body">
                                                        Programas relacionados
                                                        dentro del área de
                                                        diseño y construcción.
                                                    </p>
                                                </div>
                                                <UniversityButton
                                                    variant="tertiary"
                                                    className="mt-4 self-start"
                                                >
                                                    Ver más
                                                </UniversityButton>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="-left-6" />
                            <CarouselNext className="-right-6" />
                        </Carousel>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-6 text-primary font-heading">
                        Cursos complementarios
                    </h3>
                    <div className="relative">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {itemsCursos.map((it, idx) => (
                                    <CarouselItem
                                        key={idx}
                                        className="md:basis-1/2 lg:basis-1/3"
                                    >
                                        <Card className="h-full border-muted2">
                                            <CardContent className="p-6 flex flex-col justify-between h-full">
                                                <div>
                                                    <h4 className="text-lg font-semibold font-heading mb-2">
                                                        {it.title}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground font-body">
                                                        Opciones para potenciar
                                                        tu perfil profesional.
                                                    </p>
                                                </div>
                                                <UniversityButton
                                                    variant="tertiary"
                                                    className="mt-4 self-start"
                                                >
                                                    Ver más
                                                </UniversityButton>
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="-left-6" />
                            <CarouselNext className="-right-6" />
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FinalCTA: React.FC = () => {
    return (
        <section className="py-16 bg-primary/10">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary font-heading">
                    ¿Listo para comenzar tu camino en Arquitectura?
                </h2>
                <p className="text-muted-foreground mb-8 font-body max-w-2xl mx-auto">
                    Estamos para acompañarte en cada paso: inscripción, becas,
                    plan de estudios y más.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <UniversityButton asChild size="lg" variant="primary">
                        <a href="/#contacto">Inscribite ahora</a>
                    </UniversityButton>
                    <UniversityButton asChild size="lg" variant="tertiary">
                        <a href="/#contacto">Solicitá información</a>
                    </UniversityButton>
                </div>
            </div>
        </section>
    );
};

const Arquitectura: React.FC = () => {
    return (
        <main>
            <HeroSection />
            <QuickFacts />
            <GraduateProfile />
            <StudyPlan />
            <OfficialResolution />
            <TestimonialsBlock />
            <RelatedPrograms />
            <FinalCTA />
            <Footer />
        </main>
    );
};

export default Arquitectura;
