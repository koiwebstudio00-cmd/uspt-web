import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Arquitectura from "./pages/Arquitectura";
import Nosotros from "./pages/Nosotros";
import Universidad from "./pages/Universidad";
import Carreras from "./pages/Carreras";
import CarrerasDistancia from "./pages/CarrerasDistancia";
import Posgrado from "./pages/Posgrado";
import ExtensionUniversitaria from "./pages/ExtensionUniversitaria";
import Alumnos from "./pages/Alumnos";
import Institutos from "./pages/Institutos";
import InstitutoDiseno from "./pages/institutos/InstitutoDiseno";
import InstitutoDeportes from "./pages/institutos/InstitutoDeportes";
import InstitutoSociales from "./pages/institutos/InstitutoSociales";
import InstitutoTecnologia from "./pages/institutos/InstitutoTecnologia";
import InstitutoSalud from "./pages/institutos/InstitutoSalud";
import InstitutoDistancia from "./pages/institutos/InstitutoDistancia";
import InstitutoPreuniversitario from "./pages/InstitutoPreuniversitario";
import Noticias from "./pages/Noticias";
import PagosOnline from "./pages/PagosOnline";
import ReservaSanPablo from "./pages/ReservaSanPablo";
import DiaEstudiante from "./pages/DiaEstudiante";
import TramitesVarios from "./pages/TramitesVarios";
import PagoServicioTipo from "./pages/PagoServicioTipo";
import PagoExitoso from "./pages/PagoExitoso";
import PagoFallido from "./pages/PagoFallido";
import PagoPendiente from "./pages/PagoPendiente";
import SedesYDirecciones from "./pages/SedesYDirecciones";
import Historia from "./pages/Historia";
import Contacto from "./pages/Contacto";
import PagoCurso from "./pages/PagoCurso";
import PagoExtensionCurso from "./pages/PagoExtensionCurso";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ReservaNatural from "./pages/ReservaNatural";
import Turnos from "./pages/Turnos";
import ConsejoEyS from "./pages/ConsejoEyS";
import CentrosInvestigacion from "./pages/CentrosInvestigacion";
import SECIDYC from "./pages/SECIDYC";
import ProyectosInvestigacion from "./pages/MesaCienciaTec";
import BolsaTrabajo from "./pages/BolsaTrabajo";
import CarreraDetail from "./pages/CarreraDetail";
import CursoDetail from "./pages/CursoDetail";
import ExtensionCursoDetail from "./pages/ExtensionCursoDetail";
import BlogDetail from "./pages/BlogDetail";
import PosgradoDetail from "./pages/PosgradoDetail";
import CIBA from "./pages/CIBA";
import CTD from "./pages/CTD";
import CIAAP from "./pages/CIAAP";
import Beneficios from "./pages/Beneficios";
import MesaCienciaTecnologia from "./pages/MesaCienciaTec";
import CalendarioAcademico from "./pages/CalendarioAcademico";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <ScrollToTop />
                <ScrollToTopButton />
                <Routes>
                    <Route path="/" element={<Index />} />

                    {/* Universidad */}
                    <Route path="/universidad" element={<Universidad />} />
                    <Route path="/carreras" element={<Carreras />} />
                    <Route
                        path="/carreras-distancia"
                        element={<CarrerasDistancia />}
                    />
                    <Route path="/posgrado" element={<Posgrado />} />
                    <Route
                        path="/posgrado/:slug"
                        element={<PosgradoDetail />}
                    />
                    <Route
                        path="/extension-universitaria"
                        element={<ExtensionUniversitaria />}
                    />
                    <Route
                        path="/extension-universitaria/cursos/:slug"
                        element={<ExtensionCursoDetail />}
                    />
                    <Route path="/alumnos" element={<Alumnos />} />
                    <Route
                        path="/calendario-academico"
                        element={<CalendarioAcademico />}
                    />
                    {/* <Route path="/turnos" element={<Turnos />} /> */}
                    <Route path="/beneficios" element={<Beneficios />} />

                    {/* Institutos */}
                    <Route path="/institutos" element={<Institutos />} />
                    <Route
                        path="/institutos/diseno-estrategia-creatividad"
                        element={<InstitutoDiseno />}
                    />
                    <Route
                        path="/institutos/educacion-y-gestion-deportiva"
                        element={<InstitutoDeportes />}
                    />
                    <Route
                        path="/institutos/estudios-sociales-politica-y-cultura"
                        element={<InstitutoSociales />}
                    />
                    <Route
                        path="/institutos/desarrollo-e-innovacion-tecnologica-para-la-competitividad-territorial"
                        element={<InstitutoTecnologia />}
                    />
                    <Route
                        path="/institutos/salud-y-calidad-de-vida"
                        element={<InstitutoSalud />}
                    />
                    <Route
                        path="/institutos/educacion-a-distancia-y-tecnologia-educativa"
                        element={<InstitutoDistancia />}
                    />

                    {/* Instituto Preuniversitario */}
                    <Route
                        path="/instituto-preuniversitario"
                        element={<InstitutoPreuniversitario />}
                    />

                    {/* Carreras específicas - Ruta dinámica */}
                    <Route path="/carreras/:slug" element={<CarreraDetail />} />

                    {/* Cursos de Extensión - Ruta dinámica */}
                    <Route path="/cursos/:id" element={<CursoDetail />} />

                    {/* Nosotros */}
                    <Route path="/nosotros" element={<Nosotros />} />
                    <Route path="/historia" element={<Historia />} />
                    <Route
                        path="/reserva-natural"
                        element={<ReservaNatural />}
                    />
                    <Route path="/consejoeys" element={<ConsejoEyS />} />
                    <Route
                        path="/centrosinvestigacion"
                        element={<CentrosInvestigacion />}
                    />
                    <Route path="/secidyc" element={<SECIDYC />} />
                    <Route
                        path="/mesa-ciencia-tecnologia"
                        element={<MesaCienciaTecnologia />}
                    />
                    <Route path="/investigacion/ciba" element={<CIBA />} />
                    <Route path="/investigacion/ctd" element={<CTD />} />
                    <Route path="/investigacion/ciaap" element={<CIAAP />} />
                    <Route path="/bolsatrabajo" element={<BolsaTrabajo />} />

                    {/* Noticias */}
                    <Route path="/noticias" element={<Noticias />} />
                    <Route path="/noticias/:slug" element={<BlogDetail />} />

                    {/* Pagos Online */}
                    <Route path="/pagos-online" element={<PagosOnline />} />
                    <Route path="/pagar-curso/:id" element={<PagoCurso />} />
                    <Route
                        path="/pagar-extension/:id"
                        element={<PagoExtensionCurso />}
                    />
                    <Route
                        path="/pagos/reserva-san-pablo"
                        element={<ReservaSanPablo />}
                    />
                    <Route
                        path="/pagos/dia-estudiante"
                        element={<DiaEstudiante />}
                    />
                    <Route
                        path="/pagos/tramites-varios"
                        element={<TramitesVarios />}
                    />
                    <Route
                        path="/pagos/servicios/:typeId"
                        element={<PagoServicioTipo />}
                    />
                    <Route path="/success" element={<PagoExitoso />} />
                    <Route path="/failure" element={<PagoFallido />} />
                    <Route path="/pending" element={<PagoPendiente />} />

                    {/* Información Institucional */}
                    <Route
                        path="/sedes-direcciones"
                        element={<SedesYDirecciones />}
                    />
                    <Route path="/contacto" element={<Contacto />} />

                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
