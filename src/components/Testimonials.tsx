import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
    const titleRef = useIntersectionObserver<HTMLHeadingElement>({
        threshold: 0.3,
    });
    const descriptionRef = useIntersectionObserver<HTMLParagraphElement>({
        threshold: 0.3,
    });
    const testimonialsRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.2,
    });

    // Mapear datos actuales al tipo esperado por TestimonialSlider
    const testimonialItems = [
        {
            quote: "Mi experiencia en la Universidad ha sido muy grata. La carrera de Ciencia Política ofrece una variedad de campos del saber que complementan la disciplina, como la sociología, el derecho, la historia y la filosofía. Los primeros años son una introducción y, a medida que avanzás, comprendés cómo se configuran las relaciones de poder y los procesos de toma de decisiones actuales. La carrera me brindó herramientas valiosas que aplico hoy en mi experiencia laboral como pasante en la Legislatura. Estoy muy agradecida por todo lo que la Universidad me ha brindado y espero desenvolverme como una gran profesional en el futuro.",
            name: "Lic. Valentina Ferré",
            role: "Egresada de Ciencia Política",
            avatar: "/images/Lic. Valentina Ferre.png",
        },
        {
            quote: "Me recibí de Licenciada en Periodismo en la Universidad San Pablo T. Mi experiencia cumplió todas mis expectativas. Elegí estudiar aquí porque todas las materias teóricas estaban acompañadas de práctica, lo que me permitió desarrollarme profesionalmente, tener mayor experiencia y estar mejor preparada para insertarme en el campo laboral.",
            name: "Pr. Gabriela Arias",
            role: "Egresada de Periodismo",
            avatar: "/images/Pr. Gabriela Arias.png",
        },
        {
            quote: "Soy egresada de la Tecnicatura Superior en Ceremonial, Protocolo y Organización de Eventos (año 2020). Durante mi carrera aprendí muchísimo, especialmente sobre la organización de eventos académicos, con docentes como Silvia Luque y Aníbal Gotelli. Es una carrera apasionante para quienes disfrutan planificar eventos. Si bien implica esfuerzo y dedicación, no hay actividad más gratificante para quienes aman este rubro.",
            name: "Tec. Juliana Kreisel",
            role: "Egresada de Ceremonial, Protocolo y Organización de Eventos",
            avatar: "/images/Tec. Juliana Kreisel.png",
        },
    ];

    return (
        <section className="py-28 bg-primary/10" id="testimonios">
           

                <div
                    ref={testimonialsRef.elementRef}
                    className={`animate-on-scroll animate-fade-in-up ${testimonialsRef.isIntersecting
                            ? "animate-fade-in-up"
                            : ""
                        }`}
                    style={{ transitionDelay: "0.4s" }}
                >
                    <TestimonialSlider items={testimonialItems} />
                </div>
            
        </section>
    );
};

export default Testimonials;
