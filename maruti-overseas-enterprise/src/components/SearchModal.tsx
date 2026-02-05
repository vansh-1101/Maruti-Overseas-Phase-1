'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface SearchResult {
    title: string;
    category: string;
    href: string;
    description?: string;
}

export default function SearchModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    // Sample search data - in production, this would come from an API
    const searchData: SearchResult[] = [
        { title: 'USA', category: 'Country', href: '/countries/usa', description: 'Study in United States' },
        { title: 'UK', category: 'Country', href: '/countries/uk', description: 'Study in United Kingdom' },
        { title: 'Canada', category: 'Country', href: '/countries/canada', description: 'Study in Canada' },
        { title: 'Australia', category: 'Country', href: '/countries/australia', description: 'Study in Australia' },
        { title: 'Course Finder', category: 'Tool', href: '/tools/course-finder', description: 'Search 200K+ courses' },
        { title: 'Eligibility Checker', category: 'Tool', href: '/tools/eligibility-checker', description: 'Check your eligibility' },
        { title: 'Cost Calculator', category: 'Tool', href: '/tools/cost-calculator', description: 'Calculate study costs' },
        { title: 'Scholarship Finder', category: 'Tool', href: '/tools/scholarship-finder', description: 'Find scholarships' },
        { title: 'Computer Science', category: 'Course', href: '/courses/computer-science', description: 'CS programs worldwide' },
        { title: 'Engineering', category: 'Course', href: '/courses/engineering', description: 'Engineering programs' },
        { title: 'Business & MBA', category: 'Course', href: '/courses/business', description: 'Business programs' },
    ];

    useEffect(() => {
        if (query.trim()) {
            const filtered = searchData.filter(
                (item) =>
                    item.title.toLowerCase().includes(query.toLowerCase()) ||
                    item.description?.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filtered.slice(0, 8)); // Limit to 8 results
        } else {
            setResults([]);
        }
    }, [query]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // Keyboard shortcut: Ctrl+K or Cmd+K
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            {/* Search Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="hidden lg:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
                <Search className="w-4 h-4" />
                <span className="text-sm">Search...</span>
                <kbd className="hidden xl:inline-block px-2 py-1 text-xs bg-white/20 rounded">⌘K</kbd>
            </button>

            {/* Mobile Search Icon */}
            <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Search"
            >
                <Search className="w-5 h-5" />
            </button>

            {/* Search Modal */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-50"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
                        >
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                {/* Search Input */}
                                <div className="flex items-center gap-3 p-4 border-b">
                                    <Search className="w-5 h-5 text-gray-400" />
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={query}
                                        onChange={(e) => setQuery(e.target.value)}
                                        placeholder="Search countries, courses, tools..."
                                        className="flex-1 outline-none text-lg"
                                    />
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Results */}
                                <div className="max-h-96 overflow-y-auto">
                                    {results.length > 0 ? (
                                        <div className="p-2">
                                            {results.map((result, index) => (
                                                <Link
                                                    key={index}
                                                    href={result.href}
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setQuery('');
                                                    }}
                                                    className="block p-4 hover:bg-gray-50 rounded-lg transition-colors group"
                                                >
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                                                                {result.title}
                                                            </h3>
                                                            {result.description && (
                                                                <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                                                            )}
                                                        </div>
                                                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                                                            {result.category}
                                                        </span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    ) : query.trim() ? (
                                        <div className="p-8 text-center text-gray-500">
                                            No results found for "{query}"
                                        </div>
                                    ) : (
                                        <div className="p-8 text-center text-gray-500">
                                            Start typing to search...
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
