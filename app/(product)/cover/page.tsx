


import Sidebar from '../../(auth)/component/Sidebar';

export default function cover() {
    return (
        <div className="min-h-screen bg-linear-to-br from-dark-bg via-dark-bg to-purple-950/10 p-6">
            <div className="max-w-7xl mx-auto flex gap-6">
                <Sidebar />

                <main className="flex-1 main-content">
                    <h1 className="text-2xl font-bold text-white mb-4">Cover Product</h1>
                    <div className="bg-linear-to-r from-dark-bg/60 to-dark-bg/40 rounded-lg p-6 border border-purple-500/10">
                        <p className="text-gray-300">Cover product content placeholder</p>
                    </div>
                </main>
            </div>
        </div>
    );
}