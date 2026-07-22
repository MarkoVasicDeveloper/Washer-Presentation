'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { NAV_LINKS } from '@/constants/navigation';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useScrollSentinel } from '@/hooks/useScrollSentinel';
import { cn } from '@/lib/utils';

import { MobileNav } from './MobileNav';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { sentinelRef, isScrolled } = useScrollSentinel();

  useLockBodyScroll(isOpen);

  return (
    <>
      <div
        ref={sentinelRef}
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        aria-hidden="true"
      />

      <div className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 transition-all duration-500">
        <header
          className={cn(
            'w-full transition-all duration-500 ease-in-out',
            !isScrolled &&
              'max-w-full bg-transparent border-b border-transparent py-5 px-6 md:px-10',
            isScrolled &&
              !isOpen &&
              'max-w-7xl mt-4 rounded-2xl bg-black/80 backdrop-blur-md border border-zinc-800/80 shadow-2xl py-3.5 px-6 md:px-8',
            isOpen &&
              'max-w-full mt-0 bg-transparent border-transparent shadow-none backdrop-blur-none py-5 px-6 md:px-10',
          )}
        >
          <div className="flex justify-between items-center mx-auto text-zinc-400">
            <Link
              href="/"
              tabIndex={isOpen ? -1 : 0}
              className={cn(
                'flex items-center space-x-2 font-mono transition-opacity duration-300',
                isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100',
              )}
            >
              <span
                className={cn(
                  'tracking-tight font-extrabold text-white transition-all duration-500',
                  isScrolled ? 'text-lg' : 'text-xl md:text-2xl',
                )}
              >
                washer<span className="text-fuchsia-500">App</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/login"
                className="text-sm font-medium text-zinc-300 hover:text-white px-3.5 py-1.5"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Sign Up
              </Link>
            </div>

            <div className="flex md:hidden z-50">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                type="button"
                aria-expanded={isOpen}
                aria-label={isOpen ? 'Zatvori meni' : 'Otvori meni'}
                className="inline-flex items-center justify-center rounded-md p-1.5 text-white hover:bg-zinc-900"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </header>
      </div>

      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
