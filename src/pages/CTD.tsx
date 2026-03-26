import ResearchCenterTemplate from "@/components/ResearchCenterTemplate";

const CTD = () => {
    const ctdData = {
        title: "Centro de Tecnología Disruptiva (CTD)",
        description:
            "La universidad cuenta con un laboratorio para la investigación y el desarrollo de innovaciones que suponen cambios radicales en la vida de la sociedad. El Centro de Tecnología Disruptiva (CTD) se enfoca en la creación de soluciones tecnológicas que transforman industrias y mejoran la calidad de vida de las personas. Nuestro equipo de investigadores trabaja en proyectos de vanguardia que abarcan desde la inteligencia artificial hasta la robótica, pasando por el Internet de las Cosas y la realidad virtual. El CTD se posiciona como un espacio de innovación donde la creatividad y el conocimiento científico se unen para desarrollar tecnologías que marcan la diferencia. Colaboramos con empresas, instituciones y organismos gubernamentales para llevar nuestras investigaciones del laboratorio a la práctica, generando impacto real en la sociedad.",
        content:
            "El Centro de Tecnología Disruptiva (CTD) que trabaja en conjunto con la firma Tucumán BBS, tiene como lineamientos fundamentales reunir, educar e inspirar a nuevos dirigentes que se esfuercen por comprender y facilitar el desarrollo exponencial de las nuevas tecnologías, como así también promover, aplicar, orientar y guiar estas herramientas para resolver los grandes desafíos de la humanidad. El centro desarrolla en la actualidad proyectos relacionados con la creación de nano satélites, impresoras 3D, drones y biología sintética, entre otros. El CTD está abierto a la presentación de proyectos de profesionales interesados. Los desarrolladores seleccionados trabajan en el diseño y conceptualización de prototipos de proyectos guiados por mentores especialistas en las áreas de referencia.",
        heroImage: "/images/centro2.jpg",
        images: [
            "/investigacion/foto1.jpg",
            "/investigacion/foto2.jpg",
            "/investigacion/foto3.jpg",
            "/investigacion/foto7.jpg",
            "/investigacion/foto10.jpg",
        ],
    };

    return <ResearchCenterTemplate {...ctdData} />;
};

export default CTD;
