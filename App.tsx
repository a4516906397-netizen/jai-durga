import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { PageRoute } from './types';
import { DesktopNav, MobileNav } from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Admin from './pages/Admin';
import FloatingContact from './components/FloatingContact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="font-sans antialiased text-slate-800 bg-gray-50 flex flex-col min-h-screen">
        <FloatingContact />

        {/* Navigation - Header (Brand Bar) is now visible on mobile via DesktopNav */}
        <DesktopNav />

        {/* Mobile Bottom Menu - Only visible on mobile */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path={PageRoute.HOME} element={<Home />} />
            <Route path={PageRoute.ABOUT} element={<About />} />
            <Route path={PageRoute.PRODUCTS} element={<Products />} />
            <Route path="/product/:slug" element={<ProductDetails />} />
            <Route path={PageRoute.CONTACT} element={<Contact />} />
            <Route path={PageRoute.FAQ} element={<FAQ />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;