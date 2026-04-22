import { useParams, Navigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useExtensionBySlug } from "@/hooks/use-extension-by-slug";
import ExtensionCursoTemplate from "@/components/ExtensionCursoTemplate";

const ExtensionCursoDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { extension, relatedExtension, loading, error } = useExtensionBySlug(
        slug || "",
    );

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

    if (error || !extension) {
        return <Navigate to="/extension-universitaria" replace />;
    }

    return (
        <ExtensionCursoTemplate
            extension={extension}
            relatedExtension={relatedExtension}
        />
    );
};

export default ExtensionCursoDetail;
