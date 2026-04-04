import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Mostrar/ocultar botón basado en scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Función para scroll suave hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) {
        return null;
    }

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 z-50 size-10 sm:size-12 md:size-14 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 bg-[#4A0075] hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
            aria-label="Volver arriba"
        >
            <ChevronUp
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 mx-auto"
                strokeWidth={2.5}
            />
        </button>
    );
};

export default ScrollToTopButton;
