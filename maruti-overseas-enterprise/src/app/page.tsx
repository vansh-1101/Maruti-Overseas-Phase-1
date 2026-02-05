'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, GraduationCap, Calculator, FileText, Award, Globe, TrendingUp, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import CounterAnimation from '@/components/CounterAnimation';
import TrustBadges from '@/components/TrustBadges';

export default function HomePage() {
  const [currentCountry, setCurrentCountry] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const countries = [
    {
      name: 'USA',
      code: 'US',
      flag: '🇺🇸',
      tagline: 'World\'s Top Universities',
      universities: '4,000+',
      students: '1M+',
      gradient: 'from-blue-600 via-red-500 to-blue-800',
      image: '/images/country-usa.jpg',
      highlights: ['MIT, Stanford, Harvard', 'STEM OPT: 3 Years', 'Silicon Valley Hub'],
    },
    {
      name: 'UK',
      code: 'GB',
      flag: '🇬🇧',
      tagline: 'Historic Excellence',
      universities: '130+',
      students: '600K+',
      gradient: 'from-red-700 via-white to-blue-700',
      image: '/images/country-uk.jpg',
      highlights: ['Oxford, Cambridge', '1-Year Masters', 'Post-Study: 2 Years'],
    },
    {
      name: 'Canada',
      code: 'CA',
      flag: '🇨🇦',
      tagline: 'Immigration Friendly',
      universities: '100+',
      students: '800K+',
      gradient: 'from-red-600 via-white to-red-600',
      image: '/images/country-canada.jpg',
      highlights: ['PR Pathway', 'Affordable Tuition', '3-Year Work Permit'],
    },
    {
      name: 'Australia',
      code: 'AU',
      flag: '🇦🇺',
      tagline: 'Quality of Life',
      universities: '43',
      students: '700K+',
      gradient: 'from-blue-600 via-yellow-400 to-blue-600',
      image: '/images/country-australia.jpg',
      highlights: ['Top 8 Universities', 'Beach Lifestyle', 'Work While Study'],
    },
    {
      name: 'Germany',
      code: 'DE',
      flag: '🇩🇪',
      tagline: 'Tuition-Free Education',
      universities: '400+',
      students: '400K+',
      gradient: 'from-black via-red-600 to-yellow-500',
      image: '/images/country-europe.jpg',
      highlights: ['€0 Tuition', 'Engineering Hub', 'EU Access'],
    },
    {
      name: 'Ireland',
      code: 'IE',
      flag: '🇮🇪',
      tagline: 'Tech Giants Hub',
      universities: '7',
      students: '35K+',
      gradient: 'from-green-600 via-white to-orange-500',
      image: '/images/country-europe.jpg',
      highlights: ['Google, Facebook HQ', 'English Speaking', '2-Year Stay Back'],
    },
    {
      name: 'New Zealand',
      code: 'NZ',
      flag: '🇳🇿',
      tagline: 'Safe & Beautiful',
      universities: '8',
      students: '100K+',
      gradient: 'from-blue-700 via-red-600 to-blue-700',
      image: '/images/country-newzealand.jpg',
      highlights: ['Safest Country', 'Natural Beauty', '3-Year Work Visa'],
    },
  ];

  const tools = [
    {
      title: 'Course Finder',
      description: 'Search 200K+ courses from top universities worldwide',
      icon: GraduationCap,
      link: '/tools/course-finder',
      color: 'from-blue-500 to-cyan-500',
      category: 'SEARCH',
      usageStats: 'Used by 5000+ students',
    },
    {
      title: 'Eligibility Checker',
      description: 'AI-powered admission chances calculator',
      icon: FileText,
      link: '/tools/eligibility-checker',
      color: 'from-purple-500 to-pink-500',
      category: 'ASSESSMENT',
      usageStats: 'Updated: 500+ universities',
    },
    {
      title: 'Cost Calculator',
      description: 'Calculate tuition + living costs by country',
      icon: Calculator,
      link: '/tools/cost-calculator',
      color: 'from-green-500 to-emerald-500',
      category: 'CALCULATOR',
      usageStats: 'Compare 50+ countries',
    },
    {
      title: 'Scholarship Finder',
      description: 'Find scholarships worth $300K+',
      icon: Award,
      link: '/tools/scholarship-finder',
      color: 'from-orange-500 to-red-500',
      category: 'FINDER',
      usageStats: 'Browse 1000+ scholarships',
    },
  ];

  const stats = [
    { label: 'Years of Excellence', value: '20+', numericValue: 20, suffix: '+', icon: TrendingUp, subtext: '(Since 2004)' },
    { label: 'Students Placed', value: '5000+', numericValue: 5000, suffix: '+', icon: Users, subtext: 'Success Stories' },
    { label: 'Success Rate', value: '95%', numericValue: 95, suffix: '%', icon: Star, subtext: 'Visa Approval' },
    { label: 'Partner Universities', value: '200+', numericValue: 200, suffix: '+', icon: Globe, subtext: 'Worldwide' },
  ];

  const testimonials = [
    {
      name: 'Priya Patel',
      university: '🇺🇸 Stanford University',
      country: 'USA',
      timeline: '8 weeks',
      scholarship: '$40,000',
      testScore: 'IELTS: 7.5',
      course: 'MS Computer Science',
      image: '/images/testimonial-1.jpg',
      rating: 5,
      text: 'Maruti Overseas made my Stanford dream a reality! Got $40K scholarship with their expert guidance.',
    },
    {
      name: 'Rahul Shah',
      university: '🇬🇧 London Business School',
      country: 'UK',
      timeline: '10 weeks',
      scholarship: '£25,000',
      testScore: 'GMAT: 720',
      course: 'MBA',
      image: '/images/testimonial-2.jpg',
      rating: 5,
      text: 'From GMAT prep to visa interview, they were with me every step. Now at world\'s top B-school!',
    },
    {
      name: 'Anjali Desai',
      university: '🇨🇦 University of Toronto',
      country: 'Canada',
      timeline: '6 weeks',
      scholarship: 'CAD $30,000',
      testScore: 'IELTS: 8.0',
      course: 'MS Data Science',
      image: '/images/testimonial-3.jpg',
      rating: 5,
      text: 'Got my Canada study permit in just 4 weeks! Their visa expertise is unmatched.',
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentCountry((prev) => (prev + 1) % countries.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoPlay, countries.length]);

  const nextCountry = () => {
    setAutoPlay(false);
    setCurrentCountry((prev) => (prev + 1) % countries.length);
  };

  const prevCountry = () => {
    setAutoPlay(false);
    setCurrentCountry((prev) => (prev - 1 + countries.length) % countries.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Country Carousel */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Your Dream University
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Awaits You
                </span>
              </h1>

              {/* Enhanced Value Proposition */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-lg font-medium">Expert guidance from 20+ years of experience</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-lg font-medium">5000+ successful student placements worldwide</span>
                </div>
                <div className="flex items-center gap-3 text-blue-100">
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-lg font-medium">95% visa success rate across all countries</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {/* Primary CTA - Larger and more prominent */}
                <Link
                  href="/book-consultation"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all inline-flex items-center gap-3 hover:scale-105"
                >
                  Book Free Consultation <ArrowRight className="w-6 h-6" />
                </Link>
                {/* Secondary CTA - More subtle */}
                <Link
                  href="/tools/course-finder"
                  className="bg-white/10 backdrop-blur hover:bg-white/20 text-white px-8 py-5 rounded-full font-semibold text-lg border-2 border-white/30 transition-all hover:border-white/50"
                >
                  Explore Courses
                </Link>
              </div>
            </motion.div>

            {/* Right: Country Carousel */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCountry}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  {/* Large Country Image Card */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
                    {/* Background Image */}
                    <Image
                      src={countries[currentCountry].image}
                      alt={countries[currentCountry].name}
                      fill
                      className="object-cover"
                      priority
                    />

                    {/* Gradient Overlay - Reduced opacity for better image visibility */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${countries[currentCountry].gradient} opacity-50`} />

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-8 text-white">
                      {/* Top: Country Info */}
                      <div>
                        <div className="inline-block bg-black/40 backdrop-blur-md rounded-full px-4 py-2 text-sm font-semibold mb-4">
                          {countries[currentCountry].flag} {countries[currentCountry].code}
                        </div>
                        <h2 className="text-5xl font-bold mb-3 drop-shadow-lg">{countries[currentCountry].name}</h2>
                        <p className="text-xl text-white/95 mb-6 drop-shadow-md">{countries[currentCountry].tagline}</p>
                      </div>

                      {/* Middle: Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 text-center">
                          <div className="text-4xl font-bold drop-shadow-lg">{countries[currentCountry].universities}</div>
                          <div className="text-sm text-white/95 mt-1">Universities</div>
                        </div>
                        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-4 text-center">
                          <div className="text-4xl font-bold drop-shadow-lg">{countries[currentCountry].students}</div>
                          <div className="text-sm text-white/95 mt-1">Students</div>
                        </div>
                      </div>

                      {/* Bottom: Highlights */}
                      <div className="space-y-2">
                        {countries[currentCountry].highlights.slice(0, 3).map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm bg-black/40 backdrop-blur-md rounded-lg px-3 py-2">
                            <span className="text-green-300">✓</span>
                            <span className="drop-shadow-md">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link
                        href={`/countries/${countries[currentCountry].name.toLowerCase().replace(' ', '-')}`}
                        className="block w-full bg-white text-gray-900 px-6 py-4 rounded-full font-bold text-center hover:bg-gray-100 transition-all shadow-lg mt-4"
                      >
                        Explore {countries[currentCountry].name} →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevCountry}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/20 backdrop-blur hover:bg-white/30 text-white p-3 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextCountry}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/20 backdrop-blur hover:bg-white/30 text-white p-3 rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {countries.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrentCountry(idx);
                      setAutoPlay(false);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentCountry ? 'bg-white w-8' : 'bg-white/40'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Bar */}
      <section className="bg-white py-12 shadow-lg relative z-10 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ delay: index * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-xl group-hover:scale-110 transition-all">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  <CounterAnimation
                    end={stat.numericValue}
                    suffix={stat.suffix}
                    className="text-4xl font-bold text-gray-900"
                  />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.subtext}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Tools */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Smart Tools for{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Smart Students
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                AI-powered tools to help you find the perfect university, course, and scholarship
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group"
              >
                <Link href={tool.link} className="block h-full">
                  <div className="relative h-full bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group-hover:border-blue-200">
                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                    {/* Icon with minimal design */}
                    <div className="relative mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-gray-200">
                        <tool.icon className="w-7 h-7 text-gray-700 group-hover:text-blue-600 transition-colors duration-500" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                        {tool.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                        {tool.description}
                      </p>

                      {/* Elegant Arrow Indicator */}
                      <div className="flex items-center gap-2 text-gray-400 group-hover:text-blue-600 transition-all duration-300">
                        <span className="text-sm font-medium">Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${tool.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Join 5000+ students who achieved their study abroad dreams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.university}</p>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.course}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/success-stories"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 text-lg"
            >
              Read More Success Stories <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-2xl text-blue-100 mb-8">
              Book a free consultation with our expert counselors today
            </p>
            <Link
              href="/book-consultation"
              className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2 shadow-2xl hover:shadow-3xl"
            >
              Book Free Consultation <ArrowRight className="w-6 h-6" />
            </Link>
            <p className="text-sm text-blue-200 mt-4">
              ✓ No cost, no obligation • ✓ Expert guidance • ✓ 20+ years experience
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
