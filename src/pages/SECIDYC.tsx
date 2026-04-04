import React, { useMemo } from "react";
import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { useBlogs } from "@/hooks/use-blogs";
import { useRevistas } from "@/hooks/use-revistas";
import {
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    Calendar,
    Loader2,
    BookMarked,
} from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const SECIDYC = () => {
    const centros = [
        {
            titulo: "CENTRO INTEGRAL DE BIOTECNOLOGÍA APLICADA (CIBA)",
            descripcion:
                "El CIBA es una matriz de divulgación de conocimiento fundada en 2015. Referente local en biotecnología aplicada a la Industria Azucarera y cultivos de interés regional, funcionando como una biofábrica estratégica para el NOA.",
            imagen: "/images/centro1.jpg",
            link: "/investigacion/ciba",
        },
        {
            titulo: "CENTRO DE TECNOLOGÍA DISRUPTIVA (CTD)",
            descripcion:
                "Laboratorio especializado en la investigación y el desarrollo de innovaciones radicales que transforman la vida de la sociedad a través de tecnologías de vanguardia.",
            imagen: "/images/centro2.jpg",
            link: "/investigacion/ctd",
        },
        {
            titulo: "CENTRO DE INTELIGENCIA ARTIFICIAL APLICADA (CIAAP)",
            descripcion:
                "Impulsa el desarrollo económico y social mediante soluciones basadas en IA, generando impacto real en la competitividad empresarial y los servicios públicos.",
            imagen: "/images/centro3.jpg",
            link: "/investigacion/ciaap",
        },
    ];

    const { blogs: noticias, loading } = useBlogs({
        status: "published",
        orderBy: "publish_date",
        ascending: false,
    });

    const { revistas, loading: loadingRevistas } = useRevistas();

    const noticiasInvestigacion = useMemo(() => {
        return noticias
            .filter(
                (blog) =>
                    blog.category &&
                    Array.isArray(blog.category) &&
                    blog.category.some((cat) =>
                        cat.toLowerCase().includes("investigacion"),
                    ),
            )
            .slice(0, 3);
    }, [noticias]);

    const formatDate = (dateString: string | null | undefined): string => {
        if (!dateString) return "";
        try {
            return format(new Date(dateString), "d 'de' MMMM 'de' yyyy", {
                locale: es,
            });
        } catch {
            return "";
        }
    };

    const breadcrumbItems = [{ label: "SECIDYC" }];

    const funciones = [
        "Proponer e implementar cambios a las políticas científicas de la Universidad que se adecuen a los objetivos, lineamientos y demandas regionales en materia científica.",
        "Convocar anualmente a los docentes investigadores de la USPT a la presentación de proyectos de investigación en todas las áreas disciplinares. Gestionar la evaluación, adjudicación y ejecución de los proyectos.",
        "Gestionar capacitaciones y formación de recursos humanos en investigación científica.",
        "Representar a la universidad ante organismos nacionales e internacionales vinculados a actividades científicas.",
        "Supervisar las acciones de la Unidad de Vinculación Tecnológica.",
    ];

    const consejo = [
        { inst: "SECIDYC", name: "Dra. Gabriela Zárate" },
        { inst: "IDITEC", name: "Mg. Karina González" },
        { inst: "IESPYC", name: "Dr. Nicolás Salvi" },
        { inst: "IDEC", name: "Arq. Mariana Ruiz Nuñez" },
        { inst: "ISCV", name: "Dra. Cecilia D'arpino" },
        { inst: "IEDTE", name: "Lic. Wladimir Wolters Albarracin" },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar1 />
            <main>
                {/* Hero */}
                <HeroPageComponent
                    title="Secretaría de Investigación, Desarrollo y Cultura"
                    description="SECIDYC — Universidad San Pablo T"
                    minHeight="500"
                    imageUrl="/images/centroinv.jpg"
                />

                <div className="container mx-auto px-4 pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* ── MISIÓN Y AUTORIDAD ── */}
                <section className="py-20 bg-white border-b border-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-16">
                            {/* Misión + Funciones */}
                            <div className="lg:col-span-2 space-y-10">
                                <div>
                                    <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 leading-tight">
                                        Secretaría de Investigación,
                                        <br />
                                        Desarrollo y Cultura
                                    </h2>
                                    <p className="text-base text-gray-600 leading-relaxed font-body">
                                        La SECIDYC tiene como misión asistir y
                                        asesorar en la planificación,
                                        programación, coordinación, gestión y
                                        evaluación de las actividades vinculadas
                                        a investigación y desarrollo de la
                                        Universidad San Pablo Tucumán.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-sm font-bold tracking-widest uppercase text-primary mb-6 pb-3 border-b border-gray-200">
                                        Funciones Principales
                                    </h3>
                                    <ol className="space-y-0">
                                        {funciones.map((func, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-5 items-start py-4 border-b border-gray-100 last:border-b-0"
                                            >
                                                <span className="text-xs font-bold text-primary mt-0.5 w-5 flex-shrink-0 tabular-nums">
                                                    {String(i + 1).padStart(
                                                        2,
                                                        "0",
                                                    )}
                                                </span>
                                                <span className="text-sm text-gray-600 font-body leading-relaxed">
                                                    {func}
                                                </span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>

                            {/* Autoridad */}
                            <div className="lg:mt-8">
                                <div className="border border-gray-200 overflow-hidden">
                                    <div className="bg-primary px-6 py-4">
                                        <p className="text-xs font-bold tracking-widest uppercase text-white/70 mb-0.5">
                                            Autoridad
                                        </p>
                                    </div>
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-900 font-heading">
                                                Dra. Gabriela Zárate
                                            </h4>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Secretaria de SECIDYC
                                            </p>
                                        </div>
                                        <div className="pt-4 border-t border-gray-100 space-y-2">
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                                <span>gzarate@uspt.edu.ar</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                                <span>secidyc@uspt.edu.ar</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CONSEJO DE INVESTIGACIÓN ── */}
                <section className="py-20 bg-gray-50 border-b border-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="mb-12">
                                <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
                                    Resolución 260/2015
                                </p>
                                <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
                                    Consejo de Investigación
                                </h2>
                                <p className="text-sm text-gray-600 font-body leading-relaxed max-w-2xl">
                                    Creado para fortalecer y optimizar las
                                    tareas de la SECIDYC, constituyéndose como
                                    el nexo principal entre ésta y los
                                    institutos, canalizando propuestas,
                                    actividades, necesidades y demandas
                                    relacionadas con la investigación. Su
                                    renovación es anual.
                                </p>
                            </div>

                            <div className="mb-4">
                                <p className="text-xs font-bold tracking-widest uppercase text-gray-400">
                                    Miembros del Consejo — 2026
                                </p>
                            </div>

                            <div className="border border-gray-200 overflow-hidden">
                                {consejo.map((member, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-6 px-6 py-4 border-b border-gray-100 last:border-b-0 bg-white hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-xs font-bold tracking-wider uppercase text-primary w-20 flex-shrink-0">
                                            {member.inst}
                                        </span>
                                        <span className="w-px h-4 bg-gray-200 flex-shrink-0" />
                                        <span className="text-sm text-gray-700 font-body">
                                            {member.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CENTROS DE INVESTIGACIÓN ── */}
                <section className="py-20 bg-white border-b border-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold font-heading text-gray-900">
                                Centros de Investigación
                            </h2>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-0 border border-gray-200">
                            {centros.map((centro, index) => (
                                <div
                                    key={index}
                                    className="group border-r border-gray-200 last:border-r-0 overflow-hidden flex flex-col"
                                >
                                    <div className="aspect-video relative overflow-hidden bg-gray-100">
                                        <img
                                            src={centro.imagen}
                                            alt={centro.titulo}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow border-t border-gray-200">
                                        <h3 className="text-sm font-bold font-heading text-gray-900 mb-3 leading-snug">
                                            {centro.titulo}
                                        </h3>
                                        <p className="text-xs text-gray-500 leading-relaxed mb-6 flex-grow">
                                            {centro.descripcion}
                                        </p>
                                        <Link
                                            to={centro.link}
                                            className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider"
                                        >
                                            Ver Centro
                                            <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── NOTICIAS DE INVESTIGACIÓN ── */}
                {noticiasInvestigacion.length > 0 && (
                    <section className="py-20 bg-gray-50 border-b border-gray-200">
                        <div className="container mx-auto px-4">
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold font-heading text-gray-900">
                                    Noticias de Investigación
                                </h2>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
                                {noticiasInvestigacion.map((noticia) => (
                                    <div
                                        key={noticia.id}
                                        className="border-r border-gray-200 last:border-r-0 overflow-hidden group flex flex-col bg-white"
                                    >
                                        <div className="aspect-video relative overflow-hidden bg-gray-100">
                                            <img
                                                src={
                                                    noticia.featured_image ||
                                                    "/images/institucional.jpg"
                                                }
                                                alt={noticia.title}
                                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow border-t border-gray-200">
                                            <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                                                <Calendar className="w-3 h-3" />
                                                <span>
                                                    {formatDate(
                                                        noticia.publish_date,
                                                    )}
                                                </span>
                                            </div>
                                            <h3 className="text-sm font-bold font-heading text-gray-900 mb-4 leading-snug flex-grow line-clamp-3">
                                                <Link
                                                    to={`/noticias/${noticia.slug}`}
                                                    className="hover:text-primary transition-colors"
                                                >
                                                    {noticia.title}
                                                </Link>
                                            </h3>
                                            <Link
                                                to={`/noticias/${noticia.slug}`}
                                                className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider"
                                            >
                                                Leer más
                                                <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* ── UNIDAD DE VINCULACIÓN TECNOLÓGICA ── */}
                <section className="py-20 bg-white border-b border-gray-200">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
                                    Ley 23.877 — Innovación Tecnológica
                                </p>
                                <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 leading-tight">
                                    Unidad de Vinculación
                                    <br />
                                    Tecnológica (UVT)
                                </h2>
                                <p className="text-sm text-gray-600 font-body leading-relaxed mb-8">
                                    La Unidad de Vinculación Tecnológica de la
                                    Universidad San Pablo Tucumán fue creada en
                                    el marco de la Ley 23.877 de Promoción y
                                    Fomento de la Innovación Tecnológica. Su
                                    función principal es facilitar la
                                    vinculación entre el sistema científico y el
                                    sector productivo, actuando como nexo entre
                                    los equipos científicos y las demandas de la
                                    sociedad con el objetivo de mejorar la
                                    calidad de vida y fomentar el desarrollo
                                    regional.
                                </p>

                                <div className="mb-8">
                                    <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
                                        La UVT promueve
                                    </p>
                                    <div className="space-y-0 border border-gray-200">
                                        {[
                                            "La apropiación del conocimiento generado en el ámbito universitario.",
                                            "La vinculación entre instituciones científicas y el sector privado.",
                                            "Innovaciones basadas en investigación y desarrollo.",
                                        ].map((point, i) => (
                                            <div
                                                key={i}
                                                className="flex gap-5 items-start px-5 py-4 border-b border-gray-100 last:border-b-0 bg-white"
                                            >
                                                <span className="text-xs font-bold text-primary mt-0.5 flex-shrink-0">
                                                    {String(i + 1).padStart(
                                                        2,
                                                        "0",
                                                    )}
                                                </span>
                                                <span className="text-xs text-gray-600 font-body leading-relaxed">
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="border border-gray-200 p-5">
                                        <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
                                            Servicios
                                        </p>
                                        <ul className="space-y-2 text-xs text-gray-600 font-body">
                                            <li className="pb-2 border-b border-gray-100">
                                                Gestión de transferencia
                                                tecnológica y protección del
                                                conocimiento.
                                            </li>
                                            <li className="pb-2 border-b border-gray-100">
                                                Gestión de proyectos para
                                                empresas, ONGs e instituciones.
                                            </li>
                                            <li>
                                                Asesoría y apoyo técnico a
                                                empresas e instituciones.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="border border-gray-200 p-5">
                                        <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">
                                            Contacto UVT
                                        </p>
                                        <div className="space-y-2.5 text-xs text-gray-600">
                                            <div className="flex items-center gap-2">
                                                <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                                <span>uvt@uspt.edu.ar</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                                                <span>381 - 4530630</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                                                <span>
                                                    24 de Septiembre 476, San
                                                    Miguel de Tucumán
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Imagen */}
                            <div className="relative overflow-hidden bg-gray-100 aspect-[4/5]">
                                <img
                                    src="/images/nosotros-1.webp"
                                    alt="Unidad de Vinculación Tecnológica USPT"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-primary/90 px-8 py-6">
                                    <p className="text-xs font-bold tracking-widest uppercase text-white/60 mb-1">
                                        USPT — Tucumán
                                    </p>
                                    <p className="text-white font-bold font-heading text-lg leading-snug">
                                        Conectamos la academia con las demandas
                                        reales de la industria
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── REVISTAS CIENTÍFICAS ── */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="mb-12">
                            <h2 className="text-3xl font-bold font-heading text-gray-900 mb-4">
                                Revistas de Investigación y Divulgación
                                Científica
                            </h2>
                            <p className="text-sm text-gray-600 font-body max-w-2xl">
                                Publicaciones periódicas que recogen
                                investigaciones originales y promueven el
                                diálogo intelectual en diversas disciplinas del
                                conocimiento.
                            </p>
                        </div>

                        {loadingRevistas ? (
                            <div className="flex justify-center items-center py-12">
                                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                            </div>
                        ) : revistas.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-16 border border-gray-200 bg-white">
                                <BookMarked className="w-10 h-10 text-gray-300 mb-4" />
                                <p className="text-sm text-gray-400 font-body">
                                    No hay revistas disponibles en este momento
                                </p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 gap-0 border border-gray-200">
                                {revistas.map((revista, idx) => (
                                    <div
                                        key={revista.id}
                                        className="border-b border-r border-gray-200 bg-white hover:bg-gray-50 transition-colors duration-200 flex flex-col md:flex-row"
                                        style={{
                                            borderRight:
                                                idx % 2 === 0
                                                    ? undefined
                                                    : "none",
                                            borderBottom:
                                                idx >= revistas.length - 2
                                                    ? "none"
                                                    : undefined,
                                        }}
                                    >
                                        {/* Imagen vertical (portrait) */}
                                        {revista.image && (
                                            <div className="w-full md:w-36 flex-shrink-0 overflow-hidden border-r border-gray-200">
                                                <img
                                                    src={revista.image}
                                                    alt={revista.title}
                                                    className="w-full h-full object-cover object-center"
                                                    style={{
                                                        aspectRatio: "2/3",
                                                    }}
                                                />
                                            </div>
                                        )}

                                        {/* Contenido */}
                                        <div className="flex flex-col flex-1 p-6">
                                            <div className="mb-4">
                                                <h3 className="text-base font-bold font-heading text-gray-900 leading-snug">
                                                    {revista.title}
                                                </h3>
                                                {revista.area && (
                                                    <p className="text-xs text-gray-400 mt-1 font-body">
                                                        {revista.area}
                                                    </p>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-600 leading-relaxed font-body flex-grow">
                                                {revista.description}
                                            </p>
                                            <div className="mt-5 pt-4 border-t border-gray-100">
                                                {revista.link ? (
                                                    <a
                                                        href={revista.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline uppercase tracking-wider"
                                                    >
                                                        Ver Revista
                                                        <ArrowRight className="w-3 h-3" />
                                                    </a>
                                                ) : (
                                                    <span className="text-xs font-bold tracking-wider uppercase text-gray-300">
                                                        Próximamente disponible
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default SECIDYC;
