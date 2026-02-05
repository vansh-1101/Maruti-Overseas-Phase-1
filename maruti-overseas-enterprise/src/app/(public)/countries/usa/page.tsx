'use client';

import { motion } from 'framer-motion';
import { GraduationCap, DollarSign, Clock, TrendingUp, Award, MapPin, Users, Building2, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function USAPage() {
    const stats = [
        { label: 'Universities', value: '4,000+', icon: Building2 },
        { label: 'International Students', value: '1M+', icon: Users },
        { label: 'Average Tuition', value: '$35,000', icon: DollarSign },
        { label: 'Post-Study Work', value: '3 Years', icon: Clock },
    ];

    const topUniversities = [
        { name: 'Stanford University', ranking: 2, location: 'California', tuition: 55000 },
        { name: 'MIT', ranking: 1, location: 'Massachusetts', tuition: 53000 },
        { name: 'Harvard University', ranking: 3, location: 'Massachusetts', tuition: 54000 },
        { name: 'UC Berkeley', ranking: 4, location: 'California', tuition: 45000 },
        { name: 'Columbia University', ranking: 7, location: 'New York', tuition: 61000 },
        { name: 'University of Chicago', ranking: 10, location: 'Illinois', tuition: 59000 },
    ];

    const popularCourses = [
        'Computer Science & IT',
        'Business & Management',
        'Engineering',
        'Data Science & Analytics',
        'Medicine & Healthcare',
        'Law',
    ];

    const visaRequirements = [
        'Valid Passport',
        'I-20 Form from University',
        'DS-160 Confirmation',
        'SEVIS Fee Payment',
        'Visa Application Fee ($185)',
        'Financial Documents',
        'Academic Transcripts',
        'English Proficiency Scores',
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: 'url(/images/country-usa.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/70 to-indigo-900/70" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-4xl">
                                🇺🇸
                            </div>
                            <h1 className="text-5xl font-bold">Study in USA</h1>
                        </div>
                        <p className="text-2xl text-blue-100 mb-8">
                            Home to world's top universities and cutting-edge research. Build your future in the land of opportunities.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/book-consultation" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition-all inline-flex items-center gap-2">
                                Start Your Application <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/tools/course-finder" className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all">
                                Find Courses
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white relative z-10 -mt-8">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-blue-900 mb-1">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why USA */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Study in USA?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'World-Class Education', description: 'Home to 50+ universities in global top 100', icon: GraduationCap },
                            { title: 'Research Opportunities', description: 'Cutting-edge research facilities and funding', icon: TrendingUp },
                            { title: 'Career Prospects', description: 'OPT allows 3 years of work experience', icon: Award },
                            { title: 'Diverse Culture', description: 'Students from 200+ countries', icon: Users },
                            { title: 'Flexible Education', description: 'Choose majors, minors, and electives', icon: FileText },
                            { title: 'Innovation Hub', description: 'Silicon Valley, Boston, NYC tech scenes', icon: Building2 },
                        ].map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                                    <benefit.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Universities */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Top Universities in USA</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Study at world-renowned institutions with cutting-edge research and global recognition
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topUniversities.map((uni, index) => (
                            <motion.div
                                key={uni.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all group"
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <GraduationCap className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold">
                                        Rank #{uni.ranking}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{uni.name}</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <MapPin className="w-5 h-5 text-blue-500" />
                                        <span className="font-medium">{uni.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <DollarSign className="w-5 h-5 text-green-500" />
                                        <span className="font-medium">${uni.tuition.toLocaleString()}/year</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Clock className="w-5 h-5 text-orange-500" />
                                        <span className="font-medium">2 years</span>
                                    </div>
                                </div>
                                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg">
                                    Apply Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Courses */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Popular Courses</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {popularCourses.map((course, index) => (
                            <motion.div
                                key={course}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all text-center"
                            >
                                <span className="font-semibold text-gray-900">{course}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visa Requirements */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">F-1 Student Visa Requirements</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {visaRequirements.map((req, index) => (
                            <motion.div
                                key={req}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 bg-gray-50 rounded-xl p-4"
                            >
                                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">{req}</span>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link href="/tools/visa-checklist" className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                            Get Complete Visa Checklist
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Study in USA?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Our expert counselors have helped 1000+ students get admitted to top US universities
                    </p>
                    <Link href="/book-consultation" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
