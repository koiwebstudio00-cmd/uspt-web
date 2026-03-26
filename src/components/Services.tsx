import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { FeaturesSectionWithHoverEffectsDemo } from "@/components/ui/features-section-demo";

const Services = () => {
    const titleRef = useIntersectionObserver<HTMLHeadingElement>({
        threshold: 0.3,
    });
    const descriptionRef = useIntersectionObserver<HTMLParagraphElement>({
        threshold: 0.3,
    });
    const featuresRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });

    return (
        <section className="bg-primary/10 py-28">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef.elementRef}
                        className={`text-4xl md:text-5xl font-heading font-medium  mb-6  animate-on-scroll animate-fade-in-scale ${
                            titleRef.isIntersecting
                                ? "animate-fade-in-scale"
                                : ""
                        }`}
                    >
                        Servicios
                    </h2>
                    <p
                        ref={descriptionRef.elementRef}
                        className={`text-xl text-muted-foreground max-w-3xl mx-auto font-body animate-on-scroll animate-fade-in-up ${
                            descriptionRef.isIntersecting
                                ? "animate-fade-in-up"
                                : ""
                        }`}
                        style={{ transitionDelay: "0.2s" }}
                    >
                        Ofrecemos un ecosistema completo de servicios diseñados
                        para acompañarte en toda tu trayectoria académica y
                        profesional.
                    </p>
                </div>

                <div
                    ref={featuresRef.elementRef}
                    className={`animate-on-scroll animate-fade-in-up ${
                        featuresRef.isIntersecting ? "animate-fade-in-up" : ""
                    }`}
                    style={{ transitionDelay: "0.4s" }}
                >
                    <FeaturesSectionWithHoverEffectsDemo />
                </div>
            </div>
        </section>
    );
};

export default Services;
