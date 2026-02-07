'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
    phoneNumber?: string;
    message?: string;
    position?: 'fixed' | 'inline';
}

export default function WhatsAppButton({
    phoneNumber = '919898328221',
    message = 'Hi! I want to know more about studying abroad.',
    position = 'fixed'
}: WhatsAppButtonProps) {
    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    if (position === 'inline') {
        return (
            <button
                onClick={handleClick}
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
            >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
            </button>
        );
    }

    return (
        <motion.button
            onClick={handleClick}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[100] bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle className="w-7 h-7" />

            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />

            {/* Tooltip */}
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Chat with us on WhatsApp
            </span>
        </motion.button>
    );
}
