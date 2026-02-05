'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckSquare, MapPin } from 'lucide-react';

export default function VisaChecklistPage() {
    const [selectedCountry, setSelectedCountry] = useState('USA');
    const [visaType, setVisaType] = useState('Student');

    const checklists: any = {
        USA: {
            Student: [
                { item: 'Valid Passport (min 6 months validity)', checked: false, category: 'Documents' },
                { item: 'I-20 Form from University', checked: false, category: 'Documents' },
                { item: 'DS-160 Confirmation Page', checked: false, category: 'Forms' },
                { item: 'SEVIS Fee Payment Receipt', checked: false, category: 'Fees' },
                { item: 'Visa Application Fee Receipt ($185)', checked: false, category: 'Fees' },
                { item: 'Passport-size Photographs (2)', checked: false, category: 'Documents' },
                { item: 'Academic Transcripts & Certificates', checked: false, category: 'Documents' },
                { item: 'English Proficiency Test Scores (IELTS/TOEFL)', checked: false, category: 'Documents' },
                { item: 'Financial Documents (Bank Statements)', checked: false, category: 'Financial' },
                { item: 'Sponsor Affidavit (if applicable)', checked: false, category: 'Financial' },
                { item: 'Visa Interview Appointment Letter', checked: false, category: 'Appointment' },
            ],
            Visitor: [
                { item: 'Valid Passport', checked: false, category: 'Documents' },
                { item: 'DS-160 Confirmation', checked: false, category: 'Forms' },
                { item: 'Visa Fee Receipt ($185)', checked: false, category: 'Fees' },
                { item: 'Travel Itinerary', checked: false, category: 'Documents' },
                { item: 'Hotel Bookings', checked: false, category: 'Documents' },
                { item: 'Financial Proof', checked: false, category: 'Financial' },
            ],
        },
        UK: {
            Student: [
                { item: 'Valid Passport', checked: false, category: 'Documents' },
                { item: 'CAS (Confirmation of Acceptance for Studies)', checked: false, category: 'Documents' },
                { item: 'TB Test Certificate', checked: false, category: 'Medical' },
                { item: 'IELTS/TOEFL Scores', checked: false, category: 'Documents' },
                { item: 'Financial Documents (28 days old)', checked: false, category: 'Financial' },
                { item: 'Academic Certificates', checked: false, category: 'Documents' },
                { item: 'Visa Application Fee (£363)', checked: false, category: 'Fees' },
                { item: 'IHS (Immigration Health Surcharge)', checked: false, category: 'Fees' },
            ],
        },
        Canada: {
            Student: [
                { item: 'Valid Passport', checked: false, category: 'Documents' },
                { item: 'Letter of Acceptance from DLI', checked: false, category: 'Documents' },
                { item: 'Proof of Financial Support (CAD $10,000+)', checked: false, category: 'Financial' },
                { item: 'IELTS/TOEFL Scores', checked: false, category: 'Documents' },
                { item: 'Study Permit Application Fee (CAD $150)', checked: false, category: 'Fees' },
                { item: 'Biometrics Fee (CAD $85)', checked: false, category: 'Fees' },
                { item: 'Medical Examination', checked: false, category: 'Medical' },
                { item: 'Police Clearance Certificate', checked: false, category: 'Documents' },
            ],
        },
        Australia: {
            Student: [
                { item: 'Valid Passport', checked: false, category: 'Documents' },
                { item: 'CoE (Confirmation of Enrolment)', checked: false, category: 'Documents' },
                { item: 'OSHC (Health Insurance)', checked: false, category: 'Insurance' },
                { item: 'Financial Capacity Proof (AUD $21,041/year)', checked: false, category: 'Financial' },
                { item: 'English Proficiency Scores', checked: false, category: 'Documents' },
                { item: 'GTE (Genuine Temporary Entrant) Statement', checked: false, category: 'Documents' },
                { item: 'Visa Application Fee (AUD $650)', checked: false, category: 'Fees' },
                { item: 'Medical Examination', checked: false, category: 'Medical' },
            ],
        },
    };

    const [checklist, setChecklist] = useState(checklists[selectedCountry][visaType]);

    const handleCountryChange = (country: string) => {
        setSelectedCountry(country);
        setChecklist(checklists[country][visaType] || []);
    };

    const handleVisaTypeChange = (type: string) => {
        setVisaType(type);
        setChecklist(checklists[selectedCountry][type] || []);
    };

    const toggleItem = (index: number) => {
        const newChecklist = [...checklist];
        newChecklist[index].checked = !newChecklist[index].checked;
        setChecklist(newChecklist);
    };

    const completedItems = checklist.filter((item: any) => item.checked).length;
    const totalItems = checklist.length;
    const progress = (completedItems / totalItems) * 100;

    const groupedChecklist = checklist.reduce((acc: any, item: any) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Visa Checklist Generator
                    </h1>
                    <p className="text-xl text-gray-600">
                        Get a comprehensive checklist for your visa application
                    </p>
                </div>

                {/* Selectors */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Select Country
                            </label>
                            <select
                                value={selectedCountry}
                                onChange={(e) => handleCountryChange(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            >
                                <option value="USA">USA</option>
                                <option value="UK">UK</option>
                                <option value="Canada">Canada</option>
                                <option value="Australia">Australia</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Visa Type
                            </label>
                            <select
                                value={visaType}
                                onChange={(e) => handleVisaTypeChange(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            >
                                <option value="Student">Student Visa</option>
                                <option value="Visitor">Visitor Visa</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Progress */}
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <div className="text-4xl font-bold">{completedItems}/{totalItems}</div>
                            <div className="text-blue-100">Items Completed</div>
                        </div>
                        <div className="text-right">
                            <div className="text-4xl font-bold">{Math.round(progress)}%</div>
                            <div className="text-blue-100">Progress</div>
                        </div>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-4">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            className="bg-white rounded-full h-4"
                        />
                    </div>
                </div>

                {/* Checklist */}
                <div className="space-y-6">
                    {Object.entries(groupedChecklist).map(([category, items]: [string, any]) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-2xl shadow-lg p-6"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-600" />
                                {category}
                            </h3>
                            <div className="space-y-3">
                                {items.map((item: any, index: number) => {
                                    const globalIndex = checklist.indexOf(item);
                                    return (
                                        <div
                                            key={globalIndex}
                                            onClick={() => toggleItem(globalIndex)}
                                            className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${item.checked
                                                ? 'bg-green-50 border-2 border-green-500'
                                                : 'bg-gray-50 border-2 border-gray-200 hover:border-blue-300'
                                                }`}
                                        >
                                            <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center ${item.checked
                                                ? 'bg-green-500 border-green-500'
                                                : 'border-gray-300'
                                                }`}>
                                                {item.checked && <CheckSquare className="w-5 h-5 text-white" />}
                                            </div>
                                            <span className={`flex-1 ${item.checked ? 'text-green-700 line-through' : 'text-gray-700'}`}>
                                                {item.item}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Actions */}
                <div className="mt-8 flex gap-4">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        <Download className="w-5 h-5" />
                        Download PDF Checklist
                    </button>
                    <button className="flex-1 bg-white text-blue-600 border-2 border-blue-600 px-6 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all">
                        Book Visa Consultation
                    </button>
                </div>
            </div>
        </div>
    );
}
