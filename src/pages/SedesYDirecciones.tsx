import React from "react";
// Se elimina Header para evitar import no usado
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Bus,
    Car,
    Navigation,
    Building,
    Users,
    BookOpen,
} from "lucide-react";
import { Navbar1 } from "@/components/Navbar";

const SedesYDirecciones = () => {
    const heroRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
    const sedesRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });

    const breadcrumbItems = [
        { label: "Información Institucional" },
        { label: "Sedes y Direcciones" },
    ];

    const sedes = [
        {
            nombre: "Campus Central",
            tipo: "Principal",
            direccion:
                "Gral. José de San Martín 435, T4000 San Miguel de Tucumán, Tucumán",
            telefono: "+54 381 582-8720",
            email: "informes@uspt.edu.ar",
            horarios: "Lunes a Viernes: 8:00 - 20:00 | Sábados: 8:00 - 13:00",
            servicios: [
                "Rectorado",
                "Secretarías Académicas",
                "Biblioteca Central",
                "Laboratorios",
                "Aulas Magistrales",
            ],
            transporte: ["Líneas 1, 5, 12, 15", "Estacionamiento disponible"],
            coordenadas: "-26.8241, -65.2226",
            imagen: "/placeholder.svg",
        },
        {
            nombre: "Sede Yerba Buena",
            tipo: "Extensión",
            direccion: "Av. Aconquija 1234, Y4107 Yerba Buena, Tucumán",
            telefono: "+54 381 425-0000",
            email: "yerbabuena@uspt.edu.ar",
            horarios: "Lunes a Viernes: 18:00 - 22:00 | Sábados: 8:00 - 17:00",
            servicios: [
                "Carreras Nocturnas",
                "Posgrado",
                "Extensión Universitaria",
                "Aulas Equipadas",
            ],
            transporte: ["Líneas 110, 111, 112", "Estacionamiento gratuito"],
            coordenadas: "-26.8167, -65.3167",
            imagen: "/placeholder.svg",
        },
        {
            nombre: "Centro de Salud Universitario",
            tipo: "Especializada",
            direccion:
                "Av. Independencia 890, T4000 San Miguel de Tucumán, Tucumán",
            telefono: "+54 381 430-0000",
            email: "salud@uspt.edu.ar",
            horarios: "Lunes a Viernes: 7:00 - 19:00",
            servicios: [
                "Consultorios Médicos",
                "Laboratorio Clínico",
                "Prácticas Estudiantiles",
                "Atención Comunitaria",
            ],
            transporte: [
                "Líneas 3, 7, 9, 18",
                "Acceso para personas con discapacidad",
            ],
            coordenadas: "-26.8308, -65.2064",
            imagen: "/placeholder.svg",
        },
        {
            nombre: "Instituto Preuniversitario",
            tipo: "Educativa",
            direccion:
                "Calle Las Heras 567, T4000 San Miguel de Tucumán, Tucumán",
            telefono: "+54 381 421-0000",
            email: "preuniversitario@uspt.edu.ar",
            horarios: "Lunes a Viernes: 7:30 - 17:30",
            servicios: [
                "Educación Secundaria",
                "Laboratorios",
                "Biblioteca",
                "Comedor Estudiantil",
                "Actividades Deportivas",
            ],
            transporte: ["Líneas 2, 8, 14", "Transporte escolar disponible"],
            coordenadas: "-26.8275, -65.2097",
            imagen: "/placeholder.svg",
        },
    ];

    const tipoIcons = {
        Principal: Building,
        Extensión: Users,
        Especializada: BookOpen,
        Educativa: BookOpen,
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}
                <section className="py-4 lg:py-10 bg-gradient-to-b from-background to-muted/30">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={breadcrumbItems} className="mb-8" />

                        <div
                            ref={heroRef.elementRef}
                            className={cn(
                                "text-center max-w-4xl mx-auto animate-on-scroll",
                                heroRef.isIntersecting
                                    ? "animate-fade-in-up"
                                    : ""
                            )}
                        >
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-xl bg-primary text-white flex items-center justify-center">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary">
                                    Sedes y Direcciones
                                </h1>
                            </div>
                            <p className="text-lg md:text-xl text-muted-foreground font-body mb-8 leading-relaxed">
                                Conocé todas nuestras sedes y centros
                                educativos. Encontrá la ubicación más
                                conveniente para vos y toda la información de
                                contacto.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <UniversityButton variant="primary" size="lg">
                                    Ver Mapa Interactivo
                                </UniversityButton>
                                <UniversityButton variant="tertiary" size="lg">
                                    Planificar Visita
                                </UniversityButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mapa General */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-4">
                                Ubicación de Nuestras Sedes
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
                                Todas nuestras sedes están estratégicamente
                                ubicadas en Tucumán para facilitar el acceso
                            </p>
                        </div>

                        <div className="aspect-video bg-muted/30 rounded-xl border border-muted2 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                                <p className="text-muted-foreground font-body">
                                    Mapa interactivo con todas las sedes USPT
                                </p>
                                <UniversityButton
                                    variant="secondary"
                                    className="mt-4"
                                >
                                    <Navigation className="w-4 h-4 mr-2" />
                                    Abrir en Google Maps
                                </UniversityButton>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Listado de Sedes */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
                                Nuestras Sedes
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
                                Información detallada de cada una de nuestras
                                ubicaciones
                            </p>
                        </div>

                        <div
                            ref={sedesRef.elementRef}
                            className={cn(
                                "space-y-8 animate-on-scroll",
                                sedesRef.isIntersecting
                                    ? "animate-fade-in-up"
                                    : ""
                            )}
                        >
                            {sedes.map((sede, index) => {
                                const IconComponent =
                                    tipoIcons[
                                        sede.tipo as keyof typeof tipoIcons
                                    ];
                                return (
                                    <Card
                                        key={index}
                                        className="border-muted2 hover:shadow-lg transition-all duration-300 overflow-hidden"
                                    >
                                        <div className="grid md:grid-cols-3 gap-0">
                                            {/* Imagen */}
                                            <div className="aspect-video md:aspect-square relative overflow-hidden">
                                                <img
                                                    src={sede.imagen}
                                                    alt={sede.nombre}
                                                    className="absolute inset-0 w-full h-full object-cover"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="px-3 py-1 bg-primary text-white rounded-full text-sm font-medium">
                                                        {sede.tipo}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Información Principal */}
                                            <div className="md:col-span-2 p-6">
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center flex-shrink-0">
                                                        <IconComponent className="w-6 h-6" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-2xl font-bold font-heading text-primary mb-2">
                                                            {sede.nombre}
                                                        </h3>
                                                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                            <div className="space-y-2">
                                                                <div className="flex items-start gap-2">
                                                                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                                    <span className="text-muted-foreground">
                                                                        {
                                                                            sede.direccion
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <Phone className="w-4 h-4 text-primary" />
                                                                    <span className="text-muted-foreground">
                                                                        {
                                                                            sede.telefono
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <Mail className="w-4 h-4 text-primary" />
                                                                    <span className="text-muted-foreground">
                                                                        {
                                                                            sede.email
                                                                        }
                                                                    </span>
                                                                </div>
                                                                <div className="flex items-start gap-2">
                                                                    <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                                                    <span className="text-muted-foreground">
                                                                        {
                                                                            sede.horarios
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="space-y-3">
                                                                <div>
                                                                    <h4 className="font-semibold text-foreground mb-1">
                                                                        Servicios:
                                                                    </h4>
                                                                    <ul className="space-y-1">
                                                                        {sede.servicios.map(
                                                                            (
                                                                                servicio,
                                                                                idx
                                                                            ) => (
                                                                                <li
                                                                                    key={
                                                                                        idx
                                                                                    }
                                                                                    className="flex items-start gap-2 text-muted-foreground"
                                                                                >
                                                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                                                    <span className="text-xs">
                                                                                        {
                                                                                            servicio
                                                                                        }
                                                                                    </span>
                                                                                </li>
                                                                            )
                                                                        )}
                                                                    </ul>
                                                                </div>

                                                                <div>
                                                                    <h4 className="font-semibold text-foreground mb-1">
                                                                        Transporte:
                                                                    </h4>
                                                                    <div className="space-y-1">
                                                                        {sede.transporte.map(
                                                                            (
                                                                                transporte,
                                                                                idx
                                                                            ) => (
                                                                                <div
                                                                                    key={
                                                                                        idx
                                                                                    }
                                                                                    className="flex items-center gap-2 text-xs text-muted-foreground"
                                                                                >
                                                                                    {transporte.includes(
                                                                                        "Líneas"
                                                                                    ) ? (
                                                                                        <Bus className="w-3 h-3 text-primary" />
                                                                                    ) : (
                                                                                        <Car className="w-3 h-3 text-primary" />
                                                                                    )}
                                                                                    <span>
                                                                                        {
                                                                                            transporte
                                                                                        }
                                                                                    </span>
                                                                                </div>
                                                                            )
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex gap-3 pt-4 border-t border-muted2">
                                                    <UniversityButton
                                                        variant="primary"
                                                        size="sm"
                                                    >
                                                        <Navigation className="w-4 h-4 mr-2" />
                                                        Cómo Llegar
                                                    </UniversityButton>
                                                    <UniversityButton
                                                        variant="secondary"
                                                        size="sm"
                                                    >
                                                        <Phone className="w-4 h-4 mr-2" />
                                                        Contactar
                                                    </UniversityButton>
                                                    <UniversityButton
                                                        variant="tertiary"
                                                        size="sm"
                                                    >
                                                        Ver Fotos
                                                    </UniversityButton>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Información Adicional */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="border-muted2 text-center">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3">
                                        <Bus className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="font-heading">
                                        Transporte Público
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground font-body mb-4 text-sm">
                                        Todas nuestras sedes están conectadas
                                        por múltiples líneas de transporte
                                        público.
                                    </p>
                                    <UniversityButton
                                        variant="secondary"
                                        size="sm"
                                    >
                                        Ver Recorridos
                                    </UniversityButton>
                                </CardContent>
                            </Card>

                            <Card className="border-muted2 text-center">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3">
                                        <Car className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="font-heading">
                                        Estacionamiento
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground font-body mb-4 text-sm">
                                        Espacios de estacionamiento disponibles
                                        en todas las sedes para estudiantes y
                                        visitantes.
                                    </p>
                                    <UniversityButton
                                        variant="secondary"
                                        size="sm"
                                    >
                                        Ver Disponibilidad
                                    </UniversityButton>
                                </CardContent>
                            </Card>

                            <Card className="border-muted2 text-center">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3">
                                        <Navigation className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="font-heading">
                                        Visitas Guiadas
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground font-body mb-4 text-sm">
                                        Agendá una visita guiada para conocer
                                        nuestras instalaciones y servicios.
                                    </p>
                                    <UniversityButton
                                        variant="secondary"
                                        size="sm"
                                    >
                                        Agendar Visita
                                    </UniversityButton>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Contacto General */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold font-heading text-primary mb-6">
                                    ¿Necesitas más información?
                                </h3>
                                <p className="text-muted-foreground font-body mb-6">
                                    Nuestro equipo está disponible para ayudarte
                                    con información sobre ubicaciones, horarios
                                    y servicios disponibles en cada sede.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-primary" />
                                        <div>
                                            <p className="font-semibold">
                                                Línea de Información
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                +54 381 582-8720
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-primary" />
                                        <div>
                                            <p className="font-semibold">
                                                Email General
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                informes@uspt.edu.ar
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-primary" />
                                        <div>
                                            <p className="font-semibold">
                                                Horarios de Atención
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Lunes a Viernes: 8:00 - 18:00
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Card className="border-muted2">
                                <CardHeader>
                                    <CardTitle className="font-heading text-primary">
                                        Solicitar Información
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Nombre
                                        </label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                            placeholder="Tu nombre completo"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="w-full px-3 py-2 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                            placeholder="tu.email@ejemplo.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Sede de Interés
                                        </label>
                                        <select className="w-full px-3 py-2 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20">
                                            <option value="">
                                                Seleccionar sede
                                            </option>
                                            {sedes.map((sede, idx) => (
                                                <option
                                                    key={idx}
                                                    value={sede.nombre}
                                                >
                                                    {sede.nombre}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Consulta
                                        </label>
                                        <textarea
                                            rows={3}
                                            className="w-full px-3 py-2 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                            placeholder="¿En qué podemos ayudarte?"
                                        />
                                    </div>
                                    <UniversityButton
                                        variant="primary"
                                        className="w-full"
                                    >
                                        Enviar Consulta
                                    </UniversityButton>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                            Visitanos y conocé USPT
                        </h3>
                        <p className="text-lg mb-8 max-w-2xl mx-auto font-body opacity-90">
                            Te invitamos a conocer nuestras instalaciones y
                            descubrir todo lo que tenemos para ofrecerte en tu
                            formación universitaria
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <UniversityButton variant="secondary" size="lg">
                                <Navigation className="w-5 h-5 mr-2" />
                                Planificar Visita
                            </UniversityButton>
                            <UniversityButton
                                variant="tertiary"
                                size="lg"
                                className="text-white"
                            >
                                <MapPin className="w-5 h-5 mr-2" />
                                Ver Mapa Completo
                            </UniversityButton>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default SedesYDirecciones;
