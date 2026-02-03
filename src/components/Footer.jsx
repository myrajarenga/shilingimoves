import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

// Custom icons to match the requested look (WhatsApp, TikTok) if simpler ones aren't available, 
// using generic Lucide ones or placeholders for now where specific brand icons might be needed.
// Lucide has Facebook, Twitter, Instagram, Linkedin. For WhatsApp and TikTok we might need to improvise or use text/other icons if not available in this version.
// Using standard Lucide icons for social media for consistency.

const Footer = () => {
    const servicesLinks = [
        { name: 'Dashboard', path: '/dashboard' },
        { name: 'Learn', path: '/learn' },
        { name: 'Compare', path: '/compare' },
        { name: 'Advisors', path: '/community' }, // Mapping Advisors to Community for now
        { name: 'Tools', path: '/tools' },
        { name: 'Partners', path: '/trust' }, // Mapping Partners to Trust for now
        { name: 'Community', path: '/community' },
    ];

    const discoverLinks = [
        { name: 'FAQs', path: '/learn' },
        { name: 'Online Shop', path: '/tools' }, // Placeholder
        { name: 'Newsletter', path: '/signup' },
        { name: 'Donate', path: '/community' }, // Placeholder
        { name: 'News and Media', path: '/learn' },
        { name: 'Our Experts', path: '/community' },
    ];

    const companyLinks = [
        { name: 'About us', path: '/learn' },
        { name: 'Write for us', path: '/community' },
        { name: 'Partner with us', path: '/trust' },
        { name: 'Advertise with us', path: '/trust' },
        { name: 'Careers', path: '/learn' },
    ];

    return (
        <footer className="bg-gray-50 text-gray-800 pt-16 border-t border-gray-100">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 items-start">
                    {/* Brand */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center justify-center w-10 h-10 bg-primary-500 rounded-lg text-white font-bold text-sm">
                                LOGO
                            </div>
                            <span className="text-xl font-bold text-primary-900 leading-tight">
                                Shilingi<br />Moves
                            </span>
                        </div>
                        <p className="text-gray-600">
                            Learn. Plan. Grow
                        </p>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-4">Company</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-600 hover:text-primary-600 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-4">Services</h3>
                        <ul className="space-y-3">
                            {servicesLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-600 hover:text-primary-600 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Discover More */}
                    <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-4">Discover More</h3>
                        <ul className="space-y-3">
                            {discoverLinks.map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-gray-600 hover:text-primary-600 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div>
                        <h3 className="text-gray-900 font-bold text-lg mb-4">Contact Us</h3>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                <span className="font-bold text-gray-900">Call us at:</span><br />
                                +254 700 000 000
                            </p>
                            <p>
                                <span className="font-bold text-gray-900">Email us at:</span><br />
                                hello@shilingimoves.com
                            </p>
                            <p>
                                <span className="font-bold text-gray-900">Visit us at:</span><br />
                                Office 47, Park Court Ojijo Road, Parklands Nairobi, Kenya
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center space-x-4 mt-6">
                            <a href="#" className="text-gray-900 hover:text-primary-600 transition-colors"><Facebook size={20} /></a>
                            {/* WhatsApp placeholder icon - using MessageCircle as proxy or just generic */}
                            <a href="#" className="text-gray-900 hover:text-primary-600 transition-colors"><Phone size={20} /></a>
                            <a href="#" className="text-gray-900 hover:text-primary-600 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-900 hover:text-primary-600 transition-colors"><Instagram size={20} /></a>
                            {/* TikTok placeholder icon - no generic Lucide match, skipping or using a generic one */}
                        </div>
                    </div>
                </div>

            </div>

            {/* Copyright Bar */}
            <div className="bg-green-600 text-white py-6">
                <div className="container-custom flex flex-col md:flex-row justify-between items-center text-sm">
                    <p>&copy; 2026 Shilingi Moves. All Rights Reserved.</p>
                    <p className="mt-2 md:mt-0 font-medium">
                        Developed by Myra Jarenga
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
