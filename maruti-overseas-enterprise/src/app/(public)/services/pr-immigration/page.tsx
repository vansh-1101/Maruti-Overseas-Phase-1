'use client';

import { motion } from 'framer-motion';
import { Home, FileText, CheckCircle, Clock, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function PRServicesPage() {
    const services = [
        { title: 'Eligibility Assessment', description: 'Free PR eligibility check', icon: CheckCircle },
        { title: 'Points Calculator', description: 'Calculate your PR points', icon: TrendingUp },
        { title: 'Document Preparation', description: 'Complete documentation support', icon: FileText },
        { title: 'Application Filing', description: 'Professional PR application', icon: Users },
        { title: 'Legal Consultation', description: 'Immigration lawyer support', icon: Home },
        { title: 'Fast Track', description: 'Expedited PR processing', icon: Clock },
    ];

    const prPrograms = [
        {
            country: 'Canada',
            programName: 'Express Entry',
            processingTime: '6-12 months',
            pointsRequired: '470+ CRS',
            pathways: ['Federal Skilled Worker', 'Canadian Experience Class', 'Provincial Nominee Program (PNP)', 'Study-to-PR pathway'],
            benefits: ['Free healthcare', 'World-class education', 'Path to citizenship in 3 years', 'Family sponsorship'],
        },
        {
            country: 'Australia',
            programName: 'Skilled Migration',
            processingTime: '8-12 months',
            pointsRequired: '65+ points',
            pathways: ['Skilled Independent (189)', 'Skilled Nominated (190)', 'Regional Sponsored (491)', 'Graduate Work Stream'],
            benefits: ['Medicare access', 'Quality of life', 'Citizenship in 4 years', 'Work anywhere'],
        },
        {
            country: 'New Zealand',
            programName: 'Skilled Migrant Category',
            processingTime: '6-9 months',
            pointsRequired: '160+ points',
            pathways: ['Skilled Migrant', 'Work to Residence', 'Post-Study Work Visa', 'Entrepreneur Visa'],
            benefits: ['Beautiful nature', 'Safe environment', 'Citizenship in 5 years', 'Easy travel to Australia'],
        },
        {
            country: 'Germany',
            programName: 'EU Blue Card',
            processingTime: '3-6 months',
            pointsRequired: 'Salary €58,400+',
            pathways: ['EU Blue Card', 'Job Seeker Visa', 'Post-Study Work', 'Freelance Visa'],
            benefits: ['EU access', 'Strong economy', 'Permanent residence in 21 months', 'Family reunion'],
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-700 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                                <Home className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl font-bold">PR & Immigration Services</h1>
                        </div>
                        <p className="text-2xl text-purple-100 mb-8">
                            Make your dream country your permanent home. Expert PR assistance with 95% success rate.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/book-consultation" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold transition-all">
                                Check PR Eligibility
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our PR Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
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
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">PR Programs by Country</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {prPrograms.map((program, index) => (
                            <motion.div
                                key={program.country}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">{program.country}</h3>
                                    <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold">
                                        {program.processingTime}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="text-lg font-semibold text-purple-600 mb-2">{program.programName}</div>
                                    <div className="text-sm text-gray-600 mb-4">
                                        <span className="font-semibold">Points Required:</span> {program.pointsRequired}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="text-sm font-semibold text-gray-700 mb-2">PR Pathways:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {program.pathways.map((pathway) => (
                                            <span key={pathway} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                                                {pathway}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <div className="text-sm font-semibold text-gray-700 mb-2">Benefits:</div>
                                    <ul className="space-y-2">
                                        {program.benefits.map((benefit) => (
                                            <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link href="/book-consultation" className="block text-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                                    Apply for {program.country} PR
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready for Permanent Residency?</h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        Book a free consultation to check your PR eligibility
                    </p>
                    <Link href="/book-consultation" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                        Book Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
}
