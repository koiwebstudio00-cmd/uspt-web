import { useParams, Link } from "react-router-dom";
import { useBlogBySlug } from "@/hooks/use-blog-by-slug";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar, User, Tag } from "lucide-react";
import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

const BlogDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { blog, loading, error } = useBlogBySlug(slug);

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

    // Estado de carga
    if (loading) {
        return (
            <>
                <Navbar1 />
                <div className="min-h-screen bg-primary/10">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-4xl mx-auto">
                            <div className="animate-pulse space-y-8">
                                <div className="h-8 bg-muted rounded w-1/4"></div>
                                <div className="h-12 bg-muted rounded w-3/4"></div>
                                <div className="h-6 bg-muted rounded w-1/2"></div>
                                <div className="h-96 bg-muted rounded"></div>
                                <div className="space-y-4">
                                    <div className="h-4 bg-muted rounded"></div>
                                    <div className="h-4 bg-muted rounded"></div>
                                    <div className="h-4 bg-muted rounded w-5/6"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    // Estado de error
    if (error || !blog) {
        return (
            <>
                <Navbar1 />
                <div className="min-h-screen bg-primary/10 flex items-center justify-center">
                    <div className="container mx-auto px-4 py-16">
                        <div className="max-w-2xl mx-auto p-12 text-center bg-background rounded-lg shadow-lg">
                            <div className="mb-6">
                                <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        className="w-10 h-10 text-destructive"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                        />
                                    </svg>
                                </div>
                                <h1 className="text-3xl font-heading font-semibold mb-4">
                                    {error || "Blog no encontrado"}
                                </h1>
                                <p className="text-muted-foreground text-lg mb-8">
                                    Lo sentimos, no pudimos encontrar el blog
                                    que estás buscando.
                                </p>
                            </div>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                            >
                                Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar1 />
            <div className="min-h-screen bg-background">
                {/* Hero Header con imagen de fondo */}
                <section
                    className="relative flex items-center justify-center overflow-hidden"
                    style={{ minHeight: "500px" }}
                >
                    {/* Imagen de fondo */}
                    <div className="absolute inset-0">
                        <img
                            src={
                                blog.featured_image ||
                                "/images/institucional.jpg"
                            }
                            alt={blog.title}
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                        <div className="absolute inset-0 gradient-hero opacity-80" />
                    </div>

                    {/* Contenido del Hero */}
                    <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 lg:py-32">
                        <div className="max-w-4xl mx-auto">
                            {/* Categorías */}
                            {blog.category && blog.category.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {blog.category.map((cat, index) => (
                                        <span
                                            key={index}
                                            className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full"
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Título */}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6 font-bold font-heading leading-tight">
                                {blog.title}
                            </h1>

                            {/* Metadata */}
                            <div className="flex flex-wrap items-center gap-6 text-white/90">
                                {blog.publish_date && (
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <time className="text-sm">
                                            {formatDate(blog.publish_date)}
                                        </time>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Breadcrumb */}
                <div className="container mx-auto px-4 pt-6 md:pt-8">
                    <Breadcrumbs
                        items={[
                            { label: "Noticias", href: "/noticias" },
                            { label: blog.title },
                        ]}
                    />
                </div>

                {/* Contenido del blog */}
                <section className="py-8 md:py-12 lg:py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            {/* Contenido HTML */}
                            <div
                                className="prose prose-sm md:prose-base lg:prose-lg max-w-none
                                    prose-headings:font-heading
                                    prose-headings:font-semibold
                                    prose-headings:text-foreground
                                    prose-h1:text-2xl md:prose-h1:text-4xl
                                    prose-h2:text-xl md:prose-h2:text-3xl
                                    prose-h3:text-lg md:prose-h3:text-2xl
                                    prose-h4:text-base md:prose-h4:text-xl
                                    prose-p:text-foreground
                                    prose-p:leading-relaxed
                                    prose-strong:text-foreground
                                    prose-strong:font-semibold
                                    prose-em:text-foreground
                                    prose-code:text-foreground
                                    prose-code:bg-muted
                                    prose-code:px-1.5
                                    prose-code:py-0.5
                                    prose-code:rounded
                                    prose-code:text-xs md:prose-code:text-sm
                                    prose-pre:bg-muted
                                    prose-pre:border
                                    prose-pre:border-border
                                    prose-pre:overflow-x-auto
                                    prose-blockquote:text-muted-foreground
                                    prose-blockquote:border-l-4
                                    prose-blockquote:border-l-primary
                                    prose-blockquote:pl-4 md:prose-blockquote:pl-6
                                    prose-blockquote:italic
                                    prose-a:text-primary
                                    prose-a:no-underline
                                    prose-a:font-medium
                                    prose-a:break-words
                                    hover:prose-a:underline
                                    prose-img:shadow-md
                                    prose-img:mx-auto
                                    prose-img:w-full
                                    prose-img:max-w-xl
                                    prose-img:h-auto
                                    prose-ul:list-disc
                                    prose-ol:list-decimal
                                    prose-li:text-foreground
                                    prose-table:border
                                    prose-table:border-border
                                    prose-table:w-full
                                    prose-table:overflow-x-auto
                                    prose-table:block md:prose-table:table
                                    prose-th:bg-muted
                                    prose-th:font-semibold
                                    prose-td:border
                                    prose-td:border-border"
                                dangerouslySetInnerHTML={{
                                    __html: blog.content,
                                }}
                            />

                            {/* Tags */}
                            {blog.tags && blog.tags.length > 0 && (
                                <div className="mt-12 pt-8 border-t">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Tag className="w-5 h-5 text-muted-foreground" />
                                        <h3 className="text-lg font-heading font-semibold">
                                            Etiquetas
                                        </h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="inline-block px-4 py-2 bg-muted text-foreground text-sm rounded-lg hover:bg-muted/80 transition-colors"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Última actualización */}
                            {blog.updated_at && (
                                <div className="mt-8 text-xs md:text-sm text-muted-foreground text-center">
                                    Última actualización:{" "}
                                    {formatDate(blog.updated_at)}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default BlogDetail;
