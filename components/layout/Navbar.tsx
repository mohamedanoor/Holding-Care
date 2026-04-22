"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--border-light)] shadow-sm">
      {/* Top bar — phone number */}
      <div className="bg-[var(--green)] text-white text-sm py-2 px-6 text-center md:text-right">
        <span className="mr-2 opacity-80">Questions? Call us:</span>
        <a
          href="tel:+12077731400"
          className="font-semibold tracking-wide hover:underline"
        >
          (207) 773-1400
        </a>
        <span className="mx-3 opacity-40">|</span>
        <span className="opacity-80">Mon – Fri, 8am – 6pm</span>
      </div>

      {/* Main nav */}
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          {/*
            Drop your logo PNG at public/logo.png and uncomment this:
            <Image src="/logo.png" alt="Holding Care" width={140} height={48} className="h-10 w-auto" />
          */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-[var(--green)] flex items-center justify-center">
              <span className="text-white font-bold text-sm font-mono">HC</span>
            </div>
            <span className="font-semibold text-[var(--text)] text-lg leading-tight">
              Holding<span className="text-[var(--green)]">Care</span>
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(
                  "text-base font-medium transition-colors",
                  pathname === href
                    ? "text-[var(--green)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex bg-[var(--green)] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[var(--green-dark)] transition-colors"
        >
          Get Started
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-[var(--text)]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={clsx("block w-5 h-0.5 bg-current transition-all duration-300", mobileOpen && "rotate-45 translate-y-[6px]")} />
          <span className={clsx("block w-5 h-0.5 bg-current transition-all duration-300", mobileOpen && "opacity-0")} />
          <span className={clsx("block w-5 h-0.5 bg-current transition-all duration-300", mobileOpen && "-rotate-45 -translate-y-[6px]")} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={clsx(
        "md:hidden overflow-hidden transition-all duration-300 border-t border-[var(--border-light)] bg-white",
        mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <ul className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  "block py-3 text-base font-medium border-b border-[var(--border-light)] transition-colors",
                  pathname === href
                    ? "text-[var(--green)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-6 pb-5">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-[var(--green)] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[var(--green-dark)] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
