import { useParams, Navigate } from "react-router-dom";
import { useCarreraBySlug } from "@/hooks/use-carrera-by-slug";
import CarreraTemplate from "@/components/CarreraTemplate";
import { Loader2 } from "lucide-react";

const CarreraDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { carrera, relatedCareers, loading, error } = useCarreraBySlug(
        slug || ""
    );

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center space-y-4">
                    <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                    <p className="text-muted-foreground">
                        Cargando información de la carrera...
                    </p>
                </div>
            </div>
        );
    }

    // Error state or carrera not found
    if (error || !carrera) {
        return <Navigate to="/carreras" replace />;
    }

    // Render template with carrera data and related careers
    return (
        <CarreraTemplate carrera={carrera} relatedCareers={relatedCareers} />
    );
};

export default CarreraDetail;
