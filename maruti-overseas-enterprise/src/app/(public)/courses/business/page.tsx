'use client';

import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Users, Briefcase, DollarSign, Globe } from 'lucide-react';
import Link from 'next/link';

export default function BusinessPage() {
    const specializations = [
        { name: 'MBA (General Management)', icon: Briefcase, demand: 'Very High' },
        { name: 'Finance & Investment Banking', icon: DollarSign, demand: 'Very High' },
        { name: 'Marketing & Brand Management', icon: TrendingUp, demand: 'High' },
        { name: 'Business Analytics', icon: BarChart3, demand: 'Very High' },
        { name: 'Human Resource Management', icon: Users, demand: 'High' },
        { name: 'International Business', icon: Globe, demand: 'High' },
    ];

    const topPrograms = [
        { university: 'Harvard Business School', country: 'USA', ranking: 1, tuition: 73000, duration: '2 years' },
        { university: 'Stanford GSB', country: 'USA', ranking: 2, tuition: 74000, duration: '2 years' },
        { university: 'Wharton (UPenn)', country: 'USA', ranking: 3, tuition: 77000, duration: '2 years' },
        { university: 'London Business School', country: 'UK', ranking: 4, tuition: 92000, duration: '21 months' },
        { university: 'INSEAD', country: 'France', ranking: 5, tuition: 89000, duration: '10 months' },
        { university: 'MIT Sloan', country: 'USA', ranking: 6, tuition: 78000, duration: '2 years' },
    ];

    const careerPaths = [
        { title: 'Management Consultant', salary: '$90K - $180K', growth: '+14%' },
        { title: 'Investment Banker', salary: '$100K - $250K', growth: '+10%' },
        { title: 'Product Manager', salary: '$110K - $200K', growth: '+20%' },
        { title: 'Business Analyst', salary: '$70K - $130K', growth: '+18%' },
        { title: 'Marketing Manager', salary: '$80K - $150K', growth: '+10%' },
        { title: 'Financial Analyst', salary: '$75K - $140K', growth: '+9%' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                                <Briefcase className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl font-bold">Business & Management</h1>
                        </div>
                        <p className="text-2xl text-blue-100 mb-8">
                            Lead organizations and drive innovation. MBA and specialized business programs for future leaders.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/tools/course-finder" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition-all">
                                Find MBA Programs
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

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
                                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
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

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Top Business Schools Worldwide</h2>
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
                                    <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
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
                                <Link href="/book-consultation" className="mt-4 block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                                    Apply Now
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

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
                                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{career.title}</h3>
                                <div className="text-2xl font-bold text-blue-600 mb-1">{career.salary}</div>
                                <div className="text-sm text-green-600 font-semibold">Growth: {career.growth}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Launch Your Business Career</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Get personalized guidance to find the perfect MBA or business program
                    </p>
                    <Link href="/book-consultation" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
