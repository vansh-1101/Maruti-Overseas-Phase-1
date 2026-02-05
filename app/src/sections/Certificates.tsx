import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const certificates = [
  'ICEF Certified',
  'NAFSA Member',
  'AAIEI Member',
  'British Council Partner',
  'IDP Partner',
  'QEAC Certified',
  'MARA Registered',
  'ENZ Recognized',
];

const partners = [
  'Harvard University',
  'MIT',
  'Stanford University',
  'Oxford University',
  'Cambridge University',
  'University of Toronto',
  'University of Melbourne',
  'Auckland University',
];

export default function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Duplicate arrays for seamless loop
  const duplicatedCertificates = [...certificates, ...certificates];
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="section-padding bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-1 bg-accent rounded-full" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Our Credentials
            </span>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-white mb-4"
          >
            Certified & <span className="text-accent">Trusted</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg"
          >
            Recognized by leading education bodies and partnered with top universities worldwide
          </motion.p>
        </div>
      </div>

      {/* Certificates Marquee - Left to Right */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mb-8"
      >
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />

        <div className="flex animate-marquee">
          {duplicatedCertificates.map((cert, index) => (
            <div
              key={`cert-${index}`}
              className="flex-shrink-0 mx-4 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <span className="text-white font-medium whitespace-nowrap group-hover:text-accent transition-colors">
                {cert}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Partners Marquee - Right to Left */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative"
      >
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10" />

        <div className="flex animate-marquee-reverse">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`partner-${index}`}
              className="flex-shrink-0 mx-4 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <span className="text-white/80 font-medium whitespace-nowrap group-hover:text-accent-yellow transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="container-custom mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '15+', label: 'Certifications' },
            { value: '50+', label: 'Partner Universities' },
            { value: '20+', label: 'Years Experience' },
            { value: '15K+', label: 'Students Placed' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-poppins font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
