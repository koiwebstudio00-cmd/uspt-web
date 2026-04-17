import { useEffect, useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import ServiceTypePaymentTemplate from "@/components/payments/ServiceTypePaymentTemplate";
import { getServiceTypeById } from "@/lib/data/services";
import type { DbId } from "@/lib/types/database";

const SPECIAL_TYPE_ROUTES: Record<string, string> = {
    reserva: "/pagos/reserva-san-pablo",
    dia_del_estudiante: "/pagos/dia-estudiante",
    tramite: "/pagos/tramites-varios",
};

function normalizeText(value: string): string {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}

function getSpecialTypeRoute(slug?: string | null, nombre?: string): string | null {
    const normalizedSlug = normalizeText(slug ?? "");
    const normalizedName = normalizeText(nombre ?? "");

    if (normalizedSlug === "reserva" || normalizedName.includes("reserva")) {
        return "/pagos/reserva-san-pablo";
    }

    if (
        normalizedSlug === "dia_del_estudiante" ||
        normalizedName.includes("dia del estudiante")
    ) {
        return "/pagos/dia-estudiante";
    }

    if (normalizedSlug === "tramite" || normalizedName.includes("tramite")) {
        return "/pagos/tramites-varios";
    }

    return null;
}

const PagoServicioTipo = () => {
    const { typeId } = useParams<{ typeId: string }>();
    const [resolvedRoute, setResolvedRoute] = useState<string | null>(null);
    const [isResolving, setIsResolving] = useState(true);

    const normalizedTypeId = useMemo(() => {
        if (!typeId) return undefined;
        return /^\d+$/.test(typeId) ? Number(typeId) : typeId;
    }, [typeId]);

    useEffect(() => {
        let isMounted = true;

        async function resolveSpecialRoute() {
            try {
                setIsResolving(true);
                setResolvedRoute(null);

                if (!typeId) {
                    return;
                }

                const directSpecial = SPECIAL_TYPE_ROUTES[typeId];
                if (directSpecial) {
                    if (isMounted) setResolvedRoute(directSpecial);
                    return;
                }

                if (!normalizedTypeId) {
                    return;
                }

                const serviceType = await getServiceTypeById(
                    normalizedTypeId as DbId,
                );
                const inferredSpecial = getSpecialTypeRoute(
                    serviceType?.slug,
                    serviceType?.nombre,
                );
                if (isMounted && inferredSpecial) {
                    setResolvedRoute(inferredSpecial);
                }
            } finally {
                if (isMounted) {
                    setIsResolving(false);
                }
            }
        }

        resolveSpecialRoute();

        return () => {
            isMounted = false;
        };
    }, [typeId, normalizedTypeId]);

    if (resolvedRoute) {
        return <Navigate to={resolvedRoute} replace />;
    }

    if (isResolving) {
        return null;
    }

    if (!normalizedTypeId) {
        return <Navigate to="/pagos-online" replace />;
    }

    return <ServiceTypePaymentTemplate typeId={normalizedTypeId} />;
};

export default PagoServicioTipo;
