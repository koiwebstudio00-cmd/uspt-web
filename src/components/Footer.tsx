import {
    MapPin,
    Phone,
    Mail,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
    X,
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { XTwitter } from "./icons/X";

const Footer = () => {
    const universityInfoRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
    });
    const usefulLinksRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
    });
    const careersRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
    });
    const contactRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
    });
    const copyrightRef = useIntersectionObserver<HTMLDivElement>({
        threshold: 0.3,
    });

    return (
        <footer className="bg-muted/30 border-t border-muted2">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Universidad Info */}
                    <div
                        ref={universityInfoRef.elementRef}
                        className={`animate-on-scroll flex flex-col justify-center gap-2 items-center animate-fade-in-up ${
                            universityInfoRef.isIntersecting
                                ? "animate-fade-in-up"
                                : ""
                        }`}
                        style={{ transitionDelay: "0.1s" }}
                    >
                        <div className="text-2xl font-bold text-primary mb-4 font-heading">
                            <img src="/logo-uspt.png" className="w-20" />
                        </div>
                        <p className="text-muted-foreground mb-4 font-body text-center text-balance">
                            Universidad de San Pablo – Tucumán
                            <br />
                            Distinta como vos
                        </p>
                        <div className="flex items-center space-x-4">
                            <a
                                href="https://www.facebook.com/universidad.sanpablotucuman"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://instagram.com/usp.tuc/"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/universidad-san-pablo-tucuman-5a634777"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://www.youtube.com/user/UnivSanPabloT"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Útiles */}
                    <div
                        ref={usefulLinksRef.elementRef}
                        className={`animate-on-scroll flex flex-col justify-center gap-2 items-center mt-6 lg:mt-0 animate-fade-in-up ${
                            usefulLinksRef.isIntersecting
                                ? "animate-fade-in-up"
                                : ""
                        }`}
                        style={{ transitionDelay: "0.2s" }}
                    >
                        <h4 className="font-semibold text-foreground mb-4">
                            Links Útiles
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://virtual.uspt.edu.ar"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Campus Virtual
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://gestion.usptonline.com.ar/universitas"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Autogestión
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/bolsatrabajo"
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Pasantías
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://131.221.64.30/expedientes"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Expedientes
                                </a>
                            </li>
                            <li>
                                <a
                                    href="http://131.221.64.30/consultas/"
                                    target="_blank"
                                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                                >
                                    Consulta Expedientes
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Carreras */}
                    {/* <div 
            ref={careersRef.elementRef}
            className={`animate-on-scroll animate-fade-in-up ${
              careersRef.isIntersecting ? 'animate-fade-in-up' : ''
            }`}
            style={{transitionDelay: '0.3s'}}
          >
            <h4 className="font-semibold text-foreground mb-4 font-heading">Carreras</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body">Administración</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body">Ingeniería</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body">Psicología</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body">Educación</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors font-body">Ver todas →</a></li>
            </ul>
          </div> */}

                    {/* Contacto */}
                    <div
                        id="contacto"
                        ref={contactRef.elementRef}
                        className={`animate-on-scroll flex flex-col justify-center gap-2 items-center mt-3 lg:mt-0 animate-fade-in-up ${
                            contactRef.isIntersecting
                                ? "animate-fade-in-up"
                                : ""
                        }`}
                        style={{ transitionDelay: "0.4s" }}
                    >
                        <h4 className="font-semibold text-foreground mb-4">
                            Contacto
                        </h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                                <div className="text-muted-foreground text-sm">
                                    <p>San Pablo, Tucumán</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <a
                                    href="tel:3814530630"
                                    className="text-muted-foreground text-sm hover:text-primary"
                                >
                                    381 453-0630
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <a
                                    href="mailto:informes@uspt.edu.ar"
                                    className="text-muted-foreground text-sm hover:text-primary"
                                >
                                    informes@uspt.edu.ar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    ref={copyrightRef.elementRef}
                    className={`border-t border-muted2 mt-12 pt-8 text-center text-muted-foreground animate-on-scroll animate-fade-in ${
                        copyrightRef.isIntersecting ? "animate-fade-in" : ""
                    }`}
                    style={{ transitionDelay: "0.6s" }}
                >
                    <p className="font-body text-sm">
                        &copy; {new Date().getFullYear()} Universidad de San
                        Pablo T. Todos los derechos reservados.
                    </p>
                    {/* <div className="mt-2 space-x-4">
                        <a
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Política de Privacidad
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Términos de Uso
                        </a>
                        <a
                            href="#"
                            className="hover:text-primary transition-colors"
                        >
                            Accesibilidad
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
