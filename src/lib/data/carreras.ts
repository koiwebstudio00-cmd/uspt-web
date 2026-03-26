import { supabase } from "../supabase/client";
import type { Carrera, Instituto } from "../types/database";

/**
 * Fetch all carreras with their instituto information
 * Uses join to get instituto data in a single query
 */
export async function getCarrerasWithInstituto(): Promise<
    (Carrera & { instituto: Instituto })[]
> {
    const { data, error } = await supabase
        .from("carreras")
        .select(
            `
      *,
      instituto:institutos!carreras_instituto_id_fkey(*)
    `
        )
        .order("name", { ascending: true });

    if (error) {
        console.error("Error fetching carreras with instituto:", error);
        throw new Error("Failed to fetch carreras");
    }

    return (data as (Carrera & { instituto: Instituto })[]) || [];
}

/**
 * Fetch all carreras (without instituto details)
 * Optimized for when you don't need instituto information
 */
export async function getCarreras(): Promise<Carrera[]> {
    const { data, error } = await supabase
        .from("carreras")
        .select("*")
        .order("name", { ascending: true });

    if (error) {
        console.error("Error fetching carreras:", error);
        throw new Error("Failed to fetch carreras");
    }

    return data || [];
}

/**
 * Fetch carreras by instituto ID
 */
export async function getCarrerasByInstituto(
    institutoId: number
): Promise<Carrera[]> {
    const { data, error } = await supabase
        .from("carreras")
        .select("*")
        .eq("instituto_id", institutoId)
        .order("name", { ascending: true });

    if (error) {
        console.error(
            `Error fetching carreras for instituto ${institutoId}:`,
            error
        );
        throw new Error(
            `Failed to fetch carreras for instituto ${institutoId}`
        );
    }

    return data || [];
}

/**
 * Fetch a single carrera by ID with instituto information
 */
export async function getCarreraById(
    id: string
): Promise<(Carrera & { instituto: Instituto }) | null> {
    const { data, error } = await supabase
        .from("carreras")
        .select(
            `
      *,
      instituto:institutos!carreras_instituto_id_fkey(*)
    `
        )
        .eq("id", id)
        .single();

    if (error) {
        if (error.code === "PGRST116") {
            return null;
        }
        console.error(`Error fetching carrera with id ${id}:`, error);
        throw new Error(`Failed to fetch carrera ${id}`);
    }

    return data as Carrera & { instituto: Instituto };
}

/**
 * Fetch all institutos
 */
export async function getInstitutos(): Promise<Instituto[]> {
    const { data, error } = await supabase
        .from("institutos")
        .select("*")
        .order("name", { ascending: true });

    if (error) {
        console.error("Error fetching institutos:", error);
        throw new Error("Failed to fetch institutos");
    }

    return data || [];
}

/**
 * Fetch a single instituto by ID
 */
export async function getInstitutoById(id: number): Promise<Instituto | null> {
    const { data, error } = await supabase
        .from("institutos")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        if (error.code === "PGRST116") {
            return null;
        }
        console.error(`Error fetching instituto with id ${id}:`, error);
        throw new Error(`Failed to fetch instituto ${id}`);
    }

    return data;
}

/**
 * Fetch all data in parallel for maximum performance
 * Use this when you need both carreras and institutos
 */
export async function getCarrerasAndInstitutos(): Promise<{
    carreras: Carrera[];
    institutos: Instituto[];
}> {
    const [carrerasResult, institutosResult] = await Promise.all([
        supabase
            .from("carreras")
            .select("*")
            .order("name", { ascending: true }),
        supabase
            .from("institutos")
            .select("*")
            .order("name", { ascending: true }),
    ]);

    if (carrerasResult.error) {
        console.error("Error fetching carreras:", carrerasResult.error);
        throw new Error("Failed to fetch carreras");
    }

    if (institutosResult.error) {
        console.error("Error fetching institutos:", institutosResult.error);
        throw new Error("Failed to fetch institutos");
    }

    return {
        carreras: carrerasResult.data || [],
        institutos: institutosResult.data || [],
    };
}
