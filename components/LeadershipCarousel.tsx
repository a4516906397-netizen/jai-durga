import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface LeaderCard {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

interface LeadershipCarouselProps {
  leaders: LeaderCard[];
}

const LeadershipCarousel: React.FC<LeadershipCarouselProps> = ({ leaders }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % leaders.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + leaders.length) % leaders.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const activeLead = leaders[activeIndex];

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 min-h-screen flex flex-col justify-between py-8 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-2">
          Guided by Experience
        </h2>
        <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center">
        {/* Featured Card with Image and Content */}
        <div className="max-w-4xl mx-auto w-full mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-2xl">
                <img
                  src={activeLead.image}
                  alt={activeLead.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              </div>
              {/* Position indicator below image */}
              <div className="mt-4 text-center">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-400">
                  {activeIndex + 1} of {leaders.length}
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-center py-4 sm:py-0">
              {/* Name and Title */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                  {activeLead.name}
                </h3>
                <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
                  {activeLead.role.split(' • ')[0]}
                </p>
                {activeLead.role.includes(' • ') && (
                  <p className="text-slate-400 text-xs mt-1">
                    {activeLead.role.split(' • ')[1]}
                  </p>
                )}
              </div>

              {/* Quote */}
              <div className="mb-8">
                <svg
                  className="w-8 h-8 text-orange-500/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5C0 0 0 4.75 0 8v7c0 7 4 8 7 8z" />
                </svg>
                <p className="text-base sm:text-lg leading-relaxed text-white italic font-light">
                  "{activeLead.quote}"
                </p>
              </div>

              {/* Navigation hint */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-700">
                <button
                  onClick={() => {
                    setIsAutoPlay(false);
                    prev();
                  }}
                  className="group flex items-center justify-center w-10 h-10 rounded-full border border-slate-600 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                  aria-label="Previous leader"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-300 group-hover:text-orange-400 transition-colors" />
                </button>
                <p className="text-xs text-slate-500 flex-1">Use arrow keys to navigate</p>
                <button
                  onClick={() => {
                    setIsAutoPlay(false);
                    next();
                  }}
                  className="group flex items-center justify-center w-10 h-10 rounded-full border border-slate-600 hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                  aria-label="Next leader"
                >
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-orange-400 transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap max-w-4xl mx-auto w-full px-4">
          {leaders.map((leader, index) => (
            <button
              key={leader.id}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlay(false);
              }}
              onMouseEnter={() => {
                setActiveIndex(index);
                setIsAutoPlay(false);
              }}
              className={`group relative overflow-hidden rounded-lg transition-all duration-300 flex-shrink-0 ${
                index === activeIndex
                  ? 'ring-2 ring-orange-500 scale-110'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              {/* Thumbnail image */}
              <div className="w-16 h-20 sm:w-20 sm:h-24 overflow-hidden rounded-lg">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Label below thumbnail */}
              <div className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/95 to-transparent pt-6 pb-2 px-1 text-center transition-all ${
                index === activeIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}>
                <p className="text-xs font-bold text-white truncate">
                  {leader.name.split(' ')[0]}
                </p>
              </div>

              {/* Active indicator line */}
              {index === activeIndex && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400"></div>
              )}
            </button>
          ))}
        </div>

        {/* Bottom progress indicator */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {leaders.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlay(false);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? 'bg-orange-500 w-3 h-3'
                  : 'bg-slate-700 w-2 h-2 hover:bg-slate-600'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-12 pt-8 border-t border-slate-800">
        <p className="text-slate-400 text-sm mb-4">
          Our leadership team brings decades of expertise
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 hover:-translate-y-0.5"
        >
          Get in Touch
          <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default LeadershipCarousel;
