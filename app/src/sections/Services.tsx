import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  GraduationCap,
  Plane,
  FileText,
  BookOpen,
  Ticket,
  Banknote,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Student Visa',
    description:
      'Expert guidance for student visas to USA, UK, Canada, Australia, New Zealand & Europe. We handle the entire process from application to approval.',
    color: 'from-primary to-primary-dark',
  },
  {
    icon: Plane,
    title: 'Tourist Visa',
    description:
      'Hassle-free tourist visa processing for all major destinations worldwide. Quick turnaround with high approval rates.',
    color: 'from-accent to-accent-light',
  },
  {
    icon: FileText,
    title: 'Immigrant Visa',
    description:
      'Professional assistance for family and employment-based immigration. Navigate complex immigration laws with our experts.',
    color: 'from-primary-light to-primary',
  },
  {
    icon: BookOpen,
    title: 'Test Preparation',
    description:
      'IELTS, TOEFL, PTE, GRE, GMAT coaching with expert faculty. Comprehensive study materials and mock tests.',
    color: 'from-accent-yellow to-accent',
  },
  {
    icon: Ticket,
    title: 'Air Ticketing',
    description:
      'Domestic and international flight bookings at competitive rates. Special student fares and group discounts available.',
    color: 'from-primary-dark to-primary-light',
  },
  {
    icon: Banknote,
    title: 'Forex Services',
    description:
      'Currency exchange and money transfer through Western Union & MoneyGram. RBI-approved agents for secure transactions.',
    color: 'from-accent-light to-accent-yellow',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-padding bg-light-gray relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(30,60,114,0.05)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,107,53,0.05)_0%,transparent_50%)]" />
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
              Our Services
            </span>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-text-dark mb-4"
          >
            Comprehensive Solutions for Your{' '}
            <span className="gradient-text">Global Journey</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-light text-lg"
          >
            From visa applications to test preparation, we provide end-to-end
            support for your overseas education dreams.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group"
            >
              <div
                className={`relative bg-white rounded-2xl p-8 shadow-card card-hover overflow-hidden ${
                  index % 2 === 1 ? 'lg:mt-8' : ''
                }`}
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-poppins font-bold text-text-dark mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-light mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Read More Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-accent font-semibold group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
