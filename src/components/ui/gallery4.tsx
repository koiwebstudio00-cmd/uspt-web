"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
    id: string;
    title: string;
    description: string;
    href: string;
    img: string;
}

export interface Gallery4Props {
    title?: React.ReactNode;
    description?: string;
    items: Gallery4Item[];
}

const Gallery4 = ({
    title = "Case Studies",
    description = "Discover how leading companies leverage modern web technologies.",
    items,
}: Gallery4Props) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    useEffect(() => {
        if (!carouselApi) return;

        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
            setCurrentSlide(carouselApi.selectedScrollSnap());
        };

        const onInit = () => {
            setScrollSnaps(carouselApi.scrollSnapList());
        };

        onInit();
        updateSelection();

        carouselApi.on("select", updateSelection);
        carouselApi.on("reInit", onInit);

        return () => {
            carouselApi.off("select", updateSelection);
            carouselApi.off("reInit", onInit);
        };
    }, [carouselApi]);

    return (
        <section className="py-24">
            <div className="container mx-auto">
                <div className="mb-8 flex flex-col items-center text-center md:mb-14 lg:mb-16 relative">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-medium font-heading md:text-5xl">
                            {title}
                        </h2>
                        <p className="max-w-3xl font-body text-xl text-muted-foreground mx-auto">
                            {description}
                        </p>
                    </div>
                    <div className="hidden shrink-0 gap-2 md:flex md:absolute md:right-0 md:bottom-0">
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => carouselApi?.scrollPrev()}
                            disabled={!canScrollPrev}
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => carouselApi?.scrollNext()}
                            disabled={!canScrollNext}
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        breakpoints: {
                            "(max-width: 768px)": { dragFree: true },
                        },
                        containScroll: "trimSnaps",
                        slidesToScroll: 3,
                    }}
                >
                    <CarouselContent className="ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))]">
                        {items.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                            >
                                <a
                                    href={item.href}
                                    className="group rounded-xl"
                                >
                                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden md:aspect-[5/4] lg:aspect-[16/9]">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 h-full bg-[linear-gradient(hsl(var(--primary)/0),hsl(var(--primary)/0.4),hsl(var(--primary)/0.8)_100%)] mix-blend-multiply" />
                                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary-foreground md:p-8">
                                            <div className="mb-2 pt-4 text-xl font-heading font-semibold md:mb-3">
                                                {item.title}
                                            </div>
                                            <div className="mb-8 line-clamp-2 font- md:mb-12 lg:mb-9">
                                                {item.description}
                                            </div>
                                            <div className="flex items-center text-sm">
                                                Ver más{" "}
                                                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="mt-8 flex justify-center gap-2">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full transition-colors ${currentSlide === index
                                ? "bg-primary"
                                : "bg-primary/20"
                                }`}
                            onClick={() => carouselApi?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>

    );
};

export { Gallery4 };
