'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { brands } from '@/lib/data'

export default function BrandCarousel() {
  const ultraLuxuryBrands = brands.filter(brand => brand.category === 'ultra-luxury')
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-luxury-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Köklü Markalar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Onlarca yıllık ödünsüz işçilik ve lüks geleneğine sahip dünyanın en prestijli 
            moda evlerinden özenle seçilmiş koleksiyonları keşfedin.
          </p>
        </motion.div>
        
        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ultraLuxuryBrands.map((brand, index) => (
            <Link href={`/brands/${brand.id}`} key={brand.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="brand-card cursor-pointer hover:shadow-lg transition-shadow duration-300"
              >
              <div className="aspect-square bg-gray-50 rounded-lg p-8 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-luxury-serif text-2xl font-bold text-gray-900">
                    {brand.name}
                  </h3>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Kuruluş</span>
                  <span className="font-medium">{brand.founded}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Menşei</span>
                  <span className="font-medium">{brand.country}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {brand.description}
                </p>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        {/* View All Brands Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/brands" className="luxury-button-outline">
            Tüm 12 Markayı Görüntüle
          </Link>
        </motion.div>
      </div>
    </section>
  )
}