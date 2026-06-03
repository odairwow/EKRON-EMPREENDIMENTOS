'use client'

import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="border-t border-yellow-500/20">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="heading-3 text-yellow-500 mb-4">EKRON</h3>
              <p className="text-gray-400 text-sm">
                Construindo patrimônios e transformando cidades através da excelência em incorporação e construção.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-yellow-500 transition">Home</Link></li>
                <li><Link href="/empreendimentos" className="hover:text-yellow-500 transition">Empreendimentos</Link></li>
                <li><Link href="/blog" className="hover:text-yellow-500 transition">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-yellow-500" />
                  <span>Rua JB17 nº 436, Parque Amazonas<br />Sinop - MT</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-yellow-500" />
                  <a href="mailto:ekronempreendimentos@gmail.com" className="hover:text-yellow-500">ekronempreendimentos@gmail.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-yellow-500" />
                  <a href="tel:+5566999145057" className="hover:text-yellow-500">(66) 99914-5057</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Informações</h4>
              <p className="text-sm text-gray-400 mb-2"><strong>CNPJ:</strong> 54.305.344/0001-38</p>
              <p className="text-sm text-gray-400"><strong>Empresa:</strong> EKRON LTDA</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm text-gray-500">&copy; {currentYear} EKRON. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
