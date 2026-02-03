import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const PlaceholderPage = ({ title, description }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-primary-100 text-primary-600 rounded-full mb-6">
                        <span className="text-5xl">🚀</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
                    <p className="text-lg text-gray-600 mb-8">
                        {description || 'This feature is coming soon. We\'re working hard to bring you the best experience.'}
                    </p>
                </div>
                <Button variant="primary" to="/" className="inline-flex items-center space-x-2">
                    <ArrowLeft size={20} />
                    <span>Back to Home</span>
                </Button>
            </div>
        </div>
    );
};

// Export individual placeholder pages
export const Dashboard = () => <PlaceholderPage title="Dashboard" description="Your personalized financial dashboard is coming soon." />;
export const Learn = () => <PlaceholderPage title="Learn" description="Financial education resources tailored for you." />;
export const Compare = () => <PlaceholderPage title="Compare" description="Compare financial products side-by-side." />;
export const Tools = () => <PlaceholderPage title="Tools" description="Smart calculators and financial tools." />;
export const Community = () => <PlaceholderPage title="Community" description="Connect with others on their financial journey." />;
export const TrustPage = () => <PlaceholderPage title="Trust & Security" description="Learn about how we keep your data safe." />;
export const SignIn = () => <PlaceholderPage title="Sign In" description="Sign in to your Shilingi Moves account." />;
export const SignUp = () => <PlaceholderPage title="Sign Up" description="Create your free Shilingi Moves account." />;

export default PlaceholderPage;
