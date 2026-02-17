import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, PARENT_COMPANY } from '../constants';
import { PageRoute } from '../types';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram, ArrowRight, Activity, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-slate-400 font-sans border-t border-white/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -top-[200px] right-0 w-[500px] h-[500px] bg-jdc-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Brand Section - Takes up more space */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-white text-3xl font-serif font-bold tracking-tight mb-2 flex items-center gap-3">
                <span className="w-2 h-8 bg-jdc-orange rounded-sm"></span>
                {COMPANY_NAME}
              </h2>
              <p className="text-[11px] text-slate-500 uppercase tracking-[0.2em] font-bold pl-5">
                A Unit of {PARENT_COMPANY}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 font-light pr-4">
              Engineered for chemical perfection. We deliver industrial-grade coatings that define durability and aesthetic excellence across the globe.
            </p>

            <div className="flex gap-4 pt-2">
              {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300 group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Column 1: Explore */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-4 inline-block">Explore</h4>
              <ul className="space-y-4">
                {[
                  { label: 'Company Profile', link: PageRoute.ABOUT },
                  { label: 'Our Products', link: PageRoute.PRODUCTS },
                  { label: 'Infrastructure', link: PageRoute.INFRASTRUCTURE },
                  { label: 'Quality Policy', link: PageRoute.ABOUT }
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={item.link} className="text-sm hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-jdc-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Solutions */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-4 inline-block">Solutions</h4>
              <ul className="space-y-4">
                {['Decorative Paints', 'Industrial Coatings', 'Wood Preservatives', 'Waterproofing Systems', 'Primers & Putty'].map((item, i) => (
                  <li key={i}>
                    <Link to={PageRoute.PRODUCTS} className="text-sm hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-jdc-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-4 inline-block">Contact</h4>
              <ul className="space-y-6">
                <li className="group">
                  <p className="text-[10px] uppercase text-slate-500 font-bold mb-1 group-hover:text-jdc-orange transition-colors">Head Office</p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Site-5, J-10, Kasna Road, <br />
                    Greater Noida, UP - 201312
                  </p>
                </li>
                <li className="group">
                  <p className="text-[10px] uppercase text-slate-500 font-bold mb-1 group-hover:text-jdc-orange transition-colors">Support</p>
                  <p className="text-sm text-slate-300 font-mono">+91 99716 61234</p>
                  <p className="text-sm text-slate-300">info@jaidurgachemical.com</p>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Newsletter & Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="w-full md:w-auto">
            <p className="text-white text-lg font-serif italic mb-4">Subscribe to our technical newsletter</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-slate-700 py-3 pr-12 text-white placeholder:text-slate-600 focus:outline-none focus:border-jdc-orange transition-colors w-full md:w-80"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-500 hover:text-jdc-orange transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="text-right">
            <div className="flex gap-6 justify-end text-xs text-slate-500 font-medium mb-2">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
            <p className="text-[10px] text-slate-600 uppercase tracking-wider">
              &copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;