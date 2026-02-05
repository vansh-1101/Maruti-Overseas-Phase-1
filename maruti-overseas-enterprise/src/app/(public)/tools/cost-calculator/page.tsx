'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Home, Utensils, Bus, Book, Heart, TrendingUp } from 'lucide-react';

export default function CostCalculatorPage() {
    const [country, setCountry] = useState('USA');
    const [city, setCity] = useState('');
    const [tuitionFee, setTuitionFee] = useState('50000');
    const [duration, setDuration] = useState('2');

    const livingCosts: any = {
        USA: {
            'New York': { rent: 2000, food: 600, transport: 150, misc: 300 },
            'Los Angeles': { rent: 1800, food: 550, transport: 140, misc: 280 },
            'Boston': { rent: 1900, food: 580, transport: 130, misc: 270 },
            'Chicago': { rent: 1500, food: 500, transport: 120, misc: 250 },
        },
        UK: {
            'London': { rent: 1600, food: 450, transport: 180, misc: 250 },
            'Manchester': { rent: 900, food: 350, transport: 100, misc: 180 },
            'Edinburgh': { rent: 1000, food: 380, transport: 110, misc: 200 },
        },
        Canada: {
            'Toronto': { rent: 1400, food: 400, transport: 130, misc: 220 },
            'Vancouver': { rent: 1500, food: 420, transport: 140, misc: 230 },
            'Montreal': { rent: 900, food: 350, transport: 100, misc: 180 },
        },
        Australia: {
            'Sydney': { rent: 1600, food: 500, transport: 150, misc: 250 },
            'Melbourne': { rent: 1400, food: 450, transport: 140, misc: 230 },
            'Brisbane': { rent: 1200, food: 400, transport: 120, misc: 200 },
        },
    };

    const cities = Object.keys(livingCosts[country] || {});
    const selectedCity = city || cities[0];
    const costs = livingCosts[country]?.[selectedCity] || { rent: 0, food: 0, transport: 0, misc: 0 };

    const monthlyLiving = costs.rent + costs.food + costs.transport + costs.misc;
    const yearlyLiving = monthlyLiving * 12;
    const totalLiving = yearlyLiving * parseInt(duration);
    const totalTuition = parseInt(tuitionFee) * parseInt(duration);
    const grandTotal = totalLiving + totalTuition;

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Cost Calculator
                    </h1>
                    <p className="text-xl text-gray-600">
                        Calculate total study costs including tuition and living expenses
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Input Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Details</h2>

                        <div className="space-y-6">
                            {/* Country */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Country
                                </label>
                                <select
                                    value={country}
                                    onChange={(e) => {
                                        setCountry(e.target.value);
                                        setCity('');
                                    }}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                >
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                </select>
                            </div>

                            {/* City */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    City
                                </label>
                                <select
                                    value={selectedCity}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                >
                                    {cities.map(c => (
                                        <option key={c} value={c}>{c}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Tuition Fee */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Annual Tuition Fee (USD)
                                </label>
                                <input
                                    type="number"
                                    value={tuitionFee}
                                    onChange={(e) => setTuitionFee(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                    placeholder="50000"
                                />
                            </div>

                            {/* Duration */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Course Duration (Years)
                                </label>
                                <select
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                >
                                    <option value="1">1 Year</option>
                                    <option value="2">2 Years</option>
                                    <option value="3">3 Years</option>
                                    <option value="4">4 Years</option>
                                </select>
                            </div>
                        </div>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6"
                    >
                        {/* Monthly Breakdown */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Monthly Living Costs</h2>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                            <Home className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-medium">Accommodation</span>
                                    </div>
                                    <span className="text-lg font-bold text-blue-600">${costs.rent}</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                                            <Utensils className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-medium">Food & Groceries</span>
                                    </div>
                                    <span className="text-lg font-bold text-green-600">${costs.food}</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                                            <Bus className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-medium">Transportation</span>
                                    </div>
                                    <span className="text-lg font-bold text-purple-600">${costs.transport}</span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                                            <Heart className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="font-medium">Miscellaneous</span>
                                    </div>
                                    <span className="text-lg font-bold text-orange-600">${costs.misc}</span>
                                </div>

                                <div className="border-t-2 border-gray-200 pt-4 mt-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold">Monthly Total</span>
                                        <span className="text-2xl font-bold text-gray-900">${monthlyLiving.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Total Cost Summary */}
                        <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl shadow-lg p-8 text-white">
                            <h2 className="text-2xl font-bold mb-6">Total Cost Breakdown</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                    <span className="text-blue-100">Tuition Fees ({duration} years)</span>
                                    <span className="text-xl font-bold">${totalTuition.toLocaleString()}</span>
                                </div>

                                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                                    <span className="text-blue-100">Living Expenses ({duration} years)</span>
                                    <span className="text-xl font-bold">${totalLiving.toLocaleString()}</span>
                                </div>

                                <div className="flex justify-between items-center pt-4">
                                    <span className="text-xl font-bold">Grand Total</span>
                                    <span className="text-4xl font-bold">${grandTotal.toLocaleString()}</span>
                                </div>

                                <div className="bg-white/10 backdrop-blur rounded-xl p-4 mt-6">
                                    <p className="text-sm text-blue-100">
                                        💡 This is an estimate. Actual costs may vary based on lifestyle and scholarship opportunities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all">
                            Download Detailed Report
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
