import React from 'react';

const DashboardPreview = () => {
    return (
        <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
                {/* Header */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Your Dashboard</h3>
                    <p className="text-sm text-gray-500">February 2026</p>
                </div>

                {/* Spending Chart */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 mb-4 border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-medium text-gray-700">Spending Breakdown</h4>
                        <span className="text-xs text-gray-500">This month</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative w-40 h-40">
                            {/* Donut Chart Visualization */}
                            <svg viewBox="0 0 100 100" className="transform -rotate-90">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#e5e7eb"
                                    strokeWidth="12"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#10b981"
                                    strokeWidth="12"
                                    strokeDasharray="200"
                                    strokeDashoffset="50"
                                    strokeLinecap="round"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    fill="none"
                                    stroke="#34d399"
                                    strokeWidth="12"
                                    strokeDasharray="200"
                                    strokeDashoffset="140"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                <span className="text-2xl font-bold text-gray-900">KES</span>
                                <span className="text-lg font-semibold text-primary-600">45,000</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Savings Progress */}
                <div className="bg-primary-50 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Emergency Fund Goal</span>
                        <span className="text-sm font-semibold text-primary-600">65%</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-3 overflow-hidden">
                        <div className="bg-gradient-to-r from-primary-500 to-primary-400 h-full rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">KES 65,000 of KES 100,000</p>
                </div>

                {/* Recent Transactions */}
                <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Activity</h4>
                    <div className="space-y-2">
                        {[
                            { name: 'Groceries', amount: '-2,500', icon: '🛒' },
                            { name: 'Salary', amount: '+50,000', icon: '💰', positive: true },
                            { name: 'Rent', amount: '-15,000', icon: '🏠' },
                        ].map((transaction, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <div className="flex items-center space-x-3">
                                    <span className="text-2xl">{transaction.icon}</span>
                                    <span className="text-sm font-medium text-gray-700">{transaction.name}</span>
                                </div>
                                <span className={`text-sm font-semibold ${transaction.positive ? 'text-green-600' : 'text-gray-900'}`}>
                                    {transaction.amount}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-40"></div>
        </div>
    );
};

export default DashboardPreview;
