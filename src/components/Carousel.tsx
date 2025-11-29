import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  title: string;
  children: React.ReactNode;
}

const Carousel = ({ title, children }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.8;
      const newScrollLeft = carouselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <div className="mb-12 group">
      <h3 className="text-2xl font-bold font-heading mb-4 px-6 lg:px-12">
        {title}
      </h3>

      <div className="relative">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-r from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:from-dark/90"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
        )}

        {/* Carousel */}
        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="netflix-carousel flex gap-2 px-6 lg:px-12 pb-4"
        >
          {children}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-l from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hover:from-dark/90"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
