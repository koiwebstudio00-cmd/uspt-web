import InstitutoTemplate from "@/components/InstitutoTemplate";
import { useInstitutoById } from "@/hooks/use-instituto-by-id";
import { transformInstitutoData } from "@/lib/utils/transform-instituto";
import { Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

// ID del Instituto de Estudios Sociales, Política y Cultura
const INSTITUTO_SOCIALES_ID = 3;

const InstitutoSociales = () => {
    const { instituto, carreras, loading, error } = useInstitutoById(
        INSTITUTO_SOCIALES_ID
    );

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center space-y-4">
                    <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                    <p className="text-muted-foreground">
                        Cargando información del instituto...
                    </p>
                </div>
            </div>
        );
    }

    // Error state
    if (error || !instituto) {
        return <Navigate to="/institutos" replace />;
    }

    // Transform Supabase data to template format
    const instituteData = transformInstitutoData(instituto, carreras);

    return (
        <InstitutoTemplate
            institute={instituteData}
            slug="estudios-sociales-politica-cultura"
        />
    );
};

export default InstitutoSociales;
