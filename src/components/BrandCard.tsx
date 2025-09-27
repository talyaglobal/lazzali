'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Brand } from '@/types'

interface BrandCardProps {
  brand: Brand
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link href={`/brands/${brand.id}`}>
      <motion.div
        className="bg-white rounded-lg shadow-sm overflow-hidden group cursor-pointer"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="aspect-video bg-gray-50 relative overflow-hidden flex items-center justify-center p-4">
          <div className="w-full h-full relative">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              fill
              className="object-contain scale-110"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.parentElement?.querySelector('.fallback-logo') as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="fallback-logo absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center" style={{display: 'none'}}>
              <span className="text-4xl font-luxury-serif text-gray-600">
                {brand.name.charAt(0)}
              </span>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-luxury-serif text-luxury-charcoal">
              {brand.name}
            </h3>
            <span className="text-sm text-gray-500">
              {brand.founded}
            </span>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {brand.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              {brand.country}
            </span>
            <span className={`px-2 py-1 text-xs rounded-full ${
              brand.category === 'ultra-luxury' 
                ? 'bg-gold-100 text-gold-800' 
                : brand.category === 'contemporary'
                ? 'bg-blue-100 text-blue-800'
                : 'bg-green-100 text-green-800'
            }`}>
              {brand.category === 'ultra-luxury' ? 'Ultra Lüks' : 
               brand.category === 'contemporary' ? 'Çağdaş' : 'Premium'}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}