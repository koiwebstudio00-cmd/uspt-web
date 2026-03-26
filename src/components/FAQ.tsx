import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const titleRef = useIntersectionObserver<HTMLHeadingElement>({
        threshold: 0.3,
    });
    const descriptionRef = useIntersectionObserver<HTMLParagraphElement>({
        threshold: 0.3,
    });

    const faqs = [
        {
            question: "¿Cuáles son los requisitos de admisión?",
            answer: "Los requisitos varían según la carrera. Generalmente necesitás título secundario completo, documentación personal y aprobar el curso de ingreso. Para carreras específicas pueden requerirse conocimientos previos.",
        },
        {
            question: "¿Ofrecen becas y descuentos?",
            answer: "Sí, contamos con diversos programas de becas por mérito académico, situación socioeconómica y para grupos familiares. También ofrecemos descuentos por pago anticipado y planes de financiamiento.",
        },
        {
            question: "¿Cómo funcionan las carreras a distancia?",
            answer: "Nuestras carreras a distancia utilizan una plataforma virtual moderna con clases en vivo, material interactivo y tutorías personalizadas. Los exámenes pueden ser virtuales o presenciales según la carrera.",
        },
        {
            question: "¿La universidad tiene reconocimiento oficial?",
            answer: "Sí, la Universidad de San Pablo T cuenta con reconocimiento oficial del Ministerio de Educación. Todos nuestros títulos tienen validez nacional e internacional.",
        },
        {
            question: "¿Hay oportunidades de práctica profesional?",
            answer: "Absolutamente. Tenemos convenios con más de 200 empresas e instituciones para prácticas profesionales. Nuestros estudiantes realizan pasantías desde los primeros años de carrera.",
        },
        {
            question: "¿Cuándo abren las inscripciones?",
            answer: "Las inscripciones abren en febrero para el primer cuatrimestre y en julio para el segundo. También hay inscripciones especiales para carreras a distancia durante todo el año.",
        },
    ];

    return (
        <section className="py-28 bg-primary/10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2
                        ref={titleRef.elementRef}
                        className={`text-4xl md:text-5xl font-heading font-medium mb-6 animate-on-scroll animate-fade-in-scale ${titleRef.isIntersecting
                                ? "animate-fade-in-scale"
                                : ""
                            }`}
                    >
                        Preguntas Frecuentes
                    </h2>
                    <p
                        ref={descriptionRef.elementRef}
                        className={`text-xl text-muted-foreground max-w-3xl mx-auto font-body animate-on-scroll animate-fade-in-up ${descriptionRef.isIntersecting
                                ? "animate-fade-in-up"
                                : ""
                            }`}
                        style={{ transitionDelay: "0.2s" }}
                    >
                        Encontrá respuestas a las consultas más comunes sobre la
                        universidad, admisiones y programas académicos.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion
                        type="single"
                        collapsible
                        defaultValue="item-0"
                        className="w-full"
                    >
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className={`border border-muted2 mb-4 bg-white animate-fade-in-up`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:opacity-90 transition-opacity">
                                    <h3 className="text-lg  text-foreground  text-left">
                                        {faq.question}
                                    </h3>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 bg-muted/20 border-t border-muted2">
                                    <p className="text-muted-foreground leading-relaxed font-body pt-4">
                                        {faq.answer}
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
