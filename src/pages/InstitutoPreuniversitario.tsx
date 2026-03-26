// Se elimina Header para evitar import no usado
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { UniversityButton } from "@/components/ui/university-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import {
    GraduationCap,
    BookOpen,
    Users,
    Award,
    Heart,
    Target,
    Star,
    Calendar,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";
import { Navbar1 } from "@/components/Navbar";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";

const InstitutoPreuniversitario = () => {
    const heroRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
    const orientacionesRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });
    const valoresRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });

    const breadcrumbItems = [{ label: "Instituto Preuniversitario" }];

    const orientaciones = [
        {
            name: "Bachiller con Orientación en Informática – Especialización en Desarrollo de Software",
            description:
                "Orientación especializada en Tecnología y Desarrollo de Software, preparando estudiantes para el mundo digital y la programación.",
            materias: [
                "Programación",
                "Base de Datos",
                "Redes",
                "Sistemas Operativos",
                "Desarrollo Web",
            ],
            perfil: "Estudiantes interesados en carreras tecnológicas, programación y sistemas informáticos.",
        },
        {
            name: "Bachiller con Orientación en Ciencias Naturales – Especialización en Preservación del Medio Ambiente",
            description:
                "Orientación en Ciencias Naturales y Medio Ambiente, con sólida base científica y enfoque en la preservación ambiental.",
            materias: [
                "Biología",
                "Química",
                "Física",
                "Ecología",
                "Gestión Ambiental",
            ],
            perfil: "Estudiantes orientados a carreras científicas, ambientales y de preservación natural.",
        },
        {
            name: "Bachiller con Orientación en Turismo – Especialización en Turismo Cultural",
            description:
                "Orientación en Turismo y Turismo Cultural, formando profesionales en gestión turística y patrimonio cultural.",
            materias: [
                "Historia Cultural",
                "Geografía Turística",
                "Gestión Hotelera",
                "Idiomas",
                "Patrimonio",
            ],
            perfil: "Estudiantes interesados en turismo, hotelería, gestión cultural y servicios.",
        },
    ];

    const valores = [
        {
            icon: Heart,
            title: "Autodisciplina",
            description:
                "Formación en la autogestión de los aprendizajes y convivencia responsable",
        },
        {
            icon: Target,
            title: "Trabajo por Proyectos",
            description:
                "Aprendizajes activos y colaborativos con situaciones problemáticas desafiantes",
        },
        {
            icon: Users,
            title: "Comunidad de Aprendizaje",
            description:
                "Colaboración entre estudiantes, docentes y familias con sentido de pertenencia",
        },
        {
            icon: Star,
            title: "Formación Docente Permanente",
            description:
                "Equipo comprometido en planificación, enseñanza y evaluación colegiada",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main className="">
                {/* Hero Section */}
                <HeroPageComponent
                    imageUrl="/images/IMG_4688.webp"
                    title="Instituto Preuniversitario San Pablo T"
                    description=""
                    minHeight="450px"
                />
                <div className="container pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Historia y Misión */}
                <section id="mision-vision" className="py-16 bg-muted/20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8 items-start">
                                {/* Imagen a la izquierda */}
                                <div className="relative h-full min-h-[400px] md:min-h-[500px] overflow-hidden">
                                    <img
                                        src="/images/institucional.jpg"
                                        alt="Instituto Preuniversitario"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                        <h3 className="text-2xl font-bold font-heading mb-2">
                                            Instituto Preuniversitario San Pablo T
                                        </h3>
                                        <p className="text-white/90 text-sm">
                                            Formando estudiantes librepensantes
                                            y ciudadanos del mundo
                                        </p>
                                    </div>
                                </div>

                                {/* Cards de Misión y Objetivos a la derecha */}
                                <div className="space-y-6">
                                    <div className="bg-primary/10 p-8 border-l-4 border-primary">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Award className="w-6 h-6 text-primary flex-shrink-0" />
                                            <h2 className="text-2xl font-bold font-heading text-foreground">
                                                Nuestra Misión
                                            </h2>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed font-body">
                                            Creamos un clima de convivencia que
                                            garantiza la libertad, el respeto y
                                            la dignidad, preservando a sus
                                            integrantes de cualquier trato
                                            discriminatorio. Destacamos la
                                            autodisciplina, jornada extendida de
                                            8 horas, enseñanza intensiva de
                                            idiomas y participación en talleres
                                            creativos.
                                        </p>
                                    </div>

                                    <div className="bg-primary p-8 text-white border-l-4 border-primary-foreground">
                                        <div className="flex items-center gap-3 mb-4">
                                            <GraduationCap className="w-6 h-6 text-white flex-shrink-0" />
                                            <h2 className="text-2xl font-bold font-heading">
                                                Presentación Institucional
                                            </h2>
                                        </div>
                                        <p className="text-white/90 leading-relaxed font-body">
                                            Fundado en 2020 por la Universidad
                                            San Pablo T, somos la primera
                                            escuela privada de gestión
                                            preuniversitaria en Tucumán. Nuestro
                                            enfoque se basa en el aprendizaje
                                            activo y colaborativo por proyectos,
                                            compartiendo la tarea educativa con
                                            las familias para consolidar el
                                            camino a la vida universitaria.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Autoridad */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold font-heading text-primary">
                                        Autoridad
                                    </h2>
                                    <p className="text-muted-foreground leading-relaxed font-body">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>
                                <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
                                    <img
                                        src="/images/autoridad-ipre.png"
                                        alt="Autoridad IPRE"
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Estructura Académica */}
                <section id="orientaciones" className="py-20 bg-primary/10">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-semibold font-heading text-foreground mb-4">
                                Estructura Académica
                            </h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
                                Bachillerato de 6 años dividido en Ciclo Básico
                                común (3 años) y Ciclo Orientado (3 años)
                            </p>
                        </div>

                        {/* Ciclo Básico */}
                        <div className="mb-12">
                            <Card className="border-muted2">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-heading text-foreground flex items-center gap-3">
                                        <BookOpen className="w-6 h-6" />
                                        Ciclo Básico (3 años)
                                    </CardTitle>
                                    <p className="text-muted-foreground">
                                        Formación general común a todas las
                                        orientaciones que permite a los
                                        estudiantes definir su orientación a lo
                                        largo de su trayectoria.
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-3">
                                                Espacios Curriculares:
                                            </h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {[
                                                    "Matemática",
                                                    "Lengua y Literatura",
                                                    "Inglés",
                                                    "Portugués",
                                                    "Historia",
                                                    "Construcción de Ciudadanía",
                                                    "Geografía",
                                                    "Ciencias Biológicas",
                                                    "Física",
                                                    "Química",
                                                    "Música",
                                                    "Artes Visuales",
                                                    "Educación Física",
                                                ].map((materia, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                                                    >
                                                        {materia}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-3">
                                                Talleres Especiales:
                                            </h4>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li>
                                                    • Intensificación en idiomas
                                                    extranjeros
                                                </li>
                                                <li>
                                                    • Arte y medios
                                                    audiovisuales
                                                </li>
                                                <li>
                                                    • Deporte y actividades
                                                    físicas
                                                </li>
                                                <li>• Tecnologías aplicadas</li>
                                                <li>
                                                    • Ceremonial y Protocolo
                                                </li>
                                                <li>
                                                    • Campamentos y viajes de
                                                    estudio
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Orientaciones */}
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-semibold font-heading text-primary mb-4">
                                Ciclo Orientado (3 años)
                            </h3>
                            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
                                Tres orientaciones especializadas para
                                profundizar en áreas específicas del
                                conocimiento
                            </p>
                        </div>

                        <div
                            ref={orientacionesRef.elementRef}
                            className={cn(
                                "grid md:grid-cols-2 gap-6 animate-on-scroll",
                                orientacionesRef.isIntersecting
                                    ? "animate-fade-in-up"
                                    : "",
                            )}
                        >
                            {orientaciones.map((orientacion, index) => (
                                <Card
                                    key={index}
                                    className="border-muted2 hover:shadow-lg transition-all duration-300"
                                >
                                    <CardHeader>
                                        <CardTitle className="text-lg font-heading text-foreground mb-2">
                                            {orientacion.name}
                                        </CardTitle>
                                        <p className="text-muted-foreground font-body text-sm">
                                            {orientacion.description}
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-foreground mb-2 text-sm">
                                                Materias Destacadas:
                                            </h4>
                                            <div className="flex flex-wrap gap-1">
                                                {orientacion.materias.map(
                                                    (materia, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-2 py-1 bg-muted/20 text-foreground rounded text-xs"
                                                        >
                                                            {materia}
                                                        </span>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <h4 className="font-semibold text-foreground mb-1 text-sm">
                                                Perfil del Estudiante:
                                            </h4>
                                            <p className="text-muted-foreground font-body text-sm">
                                                {orientacion.perfil}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visión y Valores */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-semibold font-heading text-foreground mb-12">
                                Visión y Valores Institucionales
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8 items-start text-left">
                                {/* Card Visión */}
                                <div className="bg-primary/10 p-8 border-l-4 border-primary h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Target className="w-6 h-6 text-primary flex-shrink-0" />
                                        <h3 className="text-2xl font-bold font-heading text-foreground">
                                            Nuestra Visión
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed font-body">
                                        Avanzamos en la concepción de un Polo
                                        Educativo donde las acciones pedagógicas
                                        acompañan a las personas desde temprana
                                        edad hasta la formación superior,
                                        colaborando en la construcción de
                                        ciudadanos que influyan positivamente en
                                        su medio social, cultural y económico a
                                        través de un enfoque multidisciplinario.
                                    </p>
                                </div>

                                {/* Card Valores */}
                                <div className="bg-primary p-8 text-white border-l-4 border-primary-foreground h-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Award className="w-6 h-6 text-white flex-shrink-0" />
                                        <h3 className="text-2xl font-bold font-heading">
                                            Nuestros Valores
                                        </h3>
                                    </div>
                                    <p className="text-white/90 leading-relaxed font-body">
                                        Sostenemos un trabajo profesional
                                        docente que acompaña la autogestión de
                                        los aprendizajes y una convivencia
                                        basada en la autodisciplina y el respeto
                                        mutuo. Nuestra comunidad educativa se
                                        consolida con un profundo sentido de
                                        pertenencia y compromiso con la
                                        excelencia.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            ref={valoresRef.elementRef}
                            className={cn(
                                "grid md:grid-cols-2  gap-6 animate-on-scroll",
                                valoresRef.isIntersecting
                                    ? "animate-fade-in-up"
                                    : "",
                            )}
                        >
                            {valores.map((valor, index) => (
                                <Card
                                    key={index}
                                    className="border-muted2 text-center hover:shadow-md transition-shadow"
                                >
                                    <CardHeader className="pb-4">
                                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-3">
                                            <valor.icon className="w-6 h-6" />
                                        </div>
                                        <CardTitle className="text-lg font-heading text-foreground">
                                            {valor.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground font-body text-sm">
                                            {valor.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Vida Estudiantil */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-semibold font-heading text-foreground mb-6">
                                    Vida Estudiantil
                                </h3>
                                <div className="space-y-4">
                                    <Card className="border-muted2">
                                        <CardContent className="p-4">
                                            <h4 className="font-semibold text-foreground mb-2">
                                                Talleres de Arte y Medios
                                            </h4>
                                            <p className="text-muted-foreground font-body text-sm">
                                                Talleres de medios
                                                audiovisuales, arte visual y
                                                expresión creativa.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-muted2">
                                        <CardContent className="p-4">
                                            <h4 className="font-semibold text-foreground mb-2">
                                                Idiomas Intensivos
                                            </h4>
                                            <p className="text-muted-foreground font-body text-sm">
                                                Enseñanza intensiva de inglés y
                                                portugués con certificaciones
                                                internacionales.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-muted2">
                                        <CardContent className="p-4">
                                            <h4 className="font-semibold text-foreground mb-2">
                                                Campamentos Educativos
                                            </h4>
                                            <p className="text-muted-foreground font-body text-sm">
                                                Campamentos, viajes de estudio y
                                                experiencias formativas al aire
                                                libre.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-muted2">
                                        <CardContent className="p-4">
                                            <h4 className="font-semibold text-foreground mb-2">
                                                Tutorías y Acompañamiento
                                            </h4>
                                            <p className="text-muted-foreground font-body text-sm">
                                                Acompañamiento permanente de las
                                                trayectorias escolares y
                                                orientación vocacional.
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card className="border-muted2">
                                        <CardContent className="p-4">
                                            <h4 className="font-semibold text-foreground mb-2">
                                                Comedor Universitario
                                            </h4>
                                            <p className="text-muted-foreground font-body text-sm">
                                                Almuerzo opcional en el Comedor
                                                Universitario del campus.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold font-heading text-foreground mb-6">
                                    Información de Contacto
                                </h3>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-foreground" />
                                        <div>
                                            <p className="font-semibold text-foreground">
                                                Ubicación
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Campus San Pablo - Sede del
                                                Nivel Secundario
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-foreground" />
                                        <div>
                                            <p className="font-semibold text-foreground">
                                                Teléfonos
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                +54 9 381 495-2972 <br />
                                                +54 9 381 680-2457
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-foreground" />
                                        <div>
                                            <p className="font-semibold text-foreground">
                                                Email
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                preuniversitario@uspt.edu.ar
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <Calendar className="w-5 h-5 text-foreground" />
                                        <div>
                                            <p className="font-semibold">
                                                Horarios
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Lunes a Viernes: 8:00 - 16:00
                                                (Jornada Extendida)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <CtaPage
                    title="Formá parte del primer Instituto Preuniversitario de
                            gestión privada"
                    description="Descubrí una educación secundaria innovadora con
                            jornada extendida, idiomas intensivos y formación
                            por proyectos que te prepara para la universidad"
                    url="/contacto"
                />
            </main>

            <Footer />
        </div>
    );
};

export default InstitutoPreuniversitario;
