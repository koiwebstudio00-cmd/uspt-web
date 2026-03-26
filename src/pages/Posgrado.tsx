import React from "react";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    GraduationCap,
    Users,
    Award,
    BookOpen,
    Clock,
    Loader2,
} from "lucide-react";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";
import InfoAdd from "@/components/InfoAdd";
import { usePosgrados } from "@/hooks/use-posgrados";
import { TipoPosgrado } from "@/lib/types/database";
import { Link } from "react-router-dom";

const Posgrado = () => {
    // Fetch all posgrados from Supabase
    const { posgrados, loading, error } = usePosgrados();

    // Filter posgrados by tipo
    const maestrias = posgrados.filter((p) => p.tipo === TipoPosgrado.MAESTRIA);
    const especializaciones = posgrados.filter(
        (p) => p.tipo === TipoPosgrado.ESPECIALIZACION,
    );

    const breadcrumbItems = [
        { label: "Universidad", href: "/universidad" },
        { label: "Posgrado" },
    ];

    const ventajas = [
        {
            icon: <GraduationCap className="" />,
            title: "Excelencia Académica",
            description:
                "Programas diseñados con estándares internacionales de calidad",
        },
        {
            icon: <Users className="" />,
            title: "Claustro de Elite",
            description:
                "Profesores con amplia experiencia académica y profesional",
        },
        {
            icon: <Award className="" />,
            title: "Reconocimiento Oficial",
            description: "Títulos con validez nacional e internacional",
        },
        {
            icon: <BookOpen className="" />,
            title: "Investigación Aplicada",
            description:
                "Proyectos de investigación vinculados con la realidad profesional",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}
                <HeroPageComponent
                    title="Posgrado USPT"
                    description="Potenciá tu carrera profesional con nuestros
                                programas de maestrías y especializaciones.
                                Formación de excelencia para líderes del futuro."
                    imageUrl="/images/posgrado.webp"
                    minHeight="450"
                />

                <div className="container pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Ventajas Section */}

                <InfoAdd items={ventajas} columnas={4} />

                {/* Maestrías Section */}
                <section className="bg-primary/10 py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl  mb-4">
                                Maestrías
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
                                Programas de maestría para profundizar
                                conocimientos y desarrollar competencias de
                                liderazgo
                            </p>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-12 h-12 animate-spin text-primary" />
                            </div>
                        ) : error ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    Error al cargar las maestrías
                                </p>
                            </div>
                        ) : maestrias.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    No hay maestrías disponibles en este momento
                                </p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-6">
                                {maestrias.map((maestria) => (
                                    <Card
                                        key={maestria.id}
                                        className="border-muted2 hover:shadow-lg transition-all duration-300"
                                    >
                                        <CardHeader>
                                            <div className="flex items-start justify-between mb-2">
                                                <CardTitle className="text-xl font-heading text-primary flex-1">
                                                    {maestria.name}
                                                </CardTitle>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    <span>
                                                        {maestria.duration}{" "}
                                                        {maestria.duration === 1
                                                            ? "año"
                                                            : "años"}
                                                    </span>
                                                </div>
                                                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                                                    {maestria.modalidad}
                                                </span>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground font-body mb-4 line-clamp-3">
                                                {maestria.description}
                                            </p>
                                            <div className="flex gap-2">
                                                <Link
                                                    to={`/posgrado/${maestria.slug}`}
                                                    className="flex-1"
                                                >
                                                    <UniversityButton
                                                        variant="primary"
                                                        size="sm"
                                                        className="w-full"
                                                    >
                                                        Más Información
                                                    </UniversityButton>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Especializaciones Section */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl mb-4">
                                Especializaciones
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
                                Programas de especialización para actualizar y
                                profundizar conocimientos específicos
                            </p>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-12 h-12 animate-spin text-primary" />
                            </div>
                        ) : error ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    Error al cargar las especializaciones
                                </p>
                            </div>
                        ) : especializaciones.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">
                                    No hay especializaciones disponibles en este
                                    momento
                                </p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-6">
                                {especializaciones.map((esp) => (
                                    <Card
                                        key={esp.id}
                                        className="border-muted2 hover:shadow-md transition-shadow"
                                    >
                                        <CardHeader>
                                            <CardTitle className="text-lg font-heading text-primary mb-2">
                                                {esp.name}
                                            </CardTitle>
                                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                                <Clock className="w-4 h-4" />
                                                <span>
                                                    {esp.duration}{" "}
                                                    {esp.duration === 1
                                                        ? "año"
                                                        : "años"}
                                                </span>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground font-body mb-4 line-clamp-3">
                                                {esp.description}
                                            </p>
                                            <div className="flex gap-2">
                                                <Link
                                                    to={`/posgrado/${esp.slug}`}
                                                    className="flex-1"
                                                >
                                                    <UniversityButton
                                                        variant="primary"
                                                        size="sm"
                                                        className="w-full"
                                                    >
                                                        Más Información
                                                    </UniversityButton>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}

                <CtaPage
                    title="Llevá tu carrera al siguiente nivel"
                    description="Descubrí cómo nuestros programas de posgrado pueden
                            transformar tu futuro profesional"
                    url="/contacto"
                />
            </main>

            <Footer />
        </div>
    );
};

export default Posgrado;
