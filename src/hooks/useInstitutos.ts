import { useMemo } from 'react';
import carreersData from '@/utils/carreers.json';
import { getFriendlyRoute } from '@/utils/instituteRoutes';

export interface Career {
  name: string;
  level: string;
  duration_years: number | null;
  hours_total: number | null;
  modality: string;
  intermediate_title: string | null;
  thesis_or_final_project: string | null;
  profile_summary: string;
  admission_requirements: string[];
  notes: string | null;
  source: string;
}

export interface Institute {
  name: string;
  careers: Career[];
}

export interface InstituteWithSlug extends Institute {
  slug: string;
  friendlySlug: string;
}

const useInstitutos = () => {
  const institutesWithSlugs = useMemo(() => {
    return carreersData.institutes.map((institute: Institute) => {
      const slug = generateSlug(institute.name);
      return {
        ...institute,
        slug,
        friendlySlug: getFriendlyRoute(slug)
      };
    });
  }, []);

  const getInstituteBySlug = (friendlySlug: string): InstituteWithSlug | undefined => {
    return institutesWithSlugs.find(institute => institute.friendlySlug === friendlySlug);
  };

  const getInstituteByOriginalSlug = (slug: string): InstituteWithSlug | undefined => {
    return institutesWithSlugs.find(institute => institute.slug === slug);
  };

  return {
    institutes: institutesWithSlugs,
    getInstituteBySlug,
    getInstituteByOriginalSlug
  };
};

// Función para generar slugs consistentes
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/-+/g, '-') // Remover guiones múltiples
    .trim();
};

export { generateSlug };
export default useInstitutos;