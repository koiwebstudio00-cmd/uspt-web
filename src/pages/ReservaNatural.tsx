import React, { useEffect } from "react";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UniversityButton } from "@/components/ui/university-button";

import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";

const ReservaNatural = () => {
    // SEO: título y descripción
    useEffect(() => {
        document.title =
            "Reserva Natural San Pablo – Universidad San Pablo Tucumán";
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute(
                "content",
                "Espacio de conservación, educación e investigación ambiental dentro del Campus de la Universidad San Pablo Tucumán.",
            );
        }
    }, []);

    const breadcrumbItems = [
        { label: "Nosotros", href: "/nosotros" },
        { label: "Reserva Natural" },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}
                <HeroPageComponent
                    imageUrl="/reserva/reserva-13.jpg"
                    title="Reserva Natural y de Usos Múltiples San Pablo"
                    description="La primera reserva a cargo de una universidad privada en Argentina. Más de 3000 hectáreas dedicadas a la conservación del patrimonio biológico, paisajístico, cultural y arquitectónico de los faldeos de la Sierra de San Javier."
                    minHeight="450px"
                >
                    <div className="flex justify-center md:justify-start">
                        <Link
                            to="/pagos/reserva-san-pablo"
                            className="text-white hover:underline bg-primary/50 py-2 px-6 inline-flex items-center gap-2 group transition-all hover:bg-primary/60 font-body"
                        >
                            Participá de una visita
                            <ArrowRight className="size-5 transition-all group-hover:translate-x-1" />
                        </Link>
                    </div>
                </HeroPageComponent>

                <div className="container mx-auto px-4">
                    <Breadcrumbs items={breadcrumbItems} className="my-8" />
                </div>

                {/* Historia y Fundación */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div className="space-y-6">
                                <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                    Historia de la Reserva
                                </h2>
                                <div className="prose prose-lg max-w-none font-body">
                                    <p className="text-foreground/90 leading-relaxed mb-6">
                                        En el{" "}
                                        <strong className="text-foreground">
                                            2016
                                        </strong>
                                        , la Universidad de San Pablo T, con
                                        motivo de la celebración del
                                        Bicentenario de la declaración de la
                                        Independencia, inaugura la primera
                                        reserva a cargo de una universidad
                                        privada.
                                    </p>
                                    <p className="text-foreground/90 leading-relaxed mb-6">
                                        La reserva ocupa un territorio de{" "}
                                        <strong className="text-foreground">
                                            más de 3000 hectáreas
                                        </strong>
                                        , emplazado desde zonas de la ruta
                                        provincial 338 hacia Villa Nougués,
                                        Tucumán. Se busca resguardar, para las
                                        actuales y futuras generaciones, el
                                        patrimonio biológico, paisajístico,
                                        cultural y arquitectónico de los faldeos
                                        de la Sierra de San Javier que se
                                        yerguen frente a la Universidad de San
                                        Pablo T.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="aspect-[4/3] overflow-hidden border border-muted2">
                                    <img
                                        src="/reserva/reserva-1.jpg"
                                        alt="Reserva Natural San Pablo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="aspect-[4/3] overflow-hidden border border-muted2">
                                    <img
                                        src="/reserva/reserva-3.jpg"
                                        alt="Sierra de San Javier"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="col-span-2 aspect-[5/2] overflow-hidden border border-muted2">
                                    <img
                                        src="/reserva/reserva-4.jpg"
                                        alt="Yungas Australes"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* La Sierra de San Javier */}
                <section className="py-20 bg-primary/10">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                La Sierra de San Javier
                            </h2>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                                La Sierra de San Javier da cobijo a uno de los
                                ecosistemas más representativos de la provincia
                                de Tucumán, las{" "}
                                <strong>Yungas Australes</strong>. La reserva se
                                convierte así en un aula a cielo abierto
                                destinada a la educación ambiental e
                                investigación, pero también generando
                                oportunidades de turismo y recreación.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="bg-white border border-muted2 p-8">
                                    <h3 className="text-xl font-semibold text-foreground font-heading mb-4">
                                        Patrimonio y Restauración
                                    </h3>
                                    <p className="text-muted-foreground font-body leading-relaxed">
                                        La San Pablo T ha hecho de la
                                        restauración del patrimonio cultural del
                                        ex ingenio San Pablo una marca propia.
                                        Este afán de recuperar nuestra historia
                                        y valores, se extiende a nuestra
                                        naturaleza, buscando restaurar,
                                        recuperar y preservar nuestro patrimonio
                                        biológico como parte de las actividades
                                        a realizar en la reserva San Pablo.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="bg-white border border-muted2 overflow-hidden h-[360px] flex items-center justify-center">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10616.961583937617!2d-65.34572847776148!3d-26.866596992606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94224387d0bb638b%3A0xa2079d5a64992c9a!2sReserva%20San%20Pablo!5e0!3m2!1ses-419!2sar!4v1775257954121!5m2!1ses-419!2sar"
                                        loading="lazy"
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
                                    <MapPin className="w-4 h-4 text-foreground" />
                                    <span>
                                        Ruta Provincial 338 hacia Villa Nougués
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Galería Bento */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Galería de la Reserva
                            </h2>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                                Explorá la belleza natural de nuestra reserva a
                                través de estas imágenes
                            </p>
                        </div>

                        {/* Bento Grid Layout */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {/* Imagen grande - ocupa 2x2 */}
                            <div className="col-span-2 row-span-2 overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva.jpg"
                                    alt="Reserva Natural"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Imágenes pequeñas */}
                            <div className="overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-5.jpg"
                                    alt="Flora de la reserva"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-6.jpg"
                                    alt="Fauna de la reserva"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-7.jpg"
                                    alt="Senderos"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-8.jpg"
                                    alt="Paisaje"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Imagen horizontal - ocupa 2x1 */}
                            <div className="col-span-2 overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-9.jpg"
                                    alt="Vista panorámica"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-10.jpg"
                                    alt="Naturaleza"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-11.jpg"
                                    alt="Ecosistema"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Imagen vertical - ocupa 1x2 */}
                            <div className="row-span-2 overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-12.jpg"
                                    alt="Árboles"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-13.jpg"
                                    alt="Biodiversidad"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-14.jpg"
                                    alt="Conservación"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-15.jpg"
                                    alt="Naturaleza"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Imagen horizontal - ocupa 2x1 */}
                            <div className="col-span-2 overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-16.jpg"
                                    alt="Vista de la sierra"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-17.jpg"
                                    alt="Ambiente natural"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="overflow-hidden border border-muted2">
                                <img
                                    src="/reserva/reserva-18.jpg"
                                    alt="Reserva San Pablo"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section moved to bottom */}
                <CtaPage
                    title="Descubrí el pulmón verde de la USP-T"
                    description="Sumate a nuestras actividades educativas, recorridos y programas de conservación."
                    url="/pagos/reserva-san-pablo"
                    buttonText="Participá de una visita"
                    backgroundImage="/reserva/reserva.jpg"
                />
            </main>

            <Footer />
        </div>
    );
};

export default ReservaNatural;
