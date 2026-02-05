'use client';

import { motion } from 'framer-motion';
import { School, Calculator, BookOpen, Award, CheckCircle, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function SATPage() {
    const courseFeatures = [
        { title: 'Expert Trainers', description: 'College Board certified instructors', icon: Award },
        { title: 'Personalized Coaching', description: 'Customized study plans', icon: BookOpen },
        { title: 'Practice Tests', description: '15+ full-length mock tests', icon: Calculator },
        { title: 'Score Guarantee', description: 'Achieve 1400+ or retake free', icon: CheckCircle },
        { title: 'Success Rate', description: '91% students achieve 1400+', icon: TrendingUp },
        { title: 'Flexible Batches', description: 'Weekend and weekday options', icon: School },
    ];

    const modules = [
        {
            name: 'Reading',
            duration: '65 minutes',
            questions: '52 questions',
            tips: ['Literature passages', 'Historical documents', 'Science articles', 'Evidence-based reading'],
        },
        {
            name: 'Writing & Language',
            duration: '35 minutes',
            questions: '44 questions',
            tips: ['Grammar', 'Punctuation', 'Sentence structure', 'Rhetoric'],
        },
        {
            name: 'Math (No Calculator)',
            duration: '25 minutes',
            questions: '20 questions',
            tips: ['Algebra', 'Advanced math', 'Problem solving'],
        },
        {
            name: 'Math (Calculator)',
            duration: '55 minutes',
            questions: '38 questions',
            tips: ['Problem solving', 'Data analysis', 'Advanced math', 'Algebra'],
        },
    ];

    const scoreRequirements = {
        '1200-1300': ['Most state universities', 'Some private colleges'],
        '1300-1400': ['Good universities', 'Merit scholarships'],
        '1400-1500': ['Top 50 universities', 'Competitive programs', 'Scholarships'],
        '1500-1600': ['Ivy League', 'Top 10 universities', 'Full scholarships'],
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-indigo-700 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                                <School className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl font-bold">SAT Coaching</h1>
                        </div>
                        <p className="text-2xl text-sky-100 mb-8">
                            Score 1400+ for top US universities. 91% success rate, comprehensive preparation.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/book-consultation" className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold transition-all">
                                Enroll Now
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Our SAT Coaching?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courseFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">SAT Test Sections</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {modules.map((module, index) => (
                            <motion.div
                                key={module.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-4">{module.name}</h3>
                                <div className="space-y-2 mb-4 text-sm">
                                    <div>
                                        <span className="text-gray-600">Duration:</span>
                                        <div className="font-semibold text-gray-900">{module.duration}</div>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Questions:</span>
                                        <div className="font-semibold text-gray-900">{module.questions}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-gray-700 mb-2">Key Topics:</div>
                                    <ul className="space-y-1">
                                        {module.tips.map((tip) => (
                                            <li key={tip} className="flex items-start gap-1 text-xs text-gray-600">
                                                <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Score Requirements</h2>
                    <div className="space-y-4">
                        {Object.entries(scoreRequirements).map(([score, requirements], index) => (
                            <motion.div
                                key={score}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-500 rounded-full flex items-center justify-center">
                                        <span className="text-xl font-bold text-white">{score}</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-2">
                                            {requirements.map((req) => (
                                                <span key={req} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700">
                                                    {req}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-sky-600 to-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Start Your SAT Preparation</h2>
                    <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
                        Join our next batch and achieve your target score
                    </p>
                    <Link href="/book-consultation" className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                        Book Free Demo Class
                    </Link>
                </div>
            </section>
        </div>
    );
}
