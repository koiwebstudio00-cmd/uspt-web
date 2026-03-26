import { generateSlug } from "@/hooks/useInstitutos";
import carreersData from "@/utils/carreers.json";

export interface InstituteRoute {
  name: string;
  slug: string;
  path: string;
}

export const getInstituteRoutes = (): InstituteRoute[] => {
  return carreersData.institutes.map(institute => {
    const slug = generateSlug(institute.name);
    return {
      name: institute.name,
      slug,
      path: `/institutos/${slug}`
    };
  });
};

// Mapeo manual para rutas más amigables (opcional)
export const routeMapping: Record<string, string> = {
  "instituto-de-diseno-estrategia-creatividad": "diseno-creatividad",
  "instituto-de-educacion-y-gestion-deportiva": "educacion-gestion-deportiva", 
  "instituto-de-estudios-sociales-politica-y-cultura": "estudios-sociales-politica-cultura",
  "instituto-de-desarrollo-e-innovacion-tecnologica-para-la-competitividad-territorial": "desarrollo-innovacion-tecnologica",
  "instituto-de-salud-y-calidad-de-vida": "salud-calidad-vida",
  "instituto-de-educacion-a-distancia-y-tecnologia-educativa": "educacion-distancia-tecnologia-educativa"
};

export const getFriendlyRoute = (slug: string): string => {
  return routeMapping[slug] || slug;
};