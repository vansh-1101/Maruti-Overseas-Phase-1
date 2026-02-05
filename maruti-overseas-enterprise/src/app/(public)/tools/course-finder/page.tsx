'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, GraduationCap, MapPin, DollarSign, Clock, Star, ArrowRight } from 'lucide-react';

export default function CourseFinderPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('All');
    const [selectedLevel, setSelectedLevel] = useState('All');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const countries = ['All', 'USA', 'UK', 'Canada', 'Australia', 'New Zealand', 'Germany', 'Ireland'];
    const levels = ['All', 'Bachelors', 'Masters', 'PhD', 'Diploma'];
    const categories = ['All', 'Engineering', 'Business', 'Computer Science', 'Medicine', 'Arts', 'Science'];

    // Sample courses data (in production, this would come from API)
    const courses = [
        {
            id: 1,
            name: 'Master of Science in Computer Science',
            university: 'Stanford University',
            country: 'USA',
            level: 'Masters',
            category: 'Computer Science',
            duration: '2 years',
            tuitionFee: 55000,
            ranking: 2,
            intake: ['Sep 2024', 'Jan 2025'],
            requirements: {
                minCGPA: 3.5,
                minIELTS: 7.0,
                minTOEFL: 100
            }
        },
        {
            id: 2,
            name: 'MBA (Master of Business Administration)',
            university: 'London Business School',
            country: 'UK',
            level: 'Masters',
            category: 'Business',
            duration: '2 years',
            tuitionFee: 65000,
            ranking: 5,
            intake: ['Sep 2024'],
            requirements: {
                minCGPA: 3.3,
                minIELTS: 7.0,
                minGMAT: 650
            }
        },
        {
            id: 3,
            name: 'Bachelor of Engineering in Mechanical Engineering',
            university: 'University of Toronto',
            country: 'Canada',
            level: 'Bachelors',
            category: 'Engineering',
            duration: '4 years',
            tuitionFee: 45000,
            ranking: 18,
            intake: ['Sep 2024', 'Jan 2025'],
            requirements: {
                minCGPA: 3.0,
                minIELTS: 6.5,
                minTOEFL: 90
            }
        },
        {
            id: 4,
            name: 'Master of Data Science',
            university: 'University of Melbourne',
            country: 'Australia',
            level: 'Masters',
            category: 'Computer Science',
            duration: '2 years',
            tuitionFee: 42000,
            ranking: 33,
            intake: ['Feb 2025', 'Jul 2025'],
            requirements: {
                minCGPA: 3.2,
                minIELTS: 6.5,
                minTOEFL: 85
            }
        },
    ];

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.university.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCountry = selectedCountry === 'All' || course.country === selectedCountry;
        const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
        const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;

        return matchesSearch && matchesCountry && matchesLevel && matchesCategory;
    });

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Find Your Perfect Course
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Search through 200,000+ courses from top universities worldwide
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search for courses, universities..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg"
                            />
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="grid md:grid-cols-3 gap-4">
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
                            <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                            <select
                                value={selectedLevel}
                                onChange={(e) => setSelectedLevel(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            >
                                {levels.map(level => (
                                    <option key={level} value={level}>{level}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                            >
                                {categories.map(category => (
                                    <option key={category} value={category}>{category}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-gray-600">
                        Found <span className="font-bold text-blue-600">{filteredCourses.length}</span> courses matching your criteria
                    </p>
                </div>

                {/* Course Cards */}
                <div className="space-y-6">
                    {filteredCourses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all"
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* University Logo Placeholder */}
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <GraduationCap className="w-12 h-12 text-white" />
                                </div>

                                {/* Course Details */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-2">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{course.name}</h3>
                                            <p className="text-lg text-gray-600">{course.university}</p>
                                        </div>
                                        <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                                            <Star className="w-4 h-4 text-yellow-600 fill-yellow-600" />
                                            <span className="text-sm font-semibold text-yellow-700">Rank #{course.ranking}</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-4">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <MapPin className="w-4 h-4" />
                                            <span className="text-sm">{course.country}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Clock className="w-4 h-4" />
                                            <span className="text-sm">{course.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <DollarSign className="w-4 h-4" />
                                            <span className="text-sm">${course.tuitionFee.toLocaleString()}/year</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <GraduationCap className="w-4 h-4" />
                                            <span className="text-sm">{course.level}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                            {course.category}
                                        </span>
                                        {course.intake.map(intake => (
                                            <span key={intake} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                                                Intake: {intake}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="text-sm text-gray-600">
                                            <span className="font-semibold">Requirements:</span> CGPA {course.requirements.minCGPA}+ | IELTS {course.requirements.minIELTS}+
                                        </div>
                                        <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all flex items-center gap-2">
                                            Apply Now <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* No Results */}
                {filteredCourses.length === 0 && (
                    <div className="text-center py-12">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="w-12 h-12 text-gray-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No courses found</h3>
                        <p className="text-gray-600">Try adjusting your filters or search query</p>
                    </div>
                )}
            </div>
        </div>
    );
}
