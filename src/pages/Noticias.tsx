import { useState, useMemo } from "react";
import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UniversityButton } from "@/components/ui/university-button";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import CtaPage from "@/components/CtaPage";
import { useBlogs } from "@/hooks/use-blogs";
import { Calendar, User, Tag, Search, Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { es } from "date-fns/locale";

const Noticias = () => {
    const [filtroCategoria, setFiltroCategoria] = useState("todas");
    const [busqueda, setBusqueda] = useState("");

    // Obtener todas las noticias publicadas
    const {
        blogs: todasLasNoticias,
        loading,
        error,
    } = useBlogs({
        status: "published",
        orderBy: "publish_date",
        ascending: false,
    });

    // Helper: Formatear fecha
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

    // Helper: Extraer texto plano del HTML
    const extractTextFromHTML = (
        html: string,
        maxLength: number = 150,
    ): string => {
        const div = document.createElement("div");
        div.innerHTML = html;
        const text = div.textContent || div.innerText || "";
        return text.length > maxLength
            ? text.substring(0, maxLength) + "..."
            : text;
    };

    // Obtener categorías únicas de los blogs
    const categorias = useMemo(() => {
        const categoriasSet = new Set<string>();
        todasLasNoticias.forEach((blog) => {
            if (blog.category && Array.isArray(blog.category)) {
                blog.category.forEach((cat) => categoriasSet.add(cat));
            }
        });
        return Array.from(categoriasSet).sort();
    }, [todasLasNoticias]);

    // Filtrar noticias según búsqueda y categoría
    const noticiasFiltradas = useMemo(() => {
        return todasLasNoticias.filter((blog) => {
            const matchCategoria =
                filtroCategoria === "todas" ||
                (blog.category &&
                    Array.isArray(blog.category) &&
                    blog.category.includes(filtroCategoria));

            const matchBusqueda =
                blog.title.toLowerCase().includes(busqueda.toLowerCase()) ||
                extractTextFromHTML(blog.content)
                    .toLowerCase()
                    .includes(busqueda.toLowerCase());

            return matchCategoria && matchBusqueda;
        });
    }, [todasLasNoticias, filtroCategoria, busqueda]);

    // Últimas 3 noticias
    const ultimasNoticias = useMemo(() => {
        return noticiasFiltradas.slice(0, 3);
    }, [noticiasFiltradas]);

    // Todas las demás noticias (excluyendo las 3 primeras)
    const restoNoticias = useMemo(() => {
        return noticiasFiltradas.slice(3);
    }, [noticiasFiltradas]);

    const breadcrumbItems = [{ label: "Noticias" }];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            <main>
                {/* Hero Section */}
                <HeroPageComponent
                    imageUrl="/images/institucional.jpg"
                    title="Noticias USPT"
                    description="Mantente informado sobre las últimas novedades, logros y actividades de nuestra comunidad universitaria."
                    minHeight="500px"
                />

                {/* Breadcrumbs */}
                <div className="container mx-auto px-4 pt-6 md:pt-8">
                    <Breadcrumbs items={breadcrumbItems} />
                </div>

                {/* Filtros y Búsqueda */}
                <section className="py-8 bg-white border-b border-muted2">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row gap-4 items-center">
                            {/* Búsqueda */}
                            <div className="relative flex-1 max-w-md w-full">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Buscar noticias..."
                                    value={busqueda}
                                    onChange={(e) =>
                                        setBusqueda(e.target.value)
                                    }
                                    className="w-full pl-10 pr-4 py-2 border border-muted2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                                />
                            </div>

                            {/* Filtros */}
                            <div className="flex gap-4 items-center">
                                <div className="flex items-center gap-2">
                                    <Filter className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">
                                        Filtrar por:
                                    </span>
                                </div>

                                <select
                                    value={filtroCategoria}
                                    onChange={(e) =>
                                        setFiltroCategoria(e.target.value)
                                    }
                                    className="px-3 py-2 border border-muted2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                                >
                                    <option value="todas">
                                        Todas las Categorías
                                    </option>
                                    {categorias.map((categoria) => (
                                        <option
                                            key={categoria}
                                            value={categoria}
                                        >
                                            {categoria}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Estado de carga */}
                {loading && (
                    <section className="py-16 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <div className="text-center">
                                <div className="animate-pulse space-y-8">
                                    <div className="h-8 bg-muted rounded w-1/4 mx-auto"></div>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        {[1, 2].map((i) => (
                                            <div
                                                key={i}
                                                className="h-96 bg-muted rounded"
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Estado de error */}
                {error && !loading && (
                    <section className="py-16 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <div className="text-center py-12">
                                <p className="text-destructive text-lg mb-4">
                                    Error al cargar las noticias: {error}
                                </p>
                                <UniversityButton
                                    variant="secondary"
                                    onClick={() => window.location.reload()}
                                >
                                    Reintentar
                                </UniversityButton>
                            </div>
                        </div>
                    </section>
                )}

                {/* Últimas Noticias */}
                {!loading && !error && ultimasNoticias.length > 0 && (
                    <section className="py-16 bg-muted/30">
                        <div className="container mx-auto px-4">
                            <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary mb-8 text-center">
                                Últimas Noticias
                            </h2>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {ultimasNoticias.map((noticia) => (
                                    <Card
                                        key={noticia.id}
                                        className="border-muted2 hover:shadow-lg transition-all duration-300 overflow-hidden"
                                    >
                                        <div className="aspect-video relative overflow-hidden">
                                            <img
                                                src={
                                                    noticia.featured_image ||
                                                    "/images/institucional.jpg"
                                                }
                                                alt={noticia.title}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-medium">
                                                    Reciente
                                                </span>
                                            </div>
                                        </div>
                                        <CardHeader>
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>
                                                        {formatDate(
                                                            noticia.publish_date,
                                                        )}
                                                    </span>
                                                </div>
                                                {noticia.category &&
                                                    noticia.category.length >
                                                        0 && (
                                                        <div className="flex items-center gap-1">
                                                            <Tag className="w-4 h-4" />
                                                            <span>
                                                                {
                                                                    noticia
                                                                        .category[0]
                                                                }
                                                            </span>
                                                        </div>
                                                    )}
                                            </div>
                                            <CardTitle className="text-xl font-heading text-primary hover:text-primary/80 transition-colors">
                                                <Link
                                                    to={`/noticias/${noticia.slug}`}
                                                >
                                                    {noticia.title}
                                                </Link>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground font-body mb-4 line-clamp-3">
                                                {extractTextFromHTML(
                                                    noticia.content,
                                                    150,
                                                )}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <User className="w-4 h-4" />
                                                    <span>USPT</span>
                                                </div>
                                                <Link
                                                    to={`/noticias/${noticia.slug}`}
                                                >
                                                    <UniversityButton
                                                        variant="secondary"
                                                        size="sm"
                                                    >
                                                        Leer más
                                                        <ArrowRight className="w-4 h-4 ml-1" />
                                                    </UniversityButton>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Todas las Noticias */}
                {!loading && !error && restoNoticias.length > 0 && (
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary">
                                    Todas las Noticias
                                </h2>
                                <div className="text-sm text-muted-foreground">
                                    {noticiasFiltradas.length} noticia
                                    {noticiasFiltradas.length !== 1
                                        ? "s"
                                        : ""}{" "}
                                    encontrada
                                    {noticiasFiltradas.length !== 1 ? "s" : ""}
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {restoNoticias.map((noticia) => (
                                    <Card
                                        key={noticia.id}
                                        className="border-muted2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="aspect-video relative overflow-hidden rounded-t-lg">
                                            <img
                                                src={
                                                    noticia.featured_image ||
                                                    "/images/institucional.jpg"
                                                }
                                                alt={noticia.title}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        </div>
                                        <CardHeader className="pb-2">
                                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    <span>
                                                        {formatDate(
                                                            noticia.publish_date,
                                                        )}
                                                    </span>
                                                </div>
                                                {noticia.category &&
                                                    noticia.category.length >
                                                        0 && (
                                                        <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                                                            {
                                                                noticia
                                                                    .category[0]
                                                            }
                                                        </span>
                                                    )}
                                            </div>
                                            <CardTitle className="text-lg font-heading text-primary hover:text-primary/80 transition-colors line-clamp-2">
                                                <Link
                                                    to={`/noticias/${noticia.slug}`}
                                                >
                                                    {noticia.title}
                                                </Link>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-3">
                                                {extractTextFromHTML(
                                                    noticia.content,
                                                    150,
                                                )}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                                    <User className="w-3 h-3" />
                                                    <span>USPT</span>
                                                </div>
                                                <Link
                                                    to={`/noticias/${noticia.slug}`}
                                                >
                                                    <UniversityButton
                                                        variant="secondary"
                                                        size="sm"
                                                    >
                                                        Leer más
                                                    </UniversityButton>
                                                </Link>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Sin resultados */}
                {!loading &&
                    !error &&
                    noticiasFiltradas.length === 0 &&
                    todasLasNoticias.length > 0 && (
                        <section className="py-20 bg-white">
                            <div className="container mx-auto px-4">
                                <div className="text-center py-12">
                                    <p className="text-muted-foreground font-body mb-4 text-lg">
                                        No se encontraron noticias con los
                                        filtros seleccionados.
                                    </p>
                                    <UniversityButton
                                        variant="secondary"
                                        onClick={() => {
                                            setFiltroCategoria("todas");
                                            setBusqueda("");
                                        }}
                                    >
                                        Limpiar Filtros
                                    </UniversityButton>
                                </div>
                            </div>
                        </section>
                    )}

                {/* Sin noticias publicadas */}
                {!loading && !error && todasLasNoticias.length === 0 && (
                    <section className="py-20 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="text-center py-12">
                                <p className="text-muted-foreground font-body text-lg">
                                    No hay noticias publicadas en este momento.
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Final */}
                <CtaPage
                    title="Mantente informado con USPT"
                    description="Descubre las últimas noticias, eventos y logros de nuestra comunidad universitaria. Sé parte de la transformación educativa."
                    url="/contacto"
                    buttonText="Contactanos"
                    backgroundImage="/images/institucional.jpg"
                />
            </main>

            <Footer />
        </div>
    );
};

export default Noticias;
