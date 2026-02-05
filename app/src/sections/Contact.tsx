import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visnagar Office',
    details: [
      '123, Maruti Complex,',
      'Near Bus Station, Visnagar - 384315',
      'Gujarat, India',
    ],
  },
  {
    icon: MapPin,
    title: 'Ahmedabad Office',
    details: [
      '456, Sunrise Tower,',
      'CG Road, Ahmedabad - 380009',
      'Gujarat, India',
    ],
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: [
      '+91 79-2652-3733 (Landline)',
      '+91 98765-43210 (Mobile)',
      '+91 98765-43211 (WhatsApp)',
    ],
  },
  {
    icon: Mail,
    title: 'Email Address',
    details: [
      'info@marutioverseas.com',
      'admissions@marutioverseas.com',
      'support@marutioverseas.com',
    ],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: [
      'Monday - Saturday',
      '9:00 AM - 7:00 PM',
      'Sunday: Closed',
    ],
  },
];

const countries = [
  'USA',
  'UK',
  'Canada',
  'Australia',
  'New Zealand',
  'Europe',
  'Other',
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', country: '', message: '' });
    }, 3000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-accent/5 to-transparent rounded-full blur-3xl" />

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
              Get In Touch
            </span>
            <div className="w-12 h-1 bg-accent rounded-full" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-text-dark mb-4"
          >
            Start Your <span className="gradient-text">Journey Today</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-light text-lg"
          >
            Book a free consultation and take the first step towards your global education
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="perspective-1000"
          >
            <div className="bg-white rounded-2xl shadow-card p-8 border border-border-gray">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-success" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold text-text-dark mb-2">
                    Thank You!
                  </h3>
                  <p className="text-text-light">
                    We have received your inquiry. Our team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border-gray focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border-gray focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        placeholder="+91 98765-43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border-gray focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-dark mb-2">
                        Preferred Country *
                      </label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) =>
                          setFormData({ ...formData, country: value })
                        }
                      >
                        <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-border-gray focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your study abroad goals..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border-gray focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Book Free Consultation
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: 60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex gap-4 p-4 rounded-xl hover:bg-light-gray transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                  <info.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-text-dark mb-1">
                    {info.title}
                  </h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-text-light text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="rounded-2xl overflow-hidden shadow-card h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center"
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-2" />
                <p className="text-text-light text-sm">
                  Visnagar & Ahmedabad, Gujarat
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
