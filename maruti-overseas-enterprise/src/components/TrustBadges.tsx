'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Globe, CheckCircle } from 'lucide-react';

export default function TrustBadges() {
    const badges = [
        { icon: Shield, label: 'ISO Certified', color: 'from-blue-500 to-cyan-500' },
        { icon: Award, label: 'MEA Approved', color: 'from-purple-500 to-pink-500' },
        { icon: Globe, label: 'IATA Agent', color: 'from-green-500 to-emerald-500' },
        { icon: CheckCircle, label: '20+ Years', color: 'from-orange-500 to-red-500' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
        >
            {badges.map((badge, index) => (
                <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full"
                >
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center`}>
                        <badge.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-white">{badge.label}</span>
                </motion.div>
            ))}
        </motion.div>
    );
}
