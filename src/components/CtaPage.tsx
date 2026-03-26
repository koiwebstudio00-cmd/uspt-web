import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CtaPageProps {
    title: string;
    description: string;
    url: string;
    buttonText?: string;
    backgroundImage?: string;
}

const CtaPage = ({
    title,
    description,
    url,
    buttonText = "Inscríbete Ahora",
    backgroundImage = "/images/institucional.jpg",
}: CtaPageProps) => {
    return (
        <section className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={backgroundImage}
                    alt="USPT"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 gradient-hero opacity-80" />
            </div>
            <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-3xl md:text-4xl font-heading font-semibold text-white mb-6">
                        {title}
                    </h3>
                    <p className="text-lg mb-8 max-w-2xl mx-auto font-body text-white text-balance opacity-90">
                        {description}
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link
                            to={url}
                            className="text-white hover:underline bg-primary/50 py-2 px-4 inline-flex items-center gap-2 group transition-all hover:bg-primary/60"
                        >
                            {buttonText}
                            <ArrowRight className="size-5 transition-all group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaPage;
