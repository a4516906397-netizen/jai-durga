import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { PageRoute } from '../types';
import { Home, Info, Box, Phone, HelpCircle } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

const navItems = [
  { label: 'Home', path: PageRoute.HOME, icon: Home },
  { label: 'About', path: PageRoute.ABOUT, icon: Info },
  { label: 'Products', path: PageRoute.PRODUCTS, icon: Box },
  { label: 'FAQ', path: PageRoute.FAQ, icon: HelpCircle },
  { label: 'Contact', path: PageRoute.CONTACT, icon: Phone },
];

export const DesktopNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === PageRoute.HOME;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled || !isHome
        ? 'bg-jdc-blue/90 backdrop-blur-xl py-1 md:py-2 border-white/5 shadow-2xl'
        : 'bg-transparent py-4 md:py-6 border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-full">

        {/* Brand Identity */}
        <Link to={PageRoute.HOME} className="flex items-center gap-6 group">
          <div className="flex items-center gap-4">
            <img
              src="/product/logo.png"
              alt="Sakarni Logo"
              className="h-10 md:h-16 w-auto object-contain"
            />
            <div className="h-8 md:h-12 w-[1px] bg-white/20 hidden sm:block"></div>
            <img
              src="/images/PYD.jpeg"
              alt="PYD Logo"
              className="h-10 md:h-16 w-auto object-contain rounded-sm"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-serif font-bold text-base md:text-lg tracking-wide group-hover:text-jdc-orange transition-colors duration-300">
              {COMPANY_NAME}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group py-2
                ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-jdc-orange transition-all duration-300
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Call to Action */}
        <div className="hidden md:block">
          <NavLink
            to={PageRoute.CONTACT}
            className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest border transition-all duration-300 relative overflow-hidden group
               ${isScrolled || !isHome
                ? 'border-jdc-orange text-jdc-orange'
                : 'border-white text-white'
              }
             `}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get Quote</span>
            <div className={`absolute inset-0 bg-jdc-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
          </NavLink>
        </div>

        {/* Mobile Menu Icon (Placeholder for layout, since we use bottom nav for mobile) */}
        {/* We can keep the top clear on mobile, just showing logo */}
      </div>
    </header>
  );
};

export const MobileNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Smart hide/show logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed bottom-6 left-4 right-4 z-50 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform md:hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
      <nav className="bg-jdc-blue/90 backdrop-blur-xl rounded-full flex justify-between items-center py-3 px-6 shadow-2xl border border-white/10 ring-1 ring-black/20 mx-auto max-w-sm">
        {navItems.map((item) => {
          const Icon = item.icon!;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center w-10 h-10 rounded-full transition-all duration-300 relative group
                ${isActive ? 'text-white' : 'text-slate-400'}`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <div className="absolute inset-0 bg-jdc-orange/20 rounded-full blur-md"></div>
                  )}

                  <Icon
                    size={20}
                    strokeWidth={isActive ? 2.5 : 2}
                    className={`relative z-10 transition-transform duration-300 ${isActive ? '-translate-y-0 text-jdc-orange' : 'group-hover:text-slate-200'}`}
                  />
                  {isActive && <div className="absolute -bottom-1 w-1 h-1 bg-jdc-orange rounded-full"></div>}
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};