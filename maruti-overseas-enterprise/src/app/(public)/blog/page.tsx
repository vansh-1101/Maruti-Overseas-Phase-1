'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function BlogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Study Abroad', 'Visa Tips', 'Student Life', 'Career Advice', 'Test Prep'];

    const blogPosts = [
        {
            id: 1,
            title: 'Top 10 Universities in USA for Computer Science in 2024',
            excerpt: 'Discover the best CS programs in America with high placement rates and cutting-edge research facilities.',
            category: 'Study Abroad',
            author: 'Priya Shah',
            date: '2024-02-01',
            image: '🎓',
            readTime: '5 min read',
        },
        {
            id: 2,
            title: 'F-1 Visa Interview: Common Questions and How to Answer',
            excerpt: 'Prepare for your US student visa interview with these expert tips and sample answers.',
            category: 'Visa Tips',
            author: 'Amit Desai',
            date: '2024-01-28',
            image: '✈️',
            readTime: '7 min read',
        },
        {
            id: 3,
            title: 'Cost of Living in Canada: Complete Guide for International Students',
            excerpt: 'Breakdown of monthly expenses in Toronto, Vancouver, and other major Canadian cities.',
            category: 'Student Life',
            author: 'Rajesh Patel',
            date: '2024-01-25',
            image: '🍁',
            readTime: '6 min read',
        },
        {
            id: 4,
            title: 'IELTS Band 7+: Proven Strategies That Actually Work',
            excerpt: 'Achieve your target IELTS score with these time-tested preparation techniques.',
            category: 'Test Prep',
            author: 'Priya Shah',
            date: '2024-01-22',
            image: '📚',
            readTime: '8 min read',
        },
        {
            id: 5,
            title: 'Scholarships for Indian Students: $100K+ Opportunities',
            excerpt: 'Complete list of fully-funded and partial scholarships available for Indian students in 2024.',
            category: 'Study Abroad',
            author: 'Rajesh Patel',
            date: '2024-01-20',
            image: '💰',
            readTime: '10 min read',
        },
        {
            id: 6,
            title: 'Part-Time Jobs in Australia: Student Work Rights Explained',
            excerpt: 'Everything you need to know about working while studying in Australia.',
            category: 'Career Advice',
            author: 'Amit Desai',
            date: '2024-01-18',
            image: '🦘',
            readTime: '5 min read',
        },
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">Study Abroad Blog</h1>
                        <p className="text-2xl text-blue-100 mb-8">
                            Expert insights, tips, and guides for your international education journey
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Search & Filter */}
            <section className="py-12 bg-white relative z-10 -mt-8">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                                />
                            </div>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            >
                                {categories.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === cat
                                            ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="py-12">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
                            >
                                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 h-48 flex items-center justify-center text-6xl">
                                    {post.image}
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                                            {post.category}
                                        </span>
                                        <span className="text-xs text-gray-500">{post.readTime}</span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-2">
                                            <User className="w-4 h-4" />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{new Date(post.date).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    <Link href={`/blog/${post.id}`} className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
                                        Read More <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-2 text-xl">No articles found</div>
                            <p className="text-gray-500">Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                <div className="container mx-auto px-4 text-center max-w-2xl">
                    <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
                    <p className="text-xl text-blue-100 mb-8">
                        Get the latest study abroad tips and insights delivered to your inbox
                    </p>
                    <div className="flex gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none"
                        />
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
