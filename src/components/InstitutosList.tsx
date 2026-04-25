import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroPageComponent } from "./HeroPageComponent";
import { Breadcrumbs } from "./ui/breadcrumbs";

const breadcrumbItems = [{ label: "Institutos" }];

const institutos = [
    {
        title: "Instituto de Diseño, Estrategia & Creatividad",
        description:
            "Formación integral en diseño, arquitectura y disciplinas creativas con enfoque innovador y sustentable.",
        src: "/images/institutos/instituto-diseno-estrategia-creatividad.webp",
        areas: ["Diseño", "Arquitectura"],
        link: "/institutos/diseno-estrategia-creatividad",
    },
    {
        title: "Instituto de Educación y Gestión Deportiva",
        description:
            "Desarrollo de profesionales en el ámbito deportivo, recreativo y de gestión de actividades físicas.",
        src: "/images/institutos/instituto-educacion-gestion-deportiva.webp",
        areas: ["Deportes", "Recreación"],
        link: "/institutos/educacion-y-gestion-deportiva",
    },
    {
        title: "Instituto de Estudios Sociales, Política y Cultura",
        description:
            "Formación en ciencias sociales, jurídicas y humanísticas con perspectiva crítica y compromiso social.",
        src: "/images/institutos/instituto-estudios-sociales-politica-cultura..webp",
        areas: ["Derecho", "Ciencias Políticas"],
        link: "/institutos/estudios-sociales-politica-y-cultura",
    },
    {
        title: "Instituto de Desarrollo e Innovación Tecnológica",
        description:
            "Investigación y desarrollo en tecnologías aplicadas para la competitividad territorial y sustentabilidad.",
        src: "/images/institutos/instituto-desarrollo-innovacion-tecnologica.webp",
        areas: ["Tecnología", "Innovación"],
        link: "/institutos/desarrollo-e-innovacion-tecnologica-para-la-competitividad-territorial",
    },
    {
        title: "Instituto de Educación a Distancia y Tecnología Educativa",
        description:
            "Modalidades virtuales y semipresenciales con tecnología educativa de vanguardia.",
        src: "/images/institutos/instituto-educacion-distancia-tecnologia-educativa..webp",
        areas: ["Educación Virtual", "Tecnología Educativa"],
        link: "/institutos/educacion-a-distancia-y-tecnologia-educativa",
    },
    {
        title: "Instituto de Salud y Calidad de Vida",
        description:
            "Formación de profesionales de la salud con enfoque humanístico y excelencia técnica.",
        src: "/images/institutos/instituto-salud-calidad-vida.webp",
        areas: ["Medicina", "Kinesiología"],
        link: "/institutos/salud-y-calidad-de-vida",
    },
];

const InstitutosList = () => {
    return (
        <div>
            <HeroPageComponent
                minHeight="450"
                title="Nuestros Institutos"
                description="Organización académica especializada por áreas de conocimiento, cada instituto desarrolla investigación, docencia y extensión en su campo específico."
                imageUrl="/images/IMG_4689.webp"
            />
            <div className="container pt-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {institutos.map((instituto, i) => (
                            <Link
                                key={i}
                                to={instituto.link}
                                className="group flex flex-col border hover:bg-primary/5 transition-colors"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={instituto.src}
                                        alt={instituto.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6 flex flex-col gap-3 flex-1">
                                    <div className="flex flex-wrap gap-1.5">
                                        {instituto.areas.map((area) => (
                                            <span
                                                key={area}
                                                className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium"
                                            >
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="font-heading font-bold text-foreground leading-snug">
                                        {instituto.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1">
                                        {instituto.description}
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
        </div>
    );
};

export default InstitutosList;
