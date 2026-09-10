import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { PageRoute } from '../types';
import { Home, Info, Box, ChevronDown, ArrowRight, X, LayoutGrid, Sparkles } from 'lucide-react';
import { COMPANY_NAME, MEGA_MENU_DATA } from '../constants';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const navItems = [
  { label: 'Home', path: PageRoute.HOME, icon: Home },
  { label: 'About', path: PageRoute.ABOUT, icon: Info },
  { label: 'Products', path: PageRoute.PRODUCTS, icon: Box },
];

/* ─────────────────────────────────────────────
   ULTRA MEGA MENU CONTENT (LIGHTWEIGHT & FAST)
───────────────────────────────────────────── */
const MegaMenuContent: React.FC<{ onItemClick?: () => void }> = ({ onItemClick }) => {
  const [activeProduct, setActiveProduct] = useState<any>(null);

  return (
    <div className="max-w-7xl mx-auto px-8 py-6 flex gap-8 items-start relative select-none">
      {/* ── Background Base ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C3E] via-[#0D2653] to-[#040D1D]" />

        {/* Static Subtle Ambient Accents */}
        <div className="absolute -top-32 -right-32 w-[450px] h-[450px] bg-blue-500/10 rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-jdc-orange/5 rounded-full pointer-events-none" />

        {/* Ambient Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] select-none pointer-events-none overflow-hidden">
          <img
            src="/images/PYD.jpeg"
            alt="PYD Watermark"
            className="w-[500px] h-auto grayscale invert brightness-200"
          />
        </div>

        {/* Crisp Border Edge */}
        <div className="absolute inset-0 border border-white/5 rounded-[48px] pointer-events-none" />
      </div>

      {/* ── Products List (Left with Vertical Up-Down Scroller) ── */}
      <div className="flex-1 pr-4 z-10 overflow-y-auto overflow-x-hidden max-h-[480px]">
        <div className="grid grid-cols-5 gap-x-5 gap-y-4">
          {MEGA_MENU_DATA.map((category, idx) => (
            <div key={idx} className="space-y-2 min-w-0">
              <div className="flex items-baseline gap-1.5 border-b border-white/5 pb-1">
                <span className="text-[10px] font-mono text-jdc-orange/80 font-bold shrink-0">0{idx + 1}</span>
                <Link
                  to={`/products?category=${encodeURIComponent(category.title)}`}
                  onClick={onItemClick}
                  className="text-[11px] font-black uppercase tracking-[0.08em] text-white/60 hover:text-jdc-orange transition-colors leading-snug break-words block w-full"
                >
                  {category.title}
                </Link>
              </div>
              <ul className="space-y-1">
                {category.items.map((product, pIdx) => {
                  const isHovered = activeProduct?.name === product.name;
                  return (
                    <li key={pIdx}>
                      <Link
                        to={`/product/${product.slug}`}
                        onMouseEnter={() => setActiveProduct(product)}
                        onClick={onItemClick}
                        className={`group/link flex items-start justify-between px-2 py-1 -mx-1.5 rounded-md text-[11.5px] font-medium transition-all duration-150 ${
                          isHovered
                            ? 'text-white bg-white/10 font-semibold'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className="leading-snug pr-1 break-words">{product.name}</span>
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-jdc-orange transition-opacity duration-150 shrink-0 mt-1 ${
                            isHovered ? 'opacity-100' : 'opacity-0 group-hover/link:opacity-60'
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Highlight Preview (Right) ── */}
      <div className="w-[300px] shrink-0 relative z-10 self-stretch flex flex-col justify-center">
        {activeProduct ? (
          <div className="flex flex-col transition-all duration-200">
            <div className="relative group/preview w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#12254e]/60 to-[#0B1C3E]/80 border border-white/10 p-3 flex items-center justify-center shadow-2xl transition-all duration-200">
              <img
                src={activeProduct.image || '/product/logo.png'}
                alt={activeProduct.name}
                className="w-full h-full object-contain drop-shadow-xl z-10 transition-transform duration-300 group-hover/preview:scale-105"
              />
            </div>

            <div className="mt-3.5 space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-px flex-1 bg-white/10" />
                <Sparkles size={12} className="text-jdc-orange" />
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <h4 className="text-lg font-serif font-bold text-white tracking-tight leading-snug">
                {activeProduct.name}
              </h4>
              <p className="text-white/45 text-[11.5px] leading-relaxed font-medium line-clamp-2">
                Experience superior protection and aesthetics with our specialized {activeProduct.name.toLowerCase()} formulation.
              </p>
              <Link
                to={`/product/${activeProduct.slug}`}
                onClick={onItemClick}
                className="group inline-flex items-center gap-2 text-[10.5px] font-black uppercase tracking-[0.2em] text-jdc-orange hover:text-white transition-colors"
              >
                <span>Explore Collection</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-8 border border-white/5 rounded-[24px] bg-gradient-to-b from-[#12254e]/30 to-transparent">
            <div className="relative mb-4">
              <img src="/product/logo.png" alt="Logo" className="w-28 opacity-15 grayscale brightness-200" />
            </div>
            <p className="text-white/30 text-[9.5px] font-black uppercase tracking-[0.3em]">
              Hover a Product to Preview
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   REFINED NAV ITEM (ULTRA FAST & SMOOTH)
───────────────────────────────────────────── */
const NavItem: React.FC<{ item: any; currentPath: string }> = ({ item, currentPath }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isProducts = item.label === 'Products';
  const isActive = currentPath === item.path;

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <NavLink
        to={item.path}
        onClick={(e) => isProducts && e.preventDefault()}
        className={({ isActive }) => `
          relative z-10 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.25em] transition-colors duration-200
          ${isActive ? 'text-white' : 'text-white/50 hover:text-white'}
        `}
      >
        <span className="relative z-10 flex items-center gap-1">
          {item.label}
          {isProducts && (
            <ChevronDown size={12} className={`transition-transform duration-300 ${isHovered ? 'rotate-180 text-jdc-orange' : ''}`} />
          )}
        </span>
      </NavLink>

      {/* Lightweight Active / Hover Indicator */}
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.div
            layoutId="navIndicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 z-0 rounded-full ${isActive ? 'bg-white/10' : 'bg-white/5'}`}
            transition={{ duration: 0.15 }}
          />
        )}
      </AnimatePresence>

      {/* Mega Menu Dropdown - Instant and Smooth */}
      {isProducts && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="fixed left-0 right-0 top-[70px] mx-auto max-w-7xl z-[110] px-6 pointer-events-auto"
            >
              <div className="bg-[#0B1C3E]/98 border border-white/10 rounded-[48px] shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden">
                <MegaMenuContent onItemClick={() => setIsHovered(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN DESKTOP NAV
───────────────────────────────────────────── */
export const DesktopNav: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    return scrollY.onChange((v) => setIsScrolled(v > 50));
  }, [scrollY]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-700 pointer-events-none">
      <div className={`
        max-w-7xl mx-auto px-6 transition-all duration-1000 ease-[cubic-bezier(0.16, 1, 0.3, 1)]
        ${isScrolled ? 'pt-3 max-w-[95%]' : 'pt-4 md:pt-6 max-w-[95%] md:max-w-7xl'}
      `}>
        <div className={`
          relative flex items-center justify-center lg:justify-between gap-4 px-6 md:px-10 py-3 rounded-[50px] border transition-all duration-700 pointer-events-auto
          bg-[#0B1C3E] border-white/10 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.6)]
          ${isScrolled ? 'scale-[0.98] py-2' : 'scale-100'}
        `}>
          {/* Logo Identity (Always Original Content) */}
          <Link to={PageRoute.HOME} className="flex items-center gap-4 group shrink-0">
            <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-2xl border border-white/10 transition-all group-hover:bg-white/10 group-hover:border-jdc-orange/40 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]">
              <img src="/product/logo.png" alt="Jai Durga Chemical" className="h-7 md:h-9 w-auto object-contain transition-transform group-hover:scale-105" />
              <div className="w-px h-6 md:h-7 bg-white/10" />
              <img src="/images/PYD.jpeg" alt="PYD" className="h-7 md:h-9 w-auto object-contain rounded-lg shadow-xl" />
            </div>
            <div className="hidden xl:flex flex-col">
              <span className="text-white font-serif font-black text-xs tracking-[0.12em] uppercase leading-none group-hover:text-jdc-orange transition-colors duration-500">
                {COMPANY_NAME}
              </span>
              <span className="text-[7px] text-white/30 font-black tracking-[0.3em] uppercase mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Industrial Excellence</span>
            </div>
          </Link>

          {/* Luxury Navigation Dock */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-black/40 p-1.5 rounded-full border border-white/10 shadow-inner">
            {navItems.map((item) => (
              <NavItem key={item.path} item={item} currentPath={location.pathname} />
            ))}
          </nav>

          {/* Premium CTAs */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <Link
              to={PageRoute.FAQ}
              className="relative px-5 py-2.5 text-white/40 hover:text-jdc-orange text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500"
            >
              Dealer Enquiry
            </Link>
            <Link
              to={PageRoute.CONTACT}
              className="relative group px-6 py-2.5 overflow-hidden bg-jdc-orange text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-jdc-orange/30 transition-all hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

/* ─────────────────────────────────────────────
   MOBILE LUXURY NAV
───────────────────────────────────────────── */
export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[150] lg:hidden">
        <div className="bg-[#0B1C3E]/95 backdrop-blur-[40px] border border-white/20 rounded-full p-2.5 flex items-center gap-2 shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
          {navItems.map((item) => {
            const Icon = item.icon!;
            const isActive = location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 relative ${isActive ? 'bg-jdc-orange text-white scale-110 shadow-lg shadow-jdc-orange/30' : 'text-white/40 hover:text-white'}`}
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                {isActive && (
                  <motion.div layoutId="mobileActive" className="absolute -bottom-1 w-1 h-1 bg-white rounded-full" />
                )}
              </NavLink>
            );
          })}
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white"
          >
            <LayoutGrid size={22} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 90%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 90%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 90%)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] lg:hidden bg-[#0B1C3E]/98 backdrop-blur-3xl"
          >
            <div className="relative h-full flex flex-col p-10 pt-20">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white"
              >
                <X size={28} />
              </button>

              <div className="space-y-8">
                <p className="text-jdc-orange text-[10px] uppercase font-black tracking-[0.5em]">Navigation</p>
                <div className="flex flex-col gap-6">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="text-5xl font-serif font-bold text-white flex items-end gap-4 group"
                      >
                        {item.label}
                        <span className="text-[14px] font-mono text-white/20 mb-2 font-bold group-hover:text-jdc-orange">0{i + 1}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <Link
                  to={PageRoute.FAQ}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3"
                >
                  Dealer Enquiry <ArrowRight size={18} />
                </Link>
                <Link
                  to={PageRoute.CONTACT}
                  onClick={() => setIsOpen(false)}
                  className="w-full py-5 bg-jdc-orange text-white rounded-2xl font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3"
                >
                  Contact Us <ArrowRight size={20} />
                </Link>
                <div className="flex justify-between items-center text-[10px] text-white/20 font-black uppercase tracking-[0.3em]">
                  <span>© 2026 JDC PVT LTD</span>
                  <div className="h-px w-20 bg-white/10" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};