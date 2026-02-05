'use client';

import { motion } from 'framer-motion';
import { Scale, Gavel, FileText, Building2, Globe2, Users } from 'lucide-react';
import Link from 'next/link';

export default function LawPage() {
    const specializations = [
        { name: 'Corporate Law', icon: Building2, demand: 'Very High' },
        { name: 'International Law', icon: Globe2, demand: 'High' },
        { name: 'Criminal Law', icon: Gavel, demand: 'High' },
        { name: 'Intellectual Property', icon: FileText, demand: 'Very High' },
        { name: 'Human Rights Law', icon: Users, demand: 'High' },
        { name: 'Constitutional Law', icon: Scale, demand: 'High' },
    ];

    const topPrograms = [
        { university: 'Harvard Law School', country: 'USA', ranking: 1, tuition: 67000, duration: '3 years' },
        { university: 'Yale Law School', country: 'USA', ranking: 2, tuition: 66000, duration: '3 years' },
        { university: 'Stanford Law School', country: 'USA', ranking: 3, tuition: 65000, duration: '3 years' },
        { university: 'Oxford Law Faculty', country: 'UK', ranking: 4, tuition: 32000, duration: '1 year' },
        { university: 'Cambridge Law', country: 'UK', ranking: 5, tuition: 30000, duration: '1 year' },
        { university: 'NYU School of Law', country: 'USA', ranking: 6, tuition: 68000, duration: '3 years' },
    ];

    const careerPaths = [
        { title: 'Corporate Lawyer', salary: '$120K - $250K', growth: '+6%' },
        { title: 'IP Attorney', salary: '$130K - $220K', growth: '+9%' },
        { title: 'Legal Consultant', salary: '$90K - $180K', growth: '+8%' },
        { title: 'Judge', salary: '$100K - $200K', growth: '+3%' },
        { title: 'Legal Advisor', salary: '$80K - $150K', growth: '+7%' },
        { title: 'Law Professor', salary: '$90K - $170K', growth: '+5%' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                                <Scale className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl font-bold">Law & Legal Studies</h1>
                        </div>
                        <p className="text-2xl text-gray-100 mb-8">
                            Shape justice and policy. Study at world's top law schools.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/tools/course-finder" className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold transition-all">
                                Find Law Programs
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Law Specializations</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specializations.map((spec, index) => (
                            <motion.div
                                key={spec.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-6 hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-slate-700 rounded-lg flex items-center justify-center mb-4">
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
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Top Law Schools</h2>
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
                                    <div className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
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
                                <Link href="/book-consultation" className="mt-4 block text-center bg-gradient-to-r from-gray-700 to-slate-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
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
                                className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 text-center"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{career.title}</h3>
                                <div className="text-2xl font-bold text-gray-700 mb-1">{career.salary}</div>
                                <div className="text-sm text-green-600 font-semibold">Growth: {career.growth}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-gray-700 to-slate-700 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Start Your Legal Career</h2>
                    <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
                        Get expert guidance for law school admissions
                    </p>
                    <Link href="/book-consultation" className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
