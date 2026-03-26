import Footer from "@/components/Footer";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Calendar, Music, Ticket, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDiaEstudiante } from "@/hooks/use-dia-estudiante";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const DiaEstudiante = () => {
    const [tipoDocumento, setTipoDocumento] = useState<string>("dni");
    const [nombreCompleto, setNombreCompleto] = useState<string>("");
    const [dni, setDni] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [cantidadEntradas, setCantidadEntradas] = useState<string>("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentError, setPaymentError] = useState<string | null>(null);

    // Fetch dia del estudiante service from Supabase
    const { service, loading, error } = useDiaEstudiante();

    const PRECIO_ENTRADA = service?.precio || 0;
    const cantidad = parseInt(cantidadEntradas) || 0;
    const importe = cantidad * PRECIO_ENTRADA;

    const handlePago = async () => {
        // Limpiar errores previos
        setPaymentError(null);

        // Validar nombre completo
        if (!nombreCompleto.trim()) {
            setPaymentError("Por favor ingresá tu nombre completo");
            return;
        }

        // Validar email
        if (!email.trim()) {
            setPaymentError("Por favor ingresá tu email");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setPaymentError("Por favor ingresá un email válido");
            return;
        }

        // Validar DNI/Legajo
        if (!dni.trim()) {
            setPaymentError(
                `Por favor ingresá tu ${tipoDocumento === "dni" ? "DNI" : "Legajo"}`,
            );
            return;
        }

        // Validar cantidad de entradas
        const cantidadNum = parseInt(cantidadEntradas);
        if (!cantidadNum || cantidadNum < 1) {
            setPaymentError(
                "Por favor ingresá una cantidad válida de entradas (mínimo 1)",
            );
            return;
        }

        // Validar que exista el servicio
        if (!service?.id) {
            setPaymentError("Error al obtener información del evento");
            return;
        }

        // Procesar pago
        setIsProcessing(true);

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            if (!apiUrl) {
                throw new Error("URL de API no configurada");
            }

            // Construir el body según el tipo de documento
            const requestBody: {
                service_id: string;
                email: string;
                nombre: string;
                cantidad: number;
                dni?: string;
                legajo?: string;
            } = {
                service_id: service.id,
                email: email.trim(),
                nombre: nombreCompleto.trim(),
                cantidad: cantidadNum,
            };

            // Agregar dni o legajo según corresponda
            if (tipoDocumento === "dni") {
                requestBody.dni = dni.trim();
            } else {
                requestBody.legajo = dni.trim();
            }

            const response = await fetch(`${apiUrl}/payment/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
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
                throw new Error(
                    data.message || "No se recibió URL de pago válida",
                );
            }
        } catch (err) {
            setPaymentError(
                err instanceof Error
                    ? err.message
                    : "Error al procesar el pago. Por favor intentá nuevamente.",
            );
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                <HeroPageComponent
                    title="Día del Estudiante"
                    description="Gestioná tu pago para las actividades del Día del Estudiante"
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
                                        Datos de Compra
                                    </CardTitle>
                                    {loading && (
                                        <p className="text-sm text-muted-foreground">
                                            Cargando información del evento...
                                        </p>
                                    )}
                                    {error && (
                                        <p className="text-sm text-destructive">
                                            {error}
                                        </p>
                                    )}
                                    {service && !loading && (
                                        <p className="text-sm text-muted-foreground">
                                            Precio por entrada: $
                                            {service.precio.toLocaleString(
                                                "es-AR",
                                            )}
                                        </p>
                                    )}
                                </CardHeader>
                                <CardContent>
                                    {paymentError && (
                                        <Alert
                                            variant="destructive"
                                            className="mb-4"
                                        >
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertDescription>
                                                {paymentError}
                                            </AlertDescription>
                                        </Alert>
                                    )}

                                    <form className="space-y-4">
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
                                            <Label htmlFor="tipoDocumento">
                                                Tipo de Documento
                                            </Label>
                                            <Select
                                                value={tipoDocumento}
                                                onValueChange={setTipoDocumento}
                                            >
                                                <SelectTrigger id="tipoDocumento">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="dni">
                                                        DNI
                                                    </SelectItem>
                                                    <SelectItem value="legajo">
                                                        Legajo
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="dni">
                                                {tipoDocumento === "dni"
                                                    ? "DNI"
                                                    : "Legajo"}
                                            </Label>
                                            <Input
                                                id="dni"
                                                type="text"
                                                placeholder={
                                                    tipoDocumento === "dni"
                                                        ? "Ingresá tu DNI"
                                                        : "Ingresá tu número de legajo"
                                                }
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

                                        <div className="space-y-2">
                                            <Label htmlFor="cantidadEntradas">
                                                Cantidad de Entradas
                                            </Label>
                                            <Input
                                                id="cantidadEntradas"
                                                type="number"
                                                placeholder="Ingresá la cantidad de entradas"
                                                value={cantidadEntradas}
                                                onChange={(e) =>
                                                    setCantidadEntradas(
                                                        e.target.value,
                                                    )
                                                }
                                                min="1"
                                                disabled={loading || !service}
                                            />
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>

                            {cantidad > 0 && (
                                <Card className="border-primary bg-primary/5">
                                    <CardContent className="pt-6">
                                        <div className="text-center space-y-4">
                                            <div>
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    Importe a pagar
                                                </p>
                                                <p className="text-4xl font-bold text-primary">
                                                    $
                                                    {importe.toLocaleString(
                                                        "es-AR",
                                                    )}
                                                </p>
                                                <p className="text-sm text-muted-foreground mt-2">
                                                    {cantidad}{" "}
                                                    {cantidad === 1
                                                        ? "entrada"
                                                        : "entradas"}{" "}
                                                    × $
                                                    {PRECIO_ENTRADA.toLocaleString(
                                                        "es-AR",
                                                    )}
                                                </p>
                                                <p className="text-sm mt-3 text-muted-foreground">
                                                    *El pago se registra al{" "}
                                                    {tipoDocumento === "dni"
                                                        ? "DNI"
                                                        : "legajo"}{" "}
                                                    que ingresaste anteriormente
                                                </p>
                                            </div>
                                            <Button
                                                size="lg"
                                                className="w-full sm:w-auto"
                                                onClick={handlePago}
                                                disabled={
                                                    isProcessing ||
                                                    !nombreCompleto.trim() ||
                                                    !email.trim() ||
                                                    !dni.trim() ||
                                                    !cantidadEntradas ||
                                                    cantidad < 1
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
            </main>

            <Footer />
        </div>
    );
};

export default DiaEstudiante;
