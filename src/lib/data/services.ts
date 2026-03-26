import { supabase } from "../supabase/client";
import type { Service, ServiceType } from "../types/database";

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

/**
 * Fetch services by type (tramite, reserva, dia_del_estudiante)
 * Optimized for specific service type queries
 */
export async function getServicesByType(
    tipo: ServiceType | string
): Promise<Service[]> {
    const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("tipo", tipo)
        .eq("is_active", true)
        .order("nombre", { ascending: true });

    if (error) {
        console.error(`Error fetching services of type ${tipo}:`, error);
        throw new Error(`Failed to fetch ${tipo} services`);
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
