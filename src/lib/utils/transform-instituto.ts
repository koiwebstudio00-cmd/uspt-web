import type { Instituto, Carrera } from "@/lib/types/database";

/**
 * Career interface expected by InstitutoTemplate
 * Only includes fields from the database schema
 */
export interface TemplateCareer {
    id: string;
    name: string;
    description: string;
    perfil_egresado: string;
    modalidad: string;
    sede: string;
    slug: string;
    resolution_url: string;
    plan_estudio_url: string;
    horarios_cursado: string;
    fecha_examenes: string;
}

/**
 * Institute interface expected by InstitutoTemplate
 * Only includes fields from the database schema
 */
export interface TemplateInstitute {
    id: number;
    name: string;
    director: string;
    secretario: string;
    mision: string;
    objetivos: string;
    careers: TemplateCareer[];
}

/**
 * Transform Supabase data to template format
 * Direct mapping without unnecessary transformations
 */
export function transformInstitutoData(
    instituto: Instituto,
    carreras: Carrera[]
): TemplateInstitute {
    return {
        id: instituto.id,
        name: instituto.name,
        director: instituto.director,
        secretario: instituto.secretario,
        mision: instituto.mision,
        objetivos: instituto.objetivos,
        careers: carreras.map((carrera) => ({
            id: carrera.id,
            name: carrera.name,
            description: carrera.description,
            perfil_egresado: carrera.perfil_egresado,
            modalidad: carrera.modalidad,
            sede: carrera.sede,
            slug: carrera.slug,
            resolution_url: carrera.resolution_url,
            plan_estudio_url: carrera.plan_estudio_url,
            horarios_cursado: carrera.horarios_cursado,
            fecha_examenes: carrera.fecha_examenes,
            clasificacion: carrera.clasificacion,
        })),
    };
}
