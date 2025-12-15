'use client';

import './global.css';
import { useState } from 'react';
import Sidebar from '../component/Sidebar';

export default function DashboardPage() {
    const [stats] = useState([
        { label: 'Total Users', value: '1,234' },
        { label: 'Revenue', value: '$45,678' },
        { label: 'Active Projects', value: '28' },
        { label: 'Pending Tasks', value: '12' },
    ]);

    return (
        <div className="min-h-screen bg-linear-to-br from-dark-bg via-dark-bg to-purple-950/10 p-6">
            <div className="max-w-7xl mx-auto flex gap-6">
                <Sidebar />

                <main className="flex-1">
                    <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="bg-linear-to-br from-dark-bg/50 to-dark-bg/30 rounded-lg p-6 border border-purple-500/10">
                                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                                <p className="text-2xl font-bold text-white mt-2">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-linear-to-r from-dark-bg/60 to-dark-bg/40 rounded-lg p-6 border border-purple-500/10">
                            <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
                            <div className="h-64 bg-dark-bg/50 rounded flex items-center justify-center">
                                <p className="text-gray-400">Chart placeholder</p>
                            </div>
                        </div>

                        <div className="bg-linear-to-r from-dark-bg/60 to-dark-bg/40 rounded-lg p-6 border border-purple-500/10">
                            <h2 className="text-lg font-semibold text-white mb-4">Performance</h2>
                            <div className="h-64 bg-dark-bg/50 rounded flex items-center justify-center">
                                <p className="text-gray-400">Chart placeholder</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}