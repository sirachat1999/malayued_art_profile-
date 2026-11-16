'use client'

import type { FormEvent } from 'react'

// รับอีเมลปลายทางมาจากหน้า page.tsx จะได้แก้ที่เดียว
export default function ContactForm({ email }: { email: string }) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault() // ไม่ให้หน้าเว็บรีโหลด

    // ดึงค่าจากช่องกรอกทั้งหมดผ่านชื่อ (name="...")
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const from = String(data.get('email') ?? '')
    const message = String(data.get('message') ?? '')

    // สร้างลิงก์ mailto: แล้วสั่งเปิดแอปอีเมลของผู้ใช้
    const subject = encodeURIComponent(`Message from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${from}\n\n${message}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1 text-sm font-semibold">
        Name
        <input name="name" type="text" required placeholder="Your name" className="aero-input" />
      </label>

      <label className="flex flex-col gap-1 text-sm font-semibold">
        Email
        <input name="email" type="email" required placeholder="you@example.com" className="aero-input" />
      </label>

      <label className="flex flex-col gap-1 text-sm font-semibold">
        Message
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Write your message here..."
          className="aero-input resize-y"
        />
      </label>

      <button type="submit" className="aero-btn w-full cursor-pointer">
        Send message
      </button>
      <p className="text-center text-xs opacity-70">
        Clicking send opens your email app with the message ready to go.
      </p>
    </form>
  )
}