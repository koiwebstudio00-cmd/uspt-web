import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Target,
    Eye,
    Award,
    Users,
    Network,
    Mail,
    Linkedin,
} from "lucide-react";

interface TeamMember {
    name: string;
    role: string;
    description: string;
    image?: string;
    email?: string;
    linkedin?: string;
}

interface CIAAPTemplateProps {
    title: string;
    heroImage: string;
    mission: string;
    vision: string;
    values: string[];
    organizationalStructure: string;
    teamMembers: TeamMember[];
    breadcrumbItems?: { label: string; href?: string }[];
}

const CIAAPTemplate = ({
    title,
    heroImage,
    mission,
    vision,
    values,
    organizationalStructure,
    teamMembers,
    breadcrumbItems = [
        { label: "Inicio", href: "/" },
        { label: "Investigación", href: "/centrosinvestigacion" },
        { label: title },
    ],
}: CIAAPTemplateProps) => {
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

            {/* Misión y Visión */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Misión */}
                            <Card className="border-muted2 shadow-lg">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Target className="w-6 h-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-2xl font-heading">
                                            Misión
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {mission}
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Visión */}
                            <Card className="border-muted2 shadow-lg">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                            <Eye className="w-6 h-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-2xl font-heading">
                                            Visión
                                        </CardTitle>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {vision}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Valores Organizacionales */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground">
                                Valores Organizacionales
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {values.map((value, index) => (
                                <Card
                                    key={index}
                                    className="border-muted2 hover:shadow-lg transition-shadow"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-primary font-semibold text-sm">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {value}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Estructura Organizacional */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground">
                                Estructura Organizacional
                            </h2>
                        </div>
                        <Card className="border-muted2 shadow-lg">
                            <CardContent className="p-8">
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="font-heading font-semibold text-xl mb-4 text-primary">
                                            Consejo Directivo
                                        </h3>
                                        <ul className="space-y-3 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <span className="font-semibold min-w-fit">
                                                    Presidente:
                                                </span>
                                                <span>Dra. Catalina Lonac</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="font-semibold min-w-fit">
                                                    UVT Lic:
                                                </span>
                                                <span>
                                                    Yuliana Getar - Contacto:{" "}
                                                    <a
                                                        href="mailto:ygetar@uspt.edu.ar"
                                                        className="text-primary hover:underline"
                                                    >
                                                        ygetar@uspt.edu.ar
                                                    </a>
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="font-semibold min-w-fit">
                                                    Director:
                                                </span>
                                                <span>
                                                    Ing. Carlos A. Gentile -
                                                    Contacto:{" "}
                                                    <a
                                                        href="mailto:Gentilecarlosa@gmail.com"
                                                        className="text-primary hover:underline"
                                                    >
                                                        Gentilecarlosa@gmail.com
                                                    </a>{" "}
                                                    - 3815541015
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="font-semibold min-w-fit">
                                                    Vicedirectora:
                                                </span>
                                                <span>
                                                    Ing. Rosana Hadad Salomón -
                                                    Contacto:{" "}
                                                    <a
                                                        href="mailto:rosanahadads@gmail.com"
                                                        className="text-primary hover:underline"
                                                    >
                                                        rosanahadads@gmail.com
                                                    </a>{" "}
                                                    - 3815631065
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-heading font-semibold text-lg mb-3 text-primary">
                                            Vocales:
                                        </h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <span className="font-semibold min-w-fit">
                                                    Tec.
                                                </span>
                                                <span>
                                                    Augusto Parra, Contacto:{" "}
                                                    <a
                                                        href="mailto:parra@cettucuman.net.ar"
                                                        className="text-primary hover:underline"
                                                    >
                                                        parra@cettucuman.net.ar
                                                    </a>{" "}
                                                    - 3815499801
                                                </span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="font-semibold min-w-fit">
                                                    Dr.
                                                </span>
                                                <span>
                                                    Marco Rossi - Contacto:{" "}
                                                    <a
                                                        href="mailto:mrossi@uspt.edu.ar"
                                                        className="text-primary hover:underline"
                                                    >
                                                        mrossi@uspt.edu.ar
                                                    </a>{" "}
                                                    - 3814107701
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="pt-4 border-t border-muted">
                                        <p className="text-muted-foreground">
                                            <span className="font-semibold">
                                                Para contactarse con el Centro
                                                de Inteligencia Artificial
                                                Aplicada
                                            </span>
                                            <br />
                                            Mail de Contacto:{" "}
                                            <a
                                                href="mailto:ciaap@uspt.edu.ar"
                                                className="text-primary hover:underline font-semibold"
                                            >
                                                ciaap@uspt.edu.ar
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Quiénes Somos - Equipo */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Quiénes Somos
                            </h2>
                            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
                                Conocé al equipo de profesionales que conforman
                                el {title}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {teamMembers.map((member, index) => (
                                <Card
                                    key={index}
                                    className="border-muted2 hover:shadow-xl transition-shadow group"
                                >
                                    {member.image && (
                                        <div className="relative aspect-square overflow-hidden">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle className="text-xl font-heading">
                                            {member.name}
                                        </CardTitle>
                                        <p className="text-sm text-primary font-semibold">
                                            {member.role}
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                            {member.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CtaPage
                title="¿Querés formar parte de nuestra comunidad?"
                description="Descubrí todas las oportunidades que la USPT tiene para vos"
                url="/contacto"
                buttonText="Contactanos"
            />

            <Footer />
        </div>
    );
};

export default CIAAPTemplate;
