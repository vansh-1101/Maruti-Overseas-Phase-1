'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CountriesPage() {
    const countries = [
        {
            name: 'USA',
            code: 'US',
            flag: '🇺🇸',
            description: 'The world\'s most popular study destination with top-ranked universities.',
            image: '/images/country-usa.jpg',
            stats: { universities: '4000+', students: '1M+' },
            link: '/countries/usa',
            color: 'from-blue-600 to-red-600'
        },
        {
            name: 'UK',
            code: 'GB',
            flag: '🇬🇧',
            description: 'Home to some of the world\'s oldest and most prestigious universities.',
            image: '/images/country-uk.jpg', // Assuming this exists based on home page
            stats: { universities: '130+', students: '600K+' },
            link: '/countries/uk',
            color: 'from-red-700 to-blue-700'
        },
        {
            name: 'Canada',
            code: 'CA',
            flag: '🇨🇦',
            description: 'Known for its welcoming culture, high quality of life, and post-study work options.',
            image: '/images/country-canada.jpg', // Assuming this exists
            stats: { universities: '100+', students: '800K+' },
            link: '/countries/canada',
            color: 'from-red-600 to-red-500'
        },
        {
            name: 'Australia',
            code: 'AU',
            flag: '🇦🇺',
            description: 'A paradise for students with world-class education and a laid-back lifestyle.',
            image: '/images/country-australia.jpg', // Assuming this exists
            stats: { universities: '43', students: '700K+' },
            link: '/countries/australia',
            color: 'from-blue-600 to-yellow-500'
        },
        {
            name: 'New Zealand',
            code: 'NZ',
            flag: '🇳🇿',
            description: 'Safe, beautiful, and offering excellent education with great work-life balance.',
            image: '/images/country-newzealand.jpg', // Assuming this exists
            stats: { universities: '8', students: '100K+' },
            link: '/countries/new-zealand',
            color: 'from-blue-700 to-red-600'
        },
        {
            name: 'Germany',
            code: 'DE',
            flag: '🇩🇪',
            description: 'Top-notch engineering and technology education with low or no tuition fees.',
            image: '/images/country-europe.jpg', // Reusing europe image
            stats: { universities: '400+', students: '400K+' },
            link: '/countries/germany',
            color: 'from-black to-yellow-500'
        },
        {
            name: 'Ireland',
            code: 'IE',
            flag: '🇮🇪',
            description: 'The Silicon Valley of Europe, offering immense career opportunities in tech.',
            image: '/images/country-europe.jpg', // Reusing europe image
            stats: { universities: '7', students: '35K+' },
            link: '/countries/ireland',
            color: 'from-green-600 to-orange-500'
        },
    ];

    return (
        <div className="min-h-screen bg-muted/20">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-foreground via-primary/80 to-foreground text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl mx-auto"
                    >
                        <div className="inline-block bg-white/10 backdrop-blur rounded-full px-6 py-2 mb-6 border border-white/20">
                            <span className="font-semibold text-secondary">Study Destinations</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Choose Your <br />
                            <span className="bg-gradient-to-r from-secondary to-blue-200 bg-clip-text text-transparent">
                                Study Destination
                            </span>
                        </h1>
                        <p className="text-xl text-muted-foreground/80 mb-8 leading-relaxed text-blue-50">
                            Explore top study destinations around the world. Each country offers unique opportunities for academic excellence, cultural experiences, and career growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Countries Grid */}
            <section className="py-20 -mt-10">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {countries.map((country, index) => (
                            <motion.div
                                key={country.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link href={country.link} className="block group h-full">
                                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-2">
                                        {/* Image Header */}
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={country.image}
                                                alt={country.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-r ${country.color} opacity-60 group-hover:opacity-40 transition-opacity`} />
                                            <div className="absolute bottom-4 left-4 text-white">
                                                <div className="text-4xl mb-1">{country.flag}</div>
                                                <h3 className="text-2xl font-bold">{country.name}</h3>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <p className="text-muted-foreground mb-6 flex-1">
                                                {country.description}
                                            </p>

                                            {/* Stats */}
                                            <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-border">
                                                <div>
                                                    <div className="flex items-center gap-2 text-muted-foreground/70 text-sm mb-1">
                                                        <Globe className="w-4 h-4" />
                                                        Universities
                                                    </div>
                                                    <div className="font-bold text-foreground">{country.stats.universities}</div>
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2 text-muted-foreground/70 text-sm mb-1">
                                                        <Users className="w-4 h-4" />
                                                        Students
                                                    </div>
                                                    <div className="font-bold text-foreground">{country.stats.students}</div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between text-primary font-semibold group-hover:translate-x-2 transition-transform">
                                                Explore {country.name}
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Presence Banner */}
            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/images/pattern.svg')]"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need help choosing the right country?</h2>
                            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                                Our expert counselors can help you evaluate your options based on your academic profile, budget, and career goals.
                            </p>
                            <Link
                                href="/book-consultation"
                                className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/10 hover:text-secondary transition-all inline-flex items-center gap-2 shadow-lg"
                            >
                                Get Expert Guidance <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
