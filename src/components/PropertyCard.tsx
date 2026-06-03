import Link from 'next/link'
import { MapPin, DollarSign } from 'lucide-react'

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

interface PropertyCardProps {
  property: Empreendimento
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <Link href={`/empreendimentos/${property.slug}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
        <div className="relative h-64 overflow-hidden bg-gray-200">
          {property.imagem_capa ? (
            <img
              src={property.imagem_capa}
              alt={property.titulo}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <span className="text-gray-500">Sem imagem</span>
            </div>
          )}
          <div className="absolute top-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-semibold">
            {property.status}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition">
            {property.titulo}
          </h3>

          <div className="flex items-center text-gray-600 mb-4">
            <MapPin size={16} className="mr-2" />
            <span className="text-sm">
              {property.cidade}, {property.estado}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.descricao}</p>

          <div className="border-t pt-4 flex items-center justify-between">
            <div className="flex items-center">
              <DollarSign size={16} className="text-yellow-500 mr-1" />
              <span className="font-semibold text-gray-900">
                {formatCurrency(property.valor_inicial)}
              </span>
            </div>
            <span className="text-yellow-500 font-semibold group-hover:translate-x-1 transition-transform">
              Saiba mais →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
