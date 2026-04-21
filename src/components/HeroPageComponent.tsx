import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";

interface HeroPageComponentProps {
    imageUrl: string;
    title: string;
    description: string;
    minHeight?: string;
    imagePosition?: string;
    btn?: boolean;
    children?: React.ReactNode;
}

export function HeroPageComponent({
    imageUrl,
    title,
    description,
    minHeight = "450px",
    imagePosition = "center center",
    btn = false,
    children,
}: HeroPageComponentProps) {
    const heroRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current) {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * 0.3; // Factor de parallax leve (0.3)
                imageRef.current.style.transform = `translateY(${parallax}px)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            className={
                "relative flex items-center justify-center overflow-hidden"
            }
            style={{ minHeight }}
        >
            <div className="absolute inset-0">
                <img
                    ref={imageRef}
                    src={imageUrl}
                    alt={title}
                    className="w-full h-[120%] object-cover"
                    style={{ objectPosition: imagePosition }}
                    loading="eager"
                />
                <div className="absolute inset-0 gradient-hero opacity-80" />
            </div>
            <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
                <div className="mx-auto">
                    <div
                        ref={heroRef.elementRef}
                        className={cn(
                            "animate-on-scroll max-w-3xl ",
                            heroRef.isIntersecting ? "animate-fade-in-up" : "",
                        )}
                    >
                        <h1 className="text-4xl md:text-5xl text-white mb-6 text-balance font-bold font-heading text-center md:text-left">
                            {title}
                        </h1>
                        <p className="text-lg md:text-xl text-muted font-body mb-8 leading-relaxed text-balance text-center md:text-left">
                            {description}
                        </p>
                        {children}
                        {btn && (
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <Link
                                    to="/carreras"
                                    className="text-white hover:underline bg-primary/50 py-2 px-4 inline-flex items-center gap-2 group transition-all hover:bg-primary/60"
                                >
                                    Ver Carreras
                                    <ArrowRight className="size-5 transition-all group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    to="/contacto"
                                    className="text-white hover:underline py-2 px-4 inline-flex items-center gap-2 group transition-all"
                                >
                                    Inscripciones
                                    <MessageCircle className="size-5 transition-all group-hover:translate-x-1" />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
