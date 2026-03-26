import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const MapContact = () => {
    const titleRef = useIntersectionObserver<HTMLHeadingElement>({
        threshold: 0.3,
    });
    const descriptionRef = useIntersectionObserver<HTMLParagraphElement>({
        threshold: 0.3,
    });

    return (
        <section id="sedes" className="py-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef.elementRef}
                        className={`text-4xl md:text-5xl font-medium font-heading mb-6 animate-on-scroll animate-fade-in-scale ${
                            titleRef.isIntersecting
                                ? "animate-fade-in-scale"
                                : ""
                        }`}
                    >
                        Nuestras Sedes
                    </h2>
                    <p
                        ref={descriptionRef.elementRef}
                        className={`text-xl text-muted-foreground text-balance max-w-3xl mx-auto font-body animate-on-scroll animate-fade-in-up ${
                            descriptionRef.isIntersecting
                                ? "animate-fade-in-up"
                                : ""
                        }`}
                        style={{ transitionDelay: "0.2s" }}
                    >
                        Visitanos en cualquiera de nuestros campus. Estamos aquí
                        para acompañarte en tu formación académica
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Mapa */}
                    <div className="animate-slide-in-left relative">
                        <div className="bg-white border border-muted2 h-96 flex items-center justify-center md:sticky md:top-28">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0886244846993!2d-65.32085712076517!3d-26.86892523120775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1062e4b6b5%3A0x80c4c55f91f1ff82!2sSan%20Pablo-T!5e0!3m2!1ses!2sar!4v1759235318265!5m2!1ses!2sar"
                                loading="lazy"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    {/* Información de contacto */}
                    <div className="animate-slide-in-right">
                        <div className="space-y-8">
                            {/* Sede Principal */}
                            <div
                                className="bg-white border border-muted2 p-6 animate-fade-in-up"
                                style={{ animationDelay: "0.2s" }}
                            >
                                <h3 className="text-xl font-bold mb-4 ">
                                    Sede Plaza
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-medium font-body">
                                                San Martin 435
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-primary" />
                                        <span>+54 381 4530630</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-primary" />
                                        <span>informes@uspt.edu.ar</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-body">
                                                Lunes a Viernes: 8:00 am - 22:00 pm
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Sede Centro */}
                            <div
                                className="bg-white border border-muted2 p-6 animate-fade-in-up"
                                style={{ animationDelay: "0.4s" }}
                            >
                                <h3 className="text-xl font-bold mb-4 ">
                                    Sede Centro Cultural
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-medium font-body">
                                                24 de septiembre 476
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-primary" />
                                        <span>+54 381 4530630</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-primary" />
                                        <span>informes@uspt.edu.ar</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-body">
                                                Lunes a Viernes: 8:00 am - 17:00 pm
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="bg-white border border-muted2 p-6 animate-fade-in-up"
                                style={{ animationDelay: "0.4s" }}
                            >
                                <h3 className="text-xl font-bold mb-4 ">
                                    Sede Campus
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-medium font-body">
                                                Avenida Solano Vera y Camino a Villa Nougues
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-primary" />
                                        <span>+54 381 4530630</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-primary" />
                                        <span>informes@uspt.edu.ar</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-body">
                                                Lunes a Viernes: 8:00 am - 20:00 pm
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapContact;
