import Footer from "@/components/Footer";
import InstitutosList from "@/components/InstitutosList";
import CtaPage from "@/components/CtaPage";
import { cn } from "@/lib/utils";
import { Users, BookOpen, Award } from "lucide-react";
import { Navbar1 } from "@/components/Navbar";

const aditionalInfo = [
    {
        icon: BookOpen,
        title: "Investigación",
        description:
            "Cada instituto desarrolla líneas de investigación específicas en su área de conocimiento.",
    },
    {
        icon: Users,
        title: "Extensión",
        description:
            "Programas y actividades que vinculan el conocimiento académico con la comunidad.",
    },
    {
        icon: Award,
        title: "Vinculación",
        description:
            "Convenios con empresas, organizaciones y otras instituciones académicas.",
    },
];

const Institutos = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                <InstitutosList />

                <section className="py-20 bg-primary/10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 border border-muted2">
                            {aditionalInfo.map((item, i) => (
                                <div
                                    key={item.title}
                                    className={cn(
                                        "p-6 flex flex-col gap-2 bg-white hover:bg-primary/5 transition-colors",
                                        i < aditionalInfo.length - 1
                                            ? "border-b md:border-b-0 md:border-r border-muted2"
                                            : "",
                                    )}
                                >
                                    <div className="w-9 h-9 flex items-center justify-center bg-primary/10 text-primary flex-shrink-0">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                                        {item.title}
                                    </p>
                                    <p className="font-body text-sm text-foreground leading-snug">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <CtaPage
                    title="Encontrá tu área de interés"
                    description="Explorá los institutos y descubrí las carreras que mejor se adapten a tus intereses y objetivos profesionales"
                    url="/contacto"
                    buttonText="Inscribite ahora"
                />
            </main>

            <Footer />
        </div>
    );
};

export default Institutos;
