"use client";

import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";

type Testimonial = {
    quote: string;
    name: string;
    role: string;
    avatar: string;
};

export default function TestimonialSlider({ items }: { items: Testimonial[] }) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    // Auto-play
    useEffect(() => {
        if (!api || items.length <= 1) return;

        const interval = setInterval(() => {
            api.scrollNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [api, items.length]);

    if (!items?.length) return null;

    return (
        <section aria-label="Testimonios" className="w-full py-16">
            <div className="mx-auto max-w-4xl px-6">
                <Carousel
                    setApi={setApi}
                    className="w-full"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {items.map((testimonial, idx) => (
                            <CarouselItem key={idx}>
                                <div className="text-center px-8">
                                    <div className="max-w-3xl mx-auto">
                                        {/* Icono de comillas */}
                                        <div className="mb-8">
                                            <svg
                                                className="w-12 h-12 text-primary mx-auto"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                            </svg>
                                        </div>

                                        {/* Testimonio */}
                                        <blockquote className="text-sm sm:text-xl md:text-2xl leading-relaxed text-foreground/90 mb-8 font-body italic">
                                            {testimonial.quote}
                                        </blockquote>

                                        {/* Foto y datos de la persona */}
                                        <div className="flex flex-col items-center">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-20 h-20 object-cover rounded-full mb-4 grayscale"
                                            />
                                            <div>
                                                <p className="font-semibold text-lg text-foreground">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-foreground/70">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Dots de navegación - solo mostrar si hay más de un testimonio */}
                    {items.length > 1 && (
                        <div className="mt-12 flex items-center justify-center gap-3">
                            {Array.from({ length: count }, (_, i) => (
                                <button
                                    key={i}
                                    aria-label={`Ir al testimonio ${i + 1}`}
                                    onClick={() => api?.scrollTo(i)}
                                    className={`h-3 w-3 rounded-full transition-all duration-300 ${
                                        i === current - 1
                                            ? "bg-primary scale-125"
                                            : "bg-foreground/30 hover:bg-foreground/50"
                                    }`}
                                />
                            ))}
                        </div>
                    )}
                </Carousel>
            </div>
        </section>
    );
}
