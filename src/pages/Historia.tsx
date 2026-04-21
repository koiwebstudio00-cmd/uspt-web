// Se elimina Header para evitar import no usado
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { Calendar, Award, Users, Building, BookOpen, Star } from "lucide-react";
import { Navbar1 } from "@/components/Navbar";

const Historia = () => {
    const heroRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
    const timelineRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });

    const breadcrumbItems = [
        { label: "Nosotros", href: "/nosotros" },
        { label: "Historia" },
    ];

    const hitos = [
        {
            año: "2008",
            titulo: "Fundación de USPT",
            descripcion:
                "Creación de la Universidad de San Pablo – Tucumán como primera universidad privada laica del NOA.",
            logros: [
                "Aprobación del proyecto institucional",
                "Primeras autoridades designadas",
                "Inicio de gestiones académicas",
            ],
            imagen: "/placeholder.svg",
        },
        {
            año: "2010",
            titulo: "Apertura de las Primeras Carreras",
            descripcion:
                "Inicio de actividades académicas con las carreras fundacionales en el Campus Central.",
            logros: [
                "Primera cohorte de estudiantes",
                "Inauguración del Campus Central",
                "Conformación del claustro docente",
            ],
            imagen: "/placeholder.svg",
        },
        {
            año: "2012",
            titulo: "Expansión Académica",
            descripcion:
                "Ampliación de la oferta educativa con nuevas carreras y modalidades de estudio.",
            logros: [
                "Creación de nuevos institutos",
                "Incorporación de carreras técnicas",
                "Programas de extensión",
            ],
            imagen: "/placeholder.svg",
        },
        {
            año: "2015",
            titulo: "Reconocimientos y Acreditaciones",
            descripcion:
                "Obtención de importantes reconocimientos académicos y acreditaciones institucionales.",
            logros: [
                "Acreditación CONEAU",
                "Convenios internacionales",
                "Primeros graduados",
            ],
            imagen: "/placeholder.svg",
        },
        {
            año: "2018",
            titulo: "Transformación Digital",
            descripcion:
                "Implementación de tecnologías educativas y plataformas virtuales de vanguardia.",
            logros: [
                "Campus virtual avanzado",
                "Carreras a distancia",
                "Laboratorios digitales",
            ],
            imagen: "/placeholder.svg",
        },
        {
            año: "2020",
            titulo: "Adaptación y Crecimiento",
            descripcion:
                "Exitosa adaptación a la educación virtual durante la pandemia y consolidación institucional.",
            logros: [
                "Continuidad académica 100%",
                "Nuevas modalidades híbridas",
                "Fortalecimiento tecnológico",
            ],
            imagen: "/placeholder.svg",
        },
        {
            año: "2023",
            titulo: "Consolidación y Proyección",
            descripcion:
                "Consolidación como referente educativo regional con proyección nacional e internacional.",
            logros: [
                "Más de 5000 graduados",
                "Alianzas estratégicas",
                "Proyectos de investigación",
            ],
            imagen: "/placeholder.svg",
        },
    ];

    const estadisticas = [
        { numero: "15+", label: "Años de Trayectoria", icono: Calendar },
        { numero: "5000+", label: "Graduados", icono: Users },
        { numero: "30+", label: "Carreras", icono: BookOpen },
        { numero: "6", label: "Institutos", icono: Building },
        { numero: "100+", label: "Convenios", icono: Award },
        { numero: "50+", label: "Proyectos de Investigación", icono: Star },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}
                <section className="py-10 bg-gradient-to-b from-background to-muted/30">
                    <div className="container mx-auto px-4">
                        <Breadcrumbs items={breadcrumbItems} className="mb-8" />

                        <div
                            ref={heroRef.elementRef}
                            className={cn(
                                "grid md:grid-cols-2 gap-12 items-center animate-on-scroll",
                                heroRef.isIntersecting
                                    ? "animate-fade-in-up"
                                    : ""
                            )}
                        >
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-6">
                                    Nuestra Historia
                                </h1>
                                <p className="text-lg text-muted-foreground font-body mb-6 leading-relaxed">
                                    Es la primera universidad privada laica del
                                    Noroeste argentino y la primera universidad
                                    argentina creada en el siglo XXI. Con la
                                    autorización de creación de la USPT, la
                                    Fundación para el Desarrollo, presidida por
                                    la Dra. Catalina Inés Lonac, ha puesto en
                                    movimiento otra etapa de un proyecto
                                    educativo planteado por la Fundación como
                                    una cuestión de Responsabilidad Social
                                    Empresaria, Competitividad Regional y
                                    Desarrollo Social.
                                </p>
                                <p className="text-lg text-muted-foreground font-body mb-6 leading-relaxed">
                                    La USPT debe su nombre a su ubicación
                                    geográfica, situada en la localidad de San
                                    Pablo en las instalaciones del ex-ingenio
                                    azucarero que llevaba el mismo nombre.
                                    Cuenta con tres sedes: su Campus
                                    Universitario ubicado en San Pablo, y sus
                                    dos sedes ubicadas al frente de la Plaza
                                    Independencia, en San Miguel de Tucumán.
                                </p>
                            </div>

                            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden border border-muted2">
                                <img
                                    src="/placeholder.svg"
                                    alt="Historia USPT"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary/70 via-primary/40 to-transparent mix-blend-multiply" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Estadísticas */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                15 Años de Logros
                            </h2>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                                Números que reflejan nuestro crecimiento y
                                compromiso con la educación de calidad
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {estadisticas.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3">
                                        <stat.icono className="w-6 h-6" />
                                    </div>
                                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                                        {stat.numero}
                                    </div>
                                    <div className="text-muted-foreground font-body text-sm">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Línea de Tiempo - COMENTADA TEMPORALMENTE */}
                {/* 
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
                Cronología de Nuestra Historia
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto font-body">
                Los momentos más importantes que marcaron el desarrollo de USPT
              </p>
            </div>

            <div
              ref={timelineRef.elementRef}
              className={cn(
                "relative animate-on-scroll",
                timelineRef.isIntersecting ? "animate-fade-in-up" : ""
              )}
            >
              {/* Línea central */}
                {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary/30 h-full hidden lg:block" />
              
              <div className="space-y-12">
                {hitos.map((hito, index) => (
                  <div key={index} className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}>
                    {/* Contenido */}
                {/* <div className="flex-1">
                      <Card className="border-muted2 hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                              {hito.año}
                            </div>
                            <CardTitle className="text-xl font-heading text-primary">
                              {hito.titulo}
                            </CardTitle>
                          </div>
                          <p className="text-muted-foreground font-body">
                            {hito.descripcion}
                          </p>
                        </CardHeader>
                        <CardContent>
                          <h4 className="font-semibold text-foreground mb-2">Principales Logros:</h4>
                          <ul className="space-y-1">
                            {hito.logros.map((logro, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span>{logro}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Punto central */}
                {/* <div className="hidden lg:flex w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg flex-shrink-0 z-10" />

                    {/* Imagen */}
                {/* <div className="flex-1">
                      <div className="aspect-video rounded-lg overflow-hidden border border-muted2">
                        <img 
                          src={hito.imagen} 
                          alt={hito.titulo}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        */}

                {/* Reserva Natural San Pablo */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold font-heading text-primary mb-6">
                                    Reserva Natural y de Usos Múltiples San
                                    Pablo
                                </h3>
                                <div className="space-y-4 text-muted-foreground font-body">
                                    <p>
                                        En 2016, con motivo del Bicentenario de
                                        la Independencia, la Universidad de San
                                        Pablo T inauguró la primera reserva a
                                        cargo de una universidad privada. La
                                        reserva ocupa más de 3000 hectáreas,
                                        emplazadas desde zonas de la ruta
                                        provincial 338 hacia Villa Nougués,
                                        Tucumán.
                                    </p>
                                    <p>
                                        Su objetivo es resguardar, para las
                                        actuales y futuras generaciones, el
                                        patrimonio biológico, paisajístico,
                                        cultural y arquitectónico de los faldeos
                                        de la Sierra de San Javier que se
                                        yerguen frente a la Universidad.
                                    </p>
                                    <p>
                                        La Sierra de San Javier da cobijo a uno
                                        de los ecosistemas más representativos
                                        de Tucumán, las Yungas Australes. La
                                        reserva funciona como un aula a cielo
                                        abierto destinada a la educación
                                        ambiental e investigación, además de
                                        generar oportunidades de turismo y
                                        recreación.
                                    </p>
                                    <p>
                                        La Universidad ha hecho de la
                                        restauración del patrimonio cultural del
                                        ex ingenio San Pablo una marca propia,
                                        extendiendo este compromiso a la
                                        naturaleza mediante acciones para
                                        restaurar, recuperar y preservar el
                                        patrimonio biológico como parte de las
                                        actividades que se realizan en la
                                        Reserva San Pablo.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                    <UniversityButton variant="primary">
                                        <a
                                            href="/reserva-natural"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Conocer la Reserva
                                        </a>
                                    </UniversityButton>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="aspect-video rounded-lg overflow-hidden border border-muted2">
                                    <img
                                        src="/placeholder.svg"
                                        alt="Reserva Natural San Pablo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Card className="border-muted2 text-center p-4">
                                        <div className="text-2xl font-bold text-primary mb-2">
                                            3000+
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            Hectáreas protegidas
                                        </div>
                                    </Card>
                                    <Card className="border-muted2 text-center p-4">
                                        <div className="text-2xl font-bold text-primary mb-2">
                                            2016
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            Año de inauguración
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visión de Futuro */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-3xl font-bold font-heading text-primary mb-6">
                                    Mirando hacia el Futuro
                                </h3>
                                <div className="space-y-4 text-muted-foreground font-body">
                                    <p>
                                        Con 15 años de trayectoria consolidada,
                                        USPT se proyecta hacia el futuro con una
                                        visión clara: ser la universidad de
                                        referencia en el NOA y expandir su
                                        impacto a nivel nacional e
                                        internacional.
                                    </p>
                                    <p>
                                        Nuestros próximos desafíos incluyen la
                                        ampliación de la oferta académica, el
                                        fortalecimiento de la investigación
                                        aplicada, y la consolidación de alianzas
                                        estratégicas que potencien el desarrollo
                                        regional.
                                    </p>
                                    <p>
                                        Seguimos comprometidos con la innovación
                                        educativa, la inclusión social y la
                                        formación de profesionales íntegros que
                                        contribuyan al progreso de nuestra
                                        sociedad.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Card className="border-muted2 text-center p-4">
                                    <div className="text-2xl font-bold text-primary mb-2">
                                        2025
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Nueva sede regional
                                    </div>
                                </Card>
                                <Card className="border-muted2 text-center p-4">
                                    <div className="text-2xl font-bold text-primary mb-2">
                                        2026
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Centro de investigación
                                    </div>
                                </Card>
                                <Card className="border-muted2 text-center p-4">
                                    <div className="text-2xl font-bold text-primary mb-2">
                                        2027
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Acreditación internacional
                                    </div>
                                </Card>
                                <Card className="border-muted2 text-center p-4">
                                    <div className="text-2xl font-bold text-primary mb-2">
                                        2030
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        Universidad sustentable
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-primary text-white">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6">
                            Formá parte de nuestra historia
                        </h3>
                        <p className="text-lg mb-8 max-w-2xl mx-auto font-body opacity-90">
                            Sumate a una institución con trayectoria sólida y
                            proyección de futuro. Tu formación profesional es
                            parte de nuestra historia en construcción.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <UniversityButton variant="secondary" size="lg">
                                <a href="/carreras">Conocer Carreras</a>
                            </UniversityButton>
                            {/*                             <UniversityButton
                                variant="tertiary"
                                size="lg"
                                className="text-white"
                            >
                                Solicitar Información
                            </UniversityButton> */}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Historia;
