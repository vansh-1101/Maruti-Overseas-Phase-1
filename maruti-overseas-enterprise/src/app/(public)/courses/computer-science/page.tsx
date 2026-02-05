'use client';

import { motion } from 'framer-motion';
import { Cpu, Code, Database, Smartphone, Cloud, Shield } from 'lucide-react';
import Link from 'next/link';

export default function ComputerSciencePage() {
    const specializations = [
        { name: 'Artificial Intelligence & Machine Learning', icon: Cpu, demand: 'Very High' },
        { name: 'Software Engineering', icon: Code, demand: 'Very High' },
        { name: 'Data Science & Analytics', icon: Database, demand: 'Very High' },
        { name: 'Mobile App Development', icon: Smartphone, demand: 'High' },
        { name: 'Cloud Computing', icon: Cloud, demand: 'Very High' },
        { name: 'Cybersecurity', icon: Shield, demand: 'Very High' },
    ];

    const topPrograms = [
        { university: 'Stanford University', country: 'USA', ranking: 1, tuition: 55000, duration: '2 years' },
        { university: 'MIT', country: 'USA', ranking: 1, tuition: 53000, duration: '2 years' },
        { university: 'Carnegie Mellon', country: 'USA', ranking: 3, tuition: 48000, duration: '2 years' },
        { university: 'UC Berkeley', country: 'USA', ranking: 4, tuition: 45000, duration: '2 years' },
        { university: 'University of Oxford', country: 'UK', ranking: 5, tuition: 30000, duration: '1 year' },
        { university: 'ETH Zurich', country: 'Switzerland', ranking: 6, tuition: 1500, duration: '2 years' },
    ];

    const careerPaths = [
        { title: 'Software Engineer', salary: '$120K - $200K', growth: '+22%' },
        { title: 'Data Scientist', salary: '$130K - $210K', growth: '+36%' },
        { title: 'AI/ML Engineer', salary: '$140K - $250K', growth: '+40%' },
        { title: 'Cloud Architect', salary: '$135K - $220K', growth: '+30%' },
        { title: 'Cybersecurity Analyst', salary: '$110K - $180K', growth: '+33%' },
        { title: 'Full Stack Developer', salary: '$100K - $170K', growth: '+25%' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                                <Code className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl font-bold">Computer Science & IT</h1>
                        </div>
                        <p className="text-2xl text-blue-100 mb-8">
                            Shape the future with cutting-edge technology. High demand, excellent salaries, global opportunities.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/tools/course-finder" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition-all">
                                Find Programs
                            </Link>
                            <Link href="/book-consultation" className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all">
                                Get Counseling
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Specializations */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Popular Specializations</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specializations.map((spec, index) => (
                            <motion.div
                                key={spec.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                                    <spec.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{spec.name}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">Demand:</span>
                                    <span className={`text-sm font-semibold ${spec.demand === 'Very High' ? 'text-green-600' : 'text-blue-600'}`}>
                                        {spec.demand}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Programs */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Top CS Programs Worldwide</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topPrograms.map((program, index) => (
                            <motion.div
                                key={program.university}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                                        Rank #{program.ranking}
                                    </div>
                                    <div className="text-sm text-gray-500">{program.country}</div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.university}</h3>
                                <div className="space-y-2 text-sm text-gray-600">
                                    <div className="flex justify-between">
                                        <span>Tuition:</span>
                                        <span className="font-semibold">${program.tuition.toLocaleString()}/year</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Duration:</span>
                                        <span className="font-semibold">{program.duration}</span>
                                    </div>
                                </div>
                                <Link href="/book-consultation" className="mt-4 block text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                                    Apply Now
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Career Paths */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Career Opportunities</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {careerPaths.map((career, index) => (
                            <motion.div
                                key={career.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{career.title}</h3>
                                <div className="text-2xl font-bold text-purple-600 mb-1">{career.salary}</div>
                                <div className="text-sm text-green-600 font-semibold">Growth: {career.growth}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Start Your CS Journey Today</h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        Get personalized guidance to find the perfect Computer Science program
                    </p>
                    <Link href="/book-consultation" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
