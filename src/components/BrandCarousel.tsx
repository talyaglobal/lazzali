'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
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
            Heritage Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover collections from the world's most prestigious fashion houses, 
            each with decades of uncompromising craftsmanship and luxury.
          </p>
        </motion.div>
        
        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ultraLuxuryBrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="brand-card"
            >
              <div className="aspect-square bg-gray-50 rounded-lg p-8 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-luxury-black rounded-full flex items-center justify-center">
                    <span className="text-white font-luxury-serif font-bold text-2xl">
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-luxury-serif text-2xl font-bold text-gray-900">
                    {brand.name}
                  </h3>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Est.</span>
                  <span className="font-medium">{brand.founded}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Origin</span>
                  <span className="font-medium">{brand.country}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {brand.description}
                </p>
              </div>
            </motion.div>
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
          <button className="luxury-button-outline">
            View All 12 Brands
          </button>
        </motion.div>
      </div>
    </section>
  )
}