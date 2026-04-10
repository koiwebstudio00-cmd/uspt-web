import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Building, User } from "lucide-react";
import CtaPage from "@/components/CtaPage";

const BolsaTrabajo = () => {
    const objetivos = [
        "Favorecer la inserción y el posicionamiento laboral y profesional de los estudiantes y egresados de la USPT en el ámbito de su profesión o campo de estudios.",
        "Contribuir al desarrollo profesional de estudiantes y egresados de la USPT.",
        "Facilitar la comunicación entre los estudiantes, egresados, empresas y otras entidades que deseen incorporar recursos humanos formados en la USPT.",
        "Organizar y gestionar las ofertas laborales y ofertas de pasantías que realizan entidades a estudiantes y egresados de la USPT.",
        "Desarrollar oferta de servicios In company en base a proyectos de capacitaciones diseñados por egresados de la USPT.",
        "Ofrecer capacitaciones para la inserción laboral y el desarrollo profesional de los estudiantes y egresados USPT.",
        "Ofrecer actividades de mentoría y acompañamiento para el desarrollo profesional.",
        "Organizar ferias de empleo para el encuentro de la comunidad universitaria y las empresas y entidades que requieren mano de obra calificada.",
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />
            <main>
                {/* Hero Section */}
                <HeroPageComponent
                    title="Pasantías"
                    description="Conectamos talento universitario con oportunidades de pasantías y laborales, facilitando la inserción profesional de nuestros estudiantes y egresados."
                    minHeight="500"
                    imageUrl="/images/IMG_4688.webp"
                />

                {/* Descripción Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold font-heading  mb-6">
                                    Pasantías
                                </h2>
                                <div className="space-y-4 text-muted-foreground font-body">
                                    <p>
                                        Nuestra misión en Pasantías es
                                        favorecer la inserción y el
                                        posicionamiento laboral y profesional de
                                        los estudiantes y egresados de la
                                        Universidad de San Pablo T en el ámbito
                                        de su profesión o campo de estudios.
                                    </p>
                                    <p>
                                        En este sentido, este servicio
                                        actúa como una plataforma para el
                                        desarrollo de las carreras profesionales
                                        y el fortalecimiento de las vocaciones
                                        académicas y laborales.
                                    </p>
                                    <p>
                                        Con este servicio se canalizarán los
                                        pedidos y requerimientos de pasantías en
                                        articulación con los Institutos de la
                                        Universidad conforme la especialidad de
                                        cada uno, como así también las ofertas
                                        laborales que terceras entidades pongan
                                        a disposición de la USPT.
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="/images/bolsatrabajo.jpg"
                                    alt="Pasantías USPT"
                                    className="w-full h-96 object-cover shadow-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Objetivos Section */}
                <section className="py-16 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4">
                                Objetivos del Servicio
                            </h2>
                            <p className="text-lg text-muted-foreground font-body max-w-3xl mx-auto">
                                Nuestros objetivos están orientados a crear un
                                puente efectivo entre la formación académica y
                                el mundo laboral
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                            {objetivos.map((objetivo, index) => (
                                <Card
                                    key={index}
                                    className="border-muted2 hover:shadow-lg transition-all duration-300"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <span className="text-sm font-bold">
                                                    {index + 1}
                                                </span>
                                            </div>
                                            <p className="text-muted-foreground font-body leading-relaxed">
                                                {objetivo}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <CtaPage
                    title="¿Buscás oportunidades de pasantías?"
                    description="Registrate para acceder a
                            las mejores oportunidades laborales y de pasantías"
                    buttonText="Contactar Ahora"
                    url="mailto:clopezflores@uspt.edu.ar"
                />
            </main>
            <Footer />
        </div>
    );
};

export default BolsaTrabajo;
