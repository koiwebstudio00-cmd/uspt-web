import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const valores = [
    {
        nombre: "Cooperación",
        definicion:
            "Impulsamos el trabajo colaborativo entre instituciones y sectores para potenciar el impacto del conocimiento científico.",
    },
    {
        nombre: "Innovación",
        definicion:
            "Promovemos la generación y aplicación de soluciones innovadoras para el desarrollo regional.",
    },
    {
        nombre: "Compromiso con el desarrollo",
        definicion:
            "Trabajamos con el objetivo de generar impacto real en el crecimiento productivo, social y tecnológico de Tucumán.",
    },
    {
        nombre: "Interdisciplinariedad",
        definicion:
            "Favorecemos la integración de diversas áreas del conocimiento para abordar problemáticas complejas desde múltiples perspectivas.",
    },
    {
        nombre: "Transferencia del conocimiento",
        definicion:
            "Facilitamos la aplicación práctica de los avances científicos para fortalecer el sector productivo y gubernamental.",
    },
    {
        nombre: "Sustentabilidad",
        definicion:
            "Buscamos un desarrollo equilibrado que contemple el bienestar social, económico y ambiental.",
    },
    {
        nombre: "Transparencia",
        definicion:
            "Actuamos con ética y responsabilidad en la gestión del conocimiento y los recursos disponibles.",
    },
];

const MesaCienciaTecnologia = () => {
    const breadcrumbItems = [
        { label: "Investigación", href: "/centrosinvestigacion" },
        { label: "Mesa de Ciencia y Tecnología" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar1 />
            <main>
                {/* Hero */}
                <HeroPageComponent
                    title="Mesa de Ciencia y Tecnología"
                    description="Provincia de Tucumán"
                    minHeight="500"
                    imageUrl="/investigacion/ciencia-tecnologia.png"
                />

                <div className="container mx-auto px-4 pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* ── PRESENTACIÓN ── */}
                <section className="py-20 bg-white border-b border-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-16 items-start">
                            <div className="lg:col-span-2">
                                <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 leading-tight">
                                    Mesa de Ciencia y Tecnología
                                    <br />
                                    de la Provincia de Tucumán
                                </h2>
                                <p className="text-base text-gray-600 leading-relaxed font-body mb-6">
                                    La Mesa de Ciencia y Tecnología de la Provincia de Tucumán es
                                    un espacio de articulación interinstitucional que, desde el
                                    año 2023, funciona de manera continua y efectiva, impulsando
                                    el diálogo, la cooperación y la generación de propuestas
                                    orientadas al fortalecimiento del sistema científico-tecnológico
                                    provincial.
                                </p>
                                <p className="text-base text-gray-600 leading-relaxed font-body">
                                    La Mesa constituye un ámbito plural, abierto y horizontal que
                                    nuclea a universidades, organismos de ciencia y tecnología,
                                    institutos de investigación y entidades vinculadas a la
                                    producción de conocimiento en la provincia.
                                </p>
                            </div>

                            {/* Imagen */}
                            <div className="overflow-hidden">
                                <img
                                    src="/investigacion/ciencia-tecnologia.png"
                                    alt="Mesa de Ciencia y Tecnología de Tucumán"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── MISIÓN Y VISIÓN ── */}
                <section className="py-20 bg-gray-50 border-b border-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-0 border border-gray-200">
                            {/* Misión */}
                            <div className="border-r border-gray-200 p-10 bg-white">
                                <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">
                                    Misión
                                </p>
                                <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">
                                    Por qué existimos
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-600 font-body leading-relaxed pb-4 border-b border-gray-100">
                                        Fomentar la articulación entre instituciones científicas,
                                        académicas, gubernamentales y del sector productivo de
                                        Tucumán para impulsar proyectos interinstitucionales y
                                        multidisciplinarios que contribuyan al desarrollo regional.
                                    </p>
                                    <p className="text-sm text-gray-600 font-body leading-relaxed">
                                        Impulsar la innovación y la transferencia tecnológica en la
                                        provincia, a través de la generación de conocimiento, la
                                        prestación de asesorías y servicios, y la promoción del
                                        aporte del sistema científico.
                                    </p>
                                </div>
                            </div>

                            {/* Visión */}
                            <div className="p-10 bg-white">
                                <p className="text-xs font-bold tracking-widest uppercase text-primary mb-4">
                                    Visión
                                </p>
                                <h2 className="text-2xl font-bold font-heading text-gray-900 mb-6">
                                    Hacia dónde vamos
                                </h2>
                                <div className="space-y-4">
                                    <p className="text-sm text-gray-600 font-body leading-relaxed pb-4 border-b border-gray-100">
                                        Ser un espacio de referencia en la vinculación entre la
                                        ciencia, la tecnología y los sectores estratégicos de
                                        Tucumán, promoviendo el desarrollo sostenible y el
                                        fortalecimiento del ecosistema de innovación.
                                    </p>
                                    <p className="text-sm text-gray-600 font-body leading-relaxed">
                                        Aspiramos a consolidarnos como un modelo de colaboración
                                        interinstitucional que impulse soluciones científicas y
                                        tecnológicas a los desafíos regionales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── VALORES ── */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold font-heading text-gray-900">
                                Valores
                            </h2>
                        </div>

                        <div className="border border-gray-200 overflow-hidden">
                            {valores.map((valor, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-8 px-8 py-6 border-b border-gray-100 last:border-b-0 bg-white hover:bg-gray-50 transition-colors duration-150"
                                >
                                    <div className="flex-shrink-0 w-8 text-right">
                                        <span className="text-xs font-bold text-primary tabular-nums">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <div className="w-px self-stretch bg-gray-200 flex-shrink-0" />
                                    <div className="flex-1 grid sm:grid-cols-3 gap-4 sm:gap-8 items-start">
                                        <div className="sm:col-span-1">
                                            <p className="text-sm font-bold text-gray-900 font-heading">
                                                {valor.nombre}
                                            </p>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <p className="text-sm text-gray-600 font-body leading-relaxed">
                                                {valor.definicion}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default MesaCienciaTecnologia;
