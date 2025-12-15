'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { MdDashboard, MdFilePresent, MdAnalytics, MdSettings, MdPerson, MdLogout, MdMenu, MdChevronLeft } from 'react-icons/md';

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // restore collapsed state from localStorage
    const stored = typeof window !== 'undefined' ? localStorage.getItem('sidebar-collapsed') : null;
    if (stored === '1') {
      setCollapsed(true);
      document.documentElement.classList.add('sidebar-collapsed');
    }
  }, []);

  useEffect(() => {
    if (collapsed) {
      document.documentElement.classList.add('sidebar-collapsed');
      localStorage.setItem('sidebar-collapsed', '1');
    } else {
      document.documentElement.classList.remove('sidebar-collapsed');
      localStorage.removeItem('sidebar-collapsed');
    }
  }, [collapsed]);

  useEffect(() => {
    // prevent body scroll when mobile drawer is open
    if (typeof window === 'undefined') return;
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const nav = [
    { href: '/dashboard', label: 'Dashboard', icon: <MdDashboard className="w-5 h-5" /> },
    { href: '/ai-resume', label: 'AI Resume', icon: <MdFilePresent className="w-5 h-5" /> },
    { href: '/cover', label: 'Cover Letter', icon: <MdFilePresent className="w-5 h-5" /> },
    { href: '#', label: 'Analytics', icon: <MdAnalytics className="w-5 h-5" /> },
    { href: '#', label: 'Settings', icon: <MdSettings className="w-5 h-5" /> },
  ];

  const isActive = (href: string) => pathname === href || pathname?.includes(href.split('/')[1]);

  return (
    <>
      {/* backdrop for mobile drawer */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          aria-hidden="true"
        />
      )}

      <aside
        className={`h-screen fixed left-0 top-0 z-50 ${collapsed ? 'w-20' : 'w-72'} bg-linear-to-b from-dark-bg via-dark-bg/95 to-purple-950/20 backdrop-blur-md border-r border-purple-500/20 flex flex-col shadow-lg shadow-purple-500/10 overflow-y-auto transition-all duration-200 transform
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}
        style={{ willChange: 'transform' }}
      >
      {/* Header */}
        <div className="sticky top-0 p-4 bg-linear-to-r from-dark-bg to-dark-bg/80 border-b border-purple-500/20 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className={`flex items-center justify-center rounded-lg ${collapsed ? 'w-10 h-10' : 'w-10 h-10'} bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold text-lg`}>D</div>
          {!collapsed && (
            <div>
              <h3 className="text-sm font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-400">DigiMarket</h3>
              <p className="text-xs text-gray-500">Hub</p>
            </div>
          )}
        </div>
          <div className="flex items-center gap-2">
            {/* mobile menu button */}
            <button
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="p-1 rounded hover:bg-purple-500/10 md:hidden"
            >
              <MdMenu className="w-5 h-5 text-gray-300" />
            </button>

            {/* desktop collapse toggle */}
            <button
              aria-label="Toggle sidebar"
              onClick={() => setCollapsed((s) => !s)}
              className="p-1 rounded hover:bg-purple-500/10 hidden md:inline-flex"
            >
              {collapsed ? <MdMenu className="w-5 h-5 text-gray-300" /> : <MdChevronLeft className="w-5 h-5 text-gray-300" />}
            </button>
          </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-2 pb-24 md:pb-6">
        {nav.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href + item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                active
                  ? 'bg-linear-to-r from-purple-500/20 to-pink-500/10 text-white border border-purple-500/30 shadow-lg shadow-purple-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-purple-500/10 border border-transparent'
              }`}
            >
              <span className={`transition-colors ${active ? 'text-purple-400' : 'text-gray-500 group-hover:text-purple-400'}`}>{item.icon}</span>
              <span className={`${collapsed ? 'hidden' : 'block'}`}>{item.label}</span>
              {active && !collapsed && <div className="ml-auto w-2 h-2 rounded-full bg-linear-to-r from-purple-400 to-pink-400"></div>}
            </Link>
          );
        })}
      </nav>

      {/* Divider */}
      <div className="px-3 py-2">
        <div className="h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent"></div>
      </div>

      {/* Footer Section */}
      <div className="p-3 border-t border-purple-500/20 bg-linear-to-t from-dark-bg to-transparent sticky bottom-0 z-50">
        <Link href="#" onClick={() => setMobileOpen(false)} className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${collapsed ? 'justify-center' : 'justify-start'} text-gray-400 hover:text-white hover:bg-purple-500/10 transition-all duration-200 group border border-transparent`}>
          <MdPerson className="w-5 h-5 text-gray-500 group-hover:text-purple-400 transition-colors" />
          <span className={`${collapsed ? 'hidden' : 'block'}`}>Profile</span>
        </Link>

        <button
          onClick={async () => {
            try {
              await fetch('/api/auth/logout', { method: 'POST' });
              // close mobile drawer and redirect to login
              setMobileOpen(false);
              window.location.href = '/(auth)/login';
            } catch (err) {
              setMobileOpen(false);
              window.location.href = '/(auth)/login';
            }
          }}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${collapsed ? 'justify-center' : 'justify-start'} text-gray-400 hover:text-white hover:bg-red-500/10 transition-all duration-200 group border border-transparent mt-2 w-full text-left`}
        >
          <MdLogout className="w-5 h-5 text-gray-500 group-hover:text-red-400 transition-colors" />
          <span className={`${collapsed ? 'hidden' : 'block'}`}>Logout</span>
        </button>
      </div>
      </aside>
    </>
  );
}
