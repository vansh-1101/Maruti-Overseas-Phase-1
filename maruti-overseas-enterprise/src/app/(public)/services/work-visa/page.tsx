'use client';

import { motion } from 'framer-motion';
import { Briefcase, FileText, CheckCircle, Clock, Users, Shield } from 'lucide-react';
import Link from 'next/link';

export default function WorkVisaPage() {
    const services = [
        { title: 'Visa Consultation', description: 'Expert guidance on work visa types', icon: Users },
        { title: 'Document Preparation', description: 'Complete document checklist', icon: FileText },
        { title: 'Application Filing', description: 'Professional application support', icon: CheckCircle },
        { title: 'Employer Sponsorship', description: 'Help finding sponsors', icon: Briefcase },
        { title: 'Legal Support', description: 'Immigration lawyer assistance', icon: Shield },
        { title: 'Fast Processing', description: 'Expedited services available', icon: Clock },
    ];

    const visaTypes = [
        {
            country: 'USA',
            visaName: 'H-1B Work Visa',
            processingTime: '3-6 months',
            fee: '$460 + $500',
            validity: 'Up to 6 years',
            requirements: ['Bachelor\'s degree', 'Job offer from US employer', 'Specialty occupation', 'Employer sponsorship'],
        },
        {
            country: 'Canada',
            visaName: 'Work Permit',
            processingTime: '2-4 months',
            fee: 'CAD $155',
            validity: '1-3 years',
            requirements: ['Job offer (LMIA)', 'Proof of qualifications', 'Clean criminal record', 'Medical exam'],
        },
        {
            country: 'UK',
            visaName: 'Skilled Worker Visa',
            processingTime: '3 weeks',
            fee: '£625 - £1,423',
            validity: 'Up to 5 years',
            requirements: ['Certificate of Sponsorship', 'Skill level RQF 3+', 'English proficiency', 'Salary threshold £26,200+'],
        },
        {
            country: 'Australia',
            visaName: 'Temporary Skill Shortage (TSS)',
            processingTime: '1-4 months',
            fee: 'AUD $1,290',
            validity: '2-4 years',
            requirements: ['Employer nomination', 'Skills assessment', 'English proficiency', 'Health insurance'],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                                <Briefcase className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl font-bold">Work Visa Services</h1>
                        </div>
                        <p className="text-2xl text-indigo-100 mb-8">
                            Build your international career. Expert work visa assistance for professionals.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/book-consultation" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold transition-all">
                                Get Visa Assistance
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Work Visa Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Work Visa by Country</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {visaTypes.map((visa, index) => (
                            <motion.div
                                key={visa.country}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">{visa.country}</h3>
                                    <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                                        {visa.validity}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="text-lg font-semibold text-indigo-600 mb-2">{visa.visaName}</div>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <span className="text-gray-600">Processing:</span>
                                            <div className="font-semibold text-gray-900">{visa.processingTime}</div>
                                        </div>
                                        <div>
                                            <span className="text-gray-600">Fee:</span>
                                            <div className="font-semibold text-gray-900">{visa.fee}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="text-sm font-semibold text-gray-700 mb-2">Requirements:</div>
                                    <ul className="space-y-2">
                                        {visa.requirements.map((req) => (
                                            <li key={req} className="flex items-start gap-2 text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>{req}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link href="/book-consultation" className="block text-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                                    Apply for {visa.country} Work Visa
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Work Abroad?</h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Book a consultation with our work visa experts today
                    </p>
                    <Link href="/book-consultation" className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
