import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Users, Award, TrendingUp, Building2 } from 'lucide-react';

const keyPoints = [
  'Personalized counseling for every student',
  'Strong partnerships with top global universities',
  'Comprehensive test preparation support',
  'High visa success rate with expert documentation',
];

const stats = [
  { icon: Award, value: 20, suffix: '+', label: 'Years of Experience' },
  { icon: Users, value: 15000, suffix: '+', label: 'Students Placed' },
  { icon: TrendingUp, value: 98, suffix: '%', label: 'Visa Success Rate' },
  { icon: Building2, value: 50, suffix: '+', label: 'Partner Universities' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Animated Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -inset-4 border-2 border-accent/30 rounded-3xl"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -inset-8 border border-primary/20 rounded-3xl"
              />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <motion.div
                  initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                  animate={isInView ? { clipPath: 'circle(100% at 50% 50%)' } : {}}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src="/images/about-image.jpg"
                    alt="About Maruti Overseas"
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              </div>

              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-6 shadow-card"
              >
                <div className="text-4xl font-poppins font-bold">20+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-1 bg-accent rounded-full" />
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                About Us
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-text-dark mb-6"
            >
              20+ Years of Excellence in{' '}
              <span className="gradient-text">Overseas Education</span>
            </motion.h2>

            {/* Body Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-light text-lg mb-8"
            >
              Since 2004, Maruti Overseas has been the trusted partner for students
              aspiring to study abroad. Our expert counselors provide personalized
              guidance through every step - from university selection to visa
              approval.
            </motion.p>

            {/* Key Points */}
            <div className="space-y-4 mb-10">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-text-dark">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                  className="text-center p-4 rounded-xl bg-light-gray hover:bg-white hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <stat.icon className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <div className="text-2xl font-poppins font-bold text-text-dark">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-text-light mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
