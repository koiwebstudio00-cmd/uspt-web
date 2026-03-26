import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";

interface Service {
    nombre: string;
    precio: number;
}

interface Course {
    id: number;
    displayName: string | null;
    fullname: string | null;
    price: number | null;
}

interface Payment {
    monto: number;
    status: string;
    payment_id?: string | null;
    payment_method: string | null;
    preference_id: string | null;
}

export interface OrderDetails {
    id: string;
    dni: string | null;
    nombre: string | null;
    email: string | null;
    cantidad: number;
    is_processed: boolean;
    process_date: string | null;
    status: string | null;
    service: Service | null;
    course: Course | null;
    legajo: string | null;
    payment_id: string | null;
    total: number;
}

interface UseOrderDetailsResult {
    order: OrderDetails | null;
    loading: boolean;
    error: string | null;
}

/**
 * Custom hook to fetch order details by external_reference (order ID)
 * Includes related service and payment information
 */

function getStatus(status: string) {
    switch (status) {
        case "pendiente":
            return "Pendiente";
        case "paid":
            return "Pagado";
        case "rechazado":
            return "Rechazado";
        case "error":
            return "Error";
        default:
            return "Estado Desconocido";
    }
}

function getLast4Digits(item: string) {
    return item.slice(-4);
}

export function useOrderDetails(
    externalReference: string | null,
): UseOrderDetailsResult {
    const [order, setOrder] = useState<OrderDetails | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchOrderDetails() {
            if (!externalReference) {
                if (isMounted) {
                    setError("No se proporcionó ID de orden");
                    setLoading(false);
                }
                return;
            }

            try {
                setLoading(true);
                setError(null);

                // 1. Obtener la orden básica
                const { data: orderData, error: queryError } = await supabase
                    .from("orders")
                    .select("*")
                    .eq("id", externalReference.toString())
                    .single();

                if (queryError) {
                    throw queryError;
                }

                if (!orderData) {
                    throw new Error("Orden no encontrada");
                }

                // 2. Obtener el servicio asociado si existe
                let serviceData: Service | null = null;
                if (orderData.service_id) {
                    const { data: service, error: serviceError } =
                        await supabase
                            .from("services")
                            .select("nombre, precio")
                            .eq("id", orderData.service_id)
                            .single();

                    if (!serviceError && service) {
                        serviceData = service;
                    }
                }

                // 3. Obtener el curso asociado si existe
                let courseData: Course | null = null;
                if (orderData.course_id) {
                    const { data: course, error: courseError } = await supabase
                        .from("courses")
                        .select("id, displayName, fullname, price")
                        .eq("id", orderData.course_id)
                        .single();

                    if (!courseError && course) {
                        courseData = course;
                    }
                }

                // 4. Combinar los datos
                if (isMounted) {
                    // Determinar el precio total basado en si es servicio o curso
                    let itemPrice = 0;
                    if (serviceData) {
                        itemPrice = serviceData.precio;
                    } else if (courseData && courseData.price) {
                        itemPrice = courseData.price;
                    }

                    const transformedData: OrderDetails = {
                        id: getLast4Digits(orderData.id),
                        dni: orderData.dni,
                        legajo: orderData.legajo,
                        nombre: orderData.nombre,
                        email: orderData.email,
                        cantidad: orderData.cantidad,
                        is_processed: orderData.is_processed,
                        process_date: orderData.process_date,
                        status: getStatus(orderData.status),
                        service: serviceData,
                        course: courseData,
                        total: itemPrice * orderData.cantidad,
                        payment_id: getLast4Digits(orderData.payment_id),
                    };

                    setOrder(transformedData);
                }
            } catch (err) {
                if (isMounted) {
                    setError(
                        err instanceof Error
                            ? err.message
                            : "Error al cargar detalles de la orden",
                    );
                    console.error("Error loading order details:", err);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        }

        fetchOrderDetails();

        return () => {
            isMounted = false;
        };
    }, [externalReference]);

    return { order, loading, error };
}
