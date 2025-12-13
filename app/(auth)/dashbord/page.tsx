'use client';
import { useState } from 'react';



export default function DashboardPage() {
    const [stats] = useState([
        { label: 'Total Users', value: '1,234' },
        { label: 'Revenue', value: '$45,678' },
        { label: 'Active Projects', value: '28' },
        { label: 'Pending Tasks', value: '12' },
    ]);

    return (
        <div className="min-h-screen bg-gray-50 p-20">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="bg-white rounded-lg shadow p-6">
                            <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
                        <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                            <p className="text-gray-500">Chart placeholder</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance</h2>
                        <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
                            <p className="text-gray-500">Chart placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}