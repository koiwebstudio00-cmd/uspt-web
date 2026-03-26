import { UniversityButton } from "./ui/university-button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Hero = () => {
    const titleRef = useIntersectionObserver<HTMLHeadingElement>({
        threshold: 0.3,
    });
    const descriptionRef = useIntersectionObserver<HTMLParagraphElement>({
        threshold: 0.3,
    });
    const buttonsRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
    });
    const scrollRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
    });

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/upst-campus.webp"
                    alt="Campus Universidad San Pablo Tucumán"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 text-center text-white">
                <div className="max-w-4xl mx-auto">
                    <h1
                        ref={titleRef.elementRef}
                        className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight  animate-on-scroll animate-fade-in-scale ${
                            titleRef.isIntersecting
                                ? "animate-fade-in-scale"
                                : ""
                        }`}
                        style={{ transitionDelay: "0s" }}
                    >
                        DISTINTA, COMO VOS
                    </h1>
                    <p
                        ref={descriptionRef.elementRef}
                        className={`text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-body animate-on-scroll animate-fade-in-up ${
                            descriptionRef.isIntersecting
                                ? "animate-fade-in-up"
                                : ""
                        }`}
                        style={{ transitionDelay: "0.3s" }}
                    >
                        En la Universidad de San Pablo T formamos profesionales
                        íntegros, comprometidos con la excelencia académica y el
                        desarrollo social.
                    </p>

                    <div
                        ref={buttonsRef.elementRef}
                        className={`flex flex-col mt-12 sm:flex-row gap-4 justify-center items-center animate-on-scroll animate-slide-in-down ${
                            buttonsRef.isIntersecting
                                ? "animate-slide-in-down"
                                : ""
                        }`}
                        style={{ transitionDelay: "0.6s" }}
                    >
                        <UniversityButton
                            variant="primary"
                            className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
                        >
                            <a href="/carreras">Ver Oferta Académica</a>
                        </UniversityButton>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                ref={scrollRef.elementRef}
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-on-scroll animate-fade-in ${
                    scrollRef.isIntersecting ? "animate-fade-in" : ""
                }`}
                style={{ transitionDelay: "1s" }}
            >
                <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
