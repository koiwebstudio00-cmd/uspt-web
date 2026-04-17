import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft, FileText, AlertCircle } from "lucide-react";
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
import {
    getServiceTypeById,
    getServiceTypeBySlug,
    getServicesByType,
} from "@/lib/data/services";
import type { DbId, Service, ServiceTypeRecord } from "@/lib/types/database";

interface ServiceTypePaymentTemplateProps {
    typeId?: DbId;
    typeSlug?: string;
    heroTitle?: string;
    heroDescription?: string;
    formTitle?: string;
}

export default function ServiceTypePaymentTemplate({
    typeId,
    typeSlug,
    heroTitle,
    heroDescription,
    formTitle,
}: ServiceTypePaymentTemplateProps) {
    const [tipoDocumento, setTipoDocumento] = useState<string>("dni");
    const [dni, setDni] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [servicioSeleccionado, setServicioSeleccionado] = useState<string>("");
    const [cantidad, setCantidad] = useState<string>("1");
    const [serviceType, setServiceType] = useState<ServiceTypeRecord | null>(null);
    const [services, setServices] = useState<Service[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentError, setPaymentError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            try {
                setLoading(true);
                setError(null);

                let resolvedType: ServiceTypeRecord | null = null;

                if (typeId !== undefined && typeId !== null) {
                    resolvedType = await getServiceTypeById(typeId);
                } else if (typeSlug) {
                    resolvedType = await getServiceTypeBySlug(typeSlug);
                }

                if (!resolvedType) {
                    throw new Error("No se encontró el tipo de servicio solicitado");
                }

                const typeServices = await getServicesByType(resolvedType.id);

                if (isMounted) {
                    setServiceType(resolvedType);
                    setServices(typeServices);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar servicios",
                    );
                    setServiceType(null);
                    setServices([]);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [typeId, typeSlug]);

    const servicioActual = services.find((service) => service.id === servicioSeleccionado);
    const cantidadNum = Math.max(1, parseInt(cantidad) || 1);
    const importe = (servicioActual?.precio ?? 0) * cantidadNum;

    const handlePago = async () => {
        setPaymentError(null);

        if (!email.trim()) {
            setPaymentError("Por favor ingresá tu email");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setPaymentError("Por favor ingresá un email válido");
            return;
        }

        if (!dni.trim()) {
            setPaymentError(
                `Por favor ingresá tu ${tipoDocumento === "dni" ? "DNI" : "Legajo"}`,
            );
            return;
        }

        if (!servicioSeleccionado) {
            setPaymentError("Por favor seleccioná un servicio");
            return;
        }

        const cantidadToPay = parseInt(cantidad);
        if (!cantidadToPay || cantidadToPay < 1) {
            setPaymentError("Por favor ingresá una cantidad válida (mínimo 1)");
            return;
        }

        setIsProcessing(true);

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            if (!apiUrl) {
                throw new Error("URL de API no configurada");
            }

            const requestBody: {
                service_id: string;
                email: string;
                cantidad: number;
                dni?: string;
                legajo?: string;
            } = {
                service_id: servicioSeleccionado,
                email: email.trim(),
                cantidad: cantidadToPay,
            };

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
                    errorData.message || `Error del servidor: ${response.status}`,
                );
            }

            const data = await response.json();

            if (data.success && data.init_point) {
                window.location.href = data.init_point;
            } else {
                throw new Error(data.message || "No se recibió URL de pago válida");
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

    const resolvedHeroTitle =
        heroTitle ?? (serviceType ? serviceType.nombre : "Pago de Servicios");
    const resolvedHeroDescription =
        heroDescription ??
        "Seleccioná el servicio y completá tus datos para realizar el pago online.";
    const resolvedFormTitle = formTitle ?? "Realizar Pago de Servicio";

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                <HeroPageComponent
                    title={resolvedHeroTitle}
                    description={resolvedHeroDescription}
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
                                        {resolvedFormTitle}
                                    </CardTitle>
                                    {serviceType && (
                                        <p className="text-sm text-muted-foreground">
                                            Tipo: {serviceType.nombre}
                                        </p>
                                    )}
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

                                    {error && (
                                        <Alert variant="destructive">
                                            <AlertCircle className="h-4 w-4" />
                                            <AlertDescription>{error}</AlertDescription>
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
                                                    <SelectItem value="dni">DNI</SelectItem>
                                                    <SelectItem value="legajo">
                                                        Legajo
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="dni">
                                                {tipoDocumento === "dni" ? "DNI" : "Legajo"}
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
                                                onChange={(e) => setDni(e.target.value)}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="Ingresá tu email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="servicio">
                                                Seleccionar Servicio
                                            </Label>
                                            <Select
                                                value={servicioSeleccionado}
                                                onValueChange={setServicioSeleccionado}
                                                disabled={loading}
                                            >
                                                <SelectTrigger id="servicio">
                                                    <SelectValue
                                                        placeholder={
                                                            loading
                                                                ? "Cargando servicios..."
                                                                : "Seleccionar servicio"
                                                        }
                                                    />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {services.map((service) => (
                                                        <SelectItem
                                                            key={service.id}
                                                            value={service.id}
                                                        >
                                                            {service.nombre} - ${" "}
                                                            {service.precio.toLocaleString(
                                                                "es-AR",
                                                            )}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="cantidad">
                                                Cantidad
                                            </Label>
                                            <Input
                                                id="cantidad"
                                                type="number"
                                                min={1}
                                                placeholder="Ingresá la cantidad"
                                                value={cantidad}
                                                onChange={(e) =>
                                                    setCantidad(e.target.value)
                                                }
                                            />
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>

                            {servicioSeleccionado && (
                                <Card className="border-primary bg-primary/5 mt-8">
                                    <CardContent className="pt-6">
                                        <div className="text-center space-y-4">
                                            <div>
                                                <p className="text-sm text-muted-foreground mb-2">
                                                    Importe a pagar
                                                </p>
                                                <p className="text-4xl font-bold text-primary">
                                                    ${importe.toLocaleString("es-AR")}
                                                </p>
                                                <p className="text-sm mt-3 text-muted-foreground">
                                                    *El pago se registra al{" "}
                                                    {tipoDocumento === "dni"
                                                        ? "DNI"
                                                        : "legajo"}{" "}
                                                    que ingresaste anteriormente
                                                </p>
                                                <p className="text-sm text-muted-foreground mt-2">
                                                    {servicioActual?.nombre}
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
                                                    !servicioSeleccionado ||
                                                    !cantidad.trim()
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
}
