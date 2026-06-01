'use client';

import Link from 'next/link';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'SHOP', href: '/shop' },
    { name: 'CATEGORIES', href: '/categories' },
    { name: 'NEW ARRIVALS', href: '/new-arrivals' },
    { name: 'BEST SELLERS', href: '/best-sellers' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="w-full bg-[#1A1A1A] text-white border-b border-[#2A2A2A] sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center text-primary">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[#C8963C]">
                <path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M12 10L7 20H17L12 10Z" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-wider">AHSANALI<span className="text-xs text-gray-400 font-normal">.com</span></span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold tracking-widest transition-colors hover:text-primary ${
                    isActive ? 'text-primary border-b-2 border-primary pb-1' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-5">
            <button className="text-gray-300 hover:text-white transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <Link href="/account" className="text-gray-300 hover:text-white transition-colors">
              <User size={20} strokeWidth={1.5} />
            </Link>
            <Link href="/wishlist" className="text-gray-300 hover:text-white transition-colors">
              <Heart size={20} strokeWidth={1.5} />
            </Link>
            <button className="text-primary hover:text-white transition-colors relative flex items-center gap-1">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <span className="text-xs font-medium">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
