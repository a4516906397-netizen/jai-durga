import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { PageRoute } from '../types';
import { Home, Info, Box, Phone, HelpCircle, ChevronDown, ImageIcon, ArrowRight } from 'lucide-react';
import { COMPANY_NAME, MEGA_MENU_DATA } from '../constants';
import { MegaMenuItem } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', path: PageRoute.HOME, icon: Home },
  { label: 'About', path: PageRoute.ABOUT, icon: Info },
  { label: 'Products', path: PageRoute.PRODUCTS, icon: Box },
  { label: 'FAQ', path: PageRoute.FAQ, icon: HelpCircle },
  { label: 'Contact', path: PageRoute.CONTACT, icon: Phone },
];

const NavItemComponent: React.FC<{ item: any }> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === item.path;

  // For Products, allow both hover and click
  const toggleMenu = () => {
    if (item.label === 'Products') {
      setIsHovered(!isHovered);
    }
  };

  return (
    <div
      className="h-full flex items-center relative"
      onMouseEnter={() => item.label === 'Products' && setIsHovered(true)}
      onMouseLeave={() => item.label === 'Products' && setIsHovered(false)}
    >
      <NavLink
        to={item.path}
        onClick={(e) => {
          if (item.label === 'Products') {
            e.preventDefault();
            toggleMenu();
          }
        }}
        className={({ isActive }) =>
          `text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-500 relative group py-5 flex items-center gap-1.5
          ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`
        }
      >
        {({ isActive }) => (
          <>
            {item.label}
            {item.label === 'Products' && (
              <ChevronDown
                size={12}
                strokeWidth={3}
                className={`transition-all duration-500 ${isHovered ? 'rotate-180 text-jdc-orange translate-y-0.5' : 'text-slate-500'}`}
              />
            )}

            {/* Elegant Active Indicator */}
            {isActive && (
              <motion.div
                layoutId="activeNav"
                className="absolute bottom-3 left-0 right-0 h-[2px] bg-gradient-to-r from-jdc-orange to-amber-400 rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}

            {/* Hover Indicator */}
            {!isActive && (
              <span className="absolute bottom-3 left-0 w-0 h-[2px] bg-white/20 transition-all duration-500 group-hover:w-full rounded-full"></span>
            )}
          </>
        )}
      </NavLink>

      {/* Mega Menu with AnimatePresence */}
      {item.label === 'Products' && (
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-[70px] md:top-[90px] left-0 w-full bg-jdc-blue backdrop-blur-3xl border-b border-jdc-orange/20 z-[100] overflow-hidden shadow-[0_40px_100px_rgba(11,28,62,0.95)]"
            >
              {/* Premium Glass Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-jdc-orange/5 via-transparent to-jdc-orange/5 pointer-events-none"></div>

              <MegaMenuContent onItemClick={() => setIsHovered(false)} />

              {/* Finishing decorative line */}
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-jdc-orange/30 to-transparent"></div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export const DesktopNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === PageRoute.HOME;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || !isHome
        ? 'bg-jdc-blue backdrop-blur-2xl py-3 border-b-2 border-jdc-orange/30 shadow-[0_10px_60px_rgba(11,28,62,0.8),0_0_40px_rgba(242,118,34,0.1)]'
        : 'bg-jdc-blue/60 md:bg-jdc-blue/40 backdrop-blur-md py-6 md:py-8 border-b border-white/10'
        }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-jdc-orange via-amber-500 to-jdc-orange z-[60] transition-all duration-300 ease-out shadow-[0_0_15px_rgba(242,118,34,0.6)]" style={{ width: `${scrollProgress}%` }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-full relative gap-8">

        {/* Brand Identity */}
        <Link to={PageRoute.HOME} className="flex items-center gap-4 group relative z-10 shrink-0">
          <div className="flex items-center gap-4 bg-white/5 py-2.5 px-4 rounded-2xl border border-white/10 backdrop-blur-md group-hover:bg-white/10 group-hover:border-jdc-orange/30 transition-all duration-500 shadow-lg">
            <img
              src="/product/logo.png"
              alt="Sakarni Logo"
              className="h-10 md:h-14 w-auto object-contain drop-shadow-lg"
            />
            <div className="h-8 md:h-12 w-[1px] bg-white/10"></div>
            <img
              src="/images/PYD.jpeg"
              alt="PYD Logo"
              className="h-10 md:h-14 w-auto object-contain rounded-lg shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-serif font-black text-sm md:text-base tracking-[0.1em] uppercase leading-none group-hover:text-jdc-orange transition-colors duration-500">
              {COMPANY_NAME}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 h-full">
          {navItems.map((item) => (
            <NavItemComponent key={item.path} item={item} />
          ))}
        </nav>
      </div>
    </header>
  );
};

const MegaMenuContent: React.FC<{ onItemClick?: () => void }> = ({ onItemClick }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [activeName, setActiveName] = useState<string | null>(null);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex gap-12 relative items-start"
      onMouseMove={handleMouseMove}
    >
      {/* Interactive Pattern Overlay */}
      <motion.div
        animate={{
          x: (mousePos.x - 500) / 50,
          y: (mousePos.y - 300) / 50,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.1 }}
        className="absolute inset-[-100px] pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Preview Area (Left Down) - Enlarged for Impact */}
      <div className="w-[420px] flex flex-col shrink-0 relative z-10">
        <div className="sticky top-0">
          <div className="relative group/preview overflow-hidden rounded-xl bg-gradient-to-br from-white/10 to-white/5 aspect-square flex items-center justify-center border border-white/20 shadow-xl backdrop-blur-sm">
            <AnimatePresence mode="wait">
              {activeImage === 'missing' ? (
                <Link
                  to={activeSlug ? `/product/${activeSlug}` : '#'}
                  onClick={onItemClick}
                  className={`flex flex-col items-center gap-4 text-slate-500 ${activeSlug ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  <motion.div
                    key="missing"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="flex flex-col items-center gap-4"
                  >
                    <div className="p-6 rounded-full bg-white/5 border border-white/10">
                      <ImageIcon size={64} strokeWidth={1} className="opacity-40" />
                    </div>
                    <div className="flex flex-col items-center">
                      {["PYD META RUBY (COMING SOON)", "PYD ROOF COVER (COMING SOON)"].includes((activeName || "").toUpperCase()) ? (
                        <span className="text-3xl md:text-4xl uppercase tracking-[0.2em] font-black text-jdc-orange animate-pulse">
                          Upcoming
                        </span>
                      ) : (
                        <span className="text-xs uppercase tracking-[0.3em] font-black text-jdc-orange/50">
                          Image Missing
                        </span>
                      )}
                      <span className="text-[10px] text-slate-600 mt-1 uppercase font-bold">{activeName}</span>
                    </div>
                  </motion.div>
                </Link>
              ) : activeImage ? (
                <Link
                  to={activeSlug ? `/product/${activeSlug}` : '#'}
                  onClick={onItemClick}
                  className="w-full h-full flex items-center justify-center p-6 relative cursor-pointer group/img"
                >
                  <motion.div
                    key={activeImage}
                    initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1.05, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                    className="w-full h-full flex items-center justify-center relative z-10"
                  >
                    <img
                      src={activeImage}
                      alt={activeName || "Product Preview"}
                      className="w-full h-full object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover/img:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                  {/* Dynamic Glow Effect */}
                  <div className="absolute inset-0 bg-jdc-orange/10 blur-[60px] rounded-full transform scale-75 animate-pulse pointer-events-none"></div>
                </Link>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-6"
                >
                  <div className="relative">
                    <img
                      src="/product/logo.png"
                      alt="Sakarni Logo"
                      className="w-48 h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                    />
                    <div className="absolute -inset-4 bg-jdc-orange/5 blur-2xl rounded-full -z-10 animate-pulse"></div>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20">Select a Product</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle Overlay Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-jdc-blue/20 to-transparent pointer-events-none"></div>
          </div>

          <Link
            to={activeSlug ? `/product/${activeSlug}` : '#'}
            onClick={onItemClick}
            className={`block mt-6 p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 ${activeSlug ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-jdc-orange animate-pulse"></span>
              <span className="text-[9px] text-jdc-orange font-black uppercase tracking-[0.4em]">Product Spotlight</span>
            </div>
            <h4 className="text-white text-xl font-serif font-bold tracking-tight mb-2 group-hover/preview:text-jdc-orange transition-colors">
              {activeName || "Our Collection"}
            </h4>
            <div className="flex items-center justify-between gap-4">
              <p className="text-slate-400 text-[11px] leading-relaxed font-medium opacity-80 flex-1">
                {["PYD META RUBY (COMING SOON)", "PYD ROOF COVER (COMING SOON)"].includes((activeName || "").toUpperCase())
                  ? "UPCOMING PRODUCT - Currently in development to meet our rigorous standards of excellence."
                  : "Discover industry-leading formulations engineered for durability and aesthetic perfection."}
              </p>
              {activeSlug && (
                <div className="w-8 h-8 rounded-full bg-jdc-orange/10 flex items-center justify-center text-jdc-orange group-hover/preview:bg-jdc-orange group-hover/preview:text-white transition-all">
                  <ArrowRight size={14} />
                </div>
              )}
            </div>
          </Link>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-4 gap-x-10 gap-y-12 relative z-10">
        {MEGA_MENU_DATA.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.04 + 0.1, duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <div className="relative">
              <h3 className="text-white/80 text-[10px] font-black uppercase tracking-[0.25em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-jdc-orange/80"></span>
                {category.title}
              </h3>
              <div className="absolute -bottom-2 left-0 w-8 h-[1px] bg-white/10"></div>
            </div>
            <ul className="flex flex-col gap-2.5 mt-2">
              {category.items.map((product, pIdx) => (
                <li key={pIdx}>
                  <Link
                    to={`/product/${product.slug}`}
                    onMouseEnter={() => {
                      setActiveImage(product.image || 'missing');
                      setActiveName(product.name);
                      setActiveSlug(product.slug);
                    }}
                    onClick={onItemClick}
                    className="text-white/50 hover:text-jdc-orange text-[13px] font-semibold transition-all duration-300 flex items-start group/link relative"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300 leading-tight py-0.5">{product.name}</span>
                    <ArrowRight
                      size={10}
                      className="ml-2 mt-1.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const MobileNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
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

  // Close drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div className={`fixed bottom-6 left-4 right-4 z-50 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform md:hidden ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}>
        <nav className="bg-jdc-blue/95 backdrop-blur-2xl rounded-3xl flex justify-between items-center py-4 px-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 mx-auto max-w-sm">
          {navItems.map((item) => {
            const Icon = item.icon!;
            const isProducts = item.label === 'Products';
            const isActive = location.pathname === item.path;

            if (isProducts) {
              return (
                <button
                  key={item.label}
                  onClick={() => setIsDrawerOpen(true)}
                  className={`flex flex-col items-center justify-center gap-1.5 px-3 py-1 rounded-2xl transition-all duration-300 relative group
                  ${isDrawerOpen ? 'text-jdc-orange' : 'text-slate-400'}`}
                >
                  <Icon
                    size={18}
                    strokeWidth={isDrawerOpen ? 3 : 2}
                  />
                  <span className="text-[8px] font-black uppercase tracking-widest">{item.label}</span>
                </button>
              );
            }

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex flex-col items-center justify-center gap-1.5 px-3 py-1 rounded-2xl transition-all duration-300 relative group
                  ${isActive ? 'text-jdc-orange' : 'text-slate-400'}`
                }
              >
                <Icon
                  size={18}
                  strokeWidth={location.pathname === item.path ? 3 : 2}
                />
                <span className="text-[8px] font-black uppercase tracking-widest">{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Next Level Product Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setIsDrawerOpen(false)}
            ></div>

            {/* Menu Container */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 right-0 h-[85vh] bg-jdc-blue/95 border-t border-white/10 rounded-t-[2.5rem] shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 flex items-center justify-between border-b border-white/5 bg-white/5">
                <div className="flex flex-col">
                  <h2 className="text-white font-serif font-bold text-xl uppercase tracking-wider">Product Categories</h2>
                  <p className="text-slate-400 text-[10px] font-bold tracking-widest uppercase">Select to explore</p>
                </div>
                <button
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white border border-white/10"
                >
                  <ChevronDown size={24} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                <div className="space-y-3 pb-24">
                  {MEGA_MENU_DATA.map((category) => (
                    <div
                      key={category.title}
                      className={`rounded-2xl border transition-all duration-300 overflow-hidden
                      ${expandedCategory === category.title ? 'bg-white/10 border-jdc-orange/30' : 'bg-white/5 border-white/5'}`}
                    >
                      <button
                        onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
                        className="w-full flex items-center justify-between p-4 px-5"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center
                          ${expandedCategory === category.title ? 'bg-jdc-orange text-white' : 'bg-white/5 text-slate-400'}`}>
                            <Box size={18} />
                          </div>
                          <span className="text-white font-bold text-sm tracking-widest uppercase">{category.title}</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`text-slate-500 transition-transform duration-300 ${expandedCategory === category.title ? 'rotate-180 text-jdc-orange' : ''}`}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedCategory === category.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-black/20 border-t border-white/5"
                          >
                            <div className="p-2 grid grid-cols-2 gap-2">
                              {category.items.map((prod) => (
                                <Link
                                  key={prod.slug}
                                  to={`/product/${prod.slug}`}
                                  className="flex flex-col bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 hover:border-jdc-orange/20 group transition-all"
                                >
                                  <div className="aspect-square rounded-lg bg-white/5 flex items-center justify-center mb-2 overflow-hidden overflow-hidden p-2">
                                    <img
                                      src={prod.image || '/product/logo.png'}
                                      alt={prod.name}
                                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                  <span className="text-[10px] text-white font-bold text-center leading-tight">{prod.name}</span>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Action Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-jdc-blue to-transparent pt-12">
                <Link
                  to={PageRoute.PRODUCTS}
                  className="w-full py-4 bg-jdc-orange text-white font-black text-xs uppercase tracking-[0.3em] rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-white hover:text-jdc-orange transition-all"
                >
                  View All Products <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};