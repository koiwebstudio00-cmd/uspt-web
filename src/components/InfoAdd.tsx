import { Feature } from "@/components/ui/feature-section-with-hover-effects";

interface InfoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface InfoAddProps {
    items: InfoItem[];
    columnas?: number;
}

const InfoAdd = ({ items, columnas = 3 }: InfoAddProps) => {
    return (
        <section className="">
            <div className="container mx-auto px-4 flex justify-center items-center">
                <div
                    className={`grid grid-cols-1 lg:grid-cols-${columnas} relative z-10 py-10 max-w-7xl mx-auto gap-8`}
                >
                    {items.map((feature, index) => (
                        <Feature
                            key={feature.title}
                            {...feature}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfoAdd;
