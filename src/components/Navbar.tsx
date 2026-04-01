import { Book, Menu, Search, Sunset, Trees, User, Zap } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import mainLogo from "@/assets/logo-uspt.png";
import { SearchModal } from "./SearchModal";
import { useState } from "react";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

interface Navbar1Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    menu?: MenuItem[];
    auth?: {
        login: {
            title: string;
            url: string;
        };
        signup: {
            title: string;
            url: string;
        };
    };
}

const Navbar1 = ({
    logo = {
        url: "/",
        src: mainLogo,
        alt: "logo",
        title: "Shadcnblocks.com",
    },
    menu = [
        { title: "Inicio", url: "/" },
        {
            title: "Universidad",
            url: "/universidad",
            items: [
                {
                    title: "Nuestra Oferta",
                    url: "/universidad",
                },
                {
                    title: "Nuestros Institutos",
                    url: "/institutos",
                },
                {
                    title: "Carreras Presenciales",
                    url: "/carreras",
                },
                {
                    title: "Carreras a Distancia",
                    url: "/carreras-distancia",
                },
                {
                    title: "Posgrado",
                    url: "/posgrado",
                },
                {
                    title: "Extensión Universitaria",
                    url: "/extension-universitaria",
                },
            ],
        },
        /* {
            title: "Institutos",
            url: "/institutos",
            items: [
                {
                    title: "Instituto de Diseño, Estrategia & Creatividad",
                    url: "/institutos/diseno-estrategia-creatividad",
                },
                {
                    title: "Instituto de Educación y Gestión Deportiva",
                    url: "/institutos/educacion-y-gestion-deportiva",
                },
                {
                    title: "Instituto de Estudios Sociales, Política y Cultura",
                    url: "/institutos/estudios-sociales-politica-y-cultura",
                },
                {
                    title: "Instituto de Salud y Calidad de Vida",
                    url: "/institutos/salud-y-calidad-de-vida",
                },
                {
                    title: "Instituto de Desarrollo e Innovación Tecnológica",
                    url: "/institutos/desarrollo-e-innovacion-tecnologica-para-la-competitividad-territorial",
                },
                {
                    title: "Instituto de Educación a Distancia y Tecnología Educativa",
                    url: "/institutos/educacion-a-distancia-y-tecnologia-educativa",
                },
            ],
        }, */
        {
            title: "IPRE",
            url: "/instituto-preuniversitario",
        },
        {
            title: "Portal de alumnos",
            url: "/alumnos",
        },
        {
            title: "Informacion Institucional",
            url: "/nosotros",
            items: [
                {
                    title: "Nuestra Historia y Valores",
                    url: "/nosotros",
                },
                {
                    title: "Reserva Natural",
                    url: "/reserva-natural",
                },
                {
                    title: "Noticias",
                    url: "/noticias",
                },
                {
                    title: "Beneficios",
                    url: "/beneficios",
                },
                {
                    title: "Pasantías",
                    url: "/bolsatrabajo",
                },
                {
                    title: "Consejo Económico y Social",
                    url: "/consejoeys",
                },
                {
                    title: "Secretaría de Investigación (SECIDYC)",
                    url: "/secidyc",
                },
                {
                    title: "Mesa de Ciencia y Tecnología",
                    url: "/mesa-ciencia-tecnologia",
                },
            ],
        },
        {
            title: "Pagos Online",
            url: "/pagos-online",
        },
    ],
    auth = {
        login: {
            title: "Autogestión",
            url: "https://gestion.usptonline.com.ar/universitas",
        },
        signup: {
            title: "Campus Virtual",
            url: "https://virtual.uspt.edu.ar/",
        },
    },
}: Navbar1Props) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
        <section className="px-2 py-4 relative z-50">
            <div className="lg:container">
                {/* Desktop Menu */}
                <nav className="hidden justify-between items-center lg:flex">
                    {/* Logo */}
                    <a href={logo.url} className="flex items-center gap-2">
                        <img
                            src={logo.src}
                            className="max-h-14 dark:invert"
                            alt={logo.alt}
                        />
                    </a>
                    <div className="flex items-center gap-2">
                        <NavigationMenu className="relative" viewport={false}>
                            <NavigationMenuList className="flex items-center gap-1">
                                {menu.map((item) => renderMenuItem(item))}
                            </NavigationMenuList>
                        </NavigationMenu>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <Search className="size-5" />
                            <span className="sr-only">Buscar</span>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="font-heading"
                        >
                            <a href={auth.login.url}>{auth.login.title}</a>
                        </Button>
                        <Button asChild size="sm" className="font-heading">
                            <a href={auth.signup.url}>{auth.signup.title}</a>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className="block lg:hidden">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href={logo.url} className="flex items-center gap-2">
                            <img
                                src={logo.src}
                                className="max-h-12 dark:invert"
                                alt={logo.alt}
                            />
                        </a>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full"
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <Search className="size-5" />
                                <span className="sr-only">Buscar</span>
                            </Button>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Menu className="size-4" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent className="overflow-y-auto">
                                    <SheetHeader>
                                        <SheetTitle>
                                            <a
                                                href={logo.url}
                                                className="flex items-center gap-2"
                                            >
                                                <img
                                                    src={logo.src}
                                                    className="max-h-8 dark:invert"
                                                    alt={logo.alt}
                                                />
                                            </a>
                                        </SheetTitle>
                                    </SheetHeader>
                                    <div className="flex flex-col gap-6 py-4 px-2">
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="flex w-full flex-col gap-4"
                                        >
                                            {menu.map((item) =>
                                                renderMobileMenuItem(item),
                                            )}
                                        </Accordion>

                                        <div className="flex flex-col gap-3">
                                            <Button
                                                asChild
                                                variant="outline"
                                                className="font-heading "
                                            >
                                                <a href={auth.login.url}>
                                                    {auth.login.title}
                                                </a>
                                            </Button>
                                            <Button
                                                asChild
                                                className="font-heading "
                                            >
                                                <a href={auth.signup.url}>
                                                    {auth.signup.title}
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
            <SearchModal open={isSearchOpen} onOpenChange={setIsSearchOpen} />
        </section>
    );
};

const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title} className="relative">
                <NavigationMenuTrigger className="font-heading text-[13px]">
                    {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-80 z-50 ">
                    {item.items.map((subItem) => (
                        <NavigationMenuLink asChild key={subItem.title}>
                            <SubMenuLink item={subItem} />
                        </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem key={item.title}>
            <NavigationMenuLink
                href={item.url}
                className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center px-4 py-2 text-[13px] font-medium font-heading transition-colors"
            >
                {item.title}
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <AccordionItem
                key={item.title}
                value={item.title}
                className="border-b-0"
            >
                <AccordionTrigger className="text-[13px] py-0  ">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <SubMenuLink key={subItem.title} item={subItem} />
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }

    return (
        <a key={item.title} href={item.url} className="text-[13px]  font-heading">
            {item.title}
        </a>
    );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
    return (
        <a
            className="hover:bg-muted hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 p-3 leading-none no-underline outline-none transition-colors font-heading"
            href={item.url}
        >
            <div>
                <div className="text-[13px]">{item.title}</div>
            </div>
        </a>
    );
};

export { Navbar1 };
