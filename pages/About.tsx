import React from 'react';
import { COMPANY_NAME, LEADERSHIP, PARENT_COMPANY, LEADERSHIP_IMAGES } from '../constants';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-jdc-cream pb-12 md:pb-20 relative">

      {/* Header - Centered & Big */}
      <div className="bg-white pt-12 pb-12 md:pt-20 md:pb-20 px-4 md:px-6 text-center border-b border-slate-100 relative overflow-hidden">
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-noise mix-blend-multiply pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-jdc-orange font-bold tracking-widest uppercase text-[10px] md:text-sm mb-3 md:mb-4 block reveal-on-scroll">Our Legacy</span>
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-bold text-jdc-blue mb-4 md:mb-8 leading-tight reveal-on-scroll">
            Building Trust Through <span className="block md:inline"> </span><span className="text-transparent bg-clip-text bg-gradient-to-r from-jdc-blue to-jdc-orange italic">Chemical Innovation.</span>
          </h1>
          <div className="w-16 md:w-24 h-1 md:h-1.5 bg-jdc-orange mx-auto rounded-full mb-4 md:mb-8 reveal-on-scroll"></div>
          <p className="text-sm md:text-xl text-slate-600 leading-relaxed reveal-on-scroll px-2">
            We are more than just a paint company. We are a team of chemists, engineers, and visionaries dedicated to protecting the world's infrastructure.
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-10 md:space-y-20 mt-8 md:mt-20">

        {/* Philosophy Section */}
        <section className="reveal-on-scroll">
          <h2 className="text-xl md:text-3xl font-serif font-bold text-jdc-dark mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
            <span className="w-1.5 md:w-2 h-6 md:h-8 bg-jdc-blue rounded-full"></span>
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 gap-4 md:gap-6 text-slate-600 text-xs md:text-base leading-relaxed">
            <p>
              At {COMPANY_NAME}, we believe that quality is not a variable—it's a constant.
              In an industry often plagued by inconsistency, we have built our reputation on the promise that every barrel, every bucket, and every liter performs exactly as specified.
            </p>
            <p>
              Serving a B2B clientele requires more than just a good product; it requires reliability.
              We act as an extension of our clients' manufacturing processes, ensuring that our coatings meet the stringent requirements of OEM partners and global contractors.
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="reveal-on-scroll">
          <h2 className="text-xl md:text-3xl font-serif font-bold text-jdc-dark mb-6 md:mb-10 flex items-center gap-2 md:gap-3">
            <span className="w-1.5 md:w-2 h-6 md:h-8 bg-jdc-orange rounded-full"></span>
            Our Journey
          </h2>
          <div className="border-l-2 border-slate-200 ml-2 md:ml-5 space-y-6 md:space-y-12 pb-2">
            {[
              { year: '1998', title: 'Inception', desc: 'Started as a small blending unit in Delhi.' },
              { year: '2005', title: 'Expansion', desc: 'Moved to a 10,000 sq ft facility and began OEM partnerships.' },
              { year: '2012', title: 'Sakarni Group', desc: 'Became a proud subsidiary of the Sakarni Group, enhancing R&D capabilities.' },
              { year: '2023', title: 'Global Standards', desc: 'Achieved ISO 9001:2015 certification and expanded export operations.' }
            ].map((item, i) => (
              <div key={i} className="relative pl-5 md:pl-10 group">
                <div className="absolute -left-[7px] md:-left-[9px] top-0.5 md:top-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white border-3 md:border-4 border-slate-300 group-hover:border-jdc-orange transition-colors"></div>
                <span className="text-[10px] md:text-sm font-bold text-jdc-orange block mb-0.5 md:mb-1">{item.year}</span>
                <h3 className="text-base md:text-xl font-bold font-serif text-jdc-blue mb-1 md:mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs md:text-base pr-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Section - Full Width */}
        <section className="reveal-on-scroll">
          <h2 className="text-xl md:text-3xl font-serif font-bold text-jdc-dark mb-8 md:mb-12 flex items-center gap-2 md:gap-3">
            <span className="w-1.5 md:w-2 h-6 md:h-8 bg-jdc-blue rounded-full"></span>
            Guided by Experience
          </h2>

          {/* Chairman */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden mb-6 md:mb-16 border border-slate-100 reveal-on-scroll">
            {/* Mobile: Stacked Vertical, Desktop: Side by Side */}
            <div className="md:grid md:grid-cols-2">
              {/* Image */}
              <div className="h-80 md:h-full md:min-h-96 bg-gradient-to-br from-jdc-blue/10 to-jdc-orange/10 flex items-center justify-center overflow-hidden">
                <img
                  src={LEADERSHIP_IMAGES.chairman}
                  alt="Ashok Kumar Gupta"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-6 md:p-12 flex flex-col justify-center space-y-5 md:space-y-6">
                <div>
                  <h3 className="font-bold font-serif text-jdc-dark text-2xl md:text-3xl mb-1.5 md:mb-2">{LEADERSHIP.chairman}</h3>
                  <p className="text-jdc-orange font-semibold text-base md:text-lg">Founder & Chairman</p>
                </div>

                <div className="flex items-start">
                  <Quote className="text-jdc-blue/20 mr-3" size={40} />
                  <p className="text-base md:text-lg font-medium font-serif text-jdc-dark italic leading-relaxed">
                    "We didn't just build a factory. We built a culture where excellence is the only metric."
                  </p>
                </div>

                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  For over 25 years, our mission has been singular: to provide industrial coatings that withstand the test of time. In an industry driven by volume, we chose value. Every batch that leaves our facility carries my personal guarantee of quality.
                </p>
              </div>
            </div>
          </div>

          {/* Directors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                name: LEADERSHIP.directors[0],
                role: "Director • Operations",
                image: LEADERSHIP_IMAGES.director_vikas,
                quote: "Precision isn't an accident. It's engineered. We are digitizing our production lines to ensure 100% repeatability."
              },
              {
                name: LEADERSHIP.directors[1],
                role: "Director • Strategy",
                image: LEADERSHIP_IMAGES.director_mohit,
                quote: "To lead the market, we must first lead in innovation. Our R&D focus is second to none."
              }
            ].map((director, i) => (
              <div key={i} className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden border border-slate-100 reveal-on-scroll" style={{ transitionDelay: `${(i + 1) * 100}ms` }}>
                {/* Mobile: Vertical Stack, Desktop: Horizontal */}
                <div className="md:grid md:grid-cols-3">
                  {/* Image */}
                  <div className="h-72 md:h-64 bg-gradient-to-br from-jdc-blue/10 to-jdc-orange/10 flex items-center justify-center overflow-hidden">
                    <img
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Content */}
                  <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-center space-y-4">
                    <div>
                      <h3 className="font-bold font-serif text-jdc-dark text-xl md:text-2xl mb-1">{director.name}</h3>
                      <p className="text-jdc-orange font-semibold text-base md:text-base">{director.role}</p>
                    </div>

                    <div className="flex items-start">
                      <Quote className="text-jdc-orange/20 mr-2 flex-shrink-0" size={36} />
                      <p className="text-sm md:text-base font-medium font-serif text-jdc-dark italic leading-relaxed">
                        "{director.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Powered By Section */}
        <div className="bg-gradient-to-r from-jdc-blue to-jdc-blue/80 text-white p-6 md:p-12 rounded-xl md:rounded-2xl shadow-lg reveal-on-scroll text-center">
          <p className="text-[10px] md:text-base font-semibold uppercase tracking-widest text-jdc-orange mb-2 md:mb-3">Powered By</p>
          <h3 className="text-2xl md:text-4xl font-serif font-bold">{PARENT_COMPANY}</h3>
        </div>

      </div>
    </div>
  );
};

export default About;
