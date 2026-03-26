import { useState } from "react";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BookOpen,
    Monitor,
    FileText,
    CreditCard,
    Users,
    Calendar,
    MapPin,
    Phone,
    Mail,
    ExternalLink,
    GraduationCap,
    Heart,
    Shield,
    CheckCircle,
    AlertCircle,
} from "lucide-react";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";

const Alumnos = () => {
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

    const breadcrumbItems = [
        { label: "Universidad", href: "/universidad" },
        { label: "Alumnos" },
    ];

    const servicios = [
        {
            icon: GraduationCap,
            title: "Orientación Académica",
            description:
                "Asesoramiento personalizado para tu trayectoria universitaria",
            items: [
                "Tutorías académicas",
                "Orientación vocacional",
                "Apoyo en materias",
            ],
        },
        {
            icon: Heart,
            title: "Bienestar Estudiantil",
            description: "Servicios para tu bienestar físico y emocional",
            items: [
                "Atención psicológica",
                "Actividades deportivas",
                "Programas de salud",
            ],
        },
        {
            icon: Shield,
            title: "Becas y Ayudas",
            description: "Programas de apoyo económico para estudiantes",
            items: ["Becas de mérito", "Ayudas económicas", "Planes de pago"],
        },
        {
            icon: Users,
            title: "Vida Universitaria",
            description:
                "Actividades y espacios para enriquecer tu experiencia",
            items: [
                "Centro de estudiantes",
                "Eventos culturales",
                "Grupos de estudio",
            ],
        },
        {
            icon: CheckCircle,
            title: "Acompañamiento Integral",
            description: "El CIAA brinda acompañamiento en las siguientes áreas:",
            items: [
                "Inscripciones",
                "Registración y documentación",
                "Equivalencias",
                "Reincorporaciones y cambios",
                "Becas",
                "Constancias",
            ],
        },
    ];

    const accesosRapidos = [
        {
            icon: Monitor,
            title: "Campus Virtual",
            description: "Accedé a tus materias, notas y recursos académicos",
            link: "https://virtual.uspt.edu.ar/",
            color: "bg-blue-500",
        },
        {
            icon: BookOpen,
            title: "Biblioteca Digital",
            description: "Consultá libros, revistas y bases de datos online",
            link: "#",
            color: "bg-green-500",
        },
        {
            icon: FileText,
            title: "Trámites Online",
            description: "Realizá certificados, constancias y otros trámites",
            link: "/pagos/tramites-varios",
            color: "bg-purple-500",
        },
        {
            icon: CreditCard,
            title: "Pagos Online",
            description: "Abonás cuotas y aranceles de forma segura",
            link: "/pagos-online",
            color: "bg-orange-500",
        },
        {
            icon: Calendar,
            title: "Calendario Académico",
            description: "Consultá fechas importantes y cronograma",
            link: "#",
            color: "bg-red-500",
        },
        {
            icon: Users,
            title: "Mesa de Ayuda",
            description: "Soporte técnico y consultas administrativas",
            link: "#",
            color: "bg-indigo-500",
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
                    imageUrl="/images/IMG_4688.webp"
                    title="Portal del Alumno"
                    description="Encontrá todos los servicios, recursos y herramientas que necesitas 
                para tu vida universitaria en USPT"
                    minHeight="450px"
                />
                <div className="container pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>
                {/* Accesos Rápidos */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl mb-4">
                                Accesos Rápidos
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {accesosRapidos.map((acceso, index) => (
                                <a
                                    key={index}
                                    href={acceso.link}
                                    target={
                                        acceso.link.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        acceso.link.startsWith("http")
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="block"
                                >
                                    <Card className="border-muted2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                                        <CardHeader className="pb-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg text-primary flex items-center justify-center">
                                                    <acceso.icon className="w-6 h-6" />
                                                </div>
                                                <div className="flex-1">
                                                    <CardTitle className="text-lg font-heading text-primary flex items-center gap-2">
                                                        {acceso.title}
                                                        <ExternalLink className="w-4 h-4" />
                                                    </CardTitle>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground font-body text-sm">
                                                {acceso.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Servicios al Alumno */}
                <section className="py-20 bg-primary/5">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl mb-4">
                                Servicios al Alumno
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {servicios.map((servicio, index) => (
                                <Card
                                    key={index}
                                    className="border-muted2 hover:shadow-md transition-shadow"
                                >
                                    <CardHeader>
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                                                <servicio.icon className="w-6 h-6" />
                                            </div>
                                            <CardTitle className="text-xl font-heading text-primary">
                                                {servicio.title}
                                            </CardTitle>
                                        </div>
                                        <p className="text-muted-foreground font-body">
                                            {servicio.description}
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {servicio.items.map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                                >
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Información de Contacto */}
                <section id="contacto" className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <h3 className="text-3xl font-bold font-heading text-primary mb-6">
                                    ¿Necesitas Ayuda?
                                </h3>
                                <p className="text-muted-foreground font-body mb-6">
                                    Nuestro equipo está disponible para ayudarte
                                    con cualquier consulta académica o
                                    administrativa.
                                </p>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        <div>
                                            <p className="font-semibold">
                                                Oficina de Alumnos
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Edificio Central - Planta Baja
                                            </p>
                                        </div>
                                    </div>

                                    <a
                                        href="tel:+5493814530630"
                                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                                    >
                                        <Phone className="w-5 h-5 text-primary" />
                                        <div>
                                            <p className="font-semibold">
                                                Teléfono
                                            </p>
                                            <p className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                                +54 9 381 4530 630
                                            </p>
                                        </div>
                                    </a>

                                    <a
                                        href="mailto:alumnos@uspt.edu.ar"
                                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                                    >
                                        <Mail className="w-5 h-5 text-primary" />
                                        <div>
                                            <p className="font-semibold">
                                                Email
                                            </p>
                                            <p className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                                alumnos@uspt.edu.ar
                                            </p>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-primary" />
                                        <div>
                                            <p className="font-semibold">
                                                Horarios de Atención
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Lunes a Viernes: 8:00 - 18:00
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Card className="border-muted2">
                                <CardHeader>
                                    <CardTitle className="font-heading text-primary">
                                        Consulta Rápida
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
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
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isSubmitting}
                                                className="w-full px-3 py-2 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                                placeholder="Tu nombre completo"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isSubmitting}
                                                className="w-full px-3 py-2 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                                placeholder="tu.email@ejemplo.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Consulta
                                            </label>
                                            <textarea
                                                name="consulta"
                                                value={formData.consulta}
                                                onChange={handleInputChange}
                                                required
                                                disabled={isSubmitting}
                                                rows={4}
                                                className="w-full px-3 py-2 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                                                placeholder="Describe tu consulta..."
                                            />
                                        </div>
                                        <UniversityButton
                                            variant="primary"
                                            className="w-full"
                                            type="submit"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting
                                                ? "Enviando..."
                                                : "Enviar Consulta"}
                                        </UniversityButton>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                {/* CTA Section */}
                <CtaPage
                    title="Tu éxito es nuestro compromiso"
                    description="Aprovechá todos los recursos y servicios que tenemos
                            para acompañarte en tu formación profesional"
                    url="/contacto"
                />
            </main>

            <Footer />
        </div>
    );
};

export default Alumnos;
