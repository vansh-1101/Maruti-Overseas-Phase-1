'use client';

import { motion } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, Heart, Target } from 'lucide-react';

export default function AboutPage() {
    const stats = [
        { label: 'Years of Excellence', value: '20+', icon: Award },
        { label: 'Students Helped', value: '5000+', icon: Users },
        { label: 'Partner Universities', value: '200+', icon: Globe },
        { label: 'Success Rate', value: '95%', icon: TrendingUp },
    ];

    const values = [
        {
            title: 'Student-First Approach',
            description: 'Every decision we make is centered around student success and satisfaction',
            icon: Heart,
        },
        {
            title: 'Transparency',
            description: 'Clear communication and honest guidance at every step of your journey',
            icon: Target,
        },
        {
            title: 'Excellence',
            description: 'Committed to delivering the highest quality of service and support',
            icon: Award,
        },
    ];

    const team = [
        {
            name: 'Rajesh Patel',
            role: 'Founder & CEO',
            experience: '25+ years in education consultancy',
            image: '👨‍💼',
        },
        {
            name: 'Priya Shah',
            role: 'Head of Counseling',
            experience: 'Certified counselor, 15+ years experience',
            image: '👩‍💼',
        },
        {
            name: 'Amit Desai',
            role: 'Visa Specialist',
            experience: 'Expert in visa processing, 12+ years',
            image: '👨‍💻',
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Maruti Overseas</h1>
                        <p className="text-2xl text-blue-100">
                            Empowering students to achieve their global education dreams since 2004
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white relative z-10 -mt-8">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center"
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-4xl font-bold text-blue-900 mb-1">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Story</h2>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Founded in 2004 in Visnagar, Gujarat, Maruti Overseas Consultancy began with a simple mission: to make quality international education accessible to every deserving student. What started as a small office has grown into one of Gujarat's most trusted names in overseas education consultancy.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed mb-6">
                            Over the past two decades, we've helped more than 5,000 students realize their dreams of studying abroad. Our success is built on personalized guidance, transparent processes, and an unwavering commitment to student success.
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Today, with offices in Visnagar and Ahmedabad, we continue to expand our reach while maintaining the personal touch that has been our hallmark since day one.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center"
                            >
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <value.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-8 text-center shadow-lg"
                            >
                                <div className="text-6xl mb-4">{member.image}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                                <p className="text-gray-600">{member.experience}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of successful students who trusted us with their dreams
                    </p>
                    <a href="/book-consultation" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all inline-block">
                        Book Free Consultation
                    </a>
                </div>
            </section>
        </div>
    );
}
