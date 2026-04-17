import { supabase } from "../supabase/client";
import type { DbId, Service, ServiceTypeRecord } from "../types/database";

function normalizeDbId(value: DbId): DbId {
    if (typeof value === "string" && /^\d+$/.test(value)) {
        return Number(value);
    }
    return value;
}

function isSlug(value: string): boolean {
    return /[a-zA-Z_-]/.test(value);
}

/**
 * Fetch all active services
 * Uses select optimization to only fetch needed fields
 */
export async function getActiveServices(): Promise<Service[]> {
    const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("is_active", true)
        .order("nombre", { ascending: true });

    if (error) {
        console.error("Error fetching services:", error);
        throw new Error("Failed to fetch services");
    }

    return (data || []) as Service[];
}

export async function getServiceTypeById(id: DbId): Promise<ServiceTypeRecord | null> {
    const normalizedId = normalizeDbId(id);
    const { data, error } = await supabase
        .from("service_type")
        .select("id, nombre, slug, created_at")
        .eq("id", normalizedId)
        .single();

    if (error) {
        if (error.code === "PGRST116") {
            return null;
        }
        console.error(`Error fetching service type by id ${id}:`, error);
        throw new Error(`Failed to fetch service type ${id}`);
    }

    return data as ServiceTypeRecord;
}

export async function getServiceTypeBySlug(
    slug: string,
): Promise<ServiceTypeRecord | null> {
    const normalizedSlug = slug.trim();
    const { data, error } = await supabase
        .from("service_type")
        .select("id, nombre, slug, created_at")
        .eq("slug", normalizedSlug)
        .single();

    if (error) {
        if (error.code === "PGRST116") {
            return null;
        }
        console.error(`Error fetching service type by slug ${slug}:`, error);
        throw new Error(`Failed to fetch service type ${slug}`);
    }

    return data as ServiceTypeRecord;
}

export async function getActiveServiceTypesWithServices(): Promise<
    ServiceTypeRecord[]
> {
    const { data: rows, error: servicesError } = await supabase
        .from("services")
        .select("tipo")
        .eq("is_active", true);

    if (servicesError) {
        console.error("Error fetching active services types:", servicesError);
        throw new Error("Failed to fetch active service types");
    }

    const ids = Array.from(
        new Set((rows ?? []).map((row) => normalizeDbId(row.tipo as DbId))),
    );

    if (ids.length === 0) {
        return [];
    }

    const { data: types, error: typesError } = await supabase
        .from("service_type")
        .select("id, nombre, slug, created_at")
        .in("id", ids)
        .order("nombre", { ascending: true });

    if (typesError) {
        console.error("Error fetching service_type records:", typesError);
        throw new Error("Failed to fetch service type records");
    }

    const resolvedTypes = (types ?? []) as ServiceTypeRecord[];
    if (resolvedTypes.length > 0) {
        return resolvedTypes;
    }

    // Fallback defensivo: si no hay acceso a service_type por políticas/RLS,
    // igual exponemos accesos por id de tipo para no dejar la UI vacía.
    return ids.map((id) => ({
        id,
        nombre: `Servicio ${id}`,
        slug: null,
        created_at: new Date().toISOString(),
    }));
}

/**
 * Fetch services by type (tramite, reserva, dia_del_estudiante)
 * Optimized for specific service type queries
 */
export async function getServicesByType(
    tipo: DbId | string
): Promise<Service[]> {
    let typeId: DbId;
    if (typeof tipo === "string" && isSlug(tipo)) {
        const normalizedSearch = tipo.trim();
        const serviceType = await getServiceTypeBySlug(normalizedSearch);

        if (serviceType) {
            typeId = serviceType.id;
        } else {
            const escaped = normalizedSearch.replace(/[%_]/g, "\\$&");
            const { data: fallbackTypes, error: fallbackError } = await supabase
                .from("service_type")
                .select("id")
                .or(
                    `slug.ilike.%${escaped}%,nombre.ilike.%${escaped}%`,
                )
                .limit(1);

            if (fallbackError) {
                console.error(
                    `Error finding service type fallback for ${normalizedSearch}:`,
                    fallbackError,
                );
                throw new Error(
                    `Failed to find service type fallback for ${normalizedSearch}`,
                );
            }

            const fallbackId = fallbackTypes?.[0]?.id;
            if (!fallbackId) {
                return [];
            }
            typeId = fallbackId as DbId;
        }
    } else {
        typeId = normalizeDbId(tipo as DbId);
    }

    const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("tipo", typeId)
        .eq("is_active", true)
        .order("nombre", { ascending: true });

    if (error) {
        console.error(`Error fetching services of type ${String(tipo)}:`, error);
        throw new Error(`Failed to fetch ${String(tipo)} services`);
    }

    return (data || []) as Service[];
}

/**
 * Fetch a single service by codigo
 * Optimized for single service lookup
 */
export async function getServiceByCodigo(
    codigo: string
): Promise<Service | null> {
    const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("codigo", codigo)
        .eq("is_active", true)
        .single();

    if (error) {
        if (error.code === "PGRST116") {
            // No rows returned
            return null;
        }
        console.error(`Error fetching service with codigo ${codigo}:`, error);
        throw new Error(`Failed to fetch service ${codigo}`);
    }

    return data as Service;
}

/**
 * Fetch a single service by ID
 */
export async function getServiceById(id: string): Promise<Service | null> {
    const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("id", id)
        .eq("is_active", true)
        .single();

    if (error) {
        if (error.code === "PGRST116") {
            return null;
        }
        console.error(`Error fetching service with id ${id}:`, error);
        throw new Error(`Failed to fetch service ${id}`);
    }

    return data as Service;
}
