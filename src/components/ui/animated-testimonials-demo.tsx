import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "Mi experiencia en la Universidad ha sido muy grata. La carrera de Ciencia Política ofrece una variedad de campos del saber que complementan la disciplina, como la sociología, el derecho, la historia y la filosofía. Los primeros años son una introducción y, a medida que avanzás, comprendés cómo se configuran las relaciones de poder y los procesos de toma de decisiones actuales. La carrera me brindó herramientas valiosas que aplico hoy en mi experiencia laboral como pasante en la Legislatura. Estoy muy agradecida por todo lo que la Universidad me ha brindado y espero desenvolverme como una gran profesional en el futuro.",
      name: "Lic. Valentina Ferré",
      designation: "Egresada de Ciencia Política",
      src: "/images/Lic. Valentina Ferre.png",
    },
    {
      quote: "Me recibí de Licenciada en Periodismo en la Universidad de San Pablo – Tucumán. Mi experiencia cumplió todas mis expectativas. Elegí estudiar aquí porque todas las materias teóricas estaban acompañadas de práctica, lo que me permitió desarrollarme profesionalmente, tener mayor experiencia y estar mejor preparada para insertarme en el campo laboral.",
      name: "Pr. Gabriela Arias",
      designation: "Egresada de Periodismo",
      src: "/images/Pr. Gabriela Arias.png",
    },
    {
      quote: "Soy egresada de la Tecnicatura Superior en Ceremonial, Protocolo y Organización de Eventos (año 2020). Durante mi carrera aprendí muchísimo, especialmente sobre la organización de eventos académicos, con docentes como Silvia Luque y Aníbal Gotelli. Es una carrera apasionante para quienes disfrutan planificar eventos. Si bien implica esfuerzo y dedicación, no hay actividad más gratificante para quienes aman este rubro.",
      name: "Tec. Juliana Kreisel",
      designation: "Egresada de Ceremonial, Protocolo y Organización de Eventos",
      src: "/images/Tec. Juliana Kreisel.png",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
