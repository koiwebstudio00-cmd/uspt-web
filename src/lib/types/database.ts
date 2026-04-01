export enum ServiceType {
    TRAMITE = "tramite",
    RESERVA = "reserva",
    DIA_DEL_ESTUDIANTE = "dia_del_estudiante",
}

export interface Service {
    id: string; // UUID
    nombre: string;
    codigo: string; // Código único del servicio
    precio: number; // DECIMAL(10,2)
    tipo: ServiceType;
    descripcion?: string | null;
    is_active: boolean;
    created_at: string; // ISO timestamp
    updated_at: string; // ISO timestamp
}

export interface Carrera {
    id: string;
    name: string;
    description: string;
    perfil_egresado: string;
    modalidad: string;
    instituto_id: number; //FK a institutos
    sede: string;
    resolution_url: string; //url al archivo
    plan_estudio_url: string; //url al archivo
    horarios_cursado: string; //url al archivo
    fecha_examenes: string; //url al archivo
    created_at: string;
    slug: string;
    duration: number;
    clasificacion: string | null;
}

export interface Instituto {
    id: number;
    name: string;
    director: string;
    secretario: string;
    mision: string;
    objetivos: string;
    created_at: string;
}

export interface Blog {
    id: string; // UUID
    title: string;
    author: string;
    category?: string[] | null;
    status: string;
    tags?: string[] | null;
    content: string; // html del contenido
    featured_image?: string | null; // URL
    publish_date?: string | null; // ISO timestamp
    slug: string; // URL slug
    created_at: string; // ISO timestamp
    updated_at: string; // ISO timestamp
}

export interface CourseCategory {
    id: number;
    name: string;
    moodle_category_id: number;
    moodle_category_id_number: string;
    moodle_parent_category_id?: string | null;
    last_sync_at?: string | null;
    created_at: string;
}

export interface Course {
    id: number;
    moodle_course_id: string;
    fullname?: string | null;
    displayName?: string | null;
    shortname?: string | null;
    summary?: string | null;
    category_id?: number | null;
    price?: number | null;
    last_sync_at?: string | null;
    created_at: string;
    featured_img?: string | null;
    tags?: string[] | null;
    modalidad?: string | null;
}

/**
 * Tipos de posgrado disponibles
 */
export enum TipoPosgrado {
    MAESTRIA = "Maestría",
    POSGRADO = "Posgrado",
    ESPECIALIZACION = "Especialización",
}

/**
 * Tabla: posgrados
 * Gestión de Maestrías, Posgrados y Especializaciones
 */
export interface Posgrado {
    id: string;
    name: string;
    description: string;
    tipo: string; // Maestría, Posgrado o Especialización
    perfil_egresado: string;
    modalidad: string;
    instituto_id: number; // FK a institutos
    sede: string;
    resolution_url: string;
    plan_estudio_url: string;
    horarios_cursado: string;
    fecha_examenes: string;
    created_at: string;
    slug: string;
    duration: number;
}
