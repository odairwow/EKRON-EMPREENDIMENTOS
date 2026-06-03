'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 top-0">
      <nav className="bg-black/90 backdrop-blur border-b border-yellow-500/20">
        <div className="container flex justify-between items-center h-20">
          <Link href="/" className="text-2xl font-bold text-yellow-500">
            EKRON
          </Link>

          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-white hover:text-yellow-500 transition">
              Home
            </Link>
            <Link href="/empreendimentos" className="text-white hover:text-yellow-500 transition">
              Empreendimentos
            </Link>
            <Link href="/blog" className="text-white hover:text-yellow-500 transition">
              Blog
            </Link>
            <Link href="/contato" className="text-white hover:text-yellow-500 transition">
              Contato
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-yellow-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-yellow-500/20 py-4">
            <div className="container flex flex-col gap-4">
              <Link href="/" className="text-white hover:text-yellow-500 transition">
                Home
              </Link>
              <Link href="/empreendimentos" className="text-white hover:text-yellow-500 transition">
                Empreendimentos
              </Link>
              <Link href="/blog" className="text-white hover:text-yellow-500 transition">
                Blog
              </Link>
              <Link href="/contato" className="text-white hover:text-yellow-500 transition">
                Contato
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
