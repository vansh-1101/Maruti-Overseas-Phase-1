import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, School, FileCheck, Plane } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Free Counseling',
    description:
      'Book a free session with our experts to discuss your goals, academic background, and study abroad aspirations.',
  },
  {
    number: '02',
    icon: School,
    title: 'University Selection',
    description:
      'We help you choose the perfect university and course based on your profile, budget, and career goals.',
  },
  {
    number: '03',
    icon: FileCheck,
    title: 'Application & Visa',
    description:
      'Complete assistance with applications, documentation, SOP writing, and visa filing with expert guidance.',
  },
  {
    number: '04',
    icon: Plane,
    title: 'Pre-Departure Support',
    description:
      'Get ready for your journey with our comprehensive pre-departure briefing, accommodation help, and travel arrangements.',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="w-12 h-1 bg-accent rounded-full" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Our Process
            </span>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-text-dark mb-4"
          >
            Your Journey in <span className="gradient-text">4 Simple Steps</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-light text-lg"
          >
            We make the complex process of studying abroad simple and stress-free
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2" />

          {/* Mobile Line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary" />

          {/* Steps */}
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : {}
                }
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 ml-20 lg:ml-0 ${
                    index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'
                  }`}
                >
                  <div
                    className={`inline-flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <span className="text-5xl font-poppins font-bold text-accent/20">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-poppins font-bold text-text-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-text-light max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Center Icon */}
                <div className="absolute left-8 lg:left-1/2 lg:-translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + index * 0.2,
                      ease: [0.68, -0.55, 0.265, 1.55],
                    }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/30"
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
