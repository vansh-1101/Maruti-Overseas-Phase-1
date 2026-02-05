'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Award, DollarSign, Calendar, MapPin, ExternalLink } from 'lucide-react';

export default function ScholarshipFinderPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('All');
    const [selectedAmount, setSelectedAmount] = useState('All');

    const scholarships = [
        {
            id: 1,
            name: 'Fulbright Foreign Student Program',
            provider: 'US Department of State',
            country: 'USA',
            amount: 50000,
            type: 'Full Tuition',
            deadline: '2024-10-15',
            eligibility: 'International students with excellent academic record',
            applicationUrl: 'https://foreign.fulbrightonline.org'
        },
        {
            id: 2,
            name: 'Chevening Scholarships',
            provider: 'UK Government',
            country: 'UK',
            amount: 45000,
            type: 'Full Tuition + Living',
            deadline: '2024-11-02',
            eligibility: 'Outstanding emerging leaders from around the world',
            applicationUrl: 'https://www.chevening.org'
        },
        {
            id: 3,
            name: 'Australia Awards Scholarships',
            provider: 'Australian Government',
            country: 'Australia',
            amount: 40000,
            type: 'Full Tuition + Living',
            deadline: '2024-09-30',
            eligibility: 'Citizens of eligible countries in Asia-Pacific',
            applicationUrl: 'https://www.australiaawardsindia.org'
        },
        {
            id: 4,
            name: 'Vanier Canada Graduate Scholarships',
            provider: 'Government of Canada',
            country: 'Canada',
            amount: 50000,
            type: 'Annual Stipend',
            deadline: '2024-11-01',
            eligibility: 'Doctoral students with academic excellence',
            applicationUrl: 'https://vanier.gc.ca'
        },
        {
            id: 5,
            name: 'DAAD Scholarships',
            provider: 'German Academic Exchange',
            country: 'Germany',
            amount: 25000,
            type: 'Monthly Stipend',
            deadline: '2024-10-31',
            eligibility: 'International students for Masters/PhD in Germany',
            applicationUrl: 'https://www.daad.de'
        },
        {
            id: 6,
            name: 'Gates Cambridge Scholarship',
            provider: 'Bill & Melinda Gates Foundation',
            country: 'UK',
            amount: 60000,
            type: 'Full Cost',
            deadline: '2024-12-01',
            eligibility: 'Outstanding applicants from outside UK',
            applicationUrl: 'https://www.gatescambridge.org'
        },
    ];

    const countries = ['All', 'USA', 'UK', 'Canada', 'Australia', 'Germany'];
    const amounts = ['All', 'Under $25k', '$25k-$50k', 'Above $50k'];

    const filteredScholarships = scholarships.filter(scholarship => {
        const matchesSearch = scholarship.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            scholarship.provider.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCountry = selectedCountry === 'All' || scholarship.country === selectedCountry;

        let matchesAmount = true;
        if (selectedAmount === 'Under $25k') {
            matchesAmount = scholarship.amount < 25000;
        } else if (selectedAmount === '$25k-$50k') {
            matchesAmount = scholarship.amount >= 25000 && scholarship.amount <= 50000;
        } else if (selectedAmount === 'Above $50k') {
            matchesAmount = scholarship.amount > 50000;
        }

        return matchesSearch && matchesCountry && matchesAmount;
    });

    const totalValue = filteredScholarships.reduce((sum, s) => sum + s.amount, 0);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Scholarship Finder
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover scholarships worth millions of dollars for your study abroad journey
                    </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white"
                    >
                        <Award className="w-10 h-10 mb-3" />
                        <div className="text-3xl font-bold mb-1">{filteredScholarships.length}</div>
                        <div className="text-blue-100">Scholarships Available</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white"
                    >
                        <DollarSign className="w-10 h-10 mb-3" />
                        <div className="text-3xl font-bold mb-1">${(totalValue / 1000).toFixed(0)}k+</div>
                        <div className="text-green-100">Total Value</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white"
                    >
                        <MapPin className="w-10 h-10 mb-3" />
                        <div className="text-3xl font-bold mb-1">{countries.length - 1}</div>
                        <div className="text-purple-100">Countries Covered</div>
                    </motion.div>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <div className="mb-6">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search scholarships..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                            <select
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            >
                                {countries.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Amount Range</label>
                            <select
                                value={selectedAmount}
                                onChange={(e) => setSelectedAmount(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            >
                                {amounts.map(amount => (
                                    <option key={amount} value={amount}>{amount}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Scholarship Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {filteredScholarships.map((scholarship, index) => (
                        <motion.div
                            key={scholarship.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{scholarship.name}</h3>
                                    <p className="text-gray-600">{scholarship.provider}</p>
                                </div>
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                                    <Award className="w-6 h-6 text-white" />
                                </div>
                            </div>

                            <div className="space-y-3 mb-4">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <MapPin className="w-4 h-4 text-blue-500" />
                                    <span>{scholarship.country}</span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-700">
                                    <DollarSign className="w-4 h-4 text-green-500" />
                                    <span className="font-semibold">${scholarship.amount.toLocaleString()} - {scholarship.type}</span>
                                </div>

                                <div className="flex items-center gap-2 text-gray-700">
                                    <Calendar className="w-4 h-4 text-purple-500" />
                                    <span>Deadline: {new Date(scholarship.deadline).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4 mb-4">
                                <div className="text-sm font-semibold text-gray-700 mb-1">Eligibility:</div>
                                <div className="text-sm text-gray-600">{scholarship.eligibility}</div>
                            </div>

                            <a
                                href={scholarship.applicationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-2"
                            >
                                Apply Now <ExternalLink className="w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* No Results */}
                {filteredScholarships.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No scholarships found</h3>
                        <p className="text-gray-600">Try adjusting your filters or search query</p>
                    </div>
                )}
            </div>
        </div>
    );
}
