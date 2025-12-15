'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdDashboard, MdFilePresent, MdAnalytics, MdSettings, MdPerson, MdLogout } from 'react-icons/md';

export default function Sidebar() {
  const pathname = usePathname();

  const nav = [
    { href: '/dashboard', label: 'Dashboard', icon: <MdDashboard className="w-5 h-5" /> },
    { href: '/ai-resume', label: 'AI Resume', icon: <MdFilePresent className="w-5 h-5" /> },
    { href: '/cover', label: 'Cover Letter', icon: <MdFilePresent className="w-5 h-5" /> },
    { href: '#', label: 'Analytics', icon: <MdAnalytics className="w-5 h-5" /> },
    { href: '#', label: 'Settings', icon: <MdSettings className="w-5 h-5" /> },
  ];

  const isActive = (href: string) => pathname === href || pathname?.includes(href.split('/')[1]);

  return (
    <aside className="h-screen w-72 fixed left-0 top-0 bg-linear-to-b from-dark-bg via-dark-bg/95 to-purple-950/20 backdrop-blur-md border-r border-purple-500/20 flex flex-col shadow-lg shadow-purple-500/10 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 p-6 bg-linear-to-r from-dark-bg to-dark-bg/80 border-b border-purple-500/20">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-10 h-10 rounded-lg bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
            D
          </div>
          <div>
            <h3 className="text-sm font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-400">
              DigiMarket
            </h3>
            <p className="text-xs text-gray-500">Hub</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {nav.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                active
                  ? 'bg-linear-to-r from-purple-500/20 to-pink-500/10 text-white border border-purple-500/30 shadow-lg shadow-purple-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-purple-500/10 border border-transparent'
              }`}
            >
              <span className={`transition-colors ${active ? 'text-purple-400' : 'text-gray-500 group-hover:text-purple-400'}`}>
                {item.icon}
              </span>
              <span>{item.label}</span>
              {active && <div className="ml-auto w-2 h-2 rounded-full bg-linear-to-r from-purple-400 to-pink-400"></div>}
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="px-4 py-2">
        <div className="h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      {/* Footer Section */}
      <div className="p-4 border-t border-purple-500/20 bg-linear-to-t from-dark-bg to-transparent">
        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-purple-500/10 transition-all duration-200 group border border-transparent"
        >
          <MdPerson className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
          <span>Profile</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-red-500/10 transition-all duration-200 group border border-transparent mt-2"
        >
          <MdLogout className="w-5 h-5 text-gray-500 group-hover:text-red-400 transition-colors" />
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
