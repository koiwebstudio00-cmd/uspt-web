import React, { useState } from "react";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import {
    Calendar,
    Clock,
    User,
    Mail,
    BookOpen,
    FileText,
    MapPin,
    Send,
    CheckCircle,
} from "lucide-react";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";

const Turnos = () => {
    const [formData, setFormData] = useState({
        legajo: "",
        nombreCompleto: "",
        correoInstitucional: "",
        carrera: "",
        tramite: "",
        descripcion: "",
        sede: "",
        fechaHora: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const heroRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
    const formRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });

    const breadcrumbItems = [{ label: "Alumnos" }, { label: "Turnos" }];

    const carreras = [
        "Arquitectura",
        "Ingeniería Civil",
        "Ingeniería en Sistemas",
        "Licenciatura en Administración",
        "Licenciatura en Psicología",
        "Licenciatura en Enfermería",
        "Tecnicatura en Diseño Gráfico",
        "Tecnicatura en Turismo",
        "Profesorado en Educación Física",
        "Abogacía",
    ];

    const tramites = [
        "Certificado de Alumno Regular",
        "Certificado Analítico",
        "Constancia de Título en Trámite",
        "Solicitud de Equivalencias",
        "Cambio de Carrera",
        "Solicitud de Beca",
        "Reclamo de Notas",
        "Consulta Académica",
        "Trámite de Graduación",
        "Otros",
    ];

    const sedes = [
        "Campus Central - San Miguel de Tucumán",
        "Sede Yerba Buena",
        "Centro de Salud - Av. Independencia",
        "Instituto Preuniversitario",
        "Sede Virtual (Online)",
    ];

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        console.log("Turno solicitado:", formData);
        setIsSubmitted(true);

        // Resetear formulario después de 3 segundos
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                legajo: "",
                nombreCompleto: "",
                correoInstitucional: "",
                carrera: "",
                tramite: "",
                descripcion: "",
                sede: "",
                fechaHora: "",
            });
        }, 3000);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-background">
                <Navbar1 />
                <main className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-md mx-auto text-center">
                            <Card className="border-green-200 bg-green-50">
                                <CardContent className="p-8">
                                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                                    <h2 className="text-2xl font-bold text-green-800 mb-2">
                                        ¡Turno Solicitado!
                                    </h2>
                                    <p className="text-green-700 mb-4">
                                        Tu solicitud de turno ha sido enviada
                                        correctamente. Recibirás una
                                        confirmación en tu correo institucional.
                                    </p>
                                    <p className="text-sm text-green-600">
                                        Número de referencia: #
                                        {Math.random()
                                            .toString(36)
                                            .substr(2, 9)
                                            .toUpperCase()}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}
                <HeroPageComponent
                    imageUrl="/images/IMG_4688.webp"
                    title="Solicitar Turno"
                    description="Solicitá tu turno para realizar trámites
                                administrativos y académicos. Completá el
                                formulario y te confirmaremos la disponibilidad"
                    minHeight="450px"
                />
                <div className="container pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Formulario de Turnos */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div
                                ref={formRef.elementRef}
                                className={cn(
                                    "animate-on-scroll",
                                    formRef.isIntersecting
                                        ? "animate-fade-in-up"
                                        : ""
                                )}
                            >
                                <Card className="border-muted2 shadow-lg">
                                    <CardHeader className="bg-muted/30">
                                        <CardTitle className="font-heading text-primary flex items-center gap-2 text-2xl">
                                            <Clock className="w-6 h-6" />
                                            Formulario de Solicitud de Turno
                                        </CardTitle>
                                        <p className="text-muted-foreground font-body">
                                            Completá todos los campos
                                            obligatorios (*) para procesar tu
                                            solicitud
                                        </p>
                                    </CardHeader>
                                    <CardContent className="p-8">
                                        <form
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                        >
                                            {/* Información Personal */}
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-semibold text-primary border-b border-muted2 pb-2">
                                                    Información Personal
                                                </h3>

                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                                                            <User className="w-4 h-4" />
                                                            Legajo *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="legajo"
                                                            value={
                                                                formData.legajo
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                            className="w-full px-4 py-3 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                                            placeholder="Ej: 12345"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                                                            <User className="w-4 h-4" />
                                                            Nombre Completo *
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="nombreCompleto"
                                                            value={
                                                                formData.nombreCompleto
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                            className="w-full px-4 py-3 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                                            placeholder="Apellido, Nombre"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="text-sm font-medium mb-2 flex items-center gap-2">
                                                        <Mail className="w-4 h-4" />
                                                        Correo Institucional *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="correoInstitucional"
                                                        value={
                                                            formData.correoInstitucional
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        required
                                                        className="w-full px-4 py-3 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                                        placeholder="nombre.apellido@uspt.edu.ar"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="text-sm font-medium mb-2 flex items-center gap-2">
                                                        <BookOpen className="w-4 h-4" />
                                                        Carrera *
                                                    </label>
                                                    <select
                                                        name="carrera"
                                                        value={formData.carrera}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        required
                                                        className="w-full px-4 py-3 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                                    >
                                                        <option value="">
                                                            Seleccionar carrera
                                                        </option>
                                                        {carreras.map(
                                                            (
                                                                carrera,
                                                                index
                                                            ) => (
                                                                <option
                                                                    key={index}
                                                                    value={
                                                                        carrera
                                                                    }
                                                                >
                                                                    {carrera}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Información del Trámite */}
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-semibold text-primary border-b border-muted2 pb-2">
                                                    Información del Trámite
                                                </h3>

                                                <div>
                                                    <label className="text-sm font-medium mb-2 flex items-center gap-2">
                                                        <FileText className="w-4 h-4" />
                                                        Tipo de Trámite *
                                                    </label>
                                                    <select
                                                        name="tramite"
                                                        value={formData.tramite}
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        required
                                                        className="w-full px-4 py-3 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                                    >
                                                        <option value="">
                                                            Seleccionar trámite
                                                        </option>
                                                        {tramites.map(
                                                            (
                                                                tramite,
                                                                index
                                                            ) => (
                                                                <option
                                                                    key={index}
                                                                    value={
                                                                        tramite
                                                                    }
                                                                >
                                                                    {tramite}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-medium mb-2">
                                                        Descripción del Trámite
                                                        *
                                                    </label>
                                                    <textarea
                                                        name="descripcion"
                                                        value={
                                                            formData.descripcion
                                                        }
                                                        onChange={
                                                            handleInputChange
                                                        }
                                                        required
                                                        rows={4}
                                                        className="w-full px-4 py-3 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                                        placeholder="Describe detalladamente el trámite que necesitás realizar, documentación requerida, etc."
                                                    />
                                                </div>
                                            </div>

                                            {/* Información de la Cita */}
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-semibold text-primary border-b border-muted2 pb-2">
                                                    Información de la Cita
                                                </h3>

                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                                                            <MapPin className="w-4 h-4" />
                                                            Sede *
                                                        </label>
                                                        <select
                                                            name="sede"
                                                            value={
                                                                formData.sede
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                            className="w-full px-4 py-3 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                                        >
                                                            <option value="">
                                                                Seleccionar sede
                                                            </option>
                                                            {sedes.map(
                                                                (
                                                                    sede,
                                                                    index
                                                                ) => (
                                                                    <option
                                                                        key={
                                                                            index
                                                                        }
                                                                        value={
                                                                            sede
                                                                        }
                                                                    >
                                                                        {sede}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label className="text-sm font-medium mb-2 flex items-center gap-2">
                                                            <Calendar className="w-4 h-4" />
                                                            Fecha y Hora
                                                            Preferida *
                                                        </label>
                                                        <input
                                                            type="datetime-local"
                                                            name="fechaHora"
                                                            value={
                                                                formData.fechaHora
                                                            }
                                                            onChange={
                                                                handleInputChange
                                                            }
                                                            required
                                                            min={new Date()
                                                                .toISOString()
                                                                .slice(0, 16)}
                                                            className="w-full px-4 py-3 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Información Importante */}
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                                <h4 className="font-semibold text-blue-800 mb-2">
                                                    Información Importante:
                                                </h4>
                                                <ul className="text-sm text-blue-700 space-y-1">
                                                    <li>
                                                        • Los turnos se
                                                        confirman por correo
                                                        electrónico dentro de
                                                        las 24-48 horas.
                                                    </li>
                                                    <li>
                                                        • Recordá traer tu DNI y
                                                        documentación
                                                        relacionada al trámite.
                                                    </li>
                                                    <li>
                                                        • Si necesitás cancelar
                                                        o reprogramar, hacelo
                                                        con al menos 24 horas de
                                                        anticipación.
                                                    </li>
                                                    <li>
                                                        • Los horarios de
                                                        atención son de lunes a
                                                        viernes de 8:00 a 18:00
                                                        hs.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="flex justify-center pt-4">
                                                <UniversityButton
                                                    type="submit"
                                                    variant="primary"
                                                    size="lg"
                                                    className="px-8"
                                                >
                                                    <Send className="w-5 h-5 mr-2" />
                                                    Solicitar Turno
                                                </UniversityButton>
                                            </div>
                                        </form>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Turnos;
