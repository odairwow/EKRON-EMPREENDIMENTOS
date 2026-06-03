import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import './globals.css'

export const metadata: Metadata = {
  title: 'EKRON Empreendimentos | Construindo Patrimônios',
  description: 'Incorporação imobiliária, construção civil e investimentos',
  keywords: 'imóvel, construção, incorporação, investimento, Sinop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  )
}
