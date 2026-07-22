import Link from 'next/link';

import { NAV_LINKS } from '@/constants/navigation';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={cn(
        'fixed inset-0 z-40 flex flex-col justify-between px-6 pt-24 pb-12 bg-black/95 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden',
        isOpen
          ? 'translate-y-0 opacity-100 visible pointer-events-auto'
          : '-translate-y-full opacity-0 invisible pointer-events-none',
      )}
    >
      <nav className="flex flex-col items-center space-y-7 text-center my-auto">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            tabIndex={isOpen ? 0 : -1}
            className="text-2xl font-mono text-zinc-300 transition-colors hover:text-white"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-col space-y-3 w-full max-w-xs mx-auto">
        <Link
          href="/login"
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          className="w-full py-3 text-center text-sm font-semibold text-zinc-300 hover:text-white rounded-full bg-zinc-900 border border-zinc-800 transition-colors"
        >
          Login
        </Link>
        <Link
          href="/signup"
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          className="w-full py-3 text-center text-sm font-semibold text-white rounded-full bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
