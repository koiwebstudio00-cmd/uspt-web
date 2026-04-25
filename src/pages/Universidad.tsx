import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";
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

const secciones = [
    {
        icon: GraduationCap,
        title: "Carreras",
        description:
            "Amplia oferta académica de grado en todas las áreas del conocimiento",
        link: "/carreras",
        image: "/images/carreras.png",
    },
    {
        icon: Globe,
        title: "Carreras a Distancia",
        description: "Educación virtual de calidad con flexibilidad horaria",
        link: "/carreras-distancia",
        image: "/images/carreras-distancia.jpg",
    },
    {
        icon: Award,
        title: "Posgrado",
        description:
            "Maestrías y especializaciones para el desarrollo profesional",
        link: "/posgrado",
        image: "/images/posgrado.jpg",
    },
    {
        icon: BookOpen,
        title: "Extensión Universitaria",
        description: "Cursos y programas abiertos a toda la comunidad",
        link: "/extension-universitaria",
        image: "/images/institucional.jpg",
    },
    {
        icon: Users,
        title: "Alumnos",
        description: "Servicios y recursos para estudiantes actuales",
        link: "/alumnos",
        image: "/images/alumnos.jpg",
    },
    {
        icon: Building,
        title: "Institutos",
        description: "Organización académica por áreas de conocimiento",
        link: "/institutos",
        image: "/images/institucional.jpg",
    },
];

const Universidad = () => {
    const breadcrumbItems = [{ label: "Universidad" }];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                <HeroPageComponent
                    imageUrl="/images/IMG_4688.webp"
                    title="Universidad de San Pablo – Tucumán"
                    description="Descubrí toda nuestra propuesta académica y los servicios que ofrecemos para formar profesionales íntegros y comprometidos con el desarrollo regional."
                    minHeight="450px"
                />
                <div className="container pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {secciones.map((seccion, i) => (
                                <Link
                                    key={i}
                                    to={seccion.link}
                                    className="group border flex flex-col hover:bg-primary/5 transition-colors"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={seccion.image}
                                            alt={seccion.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col gap-3 flex-1">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                                <seccion.icon className="w-4 h-4" />
                                            </div>
                                            <h2 className="font-heading font-bold text-foreground">
                                                {seccion.title}
                                            </h2>
                                        </div>
                                        <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1">
                                            {seccion.description}
                                        </p>
                                        <div className="pt-4 border-t border-muted2 flex items-center justify-between">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                                                Explorar
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-primary transition-all group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <CtaPage
                    title="Comenzá tu futuro profesional hoy"
                    description="Descubrí por qué miles de estudiantes eligen Universidad San Pablo Tucumán para su formación universitaria"
                    url="/contacto"
                    buttonText="Inscribite ahora"
                />
            </main>

            <Footer />
        </div>
    );
};

export default Universidad;
