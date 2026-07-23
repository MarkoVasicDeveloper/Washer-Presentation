import Link from 'next/link';

import { NAV_LINKS } from '@/constants/navigation';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

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
        'fixed inset-0 z-40 flex flex-col justify-between px-6 pt-24 pb-12 bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden',
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
            className="text-2xl font-mono text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex flex-col space-y-3 w-full max-w-xs mx-auto">
        <Button
          variant="outline"
          size="lg"
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          className="w-full rounded-full"
          render={<Link href="/login" />}
        >
          Login
        </Button>

        <Button
          variant="default"
          size="lg"
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          className="w-full rounded-full font-semibold shadow-lg shadow-primary/25"
          render={<Link href="/signup" />}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
