'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';



export default function Nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="">
            {/* Navigation Bar  min-h-screen bg-linear-to-br from-slate-900 via-slate-900 to-purple-950/10 text-white*/}
            <nav className="sticky top-0 z-50 border-b border-purple-500/20 bg-slate-900/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold bg-clip-text text-gray-100 bg-linear-to-r from-purple-400 to-pink-400">
                        DigiMarket Hub
                    </h1>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>

                    <div
                        className={`${
                            mobileMenuOpen ? 'flex' : 'hidden'
                        } md:flex flex-col md:flex-row gap-6 items-center relative md:static top-full left-0 right-0 md:bg-transparent bg-slate-900/90 backdrop-blur-md p-4 md:p-0 border-b md:border-b-0 border-purple-500/20`}
                    >
                        <Link href="#" className=" hover:text-purple-400 transition-colors">
                            Browse
                        </Link>
                        <Link href="#" className="text-gray-300 hover:text-purple-400 transition-colors">
                            Sell
                        </Link>
                        
                        <Link href="/login" className="px-4 py-2 border border-purple-500/50 text-purple-300 rounded-lg hover:bg-purple-500/10 transition-all">
                            Sign In
                        </Link>
                        <Link href="/register" className="px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                            Join Now
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};