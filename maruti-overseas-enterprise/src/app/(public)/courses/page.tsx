'use client';

import { motion } from 'framer-motion';
import { BookOpen, Globe, ArrowRight, CheckCircle, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { trialCourses, foreignCourses } from '@/data/courses';

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 opacity-10 bg-[url('/images/grid-pattern.svg')] bg-center" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Global Potential</span>
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                            Explore our comprehensive range of courses designed to prepare you for international success. From language proficiency to specialized academic programs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Trial Courses Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Start Your Journey</span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Trial Courses</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Experience our premium teaching quality with these specialized trial sessions. Perfect for test preparation and language basics.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {trialCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group bg-gray-50 hover:bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                        <BookOpen className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Trial
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                    {course.title.replace('- Trial', '')}
                                </h3>

                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                    <span>Available Now</span>
                                </div>

                                <Link
                                    href="/book-consultation"
                                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm"
                                >
                                    Book Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Foreign Courses Section */}
            <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">Academic Pathways</span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Explore Foreign Courses</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover opportunities in top global industries. Find the perfect program for your career goals.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {foreignCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                <div className="p-8">
                                    <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <Globe className="w-7 h-7 text-purple-600" />
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        {course.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                                        {course.description}
                                    </p>

                                    <Link
                                        href={course.link || '#'}
                                        className="flex items-center justify-between w-full p-3 rounded-xl bg-gray-50 hover:bg-purple-50 group-hover:text-purple-700 transition-colors"
                                    >
                                        <span className="font-semibold text-sm">Explore Programs</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/world-map.svg')] opacity-10 bg-center bg-no-repeat bg-cover" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-6">Not Sure Which Course is Right for You?</h2>
                    <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                        Our expert counselors can help you assess your profile and choose the best path for your future.
                    </p>
                    <Link
                        href="/book-consultation"
                        className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:bg-blue-50 transition-all inline-flex items-center gap-3"
                    >
                        <GraduationCap className="w-6 h-6" />
                        Get Free Expert Advice
                    </Link>
                </div>
            </section>
        </div>
    );
}
