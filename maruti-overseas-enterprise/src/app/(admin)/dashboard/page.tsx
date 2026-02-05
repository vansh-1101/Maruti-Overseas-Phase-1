'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, DollarSign, Clock, Search, Filter, Plus, Eye } from 'lucide-react';

export default function AdminDashboardPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const stats = [
        { label: 'Total Leads', value: '1,234', change: '+12%', icon: Users, color: 'blue' },
        { label: 'This Month', value: '156', change: '+23%', icon: TrendingUp, color: 'green' },
        { label: 'Conversion Rate', value: '18%', change: '+5%', icon: DollarSign, color: 'purple' },
        { label: 'Avg Response Time', value: '2.5h', change: '-15%', icon: Clock, color: 'orange' },
    ];

    const leads = [
        {
            id: 1,
            name: 'Priya Patel',
            email: 'priya@example.com',
            phone: '+91 98765 43210',
            country: 'USA',
            status: 'New',
            score: 85,
            source: 'Website',
            date: '2024-02-04',
        },
        {
            id: 2,
            name: 'Rahul Shah',
            email: 'rahul@example.com',
            phone: '+91 98765 43211',
            country: 'Canada',
            status: 'Contacted',
            score: 72,
            source: 'Facebook',
            date: '2024-02-03',
        },
        {
            id: 3,
            name: 'Anjali Desai',
            email: 'anjali@example.com',
            phone: '+91 98765 43212',
            country: 'UK',
            status: 'Qualified',
            score: 90,
            source: 'Google',
            date: '2024-02-02',
        },
        {
            id: 4,
            name: 'Karan Mehta',
            email: 'karan@example.com',
            phone: '+91 98765 43213',
            country: 'Australia',
            status: 'New',
            score: 68,
            source: 'Referral',
            date: '2024-02-01',
        },
    ];

    const filteredLeads = leads.filter(lead => {
        const matchesSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            lead.email.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = statusFilter === 'All' || lead.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'New': return 'bg-blue-100 text-blue-700';
            case 'Contacted': return 'bg-yellow-100 text-yellow-700';
            case 'Qualified': return 'bg-green-100 text-green-700';
            case 'Enrolled': return 'bg-purple-100 text-purple-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const getScoreColor = (score: number) => {
        if (score >= 80) return 'text-green-600';
        if (score >= 60) return 'text-yellow-600';
        return 'text-red-600';
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
                    <p className="text-gray-600">Welcome back! Here's what's happening today.</p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                                </div>
                                <div className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                    {stat.change}
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Leads Table */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Recent Leads</h2>
                        <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                            <Plus className="w-5 h-5" />
                            Add Lead
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search leads..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            />
                        </div>

                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                        >
                            <option value="All">All Status</option>
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Qualified">Qualified</option>
                            <option value="Enrolled">Enrolled</option>
                        </select>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-gray-200">
                                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Name</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Contact</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Country</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Status</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Score</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Source</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Date</th>
                                    <th className="text-left py-4 px-4 font-semibold text-gray-700">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredLeads.map((lead, index) => (
                                    <motion.tr
                                        key={lead.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="border-b border-gray-100 hover:bg-gray-50"
                                    >
                                        <td className="py-4 px-4">
                                            <div className="font-semibold text-gray-900">{lead.name}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-sm text-gray-600">{lead.email}</div>
                                            <div className="text-sm text-gray-600">{lead.phone}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-gray-700">{lead.country}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(lead.status)}`}>
                                                {lead.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <span className={`text-lg font-bold ${getScoreColor(lead.score)}`}>
                                                {lead.score}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-gray-700">{lead.source}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="text-sm text-gray-600">{lead.date}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <button className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition-all">
                                                <Eye className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {filteredLeads.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-2">No leads found</div>
                            <p className="text-sm text-gray-500">Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
