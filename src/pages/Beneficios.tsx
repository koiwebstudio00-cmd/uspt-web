import { Navbar1 } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { HeroPageComponent } from "@/components/HeroPageComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Beneficios = () => {
    const beneficiosSections = [
        {
            title: "Descuento del 20%",
            image: "/beneficios_images/beneficio1.png",
            benefits: [
                "CONSEJO DE MEDICOS DE JUJUY",
                "CAJA POPULAR DE AHORROS",
                "EL PROVINCIAL SRL",
                "PAMI (INST.NACIO.SERV.SOC.PA.JUBI.Y PENSIONADOS)",
                "CONSEJO DE MEDICOS DE JUJUY",
                "COLEGIO MEDICO DE TUCUMAN",
                "ASOCIACION DE PRENSA TUCUMAN",
                "COL.DE GRAD.EN CIENCIAS ECONOMICAS",
                "ROT. SANTANDER RIO",
                "MUNICIPIO AGUILARES",
                "ASOCIACION DE TRABAJADORES DEL ESTADO (ATE)",
                "SRC. DE ESTADO DE HACIENDA DE TUCUMAN",
                "DEFENSORIA DEL PUEBLO DE TUCUMAN",
                "PSLI INTEGRAL HEBREA ARGENTINA",
                "VICENTE TRAPANISA",
                "INSTITUTO DE PREVISION Y SEGURIDAD SOCIAL (IPSS)",
                "PARROQUIA ASUNCION DE MARIA SANTISIMA (PUNI) SAN JORGE",
                "CONSEJO DE MEDICOS DE JUJUY",
                "LEG. VAPUBA ASTORGA (COMUNIDADES ORIGINARIAS DE TUCUMAN)",
                "MUNICIPALIDAD DE SAN MIGUEL DE TUCUMAN",
                "MUNICIPALIDAD DE YERBA BUENA DE TUCUMAN",
                "MUNICIPALIDAD DE SIMOCA",
                "MUTUAL REGIONAL 5 DE SEPTIEMBRE",
                "SINDICATO DE EMPLEADOS DE LA SECRETARIA DE ESTADO DE HACIENDA(SESEEH)",
                "CORREDURIA DE SALUD S.A. - BORIAL",
                "COLEGIO DE ABOGADOS DEL SUR",
                "PROGRAMA DE BECAS A LA EXCELENCIA ACADEMICA",
            ],
        },
        {
            title: "Descuento del 15%",
            image: "/beneficios_images/beneficio2.png",
            benefits: [
                "CENTRO DE FUNCIONARIOS JUDICIALES",
                "CAMARA FEDERAL, PODER JUDICIAL DE LA NACION",
                "FEDERACION ECONOMICA",
                "ASOCIACION DE TRABAJADORES DE LA SANIDAD ARGENTINA (ATSA)",
                "EMPRESAS GRUPO EDETGASNOIRSA, ECOS S.A, GASMARKET, ARGENTINABOX, MIGUEL DIMATER SASAS, MIGUELY REPUORSA, VILLCU",
                "BANCO DEL TUCUMAN",
                "SINDICATO DEL PERSONAL DE LA DIR. GRAL. DE RENTAS DE TUC",
                "TUCUMAN LAWN TENNIS CLUB",
                "EMPRESA FLORES SA",
                "EMPRESA ZAFRASA",
                "POLICIA FEDERAL ARGENTINA",
                "ASOCIACION DE EMPLEADOS FISCALES E INGRESOS PUBLICOS TUCUMAN(P)",
                "SALUD REFRISOS SA (VACA COLA)",
                "ASOC. DE LA MAGISTRATURA Y LA FUNCION JUDICIAL DE TUCUMAN",
                "USPT - MUNICIPIO DE BELLA VISTA",
                "ESCINTEGRAL HEBREA ARGENTINA",
                "SINDICATO DE TRABAJADORES JUDICIALES DE LA REP. ARGENTINA (SITRAJU)",
                "INST.PROFESORADO EN ED. FISICA(IPEF)",
                "UNION ODONTOLOGOS DE TUC",
                "UNION DE EMPLEADOS DE LA JUSTICIA DE LA NACION",
                "SOCIEDAD DE EMPLEADOS Y OBREROS DEL COMERCIO SINDICATOS DE OBREROS Y EMPLEADOS MUNICIPALES",
                "COL. DE FONOAUDIOLOGOS",
                "MUNICIPALIDAD DE SAN MIGUEL DE TUCUMAN",
                "FEDERACION TUCUMANA DE JUDO",
                "SINDICATO DEL PERSONAL DE LA INDUSTRIA AZUCARERA(SPIA)",
                "COLEGIO DE BIOQUIMICOS DE TUCUMAN",
                "ZAFRASA",
                "INST. TEC. GRAL. MANUEL BELGRANO",
                "BINADEL DEL PUEBLO(FARMACIA DEL PUEBLO)",
            ],
        },
        {
            title: "Descuento del 25%, 30% o más",
            image: "/beneficios_images/beneficio3.png",
            benefits: [
                "ASOCIACION GREMIAL DE EMPLEADOS JUDICIALES DE TUCUMAN",
                "MUNICIPIO DE LULES",
                "SIPROSA",
                "LICEO RUGBY CLUB TUCUMAN",
                "ESCUELA DE GOBIERNO",
                "ASOC. DE PROFESIONALES DE CEREMONIAL, PROTOCOLO DE LA CIUDAD DE ROSARIO",
                "ASOCIACION GREMIAL DE RELACIONISTAS PUBLICOS PROFESIONALES - AGREP",
                "COMUNA LOS NOGALES",
                "COMUNA RURAL SAN ANDRES",
                "MINISTERIO DE SEGURIDAD DE LA PROVINCIA DE TUCUMAN",
                "PROGRAMA DE DESCUENTO PARA PADRES DE ALUMNOS USPT",
                "COMUNIDAD INDIGENA LA ANGOSTURA",
                "ASOC. DE EMPLEADOS LEGISLATIVOS DE LA PCIA DE TUCUMAN",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar1 />

            {/* Hero Section */}
            <HeroPageComponent
                title="Beneficios para Estudiantes"
                description="Descubrí todos los descuentos y beneficios exclusivos que tenemos para vos"
                imageUrl="/images/institucional.jpg"
            />

            {/* Breadcrumbs */}
            <div className="container mx-auto px-4 py-6">
                <Breadcrumbs items={[{ label: "Beneficios" }]} />
            </div>

            {/* Secciones de Beneficios */}
            {beneficiosSections.map((section, sectionIndex) => (
                <section
                    key={sectionIndex}
                    className={`py-16 ${sectionIndex % 2 === 0 ? "bg-white" : "bg-muted/30"}`}
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            {/* Imagen del banner */}
                            <div className="mb-12">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full shadow-lg"
                                />
                            </div>

                            {/* Título y subtítulo */}
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-5xl font-heading font-medium text-foreground mb-6">
                                    {section.title}
                                </h2>
                            </div>

                            {/* Lista de beneficios */}
                            <Card className="border-muted2 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-2xl font-heading text-center">
                                        Instituciones y Empresas Adheridas
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {section.benefits.map(
                                            (benefit, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-3 group"
                                                >
                                                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                                                        <Check className="w-3 h-3 text-primary" />
                                                    </div>
                                                    <span className="text-muted-foreground text-sm leading-relaxed">
                                                        {benefit}
                                                    </span>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA Section - WhatsApp Contacts */}
            <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/images/institucional.jpg"
                        alt="USPT Contacto"
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 gradient-hero opacity-80" />
                </div>
                <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
                    <div className="container mx-auto px-4 text-center">
                        <h3 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-6">
                            ¿Cómo acceder a los beneficios?
                        </h3>
                        <p className="text-xl mb-10 max-w-3xl mx-auto font-body leading-relaxed text-white text-balance opacity-90">
                            Para acceder a estos beneficios, presentá tu
                            credencial de estudiante de la USPT en las
                            instituciones y empresas adheridas. Los descuentos
                            son exclusivos para estudiantes activos de nuestra
                            universidad.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                            {[
                                {
                                        name: "Betzabet",
                                        phone: "+5493816132242",
                                    },
                                    {
                                        name: "Tesy",
                                        phone: "+5493816050625",
                                    },
                                    {
                                        name: "Ale",
                                        phone: "+5493816266870",
                                    },
                                    {
                                        name: "Paulo",
                                        phone: "+5493815342171",
                                    },
                            ].map((contact, index) => (
                                <a
                                    key={index}
                                    href={`https://api.whatsapp.com/send?phone=${contact.phone}&text=Hola,%20me%20gustaria%20contactar%20para%20consultar%20sobre%20la%20USPT`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white py-6 px-6 rounded-lg inline-flex flex-col items-center gap-3 group transition-all hover:scale-105"
                                >
                                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                    </div>
                                    <span className="font-semibold font-heading text-center">
                                        {contact.name}
                                    </span>
                                    <span className="text-sm opacity-90">
                                        Contactar por WhatsApp
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Beneficios;
