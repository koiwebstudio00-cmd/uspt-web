import React, { useState } from "react";
// Se elimina Header para evitar import no usado
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    Globe,
    CheckCircle,
    AlertCircle,
} from "lucide-react";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        consulta: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [alert, setAlert] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);

    const contactRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });

    const breadcrumbItems = [{ label: "Contacto" }];

    const canalesContacto = [
        {
            icon: Phone,
            titulo: "Teléfonos",
            items: [
                {
                    label: "Línea Principal",
                    valor: "+54 381 4530630",
                    descripcion: "Atención general e informes",
                },
                {
                    label: "Admisiones",
                    valor: "INTERNO 118 Y 117",
                    descripcion: "Inscripciones y consultas académicas",
                },
                {
                    label: "WhatsApp",
                    valor: "+54 381 696-3908",
                    descripcion: "Consultas rápidas",
                },
            ],
        },
        {
            icon: Mail,
            titulo: "Emails",
            items: [
                {
                    label: "Información General",
                    valor: "informes@uspt.edu.ar",
                    descripcion: "Consultas generales",
                },
                {
                    label: "Alumnos",
                    valor: "consultasciaa@uspt.edu.ar",
                    descripcion: "Servicios estudiantiles",
                },
                {
                    label: "Prensa",
                    valor: "comunicacion@uspt.edu.ar",
                    descripcion: "Comunicación institucional",
                },
            ],
        },
        {
            icon: MapPin,
            titulo: "Direcciones",
            items: [
                {
                    label: "Sede Plaza",
                    valor: "Gral. José de San Martín 435",
                    descripcion: "San Miguel de Tucumán, Tucumán",
                },
                {
                    label: "Sede Centro Cultural",
                    valor: "24 de Septiembre 476",
                    descripcion: "San Miguel de Tucumán, Tucumán",
                },
                {
                    label: "Sede Campus",
                    valor: "Avenida Solano Vera y Camino a Villa Nougues",
                    descripcion: "Yerba Buena, Tucumán",
                },
            ],
        },
    ];

    const redesSociales = [
        {
            icon: Facebook,
            nombre: "Facebook",
            url: "https://www.facebook.com/universidad.sanpablotucuman",
        },
        {
            icon: Instagram,
            nombre: "Instagram",
            url: "https://instagram.com/usp.tuc/",
        },
        {
            icon: Linkedin,
            nombre: "LinkedIn",
            url: "https://www.linkedin.com/in/universidad-san-pablo-tucuman-5a634777",
        },
        {
            icon: Youtube,
            nombre: "YouTube",
            url: "https://www.youtube.com/user/UnivSanPabloT",
        },
    ];

    const horarios = [
        {
            dia: "Lunes a Viernes",
            horario: "8:00 - 20:00",
            tipo: "Atención General",
        },
    ];

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setAlert(null);

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/consultas/send`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                },
            );

            if (!response.ok) {
                throw new Error("Error al enviar la consulta");
            }

            // Success
            setAlert({
                type: "success",
                message:
                    "¡Consulta enviada exitosamente! Te responderemos pronto.",
            });
            setFormData({
                nombre: "",
                email: "",
                consulta: "",
            });

            // Auto-hide alert after 5 seconds
            setTimeout(() => setAlert(null), 5000);
        } catch (error) {
            setAlert({
                type: "error",
                message:
                    "Hubo un error al enviar tu consulta. Por favor, intenta nuevamente.",
            });

            // Auto-hide alert after 5 seconds
            setTimeout(() => setAlert(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}
                <HeroPageComponent
                    title="Contacto"
                    description="Estamos aquí para ayudarte. Encontrá toda la información de contacto y los canales de comunicación disponibles para resolver tus consultas."
                    imageUrl="/images/institucional.jpg"
                />

                {/* Breadcrumbs */}
                <div className="container mx-auto px-4 py-6">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Información de Contacto */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                Canales de Comunicación
                            </h2>
                            <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                                Múltiples formas de contactarnos para brindarte
                                la mejor atención
                            </p>
                        </div>

                        <div
                            ref={contactRef.elementRef}
                            className={cn(
                                "grid lg:grid-cols-3 gap-8 animate-on-scroll",
                                contactRef.isIntersecting
                                    ? "animate-fade-in-up"
                                    : "",
                            )}
                        >
                            {canalesContacto.map((canal, index) => (
                                <Card
                                    key={index}
                                    className="border-muted2 hover:shadow-lg transition-shadow"
                                >
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                                                <canal.icon className="w-6 h-6" />
                                            </div>
                                            <CardTitle className="text-xl font-heading text-primary">
                                                {canal.titulo}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            {canal.items.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className="border-b border-muted2 pb-3 last:border-b-0 last:pb-0"
                                                >
                                                    <div className="flex items-start justify-between mb-1">
                                                        <span className="font-semibold text-foreground text-sm">
                                                            {item.label}
                                                        </span>
                                                    </div>
                                                    {canal.titulo ===
                                                    "Emails" ? (
                                                        <a
                                                            href={`mailto:${item.valor}`}
                                                            className="text-primary font-medium mb-1 hover:text-primary/80 transition-colors block"
                                                        >
                                                            {item.valor}
                                                        </a>
                                                    ) : (
                                                        <div className="text-primary font-medium mb-1">
                                                            {item.valor}
                                                        </div>
                                                    )}
                                                    <div className="text-muted-foreground text-xs">
                                                        {item.descripcion}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Formulario de Contacto */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Formulario */}
                            <div className="space-y-6">
                                <Card className="border-muted2">
                                    <CardHeader>
                                        <CardTitle className="font-heading text-primary flex items-center gap-2">
                                            <Globe className="w-5 h-5" />
                                            Envianos tu consulta
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        {/* Alert Messages */}
                                        {alert && (
                                            <div
                                                className={`mb-4 p-4 rounded-lg flex items-start gap-3 ${
                                                    alert.type === "success"
                                                        ? "bg-green-50 border border-green-200"
                                                        : "bg-red-50 border border-red-200"
                                                }`}
                                            >
                                                {alert.type === "success" ? (
                                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                                ) : (
                                                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                                )}
                                                <p
                                                    className={`text-sm ${
                                                        alert.type === "success"
                                                            ? "text-green-800"
                                                            : "text-red-800"
                                                    }`}
                                                >
                                                    {alert.message}
                                                </p>
                                            </div>
                                        )}

                                        <form
                                            onSubmit={handleSubmit}
                                            className="space-y-4"
                                        >
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">
                                                        Nombre Completo *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="nombre"
                                                        value={formData.nombre}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        required
                                                        disabled={isSubmitting}
                                                        className="w-full px-3 py-2 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                                        placeholder="Tu nombre completo"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1">
                                                        Email *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        required
                                                        disabled={isSubmitting}
                                                        className="w-full px-3 py-2 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                                        placeholder="tu.email@ejemplo.com"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium mb-1">
                                                    Consulta *
                                                </label>
                                                <textarea
                                                    name="consulta"
                                                    value={formData.consulta}
                                                    onChange={handleInputChange}
                                                    required
                                                    disabled={isSubmitting}
                                                    rows={5}
                                                    className="w-full px-3 py-2 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    placeholder="Describe tu consulta o mensaje..."
                                                />
                                            </div>

                                            <UniversityButton
                                                type="submit"
                                                variant="primary"
                                                className="w-full"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    "Enviando..."
                                                ) : (
                                                    <>
                                                        <Send className="w-4 h-4 mr-2" />
                                                        Enviar Mensaje
                                                    </>
                                                )}
                                            </UniversityButton>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Información Adicional */}
                            <div className="space-y-6">
                                {/* Horarios */}
                                <Card className="border-muted2">
                                    <CardHeader>
                                        <CardTitle className="font-heading text-primary flex items-center gap-2">
                                            <Clock className="w-5 h-5" />
                                            Horarios de Atención
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            {horarios.map((horario, idx) => (
                                                <div
                                                    key={idx}
                                                    className="flex items-center justify-between py-2 border-b border-muted2 last:border-b-0"
                                                >
                                                    <div>
                                                        <div className="font-semibold text-foreground">
                                                            {horario.dia}
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">
                                                            {horario.tipo}
                                                        </div>
                                                    </div>
                                                    <div className="text-primary font-medium">
                                                        {horario.horario}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Redes Sociales */}
                                <Card className="border-muted2">
                                    <CardHeader>
                                        <CardTitle className="font-heading text-primary flex items-center gap-2">
                                            <Globe className="w-5 h-5" />
                                            Redes Sociales
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid grid-cols-2 gap-3">
                                            {redesSociales.map((red, idx) => (
                                                <a
                                                    key={idx}
                                                    href={red.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-3 p-3 border border-muted2 rounded-lg hover:bg-muted/30 transition-colors"
                                                >
                                                    <red.icon className="w-5 h-5 text-primary" />
                                                    <div className="flex-1">
                                                        <div className="font-medium text-foreground text-sm">
                                                            {red.nombre}
                                                        </div>
                                                        <div className="text-xs text-muted-foreground">
                                                            Seguinos en{" "}
                                                            {red.nombre}
                                                        </div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mapa */}
                {/* <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold font-heading text-primary mb-4">
                                Encontranos en el Mapa
                            </h3>
                            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
                                Ubicación del Campus Central y principales sedes
                                de USPT
                            </p>
                        </div>

                        <div className="aspect-video max-h-[500px] flex items-center justify-center mx-auto">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0886244846993!2d-65.32085712076517!3d-26.86892523120775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c1062e4b6b5%3A0x80c4c55f91f1ff82!2sSan%20Pablo-T!5e0!3m2!1ses!2sar!4v1759235318265!5m2!1ses!2sar"
                                loading="lazy"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </section> */}

                {/* CTA Section - WhatsApp Contacts */}
                <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img
                            src="/images/institucional.jpg"
                            alt="USPT Contacto"
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                        <div className="absolute inset-0 gradient-hero opacity-80" />
                    </div>
                    <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
                        <div className="container mx-auto px-4 text-center">
                            <h3 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-6">
                                ¿Tenés alguna consulta?
                            </h3>
                            <p className="text-xl mb-10 max-w-3xl mx-auto font-body leading-relaxed text-white text-balance opacity-90">
                                Nuestro equipo está disponible para ayudarte con
                                cualquier información que necesites sobre USPT y
                                nuestra propuesta académica
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                                {[
                                    {
                                        name: "Betzabet",
                                        phone: "+5493816132242",
                                    },
                                    {
                                        name: "Tesy",
                                        phone: "+5493816050625",
                                    },
                                    {
                                        name: "Ale",
                                        phone: "+5493816266870",
                                    },
                                    {
                                        name: "Paulo",
                                        phone: "+5493815342171",
                                    },
                                ].map((contact, index) => (
                                    <a
                                        key={index}
                                        href={`https://api.whatsapp.com/send?phone=${contact.phone}&text=Hola,%20me%20gustaria%20contactar%20para%20consultar%20sobre%20la%20USP-T`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white py-6 px-6 rounded-lg inline-flex flex-col items-center gap-3 group transition-all hover:scale-105"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                            <svg
                                                className="w-6 h-6 text-white"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                        </div>
                                        <span className="font-semibold font-heading text-center">
                                            {contact.name}
                                        </span>
                                        <span className="text-sm opacity-90">
                                            Contactar por WhatsApp
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contacto;
