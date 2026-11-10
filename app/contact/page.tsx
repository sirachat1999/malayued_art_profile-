"use client"; // ต้องใช้ client component เพราะมี useState (toggle เมนูมือถือ)

import { useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "My Artwork", href: "/my_artwork" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  // state เก็บว่าเมนูมือถือ (hamburger) เปิดอยู่หรือไม่
  const [isOpen, setIsOpen] = useState(false);

  return (
    // nav หลัก: sticky ติดบนสุด, ใช้ backdrop-blur ทำเอฟเฟกต์กระจกฝ้า (จุดเด่นของ Frutiger Aero)
    <nav className="sticky top-0 z-50 w-full border-b border-white/30 bg-gradient-to-b from-sky-200/60 to-cyan-100/40 backdrop-blur-md shadow-[0_4px_20px_rgba(0,150,200,0.25)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        
        {/* โลโก้ / ชื่อเว็บ - ใส่เงาวาวแบบลูกแก้ว */}
        <a
          href="/"
          className="text-xl font-bold tracking-wide text-sky-900 drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]"
        >
          Malayued<span className="text-emerald-600">.art</span>
        </a>

        {/* เมนูสำหรับจอใหญ่ (ซ่อนบนมือถือด้วย hidden, โชว์ตอน md ขึ้นไปด้วย md:flex) */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="
                  relative inline-block rounded-full px-5 py-2 text-sm font-medium text-sky-900
                  bg-gradient-to-b from-white/70 to-cyan-200/50
                  border border-white/60
                  shadow-[inset_0_1px_1px_rgba(255,255,255,0.9),0_2px_6px_rgba(0,100,150,0.2)]
                  hover:from-white/90 hover:to-emerald-200/60
                  hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_4px_10px_rgba(0,150,100,0.35)]
                  transition-all duration-300
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ปุ่ม hamburger สำหรับมือถือ (โชว์เฉพาะจอเล็กด้วย md:hidden) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col justify-center gap-1.5 rounded-full p-2
                     bg-gradient-to-b from-white/70 to-cyan-200/50 border border-white/60
                     shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]"
        >
          {/* เส้น 3 เส้นของ hamburger ที่จะหมุนเป็นกากบาทตอนเปิด */}
          <span
            className={`h-0.5 w-6 bg-sky-900 transition-transform duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-sky-900 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-sky-900 transition-transform duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* เมนูมือถือแบบดรอปดาวน์ - แสดงเมื่อ isOpen เป็น true เท่านั้น */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-2 px-6 pb-4 bg-cyan-100/40 backdrop-blur-md">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)} // กดลิงก์แล้วปิดเมนูอัตโนมัติ
                className="block rounded-full px-5 py-2 text-sm font-medium text-sky-900
                           bg-gradient-to-b from-white/70 to-cyan-200/50
                           border border-white/60
                           shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}