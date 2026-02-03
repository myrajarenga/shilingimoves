import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';
// import DashboardPreview from './DashboardPreview'; // Removed for now
import HeroDashboardImg from '../assets/hero_dashboard_mockup.png';

const Hero = () => {
    const features = [
        'See where your money goes.',
        'Set goals and track progress.',
        'Learn and compare options before you decide.',
    ];

    return (
        <section className="bg-gradient-to-br from-white via-green-50/30 to-white pt-6 pb-10 md:pt-8 md:pb-14 lg:pt-12 lg:pb-16 overflow-hidden">
            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Copy */}
                    <div className="space-y-5 md:space-y-6 relative z-10">
                        <div className="space-y-3">
                            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Take Control of Your Money. <br className="hidden lg:block" />
                                <span className="text-primary-600">Build the Life You Want.</span>
                            </h1>
                            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                                We've brought together the tools, education, and community you need to understand, plan, and grow your money. No more guesswork—just a clear path to financial security. Your command center is ready.
                            </p>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <div className="flex items-center justify-center w-6 h-6 bg-primary-500 rounded-full">
                                            <Check size={14} className="text-white" strokeWidth={3} />
                                        </div>
                                    </div>
                                    <span className="text-base text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Button variant="primary" size="lg" to="/signup">
                                Create free account
                            </Button>
                            <Button variant="secondary" size="lg" to="/dashboard">
                                See dashboard demo
                            </Button>
                        </div>
                    </div>

                    {/* Right Column - Dashboard Mockup */}
                    <div className="relative z-0 mt-8 lg:mt-0">
                        {/* Abstract background blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-400/10 rounded-full blur-3xl -z-10" />

                        <img
                            src={HeroDashboardImg}
                            alt="Shilingi Moves Dashboard App Interface showing savings and transactions"
                            className="w-full h-auto max-h-[300px] sm:max-h-[380px] md:max-h-[420px] lg:max-h-[480px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-in-out"
                            style={{ animation: 'float 6s ease-in-out infinite' }}
                        />
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }
            `}</style>
        </section>
    );
};

export default Hero;
