import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    university: 'University of Toronto, Canada',
    image: '/images/testimonial-1.jpg',
    rating: 5,
    quote:
      'Maruti Overseas made my dream of studying in Canada a reality. Their expert guidance through every step was invaluable. From university selection to visa approval, they were there for me.',
  },
  {
    id: 2,
    name: 'Rahul Patel',
    university: 'Birmingham University, UK',
    image: '/images/testimonial-2.jpg',
    rating: 5,
    quote:
      'Best consultancy in Gujarat! Got my UK visa in just 15 days. The team is professional, knowledgeable, and genuinely cares about students success. Highly recommended!',
  },
  {
    id: 3,
    name: 'Neha Gupta',
    university: 'Melbourne University, Australia',
    image: '/images/testimonial-3.jpg',
    rating: 5,
    quote:
      'Excellent support for IELTS preparation and university applications. The counselors are patient and provide personalized attention. Thank you for helping me achieve my dreams!',
  },
  {
    id: 4,
    name: 'Amit Shah',
    university: 'Auckland University, New Zealand',
    image: '/images/testimonial-4.jpg',
    rating: 5,
    quote:
      'Professional team with genuine care for students futures. They helped me choose the right course and university. The entire process was smooth and hassle-free.',
  },
  {
    id: 5,
    name: 'Deepa Mehta',
    university: 'NYU, USA',
    image: '/images/testimonial-5.jpg',
    rating: 5,
    quote:
      'They made the entire process stress-free and smooth. From documentation to visa interview preparation, everything was handled professionally. Forever grateful!',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding bg-light-gray relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-1 bg-accent rounded-full" />
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Testimonials
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-text-dark mb-4"
            >
              What Our <span className="gradient-text">Students Say</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-text-light text-lg mb-8"
            >
              Real stories from students who achieved their dreams with our guidance
            </motion.p>

            {/* Featured Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative bg-white rounded-2xl p-8 shadow-card"
            >
              <Quote className="absolute top-4 right-4 w-12 h-12 text-accent/20" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-text-dark text-lg italic mb-6">
                "{testimonials[activeIndex].quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <div className="font-poppins font-bold text-text-dark">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-sm text-text-light">
                    {testimonials[activeIndex].university}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 mt-6"
            >
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="w-12 h-12 rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
              <div className="flex gap-2 ml-auto">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-accent w-8'
                        : 'bg-primary/20 hover:bg-primary/40'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Stacked Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-[500px] perspective-1000 hidden lg:block"
          >
            {testimonials.map((testimonial, index) => {
              const offset = index - activeIndex;
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={testimonial.id}
                  initial={false}
                  animate={{
                    x: offset * 30,
                    y: offset * 20,
                    scale: isActive ? 1 : 0.9 - Math.abs(offset) * 0.05,
                    zIndex: testimonials.length - Math.abs(offset),
                    opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.2,
                    rotateY: offset * 5,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-white rounded-2xl shadow-card p-8 preserve-3d cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-text-dark italic mb-6 line-clamp-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                    />
                    <div>
                      <div className="font-poppins font-bold text-text-dark">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-text-light">
                        {testimonial.university}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
