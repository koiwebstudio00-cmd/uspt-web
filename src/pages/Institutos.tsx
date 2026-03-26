import Footer from "@/components/Footer";
import InstitutosList from "@/components/InstitutosList";
import InfoAdd from "@/components/InfoAdd";
import { Users, BookOpen, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar1 } from "@/components/Navbar";

const Institutos = () => {
    const aditionalInfo = [
        {
            title: "Investigación",
            description:
                "Cada instituto desarrolla líneas de investigación específicas en su área de conocimiento.",
            icon: <BookOpen className="w-6 h-6" />,
        },
        {
            title: "Extensión",
            description:
                "Programas y actividades que vinculan el conocimiento académico con la comunidad.",
            icon: <Users className="w-6 h-6" />,
        },
        {
            title: "Vinculación",
            description:
                "Convenios con empresas, organizaciones y otras instituciones académicas.",
            icon: <Award className="w-6 h-6" />,
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}

                {/* Listado de Institutos */}
                <InstitutosList />

                {/* Información Adicional */}
                <InfoAdd items={aditionalInfo} />

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
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Encontrá tu área de interés
                            </h3>
                            <p className="text-lg mb-8 max-w-2xl mx-auto font-body text-white text-balance opacity-90">
                                Explorá los institutos y descubrí las carreras
                                que mejor se adapten a tus intereses y objetivos
                                profesionales
                            </p>
                            <div className="flex gap-4 justify-center">
                                <Link
                                    to="/"
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

export default Institutos;
