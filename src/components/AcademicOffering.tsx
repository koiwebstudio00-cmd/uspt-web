import { GraduationCap, Monitor, Award, BookOpen } from "lucide-react";
import { UniversityButton } from "./ui/university-button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Gallery4 } from "./ui/gallery4";

const AcademicOffering = () => {
    const titleRef = useIntersectionObserver<HTMLHeadingElement>({
        threshold: 0.3,
    });
    const descriptionRef = useIntersectionObserver<HTMLParagraphElement>({
        threshold: 0.3,
    });
    const gradoRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
    });
    const distanciaRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
    });
    const posgradoRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
    });
    const extensionRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
    });

    const offerings = [
        {
            icon: "/images/carreras.png",
            id: "grado",
            title: "Carreras de Grado",
            subtitle: "Presenciales",
            description:
                "Programas académicos presenciales con modalidad tradicional, laboratorios equipados y práctica profesional supervisada.",
            features: [
                "Modalidad presencial",
                "Práctica profesional",
                "Laboratorios modernos",
            ],
            cta: "Ver Carreras",
            href: "/carreras",
        },
        {
            icon: "/images/carreras a distancia.webp",
            id: "distancia",
            title: "Carreras a Distancia",
            subtitle: "Educación Virtual",
            description:
                "Formación universitaria flexible con tecnología de vanguardia y acompañamiento académico personalizado.",
            features: [
                "100% online",
                "Tutorías virtuales",
                "Flexibilidad horaria",
            ],
            cta: "Explorar Modalidad",
            href: "/carreras-distancia",
        },
        {
            icon: "/images/posgrado.webp",
            id: "posgrado",
            title: "Posgrados",
            subtitle: "Especialización",
            description:
                "Maestrías y especializaciones para profundizar conocimientos y ampliar oportunidades profesionales.",
            features: [
                "Docentes especialistas",
                "Investigación aplicada",
                "Networking profesional",
            ],
            cta: "Ver Posgrados",
            href: "/posgrado",
        },
        {
            icon: "/images/extension.webp",
            id: "extension",
            title: "Extensión Universitaria",
            subtitle: "Educación Continua",
            description:
                "Programas de capacitación, cursos cortos y talleres para el desarrollo profesional continuo.",
            features: [
                "Certificaciones",
                "Cursos cortos",
                "Actualización profesional",
            ],
            cta: "Explorar Cursos",
            href: "/extension-universitaria",
        },
        {
            icon: "/images/institutos.webp",
            id: "institutos",
            title: "Institutos Especializados",
            subtitle: "Formación Integral",
            description:
                "Institutos especializados en diferentes áreas del conocimiento con enfoque interdisciplinario y práctico.",
            features: [
                "Formación especializada",
                "Enfoque práctico",
                "Investigación aplicada",
            ],
            cta: "Conocer Institutos",
            href: "/institutos",
        },
    ];

    const [
        gradoOffering,
        distanciaOffering,
        posgradoOffering,
        extensionOffering,
        id,
        title,
        description,
        href,
    ] = offerings;

    return (
        <section id="carreras" className="">
            <Gallery4
                title="Nuestra Oferta Académica"
                description="Descubrí los programas académicos que te formarán como profesional de excelencia"
                items={offerings.map((item) => ({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    href: item.href,
                    img: item.icon,
                }))}
            />
        </section>
    );
};

export default AcademicOffering;
