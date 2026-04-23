import Footer from "@/components/Footer";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useExtensionById } from "@/hooks/use-extension-by-id";

const PagoExtensionCurso = () => {
    const { id } = useParams<{ id: string }>();
    const { extension, loading, error } = useExtensionById(id || "");

    const [nombre, setNombre] = useState<string>("");
    const [dni, setDni] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefono, setTelefono] = useState<string>("");
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentError, setPaymentError] = useState<string | null>(null);

    const handlePago = async () => {
        setPaymentError(null);

        if (!nombre.trim()) {
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

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            setPaymentError("Por favor ingresá un email válido");
            return;
        }

        if (!extension) {
            setPaymentError("Información del curso no disponible");
            return;
        }

        setIsProcessing(true);

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            if (!apiUrl) {
                throw new Error("URL de API no configurada");
            }

            const requestBody = {
                extension_id: extension.id,
                nombre: nombre.trim(),
                dni: dni.trim(),
                email: email.trim(),
                telefono: telefono.trim(),
            };

            const response = await fetch(`${apiUrl}/payment/enroll-extension`, {
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

    if (loading) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar1 />
                <div className="flex-1 flex items-center justify-center">
                    <Loader2 className="w-10 h-10 animate-spin text-primary" />
                </div>
                <Footer />
            </div>
        );
    }

    if (error || !extension) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Navbar1 />
                <div className="flex-1 flex flex-col items-center justify-center p-4">
                    <AlertCircle className="w-12 h-12 text-destructive mb-4" />
                    <h2 className="text-xl font-heading font-bold mb-2">
                        Error al cargar el curso
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        {error || "Curso no encontrado"}
                    </p>
                    <Button asChild>
                        <Link to="/extension-universitaria">Volver a cursos</Link>
                    </Button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                <HeroPageComponent
                    title="Inscripción a Curso de Extensión"
                    description={`Completá tus datos para inscribirte en: ${extension.nombre}`}
                    imageUrl="/images/IMG_4688.webp"
                />

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <Link
                            to={
                                extension.slug
                                    ? `/extension-universitaria/cursos/${extension.slug}`
                                    : "/extension-universitaria"
                            }
                            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Volver a cursos
                        </Link>

                        <div className="max-w-4xl mx-auto">
                            <Card className="border-muted2">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-2xl">
                                        <CheckCircle className="w-7 h-7 text-primary" />
                                        Datos de Inscripción
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

                                    <form className="grid md:grid-cols-2 gap-4 pt-6">
                                        <div className="space-y-2 md:col-span-2">
                                            <Label htmlFor="nombre">
                                                Nombre Completo
                                            </Label>
                                            <Input
                                                id="nombre"
                                                placeholder="Ingresá tu nombre y apellido"
                                                value={nombre}
                                                onChange={(e) =>
                                                    setNombre(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="dni">DNI</Label>
                                            <Input
                                                id="dni"
                                                placeholder="Ingresá tu DNI"
                                                value={dni}
                                                onChange={(e) =>
                                                    setDni(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="telefono">
                                                Teléfono (Opcional)
                                            </Label>
                                            <Input
                                                id="telefono"
                                                placeholder="Ej: 3814556677"
                                                value={telefono}
                                                onChange={(e) =>
                                                    setTelefono(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="space-y-2 md:col-span-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="Ingresá tu email para recibir el comprobante"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                            />
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>

                            <Card className="border-primary bg-primary/5 mt-8">
                                <CardContent className="pt-6">
                                    <div className="text-center space-y-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground mb-2">
                                                Importe a pagar
                                            </p>
                                            <p className="text-4xl font-bold text-primary">
                                                ${" "}
                                                {extension.precio?.toLocaleString(
                                                    "es-AR",
                                                )}
                                            </p>
                                            <p className="text-lg mt-3 text-foreground font-semibold">
                                                {extension.nombre}
                                            </p>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                * Se enviarán los datos de acceso a tu
                                                casilla de correo tras confirmar el pago
                                            </p>
                                        </div>
                                        <Button
                                            size="lg"
                                            className="w-full sm:w-auto"
                                            onClick={handlePago}
                                            disabled={isProcessing}
                                        >
                                            {isProcessing
                                                ? "Procesando pago..."
                                                : "Pagar e Inscribirme"}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PagoExtensionCurso;
