import React from "react";
import { useServiceAvailability } from "@/hooks/use-service-availability";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import {
    CreditCard,
    CheckCircle,
    FileText,
    Globe,
    ArrowRight,
    Phone,
    HelpCircle,
} from "lucide-react";
import { Navbar1 } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import MercadoPago from "@/components/icons/Mp";
import WhatsApp from "@/components/icons/Wp";

const PagosOnline = () => {
    const metodosRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });

    const { availability, loading: loadingAvailability } =
        useServiceAvailability();

    const heroCtaCount =
        1 + (availability.reserva ? 1 : 0) + (availability.tramites ? 1 : 0);

    const heroCtaGridClass =
        {
            1: "grid-cols-1",
            2: "md:grid-cols-2",
            3: "md:grid-cols-3",
        }[heroCtaCount] ?? "md:grid-cols-3";

    const secondaryCtaCount = availability.diaEstudiante ? 1 : 0;

    const secondaryCtaGridClass =
        {
            1: "grid-cols-1",
            2: "grid-cols-2",
        }[secondaryCtaCount] ?? "grid-cols-2";

    const metodosDepago = [
        {
            nombre: "Mercado Pago",
            descripcion: "Billetera virtual y otros medios",
            icono: MercadoPago,
            disponible: true,
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}
                <HeroPageComponent
                    title="Pagos Online"
                    description="Nuevo sistema de pagos online para abonar matrícula, cuotas y aranceles. Acceso disponible las 24 horas
                                desde cualquier dispositivo"
                    imageUrl="/images/IMG_4688.webp"
                />

                {/* Métodos de Pago */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div
                            ref={metodosRef.elementRef}
                            className={cn(
                                "animate-on-scroll",
                                metodosRef.isIntersecting
                                    ? "animate-fade-in-up"
                                    : "",
                            )}
                        >
                            <div className="grid lg:grid-cols-2 gap-12 items-start">
                                {/* Columna izquierda: Encabezado + Métodos */}
                                <div>
                                    <div className="mb-16">
                                        <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                            Métodos de Pago Disponibles
                                        </h2>
                                        <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl">
                                            Elegí el método que más te convenga.
                                            Todos los cobros online se procesan
                                            a través de medios habilitados y
                                            seguros.
                                        </p>
                                    </div>

                                    <div className="grid gap-4">
                                        {metodosDepago.map((metodo, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-5 border border-muted2 p-5 bg-muted/30 hover:bg-muted/50 transition-colors"
                                            >
                                                <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                                                    <metodo.icono className="w-8 h-8" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="font-heading font-semibold text-foreground text-lg leading-tight mb-1">
                                                        {metodo.nombre}
                                                    </p>
                                                    <p className="text-muted-foreground font-body text-sm mb-2">
                                                        {metodo.descripcion}
                                                    </p>
                                                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5">
                                                        <CheckCircle className="w-3.5 h-3.5" />
                                                        Habilitado
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Columna derecha: Accesos directos */}
                                {!loadingAvailability && (
                                    <div className="flex flex-col h-full">
                                        <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-5">
                                            Accesos directos
                                        </p>
                                        <div className="flex flex-col gap-4 flex-1">
                                            {availability.reserva && (
                                                <Link
                                                    to="/pagos/reserva-san-pablo"
                                                    className="group flex items-center justify-between border border-primary/30 bg-primary/5 hover:bg-primary hover:border-primary px-6 py-5 transition-all"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="font-semibold font-heading text-foreground group-hover:text-white transition-colors">
                                                            Reserva San Pablo
                                                        </span>
                                                    </div>
                                                    <ArrowRight className="w-4 h-4 text-primary group-hover:text-white transition-all group-hover:translate-x-1" />
                                                </Link>
                                            )}

                                            <a
                                                href="https://gestion.usptonline.com.ar/Universitas/Account/LogOn?ReturnUrl=/universitas&Secure=True"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex items-center justify-between border border-primary bg-primary px-6 py-5 transition-all hover:bg-primary/90"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className="font-semibold font-heading text-white">
                                                        Pagar en Autogestión
                                                    </span>
                                                </div>
                                                <ArrowRight className="w-4 h-4 text-white transition-all group-hover:translate-x-1" />
                                            </a>

                                            {availability.tramites && (
                                                <Link
                                                    to="/pagos/tramites-varios"
                                                    className="group flex items-center justify-between border border-primary/30 bg-primary/5 hover:bg-primary hover:border-primary px-6 py-5 transition-all"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className="font-semibold font-heading text-foreground group-hover:text-white transition-colors">
                                                            Trámites Varios
                                                        </span>
                                                    </div>
                                                    <ArrowRight className="w-4 h-4 text-primary group-hover:text-white transition-all group-hover:translate-x-1" />
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Guía de Inscripción */}
                <section id="instructivos" className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h3 className="text-2xl font-heading font-semibold mb-6">
                                    Información sobre Pagos
                                </h3>
                                <div className="space-y-4">
                                    <Button
                                        variant="outline"
                                        className="w-full justify-start h-auto py-4 px-6"
                                        asChild
                                    >
                                        <a
                                            href="/pagos/INSRUCTIVO_PAGO_MATRCULA_Y_CUOTAS.pdf"
                                            download
                                            className="flex items-center gap-3"
                                        >
                                            <FileText className="w-5 h-5" />
                                            <div className="text-left">
                                                <div className="font-semibold">
                                                    Instructivo de Pagos
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    Descargá la guía completa
                                                </div>
                                            </div>
                                        </a>
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="w-full justify-start h-auto py-4 px-6"
                                        asChild
                                    >
                                        <a
                                            href="/pagos/conveniosdedescuentos.pdf"
                                            download
                                            className="flex items-center gap-3"
                                        >
                                            <FileText className="w-5 h-5" />
                                            <div className="text-left">
                                                <div className="font-semibold">
                                                    Convenios de Descuentos
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    Conocé los beneficios
                                                    disponibles
                                                </div>
                                            </div>
                                        </a>
                                    </Button>
                                </div>
                            </div>

                            <Card className="border-none bg-transparent overflow-hidden">
                                <h3 className="text-2xl font-heading font-semibold mb-6">
                                    Gestión de Pagos por WhatsApp
                                </h3>
                                <CardContent className="p-0 border-muted2">
                                    <div className="grid divide-y md:divide-y-0 md:divide-x divide-muted2 md:grid-cols-2">
                                        {/* Aranceles Campus */}
                                        <div className="p-6 space-y-4">
                                            <h4 className="font-heading font-bold text-primary flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                Aranceles Campus
                                            </h4>

                                            <div className="space-y-3">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-xs text-muted-foreground uppercase font-semibold">
                                                        WhatsApp
                                                    </span>
                                                    <a
                                                        href="https://api.whatsapp.com/send?phone=5493814584601&text=Hola,%20tengo%20una%20consulta%20sobre%20aranceles%20campus"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                                                    >
                                                        <WhatsApp className="w-4 h-4" />
                                                        <span>
                                                            381 458-4601
                                                        </span>
                                                    </a>
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <span className="text-xs text-muted-foreground uppercase font-semibold">
                                                        Teléfonos Fijos
                                                    </span>
                                                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                                        <Phone className="w-4 h-4" />
                                                        <span className="font-medium text-foreground">
                                                            Int. 253 - 163 - 205
                                                            - 206
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Aranceles Centro */}
                                        <div className="p-6 space-y-4 bg-muted/20">
                                            <h4 className="font-heading font-bold text-primary flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-primary" />
                                                Aranceles Centro
                                            </h4>

                                            <div className="space-y-3">
                                                <div className="flex flex-col gap-1">
                                                    <span className="text-xs text-muted-foreground uppercase font-semibold">
                                                        WhatsApp
                                                    </span>
                                                    <a
                                                        href="https://api.whatsapp.com/send?phone=5493814584601&text=Hola,%20tengo%20una%20consulta%20sobre%20aranceles%20centro"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors"
                                                    >
                                                        <WhatsApp className="w-4 h-4" />
                                                        <span>
                                                            381 458-4601
                                                        </span>
                                                    </a>
                                                </div>

                                                <div className="flex flex-col gap-1">
                                                    <span className="text-xs text-muted-foreground uppercase font-semibold">
                                                        Teléfonos Fijos
                                                    </span>
                                                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                                        <Phone className="w-4 h-4" />
                                                        <span className="font-medium text-foreground">
                                                            Int. 136 - 158
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Gestión Autónoma de Pagos */}
                {!loadingAvailability && secondaryCtaCount > 0 && (
                    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0">
                            <img
                                src="/images/institucional.jpg"
                                alt="USPT"
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                            <div className="absolute inset-0 gradient-hero opacity-80" />
                        </div>
                        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
                            <div className="container mx-auto px-4 text-center">
                                <h3 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-6">
                                    Gestioná tus Pagos
                                </h3>
                                <p className="text-xl mb-10 max-w-3xl mx-auto font-body leading-relaxed text-white text-balance opacity-90">
                                    Realizá tus pagos de forma rápida y segura
                                    desde cualquier lugar. Seleccioná el tipo de
                                    pago que necesitás gestionar
                                </p>
                                <div
                                    className={cn(
                                        "grid gap-4 max-w-5xl mx-auto",
                                        secondaryCtaGridClass,
                                    )}
                                >
                                    {!loadingAvailability &&
                                        availability.diaEstudiante && (
                                            <Link
                                                to="/pagos/dia-estudiante"
                                                className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white py-6 px-6 flex flex-col items-center gap-3 group transition-all hover:scale-105 w-full"
                                            >
                                                <CheckCircle className="w-8 h-8" />
                                                <span className="font-semibold font-heading text-center">
                                                    Día del Estudiante
                                                </span>
                                                <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-1" />
                                            </Link>
                                        )}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
                {/* Necesitás Ayuda */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <Card className="max-w-4xl mx-auto border-primary/20 bg-primary/5 shadow-sm">
                            <CardContent className="p-8 md:p-12">
                                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <HelpCircle className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                            ¿Necesitás ayuda con tu pago?
                                        </h2>
                                        <p className="text-lg text-muted-foreground font-body leading-relaxed">
                                            Si tenés dudas sobre cómo realizar
                                            un pago, problemas con Mercado Pago
                                            o necesitás consultar sobre
                                            aranceles, nuestro equipo está para
                                            ayudarte.
                                        </p>
                                        <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-2">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                                                    Por correo
                                                </span>
                                                <a
                                                    href="mailto:informes@uspt.edu.ar"
                                                    className="text-primary hover:underline font-semibold text-lg"
                                                >
                                                    informes@uspt.edu.ar
                                                </a>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <span className="text-xs text-muted-foreground uppercase font-bold tracking-wider">
                                                    Por teléfono
                                                </span>
                                                <span className="text-foreground font-semibold text-lg">
                                                    0381-4530630 (Int. 136 -
                                                    158)
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PagosOnline;
