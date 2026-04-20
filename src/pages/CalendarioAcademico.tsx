import React, { useState, useMemo } from "react";
import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { useCalendario } from "@/hooks/use-calendario";
import { useHorarios } from "@/hooks/use-horarios";
import { Badge } from "@/components/ui/badge";
import {
    Calendar,
    Clock,
    FileText,
    Search,
    Download,
    ExternalLink,
    AlertCircle,
    Info,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import ExamenesPage from "@/components/calendario/examenes/Examenes";
import HorariosPage from "@/components/calendario/horarios/Horarios";

const ANIOS = [1, 2, 3, 4, 5];
const MESES = [
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];

const CalendarioAcademico = () => {
    const [activeTab, setActiveTab] = useState("general");

    // State for Class Schedules (No longer needed, handled by HorariosPage)

    // State for Exam Dates
    const [selectedCarreraExamen, setSelectedCarreraExamen] =
        useState<string>("");
    const [selectedMes, setSelectedMes] = useState<string>("Marzo");

    const { calendario, loading: loadingGeneral } = useCalendario();

    const isPdf = calendario?.archivo_url
        ? calendario.archivo_url.split("?")[0].toLowerCase().endsWith(".pdf")
        : false;

    /*
    const {
        data: cursadoData,
        loading: loadingCursado,
        carreras,
        loadingCarreras,
    } = useHorarios({
        carreraId: selectedCarreraCursado,
        tipo: "cursado",
        anio: selectedAnio,
    });
*/
    const { carreras, loadingCarreras } = useHorarios({
        carreraId: "",
        tipo: "cursado",
    });

    const { data: examenesData, loading: loadingExamenes } = useHorarios({
        carreraId: selectedCarreraExamen,
        tipo: "examenes",
        mes: selectedMes,
    });

    // Initialize first career if available
    if (carreras.length > 0 && !selectedCarreraExamen) {
        setSelectedCarreraExamen(carreras[0].id);
    }

    const breadcrumbItems = [
        { label: "Inicio", href: "/" },
        { label: "Alumnos", href: "/alumnos" },
        { label: "Calendario Académico" },
    ];

    const sectionRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.1,
    });

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                <HeroPageComponent
                    title="Calendario Académico"
                    description="Consultá horarios de cursado, fechas de exámenes y cronograma de actividades académicas"
                    imageUrl="/images/IMG_4688.webp"
                    minHeight="400px"
                />

                <div className="container pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                <section className="py-16 bg-white" ref={sectionRef.elementRef}>
                    <div
                        className={cn(
                            "container mx-auto px-4 animate-on-scroll",
                            sectionRef.isIntersecting
                                ? "animate-fade-in-up"
                                : "",
                        )}
                    >
                        <Tabs
                            defaultValue="general"
                            className="w-full"
                            onValueChange={setActiveTab}
                        >
                            <div className="mb-8 sm:mb-12">
                                <TabsList className="grid h-auto w-full max-w-4xl grid-cols-1 gap-1 border border-muted2 bg-muted/50 p-1 sm:mx-auto sm:grid-cols-3">
                                    <TabsTrigger
                                        value="general"
                                        className="w-full px-4 py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
                                    >
                                        <Calendar className="w-4 h-4 mr-2" />
                                        General
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="cursado"
                                        className="w-full px-4 py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
                                    >
                                        <Clock className="w-4 h-4 mr-2" />
                                        Horarios de Cursado
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="examenes"
                                        className="w-full px-4 py-2.5 text-sm data-[state=active]:bg-primary data-[state=active]:text-white"
                                    >
                                        <FileText className="w-4 h-4 mr-2" />
                                        Fechas de Exámenes
                                    </TabsTrigger>
                                </TabsList>
                            </div>

                            {/* --- TAB: GENERAL --- */}
                            <TabsContent
                                value="general"
                                className="animate-in fade-in duration-500"
                            >
                                <div className="max-w-4xl mx-auto">
                                    <Card className="border-muted2 shadow-lg overflow-hidden">
                                        <CardHeader className="bg-primary/5 border-b border-muted2">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div>
                                                    <CardTitle className="text-2xl font-heading text-primary">
                                                        {calendario?.titulo ||
                                                            "Calendario Académico"}
                                                    </CardTitle>
                                                    <CardDescription className="mt-1">
                                                        Cronograma oficial de
                                                        actividades de la
                                                        universidad
                                                    </CardDescription>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {calendario?.notas
                                                        ?.periodo && (
                                                        <Badge
                                                            variant="outline"
                                                            className="bg-white border-primary/20 text-primary"
                                                        >
                                                            {
                                                                calendario.notas
                                                                    .periodo
                                                            }
                                                        </Badge>
                                                    )}
                                                    {calendario?.notas
                                                        ?.anio_lectivo && (
                                                        <Badge
                                                            variant="outline"
                                                            className="bg-white border-primary/20 text-primary"
                                                        >
                                                            Año:{" "}
                                                            {
                                                                calendario.notas
                                                                    .anio_lectivo
                                                            }
                                                        </Badge>
                                                    )}
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="p-0 bg-stone-50">
                                            <div className="relative min-h-[400px] flex items-center justify-center p-4">
                                                {loadingGeneral ? (
                                                    <div className="flex flex-col items-center gap-3">
                                                        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                                                        <p className="text-muted-foreground animate-pulse">
                                                            Cargando
                                                            calendario...
                                                        </p>
                                                    </div>
                                                ) : calendario?.archivo_url ? (
                                                    <div className="w-full h-full flex flex-col gap-6">
                                                        <div className="overflow-hidden border border-muted2 shadow-sm bg-white">
                                                            {isPdf ? (
                                                                <iframe
                                                                    src={calendario.archivo_url}
                                                                    title="Calendario Académico"
                                                                    className="w-full"
                                                                    style={{ height: "80vh", minHeight: "600px" }}
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={calendario.archivo_url}
                                                                    alt="Calendario Académico"
                                                                    className="w-full h-auto object-contain cursor-zoom-in"
                                                                    onClick={() =>
                                                                        window.open(
                                                                            calendario.archivo_url,
                                                                            "_blank",
                                                                        )
                                                                    }
                                                                />
                                                            )}
                                                        </div>
                                                        <div className="flex justify-center pb-8 px-4">
                                                            <a
                                                                href={calendario.archivo_url}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 px-6 py-3 underline text-primary font-medium"
                                                            >
                                                                <Download className="w-4 h-4" />
                                                                Descargar Calendario
                                                                {isPdf ? " (PDF)" : " (JPG/PNG)"}
                                                            </a>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="text-center py-20 px-8">
                                                        <AlertCircle className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                                                        <p className="text-muted-foreground text-lg">
                                                            No se ha cargado un
                                                            calendario académico
                                                            vigente.
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <div className="mt-8 grid md:grid-cols-3 gap-6">
                                        <div className="p-6 bg-primary/5 border border-primary/10">
                                            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center mb-4">
                                                <Info className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-heading font-bold text-primary mb-2">
                                                Importante
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Las fechas pueden estar sujetas
                                                a modificaciones por resolución
                                                rectoral.
                                            </p>
                                        </div>
                                        <div className="p-6 bg-primary/5 border border-primary/10">
                                            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center mb-4">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-heading font-bold text-primary mb-2">
                                                Inscripciones
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Recordá verificar los períodos
                                                de inscripción en el SIU
                                                Guaraní.
                                            </p>
                                        </div>
                                        <div className="p-6 bg-primary/5 border border-primary/10">
                                            <div className="w-10 h-10 bg-primary text-white flex items-center justify-center mb-4">
                                                <ExternalLink className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-heading font-bold text-primary mb-2">
                                                Autogestión
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Accedé al Campus Virtual para
                                                ver tus notas y estados
                                                académicos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* --- TAB: CURSADO --- */}
                            <TabsContent
                                value="cursado"
                                className="animate-in fade-in duration-500"
                            >
                                <HorariosPage />
                            </TabsContent>

                            {/* --- TAB: EXAMENES --- */}
                            <TabsContent
                                value="examenes"
                                className="animate-in fade-in duration-500"
                            >
                                <ExamenesPage />
                            </TabsContent>
                        </Tabs>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CalendarioAcademico;
