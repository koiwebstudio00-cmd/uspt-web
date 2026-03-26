import { ArrowRight } from "lucide-react";
import { Card } from "./ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Link } from "react-router-dom";
import { HeroPageComponent } from "./HeroPageComponent";
import { Breadcrumbs } from "./ui/breadcrumbs";

const InstitutosList = () => {
    const breadcrumbItems = [{ label: "Institutos" }];


    const institutos = [
        {
            title: "Instituto de Diseño, Estrategia & Creatividad",
            description:
                "Formación integral en diseño, arquitectura y disciplinas creativas con enfoque innovador y sustentable.",
            src: "/images/instituto-diseno.png",
            areas: ["Diseño", "Arquitectura"],
            carreras: [
                "Arquitectura",
                "Licenciatura en Diseño Textil",
                "Licenciatura en Diseño Industrial",
                "Tecnicatura en Paisajismo",
            ],
            ctaText: "Explorar Instituto",
            link: "/institutos/diseno-creatividad",
        },
        {
            title: "Instituto de Educación y Gestión Deportiva",
            description:
                "Desarrollo de profesionales en el ámbito deportivo, recreativo y de gestión de actividades físicas.",
            src: "/images/offerings-2 (1).jpg",
            areas: ["Deportes", "Recreación"],
            carreras: [
                "Guía de Montaña",
                "Licenciatura en Alto Rendimiento Deportivo",
                "Licenciatura en Gestión Deportiva",
            ],
            ctaText: "Explorar Instituto",
            link: "/institutos/educacion-gestion-deportiva",
        },
        {
            title: "Instituto de Estudios Sociales, Política y Cultura",
            description:
                "Formación en ciencias sociales, jurídicas y humanísticas con perspectiva crítica y compromiso social.",
            src: "/images/offerings-3 (1).jpg",
            areas: ["Derecho", "Ciencias Políticas"],
            carreras: [
                "Abogacía",
                "Contador Público",
                "Licenciatura en Ciencia Política",
                "Licenciatura en Comercio Exterior",
            ],
            ctaText: "Explorar Instituto",
            link: "/institutos/estudios-sociales-politica-cultura",
        },
        {
            title: "Instituto de Desarrollo e Innovación Tecnológica",
            description:
                "Investigación y desarrollo en tecnologías aplicadas para la competitividad territorial y sustentabilidad.",
            src: "/images/offerings-4 (1).jpg",
            areas: ["Tecnología", "Innovación"],
            carreras: [
                "Licenciatura en Ciencia y Tecnología de los Alimentos",
                "Tecnicatura en Bromatología",
                "Tecnicatura en Guardaparque",
            ],
            ctaText: "Explorar Instituto",
            link: "/institutos/desarrollo-innovacion-tecnologica",
        },
        {
            title: "Instituto de Educación a Distancia y Tecnología Educativa",
            description:
                "Modalidades virtuales y semipresenciales con tecnología educativa de vanguardia.",
            src: "/images/offerings-5 (1).jpg",
            areas: ["Educación Virtual", "Tecnología Educativa"],
            carreras: [
                "Licenciatura en Ciencias de Datos",
                "Licenciatura en Energías Renovables",
                "Tecnicatura en Seguridad Ciudadana",
            ],
            ctaText: "Explorar Instituto",
            link: "/institutos/educacion-distancia-tecnologia-educativa",
        },
        {
            title: "Instituto de Salud y Calidad de Vida",
            description:
                "Formación de profesionales de la salud con enfoque humanístico y excelencia técnica.",
            src: "/images/upst-campus.webp",
            areas: ["Medicina", "Kinesiología"],
            carreras: [
                "Medicina",
                "Licenciatura en Kinesiología",
                "Licenciatura en Fonoaudiología",
                "Tecnicatura en Emergencias Médicas",
            ],
            ctaText: "Explorar Instituto",
            link: "/institutos/salud-calidad-vida",
        },
    ];

    return (
        <div className="">
                <HeroPageComponent minHeight="450" title="Nuestros Institutos" description="Organización académica especializada por áreas de conocimiento, cada instituto desarrolla investigación, docencia y extensión en su campo específico." imageUrl="/images/IMG_4689.webp"/>
            <div className="container pt-8">
                                <Breadcrumbs items={breadcrumbItems} />
                            </div>
            <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">

                <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
                        {institutos.map((instituto, index) => {
                            // Hook individual para cada card
                            const cardRef = useIntersectionObserver<HTMLDivElement>({
                                threshold: 0.2,
                            });
                            
                            return (
                                <Card
                                    key={index}
                                    ref={cardRef.elementRef}
                                    className={`order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2 animate-on-scroll font-heading font-medium ${
                                        cardRef.isIntersecting ? "animate-fade-in-up" : ""
                                    }`}
                                >
                                <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
                                    <div className="sm:col-span-5">
                                        <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl ">
                                            <Link
                                                to={instituto.link}
                                                className="hover:underline font-body font-medium text-foreground hover:text-primary transition-colors"
                                            >
                                                {instituto.title}
                                            </Link>
                                        </h3>
                                        <p className="text-muted-foreground mt-4 md:mt-5 font-body">
                                            {instituto.description}
                                        </p>
                                        <div className="mt-4">
                                            <h4 className="font-semibold text-foreground text-sm mb-2">
                                                Carreras destacadas:
                                            </h4>
                                            <ul className="space-y-1">
                                                {instituto.carreras.slice(0, 3).map((carrera, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-start gap-2 text-sm text-muted-foreground"
                                                    >
                                                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                        <span>{carrera}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            {instituto.carreras.length > 3 && (
                                                <p className="text-sm text-muted-foreground mt-1">
                                                    +{instituto.carreras.length - 3} carreras más
                                                </p>
                                            )}
                                        </div>
                                        <div className="mt-6 flex items-center space-x-2 md:mt-8">
                                            <Link
                                                to={instituto.link}
                                                className="flex items-center gap-2 group"
                                            >
                                                    <span className="bg-primary p-2 rounded-full transition-all group-hover:scale-105 group-hover:-rotate-45">
                                                    <ArrowRight className="size-5 text-white" />
                                                </span>
                                                <span className="text-primary group-hover:underline">
                                                    {instituto.ctaText}</span>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="order-first sm:order-last sm:col-span-5">
                                        <a
                                            href={instituto.link}
                                            className="block"
                                        >
                                            <div className="aspect-video  border-border overflow-clip border max-h-[150]">
                                                <img
                                                    src={instituto.src}
                                                    alt={instituto.title}
                                                    className="fade-in h-full w-full object-cover transition-opacity duration-200 hover:opacity-70"
                                                />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                </Card>
                            );
                        })}
                </div>
            </div>
            </section>
        </div>
    );
};

export default InstitutosList;