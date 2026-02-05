'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

export default function IntakePlannerPage() {
    const [selectedIntake, setSelectedIntake] = useState('September 2024');
    const [selectedCountry, setSelectedCountry] = useState('USA');

    const intakes = ['September 2024', 'January 2025', 'May 2025', 'September 2025'];

    const getTimeline = (intake: string, country: string) => {
        const baseDate = new Date(intake);
        const timeline = [];

        // 12 months before
        timeline.push({
            month: 'Month 1-2',
            title: 'Research & Shortlist',
            tasks: [
                'Research universities and courses',
                'Shortlist 8-10 universities',
                'Check eligibility requirements',
                'Estimate costs and budget',
            ],
            status: 'pending',
            monthsBeforeIntake: 12,
        });

        // 10 months before
        timeline.push({
            month: 'Month 3-4',
            title: 'Test Preparation',
            tasks: [
                'Register for IELTS/TOEFL',
                'Start test preparation',
                'Take practice tests',
                'Appear for English proficiency test',
            ],
            status: 'pending',
            monthsBeforeIntake: 10,
        });

        // 8 months before
        timeline.push({
            month: 'Month 5-6',
            title: 'Application Preparation',
            tasks: [
                'Prepare Statement of Purpose (SOP)',
                'Request Letters of Recommendation (LOR)',
                'Gather academic transcripts',
                'Prepare resume/CV',
            ],
            status: 'pending',
            monthsBeforeIntake: 8,
        });

        // 6 months before
        timeline.push({
            month: 'Month 7-8',
            title: 'Submit Applications',
            tasks: [
                'Complete online applications',
                'Pay application fees',
                'Submit all required documents',
                'Track application status',
            ],
            status: 'pending',
            monthsBeforeIntake: 6,
        });

        // 4 months before
        timeline.push({
            month: 'Month 9-10',
            title: 'Admission Decisions',
            tasks: [
                'Receive admission letters',
                'Compare offers',
                'Accept offer and pay deposit',
                'Request I-20/CAS/CoE',
            ],
            status: 'pending',
            monthsBeforeIntake: 4,
        });

        // 3 months before
        timeline.push({
            month: 'Month 11-12',
            title: 'Visa Application',
            tasks: [
                'Gather visa documents',
                'Pay SEVIS fee (USA) / IHS (UK)',
                'Schedule visa interview',
                'Attend visa interview',
            ],
            status: 'pending',
            monthsBeforeIntake: 3,
        });

        // 2 months before
        timeline.push({
            month: 'Month 13-14',
            title: 'Pre-Departure',
            tasks: [
                'Book flight tickets',
                'Arrange accommodation',
                'Get health insurance',
                'Attend pre-departure orientation',
            ],
            status: 'pending',
            monthsBeforeIntake: 2,
        });

        // 1 month before
        timeline.push({
            month: 'Month 15',
            title: 'Final Preparations',
            tasks: [
                'Pack luggage',
                'Inform bank about travel',
                'Get international SIM card',
                'Say goodbye to family & friends',
            ],
            status: 'pending',
            monthsBeforeIntake: 1,
        });

        return timeline;
    };

    const timeline = getTimeline(selectedIntake, selectedCountry);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Intake Planner
                    </h1>
                    <p className="text-xl text-gray-600">
                        Plan your study abroad journey with our month-by-month timeline
                    </p>
                </div>

                {/* Selectors */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Target Intake
                            </label>
                            <select
                                value={selectedIntake}
                                onChange={(e) => setSelectedIntake(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            >
                                {intakes.map(intake => (
                                    <option key={intake} value={intake}>{intake}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Country
                            </label>
                            <select
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            >
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

                    <div className="space-y-8">
                        {timeline.map((phase, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-20"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-5 top-6 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                                    <Clock className="w-4 h-4 text-white" />
                                </div>

                                {/* Content Card */}
                                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <div className="text-sm text-blue-600 font-semibold mb-1">{phase.month}</div>
                                            <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                                        </div>
                                        <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                                            {phase.monthsBeforeIntake} months before
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {phase.tasks.map((task, taskIndex) => (
                                            <li key={taskIndex} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{task}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white text-center">
                    <h3 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h3>
                    <p className="text-blue-100 mb-6">
                        Our expert counselors can create a customized timeline based on your profile
                    </p>
                    <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all">
                        Book Free Consultation
                    </button>
                </div>
            </div>
        </div>
    );
}
