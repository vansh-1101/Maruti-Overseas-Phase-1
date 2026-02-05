'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, GraduationCap, TrendingUp, Award } from 'lucide-react';

export default function EligibilityCheckerPage() {
    const [formData, setFormData] = useState({
        education: '',
        cgpa: '',
        ielts: '',
        toefl: '',
        gre: '',
        gmat: '',
        workExperience: '',
        preferredCountry: '',
        preferredCourse: '',
    });

    const [results, setResults] = useState<any>(null);
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Calculate eligibility score
        const score = calculateEligibilityScore(formData);
        setResults(score);
        setShowResults(true);
    };

    const calculateEligibilityScore = (data: any) => {
        const universities = [
            {
                name: 'Stanford University',
                country: 'USA',
                ranking: 2,
                minCGPA: 3.5,
                minIELTS: 7.0,
                minGRE: 320,
                match: 0,
                status: 'reach'
            },
            {
                name: 'University of Toronto',
                country: 'Canada',
                ranking: 18,
                minCGPA: 3.2,
                minIELTS: 6.5,
                minGRE: 310,
                match: 0,
                status: 'moderate'
            },
            {
                name: 'University of Melbourne',
                country: 'Australia',
                ranking: 33,
                minCGPA: 3.0,
                minIELTS: 6.5,
                minGRE: 300,
                match: 0,
                status: 'safe'
            },
            {
                name: 'University of Manchester',
                country: 'UK',
                ranking: 27,
                minCGPA: 3.3,
                minIELTS: 6.5,
                minGRE: 315,
                match: 0,
                status: 'moderate'
            },
        ];

        // Calculate match percentage for each university
        const cgpa = parseFloat(data.cgpa) || 0;
        const ielts = parseFloat(data.ielts) || 0;
        const gre = parseInt(data.gre) || 0;

        universities.forEach(uni => {
            let matchScore = 0;

            // CGPA matching (40% weight)
            if (cgpa >= uni.minCGPA) {
                matchScore += 40;
            } else if (cgpa >= uni.minCGPA - 0.3) {
                matchScore += 25;
            }

            // IELTS matching (30% weight)
            if (ielts >= uni.minIELTS) {
                matchScore += 30;
            } else if (ielts >= uni.minIELTS - 0.5) {
                matchScore += 15;
            }

            // GRE matching (30% weight)
            if (gre >= uni.minGRE) {
                matchScore += 30;
            } else if (gre >= uni.minGRE - 10) {
                matchScore += 15;
            }

            uni.match = matchScore;

            // Determine status
            if (matchScore >= 80) {
                uni.status = 'safe';
            } else if (matchScore >= 50) {
                uni.status = 'moderate';
            } else {
                uni.status = 'reach';
            }
        });

        return {
            universities: universities.sort((a, b) => b.match - a.match),
            overallScore: Math.round(universities.reduce((sum, uni) => sum + uni.match, 0) / universities.length),
        };
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Eligibility Checker
                    </h1>
                    <p className="text-xl text-gray-600">
                        Get instant assessment of your admission chances at top universities
                    </p>
                </div>

                {!showResults ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Education Level */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Highest Education Level
                                </label>
                                <select
                                    value={formData.education}
                                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                    required
                                >
                                    <option value="">Select...</option>
                                    <option value="bachelors">Bachelor's Degree</option>
                                    <option value="masters">Master's Degree</option>
                                    <option value="diploma">Diploma</option>
                                </select>
                            </div>

                            {/* CGPA */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    CGPA / GPA (out of 4.0)
                                </label>
                                <input
                                    type="number"
                                    step="0.01"
                                    min="0"
                                    max="4"
                                    value={formData.cgpa}
                                    onChange={(e) => setFormData({ ...formData, cgpa: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                    placeholder="e.g., 3.5"
                                    required
                                />
                            </div>

                            {/* Test Scores */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        IELTS Score (Optional)
                                    </label>
                                    <input
                                        type="number"
                                        step="0.5"
                                        min="0"
                                        max="9"
                                        value={formData.ielts}
                                        onChange={(e) => setFormData({ ...formData, ielts: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                        placeholder="e.g., 7.0"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        TOEFL Score (Optional)
                                    </label>
                                    <input
                                        type="number"
                                        min="0"
                                        max="120"
                                        value={formData.toefl}
                                        onChange={(e) => setFormData({ ...formData, toefl: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                        placeholder="e.g., 100"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        GRE Score (Optional)
                                    </label>
                                    <input
                                        type="number"
                                        min="260"
                                        max="340"
                                        value={formData.gre}
                                        onChange={(e) => setFormData({ ...formData, gre: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                        placeholder="e.g., 320"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        GMAT Score (Optional)
                                    </label>
                                    <input
                                        type="number"
                                        min="200"
                                        max="800"
                                        value={formData.gmat}
                                        onChange={(e) => setFormData({ ...formData, gmat: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                        placeholder="e.g., 650"
                                    />
                                </div>
                            </div>

                            {/* Work Experience */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Work Experience (Years)
                                </label>
                                <input
                                    type="number"
                                    min="0"
                                    max="20"
                                    value={formData.workExperience}
                                    onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                    placeholder="e.g., 2"
                                />
                            </div>

                            {/* Preferences */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Preferred Country
                                    </label>
                                    <select
                                        value={formData.preferredCountry}
                                        onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                    >
                                        <option value="">Any</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Australia">Australia</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Preferred Course
                                    </label>
                                    <select
                                        value={formData.preferredCourse}
                                        onChange={(e) => setFormData({ ...formData, preferredCourse: e.target.value })}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                    >
                                        <option value="">Any</option>
                                        <option value="Computer Science">Computer Science</option>
                                        <option value="Business">Business</option>
                                        <option value="Engineering">Engineering</option>
                                        <option value="Medicine">Medicine</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all"
                            >
                                Check My Eligibility
                            </button>
                        </form>
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                    >
                        {/* Overall Score */}
                        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white text-center">
                            <div className="text-6xl font-bold mb-2">{results.overallScore}%</div>
                            <div className="text-xl">Overall Match Score</div>
                            <p className="mt-4 text-blue-100">
                                Based on your profile, here are your chances at top universities
                            </p>
                        </div>

                        {/* University Matches */}
                        <div className="space-y-4">
                            {results.universities.map((uni: any, index: number) => (
                                <motion.div
                                    key={uni.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-lg p-6"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{uni.name}</h3>
                                            <p className="text-gray-600">{uni.country} • World Rank #{uni.ranking}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-3xl font-bold text-blue-600 mb-1">{uni.match}%</div>
                                            <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${uni.status === 'safe' ? 'bg-green-100 text-green-700' :
                                                    uni.status === 'moderate' ? 'bg-yellow-100 text-yellow-700' :
                                                        'bg-red-100 text-red-700'
                                                }`}>
                                                {uni.status === 'safe' && <CheckCircle className="w-4 h-4" />}
                                                {uni.status === 'moderate' && <AlertCircle className="w-4 h-4" />}
                                                {uni.status === 'reach' && <XCircle className="w-4 h-4" />}
                                                {uni.status === 'safe' ? 'Safe' : uni.status === 'moderate' ? 'Moderate' : 'Reach'}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 text-sm">
                                        <div>
                                            <div className="text-gray-600">Min CGPA</div>
                                            <div className="font-semibold">{uni.minCGPA}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-600">Min IELTS</div>
                                            <div className="font-semibold">{uni.minIELTS}</div>
                                        </div>
                                        <div>
                                            <div className="text-gray-600">Min GRE</div>
                                            <div className="font-semibold">{uni.minGRE}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => setShowResults(false)}
                                className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition-all"
                            >
                                Check Again
                            </button>
                            <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                                Book Free Consultation
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
