import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
        </a>
    );
};

export default WhatsAppButton;
