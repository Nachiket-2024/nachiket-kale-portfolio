import Link from "next/link";
import { navLinks } from "@/lib/nav";
import { NavLink } from "@/components/nav-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-sm text-2xl font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          Nachiket Kale
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 sm:flex"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              className="rounded-sm text-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              {link.label}
            </NavLink>
          ))}
          <ThemeToggle />
        </nav>
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
