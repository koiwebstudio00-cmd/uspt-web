import React, { useState, useMemo } from "react";
import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
    Info
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const ANIOS = [1, 2, 3, 4, 5];
const MESES = [
    "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const CalendarioAcademico = () => {
    const [activeTab, setActiveTab] = useState("general");
    
    // State for Class Schedules
    const [selectedCarreraCursado, setSelectedCarreraCursado] = useState<string>("");
    const [selectedAnio, setSelectedAnio] = useState<number>(1);
    
    // State for Exam Dates
    const [selectedCarreraExamen, setSelectedCarreraExamen] = useState<string>("");
    const [selectedMes, setSelectedMes] = useState<string>("Marzo");

    const { calendario, loading: loadingGeneral } = useCalendario();
    
    const { 
        data: cursadoData, 
        loading: loadingCursado, 
        carreras, 
        loadingCarreras 
    } = useHorarios({ 
        carreraId: selectedCarreraCursado, 
        tipo: "cursado", 
        anio: selectedAnio 
    });

    const { 
        data: examenesData, 
        loading: loadingExamenes 
    } = useHorarios({ 
        carreraId: selectedCarreraExamen, 
        tipo: "examenes", 
        mes: selectedMes 
    });

    // Initialize first career if available
    React.useEffect(() => {
        if (carreras.length > 0 && !selectedCarreraCursado) {
            setSelectedCarreraCursado(carreras[0].id);
        }
        if (carreras.length > 0 && !selectedCarreraExamen) {
            setSelectedCarreraExamen(carreras[0].id);
        }
    }, [carreras]);

    const breadcrumbItems = [
        { label: "Inicio", href: "/" },
        { label: "Alumnos", href: "/alumnos" },
        { label: "Calendario Académico" },
    ];

    const sectionRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

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
                    <div className={cn(
                        "container mx-auto px-4 animate-on-scroll",
                        sectionRef.isIntersecting ? "animate-fade-in-up" : ""
                    )}>
                        <Tabs defaultValue="general" className="w-full" onValueChange={setActiveTab}>
                            <div className="flex justify-center mb-12">
                                <TabsList className="bg-muted/50 p-1 rounded-xl border border-muted2">
                                    <TabsTrigger value="general" className="rounded-lg px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        General
                                    </TabsTrigger>
                                    <TabsTrigger value="cursado" className="rounded-lg px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white">
                                        <Clock className="w-4 h-4 mr-2" />
                                        Horarios de Cursado
                                    </TabsTrigger>
                                    <TabsTrigger value="examenes" className="rounded-lg px-6 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white">
                                        <FileText className="w-4 h-4 mr-2" />
                                        Fechas de Exámenes
                                    </TabsTrigger>
                                </TabsList>
                            </div>

                            {/* --- TAB: GENERAL --- */}
                            <TabsContent value="general" className="animate-in fade-in duration-500">
                                <div className="max-w-4xl mx-auto">
                                    <Card className="border-muted2 shadow-lg overflow-hidden">
                                        <CardHeader className="bg-primary/5 border-b border-muted2">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div>
                                                    <CardTitle className="text-2xl font-heading text-primary">
                                                        {calendario?.titulo || "Calendario Académico"}
                                                    </CardTitle>
                                                    <CardDescription className="mt-1">
                                                        Cronograma oficial de actividades de la universidad
                                                    </CardDescription>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {calendario?.notas?.periodo && (
                                                        <Badge variant="outline" className="bg-white border-primary/20 text-primary">
                                                            {calendario.notas.periodo}
                                                        </Badge>
                                                    )}
                                                    {calendario?.notas?.anio_lectivo && (
                                                        <Badge variant="outline" className="bg-white border-primary/20 text-primary">
                                                            Año: {calendario.notas.anio_lectivo}
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
                                                        <p className="text-muted-foreground animate-pulse">Cargando calendario...</p>
                                                    </div>
                                                ) : calendario?.archivo_url ? (
                                                    <div className="w-full h-full flex flex-col gap-6">
                                                        <div className="rounded-lg overflow-hidden border border-muted2 shadow-sm bg-white">
                                                            <img
                                                                src={calendario.archivo_url}
                                                                alt="Calendario Académico"
                                                                className="w-full h-auto object-contain cursor-zoom-in"
                                                                onClick={() => window.open(calendario.archivo_url, "_blank")}
                                                            />
                                                        </div>
                                                        <div className="flex justify-center pb-8 px-4">
                                                            <a 
                                                                href={calendario.archivo_url} 
                                                                target="_blank" 
                                                                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all font-medium shadow-md"
                                                            >
                                                                <Download className="w-4 h-4" />
                                                                Descargar Calendario (PDF/JPG)
                                                            </a>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="text-center py-20 px-8">
                                                        <AlertCircle className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                                                        <p className="text-muted-foreground text-lg">No se ha cargado un calendario académico vigente.</p>
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <div className="mt-8 grid md:grid-cols-3 gap-6">
                                        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center mb-4">
                                                <Info className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-heading font-bold text-primary mb-2">Importante</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Las fechas pueden estar sujetas a modificaciones por resolución rectoral.
                                            </p>
                                        </div>
                                        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center mb-4">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-heading font-bold text-primary mb-2">Inscripciones</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Recordá verificar los períodos de inscripción en el SIU Guaraní.
                                            </p>
                                        </div>
                                        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                            <div className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center mb-4">
                                                <ExternalLink className="w-5 h-5" />
                                            </div>
                                            <h4 className="font-heading font-bold text-primary mb-2">Autogestión</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Accedé al Campus Virtual para ver tus notas y estados académicos.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            {/* --- TAB: CURSADO --- */}
                            <TabsContent value="cursado" className="animate-in fade-in duration-500">
                                <div className="max-w-6xl mx-auto space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6 bg-muted/20 p-6 rounded-2xl border border-muted2">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Carrera</label>
                                            <select
                                                value={selectedCarreraCursado}
                                                onChange={(e) => setSelectedCarreraCursado(e.target.value)}
                                                className="w-full h-12 bg-white border border-muted2 rounded-xl px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                                            >
                                                {loadingCarreras ? (
                                                    <option>Cargando carreras...</option>
                                                ) : (
                                                    carreras.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
                                                )}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Año de Cursado</label>
                                            <div className="flex gap-2 p-1 bg-white border border-muted2 rounded-xl shadow-sm">
                                                {ANIOS.map(anio => (
                                                    <button
                                                        key={anio}
                                                        onClick={() => setSelectedAnio(anio)}
                                                        className={cn(
                                                            "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
                                                            selectedAnio === anio 
                                                                ? "bg-primary text-white shadow-md" 
                                                                : "hover:bg-muted text-muted-foreground"
                                                        )}
                                                    >
                                                        {anio}°
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {loadingCursado ? (
                                        <div className="py-20 flex flex-col items-center gap-4">
                                            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                                            <p className="text-muted-foreground">Buscando horarios...</p>
                                        </div>
                                    ) : cursadoData.length > 0 ? (
                                        <div className="space-y-12">
                                            {/* Render by Cuatrimestre if data provides it, else flat list */}
                                            <div className="grid gap-8">
                                                {cursadoData.map((bloque) => (
                                                    <Card key={bloque.id} className="border-muted2 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                                        <CardHeader className="bg-primary/5 py-4 px-6 border-b border-muted2">
                                                            <div className="flex justify-between items-center">
                                                                <h3 className="text-xl font-heading font-medium text-primary flex items-center gap-2">
                                                                    <div className="w-1.5 h-6 bg-primary rounded-full" />
                                                                    {bloque.dia}
                                                                </h3>
                                                                {bloque.sede && (
                                                                    <Badge variant="secondary" className="bg-white text-primary border-primary/20">
                                                                        Sede: {bloque.sede}
                                                                    </Badge>
                                                                )}
                                                            </div>
                                                        </CardHeader>
                                                        <CardContent className="p-0">
                                                            <div className="overflow-x-auto">
                                                                <table className="w-full text-left border-collapse">
                                                                    <thead>
                                                                        <tr className="bg-muted/30 text-muted-foreground text-xs uppercase tracking-widest border-b border-muted2">
                                                                            <th className="px-6 py-4 font-semibold">Materia</th>
                                                                            <th className="px-6 py-4 font-semibold">Horario</th>
                                                                            <th className="px-6 py-4 font-semibold">Modalidad</th>
                                                                            <th className="px-6 py-4 font-semibold">Docente</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="divide-y divide-muted2">
                                                                        {bloque.horarios_cursado_detalle?.map((detalle) => (
                                                                            <tr key={detalle.id} className="hover:bg-muted/5 transition-colors group">
                                                                                <td className="px-6 py-4 font-medium text-foreground group-hover:text-primary transition-colors">
                                                                                    {detalle.materia}
                                                                                </td>
                                                                                <td className="px-6 py-4 text-sm text-balance">
                                                                                    <div className="flex items-center gap-2">
                                                                                        <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                                                                                        {detalle.horario_hora || "A confirmar"}
                                                                                    </div>
                                                                                </td>
                                                                                <td className="px-6 py-4">
                                                                                    <Badge variant="outline" className={cn(
                                                                                        "font-normal",
                                                                                        detalle.modalidad?.toLowerCase().includes("presencial") 
                                                                                            ? "border-green-200 text-green-700 bg-green-50" 
                                                                                            : "border-blue-200 text-blue-700 bg-blue-50"
                                                                                    )}>
                                                                                        {detalle.modalidad}
                                                                                    </Badge>
                                                                                </td>
                                                                                <td className="px-6 py-4 text-sm text-muted-foreground italic">
                                                                                    {detalle.docente || "-"}
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="py-20 text-center bg-muted/10 rounded-3xl border border-dashed border-muted2">
                                            <Search className="w-12 h-12 text-muted-foreground/20 mx-auto mb-4" />
                                            <h3 className="text-xl font-heading text-muted-foreground font-medium mb-1">Sin horarios cargados</h3>
                                            <p className="text-muted-foreground/70">Probá seleccionando otra carrera o año de cursado.</p>
                                        </div>
                                    )}
                                </div>
                            </TabsContent>

                            {/* --- TAB: EXAMENES --- */}
                            <TabsContent value="examenes" className="animate-in fade-in duration-500">
                                <div className="max-w-6xl mx-auto space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6 bg-muted/20 p-6 rounded-2xl border border-muted2">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Carrera</label>
                                            <select
                                                value={selectedCarreraExamen}
                                                onChange={(e) => setSelectedCarreraExamen(e.target.value)}
                                                className="w-full h-12 bg-white border border-muted2 rounded-xl px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                                            >
                                                {loadingCarreras ? (
                                                    <option>Cargando carreras...</option>
                                                ) : (
                                                    carreras.map(c => <option key={c.id} value={c.id}>{c.name}</option>)
                                                )}
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Mes del Llamado</label>
                                            <select
                                                value={selectedMes}
                                                onChange={(e) => setSelectedMes(e.target.value)}
                                                className="w-full h-12 bg-white border border-muted2 rounded-xl px-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm"
                                            >
                                                {MESES.map(mes => <option key={mes} value={mes}>{mes}</option>)}
                                            </select>
                                        </div>
                                    </div>

                                    {loadingExamenes ? (
                                        <div className="py-20 flex flex-col items-center gap-4">
                                            <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                                            <p className="text-muted-foreground">Buscando mesas de examen...</p>
                                        </div>
                                    ) : examenesData.length > 0 ? (
                                        <div className="space-y-12">
                                            <div className="grid gap-8">
                                                {examenesData.map((bloque) => (
                                                    <Card key={bloque.id} className="border-muted2 shadow-md overflow-hidden hover:shadow-lg transition-all border-l-4 border-l-orange-400">
                                                        <CardHeader className="bg-orange-50/50 py-4 px-6 border-b border-muted2">
                                                            <div className="flex justify-between items-center">
                                                                <h3 className="text-xl font-heading font-medium text-orange-950 flex items-center gap-2">
                                                                    <Calendar className="w-5 h-5 text-orange-600" />
                                                                    {bloque.dia}
                                                                </h3>
                                                                <Badge className="bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-100">
                                                                    Turno: {bloque.mes}
                                                                </Badge>
                                                            </div>
                                                        </CardHeader>
                                                        <CardContent className="p-0">
                                                            <div className="overflow-x-auto">
                                                                <table className="w-full text-left border-collapse">
                                                                    <thead>
                                                                        <tr className="bg-muted/30 text-muted-foreground text-xs uppercase tracking-widest border-b border-muted2">
                                                                            <th className="px-6 py-4 font-semibold">Materia</th>
                                                                            <th className="px-6 py-4 font-semibold">Horario</th>
                                                                            <th className="px-6 py-4 font-semibold">Docente</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="divide-y divide-muted2">
                                                                        {bloque.horarios_examenes_detalle?.map((detalle) => (
                                                                            <tr key={detalle.id} className="hover:bg-orange-50/30 transition-colors group">
                                                                                <td className="px-6 py-4 font-medium text-foreground group-hover:text-orange-700 transition-colors">
                                                                                    {detalle.materia}
                                                                                </td>
                                                                                <td className="px-6 py-4 text-sm">
                                                                                    <div className="flex items-center gap-2 text-foreground font-semibold">
                                                                                        <Clock className="w-3.5 h-3.5 text-orange-600" />
                                                                                        {detalle.horario_hora || "A confirmar"}
                                                                                    </div>
                                                                                </td>
                                                                                <td className="px-6 py-4 text-sm text-muted-foreground italic">
                                                                                    {detalle.docente || "-"}
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="py-20 text-center bg-muted/10 rounded-3xl border border-dashed border-muted2">
                                            <Search className="w-12 h-12 text-muted-foreground/20 mx-auto mb-4" />
                                            <h3 className="text-xl font-heading text-muted-foreground font-medium mb-1">Sin mesas de examen cargadas</h3>
                                            <p className="text-muted-foreground/70">Probá seleccionando otra carrera o mes.</p>
                                        </div>
                                    )}
                                </div>
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
