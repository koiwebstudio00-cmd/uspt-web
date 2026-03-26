import { useState } from "react";
import {
    Menu,
    X,
    Search,
    MapPin,
    Phone,
    Mail,
    ChevronDown,
    Landmark,
    University,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-uspt.png";
import "./Header.css";
import { Button } from "./ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    const navItems = [
        {
            label: "Inicio",
            href: "/",
            match: (loc: Location) => loc.pathname === "/" && !loc.hash,
        },
        {
            label: "Universidad",
            href: "/universidad",
            match: (loc: Location) =>
                loc.pathname.startsWith("/universidad") ||
                loc.pathname.startsWith("/carreras") ||
                loc.pathname.startsWith("/posgrado") ||
                loc.pathname.startsWith("/extension") ||
                loc.pathname.startsWith("/alumnos"),
            submenu: [
                {
                    label: "Carreras",
                    href: "/carreras",
                },
                {
                    label: "Carreras a Distancia",
                    href: "/carreras-distancia",
                },
                {
                    label: "Posgrado",
                    href: "/posgrado",
                },
                {
                    label: "Extensión Universitaria",
                    href: "/extension-universitaria",
                },
                {
                    label: "Alumnos",
                    href: "/alumnos",
                },
            ],
        },
        {
            label: "Institutos",
            href: "/institutos",
            match: (loc: Location) => loc.pathname.startsWith("/institutos"),
            submenu: [
                {
                    label: "Instituto de Diseño, Estrategia & Creatividad",
                    href: "/institutos/diseno-creatividad",
                    items: [
                        "Arquitectura",
                        "Diseño Textil",
                        "Diseño Industrial",
                        "Paisajismo",
                    ],
                },
                {
                    label: "Instituto de Educación y Gestión Deportiva",
                    href: "/institutos/educacion-gestion-deportiva",
                    items: [
                        "Guía de Montaña",
                        "Lic. en Alto Rendimiento Deportivo",
                    ],
                },
                {
                    label: "Instituto de Estudios Sociales, Política y Cultura",
                    href: "/institutos/estudios-sociales-politica-cultura",
                    items: [
                        "Abogacía",
                        "Procuración",
                        "Contador Público",
                        "Cs. Políticas",
                        "Comercio Exterior",
                        "Finanzas",
                        "RRII",
                        "Profesorado de Inglés",
                        "Protocolo y Eventos",
                        "Corretaje Inmobiliario",
                    ],
                },
                {
                    label: "Instituto de Salud y Calidad de Vida",
                    href: "/institutos/salud-calidad-vida",
                    items: [
                        "Medicina",
                        "Kinesiología",
                        "Fonoaudiología",
                        "Emergencias Médicas",
                    ],
                },
                {
                    label: "Instituto de Desarrollo e Innovación Tecnológica",
                    href: "/institutos/desarrollo-innovacion-tecnologica",
                    items: [
                        "Ciencia y Tecnología de los Alimentos",
                        "Gestión de Empresas Agroindustriales",
                        "Bromatología",
                        "Guardaparque",
                        "Paisajismo",
                    ],
                },
                {
                    label: "Instituto de Educación a Distancia y Tecnología Educativa",
                    href: "/institutos/educacion-distancia-tecnologia-educativa",
                    items: [
                        "Gestión de Entidades Culturales",
                        "Seguridad Ciudadana",
                        "Seguridad Penitenciaria",
                        "Ciencias de Datos",
                        "Energías Renovables",
                        "Administración en Salud",
                        "Gestión Deportiva",
                        "Educación Inicial",
                        "Educación Primaria",
                        "Educación Musical",
                    ],
                },
            ],
        },
        {
            label: "Instituto Preuniversitario",
            href: "/instituto-preuniversitario",
            match: (loc: Location) =>
                loc.pathname === "/instituto-preuniversitario",
            submenu: [
                {
                    label: "Presentación y descripción",
                    href: "/instituto-preuniversitario#presentacion",
                },
                {
                    label: "Misión, visión y valores",
                    href: "/instituto-preuniversitario#mision-vision",
                },
                {
                    label: "Orientaciones",
                    href: "/instituto-preuniversitario#orientaciones",
                },
                {
                    label: "Autoridades",
                    href: "/instituto-preuniversitario#autoridades",
                },
            ],
        },
        {
            label: "Nosotros",
            href: "/nosotros",
            match: (loc: Location) =>
                loc.pathname.startsWith("/nosotros") ||
                loc.pathname === "/historia",
            submenu: [
                { label: "Historia de la universidad", href: "/historia" },
                {
                    label: "Responsabilidades institucionales",
                    href: "/nosotros#responsabilidades",
                },
                {
                    label: "Staff",
                    href: "/nosotros#staff",
                },
                { label: "Reserva Natural", href: "/nosotros/reserva-natural" },
                {
                    label: "Centro de Investigación",
                    href: "/nosotros/centro-investigacion",
                },
                {
                    label: "Concejo Social y Económico",
                    href: "/nosotros/concejo-social",
                },
            ],
        },
        {
            label: "Noticias",
            href: "/noticias",
            match: (loc: Location) => loc.pathname.startsWith("/noticias"),
            submenu: [
                {
                    label: "Novedades institucionales",
                    href: "/noticias",
                },
                {
                    label: "Eventos",
                    href: "/noticias/eventos",
                },
                {
                    label: "Pacto Global",
                    href: "/noticias/pacto-global",
                },
                {
                    label: "Revistas Científicas",
                    href: "/noticias/revistas-cientificas",
                },
            ],
        },
        {
            label: "Pagos Online",
            href: "/pagos-online",
            match: (loc: Location) => loc.pathname === "/pagos-online",
        },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/85 backdrop-blur-sm border-b border-muted2 z-50">
            {/* Top info bar */}
            {/* <div className="hidden md:flex items-center justify-end h-9 text-xs sm:text-sm text-muted-foreground border-b border-muted2/70 container mx-auto px-4">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>
                            Gral. José de San Martín 435, San Miguel de Tucumán,
                            Tucumán
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>3815828720</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span>informes@uspt.edu.ar</span>
                    </div>
                </div>
            </div> */}

            {/* Main navbar */}
            <div className="container mx-auto p-4 py-2">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="USPT" className="h-16" />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden lg:flex items-center">
                        <ul className="flex items-center text-foreground/90 font-heading">
                            {navItems.map((item, idx) => {
                                const isActive = item.match(
                                    location as unknown as Location
                                );
                                const hasSubmenu =
                                    item.submenu && item.submenu.length > 0;

                                return (
                                    <li
                                        key={item.href}
                                        className="relative nav-item"
                                        onMouseEnter={() =>
                                            hasSubmenu &&
                                            setActiveDropdown(item.label)
                                        }
                                        onMouseLeave={() =>
                                            setActiveDropdown(null)
                                        }
                                    >
                                        <Link
                                            to={item.href}
                                            className={`flex items-center gap-1 px-3 py-2 hover:text-primary transition-colors ${
                                                idx === 0 ? "pl-0" : ""
                                            } ${
                                                isActive ? "text-primary" : ""
                                            }`}
                                        >
                                            {item.label}
                                            {hasSubmenu && (
                                                <ChevronDown className="w-4 h-4 chevron-icon" />
                                            )}
                                        </Link>

                                        {/* Dropdown Menu */}
                                        {hasSubmenu && (
                                            <div
                                                className={`dropdown-menu absolute top-full left-0 mt-1 bg-white border border-muted2 rounded-lg shadow-lg z-[9999] ${
                                                    activeDropdown ===
                                                    item.label
                                                        ? "active"
                                                        : ""
                                                } ${
                                                    item.label === "Institutos"
                                                        ? "w-96"
                                                        : "w-80"
                                                }`}
                                                onMouseEnter={() =>
                                                    setActiveDropdown(
                                                        item.label
                                                    )
                                                }
                                                onMouseLeave={() =>
                                                    setActiveDropdown(null)
                                                }
                                            >
                                                <div className="p-4">
                                                    {item.label ===
                                                    "Institutos" ? (
                                                        // Special layout for Institutos
                                                        <div className="space-y-3">
                                                            {item.submenu.map(
                                                                (
                                                                    subitem,
                                                                    subIdx
                                                                ) => (
                                                                    <div
                                                                        key={
                                                                            subIdx
                                                                        }
                                                                        className="border-b border-muted2/50 pb-3 last:border-b-0 last:pb-0"
                                                                    >
                                                                        <Link
                                                                            to={
                                                                                subitem.href
                                                                            }
                                                                            className="block hover:text-primary/80 transition-colors mb-1"
                                                                            onClick={() =>
                                                                                setActiveDropdown(
                                                                                    null
                                                                                )
                                                                            }
                                                                        >
                                                                            {
                                                                                subitem.label
                                                                            }
                                                                        </Link>
                                                                        {/* {subitem.items && (
                                                                            <div className="text-xs text-muted-foreground leading-relaxed">
                                                                                {subitem.items
                                                                                    .slice(
                                                                                        0,
                                                                                        4
                                                                                    )
                                                                                    .join(
                                                                                        ", "
                                                                                    )}
                                                                                {subitem
                                                                                    .items
                                                                                    .length >
                                                                                    4 &&
                                                                                    "..."}
                                                                            </div>
                                                                        )} */}
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    ) : (
                                                        // Standard layout for other menus
                                                        <div className="space-y-1">
                                                            {item.submenu.map(
                                                                (
                                                                    subitem,
                                                                    subIdx
                                                                ) => (
                                                                    <Link
                                                                        key={
                                                                            subIdx
                                                                        }
                                                                        to={
                                                                            subitem.href
                                                                        }
                                                                        className={`block p-3 rounded-md transition-colors ${
                                                                            subitem.cta
                                                                                ? "bg-primary text-white hover:bg-primary/90"
                                                                                : "hover:bg-muted/30"
                                                                        }`}
                                                                        onClick={() =>
                                                                            setActiveDropdown(
                                                                                null
                                                                            )
                                                                        }
                                                                    >
                                                                        <div
                                                                            className={`font-medium ${
                                                                                subitem.cta
                                                                                    ? "text-white"
                                                                                    : "text-foreground"
                                                                            }`}
                                                                        >
                                                                            {
                                                                                subitem.label
                                                                            }
                                                                        </div>
                                                                        {subitem.description && (
                                                                            <div
                                                                                className={`text-xs mt-1 leading-relaxed ${
                                                                                    subitem.cta
                                                                                        ? "text-white/80"
                                                                                        : "text-muted-foreground"
                                                                                }`}
                                                                            >
                                                                                {
                                                                                    subitem.description
                                                                                }
                                                                            </div>
                                                                        )}
                                                                    </Link>
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Right actions */}
                    <div className="flex items-center gap-2">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        asChild
                                        variant="outline"
                                        size="sm"
                                        className="hidden md:block"
                                    >
                                        <a
                                            href="https://gestion.usptonline.com.ar/universitas"
                                            target="_blank"
                                        >
                                            <Landmark className="size-5" />
                                        </a>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Autogestión</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>

                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        asChild
                                        size="sm"
                                        className="hidden md:block"
                                    >
                                        <a
                                            href="https://virtual.uspt.edu.ar/"
                                            target="_blank"
                                        >
                                            <University className="size-4" />
                                        </a>
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Campus Virtual</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2"
                            aria-label="Abrir menú"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="lg:hidden py-3 border-t border-muted2 max-h-96 overflow-y-auto">
                        <nav className="flex flex-col">
                            {navItems.map((item, i) => {
                                const hasSubmenu =
                                    item.submenu && item.submenu.length > 0;
                                const isExpanded =
                                    activeDropdown === item.label;

                                return (
                                    <div key={item.href}>
                                        <div className="flex items-center justify-between">
                                            <Link
                                                to={item.href}
                                                className="flex-1 py-3 border-b border-muted/30 text-foreground hover:text-primary transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                            {hasSubmenu && (
                                                <button
                                                    onClick={() =>
                                                        setActiveDropdown(
                                                            isExpanded
                                                                ? null
                                                                : item.label
                                                        )
                                                    }
                                                    className="p-3 text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    <ChevronDown
                                                        className={`w-4 h-4 transition-transform ${
                                                            isExpanded
                                                                ? "rotate-180"
                                                                : ""
                                                        }`}
                                                    />
                                                </button>
                                            )}
                                        </div>

                                        {/* Mobile Submenu */}
                                        {hasSubmenu && isExpanded && (
                                            <div className="pl-4 pb-2 bg-muted/20">
                                                {item.submenu.map(
                                                    (subitem, subIdx) => (
                                                        <Link
                                                            key={subIdx}
                                                            to={subitem.href}
                                                            className={`block py-2 px-3 text-sm rounded-md transition-colors ${
                                                                subitem.cta
                                                                    ? "bg-primary text-white hover:bg-primary/90 my-1"
                                                                    : "text-muted-foreground hover:text-primary hover:bg-muted/30"
                                                            }`}
                                                        >
                                                            {subitem.label}
                                                            {subitem.items && (
                                                                <div className="text-xs mt-1 opacity-70">
                                                                    {subitem.items
                                                                        .slice(
                                                                            0,
                                                                            2
                                                                        )
                                                                        .join(
                                                                            ", "
                                                                        )}
                                                                    ...
                                                                </div>
                                                            )}
                                                        </Link>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </nav>
                        <div className="flex flex-col gap-3">
                            <Button asChild variant="outline" size="sm">
                                <a
                                    href="https://gestion.usptonline.com.ar/universitas"
                                    target="_blank"
                                >
                                    <Landmark className="size-5" />
                                    <span>Campus Virtual</span>
                                </a>
                            </Button>
                            <Button asChild size="sm">
                                <a
                                    href="https://virtual.uspt.edu.ar/"
                                    target="_blank"
                                >
                                    <University className="size-4" />
                                    <span>Autogestión</span>
                                </a>
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
