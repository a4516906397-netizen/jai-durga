import React, { useEffect, useState, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { PageRoute } from '../types';
import { Home, Info, Box, Phone, HelpCircle, ChevronDown, ImageIcon, ArrowRight, X, LayoutGrid, Sparkles } from 'lucide-react';
import { COMPANY_NAME, MEGA_MENU_DATA } from '../constants';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useMotionValue } from 'framer-motion';

const navItems = [
  { label: 'Home', path: PageRoute.HOME, icon: Home },
  { label: 'About', path: PageRoute.ABOUT, icon: Info },
  { label: 'Products', path: PageRoute.PRODUCTS, icon: Box },
];

/* ─────────────────────────────────────────────
   ULTRA MEGA MENU CONTENT
───────────────────────────────────────────── */
const MegaMenuContent: React.FC<{ onItemClick?: () => void }> = ({ onItemClick }) => {
  const [activeProduct, setActiveProduct] = useState<any>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Correctly define transforms at top level to avoid hook violations
  const rotateY = useTransform(mouseX, [0, 800], [-7, 7]);
  const rotateX = useTransform(mouseY, [0, 600], [7, -7]);
  const springX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  const handleMouseMove = ({ clientX, clientY, currentTarget }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div
      className="max-w-7xl mx-auto px-10 py-8 flex gap-10 items-start h-[480px] relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* ── Background Enhancements ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep Atmospheric Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C3E] via-[#0D2653] to-[#040D1D]" />

        {/* Interactive Mouse Glow */}
        <motion.div
          className="absolute w-[500px] h-[500px] bg-jdc-orange/10 blur-[120px] rounded-full"
          style={{
            x: mouseX,
            y: mouseY,
            left: -250,
            top: -250,
            opacity: 0.6
          }}
        />

        {/* Static Ambient Orbs */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-jdc-orange/5 blur-[120px] rounded-full" />

        {/* Ambient Branding Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] select-none pointer-events-none overflow-hidden">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            src="/images/PYD.jpeg"
            alt="PYD Watermark"
            className="w-[500px] h-auto grayscale invert brightness-200"
          />
        </div>

        {/* Grain / Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/p6-dark.png')]" />

        {/* Edge Reflection */}
        <div className="absolute inset-0 border-[1px] border-white/5 rounded-[48px] pointer-events-none shadow-[inset_0_0_80px_rgba(255,255,255,0.02)]" />
      </div>

      {/* ── Products List (Left) ── */}
      <div className="flex-1 overflow-y-auto pr-6 custom-scrollbar h-full z-10">
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">
          {MEGA_MENU_DATA.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="space-y-4"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-[10px] font-mono text-jdc-orange/40 font-bold">0{idx + 1}</span>
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-white/50 border-b border-white/5 pb-2 w-full">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2 pl-1">
                {category.items.map((product, pIdx) => (
                  <li key={pIdx}>
                    <Link
                      to={`/product/${product.slug}`}
                      onMouseEnter={() => setActiveProduct(product)}
                      onClick={onItemClick}
                      className="group/link flex items-center justify-between text-[12px] font-semibold text-white/70 hover:text-white transition-all duration-300"
                    >
                      <span className="relative line-clamp-1">
                        {product.name}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-jdc-orange transition-all duration-500 group-hover/link:w-full" />
                      </span>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        className="w-1.5 h-1.5 rounded-full bg-jdc-orange shadow-[0_0_10px_#F97316]"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Highlight Preview (Right) ── */}
      <div className="w-[340px] shrink-0 h-full relative z-10">
        <AnimatePresence mode="wait">
          {activeProduct ? (
            <motion.div
              key={activeProduct.slug}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="h-full flex flex-col"
            >
              <div className="relative group/preview aspect-square rounded-[32px] overflow-hidden bg-gradient-to-br from-[#12254e]/50 to-[#0B1C3E]/50 backdrop-blur-xl border border-white/10 p-12 flex items-center justify-center shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] group-hover/preview:border-jdc-orange/40 group-hover/preview:bg-[#12254e]/80 transition-all duration-700">
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.1),transparent_70%)] opacity-0 group-hover/preview:opacity-100 transition-opacity duration-700" />
                {/* Parallax Image Effect — Hooks moved to top level */}
                <motion.img
                  src={activeProduct.image || '/product/logo.png'}
                  alt={activeProduct.name}
                  style={{
                    rotateY: springY,
                    rotateX: springX,
                    perspective: 1000
                  }}
                  className="w-full h-full object-contain drop-shadow-[0_32px_64px_rgba(0,0,0,0.6)] z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-jdc-orange/10 via-transparent to-transparent opacity-0 group-hover/preview:opacity-100 transition-opacity duration-700" />
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="h-px flex-1 bg-white/10" />
                  <Sparkles size={12} className="text-jdc-orange animate-pulse" />
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-white tracking-tight">
                  {activeProduct.name}
                </h4>
                <p className="text-white/40 text-[12px] leading-relaxed font-medium line-clamp-2">
                  Experience superior protection and aesthetics with our specialized {activeProduct.name.toLowerCase()} formulation.
                </p>
                <Link
                  to={`/product/${activeProduct.slug}`}
                  onClick={onItemClick}
                  className="group inline-flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-jdc-orange hover:text-white transition-colors"
                >
                  Explore Collection <div className="w-10 h-px bg-jdc-orange group-hover:w-14 group-hover:bg-white transition-all duration-500" />
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex flex-col items-center justify-center text-center p-12 border border-white/5 rounded-[32px] bg-gradient-to-b from-[#12254e]/30 to-transparent shadow-inner"
            >
              <div className="relative mb-8">
                <img src="/product/logo.png" alt="Logo" className="w-40 opacity-10 grayscale brightness-200" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-8 border border-white/5 rounded-full border-dashed"
                />
              </div>
              <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.5em] animate-pulse">
                Selective Product Exploration
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────
   REFINED NAV ITEM
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
          relative z-10 px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.25em] transition-all duration-500
          ${isActive ? 'text-white' : 'text-white/40 hover:text-white'}
        `}
      >
        <span className="relative z-10 flex items-center gap-1">
          {item.label}
          {isProducts && (
            <ChevronDown size={12} className={`transition-transform duration-500 ${isHovered ? 'rotate-180 text-jdc-orange scale-110' : ''}`} />
          )}
        </span>
      </NavLink>

      {/* Advanced Indicator Pill */}
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.div
            layoutId="navIndicator"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`absolute inset-0 z-0 rounded-full ${isActive ? 'bg-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]' : 'bg-white/5'}`}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
          />
        )}
      </AnimatePresence>

      {/* Mega Menu Dropdown */}
      {isProducts && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.99, filter: 'blur(15px)' }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: 8, scale: 0.99, filter: 'blur(15px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-0 right-0 top-[70px] mx-auto max-w-7xl z-[110] px-6 pointer-events-auto"
            >
              <div className="bg-gradient-to-b from-[#0B1C3E]/95 to-[#08152e]/98 backdrop-blur-[60px] border border-white/10 rounded-[48px] shadow-[0_60px_150px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
                {/* Animated Edge Light */}
                <motion.div
                  animate={{ x: [-500, 500] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-jdc-orange/50 to-transparent"
                />
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