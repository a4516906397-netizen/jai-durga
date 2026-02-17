import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME } from '../constants';
import { PageRoute } from '../types';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-slate-400 font-sans border-t border-white/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -top-[200px] right-0 w-[500px] h-[500px] bg-jdc-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h2 className="text-white text-3xl font-serif font-bold tracking-tight mb-1">
                {COMPANY_NAME}
              </h2>
              <p className="text-jdc-orange text-[10px] font-black uppercase tracking-[0.3em] mb-4">
                Premium Manufacturing
              </p>
              <p className="text-sm leading-relaxed text-slate-400 font-light pr-4 italic">
                A premium leader in retail market, industrial paints and surface coatings. Delivering excellence under the trusted legacy of Sakarni.
              </p>
            </div>
          </div>

          {/* Navigation Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Column 1: Company */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-4 inline-block tracking-[0.2em]">Company</h4>
              <ul className="space-y-4">
                {[
                  { label: 'About Us', link: PageRoute.ABOUT },
                  { label: 'Our Products', link: PageRoute.PRODUCTS },
                  { label: 'Knowledge Base (FAQ)', link: PageRoute.FAQ },
                  { label: 'Contact Support', link: PageRoute.CONTACT }
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={item.link} className="text-sm hover:text-white transition-colors flex items-center gap-2 group">
                      <ChevronRight size={10} className="text-jdc-orange opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      <span className="group-hover:text-jdc-orange transition-colors">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Expertise */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-4 inline-block tracking-[0.2em]">Expertise</h4>
              <ul className="space-y-4">
                {[
                  'Retail Market Requirements',
                  'Industrial Coatings',
                  'Architectural Finishes',
                  'Wood Preservatives'
                ].map((item, i) => (
                  <li key={i}>
                    <Link to={PageRoute.PRODUCTS} className="text-sm hover:text-white transition-colors flex items-center gap-2 group">
                      <ChevronRight size={10} className="text-jdc-orange opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      <span className="group-hover:text-jdc-orange transition-colors">{item}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Get in Touch */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 border-b border-white/10 pb-4 inline-block tracking-[0.2em]">Get in Touch</h4>
              <ul className="space-y-5">
                <li className="flex gap-3 items-start group">
                  <MapPin size={18} className="text-jdc-orange shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                    J-10, Site-V, Industrial Area , Greater Noida, <br />
                    District - Gautam Buddha Nagar, UP - 201310
                  </p>
                </li>
                <li className="flex gap-3 items-center group">
                  <Phone size={18} className="text-jdc-orange shrink-0" />
                  <p className="text-sm text-slate-300 font-mono group-hover:text-white transition-colors">+91 99716 61234</p>
                </li>
                <li className="flex gap-3 items-center group">
                  <Mail size={18} className="text-jdc-orange shrink-0" />
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors">info@jaidurgachemical.com</p>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar - Minimalist */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-slate-600 uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
            <span className="hover:text-jdc-orange cursor-pointer transition-colors">Quality First</span>
            <span className="hover:text-jdc-orange cursor-pointer transition-colors">Legacy Driven</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;