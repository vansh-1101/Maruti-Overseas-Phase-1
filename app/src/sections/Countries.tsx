import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const countries = [
  {
    name: 'USA',
    description:
      'Home to Ivy League universities and cutting-edge research facilities. World-class education with endless opportunities.',
    image: '/images/country-usa.jpg',
    universities: '4,000+',
    students: '1M+',
  },
  {
    name: 'UK',
    description:
      'Centuries of academic excellence and globally recognized degrees. Study at prestigious institutions like Oxford and Cambridge.',
    image: '/images/country-uk.jpg',
    universities: '150+',
    students: '500K+',
  },
  {
    name: 'Canada',
    description:
      'Affordable education with post-study work opportunities. Welcoming environment for international students.',
    image: '/images/country-canada.jpg',
    universities: '100+',
    students: '600K+',
  },
  {
    name: 'Australia',
    description:
      'World-class universities in a vibrant, multicultural setting. Excellent quality of life and work opportunities.',
    image: '/images/country-australia.jpg',
    universities: '40+',
    students: '400K+',
  },
  {
    name: 'New Zealand',
    description:
      'Quality education with stunning natural landscapes. Safe and welcoming environment for students.',
    image: '/images/country-newzealand.jpg',
    universities: '8+',
    students: '100K+',
  },
  {
    name: 'Europe',
    description:
      'Diverse programs across multiple countries and cultures. Experience rich history and modern innovation.',
    image: '/images/country-europe.jpg',
    universities: '2,000+',
    students: '1.5M+',
  },
];

export default function Countries() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.scrollWidth / countries.length;
      carouselRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = activeIndex === 0 ? countries.length - 1 : activeIndex - 1;
    scrollToCard(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex === countries.length - 1 ? 0 : activeIndex + 1;
    scrollToCard(newIndex);
  };

  return (
    <section
      id="countries"
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
              Study Destinations
            </span>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-white mb-4"
          >
            Choose Your <span className="text-accent">Dream Country</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 text-lg"
          >
            Explore top study destinations with world-class education opportunities
          </motion.p>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-end gap-3 mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-white/30 text-white hover:bg-white hover:text-primary transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-white/30 text-white hover:bg-white hover:text-primary transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Countries Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex-shrink-0 w-[350px] sm:w-[400px] snap-center"
            >
              <div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Country Name */}
                  <h3 className="text-3xl font-poppins font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {country.name}
                  </h3>

                  {/* Stats */}
                  <div className="flex gap-4 mb-3">
                    <div className="text-white/80 text-sm">
                      <span className="text-accent font-semibold">{country.universities}</span>{' '}
                      Universities
                    </div>
                    <div className="text-white/80 text-sm">
                      <span className="text-accent font-semibold">{country.students}</span>{' '}
                      Students
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {country.description}
                  </p>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-accent font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <span>Explore Programs</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {countries.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-accent w-8'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
