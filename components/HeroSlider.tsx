import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PageRoute } from '../types';
import { ArrowRight, ChevronLeft, ChevronRight, Minus } from 'lucide-react';

const SLIDES = [
  {
    image: "/images/factory.png",
    title: "Advanced Manufacturing",
    subtitle: "State-of-the-art facilities ensuring consistency in every drop.",
    cta: "View Our Story",
    link: PageRoute.ABOUT,
    tag: "Advanced Tech"
  }
];

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    if (isAnimating || SLIDES.length <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating || SLIDES.length <= 1) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, [isAnimating]);

  // Reset animation lock after transition
  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1000); // Match CSS transition duration
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-play
  useEffect(() => {
    if (SLIDES.length <= 1) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide]);

  // Progress Bar Animation Reset
  useEffect(() => {
    if (progressRef.current && SLIDES.length > 1) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
      setTimeout(() => {
        if (progressRef.current) {
          progressRef.current.style.transition = 'width 6000ms linear';
          progressRef.current.style.width = '100%';
        }
      }, 50);
    }
  }, [currentIndex]);

  const currentSlide = SLIDES[currentIndex];

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[768px] overflow-hidden bg-jdc-dark group select-none shadow-2xl mt-0">

      {/* 1. Background Layers */}
      {SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
          >
            {/* Image with Parallax/Zoom Effect */}
            <div className={`absolute inset-0 transform transition-transform duration-[8000ms] ease-out ${isActive ? 'scale-110 sm:scale-125' : 'scale-100'}`}>
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center sm:object-[center_30%]"
              />
            </div>

            {/* Cinematic Gradient Mesh - Crucial for readability & mood - REMOVED per user request */}
          </div>
        );
      })}

      {/* 2. Texture Overlay (Film Grain) - Adds "Expert" Polish */}
      <div className="absolute inset-0 opacity-[0.07] bg-noise pointer-events-none z-10 mix-blend-overlay"></div>

      {/* 3. Main Content Layer */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center">
        <div className="max-w-7xl w-full mx-auto px-3 sm:px-4 md:px-12 pt-10 sm:pt-16 md:pt-20">
          {/* Content hidden for visual focus - Single slide mode */}
        </div>
      </div>

      {/* 4. Professional Navigation Hub - Hidden for single slide */}
      {SLIDES.length > 1 && (
        <div className="absolute bottom-0 right-0 w-full md:w-auto p-3 sm:p-4 md:p-12 z-30 flex flex-col md:items-end gap-3 md:gap-6">
          {/* Slide Counter & Progress */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-6">
            <span className="text-white font-mono text-lg xs:text-xl sm:text-2xl md:text-4xl font-light">
              0{currentIndex + 1}
            </span>
            {/* Dynamic Progress Bar */}
            <div className="w-12 xs:w-16 sm:w-20 md:w-32 h-[2px] bg-white/20 relative overflow-hidden rounded-full">
              <div ref={progressRef} className="absolute inset-0 bg-jdc-orange w-0 rounded-full"></div>
            </div>
            <span className="text-white/40 font-mono text-xs xs:text-sm sm:text-base md:text-lg">
              0{SLIDES.length}
            </span>
          </div>
          {/* Navigation Buttons - Glassmorphism */}
          <div className="flex gap-2 mt-1">
            <button
              onClick={prevSlide}
              className="w-11 h-11 xs:w-12 xs:h-12 sm:w-10 sm:h-10 md:w-14 md:h-14 border border-white/10 bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-jdc-orange hover:border-jdc-orange transition-all duration-300 group rounded-full"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="w-11 h-11 xs:w-12 xs:h-12 sm:w-10 sm:h-10 md:w-14 md:h-14 border border-white/10 bg-white/10 backdrop-blur-md text-white flex items-center justify-center hover:bg-jdc-orange hover:border-jdc-orange transition-all duration-300 group rounded-full"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}

      {/* Scroll Indicator - Subtle functional UI */}
      <div className="absolute bottom-10 right-6 md:right-12 hidden md:flex flex-row-reverse items-center gap-4 z-20 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[10px] text-white/50 uppercase tracking-widest rotate-90 origin-right translate-y-8">Scroll</span>
      </div>

    </div>
  );
};

export default HeroSlider;