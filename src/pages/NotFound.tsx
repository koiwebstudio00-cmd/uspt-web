import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Navbar1 } from "@/components/Navbar";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error(
            "404 Error: User attempted to access non-existent route:",
            location.pathname
        );
    }, [location.pathname]);

    return (
        <div className="min-h-screen">
            <Navbar1 />
            <div className="text-center flex flex-col items-center">
                <h1 className="text-4xl font-heading font-bold mb-4">404</h1>
                <p className="text-xl text-gray-600 mb-4">
                    Lo siento! Pagina no encontrada
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-1 group text-primary hover:text-primary/80 underline"
                >
                    <ArrowLeft className="group-hover:-translate-x-1 transition-all" />
                    Volver a inicio
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
