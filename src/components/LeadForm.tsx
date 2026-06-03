'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import toast from 'react-hot-toast'

export default function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { error } = await supabase.from('leads').insert([
        {
          ...formData,
          origem: 'site',
        },
      ])

      if (error) throw error

      toast.success('Mensagem enviada com sucesso!')
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' })
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      toast.error('Erro ao enviar formulário')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="section bg-gray-900 text-white">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Fale Conosco</h2>
          <p className="text-gray-300">
            Deixe seus dados e um de nossos especialistas entrará em contato
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Nome *</label>
            <input
              type="text"
              required
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-500 outline-none transition text-white"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                required
                placeholder="seu@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-500 outline-none transition text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Telefone *</label>
              <input
                type="tel"
                required
                placeholder="(66) 99999-9999"
                value={formData.telefone}
                onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-500 outline-none transition text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Mensagem *</label>
            <textarea
              required
              placeholder="Conte-nos mais sobre seu interesse..."
              rows={5}
              value={formData.mensagem}
              onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-yellow-500 outline-none transition text-white"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
    </section>
  )
}
