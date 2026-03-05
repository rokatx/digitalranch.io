'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { ContactModal } from '@/components/landing/ContactModal'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-foreground">
            Digital Ranch Technologies
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-secondary-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setContactOpen(true)}
            className="text-sm text-secondary-foreground transition-colors hover:text-primary"
          >
            Contact
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm text-secondary-foreground transition-colors hover:text-primary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="block py-3 text-sm text-secondary-foreground transition-colors hover:text-primary"
            onClick={() => { setMobileOpen(false); setContactOpen(true) }}
          >
            Contact
          </button>
        </div>
      )}

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </header>
  )
}
