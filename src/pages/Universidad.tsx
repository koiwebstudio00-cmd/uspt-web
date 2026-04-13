import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card, CardTitle } from "@/components/ui/card";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import {
    GraduationCap,
    Users,
    BookOpen,
    Globe,
    Award,
    Building,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Universidad = () => {
    const breadcrumbItems = [{ label: "Universidad" }];

    const secciones = [
        {
            icon: GraduationCap,
            title: "Carreras",
            description:
                "Amplia oferta académica de grado en todas las áreas del conocimiento",
            link: "/carreras",
            image: "/images/carreras.png",
            items: [
                "Más de 30 carreras de grado",
                "Formación integral y práctica",
                "Títulos oficiales",
            ],
        },
        {
            icon: Globe,
            title: "Carreras a Distancia",
            description:
                "Educación virtual de calidad con flexibilidad horaria",
            link: "/carreras-distancia",
            image: "/images/carreras-distancia.jpg",
            items: [
                "Modalidad 100% virtual",
                "Plataforma tecnológica avanzada",
                "Misma validez académica",
            ],
        },
        {
            icon: Award,
            title: "Posgrado",
            description:
                "Maestrías y especializaciones para el desarrollo profesional",
            link: "/posgrado",
            image: "/images/posgrado.jpg",
            items: [
                "Maestrías reconocidas",
                "Especializaciones actualizadas",
                "Claustro de excelencia",
            ],
        },
        {
            icon: BookOpen,
            title: "Extensión Universitaria",
            description: "Cursos y programas abiertos a toda la comunidad",
            link: "/extension-universitaria",
            image: "/images/institucional.jpg",
            items: [
                "Cursos de capacitación",
                "Programas comunitarios",
                "Educación continua",
            ],
        },
        {
            icon: Users,
            title: "Alumnos",
            description: "Servicios y recursos para estudiantes actuales",
            link: "/alumnos",
            image: "/images/alumnos.jpg",
            items: [
                "Campus virtual",
                "Biblioteca digital",
                "Servicios estudiantiles",
            ],
        },
        {
            icon: Building,
            title: "Institutos",
            description: "Organización académica por áreas de conocimiento",
            link: "/institutos",
            image: "/images/institucional.jpg",
            items: [
                "6 institutos especializados",
                "Investigación aplicada",
                "Vinculación profesional",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}
                <HeroPageComponent
                    imageUrl="/images/IMG_4688.webp"
                    title="Universidad de San Pablo T"
                    description="Descubrí toda nuestra propuesta académica y los servicios que ofrecemos para formar profesionales íntegros y comprometidos con el desarrollo regional."
                    minHeight="450px"
                />
                <div className="container pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Secciones Principales */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
                            {secciones.map((seccion, index) => {
                                // Hook individual para cada card
                                const cardRef = useIntersectionObserver<HTMLDivElement>({
                                    threshold: 0.2,
                                });

                                return (
                                    <Card
                                        key={index}
                                        ref={cardRef.elementRef}
                                        className={cn(
                                            "order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2 animate-on-scroll",
                                            cardRef.isIntersecting ? "animate-fade-in-up" : ""
                                        )}
                                    >
                                        <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                                            <div className="sm:col-span-5 space-y-6">
                                                <CardTitle className="text-2xl md:text-3xl font-heading font-medium">
                                                    {seccion.title}
                                                </CardTitle>
                                                <p className="text-muted-foreground font-body text-sm">
                                                    {seccion.description}
                                                </p>
                                                <ul className="space-y-2">
                                                    {seccion.items.map(
                                                        (item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="flex items-start gap-2 text-sm text-muted-foreground"
                                                            >
                                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                                <span>{item}</span>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                                <Link
                                                    to={seccion.link}
                                                    className="flex items-center gap-2 group"
                                                >
                                                    <span className="bg-primary p-2 rounded-full transition-all group-hover:scale-105 group-hover:-rotate-45">
                                                        <ArrowRight className="size-5 text-white" />
                                                    </span>
                                                    <span className="font-body font-medium group-hover:underline">
                                                        Explorar {seccion.title}
                                                    </span>
                                                </Link>
                                            </div>
                                            <div className="order-first sm:order-last sm:col-span-5">
                                                <div className="aspect-16/9 border-border overflow-clip border">
                                                    <img
                                                        src={seccion.image}
                                                        alt={seccion.title}
                                                        className="fade-in h-full w-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="/images/institucional.jpg"
                            alt="USPT"
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                        <div className="absolute inset-0 gradient-hero opacity-80" />
                    </div>
                    <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
                        <div className="container mx-auto px-4 text-center">
                            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                                Comenzá tu futuro profesional hoy
                            </h3>
                            <p className="text-xl mb-8 max-w-3xl mx-auto font-body leading-relaxed text-white text-pretty opacity-90">
                                Descubrí por qué miles de estudiantes eligen
                                USPT para su formación universitaria
                            </p>
                            <div className="flex  gap-4 justify-center">
                                <Link
                                    to="/contacto"
                                    className="text-white hover:underline bg-primary/50 py-2 px-4 inline-flex items-center gap-2 group"
                                >
                                    Inscribite Ahora
                                    <ArrowRight className="size-5 transition-all group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Universidad;
