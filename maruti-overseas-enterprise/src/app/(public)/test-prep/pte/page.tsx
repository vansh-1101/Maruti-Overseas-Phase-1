'use client';

import { motion } from 'framer-motion';
import { BookOpen, Award, Clock, Users, CheckCircle, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function PTEPage() {
    const courseFeatures = [
        { title: 'Expert Trainers', description: 'Pearson certified instructors', icon: Award },
        { title: 'Flexible Batches', description: 'Weekend and weekday options', icon: Clock },
        { title: 'Small Class Size', description: 'Maximum 10 students per batch', icon: Users },
        { title: 'Practice Tests', description: '20+ full-length mock tests', icon: BookOpen },
        { title: 'Score Guarantee', description: 'Achieve 65+ or retake free', icon: CheckCircle },
        { title: 'Success Rate', description: '94% students achieve 65+', icon: TrendingUp },
    ];

    const modules = [
        {
            name: 'Speaking & Writing',
            duration: '77-93 minutes',
            sections: '7 tasks',
            tips: ['Personal introduction', 'Read aloud', 'Essay writing'],
        },
        {
            name: 'Reading',
            duration: '32-41 minutes',
            sections: '5 tasks',
            tips: ['Multiple choice', 'Re-order paragraphs', 'Fill in blanks'],
        },
        {
            name: 'Listening',
            duration: '45-57 minutes',
            sections: '8 tasks',
            tips: ['Summarize spoken text', 'Multiple choice', 'Fill in blanks'],
        },
    ];

    const scoreRequirements = {
        '50-58': ['Some undergraduate programs', 'Basic requirements'],
        '59-65': ['Most undergraduate programs', 'Graduate programs'],
        '65-79': ['Top universities', 'Competitive programs', 'PR applications'],
        '79-90': ['Highly competitive programs', 'Scholarships', 'Fast-track PR'],
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-700 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                                <BookOpen className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl font-bold">PTE Coaching</h1>
                        </div>
                        <p className="text-2xl text-emerald-100 mb-8">
                            Score 65+ with AI-powered preparation. 94% success rate, computer-based testing.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/book-consultation" className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold transition-all">
                                Enroll Now
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Our PTE Coaching?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courseFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
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
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">PTE Test Sections</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {modules.map((module, index) => (
                            <motion.div
                                key={module.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg"
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{module.name}</h3>
                                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                                    <div>
                                        <span className="text-gray-600">Duration:</span>
                                        <div className="font-semibold text-gray-900">{module.duration}</div>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Tasks:</span>
                                        <div className="font-semibold text-gray-900">{module.sections}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-700 mb-2">Key Tips:</div>
                                    <ul className="space-y-2">
                                        {module.tips.map((tip) => (
                                            <li key={tip} className="flex items-start gap-2 text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
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
                                className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
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

            <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Start Your PTE Preparation</h2>
                    <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                        Join our next batch and achieve your target score
                    </p>
                    <Link href="/book-consultation" className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                        Book Free Demo Class
                    </Link>
                </div>
            </section>
        </div>
    );
}
