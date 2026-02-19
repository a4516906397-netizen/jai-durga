import React from 'react';
import { COMPANY_NAME, LEADERSHIP, PARENT_COMPANY, LEADERSHIP_IMAGES } from '../constants';
import { Quote, Compass, Shield, Zap, Award, CheckCircle2, Building2, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">

      {/* ── CLEAN HERO SECTION ── */}
      <section className="relative pt-32 pb-8 md:pt-48 md:pb-12 px-6 overflow-hidden bg-white text-center border-b border-slate-100">
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-jdc-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-jdc-blue/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-8 bg-slate-50 border border-slate-100 px-6 py-2 rounded-full backdrop-blur-sm">
              <Building2 size={14} className="text-jdc-orange" />
              <span className="text-jdc-blue text-[11px] font-black uppercase tracking-[0.5em]">About Our Company</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-serif text-jdc-blue mb-6 leading-tight">
              Driven by <br />
              <span className="italic text-slate-400 font-light">Excellence.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERTISE & PILLARS ── */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Top: Full Width Professional Narrative */}
          <div className="max-w-6xl mb-12 md:mb-16">
            <div className="space-y-8 text-slate-600 font-light leading-relaxed text-lg md:text-xl text-left border-l-2 border-jdc-orange/20 pl-8 md:pl-10">
              <p>
                Jai Durga Chemical Pvt Ltd is a professionally managed paint manufacturing company committed to delivering high-quality decorative, industrial, and protective coating solutions. With a strong focus on innovation, durability, and aesthetic excellence, we provide products that enhance and protect surfaces across residential, commercial, and industrial sectors.
              </p>
              <p>
                Our company combines advanced manufacturing technology with strict quality control systems to ensure consistent performance and long-lasting finish. We aim to deliver products that meet global quality standards while offering cost-effective solutions to our customers.
              </p>
            </div>
          </div>

          {/* Bottom: Vision & Mission Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:border-jdc-orange/20 transition-all duration-700 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-jdc-orange/10 flex items-center justify-center text-jdc-orange mb-8 group-hover:bg-jdc-orange group-hover:text-white transition-all duration-500">
                <Target size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-jdc-blue mb-4 font-serif">Our Vision</h3>
              <div className="text-slate-600 leading-relaxed font-light text-lg md:text-xl space-y-4">
                <p>
                  To become a trusted and leading manufacturer of innovative paint and coating solutions. To enhance modern infrastructure and elevate the beauty of living spaces.
                </p>
                <p>
                  To set new benchmarks in quality, durability, and performance. To promote sustainable and environmentally responsible manufacturing practices. To continuously innovate through advanced technology and research.
                </p>
                <p>
                  To build long-term relationships based on trust, transparency, and reliability. To expand our presence across India and global markets. To contribute to a stronger, safer, and more colorful future.
                </p>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 bg-white border border-jdc-orange/10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-700 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-jdc-orange/5 rounded-full -translate-y-16 translate-x-16 blur-2xl group-hover:bg-jdc-orange/10 transition-colors"></div>
              <div className="w-16 h-16 rounded-2xl bg-jdc-orange flex items-center justify-center text-white mb-8 shadow-lg shadow-jdc-orange/20">
                <Zap size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-jdc-blue mb-6 font-serif">Our Mission</h3>
              <ul className="space-y-4">
                {[
                  "Deliver superior quality paint products",
                  "Maintain innovation through advanced formulations",
                  "Build long-term customer relationships",
                  "Ensure environmentally responsible manufacturing",
                  "Provide reliable supply and technical support"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-light group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-jdc-orange opacity-40 group-hover/item:opacity-100 transition-opacity"></div>
                    <span className="text-lg md:text-xl group-hover/item:text-jdc-blue transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Boardroom Professionalism */}
      <section className="py-16 md:py-24 bg-[#FAF9F6] px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-32">
            <span className="text-jdc-orange font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Our Leadership</span>
            <h2 className="text-4xl md:text-6xl font-serif text-jdc-blue">Chairman & Directors</h2>
          </div>

          {/* Chairman - The Executive Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20 items-center reveal-on-scroll">
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 border border-jdc-orange/20 rounded-2xl -rotate-2"></div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                <img src={LEADERSHIP_IMAGES.chairman} alt={LEADERSHIP.chairman} className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-10 -right-6 lg:-right-10 bg-[#0e2050] text-white p-8 rounded-xl shadow-2xl max-w-xs border-t-4 border-jdc-orange">
                <p className="text-jdc-orange font-bold uppercase tracking-widest text-[10px] mb-2">Founder & Chairman</p>
                <h3 className="text-2xl font-serif font-bold">{LEADERSHIP.chairman}</h3>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Quote className="text-jdc-orange/20 mb-8" size={60} />
              <p className="text-2xl md:text-3xl font-serif text-[#0e2050] leading-tight mb-12 italic text-slate-500">
                Dr. Ashok Kumar Gupta is a visionary entrepreneur and respected leader in the construction materials industry, with over four decades of rich experience and deep domain expertise.
              </p>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg md:text-xl max-w-2xl">
                <p>
                  Known for his strategic foresight and strong technical understanding, he has consistently driven growth through innovation, quality, and disciplined execution. His leadership philosophy centers on integrity, customer trust, and long-term value creation.
                </p>
                <p>
                  Dr. Gupta believes that sustainable success is built on uncompromising standards and continuous improvement. Under his guidance, modern manufacturing practices and robust quality systems have been established, setting high industry benchmarks.
                </p>
                <p>
                  Admired for his ethical approach and forward-thinking mindset, Dr. Ashok Kumar Gupta continues to inspire excellence and contribute meaningfully to infrastructure development and industry advancement.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="h-px w-12 bg-slate-300"></div>
                <span className="font-serif text-xl text-slate-400">Dr. Ashok Kumar Gupta</span>
              </div>
            </div>
          </div>

          {/* Directors - Collaborative Excellence */}
          <div className="mt-24 space-y-32">
            {[
              {
                name: LEADERSHIP.directors[1],
                role: "Director",
                image: LEADERSHIP_IMAGES.director_mohit,
                bio: [
                  "With a professional journey spanning over 15 years, Mr. Mohit Aggarwal has established unparalleled mastery in the coatings and construction chemicals sector. He has been instrumental in diversifying the company's product spectrum—from premium architectural paints to high-performance industrial solutions, ensuring a vibrant addition to our professional range.",
                  "Driven by a vision of a 'Green and Eco-friendly India,' he is committed to transforming industry resources into sustainable, environmentally responsible coating systems. His leadership ensures that quality remains the core sphere of all activities, focusing on smart, certified solutions that not only lead market trends but also redefine customer satisfaction."
                ],
                reverse: true
              },
              {
                name: LEADERSHIP.directors[0],
                role: "Director",
                image: LEADERSHIP_IMAGES.director_vikas,
                bio: [
                  "With a sharp strategic vision and unwavering determination, Mr. Vikas Jain stands as a driving force behind the growth and evolution of the organization. A self-made leader, he has transformed challenges into opportunities and played a pivotal role in building strong, trusted brands in the building materials sector.",
                  "His deep understanding of retail dynamics, project execution, and market behavior empowers the company to navigate complex challenges and deliver consistent success. Guided by resilience, innovation, and forward-thinking leadership, he continues to inspire progress, strengthen partnerships, and shape a future defined by performance, trust, and excellence."
                ],
                reverse: false
              }
            ].map((director, i) => (
              <div key={i} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center reveal-on-scroll`}>
                <div className={`lg:col-span-5 relative ${director.reverse ? 'lg:order-last' : ''} mb-12 lg:mb-0`}>
                  <div className={`absolute -inset-4 border border-jdc-orange/20 rounded-2xl ${director.reverse ? 'rotate-2' : '-rotate-2'}`}></div>
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 max-w-md mx-auto lg:max-w-none">
                    <img src={director.image} alt={director.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className={`absolute -bottom-10 ${director.reverse ? '-left-4 lg:-left-10' : '-right-4 lg:-right-10'} bg-[#0e2050] text-white p-6 md:p-8 rounded-xl shadow-2xl max-w-[200px] md:max-w-xs border-t-4 border-jdc-orange z-20`}>
                    <p className="text-jdc-orange font-bold uppercase tracking-widest text-[8px] md:text-[10px] mb-2">{director.role}</p>
                    <h3 className="text-lg md:text-2xl font-serif font-bold">{director.name}</h3>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <span className="text-jdc-orange/20 block mb-6">
                    <Quote size={60} />
                  </span>
                  <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg md:text-xl">
                    {director.bio.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOVED AND REFINED SECTION ── */}
      <section className="relative py-16 md:py-24 px-6 text-center border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Checkbox Icon */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-jdc-orange flex items-center justify-center">
              <CheckCircle2 className="text-jdc-orange" size={48} strokeWidth={1.5} />
            </div>
          </div>

          {/* Main Heading - REFINED SIZE */}
          <h1 className="text-[50px] md:text-[100px] font-serif text-[#0e2050] leading-[0.9] mb-12 tracking-tight">
            Our promise is <br />
            <span className="italic font-light text-slate-400">in every drop.</span>
          </h1>

          {/* Divider Line */}
          <div className="w-24 h-[1px] bg-slate-200 mx-auto mb-12"></div>

          {/* Subtext - REFINED SIZE */}
          <p className="text-[12px] md:text-[16px] text-slate-400 font-bold uppercase tracking-[0.5em]">
            Excellence in Every Formulation
          </p>
        </div>
      </section>

    </div>
  );
};

export default About;
