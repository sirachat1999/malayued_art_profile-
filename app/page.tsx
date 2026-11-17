import Link from 'next/link'

// ===== ข้อมูลที่แก้ได้ (ข้อความเป็นตัวอย่าง ปรับเป็นของจริงของคุณ) =====

// ผลงานเด่น: ตอนนี้ใช้สีไล่เฉดแทนรูป ดูวิธีใส่รูปจริงด้านล่าง
const featured = [
  { title: 'Artwork 01', desc: 'คำอธิบายผลงานสั้น ๆ', emoji: '🌄', from: '#6fd0ff', to: '#1e9be8' },
  { title: 'Artwork 02', desc: 'คำอธิบายผลงานสั้น ๆ', emoji: '🌸', from: '#a8f0b8', to: '#3fa83a' },
  { title: 'Artwork 03', desc: 'คำอธิบายผลงานสั้น ๆ', emoji: '🌊', from: '#9be7ff', to: '#0b78c8' },
]

// งานที่รับทำ
const services = [
  { icon: '🖌️', title: 'Digital Illustration', desc: 'ภาพประกอบดิจิทัลตามโจทย์หรือสไตล์ที่ต้องการ' },
  { icon: '🧑‍🎨', title: 'Character Design', desc: 'ออกแบบตัวละครและมาสคอตให้มีเอกลักษณ์' },
  { icon: '🌅', title: 'Concept Art', desc: 'ภาพคอนเซปต์สำหรับเกม งานเขียน และโปรเจกต์ต่าง ๆ' },
]

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 py-10 sm:px-8">
      {/* ===== 1) HERO ===== */}
      <section className="glass relative overflow-hidden p-8 text-center sm:p-16">
        {/* ฟองสบู่ลอยเป็นของตกแต่ง (ไม่ขวางการคลิก) */}
        <span className="bubble" style={{ left: '6%', bottom: '-30px', width: 70, height: 70 }} />
        <span className="bubble" style={{ left: '82%', bottom: '-40px', width: 90, height: 90, animationDelay: '2s' }} />
        <span className="bubble" style={{ left: '50%', bottom: '-20px', width: 44, height: 44, animationDelay: '4s' }} />

        <div className="relative z-10">
          <span className="logo-orb logo-orb-lg mx-auto mb-5">M</span>
          <h1 className="hero-title text-4xl font-extrabold sm:text-6xl">Malayued Art</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg">
            Digital art &amp; illustration portfolio — ภาพวาดและงานออกแบบที่เล่าเรื่องด้วยสีสัน
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/my_artwork" className="aero-btn">View Artwork</Link>
            <Link href="/contact" className="aero-btn-light">Contact Me</Link>
          </div>
        </div>
      </section>

      {/* ===== 2) FEATURED ARTWORK ===== */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold">Featured Artwork</h2>
          <Link href="/my_artwork" className="footer-link text-sm font-semibold">
            ดูทั้งหมด →
          </Link>
        </div>

        {/* โทรศัพท์ 1 คอลัมน์ / จอ >= 640px 3 คอลัมน์ */}
        <div className="grid gap-5 sm:grid-cols-3">
          {featured.map((a) => (
            <Link key={a.title} href="/my_artwork" className="glass art-card block overflow-hidden">
              <div
                className="art-thumb"
                style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})` }}
              >
                <span className="text-5xl">{a.emoji}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold">{a.title}</h3>
                <p className="mt-1 text-sm opacity-80">{a.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== 3) WHAT I DO ===== */}
      <section>
        <h2 className="mb-4 text-2xl font-bold">What I Do</h2>
        <div className="grid gap-5 sm:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="glass p-5 text-center">
              <span className="logo-orb mx-auto mb-3">{s.icon}</span>
              <h3 className="font-bold">{s.title}</h3>
              <p className="mt-1 text-sm opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 4) ABOUT แบบย่อ ===== */}
      <section className="glass flex flex-col items-center gap-5 p-8 text-center md:flex-row md:text-left">
        <span className="logo-orb logo-orb-lg shrink-0">M</span>
        <div>
          <h2 className="text-2xl font-bold">สวัสดีครับ ผม Malayued</h2>
          <p className="mt-2">
            เขียนแนะนำตัวสั้น ๆ 2-3 ประโยคตรงนี้ เช่น คุณวาดภาพมานานแค่ไหน ชอบสไตล์แบบไหน
            และแรงบันดาลใจในการสร้างผลงาน
          </p>
          <Link href="/about" className="footer-link mt-3 inline-block text-sm font-semibold">
            อ่านเพิ่มเติม →
          </Link>
        </div>
      </section>

      {/* ===== 5) CALL TO ACTION ===== */}
      <section className="glass p-8 text-center sm:p-12">
        <h2 className="text-2xl font-bold">สนใจงานวาดหรือร่วมงานกัน?</h2>
        <p className="mt-2">ส่งข้อความมาคุยรายละเอียดได้เลย</p>
        <Link href="/contact" className="aero-btn mt-6 inline-block">Get in touch</Link>
      </section>
    </main>
  )
}