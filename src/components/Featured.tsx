'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import PropertyCard from './PropertyCard'

interface Empreendimento {
  id: string
  titulo: string
  slug: string
  descricao: string
  cidade: string
  estado: string
  status: string
  valor_inicial: number
  imagem_capa: string
}

export default function Featured() {
  const [properties, setProperties] = useState<Empreendimento[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProperties() {
      try {
        const { data } = await supabase
          .from('empreendimentos')
          .select('*')
          .eq('destaque', true)
          .order('created_at', { ascending: false })
          .limit(6)
        
        setProperties(data || [])
      } catch (error) {
        console.error('Erro ao carregar empreendimentos:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProperties()
  }, [])

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Empreendimentos em Destaque</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossos projetos mais notáveis de incorporação e construção
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Carregando empreendimentos...</p>
          </div>
        ) : properties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">Nenhum empreendimento em destaque</p>
          </div>
        )}
      </div>
    </section>
  )
}
