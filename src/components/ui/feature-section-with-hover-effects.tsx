import { cn } from "@/lib/utils";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";
import { CreditCard, Files, Globe2, Handshake } from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
    const features = [
        {
            title: "Becas y Descuentos",
            description:
                "Programas de apoyo económico para estudiantes destacados y familias con necesidades especiales.",
            icon: <IconCurrencyDollar />,
        },
        {
            title: "Pagos Online",
            description:
                "Sistema de pagos digital seguro y flexible con múltiples opciones de financiamiento.",
            icon: <CreditCard />,
        },
        {
            title: "Pasantías",
            description:
                "Conexión directa con empresas e instituciones para oportunidades laborales y prácticas profesionales.",
            icon: <Handshake />,
        },
        {
            title: "Comunidad Estudiantil",
            description:
                "Grupos de estudio, actividades extracurriculares y red de apoyo entre estudiantes y egresados.",
            icon: <IconHeart />,
        },
        {
            title: "Plataforma Virtual",
            description:
                "Campus virtual 24/7 con acceso a materiales, clases grabadas y herramientas de estudio.",
            icon: <IconCloud />,
        },
        {
            title: "Soporte Académico",
            description:
                "Acompañamiento personalizado con tutorías, asesorías y apoyo en tu trayectoria educativa.",
            icon: <IconHelp />,
        },
        {
            title: "Flexibilidad Horaria",
            description:
                "Modalidades presenciales y a distancia que se adaptan a tu ritmo de vida y necesidades.",
            icon: <IconEaseInOut />,
        },
        {
            title: "Certificaciones",
            description:
                "Títulos oficiales reconocidos y certificaciones que potencian tu perfil profesional.",
            icon: <Files />,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto gap-8">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col py-12 relative group/feature dark:border-neutral-800",
                (index === 0 || index === 4) && " dark:border-neutral-800",
                index < 4 && " dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className=" opacity-0  transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0  transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-primary dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 font-body">
                {description}
            </p>
        </div>
    );
};

export { Feature };
