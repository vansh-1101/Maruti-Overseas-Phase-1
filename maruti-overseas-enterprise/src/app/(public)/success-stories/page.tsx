'use client';

import { motion } from 'framer-motion';
import { Award, MapPin, GraduationCap, Star } from 'lucide-react';
import Link from 'next/link';

export default function SuccessStoriesPage() {
    const stories = [
        {
            id: 1,
            name: 'Priya Patel',
            university: 'Stanford University',
            country: 'USA',
            course: 'MS in Computer Science',
            year: '2023',
            image: '👩‍🎓',
            testimonial: 'Maruti Overseas made my dream of studying at Stanford a reality. Their expert guidance through the application process, visa preparation, and scholarship search was invaluable. I received a $40,000 scholarship thanks to their support!',
            achievement: 'Full Scholarship',
            rating: 5,
        },
        {
            id: 2,
            name: 'Rahul Shah',
            university: 'London Business School',
            country: 'UK',
            course: 'MBA',
            year: '2023',
            image: '👨‍💼',
            testimonial: 'The team at Maruti Overseas helped me navigate the complex MBA application process. From GMAT preparation to essay editing, they were with me every step. Now I\'m at one of the world\'s top business schools!',
            achievement: 'Top 5 B-School',
            rating: 5,
        },
        {
            id: 3,
            name: 'Anjali Desai',
            university: 'University of Toronto',
            country: 'Canada',
            course: 'MS in Data Science',
            year: '2024',
            image: '👩‍💻',
            testimonial: 'I was confused about which country and program to choose. Maruti Overseas counselors helped me find the perfect fit. The visa process was smooth, and I got my study permit in just 4 weeks!',
            achievement: 'Fast Visa Approval',
            rating: 5,
        },
        {
            id: 4,
            name: 'Karan Mehta',
            university: 'University of Melbourne',
            country: 'Australia',
            course: 'MS in Engineering',
            year: '2024',
            image: '👨‍🔧',
            testimonial: 'From shortlisting universities to visa interview preparation, Maruti Overseas provided end-to-end support. Their expertise in Australian immigration was particularly helpful. Highly recommended!',
            achievement: 'PR Pathway',
            rating: 5,
        },
        {
            id: 5,
            name: 'Sneha Joshi',
            university: 'TU Munich',
            country: 'Germany',
            course: 'MS in Mechanical Engineering',
            year: '2023',
            image: '👩‍🔬',
            testimonial: 'Studying in Germany was always my dream because of tuition-free education. Maruti Overseas helped me with the entire process including blocked account, visa, and accommodation. Now I\'m at one of Europe\'s best tech universities!',
            achievement: 'Tuition Free',
            rating: 5,
        },
        {
            id: 6,
            name: 'Arjun Verma',
            university: 'University of Auckland',
            country: 'New Zealand',
            course: 'MS in Environmental Science',
            year: '2024',
            image: '👨‍🌾',
            testimonial: 'The personalized counseling I received was outstanding. They understood my career goals and helped me choose a program that aligned perfectly. The post-study work visa in NZ is a great bonus!',
            achievement: '3-Year Work Visa',
            rating: 5,
        },
    ];

    const stats = [
        { label: 'Success Stories', value: '5000+' },
        { label: 'Countries', value: '15+' },
        { label: 'Universities', value: '200+' },
        { label: 'Satisfaction Rate', value: '98%' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">Success Stories</h1>
                        <p className="text-2xl text-purple-100 mb-8">
                            Real students, real success. Read how we helped them achieve their study abroad dreams.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white relative z-10 -mt-8">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 text-center"
                            >
                                <div className="text-4xl font-bold text-purple-900 mb-1">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stories */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-8">
                        {stories.map((story, index) => (
                            <motion.div
                                key={story.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="text-6xl">{story.image}</div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{story.name}</h3>
                                        <div className="flex items-center gap-2 text-purple-600 font-semibold mb-2">
                                            <GraduationCap className="w-4 h-4" />
                                            <span>{story.university}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600 text-sm mb-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{story.country}</span>
                                        </div>
                                        <div className="text-sm text-gray-600">{story.course} • {story.year}</div>
                                    </div>
                                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                                        {story.achievement}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex gap-1 mb-3">
                                        {[...Array(story.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 italic leading-relaxed">
                                        "{story.testimonial}"
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Your Success Story Starts Here</h2>
                    <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of successful students who achieved their study abroad dreams with us
                    </p>
                    <Link href="/book-consultation" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                        Start Your Journey
                    </Link>
                </div>
            </section>
        </div>
    );
}
