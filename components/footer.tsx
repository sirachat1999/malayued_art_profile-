import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/my_artwork', label: 'Artwork' },
  { href: '/contact', label: 'Contact' },
]
async function CurrentYear() {
  'use cache'
  return <>{new Date().getFullYear()}</>
}

function Footer() {
  return (
    <footer className="aero-footer mt-auto w-full">
      <div className="flex flex-col items-center gap-4 px-4 py-6 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        {/* ซ้าย: โลโก้ + คำอธิบาย */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          <Link href="/" className="flex items-center gap-2">
            <span className="logo-orb">M</span>
            <span className="text-lg font-bold">Malayued Art</span>
          </Link>
          <p className="text-sm opacity-80">Art &amp; profile website</p>
        </div>

        {/* ขวา: ลิงก์ */}
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="footer-link">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/sirachat1999"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>

      {/* แถบลิขสิทธิ์ */}
   <div className="footer-bottom px-4 py-3 text-center text-xs sm:px-8">
  © <CurrentYear /> Malayued. All rights reserved.
</div>
    </footer>
  )
}

export default Footer