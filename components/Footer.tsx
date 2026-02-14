import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, PARENT_COMPANY } from '../constants';
import { PageRoute } from '../types';
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter, Award } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-jdc-dark text-slate-400 relative overflow-hidden font-sans">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-jdc-blue via-jdc-orange to-jdc-blue opacity-50"></div>

      {/* Background Subtle Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-jdc-orange/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-10 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="space-y-4 md:space-y-6">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-2 md:mb-3">{COMPANY_NAME}</h2>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[8px] md:text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                  Premium Manufacturing
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm leading-relaxed text-slate-400 max-w-xs">
              A premium leader in retail market, industrial paints and surface coatings.
              Delivering excellence under the trusted legacy of <span className="text-white font-medium">{PARENT_COMPANY}</span>.
            </p>

            <div className="flex gap-3 pt-2 md:pt-4">
              <a href="#" className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-jdc-orange hover:border-jdc-orange hover:text-white transition-all duration-300 group">
                <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-300 group">
                <Facebook size={16} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-sky-500 hover:border-sky-500 hover:text-white transition-all duration-300 group">
                <Twitter size={16} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-[8px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-8 border-b border-white/10 pb-2 inline-block">Company</h3>
            <ul className="space-y-3 md:space-y-4">
              {[
                { label: 'About Us', link: PageRoute.ABOUT },
                { label: 'Our Products', link: PageRoute.PRODUCTS },
                { label: 'Knowledge Base (FAQ)', link: PageRoute.FAQ },
                { label: 'Contact Support', link: PageRoute.CONTACT }
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.link} className="group flex items-center gap-2 md:gap-3 text-xs md:text-sm hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 bg-jdc-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions / Segments */}
          <div>
            <h3 className="text-white text-[8px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-8 border-b border-white/10 pb-2 inline-block">Expertise</h3>
            <ul className="space-y-3 md:space-y-4 text-xs md:text-sm">
              <li className="flex items-center gap-2 md:gap-3 text-slate-400 group cursor-default">
                <Award size={14} className="text-jdc-orange/50 group-hover:text-jdc-orange transition-colors shrink-0" />
                <span className="group-hover:text-white transition-colors">Retail Market Requirements</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-slate-400 group cursor-default">
                <Award size={14} className="text-jdc-orange/50 group-hover:text-jdc-orange transition-colors shrink-0" />
                <span className="group-hover:text-white transition-colors">Industrial Coatings</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-slate-400 group cursor-default">
                <Award size={14} className="text-jdc-orange/50 group-hover:text-jdc-orange transition-colors shrink-0" />
                <span className="group-hover:text-white transition-colors">Architectural Finishes</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3 text-slate-400 group cursor-default">
                <Award size={14} className="text-jdc-orange/50 group-hover:text-jdc-orange transition-colors shrink-0" />
                <span className="group-hover:text-white transition-colors">Wood Preservatives</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-[8px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-8 border-b border-white/10 pb-2 inline-block">Get in Touch</h3>
            <ul className="space-y-3 md:space-y-6 text-xs md:text-sm">
              <li className="flex items-start gap-3 md:gap-4 group">
                <div className="w-7 md:w-8 h-7 md:h-8 rounded-sm bg-white/5 flex items-center justify-center text-jdc-orange group-hover:bg-jdc-orange group-hover:text-white transition-colors shrink-0 border border-white/10">
                  <MapPin size={14} />
                </div>
                <span className="leading-relaxed text-slate-400 group-hover:text-slate-200 transition-colors text-[11px] md:text-sm">
                  J-10, Site-V, Industrial Area , Greater Noida,<br />
                  District - Gautam Buddha Nagar, UP - 201310
                </span>
              </li>
              <li className="flex items-center gap-3 md:gap-4 group">
                <div className="w-7 md:w-8 h-7 md:h-8 rounded-sm bg-white/5 flex items-center justify-center text-jdc-orange group-hover:bg-jdc-orange group-hover:text-white transition-colors shrink-0 border border-white/10">
                  <Phone size={14} />
                </div>
                <span className="font-mono text-slate-400 group-hover:text-white transition-colors text-[11px] md:text-sm">+91 99716 61234</span>
              </li>
              <li className="flex items-center gap-3 md:gap-4 group">
                <div className="w-7 md:w-8 h-7 md:h-8 rounded-sm bg-white/5 flex items-center justify-center text-jdc-orange group-hover:bg-jdc-orange group-hover:text-white transition-colors shrink-0 border border-white/10">
                  <Mail size={14} />
                </div>
                <span className="text-slate-400 group-hover:text-white transition-colors text-[11px] md:text-sm">info@jaidurgachemical.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-[10px] md:text-xs text-slate-500 font-medium">
          <p className="tracking-wide">&copy; {new Date().getFullYear()} {COMPANY_NAME} Pvt. Ltd.</p>
          <div className="flex gap-4 md:gap-8">
            <a href="#" className="hover:text-jdc-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-jdc-orange transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-jdc-orange transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;