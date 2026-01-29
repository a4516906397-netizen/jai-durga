import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { PageRoute } from './types';
import { DesktopNav, MobileNav } from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Infrastructure from './pages/Infrastructure';
import Contact from './pages/Contact';

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
            <Route path={PageRoute.INFRASTRUCTURE} element={<Infrastructure />} />
            <Route path={PageRoute.CONTACT} element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;