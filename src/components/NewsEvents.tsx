import { ArrowRight, Calendar, Tag, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useBlogs } from "@/hooks/use-blogs";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Link } from "react-router-dom";
import { UniversityButton } from "./ui/university-button";

const NewsEvents = () => {
    const titleRef = useIntersectionObserver<HTMLHeadingElement>({
        threshold: 0.3,
    });
    const descriptionRef = useIntersectionObserver<HTMLParagraphElement>({
        threshold: 0.3,
    });
    const cardsRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });

    // Obtener blogs publicados desde la base de datos
    const { blogs, loading, error } = useBlogs({
        status: "published",
        limit: 3,
        orderBy: "publish_date",
        ascending: false,
    });

    // Helper: Extraer texto plano del HTML para la descripción
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

    // Helper: Formatear fecha
    const formatDate = (dateString: string | null | undefined): string => {
        if (!dateString) return "";
        try {
            return format(new Date(dateString), "d MMM yyyy", { locale: es });
        } catch {
            return "";
        }
    };

    return (
        <section id="noticias-recientes" className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef.elementRef}
                        className={`text-3xl md:text-5xl font-heading font-medium text-foreground mb-6 animate-on-scroll animate-fade-in-scale ${titleRef.isIntersecting
                                ? "animate-fade-in-scale"
                                : ""
                            }`}
                    >
                        Noticias y Eventos
                    </h2>
                    <p
                        ref={descriptionRef.elementRef}
                        className={`text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed animate-on-scroll animate-fade-in-up ${descriptionRef.isIntersecting
                                ? "animate-fade-in-up"
                                : ""
                            }`}
                        style={{ transitionDelay: "0.2s" }}
                    >
                        Mantente informado sobre las últimas novedades de la
                        universidad y no te pierdas nuestros próximos eventos.
                    </p>
                </div>

                <div
                    ref={cardsRef.elementRef}
                    className={`animate-on-scroll animate-fade-in-up ${cardsRef.isIntersecting ? "animate-fade-in-up" : ""
                        }`}
                    style={{ transitionDelay: "0.4s" }}
                >
                    {/* Estado de carga */}
                    {loading && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-lg">
                                Cargando noticias...
                            </p>
                        </div>
                    )}

                    {/* Estado de error */}
                    {error && !loading && (
                        <div className="text-center py-12">
                            <p className="text-destructive text-lg">
                                Error al cargar las noticias: {error}
                            </p>
                        </div>
                    )}

                    {/* Sin blogs publicados */}
                    {!loading && !error && blogs.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground text-lg">
                                No hay noticias publicadas en este momento.
                            </p>
                        </div>
                    )}

                    {/* Mostrar blogs */}
                    {!loading && !error && blogs.length > 0 && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogs.map((blog) => (
                                <Card
                                    key={blog.id}
                                    className="border-muted2 hover:shadow-lg transition-all duration-300 overflow-hidden"
                                >
                                    <div className="aspect-video relative overflow-hidden">
                                        <img
                                            src={
                                                blog.featured_image ||
                                                "/images/institucional.jpg"
                                            }
                                            alt={blog.title}
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
                                                        blog.publish_date,
                                                    )}
                                                </span>
                                            </div>
                                            {blog.category &&
                                                blog.category.length > 0 && (
                                                    <div className="flex items-center gap-1">
                                                        <Tag className="w-4 h-4" />
                                                        <span>
                                                            {
                                                                blog.category[0]
                                                            }
                                                        </span>
                                                    </div>
                                                )}
                                        </div>
                                        <CardTitle className="text-xl font-heading text-primary hover:text-primary/80 transition-colors">
                                            <Link
                                                to={`/noticias/${blog.slug}`}
                                            >
                                                {blog.title}
                                            </Link>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground font-body mb-4 line-clamp-3">
                                            {extractTextFromHTML(
                                                blog.content,
                                                150,
                                            )}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <User className="w-4 h-4" />
                                                <span>USPT</span>
                                            </div>
                                            <Link
                                                to={`/noticias/${blog.slug}`}
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
                    )}
                </div>
            </div>
        </section>
    );
};

export default NewsEvents;
