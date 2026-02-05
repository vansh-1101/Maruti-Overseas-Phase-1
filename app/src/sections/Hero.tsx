import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trustBadges = [
  { icon: Users, value: '15,000+', label: 'Students Placed' },
  { icon: Award, value: '98%', label: 'Visa Success Rate' },
  { icon: TrendingUp, value: '50+', label: 'Partner Universities' },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on scroll
      gsap.to(imageRef.current, {
        y: -80,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-light-gray via-white to-light-gray"
    >
      {/* Floating Orbs Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-primary-light/10 blur-3xl animate-float"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-br from-accent/20 to-accent-yellow/10 blur-3xl animate-float animation-delay-300"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-gradient-to-br from-primary-light/20 to-accent-light/10 blur-3xl animate-float animation-delay-500"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Headline with word-by-word animation */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-text-dark leading-tight mb-6">
              <motion.span
                initial={{ opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                Your Dreams of
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block gradient-text"
              >
                Studying Abroad
              </motion.span>{' '}
              <motion.span
                initial={{ opacity: 0, y: 40, clipPath: 'inset(100% 0 0 0)' }}
                animate={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block"
              >
                Start Here
              </motion.span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
              className="text-lg text-text-light mb-8 max-w-xl"
            >
              Expert guidance for student visas, university admissions, and test
              preparation. 20+ years of excellence in Gujarat helping students
              achieve their global education dreams.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.9, ease: [0.68, -0.55, 0.265, 1.55] }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary flex items-center gap-2 group"
              >
                Book Free Counseling
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                onClick={() => scrollToSection('#services')}
                variant="outline"
                className="btn-secondary"
              >
                Explore Services
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex flex-wrap gap-6"
            >
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 1.1 + index * 0.1,
                    ease: [0.68, -0.55, 0.265, 1.55],
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <badge.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-poppins font-bold text-text-dark">
                      {badge.value}
                    </div>
                    <div className="text-sm text-text-light">{badge.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, rotateY: 15, x: 100 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 perspective-1000"
          >
            <div className="relative">
              {/* Image Frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero-main.jpg"
                  alt="Professional education consultants"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-card p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-dark">
                    Since 2004
                  </div>
                  <div className="text-xs text-text-light">
                    20+ Years Experience
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
