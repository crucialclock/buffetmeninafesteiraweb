import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface ImageCarouselProps {
    images: { src: string; alt: string }[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
            const newPosition = direction === 'left' 
                ? scrollContainerRef.current.scrollLeft - scrollAmount
                : scrollContainerRef.current.scrollLeft + scrollAmount;
            
            scrollContainerRef.current.scrollTo({
                left: newPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="relative">
            {/* Scroll Container */}
            <div 
                ref={scrollContainerRef}
                onScroll={checkScroll}
                className="flex overflow-x-auto gap-4 lg:gap-6 scrollbar-hide pb-4 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="flex-shrink-0 w-[85vw] sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-1rem)]"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-[var(--shadow-soft)] border border-[var(--color-border-soft)] bg-[var(--color-surface)]">
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                draggable={false}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Navigation Buttons */}
            {canScrollLeft && (
                <button
                    onClick={() => scroll('left')}
                    className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm items-center justify-center shadow-xl hover:bg-white transition-all hover:scale-110 z-10"
                    aria-label="Rolar para esquerda"
                >
                    <ChevronLeft size={28} className="text-gray-800" strokeWidth={2.5} />
                </button>
            )}

            {canScrollRight && (
                <button
                    onClick={() => scroll('right')}
                    className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm items-center justify-center shadow-xl hover:bg-white transition-all hover:scale-110 z-10"
                    aria-label="Rolar para direita"
                >
                    <ChevronRight size={28} className="text-gray-800" strokeWidth={2.5} />
                </button>
            )}
        </div>
    );
}
