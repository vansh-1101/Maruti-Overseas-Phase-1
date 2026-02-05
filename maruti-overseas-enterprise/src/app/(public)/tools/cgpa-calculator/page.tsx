'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight } from 'lucide-react';

export default function CGPACalculatorPage() {
    const [conversionType, setConversionType] = useState('percentage-to-cgpa');
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState<number | null>(null);

    const handleCalculate = () => {
        const value = parseFloat(inputValue);
        if (isNaN(value)) return;

        let calculated = 0;

        switch (conversionType) {
            case 'percentage-to-cgpa':
                // Formula: CGPA = (Percentage - 10) / 9.5
                calculated = (value - 10) / 9.5;
                break;
            case 'cgpa-to-percentage':
                // Formula: Percentage = (CGPA * 9.5) + 10
                calculated = (value * 9.5) + 10;
                break;
            case 'cgpa-to-gpa':
                // Direct conversion (assuming both on 4.0 scale)
                calculated = value;
                break;
            case 'gpa-to-cgpa':
                // Direct conversion
                calculated = value;
                break;
            case 'percentage-to-gpa':
                // Convert to CGPA first, then to GPA
                const cgpa = (value - 10) / 9.5;
                calculated = (cgpa / 10) * 4;
                break;
        }

        setResult(Math.round(calculated * 100) / 100);
    };

    const conversionTypes = [
        { value: 'percentage-to-cgpa', label: 'Percentage to CGPA (10 scale)', from: 'Percentage', to: 'CGPA' },
        { value: 'cgpa-to-percentage', label: 'CGPA to Percentage', from: 'CGPA', to: 'Percentage' },
        { value: 'cgpa-to-gpa', label: 'CGPA (10) to GPA (4)', from: 'CGPA', to: 'GPA' },
        { value: 'gpa-to-cgpa', label: 'GPA (4) to CGPA (10)', from: 'GPA', to: 'CGPA' },
        { value: 'percentage-to-gpa', label: 'Percentage to GPA (4)', from: 'Percentage', to: 'GPA' },
    ];

    const selectedConversion = conversionTypes.find(t => t.value === conversionType);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        CGPA / GPA Calculator
                    </h1>
                    <p className="text-xl text-gray-600">
                        Convert between different grading systems used worldwide
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Calculator */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculator</h2>

                        {/* Conversion Type */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Conversion Type
                            </label>
                            <select
                                value={conversionType}
                                onChange={(e) => {
                                    setConversionType(e.target.value);
                                    setResult(null);
                                }}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            >
                                {conversionTypes.map(type => (
                                    <option key={type.value} value={type.value}>{type.label}</option>
                                ))}
                            </select>
                        </div>

                        {/* Input */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Enter {selectedConversion?.from}
                            </label>
                            <input
                                type="number"
                                step="0.01"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
                                placeholder={`e.g., ${selectedConversion?.from === 'Percentage' ? '85' : '3.5'}`}
                            />
                        </div>

                        {/* Calculate Button */}
                        <button
                            onClick={handleCalculate}
                            className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                            <Calculator className="w-5 h-5" />
                            Calculate
                        </button>

                        {/* Result */}
                        {result !== null && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="mt-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center"
                            >
                                <div className="flex items-center justify-center gap-4 mb-2">
                                    <span className="text-2xl font-bold text-gray-700">{inputValue}</span>
                                    <ArrowRight className="w-6 h-6 text-blue-600" />
                                    <span className="text-4xl font-bold text-blue-600">{result}</span>
                                </div>
                                <div className="text-gray-600">
                                    {selectedConversion?.from} → {selectedConversion?.to}
                                </div>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Conversion Tables */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        {/* CGPA to Percentage */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">CGPA to Percentage</h3>
                            <div className="space-y-2">
                                {[
                                    { cgpa: 10, percentage: 95 },
                                    { cgpa: 9, percentage: 85.5 },
                                    { cgpa: 8, percentage: 76 },
                                    { cgpa: 7, percentage: 66.5 },
                                    { cgpa: 6, percentage: 57 },
                                ].map(row => (
                                    <div key={row.cgpa} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-blue-600">{row.cgpa} CGPA</span>
                                        <span className="text-gray-700">{row.percentage}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* GPA to CGPA */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">GPA (4.0) to CGPA (10.0)</h3>
                            <div className="space-y-2">
                                {[
                                    { gpa: 4.0, cgpa: 10.0 },
                                    { gpa: 3.5, cgpa: 8.75 },
                                    { gpa: 3.0, cgpa: 7.5 },
                                    { gpa: 2.5, cgpa: 6.25 },
                                    { gpa: 2.0, cgpa: 5.0 },
                                ].map(row => (
                                    <div key={row.gpa} className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-green-600">{row.gpa} GPA</span>
                                        <span className="text-gray-700">{row.cgpa} CGPA</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Info */}
                        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-6 text-white">
                            <h3 className="text-lg font-bold mb-2">💡 Important Note</h3>
                            <p className="text-sm text-blue-100">
                                Different universities may use different conversion formulas. Always check with your target university for their specific requirements and conversion methods.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
