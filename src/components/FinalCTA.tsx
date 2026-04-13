import { ArrowRight } from "lucide-react";
import { UniversityButton } from "./ui/university-button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { GradientWave } from "./ui/gradient-wave";

const FinalCTA = () => {
    const ctaRef = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });

    return (
        <section className="relative h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Gradient Wave Background */}
            <GradientWave
                colors={[
                    "#610076", // USPT Primary color
                    "#4a005a", // Darker violet
                    "#610076", // USPT Primary color
                    "#3d0048", // Even darker violet
                    "#610076", // USPT Primary color
                    "#4a005a"  // Darker violet
                ]}
                isPlaying={true}
                shadowPower={6}
                darkenTop={false}
                noiseSpeed={0.00001}
                noiseFrequency={[0.0001, 0.0009]}
                deform={{
                    incline: 0.3,
                    noiseAmp: 200,
                    noiseFlow: 4,
                    noiseSeed: 2
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div
                    ref={ctaRef.elementRef}
                    className={`text-center max-w-4xl mx-auto animate-on-scroll animate-fade-in-scale ${ctaRef.isIntersecting ? 'animate-fade-in-scale' : ''
                        }`}
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading text-white tracking-tighter">
                        Tu futuro comienza en la USPT
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto font-body leading-relaxed">
                        Sumate a nuestra comunidad educativa y transformá tu
                        pasión en profesión. El momento es ahora, tu futuro te
                        espera.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <UniversityButton
                            variant="primary"
                            size="lg"
                            className="text-lg px-8 py-4 bg-primary text-white hover:bg-primary/90 shadow-lg"
                        >
                            Inscribite Ahora
                        </UniversityButton>
                        <UniversityButton
                            variant="secondary"
                            size="lg"
                            className="text-lg px-8 py-4 bg-white text-primary hover:bg-gray-50 border-2 border-primary group shadow-lg"
                        >
                            Contactanos
                            <ArrowRight className="group-hover:translate-x-1 transition-all ml-2 w-5 h-5" />
                        </UniversityButton>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div
                            className="animate-fade-in-up bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <div className="text-3xl font-bold mb-2 font-heading text-primary">
                                15+
                            </div>
                            <div className="text-gray-600 font-body">
                                Años de experiencia
                            </div>
                        </div>
                        <div
                            className="animate-fade-in-up bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
                            style={{ animationDelay: "0.4s" }}
                        >
                            <div className="text-3xl font-bold mb-2 font-heading text-primary">
                                5,000+
                            </div>
                            <div className="text-gray-600 font-body">
                                Egresados exitosos
                            </div>
                        </div>
                        <div
                            className="animate-fade-in-up bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg"
                            style={{ animationDelay: "0.6s" }}
                        >
                            <div className="text-3xl font-bold mb-2 font-heading text-primary">
                                98%
                            </div>
                            <div className="text-gray-600 font-body">
                                Inserción laboral
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
