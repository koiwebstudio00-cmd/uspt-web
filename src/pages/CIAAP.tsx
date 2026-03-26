import CIAAPTemplate from "@/components/CIAAPTemplate";

const CIAAP = () => {
    const ciaapData = {
        title: "Centro de Inteligencia Artificial Aplicada (CIAAP)",
        heroImage: "/images/centro3.jpg",
        mission:
            "Impulsar la innovación tecnológica y el desarrollo económico y social mediante la investigación, creación y aplicación de soluciones basadas en inteligencia artificial, generando impacto en la calidad de vida, la competitividad de las empresas y el mejoramiento de los servicios públicos.",
        vision: "Convertirnos en un referente nacional e internacional en la generación e implementación de soluciones innovadoras mediante la inteligencía artificial, impulsando el desarrollo sustentable, ético y competitivo en beneficio de la sociedad.",
        values: [
            "Excelencia: Buscamos la calidad y precisión en todas nuestras acciones y proyectos, asegurando resultados efectivos y medibles.",
            "Innovación: Promovemos el pensamiento creativo y la búsqueda constante de soluciones tecnológicas disruptivas.",
            "Colaboración: Impulsamos el trabajo interdisciplinario y las alianzas estratégicas para potenciar el alcance de nuestras investigaciones y desarrollos.",
            "Ética y Responsabilidad: Nos comprometemos a un uso ético y responsable de la inteligencia artificial, priorizando siempre el bienestar humano y ambiental.",
            "Compromiso Social: Orientamos nuestras acciones a resolver desafíos sociales y ambientales reales, generando un impacto positivo y sostenible.",
            "Inclusión y diversidad: Fomentamos un entorno abierto, diverso y equitativo, valorizando distintos enfoques, perspectivas y talentos.",
            "Transparencia: Actuamos con claridad, responsabilidad y apertura en la comunicación de nuestras actividades y resultados.",
        ],
        organizationalStructure:
            "El CIAAP está estructurado en tres áreas principales de trabajo: el Área de Investigación y Desarrollo, dedicada a la creación de nuevos algoritmos y modelos de IA; el Área de Aplicaciones y Transferencia, enfocada en la implementación de soluciones en sectores productivos y sociales; y el Área de Formación y Capacitación, que desarrolla programas educativos y de entrenamiento en IA. Cada área cuenta con equipos multidisciplinarios de investigadores, desarrolladores y especialistas que trabajan de manera coordinada bajo la dirección del Consejo Académico del Centro. Además, contamos con un Comité Asesor Externo conformado por expertos de la industria y la academia que guían nuestras líneas estratégicas de investigación.",
        teamMembers: [
            {
                name: "Ing. Carlos A. Gentile",
                role: "Director del CIAAP",
                description:
                    "Ingeniero en Computación (UNSTA/UCSE), MBA en Administración de Empresas UNT (Materias aprobadas, trabajo final pendiente), Master en Sistemas de Información - UNSTA (Cursado parcialmente). Diplomatura en Neurociencias Aplicadas al Liderazgo Empresarial - UNSTA.",
                image: "/investigacion/gentile.webp",
            },
            {
                name: "Ing. Rosana Hadad Salomón",
                role: "Coordinadora de Investigación",
                description:
                    "Ingeniera y Especialista en Sistemas de Información, Profesora en Disciplinas Industriales y Profesora Titular en la Universidad Tecnológica Nacional - Tucumán. Desde 2019, Directora del Instituto Superior de Educación Tecnológica (ISET), donde ejerce la docencia desde 2004. Fundó en 2009 el equipo de Vigilancia Tecnológica de la UTN-FRT, actualmente GIITNI, liderando a más de 30 investigadores.",
                image: "/investigacion/salomon.webp",
            },
            {
                name: "Tec. Augusto Parra",
                role: "Coordinador de Desarrollo",
                description:
                    "Augusto Parra es un referente en el desarrollo e implementación de tecnologías disruptivas en el norte argentino. Desde 1996 lidera Tucumán BBS SRL, primer proveedor de internet en la región, gestionando equipos multidisciplinarios y desarrollando soluciones tecnológicas para empresas e instituciones. También es presidente de la Cámara de Empresas de Telecomunicaciones y Afines (CETYA) desde 2012 y director del Centro de Tecnología Disruptiva de la Universidad de San Pablo-T desde 2014.",
                image: "/investigacion/parra.webp",
            },
            {
                name: "Dr. Rossi Marco",
                role: "Coordinadora de Capacitación",
                description:
                    "Abogado especializado en innovación y tecnología. Doctor honoris causa por la Federación Iberoamericana de Abogados en reconocimiento a su vínculo con el derecho y la tecnología.",
                image: "/investigacion/rossi.webp",
            },
        ],
    };

    return <CIAAPTemplate {...ciaapData} />;
};

export default CIAAP;
