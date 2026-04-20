import { useParams, Navigate } from "react-router-dom";
import { useCursoById } from "@/hooks/use-curso-by-id";
import CursoTemplate from "@/components/CursoTemplate";
import { Loader2 } from "lucide-react";

const CursoDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { curso, loading, error } = useCursoById(id || "");

    // Loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center space-y-4">
                    <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                    <p className="text-muted-foreground">
                        Cargando información del curso...
                    </p>
                </div>
            </div>
        );
    }

    // Error state or curso not found
    if (error || !curso) {
        return <Navigate to="/extension-universitaria" replace />;
    }

    return <CursoTemplate curso={curso} />;
};

export default CursoDetail;
