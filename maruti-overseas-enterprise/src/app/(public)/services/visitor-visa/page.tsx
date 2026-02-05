'use client';

import { motion } from 'framer-motion';
import { Plane, FileText, CheckCircle, Clock, Users, Shield } from 'lucide-react';
import Link from 'next/link';

export default function VisitorVisaPage() {
    const services = [
        { title: 'Visa Consultation', description: 'Expert guidance on visitor visa requirements', icon: Users },
        { title: 'Document Checklist', description: 'Complete list of required documents', icon: FileText },
        { title: 'Application Support', description: 'Help with DS-160, online forms', icon: CheckCircle },
        { title: 'Interview Prep', description: 'Mock interviews and tips', icon: Shield },
        { title: 'Travel Planning', description: 'Itinerary and booking assistance', icon: Plane },
        { title: 'Fast Processing', description: 'Expedited services available', icon: Clock },
    ];

    const visaTypes = [
        {
            country: 'USA',
            visaName: 'B1/B2 Visitor Visa',
            processingTime: '2-4 weeks',
            fee: '$185',
            validity: 'Up to 10 years',
            purposes: ['Tourism', 'Business meetings', 'Medical treatment', 'Visiting family'],
        },
        {
            country: 'UK',
            visaName: 'Standard Visitor Visa',
            processingTime: '3 weeks',
            fee: '£100',
            validity: '6 months - 10 years',
            purposes: ['Tourism', 'Business', 'Medical', 'Academic visits'],
        },
        {
            country: 'Canada',
            visaName: 'Temporary Resident Visa',
            processingTime: '2-3 weeks',
            fee: 'CAD $100',
            validity: 'Up to 10 years',
            purposes: ['Tourism', 'Family visit', 'Business', 'Transit'],
        },
        {
            country: 'Schengen',
            visaName: 'Schengen Visitor Visa',
            processingTime: '15 days',
            fee: '€80',
            validity: '90 days in 180 days',
            purposes: ['Tourism', 'Business', 'Cultural events', '26 countries access'],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-br from-green-900 via-teal-800 to-blue-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                                <Plane className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl font-bold">Visitor Visa Services</h1>
                        </div>
                        <p className="text-2xl text-green-100 mb-8">
                            Travel the world with confidence. Expert visitor visa assistance for tourism, business, and family visits.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/book-consultation" className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold transition-all">
                                Get Visa Assistance
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Visitor Visa Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
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
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Visitor Visa by Country</h2>
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
                                        {visa.validity}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="text-lg font-semibold text-green-600 mb-2">{visa.visaName}</div>
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
                                    <div className="text-sm font-semibold text-gray-700 mb-2">Purposes:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {visa.purposes.map((purpose) => (
                                            <span key={purpose} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                                                {purpose}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <Link href="/book-consultation" className="block text-center bg-gradient-to-r from-green-600 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                                    Apply for {visa.country} Visa
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-green-600 to-teal-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Travel?</h2>
                    <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                        Book a consultation with our visa experts today
                    </p>
                    <Link href="/book-consultation" className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
