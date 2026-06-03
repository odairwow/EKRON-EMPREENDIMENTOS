'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5566999145057"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 z-40 flex items-center gap-2"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  )
}
