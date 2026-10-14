import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
    name: string;
    avatar: string;
    rating: number;
    text: string;
}

interface TestimonialsCarouselProps {
    testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative max-w-3xl mx-auto">
            {/* Container com altura fixa */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[var(--color-surface)] border border-[var(--color-border-soft)] rounded-xl p-6 lg:p-8 h-[280px] lg:h-[240px] flex flex-col"
                    >
                        {/* Header com Avatar e Nome */}
                        <div className="flex items-center gap-3 mb-4 flex-shrink-0">
                            <img
                                src={testimonials[currentIndex].avatar}
                                alt={testimonials[currentIndex].name}
                                className="w-10 h-10 rounded-full border-2 border-[var(--color-gold)]"
                            />
                            <div>
                                <h4 className="font-semibold text-base theme-text-primary">
                                    {testimonials[currentIndex].name}
                                </h4>
                                <div className="flex gap-0.5 mt-0.5">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className="fill-[var(--color-gold)] text-[var(--color-gold)]"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Texto do Depoimento com scroll interno */}
                        <div className="flex-1 overflow-y-auto scrollbar-thin">
                            <p className="text-sm theme-text-secondary leading-relaxed">
                                "{testimonials[currentIndex].text}"
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons - Fora do card */}
            <div className="flex justify-center gap-4 mt-6">
                <button
                    onClick={goToPrevious}
                    className="w-10 h-10 rounded-full border-2 border-[var(--color-border-strong)] bg-[var(--color-surface)] hover:border-[var(--color-gold)] hover:bg-[var(--color-gold-soft)] flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Avaliação anterior"
                >
                    <ChevronLeft size={20} className="theme-text-primary" strokeWidth={2.5} />
                </button>

                {/* Indicadores */}
                <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                currentIndex === index
                                    ? "w-8 bg-[var(--color-gold)]"
                                    : "w-2 bg-gray-400 hover:bg-[var(--color-gold-soft)]"
                            }`}
                            aria-label={`Ver avaliação ${index + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={goToNext}
                    className="w-10 h-10 rounded-full border-2 border-[var(--color-border-strong)] bg-[var(--color-surface)] hover:border-[var(--color-gold)] hover:bg-[var(--color-gold-soft)] flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Próxima avaliação"
                >
                    <ChevronRight size={20} className="theme-text-primary" strokeWidth={2.5} />
                </button>
            </div>
        </div>
    );
}


