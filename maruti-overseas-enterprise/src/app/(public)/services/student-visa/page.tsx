'use client';

import { motion } from 'framer-motion';
import { FileText, CheckCircle, Clock, Users, Shield, Globe } from 'lucide-react';
import Link from 'next/link';

export default function StudentVisaPage() {
    const services = [
        { title: 'Visa Consultation', description: 'Expert guidance on visa requirements and process', icon: Users },
        { title: 'Document Preparation', description: 'Complete assistance with all required documents', icon: FileText },
        { title: 'Application Filing', description: 'Accurate and timely visa application submission', icon: CheckCircle },
        { title: 'Interview Preparation', description: 'Mock interviews and tips for visa success', icon: Shield },
        { title: 'Post-Visa Support', description: 'Guidance on travel, accommodation, and settling in', icon: Globe },
        { title: 'Fast Track Processing', description: 'Expedited services for urgent applications', icon: Clock },
    ];

    const visaTypes = [
        {
            country: 'USA',
            visaName: 'F-1 Student Visa',
            processingTime: '4-6 weeks',
            fee: '$185',
            successRate: '98%',
            requirements: ['I-20 Form', 'DS-160', 'SEVIS Fee', 'Financial Proof', 'Passport'],
        },
        {
            country: 'UK',
            visaName: 'Tier 4 Student Visa',
            processingTime: '3-4 weeks',
            fee: '£363',
            successRate: '97%',
            requirements: ['CAS Letter', 'Financial Proof', 'English Proficiency', 'TB Test', 'Passport'],
        },
        {
            country: 'Canada',
            visaName: 'Study Permit',
            processingTime: '4-8 weeks',
            fee: 'CAD $150',
            successRate: '96%',
            requirements: ['LOA', 'GIC', 'Medical Exam', 'Biometrics', 'Passport'],
        },
        {
            country: 'Australia',
            visaName: 'Subclass 500 Visa',
            processingTime: '4-6 weeks',
            fee: 'AUD $650',
            successRate: '97%',
            requirements: ['CoE', 'OSHC', 'GTE Statement', 'Financial Proof', 'Passport'],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                                <FileText className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl font-bold">Student Visa Services</h1>
                        </div>
                        <p className="text-2xl text-blue-100 mb-8">
                            Expert visa assistance with 98% success rate. We handle the complexity, you focus on your dreams.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/book-consultation" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition-all">
                                Get Visa Assistance
                            </Link>
                            <Link href="/tools/visa-checklist" className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold transition-all">
                                Visa Checklist
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Visa Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                                    <service.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Visa Types */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Student Visa by Country</h2>
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
                                    <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                                        {visa.successRate} Success
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="text-lg font-semibold text-blue-600 mb-2">{visa.visaName}</div>
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
                                    <div className="text-sm font-semibold text-gray-700 mb-2">Key Requirements:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {visa.requirements.map((req) => (
                                            <span key={req} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                                                {req}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <Link href="/book-consultation" className="block text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                                    Apply for {visa.country} Visa
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Maruti Overseas?</h2>
                    <div className="space-y-6">
                        {[
                            { title: '98% Visa Success Rate', description: 'Industry-leading success rate across all countries' },
                            { title: '20+ Years Experience', description: 'Trusted expertise in visa processing since 2004' },
                            { title: 'Expert Counselors', description: 'Certified visa consultants with in-depth knowledge' },
                            { title: 'End-to-End Support', description: 'From documentation to visa interview preparation' },
                            { title: 'Fast Processing', description: 'Expedited services available for urgent cases' },
                            { title: 'Post-Visa Assistance', description: 'Support with travel, forex, and settling abroad' },
                        ].map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-start gap-4 bg-gray-50 rounded-xl p-6"
                            >
                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">{benefit.title}</h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Apply for Your Student Visa?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Book a free consultation with our visa experts today
                    </p>
                    <Link href="/book-consultation" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
