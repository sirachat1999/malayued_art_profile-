'use client'

import { useState } from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/my_artwork', label: 'Artwork' },
  { href: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="aero-nav sticky top-0 z-50 w-full">
      <nav className="flex items-center justify-between px-4 py-2 sm:px-8">
        {/* ซ้าย: โลโก้ */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="logo-orb">M</span>
          <span className="text-lg font-bold">Malayued Art</span>
        </Link>

        {/* ขวา: เมนู (จอใหญ่) */}
        <ul className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="aero-btn">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ขวา: ปุ่มแฮมเบอร์เกอร์ (โทรศัพท์) */}
        <button
          type="button"
          className="aero-btn md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* เมนูพับลง (โทรศัพท์) */}
      {open && (
        <ul className="flex flex-col gap-2 px-4 pb-4 sm:px-8 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="aero-btn block text-center"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar