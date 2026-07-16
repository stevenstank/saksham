"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Me", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/experience" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="flex h-20 items-center justify-center">
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-12 relative" role="navigation" aria-label="Desktop navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-base transition-all hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent rounded px-4 py-2 relative",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground-secondary"
                )}
                style={pathname === item.href ? { textShadow: '0 0 12px rgba(244, 185, 66, 0.3)' } : undefined}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-[#F4B942] rounded-full" style={{ boxShadow: '0 0 8px rgba(244, 185, 66, 0.5)' }} />
                )}
              </Link>
            ))}
            {/* Elegant flowing line beneath navigation */}
            <div className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F4B942]/20 to-transparent" style={{ boxShadow: '0 0 12px rgba(244, 185, 66, 0.15)' }} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute right-6 sm:right-8 text-foreground-secondary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent rounded p-2 transition-all"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-6 space-y-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block text-base transition-all hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent rounded px-2 py-1 relative",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-foreground-secondary"
                )}
                style={pathname === item.href ? { textShadow: '0 0 12px rgba(244, 185, 66, 0.3)' } : undefined}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.name}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-[#F4B942] rounded-full" style={{ boxShadow: '0 0 8px rgba(244, 185, 66, 0.5)' }} />
                )}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
