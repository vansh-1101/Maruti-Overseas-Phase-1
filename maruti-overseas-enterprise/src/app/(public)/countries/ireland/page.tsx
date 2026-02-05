'use client';

import { motion } from 'framer-motion';
import { GraduationCap, DollarSign, Clock, Users, Building2, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function IrelandPage() {
    const stats = [
        { label: 'Universities', value: '7', icon: Building2 },
        { label: 'International Students', value: '35K+', icon: Users },
        { label: 'Average Tuition', value: '€12,000', icon: DollarSign },
        { label: 'Post-Study Work', value: '2 Years', icon: Clock },
    ];

    const topUniversities = [
        { name: 'Trinity College Dublin', ranking: 98, location: 'Dublin', tuition: 18000, duration: '2 years' },
        { name: 'University College Dublin', ranking: 171, location: 'Dublin', tuition: 17000, duration: '2 years' },
        { name: 'University of Galway', ranking: 289, location: 'Galway', tuition: 14000, duration: '2 years' },
        { name: 'University College Cork', ranking: 292, location: 'Cork', tuition: 15000, duration: '2 years' },
        { name: 'Dublin City University', ranking: 436, location: 'Dublin', tuition: 13000, duration: '2 years' },
        { name: 'University of Limerick', ranking: 531, location: 'Limerick', tuition: 12000, duration: '2 years' },
    ];

    return (
        <div className="min-h-screen">
            <section className="relative bg-gradient-to-br from-green-600 via-emerald-600 to-green-800 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/images/country-ireland.jpg)' }} />
                <div className="absolute inset-0 bg-gradient-to-br from-green-700/70 via-emerald-700/70 to-green-900/30" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-4xl">🇮🇪</div>
                            <h1 className="text-5xl font-bold">Study in Ireland</h1>
                        </div>
                        <p className="text-2xl text-green-100 mb-8">
                            English-speaking EU country with tech hub, friendly culture, and quality education.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/book-consultation" className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all inline-flex items-center gap-2">
                                Start Your Application <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link href="/tools/course-finder" className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all">
                                Find Courses
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white shadow-lg relative z-10 -mt-8">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <stat.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Top Universities in Ireland</h2>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Study at Ireland's prestigious universities in the heart of Europe's tech hub
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topUniversities.map((uni, index) => (
                            <motion.div key={uni.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all group">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <GraduationCap className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">Rank #{uni.ranking}</div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{uni.name}</h3>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <MapPin className="w-5 h-5 text-green-600" />
                                        <span className="font-medium">{uni.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <DollarSign className="w-5 h-5 text-green-500" />
                                        <span className="font-medium">€{uni.tuition.toLocaleString()}/year</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Clock className="w-5 h-5 text-orange-500" />
                                        <span className="font-medium">{uni.duration}</span>
                                    </div>
                                </div>
                                <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 rounded-full font-bold transition-all shadow-md hover:shadow-lg">
                                    Apply Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Study in Ireland?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Book a free consultation with our Ireland education experts today
                    </p>
                    <Link href="/book-consultation" className="bg-white text-green-600 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transition-all inline-flex items-center gap-3">
                        Book Free Consultation <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
