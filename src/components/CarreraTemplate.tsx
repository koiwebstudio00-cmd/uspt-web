import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UniversityButton } from "@/components/ui/university-button";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";
import { Link } from "react-router-dom";
import {
    GraduationCap,
    MapPin,
    Download,
    BookOpen,
    Clock,
    Calendar,
    Award,
    Users,
    ArrowRight,
    Globe,
} from "lucide-react";
import type { Carrera, Instituto } from "@/lib/types/database";
import WhatsApp from "./icons/Wp";

interface CarreraWithInstituto extends Carrera {
    instituto: Instituto;
}

interface CarreraTemplateProps {
    carrera: CarreraWithInstituto;
    relatedCareers?: Carrera[];
}

const CarreraTemplate = ({
    carrera,
    relatedCareers = [],
}: CarreraTemplateProps) => {
    const breadcrumbItems = [
        { label: "Universidad", href: "/universidad" },
        { label: "Carreras", href: "/carreras" },
        { label: carrera.name },
    ];


    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                {/* Hero Section */}
                <HeroPageComponent
                    title={carrera.name}
                    description={`${carrera.instituto.name}`}
                    imageUrl="/images/IMG_4688.webp"
                    minHeight="450px"
                />

                <div className="container pt-8 bg-muted/30">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Quick Facts */}
                <section className="py-12 bg-muted/30">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="border-muted2">
                                <CardHeader className="pt-6 pb-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                                            <GraduationCap className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm uppercase tracking-wide text-muted-foreground">
                                            Nivel
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pb-6 pt-3">
                                    <p className="text-base font-medium font-body">
                                        {carrera.clasificacion || "Grado"}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-muted2">
                                <CardHeader className="pt-6 pb-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm uppercase tracking-wide text-muted-foreground">
                                            Modalidad
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pb-6 pt-3">
                                    <p className="text-base font-medium font-body">
                                        {carrera.modalidad}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-muted2">
                                <CardHeader className="pt-6 pb-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm uppercase tracking-wide text-muted-foreground">
                                            Sede
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pb-6 pt-3">
                                    <p className="text-base font-medium font-body">
                                        {carrera.sede || "Campus Central"}
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="border-muted2">
                                <CardHeader className="pt-6 pb-0">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                                            <Users className="w-5 h-5" />
                                        </div>
                                        <span className="text-sm uppercase tracking-wide text-muted-foreground">
                                            Duración
                                        </span>
                                    </div>
                                </CardHeader>
                                <CardContent className="pb-6 pt-3">
                                    <p className="text-base font-medium font-body line-clamp-2">
                                        {carrera.duration} años
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Descripción y Perfil del Egresado */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto space-y-12">
                            {/* Descripción */}
                            {carrera.description && (
                                <div>
                                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                        <BookOpen className="w-8 h-8" />
                                        Sobre la Carrera
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {carrera.description}
                                    </p>
                                </div>
                            )}

                            {/* Perfil del Egresado */}
                            {carrera.perfil_egresado && (
                                <div>
                                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                                        <GraduationCap className="w-8 h-8" />
                                        Perfil del Egresado
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                                        {carrera.perfil_egresado}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Documentos y Recursos */}
                {(carrera.plan_estudio_url ||
                    carrera.resolution_url ||
                    carrera.horarios_cursado ||
                    carrera.fecha_examenes) && (
                    <section className="py-16 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <div className="max-w-6xl mx-auto">
                                <h2 className="text-3xl font-bold text-primary mb-8">
                                    Documentos y Recursos
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {carrera.plan_estudio_url && (
                                        <Card className="border-muted2 hover:shadow-lg transition-shadow">
                                            <CardContent className="p-6">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                        <BookOpen className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-lg mb-2">
                                                            Plan de Estudios
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground mb-4">
                                                            Descargá el plan de
                                                            estudios completo
                                                        </p>
                                                        <a
                                                            href={
                                                                carrera.plan_estudio_url
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                                                        >
                                                            <Download className="w-4 h-4" />
                                                            Descargar PDF
                                                        </a>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}

                                    {carrera.horarios_cursado && (
                                        <Card className="border-muted2 hover:shadow-lg transition-shadow">
                                            <CardContent className="p-6">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                        <Clock className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-lg mb-2">
                                                            Horarios de Cursado
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground mb-4">
                                                            Consultá los
                                                            horarios disponibles
                                                        </p>
                                                        <a
                                                            href={
                                                                carrera.horarios_cursado
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                                                        >
                                                            <Download className="w-4 h-4" />
                                                            Descargar PDF
                                                        </a>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}

                                    {carrera.fecha_examenes && (
                                        <Card className="border-muted2 hover:shadow-lg transition-shadow">
                                            <CardContent className="p-6">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                        <Calendar className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-lg mb-2">
                                                            Fechas de Exámenes
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground mb-4">
                                                            Calendario de
                                                            exámenes actualizado
                                                        </p>
                                                        <a
                                                            href={
                                                                carrera.fecha_examenes
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                                                        >
                                                            <Download className="w-4 h-4" />
                                                            Descargar PDF
                                                        </a>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}

                                    {carrera.resolution_url && (
                                        <Card className="border-muted2 hover:shadow-lg transition-shadow">
                                            <CardContent className="p-6">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                        <Award className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold text-lg mb-2">
                                                            Resolución
                                                            Ministerial
                                                        </h3>
                                                        <p className="text-sm text-muted-foreground mb-4">
                                                            Resolución oficial
                                                            de la carrera
                                                        </p>
                                                        <a
                                                            href={
                                                                carrera.resolution_url
                                                            }
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                                                        >
                                                            <Download className="w-4 h-4" />
                                                            Descargar PDF
                                                        </a>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Requisitos de Admisión */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* Lista de Requisitos */}
                                <Card className="border-muted2 shadow-lg">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                <BookOpen className="w-6 h-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-2xl font-heading">
                                                Requisitos de Admisión
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-4 cursor-default">
                                            {[
                                                "Fotocopia de DNI",
                                                "Fotocopia de título secundario legalizada o constancia en trámite",
                                                "Certificado de buena salud",
                                                "2 fotos carnet",
                                                "Completar ficha con acuerdo de admisión",
                                            ].map((req, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-3 group"
                                                >
                                                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                                        <span className="text-primary font-semibold text-xs">
                                                            {idx + 1}
                                                        </span>
                                                    </div>
                                                    <span className="text-muted-foreground font-body leading-relaxed">
                                                        {req}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>

                                {/* WhatsApp Contact Card */}
                                <Card className="border-muted2 hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-white">
                                    <CardContent className="p-8">
                                        <div className="flex flex-col items-center text-center h-full justify-center">
                                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4">
                                                <WhatsApp className="w-8 h-8 text-green-500" />
                                            </div>
                                            <h3 className="font-semibold text-xl mb-2">
                                                ¿Tenés dudas?
                                            </h3>
                                            <p className="text-sm text-muted-foreground mb-6">
                                                Contactanos por WhatsApp y te
                                                asesoramos sobre los requisitos
                                            </p>
                                            <a
                                                href={`https://api.whatsapp.com/send?phone=5493816050625&text=Hola,%20me%20gustaria%20consultar%20a%20la%20USP-T%20sobre%20${encodeURIComponent(carrera.name)}.`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 font-medium transition-colors"
                                            >
                                                Consultar por WhatsApp
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>



                {/* CTA Section */}
                <CtaPage
                    title="¿Listo para comenzar tu carrera?"
                    description="Inscribite ahora o solicitá más información sobre esta carrera"
                    url="/contacto"
                />
            </main>

            <Footer />
        </div>
    );
};

export default CarreraTemplate;
