import Footer from "@/components/Footer";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    FileText,
    GraduationCap,
    FileCheck,
    ClipboardList,
    ArrowLeft,
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
import { useTramites } from "@/hooks/use-tramites";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const TramitesVarios = () => {
    const [tipoDocumento, setTipoDocumento] = useState<string>("dni");
    const [dni, setDni] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [tramiteSeleccionado, setTramiteSeleccionado] = useState<string>("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentError, setPaymentError] = useState<string | null>(null);

    // Fetch tramites from Supabase
    const { tramites: tramitesDisponibles, loading, error } = useTramites();

    const tramiteActual = tramitesDisponibles.find(
        (t) => t.id === tramiteSeleccionado,
    );
    const importe = tramiteActual?.precio || 0;

    const handlePago = async () => {
        // Limpiar errores previos
        setPaymentError(null);

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

        // Validar trámite seleccionado
        if (!tramiteSeleccionado) {
            setPaymentError("Por favor seleccioná un trámite");
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
                dni?: string;
                legajo?: string;
            } = {
                service_id: tramiteSeleccionado,
                email: email.trim(),
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
                    title="Trámites Varios"
                    description="Gestioná el pago de certificados, legalizaciones y otros trámites administrativos"
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

                        <div className="max-w-4xl mx-auto">
                            <Card className="border-muted2">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-2xl">
                                        <FileText className="w-7 h-7 text-primary" />
                                        Realizar Pago de Trámite
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {paymentError && (
                                        <Alert variant="destructive">
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertDescription>
                                                {paymentError}
                                            </AlertDescription>
                                        </Alert>
                                    )}

                                    <form className="space-y-4 pt-6">
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
                                            <Label htmlFor="tramite">
                                                Seleccionar Trámite
                                            </Label>
                                            <Select
                                                value={tramiteSeleccionado}
                                                onValueChange={
                                                    setTramiteSeleccionado
                                                }
                                                disabled={loading}
                                            >
                                                <SelectTrigger id="tramite">
                                                    <SelectValue
                                                        placeholder={
                                                            loading
                                                                ? "Cargando trámites..."
                                                                : "Seleccionar tipo de trámite"
                                                        }
                                                    />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {tramitesDisponibles.map(
                                                        (tramite) => (
                                                            <SelectItem
                                                                key={tramite.id}
                                                                value={
                                                                    tramite.id
                                                                }
                                                            >
                                                                {tramite.nombre}{" "}
                                                                - $
                                                                {tramite.precio.toLocaleString(
                                                                    "es-AR",
                                                                )}
                                                            </SelectItem>
                                                        ),
                                                    )}
                                                </SelectContent>
                                            </Select>
                                            {error && (
                                                <p className="text-sm text-destructive">
                                                    {error}
                                                </p>
                                            )}
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>

                            {tramiteSeleccionado && (
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
                                                <p className="text-sm mt-3 text-muted-foreground">
                                                    *El pago se registra al{" "}
                                                    {tipoDocumento === "dni"
                                                        ? "DNI"
                                                        : "legajo"}{" "}
                                                    que ingresaste anteriormente
                                                </p>
                                                <p className="text-sm text-muted-foreground mt-2">
                                                    {tramiteActual?.nombre}
                                                </p>
                                            </div>
                                            <Button
                                                size="lg"
                                                className="w-full sm:w-auto"
                                                onClick={handlePago}
                                                disabled={
                                                    isProcessing ||
                                                    !email.trim() ||
                                                    !dni.trim() ||
                                                    !tramiteSeleccionado
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

export default TramitesVarios;
