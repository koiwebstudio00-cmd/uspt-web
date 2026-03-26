import { useParams, Navigate } from "react-router-dom";
import { usePosgradoBySlug } from "@/hooks/use-posgrado-by-slug";
import PosgradoTemplate from "@/components/PosgradoTemplate";
import { Loader2 } from "lucide-react";

const PosgradoDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { posgrado, relatedPosgrados, loading, error } = usePosgradoBySlug(
        slug || "",
    );

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center space-y-4">
                    <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                    <p className="text-muted-foreground">
                        Cargando información del posgrado...
                    </p>
                </div>
            </div>
        );
    }

    // Error state or posgrado not found
    if (error || !posgrado) {
        return <Navigate to="/posgrado" replace />;
    }

    // Render template with posgrado data and related posgrados
    return (
        <PosgradoTemplate
            posgrado={posgrado}
            relatedPosgrados={relatedPosgrados}
        />
    );
};

export default PosgradoDetail;
