import useInstitutos from "@/hooks/useInstitutos";

// Hook para generar dinámicamente los elementos del menú de institutos
export const useInstituteMenuItems = () => {
  const { institutes } = useInstitutos();

  const instituteMenuItems = institutes.map(institute => ({
    label: institute.name,
    href: `/institutos/${institute.friendlySlug}`,
    items: institute.careers.map(career => career.name).slice(0, 6) // Mostrar máximo 6 carreras
  }));

  return instituteMenuItems;
};

// Función para obtener los elementos del menú de forma estática (para usar en Header)
export const getStaticInstituteMenuItems = () => [
  {
    label: "Instituto de Diseño, Estrategia & Creatividad",
    href: "/institutos/diseno-creatividad",
    items: ["Arquitectura", "Diseño Textil", "Diseño Industrial", "Paisajismo"]
  },
  {
    label: "Instituto de Educación y Gestión Deportiva",
    href: "/institutos/educacion-gestion-deportiva",
    items: ["Guía de Montaña", "Lic. en Alto Rendimiento Deportivo"]
  },
  {
    label: "Instituto de Estudios Sociales, Política y Cultura",
    href: "/institutos/estudios-sociales-politica-cultura",
    items: ["Abogacía", "Procuración", "Contador Público", "Cs. Políticas", "Comercio Exterior", "Finanzas"]
  },
  {
    label: "Instituto de Salud y Calidad de Vida",
    href: "/institutos/salud-calidad-vida",
    items: ["Medicina", "Kinesiología", "Fonoaudiología", "Emergencias Médicas"]
  },
  {
    label: "Instituto de Desarrollo e Innovación Tecnológica",
    href: "/institutos/desarrollo-innovacion-tecnologica",
    items: ["Ciencia y Tecnología de los Alimentos", "Gestión de Empresas Agroindustriales", "Bromatología", "Guardaparque"]
  },
  {
    label: "Instituto de Educación a Distancia y Tecnología Educativa",
    href: "/institutos/educacion-distancia-tecnologia-educativa",
    items: ["Gestión de Entidades Culturales", "Seguridad Ciudadana", "Ciencias de Datos", "Energías Renovables", "Gestión Deportiva", "Educación Inicial"]
  }
];