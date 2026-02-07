'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Globe, GraduationCap, Calendar, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export default function BookConsultationPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1: Personal Info
        name: '',
        email: '',
        phone: '',
        city: '',

        // Step 2: Study Plans
        interestedCountry: '',
        studyLevel: '',
        intakeYear: '',

        // Step 3: Academic Background
        qualification: '',
        cgpa: '',
        englishTest: '',

        // Step 4: Additional Info
        budget: '',
        message: '',
    });

    const totalSteps = 4;

    const handleNext = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const handlePrev = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you! Our counselor will contact you within 24 hours.');
        console.log('Form Data:', formData);
    };

    const updateFormData = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-3xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Book Free Consultation
                    </h1>
                    <p className="text-xl text-gray-600">
                        Get personalized guidance from our expert counselors
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className="flex items-center flex-1">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${s <= step
                                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                                    : 'bg-muted text-muted-foreground'
                                    }`}>
                                    {s < step ? <CheckCircle className="w-6 h-6" /> : s}
                                </div>
                                {s < 4 && (
                                    <div className={`flex-1 h-1 mx-2 transition-all ${s < step ? 'bg-gradient-to-r from-primary to-secondary' : 'bg-muted'
                                        }`} />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                        <span>Personal</span>
                        <span>Study Plans</span>
                        <span>Academic</span>
                        <span>Confirm</span>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                    <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
                        <AnimatePresence mode="wait">
                            {/* Step 1: Personal Info */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                        <User className="w-6 h-6 text-primary" />
                                        Personal Information
                                    </h2>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => updateFormData('name', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none bg-input/50"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => updateFormData('email', e.target.value)}
                                                className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none bg-input/50"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone *
                                            </label>
                                            <input
                                                type="tel"
                                                required
                                                value={formData.phone}
                                                onChange={(e) => updateFormData('phone', e.target.value)}
                                                className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none bg-input/50"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            City *
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.city}
                                            onChange={(e) => updateFormData('city', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none bg-input/50"
                                            placeholder="Ahmedabad"
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Study Plans */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                        <Globe className="w-6 h-6 text-primary" />
                                        Study Plans
                                    </h2>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Interested Country *
                                        </label>
                                        <select
                                            required
                                            value={formData.interestedCountry}
                                            onChange={(e) => updateFormData('interestedCountry', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none bg-input/50"
                                        >
                                            <option value="">Select a country</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                            <option value="Canada">Canada</option>
                                            <option value="Australia">Australia</option>
                                            <option value="Germany">Germany</option>
                                            <option value="Ireland">Ireland</option>
                                            <option value="New Zealand">New Zealand</option>
                                        </select>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Study Level *
                                            </label>
                                            <select
                                                required
                                                value={formData.studyLevel}
                                                onChange={(e) => updateFormData('studyLevel', e.target.value)}
                                                className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none bg-input/50"
                                            >
                                                <option value="">Select level</option>
                                                <option value="Bachelors">Bachelors</option>
                                                <option value="Masters">Masters</option>
                                                <option value="PhD">PhD</option>
                                                <option value="Diploma">Diploma</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Intake Year *
                                            </label>
                                            <select
                                                required
                                                value={formData.intakeYear}
                                                onChange={(e) => updateFormData('intakeYear', e.target.value)}
                                                className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none bg-input/50"
                                            >
                                                <option value="">Select year</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                            </select>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Academic Background */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                        <GraduationCap className="w-6 h-6 text-primary" />
                                        Academic Background
                                    </h2>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Highest Qualification *
                                        </label>
                                        <select
                                            required
                                            value={formData.qualification}
                                            onChange={(e) => updateFormData('qualification', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none bg-input/50"
                                        >
                                            <option value="">Select qualification</option>
                                            <option value="12th">12th Grade</option>
                                            <option value="Bachelors">Bachelors</option>
                                            <option value="Masters">Masters</option>
                                        </select>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                CGPA / Percentage *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.cgpa}
                                                onChange={(e) => updateFormData('cgpa', e.target.value)}
                                                className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none bg-input/50"
                                                placeholder="8.5 or 85%"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                English Test
                                            </label>
                                            <select
                                                value={formData.englishTest}
                                                onChange={(e) => updateFormData('englishTest', e.target.value)}
                                                className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none bg-input/50"
                                            >
                                                <option value="">Not taken yet</option>
                                                <option value="IELTS">IELTS</option>
                                                <option value="TOEFL">TOEFL</option>
                                                <option value="PTE">PTE</option>
                                                <option value="Duolingo">Duolingo</option>
                                            </select>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 4: Additional Info */}
                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                                        <CheckCircle className="w-6 h-6 text-primary" />
                                        Almost Done!
                                    </h2>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Budget (Annual) *
                                        </label>
                                        <select
                                            required
                                            value={formData.budget}
                                            onChange={(e) => updateFormData('budget', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none bg-input/50"
                                        >
                                            <option value="">Select budget range</option>
                                            <option value="<10L">Less than ₹10 Lakhs</option>
                                            <option value="10-20L">₹10-20 Lakhs</option>
                                            <option value="20-30L">₹20-30 Lakhs</option>
                                            <option value=">30L">More than ₹30 Lakhs</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Additional Message
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => updateFormData('message', e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-border rounded-xl focus:border-primary focus:outline-none bg-input/50"
                                            placeholder="Tell us about your study abroad goals..."
                                        />
                                    </div>

                                    <div className="bg-secondary/10 rounded-xl p-6">
                                        <h3 className="font-semibold text-foreground mb-3">What happens next?</h3>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>Our counselor will contact you within 24 hours</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>Free profile evaluation and university shortlisting</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>Personalized roadmap for your study abroad journey</span>
                                            </li>
                                        </ul>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between">
                        <button
                            type="button"
                            onClick={handlePrev}
                            disabled={step === 1}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${step === 1
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Previous
                        </button>

                        {step < totalSteps ? (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                            >
                                Next
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                            >
                                <CheckCircle className="w-5 h-5" />
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
