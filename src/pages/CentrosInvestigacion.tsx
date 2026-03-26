import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Card, CardContent } from "@/components/ui/card";
import { UniversityButton } from "@/components/ui/university-button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const CentrosInvestigacion = () => {
    // Datos de las investigaciones
    const investigaciones = [
        {
            titulo: "CENTRO INTEGRAL DE BIOTECNOLOGÍA APLICADA (CIBA)",
            descripcion:
                "El CIBA es una importante matriz de divulgación de conocimiento hacia los sectores productivos de la provincia de Tucumán y a la sociedad en general. Este centro fue fundado en 2015 y funciona en el campus de la Universidad de San Pablo, Tucumán. Se constituye como un referente local en el área de la biotecnología aplicada a la Industria Azucarera, en particular, y a cualquier otro cultivo que fuera de interés regional, constituyendo una biofábrica de carácter estratégico en el desarrollo de la regían. La misión del Centro Integral de Biotecnología, CIBA, es la aplicación de conocimientos de base Biotecnológica, para ofrecer a la agroindustria de la caña de azúcar y otras cadenas de valor del NOA, productos y servicios innovadores que puedan generar competitividad. Apoyar desde el CIBA al fortalecimiento tecnológico del sector Agrícola, colaborando en el crecimiento sostenido de la provincia, la región y el país. Nos proyectamos como un Centro de Biotecnología líder en la región, generador de tecnologías que hagan competitivo el sector agroindustrial.",
            imagen: "/images/centro1.jpg",
            link: "/investigacion/ciba",
        },
        {
            titulo: "CENTRO DE TECNOLOGíA DISRUPTIVA (CTD)",
            descripcion:
                "La universidad cuenta con un laboratorio para la investigación y el desarrollo de innovaciones que suponen cambios radicales en la vida de la sociedad.",
            imagen: "/images/centro2.jpg",
            link: "/investigacion/ctd",
        },
        {
            titulo: "Centro de Inteligencia Artificial Aplicada (CIAAP)",
            descripcion:
                "Impulsar la innovación tecnológica y el desarrollo económico y social mediante la investigación, creación y aplicación de soluciones basadas en inteligencia artificial, generando impacto en la calidad de vida, la competitividad de las empresas y el mejoramiento de los servicios públicos.",
            imagen: "/images/centro3.jpg",
            link: "/investigacion/ciaap",
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />
            <main>
                {/* Hero Section */}
                <HeroPageComponent
                    title="Centros de Investigación"
                    description=""
                    minHeight="500"
                    imageUrl="/images/centroinv.jpg"
                />

                {/* Investigaciones Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="space-y-12">
                            {investigaciones.map((investigacion, index) => (
                                <Card
                                    key={index}
                                    className="border-muted2 hover:shadow-lg transition-all duration-300"
                                >
                                    <CardContent className="p-0">
                                        <div className="grid lg:grid-cols-2 gap-0">
                                            {/* Contenido de texto */}
                                            <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                                                <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-4">
                                                    {investigacion.titulo}
                                                </h3>
                                                <p className="text-muted-foreground font-body mb-6 leading-relaxed line-clamp-4">
                                                    {investigacion.descripcion}
                                                </p>
                                                <div className="flex gap-4">
                                                    <Link
                                                        className="inline-flex items-center gap-2 group hover:underline"
                                                        to={investigacion.link}
                                                    >
                                                        Ver Más
                                                        <ExternalLink className="w-4 h-4 transition-all group-hover:translate-x-1" />
                                                    </Link>
                                                </div>
                                            </div>

                                            {/* Imagen */}
                                            <div className="relative order-1 lg:order-2">
                                                <img
                                                    src={investigacion.imagen}
                                                    alt={investigacion.titulo}
                                                    className="w-full h-64 lg:h-full max-h-[350px] object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/10"></div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CentrosInvestigacion;
