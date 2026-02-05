'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calculator, BookOpen, Award, CheckCircle, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function GREPage() {
    const courseFeatures = [
        { title: 'Expert Trainers', description: 'ETS certified instructors', icon: Award },
        { title: 'Personalized Study Plan', description: 'Customized based on your score', icon: BookOpen },
        { title: 'Practice Tests', description: '10+ full-length mock tests', icon: Calculator },
        { title: 'Score Guarantee', description: 'Achieve 320+ or retake free', icon: CheckCircle },
        { title: 'Success Rate', description: '89% students achieve 320+', icon: TrendingUp },
        { title: 'Flexible Batches', description: 'Weekend and weekday options', icon: GraduationCap },
    ];

    const modules = [
        {
            name: 'Verbal Reasoning',
            duration: '2 sections',
            questions: '40 questions',
            tips: ['Text completion', 'Sentence equivalence', 'Reading comprehension'],
        },
        {
            name: 'Quantitative Reasoning',
            duration: '2 sections',
            questions: '40 questions',
            tips: ['Arithmetic', 'Algebra', 'Geometry', 'Data analysis'],
        },
        {
            name: 'Analytical Writing',
            duration: '2 tasks',
            questions: '60 minutes',
            tips: ['Analyze an issue', 'Analyze an argument'],
        },
    ];

    const scoreRequirements = {
        '300-310': ['Some graduate programs', 'Lower-tier universities'],
        '310-320': ['Most graduate programs', 'Mid-tier universities'],
        '320-330': ['Top universities', 'Competitive programs', 'Scholarships'],
        '330-340': ['Ivy League', 'Top 10 programs', 'Full scholarships'],
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-700 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center">
                                <GraduationCap className="w-10 h-10 text-white" />
                            </div>
                            <h1 className="text-5xl font-bold">GRE Coaching</h1>
                        </div>
                        <p className="text-2xl text-violet-100 mb-8">
                            Score 320+ for top graduate programs. 89% success rate, personalized preparation.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/book-consultation" className="bg-white text-violet-600 px-8 py-4 rounded-full font-semibold transition-all">
                                Enroll Now
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Our GRE Coaching?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courseFeatures.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
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
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">GRE Test Sections</h2>
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
                                        <span className="text-gray-600">Sections:</span>
                                        <div className="font-semibold text-gray-900">{module.duration}</div>
                                    </div>
                                    <div>
                                        <span className="text-gray-600">Questions:</span>
                                        <div className="font-semibold text-gray-900">{module.questions}</div>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-700 mb-2">Key Topics:</div>
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
                                className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center">
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

            <section className="py-20 bg-gradient-to-br from-violet-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Start Your GRE Preparation</h2>
                    <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
                        Join our next batch and achieve your target score
                    </p>
                    <Link href="/book-consultation" className="bg-white text-violet-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                        Book Free Demo Class
                    </Link>
                </div>
            </section>
        </div>
    );
}
