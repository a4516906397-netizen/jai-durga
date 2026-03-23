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

              </p>
              <p className="text-sm leading-relaxed text-slate-400 font-light pr-4 italic">

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
                  { label: 'Dealer Enquiry', link: PageRoute.FAQ },
                  { label: 'Contact Us', link: PageRoute.CONTACT }
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
                  'Committed to Customer Delight',
                  'Advanced Paint Formulations',
                  'Research and Innovation',
                  'Sustainable & Eco-Friendly Solutions'
                ].map((item, i) => (
                  <li key={i}>
                    <div className="text-sm hover:text-white transition-colors flex items-center gap-2 group cursor-default">
                      <ChevronRight size={10} className="text-jdc-orange opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      <span className="group-hover:text-jdc-orange transition-colors">{item}</span>
                    </div>
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
                    J-10, Site-V, Industrial Area, Greater Noida, <br />
                    District - Gautam Buddha Nagar, UP - 201310
                  </p>
                </li>
                <li className="flex gap-3 items-center group">
                  <Phone size={18} className="text-jdc-orange shrink-0" />
                  <a href="tel:+919971661234" className="text-sm text-slate-300 font-mono group-hover:text-white transition-colors">+91 99716 61234</a>
                </li>
                <li className="flex gap-3 items-center group">
                  <div className="w-[18px] h-[18px] bg-jdc-orange rounded-full flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" size="12" fill="white" className="w-3 h-3"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                  <a href="https://wa.me/919971661234" target="_blank" className="text-sm text-slate-300 group-hover:text-white transition-colors">WhatsApp Chat</a>
                </li>
                <li className="flex gap-3 items-center group">
                  <Mail size={18} className="text-jdc-orange shrink-0" />
                  <a href="mailto:info@jaidurgachemicals.com" className="text-sm text-slate-300 group-hover:text-white transition-colors">info@jaidurgachemicals.com</a>
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