'use client';

import Link from 'next/link';
import { GraduationCap, Globe, Briefcase, BookOpen, Plane, Home as HomeIcon } from 'lucide-react';

export default function SitemapPage() {
    const pages = {
        'Country Pages (7)': [
            { name: 'USA', url: '/countries/usa' },
            { name: 'UK', url: '/countries/uk' },
            { name: 'Canada', url: '/countries/canada' },
            { name: 'Australia', url: '/countries/australia' },
            { name: 'New Zealand', url: '/countries/new-zealand' },
            { name: 'Germany', url: '/countries/germany' },
            { name: 'Ireland', url: '/countries/ireland' },
        ],
        'Course Categories (8)': [
            { name: 'Computer Science & IT', url: '/courses/computer-science' },
            { name: 'Business & Management', url: '/courses/business' },
            { name: 'Engineering', url: '/courses/engineering' },
            { name: 'Medicine & Healthcare', url: '/courses/medicine' },
            { name: 'Arts & Design', url: '/courses/arts-design' },
            { name: 'Science & Research', url: '/courses/science' },
            { name: 'Law & Legal Studies', url: '/courses/law' },
            { name: 'Hospitality & Tourism', url: '/courses/hospitality' },
        ],
        'Visa Services (4)': [
            { name: 'Student Visa', url: '/services/student-visa' },
            { name: 'Visitor Visa', url: '/services/visitor-visa' },
            { name: 'Work Visa', url: '/services/work-visa' },
            { name: 'PR & Immigration', url: '/services/pr-immigration' },
        ],
        'Test Prep (6)': [
            { name: 'IELTS Coaching', url: '/test-prep/ielts' },
            { name: 'TOEFL Coaching', url: '/test-prep/toefl' },
            { name: 'PTE Coaching', url: '/test-prep/pte' },
            { name: 'GRE Coaching', url: '/test-prep/gre' },
            { name: 'GMAT Coaching', url: '/test-prep/gmat' },
            { name: 'SAT Coaching', url: '/test-prep/sat' },
        ],
        'Student Tools (7)': [
            { name: 'Course Finder', url: '/tools/course-finder' },
            { name: 'Eligibility Checker', url: '/tools/eligibility-checker' },
            { name: 'Cost Calculator', url: '/tools/cost-calculator' },
            { name: 'Scholarship Finder', url: '/tools/scholarship-finder' },
            { name: 'Visa Checklist', url: '/tools/visa-checklist' },
            { name: 'Intake Planner', url: '/tools/intake-planner' },
            { name: 'CGPA Calculator', url: '/tools/cgpa-calculator' },
        ],
        'Company Pages (6)': [
            { name: 'Homepage', url: '/' },
            { name: 'About Us', url: '/about' },
            { name: 'Contact', url: '/contact' },
            { name: 'Blog', url: '/blog' },
            { name: 'Success Stories', url: '/success-stories' },
            { name: 'Events & Webinars', url: '/events' },
        ],
        'Other Pages (2)': [
            { name: 'Book Consultation', url: '/book-consultation' },
            { name: 'Admin Dashboard', url: '/dashboard' },
        ],
    };

    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">Complete Sitemap</h1>
                        <p className="text-xl text-gray-600">All 50+ pages of Maruti Overseas Enterprise Platform</p>
                        <div className="mt-6">
                            <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all inline-flex items-center gap-2">
                                <HomeIcon className="w-5 h-5" />
                                Back to Homepage
                            </Link>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {Object.entries(pages).map(([category, links]) => (
                            <div key={category} className="bg-white rounded-2xl p-8 shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    {category.includes('Country') && <Globe className="w-6 h-6 text-blue-600" />}
                                    {category.includes('Course') && <GraduationCap className="w-6 h-6 text-purple-600" />}
                                    {category.includes('Visa') && <Plane className="w-6 h-6 text-green-600" />}
                                    {category.includes('Test') && <BookOpen className="w-6 h-6 text-orange-600" />}
                                    {category.includes('Tools') && <Briefcase className="w-6 h-6 text-indigo-600" />}
                                    {category}
                                </h2>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.url}>
                                            <Link
                                                href={link.url}
                                                className="text-blue-600 hover:text-blue-800 hover:underline font-medium flex items-center gap-2 group"
                                            >
                                                <span className="w-2 h-2 bg-blue-600 rounded-full group-hover:scale-150 transition-transform"></span>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 text-center">
                        <h3 className="text-3xl font-bold mb-4">Total Pages: 50+</h3>
                        <p className="text-xl mb-6">All pages are live and working!</p>
                        <div className="flex justify-center gap-4">
                            <Link href="/" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
                                Explore Homepage
                            </Link>
                            <Link href="/book-consultation" className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition-all">
                                Book Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
