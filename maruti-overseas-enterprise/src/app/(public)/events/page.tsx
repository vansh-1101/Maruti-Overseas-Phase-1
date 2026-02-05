'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Video, MapPin, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function EventsPage() {
    const [filter, setFilter] = useState('upcoming');

    const upcomingEvents = [
        {
            id: 1,
            title: 'Study in USA: Complete Guide Webinar',
            date: '2024-02-15',
            time: '6:00 PM IST',
            type: 'Online Webinar',
            speaker: 'Rajesh Patel - USA Counselor',
            seats: '50 seats left',
            topics: ['F-1 Visa Process', 'Top Universities', 'Scholarships', 'STEM OPT'],
        },
        {
            id: 2,
            title: 'UK University Fair 2024',
            date: '2024-02-20',
            time: '10:00 AM - 5:00 PM',
            type: 'In-Person Event',
            location: 'Ahmedabad Office',
            seats: '100 seats left',
            topics: ['Meet University Reps', 'On-Spot Offers', 'Scholarship Info'],
        },
        {
            id: 3,
            title: 'IELTS Preparation Workshop',
            date: '2024-02-25',
            time: '4:00 PM IST',
            type: 'Online Workshop',
            speaker: 'Priya Shah - IELTS Expert',
            seats: '30 seats left',
            topics: ['Band 7+ Strategies', 'Speaking Tips', 'Writing Techniques'],
        },
        {
            id: 4,
            title: 'Canada PR Pathway Seminar',
            date: '2024-03-01',
            time: '7:00 PM IST',
            type: 'Online Webinar',
            speaker: 'Amit Desai - Immigration Expert',
            seats: '75 seats left',
            topics: ['Study Permit', 'PGWP', 'Express Entry', 'Provincial Nomination'],
        },
    ];

    const pastEvents = [
        {
            id: 5,
            title: 'Germany Study Opportunities',
            date: '2024-01-20',
            attendees: '120+',
            recording: true,
        },
        {
            id: 6,
            title: 'Scholarship Application Workshop',
            date: '2024-01-15',
            attendees: '85+',
            recording: true,
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">Events & Webinars</h1>
                        <p className="text-2xl text-purple-100 mb-8">
                            Join our expert-led sessions and university fairs to kickstart your study abroad journey
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="py-12 bg-white relative z-10 -mt-8">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => setFilter('upcoming')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all ${filter === 'upcoming'
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Upcoming Events
                            </button>
                            <button
                                onClick={() => setFilter('past')}
                                className={`px-6 py-3 rounded-full font-semibold transition-all ${filter === 'past'
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                Past Events
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            {filter === 'upcoming' && (
                <section className="py-12">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="space-y-6">
                            {upcomingEvents.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
                                >
                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Date Badge */}
                                        <div className="flex-shrink-0">
                                            <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-xl p-6 text-center w-32">
                                                <div className="text-3xl font-bold">
                                                    {new Date(event.date).getDate()}
                                                </div>
                                                <div className="text-sm">
                                                    {new Date(event.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Event Details */}
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between mb-4">
                                                <h2 className="text-2xl font-bold text-gray-900">{event.title}</h2>
                                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                                                    {event.seats}
                                                </span>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Clock className="w-5 h-5 text-indigo-500" />
                                                    <span>{event.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Video className="w-5 h-5 text-indigo-500" />
                                                    <span>{event.type}</span>
                                                </div>
                                                {event.speaker && (
                                                    <div className="flex items-center gap-2 text-gray-600">
                                                        <Users className="w-5 h-5 text-indigo-500" />
                                                        <span>{event.speaker}</span>
                                                    </div>
                                                )}
                                                {event.location && (
                                                    <div className="flex items-center gap-2 text-gray-600">
                                                        <MapPin className="w-5 h-5 text-indigo-500" />
                                                        <span>{event.location}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="mb-4">
                                                <div className="text-sm font-semibold text-gray-700 mb-2">Topics Covered:</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {event.topics.map((topic) => (
                                                        <span key={topic} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                                                            {topic}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <Link
                                                href="/book-consultation"
                                                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                                            >
                                                Register Now - Free
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Past Events */}
            {filter === 'past' && (
                <section className="py-12">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="grid md:grid-cols-2 gap-6">
                            {pastEvents.map((event, index) => (
                                <motion.div
                                    key={event.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
                                >
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>{new Date(event.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                                        <Users className="w-4 h-4" />
                                        <span>{event.attendees} attendees</span>
                                    </div>
                                    {event.recording && (
                                        <button className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                                            <Video className="w-5 h-5" />
                                            Watch Recording
                                        </button>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Never Miss an Event</h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Subscribe to get notified about upcoming webinars and university fairs
                    </p>
                    <div className="flex gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none"
                        />
                        <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
