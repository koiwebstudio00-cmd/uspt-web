import Footer from "@/components/Footer";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
    CheckCircle2,
    Mail,
    User,
    CreditCard,
    Hash,
    Calendar,
    ArrowLeft,
    AlertCircle,
    Loader2,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useOrderDetails, type OrderDetails } from "@/hooks/use-order-details";

const getItemTypeLabel = (order: OrderDetails) => {
    if (order.course_id) return "Curso";
    if (!order.service_id && !order.course_id && order.service_name) {
        return "Extensión";
    }
    if (order.service_id) return "Servicio";
    return "Servicio";
};

const PagoExitoso = () => {
    const [searchParams] = useSearchParams();
    const externalReference = searchParams.get("external_reference");

    const { order, loading, error } = useOrderDetails(externalReference);
    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                <HeroPageComponent
                    title="Pago Exitoso"
                    description="Tu pago ha sido procesado correctamente"
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
                            {loading && (
                                <Card className="border-muted2">
                                    <CardContent className="pt-6">
                                        <div className="flex flex-col items-center justify-center py-12 space-y-4">
                                            <Loader2 className="w-12 h-12 text-primary animate-spin" />
                                            <p className="text-muted-foreground">
                                                Cargando detalles de tu pago...
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            )}

                            {error && (
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}

                            {!loading && !error && order && (
                                <>
                                    {/* Success Message */}
                                    <Card className="border-green-500 bg-green-50">
                                        <CardContent className="pt-6">
                                            <div className="flex flex-col items-center text-center space-y-4">
                                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                                                    <CheckCircle2 className="w-10 h-10 text-white" />
                                                </div>
                                                <div>
                                                    <h2 className="text-2xl font-heading font-bold text-green-700 mb-2">
                                                        ¡Pago Confirmado!
                                                    </h2>
                                                    <p className="text-green-600">
                                                        Tu pago ha sido
                                                        procesado exitosamente.
                                                        Recibirás un email de
                                                        confirmación en{" "}
                                                        <strong>
                                                            {order.email}
                                                        </strong>
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Order Details */}
                                    <Card className="border-muted2">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">
                                                Detalles de la Compra
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-6">
                                            {/* Service Info */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <p className="text-sm text-muted-foreground">
                                                        {getItemTypeLabel(
                                                            order,
                                                        )}
                                                    </p>
                                                    <p className="text-lg font-semibold">
                                                        {order.service_name ||
                                                            order.service
                                                                ?.nombre ||
                                                            order.course
                                                                ?.displayName ||
                                                            order.course
                                                                ?.fullname ||
                                                            "N/A"}
                                                    </p>
                                                </div>

                                                <div className="space-y-2">
                                                    <p className="text-sm text-muted-foreground">
                                                        Cantidad
                                                    </p>
                                                    <p className="text-lg font-semibold">
                                                        {order.cantidad}{" "}
                                                        {order.cantidad === 1
                                                            ? "unidad"
                                                            : "unidades"}
                                                    </p>
                                                </div>

                                                <div className="space-y-2">
                                                    <p className="text-sm text-muted-foreground">
                                                        Precio Unitario
                                                    </p>
                                                    <p className="text-lg font-semibold">
                                                        $
                                                        {(
                                                            order.service_price ||
                                                            0
                                                        ).toLocaleString(
                                                            "es-AR",
                                                        )}
                                                    </p>
                                                </div>

                                                <div className="space-y-2">
                                                    <p className="text-sm text-muted-foreground">
                                                        Total Pagado
                                                    </p>
                                                    <p className="text-2xl font-bold text-primary">
                                                        $
                                                        {(
                                                            order.service_total_paid ??
                                                            order.total
                                                        ).toLocaleString(
                                                            "es-AR",
                                                        )}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="border-t pt-6 space-y-4">
                                                <h3 className="font-heading font-semibold text-lg">
                                                    Información del Comprador
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="flex items-center gap-3">
                                                        <User className="w-5 h-5 text-muted-foreground" />
                                                        <div>
                                                            <p className="text-sm text-muted-foreground">
                                                                Nombre
                                                            </p>
                                                            <p className="font-medium">
                                                                {order.nombre ||
                                                                    "N/A"}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {order.dni && (
                                                        <div className="flex items-center gap-3">
                                                            <Hash className="w-5 h-5 text-muted-foreground" />
                                                            <div>
                                                                <p className="text-sm text-muted-foreground">
                                                                    DNI
                                                                </p>
                                                                <p className="font-medium">
                                                                    {order.dni ||
                                                                        "N/A"}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                    {order.legajo && (
                                                        <div className="flex items-center gap-3">
                                                            <Hash className="w-5 h-5 text-muted-foreground" />
                                                            <div>
                                                                <p className="text-sm text-muted-foreground">
                                                                    Legajo
                                                                </p>
                                                                <p className="font-medium">
                                                                    {order.legajo ||
                                                                        "N/A"}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="flex items-center gap-3">
                                                        <Mail className="w-5 h-5 text-muted-foreground" />
                                                        <div>
                                                            <p className="text-sm text-muted-foreground">
                                                                Email
                                                            </p>
                                                            <p className="font-medium">
                                                                {order.email ||
                                                                    "N/A"}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t pt-6 space-y-4">
                                                <h3 className="font-heading font-semibold text-lg">
                                                    Información de Pago
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="flex items-center gap-3">
                                                        <Hash className="w-5 h-5 text-muted-foreground" />
                                                        <div>
                                                            <p className="text-sm text-muted-foreground">
                                                                ID de Orden
                                                            </p>
                                                            <p className="font-mono text-sm">
                                                                {order.id}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <Hash className="w-5 h-5 text-muted-foreground" />
                                                        <div>
                                                            <p className="text-sm text-muted-foreground">
                                                                ID de Pago
                                                            </p>
                                                            <p className="font-mono text-sm">
                                                                {
                                                                    order.payment_id
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-3">
                                                        <Calendar className="w-5 h-5 text-muted-foreground" />
                                                        <div>
                                                            <p className="text-sm text-muted-foreground">
                                                                Estado
                                                            </p>
                                                            <p className="font-medium">
                                                                {order.status}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {order.process_date && (
                                                        <div className="flex items-center gap-3">
                                                            <Calendar className="w-5 h-5 text-muted-foreground" />
                                                            <div>
                                                                <p className="text-sm text-muted-foreground">
                                                                    Fecha de
                                                                    Procesamiento
                                                                </p>
                                                                <p className="font-medium">
                                                                    {new Date(
                                                                        order.process_date,
                                                                    ).toLocaleDateString(
                                                                        "es-AR",
                                                                    )}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    {/* Actions */}
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Button asChild size="lg">
                                            <Link to="/">Volver al Inicio</Link>
                                        </Button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default PagoExitoso;
