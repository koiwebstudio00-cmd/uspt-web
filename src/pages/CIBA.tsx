import ResearchCenterTemplate from "@/components/ResearchCenterTemplate";

const CIBA = () => {
    const cibaData = {
        title: "Centro Integral de Biotecnología Aplicada (CIBA)",
        description:
            "El CIBA es una importante matriz de divulgación de conocimiento hacia los sectores productivos de la provincia de Tucumán y a la sociedad en general. Este centro fue fundado en 2015 y funciona en el campus de la Universidad de San Pablo, Tucumán. Se constituye como un referente local en el área de la biotecnología aplicada a la Industria Azucarera, en particular, y a cualquier otro cultivo que fuera de interés regional, constituyendo una biofábrica de carácter estratégico en el desarrollo de la regían.",
        content:
            "La misión del Centro Integral de Biotecnología, CIBA, es la aplicación de conocimientos de base Biotecnológica, para ofrecer a la agroindustria de la caña de azúcar y otras cadenas de valor del NOA, productos y servicios innovadores que puedan generar competitividad. Apoyar desde el CIBA al fortalecimiento tecnológico del sector Agrícola, colaborando en el crecimiento sostenido de la provincia, la región y el país. Nos proyectamos como un Centro de Biotecnología líder en la región, generador de tecnologías que hagan competitivo el sector agroindustrial.",
        heroImage: "/images/centro1.jpg",
        images: [
            "/investigacion/ciba1.jpg",
            "/investigacion/ciba2.jpg",
            "/investigacion/ciba3.jpg",
            "/investigacion/ciba4.jpg",
        ],
    };

    return <ResearchCenterTemplate {...cibaData} />;
};

export default CIBA;
