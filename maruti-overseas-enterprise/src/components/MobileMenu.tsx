'use client';

import { useState } from 'react';
import { X, Menu, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const menuItems = [
        { label: 'Home', href: '/' },
        {
            label: 'Countries',
            dropdown: [
                { label: '🇺🇸 USA', href: '/countries/usa' },
                { label: '🇬🇧 UK', href: '/countries/uk' },
                { label: '🇨🇦 Canada', href: '/countries/canada' },
                { label: '🇦🇺 Australia', href: '/countries/australia' },
                { label: '🇩🇪 Germany', href: '/countries/germany' },
                { label: '🇮🇪 Ireland', href: '/countries/ireland' },
                { label: '🇳🇿 New Zealand', href: '/countries/new-zealand' },
            ],
        },
        {
            label: 'Courses',
            dropdown: [
                { label: 'Computer Science', href: '/courses/computer-science' },
                { label: 'Engineering', href: '/courses/engineering' },
                { label: 'Business & MBA', href: '/courses/business' },
                { label: 'Medicine', href: '/courses/medicine' },
            ],
        },
        {
            label: 'Tools',
            dropdown: [
                { label: 'Course Finder', href: '/tools/course-finder' },
                { label: 'Eligibility Checker', href: '/tools/eligibility-checker' },
                { label: 'Cost Calculator', href: '/tools/cost-calculator' },
                { label: 'Scholarship Finder', href: '/tools/scholarship-finder' },
            ],
        },
        { label: 'Visa Services', href: '/visa-services' },
        { label: 'Test Prep', href: '/test-prep' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Open menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-50 lg:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-80 bg-white z-50 shadow-2xl overflow-y-auto lg:hidden"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b">
                                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <nav className="p-4">
                                {menuItems.map((item) => (
                                    <div key={item.label} className="mb-2">
                                        {item.dropdown ? (
                                            <>
                                                <button
                                                    onClick={() =>
                                                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                                                    }
                                                    className="w-full flex items-center justify-between p-3 hover:bg-gray-100 rounded-lg transition-colors text-left"
                                                >
                                                    <span className="font-semibold text-gray-900">{item.label}</span>
                                                    <ChevronDown
                                                        className={`w-5 h-5 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                </button>
                                                <AnimatePresence>
                                                    {openDropdown === item.label && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pl-4 py-2 space-y-1">
                                                                {item.dropdown.map((subItem) => (
                                                                    <Link
                                                                        key={subItem.href}
                                                                        href={subItem.href}
                                                                        onClick={() => setIsOpen(false)}
                                                                        className="block p-2 hover:bg-blue-50 rounded-lg text-gray-700 hover:text-blue-600 transition-colors"
                                                                    >
                                                                        {subItem.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href!}
                                                onClick={() => setIsOpen(false)}
                                                className="block p-3 hover:bg-gray-100 rounded-lg font-semibold text-gray-900 transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* CTA Button */}
                            <div className="p-4 border-t">
                                <Link
                                    href="/book-consultation"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-4 rounded-full font-bold text-center transition-all shadow-lg"
                                >
                                    Book Free Consultation
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
