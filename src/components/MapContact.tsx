import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const sedes = [
    {
        nombre: "Sede Plaza",
        direccion: "San Martín 435",
        telefono: "+54 381 4530630",
        email: "informes@uspt.edu.ar",
        horario: "Lunes a Viernes: 8:00 am - 22:00 pm",
    },
    {
        nombre: "Sede Centro Cultural",
        direccion: "24 de Septiembre 476",
        telefono: "+54 381 4530630",
        email: "informes@uspt.edu.ar",
        horario: "Lunes a Viernes: 8:00 am - 17:00 pm",
    },
    {
        nombre: "Sede Campus",
        direccion: "Av. Solano Vera y Camino a Villa Nougués",
        telefono: "+54 381 4530630",
        email: "informes@uspt.edu.ar",
        horario: "Lunes a Viernes: 8:00 am - 20:00 pm",
    },
];

const MapContact = () => {
    const titleRef = useIntersectionObserver<HTMLHeadingElement>({
        threshold: 0.3,
    });
    const descriptionRef = useIntersectionObserver<HTMLParagraphElement>({
        threshold: 0.3,
    });
    const cardsRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.1,
    });

    return (
        <section id="sedes" className="py-28 bg-white">
            <div className="container mx-auto px-4">
                {/* Encabezado */}
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef.elementRef}
                        className={cn(
                            "text-3xl md:text-5xl font-medium font-heading text-foreground mb-6 animate-on-scroll",
                            titleRef.isIntersecting
                                ? "animate-fade-in-scale"
                                : "",
                        )}
                    >
                        Nuestras Sedes
                    </h2>
                    <p
                        ref={descriptionRef.elementRef}
                        className={cn(
                            "text-xl text-muted-foreground text-balance max-w-3xl mx-auto font-body leading-relaxed animate-on-scroll",
                            descriptionRef.isIntersecting
                                ? "animate-fade-in-up"
                                : "",
                        )}
                        style={{ transitionDelay: "0.2s" }}
                    >
                        Visitanos en cualquiera de nuestros campus. Estamos aquí
                        para acompañarte en tu formación académica
                    </p>
                </div>

                {/* Cards de sedes */}
                <div
                    ref={cardsRef.elementRef}
                    className={cn(
                        "grid md:grid-cols-3 gap-0 mb-10 border border-muted2 animate-on-scroll",
                        cardsRef.isIntersecting ? "animate-fade-in-up" : "",
                    )}
                >
                    {sedes.map((sede, index) => (
                        <div
                            key={sede.nombre}
                            className={cn(
                                "p-7 flex flex-col gap-4 bg-white hover:bg-muted/30 transition-colors",
                                index < sedes.length - 1
                                    ? "border-b md:border-b-0 md:border-r border-muted2"
                                    : "",
                            )}
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Número + Nombre */}
                            <div className="flex items-start gap-3 mb-1">
                                <h3 className="text-lg font-heading font-bold text-foreground leading-tight">
                                    {sede.nombre}
                                </h3>
                            </div>

                            <div className="w-8 h-0.5 bg-primary/40" />

                            {/* Info */}
                            <div className="space-y-3 text-sm font-body text-muted-foreground">
                                <div className="flex items-start gap-2.5">
                                    <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{sede.direccion}</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span>{sede.telefono}</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span>{sede.email}</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <Clock className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                    <span>{sede.horario}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mapa full width */}
                <div className="border border-muted2 w-full h-[420px] overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0886244846993!2d-65.32085712076517!3d-26.86892523120775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1062e4b6b5%3A0x80c4c55f91f1ff82!2sSan%20Pablo-T!5e0!3m2!1ses!2sar!4v1759235318265!5m2!1ses!2sar"
                        loading="lazy"
                        className="w-full h-full"
                        title="Mapa de sedes USPT"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default MapContact;
