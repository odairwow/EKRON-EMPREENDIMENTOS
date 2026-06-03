'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-screen mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200)',
          backgroundAttachment: 'fixed',
        }}
      />

      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="container text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-1 mb-6"
          >
            Construindo Patrimônios.
            <br />
            Transformando Cidades.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Incorporação imobiliária, construção civil e investimentos com excelência
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/5566999145057"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Falar com Especialista
            </a>
            <Link href="/empreendimentos" className="btn-outline text-white border-white">
              Ver Empreendimentos
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
