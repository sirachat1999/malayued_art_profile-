import ContactForm from '../../components/contact-form'

// เปลี่ยนข้อมูลตรงนี้เป็นของจริงของคุณ
const EMAIL = 'sirachat.su@yahoo.com'

const contacts = [
  { icon: '', title: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: '', title: 'IG', value: 'malayued_art', href: 'https://www.instagram.com/malayued_art/' },
  { icon: '', title: 'Location', value: 'Thailand', href: null },
]

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-10 sm:px-8">
      {/* การ์ดหัวข้อ */}
      <section className="glass p-8 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-2">
          If you have any questions or inquiries, please feel free to reach out to us.
        </p>
      </section>

      {/* จอใหญ่: ซ้าย 2 ส่วน ขวา 3 ส่วน / โทรศัพท์: เรียงซ้อนกัน */}
      <div className="grid gap-6 md:grid-cols-5">
        {/* ช่องทางติดต่อ */}
        <section className="flex flex-col gap-4 md:col-span-2">
          {contacts.map((c) => {
            const inner = (
              <>
                <span className="logo-orb shrink-0">{c.icon}</span>
                <div className="min-w-0">
                  <p className="text-sm opacity-70">{c.title}</p>
                  <p className="break-words font-semibold">{c.value}</p>
                </div>
              </>
            )
            const cls = 'glass flex items-center gap-4 p-4'

            // มีลิงก์ -> เป็น <a> ที่กดได้ / ไม่มีลิงก์ -> เป็นกล่องธรรมดา
            return c.href ? (
              <a
                key={c.title}
                href={c.href}
                className={`${cls} contact-card`}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {inner}
              </a>
            ) : (
              <div key={c.title} className={cls}>
                {inner}
              </div>
            )
          })}
        </section>

        {/* ฟอร์มส่งข้อความ */}
        <section className="glass p-6 md:col-span-3">
          <h2 className="mb-4 text-xl font-bold">Send a message</h2>
          <ContactForm email={EMAIL} />
        </section>
      </div>
    </main>
  )
}