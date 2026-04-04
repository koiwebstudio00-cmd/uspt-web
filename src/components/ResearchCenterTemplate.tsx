import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";
import { Card, CardContent } from "@/components/ui/card";
import { Microscope, Target, Lightbulb } from "lucide-react";

interface ResearchCenterTemplateProps {
    title: string;
    description: string;
    content: string;
    heroImage: string;
    images: string[];
    breadcrumbItems?: { label: string; href?: string }[];
}

const ResearchCenterTemplate = ({
    title,
    description,
    content,
    heroImage,
    images,
    breadcrumbItems = [
        { label: "SECIDYC", href: "/secidyc" },
        { label: "Investigación", href: "/centrosinvestigacion" },
        { label: title },
    ],
}: ResearchCenterTemplateProps) => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            {/* Hero Section */}
            <HeroPageComponent
                title={title}
                description=""
                imageUrl={heroImage}
            />

            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 py-6">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            {/* Descripción Principal */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {/* Iconos decorativos */}
                            <Card className="border-muted2 hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Microscope className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-lg mb-2">
                                        Investigación
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Desarrollo de conocimiento científico
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-muted2 hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Target className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-lg mb-2">
                                        Innovación
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Soluciones tecnológicas aplicadas
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-muted2 hover:shadow-lg transition-shadow">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Lightbulb className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-lg mb-2">
                                        Desarrollo
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Impacto en la comunidad
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground leading-relaxed text-justify">
                                {description}
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-justify">
                                {content}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galería de Imágenes */}
            {images.length > 0 && (
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
                                Nuestras Instalaciones
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {images.map((image, index) => (
                                    <Card
                                        key={index}
                                        className="border-muted2 overflow-hidden hover:shadow-xl transition-shadow group"
                                    >
                                        <div className="relative aspect-video overflow-hidden">
                                            <img
                                                src={image}
                                                alt={`${title} - Imagen ${index + 1}`}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <CtaPage
                title="¿Querés formar parte de nuestra comunidad?"
                description="Descubrí todas las oportunidades que la USP-T tiene para vos"
                url="/contacto"
                buttonText="Contactanos"
            />

            <Footer />
        </div>
    );
};

export default ResearchCenterTemplate;
