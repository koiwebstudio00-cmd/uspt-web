import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ConsejoEyS = () => {
    // Datos de las autoridades
    const autoridades = [
        {
            cargo: "Presidente",
            nombre: "Dra. Catalina Inés Lonac",
            imagen: "/consejo/dralonac.jpg",
            correo: "consejosocial@uspt.edu.ar",
        },
        {
            cargo: "Director Ejecutivo",
            nombre: "Maximiliano Luna",
            imagen: "/consejo/Maximiliano-Luna.jpg",
            correo: "grafinor@hotmail.com",
        },
        {
            cargo: "Vice Director Ejecutivo",
            nombre: "Mario Gomez",
            imagen: "/consejo/mario-gomez.jpg",
            correo: "josemariogomezmm@gmail.com",
        },
        {
            cargo: "Vicepresidenta industria",
            nombre: "Norma Carbajal",
            imagen: "/consejo/norma.jpg",
            correo: "norma.carbajal@plasticoslarioja.com",
        },
        {
            cargo: "Vicepresidente cooperativas",
            nombre: "Mauro Facundo Díaz",
            imagen: "/consejo/FAcundo.jpg",
            correo: "facu260779@gmail.com",
        },
        {
            cargo: "Vicepresidente gremios",
            nombre: "José Luis Guzmán",
            imagen: "/consejo/joseluis.jpeg",
            correo: "guzmanjosemaria76@gmail.com",
        },
        {
            cargo: "Vicepresidente pymes",
            nombre: "Juan José Lomasco",
            imagen: "/consejo/lomasco.jpg",
            correo: "consejosocial@uspt.edu.ar",
        },
        {
            cargo: "Vicepresidente produccion",
            nombre: "Miguel Pérez",
            imagen: "/consejo/miguel.jpg",
            correo: "miguelangelperez@faa.com.ar",
        },
        {
            cargo: "Delegado Sur",
            nombre: "Oscar Regalado",
            imagen: "/consejo/oscar.jpg",
            correo: "oscarhregalado@hotmail.com",
        },
    ];

    // Imágenes para el carrusel
    const imagenesCarrusel = [
        "/consejo/fotoconsejo1.jpeg",
        "/consejo/fotoconsejo2.jpeg",
        "/consejo/fotoconsejo3.jpeg",
        "/consejo/fotoconsejo4.jpeg",
        "/consejo/fotoconsejo5.jpeg",
        "/consejo/consejoeconomico1.jpg",
        "/consejo/consejo_economicoysocial3.jpg",
        "/consejo/consejo4.jpg",
        "/consejo/consejo2.jpg",
        "/consejo/consejo.jpg",
        "/consejo/consejofoto2.jpg",
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />
            <main>
                {/* Hero Section */}
                <HeroPageComponent
                    title="Consejo Económico y Social USPT"
                    description=""
                    minHeight="500"
                    imageUrl="/consejo/Consejo_Social.jpg"
                />

                {/* Banner Section */}
                <a href="https://politicaspublicastucuman.com.ar/" target="_blank">
                <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
                    <div className="container mx-auto px-4">
                        <div className="relative rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/consejo/bannerprecumbre.png"
                                alt="Consejo Social y Económico"
                                className="w-full h-60 object-contain"
                                />
                        </div>
                    </div>
                </section>
                </a>

                {/* Misión Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-6">
                                    Nuestra Misión
                                </h2>
                                <div className="space-y-4 text-muted-foreground font-body">
                                    <p>
                                        El Consejo Social y Económico de la
                                        Universidad San Pablo-T tiene como
                                        misión principal servir como órgano
                                        consultivo y de enlace entre la
                                        institución académica y los diversos
                                        sectores de la sociedad.
                                    </p>
                                    <p>
                                        Promovemos la articulación entre el
                                        conocimiento académico y las necesidades
                                        del sector productivo, fomentando la
                                        investigación aplicada, la transferencia
                                        tecnológica y el desarrollo de proyectos
                                        que contribuyan al crecimiento económico
                                        y social de la región.
                                    </p>
                                    <p>
                                        Trabajamos para fortalecer los vínculos
                                        con empresas, organizaciones civiles,
                                        instituciones gubernamentales y otros
                                        actores relevantes del entorno
                                        socioeconómico.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="/consejo/consejologo.jpg"
                                    alt="Misión del Consejo"
                                    className="w-full h-96 object-cover shadow-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent "></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Carrusel de Imágenes */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <Carousel className="w-full">
                                <CarouselContent>
                                    {imagenesCarrusel.map((imagen, index) => (
                                        <CarouselItem
                                            key={index}
                                            className="md:basis-1/2 lg:basis-1/3"
                                        >
                                            <div className="p-1">
                                                <Card className="border-0 shadow-lg">
                                                    <CardContent className="p-0">
                                                        <img
                                                            src={imagen}
                                                            alt={`Actividad ${
                                                                index + 1
                                                            }`}
                                                            className="w-full h-64 object-cover"
                                                        />
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="rounded-none" />
                                <CarouselNext className="rounded-none" />
                            </Carousel>
                        </div>
                    </div>
                </section>

                {/* Autoridades Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
                                Autoridades
                            </h2>
                            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                                Conocé a las autoridades que integran el Consejo
                                Social y Económico
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {autoridades.map((autoridad, index) => (
                                <Card
                                    key={index}
                                    className="border-muted2 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                                >
                                    <CardHeader className="text-center pb-4">
                                        <div className="relative mx-auto mb-4">
                                            <img
                                                src={autoridad.imagen}
                                                alt={autoridad.nombre}
                                                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-primary/20"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                                                {autoridad.cargo}
                                            </span>
                                            <CardTitle className="text-lg font-heading text-center">
                                                {autoridad.nombre}
                                            </CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <div className="flex items-center justify-center">
                                            <a
                                                href={`mailto:${autoridad.correo}`}
                                                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                <Mail className="w-4 h-4" />
                                                <span className="text-sm">
                                                    {autoridad.correo}
                                                </span>
                                            </a>
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

export default ConsejoEyS;
