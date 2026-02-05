'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, GraduationCap, ChevronDown } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const navigation = [
        { name: 'Home', href: '/' },
        {
            name: 'Countries',
            href: '/countries/usa',
            dropdown: [
                { name: 'USA', href: '/countries/usa' },
                { name: 'UK', href: '/countries/uk' },
                { name: 'Canada', href: '/countries/canada' },
                { name: 'Australia', href: '/countries/australia' },
                { name: 'New Zealand', href: '/countries/new-zealand' },
                { name: 'Germany', href: '/countries/germany' },
                { name: 'Ireland', href: '/countries/ireland' },
            ]
        },
        {
            name: 'Courses',
            href: '/courses/computer-science',
            dropdown: [
                { name: 'Computer Science', href: '/courses/computer-science' },
                { name: 'Business', href: '/courses/business' },
                { name: 'Engineering', href: '/courses/engineering' },
                { name: 'Medicine', href: '/courses/medicine' },
                { name: 'Arts & Design', href: '/courses/arts-design' },
                { name: 'Science', href: '/courses/science' },
                { name: 'Law', href: '/courses/law' },
                { name: 'Hospitality', href: '/courses/hospitality' },
            ]
        },
        {
            name: 'Tools',
            href: '/tools/course-finder',
            dropdown: [
                { name: 'Course Finder', href: '/tools/course-finder' },
                { name: 'Eligibility Checker', href: '/tools/eligibility-checker' },
                { name: 'Cost Calculator', href: '/tools/cost-calculator' },
                { name: 'Scholarship Finder', href: '/tools/scholarship-finder' },
            ]
        },
        {
            name: 'Visa Services',
            href: '/services/student-visa',
            dropdown: [
                { name: 'Student Visa', href: '/services/student-visa' },
                { name: 'Visitor Visa', href: '/services/visitor-visa' },
                { name: 'Work Visa', href: '/services/work-visa' },
                { name: 'PR & Immigration', href: '/services/pr-immigration' },
            ]
        },
        {
            name: 'Test Prep',
            href: '/test-prep/ielts',
            dropdown: [
                { name: 'IELTS', href: '/test-prep/ielts' },
                { name: 'TOEFL', href: '/test-prep/toefl' },
                { name: 'PTE', href: '/test-prep/pte' },
                { name: 'GRE', href: '/test-prep/gre' },
                { name: 'GMAT', href: '/test-prep/gmat' },
                { name: 'SAT', href: '/test-prep/sat' },
            ]
        },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            {/* Top Bar */}
            <div className="bg-blue-900 text-white py-2">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center text-sm">
                        <div className="flex gap-6">
                            <a href="tel:+917940030637" className="flex items-center gap-2 hover:text-cyan-300">
                                <Phone className="w-4 h-4" />
                                +91-79-40030637
                            </a>
                            <a href="mailto:visnagar.moc@gmail.com" className="hidden md:flex items-center gap-2 hover:text-cyan-300">
                                <Mail className="w-4 h-4" />
                                visnagar.moc@gmail.com
                            </a>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/book-consultation" className="hover:text-cyan-300">
                                Book Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                            <GraduationCap className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <div className="text-xl font-bold text-gray-900">Maruti Overseas</div>
                            <div className="text-xs text-gray-600">Consultancy Since 2004</div>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-6">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                {item.dropdown ? (
                                    <>
                                        <Link
                                            href={item.href}
                                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1"
                                        >
                                            {item.name}
                                            <ChevronDown className="w-4 h-4" />
                                        </Link>
                                        {/* Dropdown Menu */}
                                        <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                            <div className="py-2">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/book-consultation"
                            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
                        >
                            Get Started
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-900" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-900" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <nav className="lg:hidden pb-4 space-y-2">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                                            className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-blue-600 font-medium"
                                        >
                                            {item.name}
                                            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openDropdown === item.name && (
                                            <div className="pl-4 space-y-2">
                                                {item.dropdown.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className="block py-2 text-gray-600 hover:text-blue-600"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/book-consultation"
                            className="block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full text-center mt-4"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </nav>
                )}
            </div>
        </header>
    );
}
