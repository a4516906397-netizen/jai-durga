import React from 'react';
import { COMPANY_NAME, LEADERSHIP, PARENT_COMPANY, LEADERSHIP_IMAGES } from '../constants';
import { Quote, Target, Shield, Zap, Award, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Editorial Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-jdc-blue">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-jdc-orange/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6 md:mb-8 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-jdc-orange animate-pulse"></span>
              <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.3em]">Established Excellence</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-8 md:mb-12 leading-[1.1]">
              The Science of <span className="italic text-slate-400">Protection.</span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed mb-10 md:mb-16 border-l-2 border-jdc-orange/30 pl-6 md:pl-10">
              {COMPANY_NAME} is driven by proven expertise, advanced manufacturing, and
              a relentless commitment to superior quality standards across all decorative and
              industrial formulations.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Purpose - Editorial Layout */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start">
            <div className="reveal-on-scroll">
              <span className="text-jdc-orange font-bold uppercase tracking-widest text-xs mb-6 block">Our Essence</span>
              <h2 className="text-3xl md:text-5xl font-serif text-jdc-blue mb-8 leading-tight">
                Not just products. <br />
                <span className="italic text-slate-400">Process-driven solutions.</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
                <p>
                  Established in 2003, Sakarni was founded to deliver affordable, high-quality solutions for construction and surface beautification. Driven by perseverance, innovation, and continuous research, the company has evolved to meet changing market demands.
                </p>
                <p>
                  Today, Sakarni is recognized as a trusted name in construction solutions and a leading plaster of Paris brand in Northern India, while maintaining global standards through strategic partnerships.
                </p>
                <p>
                  At Jai Durga Chemical, our philosophy is anchored in the belief that decorative and industrial coatings are the silent guardians of surfaces and infrastructure.
                  We don't just sell paint; we deliver a promise of durability, consistency, and technical superiority.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              {[
                { icon: Shield, title: "Integrity", desc: "Unwavering commitment to chemical specifications and raw material purity." },
                { icon: Target, title: "Precision", desc: "Automated dosing and blending for batch-to-batch repeatability." },
                { icon: Zap, title: "Innovation", desc: "R&D focused on functional coatings for extreme industrial environments." },
                { icon: Award, title: "Mastery", desc: "Built on 45 years of industrial mastery and process-driven manufacturing excellence." }
              ].map((pill, i) => (
                <div key={i} className="p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-jdc-orange/20 transition-all duration-300 group">
                  <pill.icon className="text-jdc-orange mb-6 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-jdc-blue mb-3 font-serif">{pill.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{pill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Boardroom Professionalism */}
      <section className="py-24 md:py-40 bg-white px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-32">
            <span className="text-jdc-orange font-bold uppercase tracking-widest text-xs mb-4 block">The Board</span>
            <h2 className="text-4xl md:text-6xl font-serif text-jdc-blue">Guided by Visionaries</h2>
          </div>

          {/* Chairman - The Executive Profile */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-center reveal-on-scroll">
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 border border-jdc-orange/20 rounded-2xl -rotate-2"></div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                <img src={LEADERSHIP_IMAGES.chairman} alt={LEADERSHIP.chairman} className="w-full h-full object-cover object-top" />
              </div>
              <div className="absolute -bottom-10 -right-6 lg:-right-10 bg-jdc-blue text-white p-8 rounded-xl shadow-2xl max-w-xs border-t-4 border-jdc-orange">
                <p className="text-jdc-orange font-bold uppercase tracking-widest text-[10px] mb-2">Founder & Chairman</p>
                <h3 className="text-2xl font-serif font-bold">{LEADERSHIP.chairman}</h3>
              </div>
            </div>
            <div className="lg:col-span-7">
              <Quote className="text-jdc-orange/20 mb-8" size={60} />
              <p className="text-2xl md:text-4xl font-serif text-jdc-blue leading-tight mb-12 italic text-slate-500">
                Our commitment is to build long-term client partnerships through quality, reliability, and trust.
              </p>
              <div className="prose prose-lg text-slate-600 font-light leading-relaxed max-w-2xl">
                <p>
                  With a rich legacy of 45 years, we continue to set unmatched benchmarks
                  in quality, precision, and consistency within the competitive building materials market.
                  Our journey is one of continuous evolution—we have expanded our technological
                  footprint and digitized our manufacturing command centers, all while preserving
                  the personalized dedication, integrity, and core values of a family-managed
                  powerhouse. This blend of modern scale and traditional accountability ensures
                  that every product we deliver is a testament to our enduring commitment
                  to excellence.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-6">
                <div className="h-px w-12 bg-slate-300"></div>
                <span className="font-serif text-xl text-slate-400">Dr. Ashok Kumar Gupta</span>
              </div>
            </div>
          </div>

          {/* Directors - Collaborative Excellence (Chairman Style Cards) */}
          <div className="mt-40 space-y-48">
            {[
              {
                name: LEADERSHIP.directors[1],
                role: "Director",
                image: LEADERSHIP_IMAGES.director_mohit,
                bio: [
                  "With a professional journey spanning over 15 years, Mr. Mohit Aggarwal has established unparalleled mastery in the gypsum sector. He has been instrumental in diversifying the Sakarni product spectrum—from premium Plaster of Paris and ready-mix plasters to the landmark launch of 'GIPSKARTON SAKARNI GYPSUM BOARD,' a vibrant addition to our high-performance drywall solutions.",
                  "Driven by a vision of a 'Green house & Eco-friendly India,' he is committed to transforming Indian resources into sustainable, environmentally responsible gypsum-based systems. His leadership ensures that quality remains the core sphere of all activities, focusing on smart, certified solutions that not only lead market trends but also redefine customer satisfaction in the building materials industry."
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
                  <div className={`absolute -bottom-10 ${director.reverse ? '-left-4 lg:-left-10' : '-right-4 lg:-right-10'} bg-jdc-blue text-white p-6 md:p-8 rounded-xl shadow-2xl max-w-[200px] md:max-w-xs border-t-4 border-jdc-orange z-20`}>
                    <p className="text-jdc-orange font-bold uppercase tracking-widest text-[8px] md:text-[10px] mb-2">{director.role}</p>
                    <h3 className="text-lg md:text-2xl font-serif font-bold">{director.name}</h3>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <span className="text-jdc-orange/20 block mb-6">
                    <Quote size={60} />
                  </span>
                  <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
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


      {/* Corporate Sign-off */}
      <section className="py-20 md:py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <CheckCircle2 className="text-jdc-orange mx-auto mb-8" size={48} />
          <h2 className="text-3xl md:text-5xl font-serif text-jdc-blue mb-8">Our promise is in every drop.</h2>
          <div className="w-20 h-1 bg-jdc-orange mx-auto mb-12"></div>
          <p className="text-slate-500 text-sm md:text-base font-bold uppercase tracking-[0.4em]">
            Excellence in Every Formulation
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
