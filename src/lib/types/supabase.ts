export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[];

export type Database = {
    // Allows to automatically instantiate createClient with right options
    // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
    __InternalSupabase: {
        PostgrestVersion: "14.1";
    };
    graphql_public: {
        Tables: {
            [_ in never]: never;
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            graphql: {
                Args: {
                    extensions?: Json;
                    operationName?: string;
                    query?: string;
                    variables?: Json;
                };
                Returns: Json;
            };
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
    public: {
        Tables: {
            blog: {
                Row: {
                    author: string;
                    category: string[] | null;
                    content: string;
                    created_at: string | null;
                    featured_image: string | null;
                    id: string;
                    publish_date: string | null;
                    slug: string | null;
                    status: string;
                    tags: string[] | null;
                    title: string;
                    updated_at: string | null;
                };
                Insert: {
                    author: string;
                    category?: string[] | null;
                    content: string;
                    created_at?: string | null;
                    featured_image?: string | null;
                    id?: string;
                    publish_date?: string | null;
                    slug?: string | null;
                    status?: string;
                    tags?: string[] | null;
                    title: string;
                    updated_at?: string | null;
                };
                Update: {
                    author?: string;
                    category?: string[] | null;
                    content?: string;
                    created_at?: string | null;
                    featured_image?: string | null;
                    id?: string;
                    publish_date?: string | null;
                    slug?: string | null;
                    status?: string;
                    tags?: string[] | null;
                    title?: string;
                    updated_at?: string | null;
                };
                Relationships: [];
            };
            carreras: {
                Row: {
                    clasificacion: string | null;
                    created_at: string;
                    description: string | null;
                    duration: number;
                    fecha_examenes: string | null;
                    horarios_cursado: string | null;
                    id: string;
                    instituto_id: number | null;
                    modalidad: string | null;
                    name: string;
                    perfil_egresado: string | null;
                    plan_estudio_url: string | null;
                    resolution_url: string | null;
                    sede: string | null;
                    slug: string;
                };
                Insert: {
                    clasificacion?: string | null;
                    created_at?: string;
                    description?: string | null;
                    duration?: number;
                    fecha_examenes?: string | null;
                    horarios_cursado?: string | null;
                    id?: string;
                    instituto_id?: number | null;
                    modalidad?: string | null;
                    name: string;
                    perfil_egresado?: string | null;
                    plan_estudio_url?: string | null;
                    resolution_url?: string | null;
                    sede?: string | null;
                    slug: string;
                };
                Update: {
                    clasificacion?: string | null;
                    created_at?: string;
                    description?: string | null;
                    duration?: number;
                    fecha_examenes?: string | null;
                    horarios_cursado?: string | null;
                    id?: string;
                    instituto_id?: number | null;
                    modalidad?: string | null;
                    name?: string;
                    perfil_egresado?: string | null;
                    plan_estudio_url?: string | null;
                    resolution_url?: string | null;
                    sede?: string | null;
                    slug?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "carreras_instituto_id_fkey";
                        columns: ["instituto_id"];
                        isOneToOne: false;
                        referencedRelation: "institutos";
                        referencedColumns: ["id"];
                    },
                ];
            };
            config: {
                Row: {
                    created_at: string | null;
                    email: string;
                    horario: string;
                    id: string;
                    logo: string | null;
                    nombre_empresa: string;
                    site_active: boolean;
                    ubicacion: string;
                    updated_at: string | null;
                    wp_link: string | null;
                };
                Insert: {
                    created_at?: string | null;
                    email: string;
                    horario: string;
                    id?: string;
                    logo?: string | null;
                    nombre_empresa: string;
                    site_active?: boolean;
                    ubicacion: string;
                    updated_at?: string | null;
                    wp_link?: string | null;
                };
                Update: {
                    created_at?: string | null;
                    email?: string;
                    horario?: string;
                    id?: string;
                    logo?: string | null;
                    nombre_empresa?: string;
                    site_active?: boolean;
                    ubicacion?: string;
                    updated_at?: string | null;
                    wp_link?: string | null;
                };
                Relationships: [];
            };
            courseCategories: {
                Row: {
                    created_at: string;
                    id: number;
                    last_sync_at: string | null;
                    moodle_category_id: number;
                    moodle_category_id_number: string;
                    moodle_parent_category_id: string | null;
                    name: string;
                };
                Insert: {
                    created_at?: string;
                    id?: number;
                    last_sync_at?: string | null;
                    moodle_category_id: number;
                    moodle_category_id_number: string;
                    moodle_parent_category_id?: string | null;
                    name: string;
                };
                Update: {
                    created_at?: string;
                    id?: number;
                    last_sync_at?: string | null;
                    moodle_category_id?: number;
                    moodle_category_id_number?: string;
                    moodle_parent_category_id?: string | null;
                    name?: string;
                };
                Relationships: [];
            };
            courses: {
                Row: {
                    category_id: number | null;
                    created_at: string;
                    displayName: string | null;
                    featured_img: string | null;
                    fullname: string | null;
                    id: number;
                    last_sync_at: string | null;
                    modalidad: string | null;
                    moodle_course_id: string;
                    price: number | null;
                    shortname: string | null;
                    summary: string | null;
                    tags: string | null;
                };
                Insert: {
                    category_id?: number | null;
                    created_at?: string;
                    displayName?: string | null;
                    featured_img?: string | null;
                    fullname?: string | null;
                    id?: number;
                    last_sync_at?: string | null;
                    modalidad?: string | null;
                    moodle_course_id: string;
                    price?: number | null;
                    shortname?: string | null;
                    summary?: string | null;
                    tags?: string | null;
                };
                Update: {
                    category_id?: number | null;
                    created_at?: string;
                    displayName?: string | null;
                    featured_img?: string | null;
                    fullname?: string | null;
                    id?: number;
                    last_sync_at?: string | null;
                    modalidad?: string | null;
                    moodle_course_id?: string;
                    price?: number | null;
                    shortname?: string | null;
                    summary?: string | null;
                    tags?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "courses_category_id_fkey";
                        columns: ["category_id"];
                        isOneToOne: false;
                        referencedRelation: "courseCategories";
                        referencedColumns: ["moodle_category_id"];
                    },
                ];
            };
            extension: {
                Row: {
                    carga_horaria: number;
                    created_at: string;
                    descripcion: string | null;
                    duration: string | null;
                    featured_img: string | null;
                    id: string;
                    modalidad: string;
                    nombre: string;
                    objetivo: string | null;
                    precio: number;
                    slug: string;
                    tipo: string;
                    updated_at: string;
                };
                Insert: {
                    carga_horaria: number;
                    created_at?: string;
                    descripcion?: string | null;
                    duration?: string | null;
                    featured_img?: string | null;
                    id?: string;
                    modalidad: string;
                    nombre: string;
                    objetivo?: string | null;
                    precio?: number;
                    slug: string;
                    tipo: string;
                    updated_at?: string;
                };
                Update: {
                    carga_horaria?: number;
                    created_at?: string;
                    descripcion?: string | null;
                    duration?: string | null;
                    featured_img?: string | null;
                    id?: string;
                    modalidad?: string;
                    nombre?: string;
                    objetivo?: string | null;
                    precio?: number;
                    slug?: string;
                    tipo?: string;
                    updated_at?: string;
                };
                Relationships: [];
            };
            horarios_cursado: {
                Row: {
                    anio: number;
                    carrera_id: string;
                    created_at: string;
                    cuatrimestre: number;
                    dia: string;
                    id: string;
                    sede: string;
                };
                Insert: {
                    anio: number;
                    carrera_id: string;
                    created_at?: string;
                    cuatrimestre: number;
                    dia: string;
                    id?: string;
                    sede?: string;
                };
                Update: {
                    anio?: number;
                    carrera_id?: string;
                    created_at?: string;
                    cuatrimestre?: number;
                    dia?: string;
                    id?: string;
                    sede?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "horarios_cursado_carrera_id_fkey";
                        columns: ["carrera_id"];
                        isOneToOne: false;
                        referencedRelation: "carreras";
                        referencedColumns: ["id"];
                    },
                ];
            };
            horarios_cursado_detalle: {
                Row: {
                    docente: string;
                    horario_hora: string;
                    horario_id: string;
                    id: string;
                    materia: string;
                    modalidad: string;
                    orden: number;
                };
                Insert: {
                    docente?: string;
                    horario_hora?: string;
                    horario_id: string;
                    id?: string;
                    materia: string;
                    modalidad?: string;
                    orden?: number;
                };
                Update: {
                    docente?: string;
                    horario_hora?: string;
                    horario_id?: string;
                    id?: string;
                    materia?: string;
                    modalidad?: string;
                    orden?: number;
                };
                Relationships: [
                    {
                        foreignKeyName: "horarios_cursado_detalle_horario_id_fkey";
                        columns: ["horario_id"];
                        isOneToOne: false;
                        referencedRelation: "horarios_cursado";
                        referencedColumns: ["id"];
                    },
                ];
            };
            horarios_examenes: {
                Row: {
                    carrera_id: string;
                    created_at: string;
                    dia: string;
                    id: string;
                    mes: string;
                    sede: string;
                };
                Insert: {
                    carrera_id: string;
                    created_at?: string;
                    dia: string;
                    id?: string;
                    mes: string;
                    sede?: string;
                };
                Update: {
                    carrera_id?: string;
                    created_at?: string;
                    dia?: string;
                    id?: string;
                    mes?: string;
                    sede?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "horarios_examenes_carrera_id_fkey";
                        columns: ["carrera_id"];
                        isOneToOne: false;
                        referencedRelation: "carreras";
                        referencedColumns: ["id"];
                    },
                ];
            };
            horarios_examenes_detalle: {
                Row: {
                    docente: string;
                    horario_hora: string;
                    horario_id: string;
                    id: string;
                    materia: string;
                    modalidad: string;
                    orden: number;
                };
                Insert: {
                    docente?: string;
                    horario_hora?: string;
                    horario_id: string;
                    id?: string;
                    materia: string;
                    modalidad?: string;
                    orden?: number;
                };
                Update: {
                    docente?: string;
                    horario_hora?: string;
                    horario_id?: string;
                    id?: string;
                    materia?: string;
                    modalidad?: string;
                    orden?: number;
                };
                Relationships: [
                    {
                        foreignKeyName: "horarios_examenes_detalle_horario_id_fkey";
                        columns: ["horario_id"];
                        isOneToOne: false;
                        referencedRelation: "horarios_examenes";
                        referencedColumns: ["id"];
                    },
                ];
            };
            institutos: {
                Row: {
                    created_at: string;
                    director: string | null;
                    id: number;
                    mision: string | null;
                    name: string | null;
                    objetivos: string | null;
                    secretario: string | null;
                };
                Insert: {
                    created_at?: string;
                    director?: string | null;
                    id?: number;
                    mision?: string | null;
                    name?: string | null;
                    objetivos?: string | null;
                    secretario?: string | null;
                };
                Update: {
                    created_at?: string;
                    director?: string | null;
                    id?: number;
                    mision?: string | null;
                    name?: string | null;
                    objetivos?: string | null;
                    secretario?: string | null;
                };
                Relationships: [];
            };
            media: {
                Row: {
                    alt: string | null;
                    created_at: string | null;
                    description: string | null;
                    file_name: string;
                    file_size: number | null;
                    id: string;
                    mime_type: string | null;
                    slug: string;
                    storage_url: string;
                    title: string | null;
                    updated_at: string | null;
                };
                Insert: {
                    alt?: string | null;
                    created_at?: string | null;
                    description?: string | null;
                    file_name: string;
                    file_size?: number | null;
                    id?: string;
                    mime_type?: string | null;
                    slug: string;
                    storage_url: string;
                    title?: string | null;
                    updated_at?: string | null;
                };
                Update: {
                    alt?: string | null;
                    created_at?: string | null;
                    description?: string | null;
                    file_name?: string;
                    file_size?: number | null;
                    id?: string;
                    mime_type?: string | null;
                    slug?: string;
                    storage_url?: string;
                    title?: string | null;
                    updated_at?: string | null;
                };
                Relationships: [];
            };
            orders: {
                Row: {
                    cantidad: number;
                    course_id: number | null;
                    created_at: string | null;
                    dni: string | null;
                    email: string | null;
                    id: string;
                    is_processed: boolean;
                    legajo: string | null;
                    moodle_course_id: number | null;
                    moodle_user_id: number | null;
                    nombre: string | null;
                    observaciones: string | null;
                    payment_id: string;
                    process_date: string | null;
                    provision_error: string | null;
                    service_id: string | null;
                    service_name: string | null;
                    service_price: number | null;
                    service_total_paid: number | null;
                    status: string | null;
                    student_id: string | null;
                    telefono: string | null;
                    updated_at: string | null;
                };
                Insert: {
                    cantidad?: number;
                    course_id?: number | null;
                    created_at?: string | null;
                    dni?: string | null;
                    email?: string | null;
                    id?: string;
                    is_processed?: boolean;
                    legajo?: string | null;
                    moodle_course_id?: number | null;
                    moodle_user_id?: number | null;
                    nombre?: string | null;
                    observaciones?: string | null;
                    payment_id: string;
                    process_date?: string | null;
                    provision_error?: string | null;
                    service_id?: string | null;
                    service_name?: string | null;
                    service_price?: number | null;
                    service_total_paid?: number | null;
                    status?: string | null;
                    student_id?: string | null;
                    telefono?: string | null;
                    updated_at?: string | null;
                };
                Update: {
                    cantidad?: number;
                    course_id?: number | null;
                    created_at?: string | null;
                    dni?: string | null;
                    email?: string | null;
                    id?: string;
                    is_processed?: boolean;
                    legajo?: string | null;
                    moodle_course_id?: number | null;
                    moodle_user_id?: number | null;
                    nombre?: string | null;
                    observaciones?: string | null;
                    payment_id?: string;
                    process_date?: string | null;
                    provision_error?: string | null;
                    service_id?: string | null;
                    service_name?: string | null;
                    service_price?: number | null;
                    service_total_paid?: number | null;
                    status?: string | null;
                    student_id?: string | null;
                    telefono?: string | null;
                    updated_at?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "orders_course_id_fkey";
                        columns: ["course_id"];
                        isOneToOne: false;
                        referencedRelation: "courses";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "orders_payment_id_fkey";
                        columns: ["payment_id"];
                        isOneToOne: false;
                        referencedRelation: "payments";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "orders_service_id_fkey";
                        columns: ["service_id"];
                        isOneToOne: false;
                        referencedRelation: "services";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "orders_student_id_fkey";
                        columns: ["student_id"];
                        isOneToOne: false;
                        referencedRelation: "students";
                        referencedColumns: ["id"];
                    },
                ];
            };
            payments: {
                Row: {
                    course_id: number | null;
                    created_at: string | null;
                    fecha_aprobacion: string | null;
                    id: string;
                    link: string | null;
                    monto: number;
                    mp_response: Json | null;
                    order_id: string | null;
                    payment_id: string | null;
                    payment_method: string | null;
                    payment_type: string | null;
                    preference_id: string | null;
                    service_id: string | null;
                    status: string;
                    status_detail: string | null;
                    updated_at: string | null;
                };
                Insert: {
                    course_id?: number | null;
                    created_at?: string | null;
                    fecha_aprobacion?: string | null;
                    id?: string;
                    link?: string | null;
                    monto: number;
                    mp_response?: Json | null;
                    order_id?: string | null;
                    payment_id?: string | null;
                    payment_method?: string | null;
                    payment_type?: string | null;
                    preference_id?: string | null;
                    service_id?: string | null;
                    status?: string;
                    status_detail?: string | null;
                    updated_at?: string | null;
                };
                Update: {
                    course_id?: number | null;
                    created_at?: string | null;
                    fecha_aprobacion?: string | null;
                    id?: string;
                    link?: string | null;
                    monto?: number;
                    mp_response?: Json | null;
                    order_id?: string | null;
                    payment_id?: string | null;
                    payment_method?: string | null;
                    payment_type?: string | null;
                    preference_id?: string | null;
                    service_id?: string | null;
                    status?: string;
                    status_detail?: string | null;
                    updated_at?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "payments_course_id_fkey";
                        columns: ["course_id"];
                        isOneToOne: false;
                        referencedRelation: "courses";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "payments_order_id_fkey";
                        columns: ["order_id"];
                        isOneToOne: false;
                        referencedRelation: "orders";
                        referencedColumns: ["id"];
                    },
                    {
                        foreignKeyName: "payments_service_id_fkey";
                        columns: ["service_id"];
                        isOneToOne: false;
                        referencedRelation: "services";
                        referencedColumns: ["id"];
                    },
                ];
            };
            posgrados: {
                Row: {
                    created_at: string;
                    description: string;
                    duration: number;
                    featured_img: string | null;
                    fecha_examenes: string;
                    horarios_cursado: string;
                    id: string;
                    instituto_id: number | null;
                    modalidad: string;
                    name: string;
                    perfil_egresado: string;
                    plan_estudio_url: string;
                    resolution_url: string;
                    sede: string;
                    slug: string;
                    tipo: string;
                };
                Insert: {
                    created_at?: string;
                    description: string;
                    duration?: number;
                    featured_img?: string | null;
                    fecha_examenes: string;
                    horarios_cursado: string;
                    id?: string;
                    instituto_id?: number | null;
                    modalidad: string;
                    name: string;
                    perfil_egresado: string;
                    plan_estudio_url: string;
                    resolution_url: string;
                    sede: string;
                    slug: string;
                    tipo: string;
                };
                Update: {
                    created_at?: string;
                    description?: string;
                    duration?: number;
                    featured_img?: string | null;
                    fecha_examenes?: string;
                    horarios_cursado?: string;
                    id?: string;
                    instituto_id?: number | null;
                    modalidad?: string;
                    name?: string;
                    perfil_egresado?: string;
                    plan_estudio_url?: string;
                    resolution_url?: string;
                    sede?: string;
                    slug?: string;
                    tipo?: string;
                };
                Relationships: [
                    {
                        foreignKeyName: "posgrados_instituto_id_fkey";
                        columns: ["instituto_id"];
                        isOneToOne: false;
                        referencedRelation: "institutos";
                        referencedColumns: ["id"];
                    },
                ];
            };
            profile: {
                Row: {
                    avatar: string | null;
                    created_at: string | null;
                    email: string;
                    id: string;
                    last_login_at: string | null;
                    name: string;
                    phone: string | null;
                    role: Database["public"]["Enums"]["user_role"];
                    updated_at: string | null;
                };
                Insert: {
                    avatar?: string | null;
                    created_at?: string | null;
                    email: string;
                    id: string;
                    last_login_at?: string | null;
                    name: string;
                    phone?: string | null;
                    role?: Database["public"]["Enums"]["user_role"];
                    updated_at?: string | null;
                };
                Update: {
                    avatar?: string | null;
                    created_at?: string | null;
                    email?: string;
                    id?: string;
                    last_login_at?: string | null;
                    name?: string;
                    phone?: string | null;
                    role?: Database["public"]["Enums"]["user_role"];
                    updated_at?: string | null;
                };
                Relationships: [];
            };
            revistas_cientificas: {
                Row: {
                    area: string;
                    created_at: string;
                    description: string | null;
                    id: string;
                    image: string | null;
                    is_active: boolean;
                    link: string | null;
                    title: string;
                    updated_at: string;
                };
                Insert: {
                    area: string;
                    created_at?: string;
                    description?: string | null;
                    id?: string;
                    image?: string | null;
                    is_active?: boolean;
                    link?: string | null;
                    title: string;
                    updated_at?: string;
                };
                Update: {
                    area?: string;
                    created_at?: string;
                    description?: string | null;
                    id?: string;
                    image?: string | null;
                    is_active?: boolean;
                    link?: string | null;
                    title?: string;
                    updated_at?: string;
                };
                Relationships: [];
            };
            service_type: {
                Row: {
                    created_at: string;
                    id: number;
                    nombre: string;
                    slug: string | null;
                };
                Insert: {
                    created_at?: string;
                    id?: number;
                    nombre: string;
                    slug?: string | null;
                };
                Update: {
                    created_at?: string;
                    id?: number;
                    nombre?: string;
                    slug?: string | null;
                };
                Relationships: [];
            };
            services: {
                Row: {
                    codigo: string;
                    created_at: string | null;
                    descripcion: string | null;
                    id: string;
                    is_active: boolean | null;
                    nombre: string;
                    precio: number;
                    tipo: number;
                    tipo_legacy: string | null;
                    updated_at: string | null;
                };
                Insert: {
                    codigo: string;
                    created_at?: string | null;
                    descripcion?: string | null;
                    id?: string;
                    is_active?: boolean | null;
                    nombre: string;
                    precio: number;
                    tipo: number;
                    tipo_legacy?: string | null;
                    updated_at?: string | null;
                };
                Update: {
                    codigo?: string;
                    created_at?: string | null;
                    descripcion?: string | null;
                    id?: string;
                    is_active?: boolean | null;
                    nombre?: string;
                    precio?: number;
                    tipo?: number;
                    tipo_legacy?: string | null;
                    updated_at?: string | null;
                };
                Relationships: [
                    {
                        foreignKeyName: "services_tipo_fkey";
                        columns: ["tipo"];
                        isOneToOne: false;
                        referencedRelation: "service_type";
                        referencedColumns: ["id"];
                    },
                ];
            };
            students: {
                Row: {
                    created_at: string;
                    email: string;
                    id: string;
                    moodle_user_id: number | null;
                    name: string | null;
                };
                Insert: {
                    created_at?: string;
                    email: string;
                    id?: string;
                    moodle_user_id?: number | null;
                    name?: string | null;
                };
                Update: {
                    created_at?: string;
                    email?: string;
                    id?: string;
                    moodle_user_id?: number | null;
                    name?: string | null;
                };
                Relationships: [];
            };
            utilidades: {
                Row: {
                    activo: boolean;
                    archivo_nombre: string;
                    archivo_tipo: string;
                    archivo_url: string;
                    created_at: string;
                    id: string;
                    notas: Json;
                    tipo: string;
                    titulo: string;
                    updated_at: string;
                };
                Insert: {
                    activo?: boolean;
                    archivo_nombre: string;
                    archivo_tipo: string;
                    archivo_url: string;
                    created_at?: string;
                    id?: string;
                    notas?: Json;
                    tipo: string;
                    titulo: string;
                    updated_at?: string;
                };
                Update: {
                    activo?: boolean;
                    archivo_nombre?: string;
                    archivo_tipo?: string;
                    archivo_url?: string;
                    created_at?: string;
                    id?: string;
                    notas?: Json;
                    tipo?: string;
                    titulo?: string;
                    updated_at?: string;
                };
                Relationships: [];
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            generate_slug: { Args: { text_input: string }; Returns: string };
            immutable_unaccent: { Args: { "": string }; Returns: string };
            remove_accents: { Args: { input: string }; Returns: string };
            search_global: {
                Args: {
                    filter_types?: string[];
                    page_num?: number;
                    q: string;
                    result_limit?: number;
                    similarity_threshold?: number;
                };
                Returns: {
                    description: string;
                    id: string;
                    image: string;
                    metadata: Json;
                    title: string;
                    type: string;
                    url: string;
                }[];
            };
            search_global_count: {
                Args: {
                    filter_types?: string[];
                    q: string;
                    similarity_threshold?: number;
                };
                Returns: number;
            };
        };
        Enums: {
            user_role: "administrador" | "academica" | "comunicaciones";
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
    keyof Database,
    "public"
>];

export type Tables<
    DefaultSchemaTableNameOrOptions extends
        | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
        | { schema: keyof DatabaseWithoutInternals },
    TableName extends DefaultSchemaTableNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals;
    }
        ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
              DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
        : never = never,
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
}
    ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
          DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
          Row: infer R;
      }
        ? R
        : never
    : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
            DefaultSchema["Views"])
      ? (DefaultSchema["Tables"] &
            DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
            Row: infer R;
        }
          ? R
          : never
      : never;

export type TablesInsert<
    DefaultSchemaTableNameOrOptions extends
        | keyof DefaultSchema["Tables"]
        | { schema: keyof DatabaseWithoutInternals },
    TableName extends DefaultSchemaTableNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals;
    }
        ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
}
    ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Insert: infer I;
      }
        ? I
        : never
    : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
      ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
            Insert: infer I;
        }
          ? I
          : never
      : never;

export type TablesUpdate<
    DefaultSchemaTableNameOrOptions extends
        | keyof DefaultSchema["Tables"]
        | { schema: keyof DatabaseWithoutInternals },
    TableName extends DefaultSchemaTableNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals;
    }
        ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
        : never = never,
> = DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
}
    ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
          Update: infer U;
      }
        ? U
        : never
    : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
      ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
            Update: infer U;
        }
          ? U
          : never
      : never;

export type Enums<
    DefaultSchemaEnumNameOrOptions extends
        | keyof DefaultSchema["Enums"]
        | { schema: keyof DatabaseWithoutInternals },
    EnumName extends DefaultSchemaEnumNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals;
    }
        ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
        : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
}
    ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
    : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
      ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
      : never;

export type CompositeTypes<
    PublicCompositeTypeNameOrOptions extends
        | keyof DefaultSchema["CompositeTypes"]
        | { schema: keyof DatabaseWithoutInternals },
    CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
        schema: keyof DatabaseWithoutInternals;
    }
        ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
        : never = never,
> = PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
}
    ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
    : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
      ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
      : never;

export const Constants = {
    graphql_public: {
        Enums: {},
    },
    public: {
        Enums: {
            user_role: ["administrador", "academica", "comunicaciones"],
        },
    },
} as const;
