import Footer from "@/components/Footer";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
    Globe,
    MapPin,
    Calendar,
    Users,
    ArrowLeft,
    AlertCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useReservaServices } from "@/hooks/use-reserva-services";

const ReservaSanPablo = () => {
    const [tipoReserva, setTipoReserva] = useState<string>("");
    const [nombreCompleto, setNombreCompleto] = useState<string>("");
    const [dni, setDni] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cantidad, setCantidad] = useState<string>("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentError, setPaymentError] = useState<string | null>(null);

    // Fetch reserva services from Supabase
    const { reservaPersonal, reservaGrupal, loading, error } =
        useReservaServices();

    const getImporte = () => {
        if (tipoReserva === "personal" && reservaPersonal)
            return reservaPersonal.precio;
        if (tipoReserva === "grupal" && reservaGrupal) {
            const cantidadNum = parseInt(cantidad) || 0;
            return reservaGrupal.precio * (cantidadNum > 0 ? cantidadNum : 0);
        }
        return 0;
    };

    const importe = getImporte();

    const handlePago = async () => {
        // Limpiar errores previos
        setPaymentError(null);

        // Validar campos requeridos
        if (!nombreCompleto.trim()) {
            setPaymentError("Por favor ingresá tu nombre completo");
            return;
        }

        if (!dni.trim()) {
            setPaymentError("Por favor ingresá tu DNI");
            return;
        }

        if (!email.trim()) {
            setPaymentError("Por favor ingresá tu email");
            return;
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setPaymentError("Por favor ingresá un email válido");
            return;
        }

        if (!tipoReserva) {
            setPaymentError("Por favor seleccioná un tipo de reserva");
            return;
        }

        // Validar cantidad para reserva grupal
        if (tipoReserva === "grupal") {
            const cantidadNum = parseInt(cantidad);
            if (!cantidadNum || cantidadNum < 1) {
                setPaymentError(
                    "Por favor ingresá una cantidad válida (mínimo 1)",
                );
                return;
            }
        }

        // Obtener service_id según el tipo de reserva
        const serviceId =
            tipoReserva === "personal"
                ? reservaPersonal?.id
                : reservaGrupal?.id;

        if (!serviceId) {
            setPaymentError("Error al obtener información del servicio");
            return;
        }

        // Determinar cantidad final (1 para personal, la ingresada para grupal)
        const cantidadFinal =
            tipoReserva === "personal" ? 1 : parseInt(cantidad) || 1;

        // Procesar pago
        setIsProcessing(true);
        console.log("Datos de la reserva:", {
            tipoReserva,
            nombreCompleto,
            dni,
            email,
            cantidad,
            serviceId,
            cantidadFinal,
        });
        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            if (!apiUrl) {
                throw new Error("URL de API no configurada");
            }

            const response = await fetch(`${apiUrl}/payment/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    service_id: serviceId,
                    email: email.trim(),
                    dni: dni.trim(),
                    nombre: nombreCompleto.trim(),
                    cantidad: cantidadFinal,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(
                    errorData.message ||
                        `Error del servidor: ${response.status}`,
                );
            }

            const data = await response.json();

            if (data.success && data.init_point) {
                // Redirigir a Mercado Pago
                window.location.href = data.init_point;
            } else {
                throw new Error(data.message || "Error al procesar el pago");
            }
        } catch (error) {
            console.error("Error al procesar el pago:", error);
            setPaymentError(
                error instanceof Error
                    ? error.message
                    : "Error al procesar el pago. Por favor intentá nuevamente.",
            );
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                <HeroPageComponent
                    title="Reserva San Pablo"
                    description="Gestioná tu reserva para la Reserva San Pablo de forma rápida y segura"
                    imageUrl="/images/IMG_4688.webp"
                />

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <Link
                            to="/pagos-online"
                            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Volver a Pagos Online
                        </Link>

                        <div className="max-w-4xl mx-auto space-y-6">
                            <Card className="border-muted2">
                                <CardHeader>
                                    <CardTitle className="text-2xl">
                                        Datos de la Reserva
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="tipoReserva">
                                                Tipo de Reserva
                                            </Label>
                                            <Select
                                                value={tipoReserva}
                                                onValueChange={setTipoReserva}
                                                disabled={loading}
                                            >
                                                <SelectTrigger id="tipoReserva">
                                                    <SelectValue
                                                        placeholder={
                                                            loading
                                                                ? "Cargando opciones..."
                                                                : "Seleccionar tipo de reserva"
                                                        }
                                                    />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {reservaPersonal && (
                                                        <SelectItem value="personal">
                                                            Reserva Personal - $
                                                            {reservaPersonal.precio.toLocaleString(
                                                                "es-AR",
                                                            )}
                                                        </SelectItem>
                                                    )}
                                                    {reservaGrupal && (
                                                        <SelectItem value="grupal">
                                                            Reserva Grupal - $
                                                            {reservaGrupal.precio.toLocaleString(
                                                                "es-AR",
                                                            )}
                                                        </SelectItem>
                                                    )}
                                                </SelectContent>
                                            </Select>
                                            {error && (
                                                <p className="text-sm text-destructive">
                                                    {error}
                                                </p>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="nombreCompleto">
                                                Nombre Completo
                                            </Label>
                                            <Input
                                                id="nombreCompleto"
                                                type="text"
                                                placeholder="Ingresá tu nombre completo"
                                                value={nombreCompleto}
                                                onChange={(e) =>
                                                    setNombreCompleto(
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="dni">DNI</Label>
                                            <Input
                                                id="dni"
                                                type="text"
                                                placeholder="Ingresá tu DNI"
                                                value={dni}
                                                onChange={(e) =>
                                                    setDni(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="Ingresá tu email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </div>

                                        {tipoReserva === "grupal" && (
                                            <div className="space-y-2">
                                                <Label htmlFor="cantidad">
                                                    Cantidad de Personas
                                                </Label>
                                                <Input
                                                    id="cantidad"
                                                    type="number"
                                                    placeholder="Ingresá la cantidad de personas"
                                                    value={cantidad}
                                                    onChange={(e) =>
                                                        setCantidad(
                                                            e.target.value,
                                                        )
                                                    }
                                                    min="1"
                                                    max="50"
                                                />
                                            </div>
                                        )}
                                    </form>
                                </CardContent>
                            </Card>

                            {paymentError && (
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription>
                                        {paymentError}
                                    </AlertDescription>
                                </Alert>
                            )}

                            {tipoReserva && (
                                <Card className="border-primary bg-primary/5">
                                    <CardContent className="pt-6">
                                        <div className="text-center space-y-4">
                                            <div>
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    Importe a pagar
                                                </p>
                                                {tipoReserva === "grupal" &&
                                                    reservaGrupal &&
                                                    parseInt(cantidad) > 0 && (
                                                        <p className="text-sm text-muted-foreground mb-1">
                                                            $
                                                            {reservaGrupal.precio.toLocaleString(
                                                                "es-AR",
                                                            )}{" "}
                                                            × {cantidad}{" "}
                                                            personas
                                                        </p>
                                                    )}
                                                <p className="text-4xl font-bold text-primary">
                                                    $
                                                    {importe.toLocaleString(
                                                        "es-AR",
                                                    )}
                                                </p>
                                                <p className="text-sm mt-3 text-muted-foreground">
                                                    *El pago se registra al
                                                    numero de dni que ingreso
                                                    anteriormente
                                                </p>
                                            </div>
                                            <Button
                                                size="lg"
                                                className="w-full sm:w-auto"
                                                onClick={handlePago}
                                                disabled={
                                                    isProcessing ||
                                                    !nombreCompleto ||
                                                    !dni ||
                                                    !email ||
                                                    !tipoReserva ||
                                                    (tipoReserva === "grupal" &&
                                                        (!cantidad ||
                                                            parseInt(cantidad) <
                                                                1))
                                                }
                                            >
                                                {isProcessing
                                                    ? "Procesando pago..."
                                                    : "Pagar importe"}
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    </div>
                </section>

                {/* Historia y Mapa */}
                <section className="py-20 bg-white border-t border-muted2">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold font-heading text-primary mb-6">
                                    Historia de Reserva San Pablo
                                </h2>
                                <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                                    <p>
                                        En el 2016, la Universidad de San Pablo
                                        T, con motivo de la celebración del
                                        Bicentenario de la declaración de la
                                        Independencia, inaugura la primera
                                        reserva a cargo de una universidad
                                        privada.
                                        <br />
                                        <br />
                                        La reserva ocupa un territorio de más de
                                        3000 hectáreas, emplazado desde zonas de
                                        la ruta provincial 338 hacia Villa
                                        Nougués, Tucumán.
                                        <br />
                                        <br />
                                        Se busca resguardar, para las actuales y
                                        futuras generaciones, el patrimonio
                                        biológico, paisajístico, cultural y
                                        arquitectónico de los faldeos de la
                                        Sierra de San Javier que se yerguen
                                        frente a la Universidad de San Pablo T.
                                    </p>
                                </div>
                            </div>
                            <div className="h-[400px] overflow-hidden shadow-lg border border-muted2">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10616.961583937617!2d-65.34572847776148!3d-26.866596992606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94224387d0bb638b%3A0xa2079d5a64992c9a!2sReserva%20San%20Pablo!5e0!3m2!1ses-419!2sar!4v1775257954121!5m2!1ses-419!2sar"
                                    loading="lazy"
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ReservaSanPablo;
