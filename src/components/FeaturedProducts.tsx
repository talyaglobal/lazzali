'use client'

import { motion } from 'framer-motion'
import { products } from '@/lib/data'
import ProductCard from './ProductCard'

export default function FeaturedProducts() {
  const newProducts = products.filter(product => product.isNew).slice(0, 4)
  const saleProducts = products.filter(product => product.originalPrice).slice(0, 4)
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Arrivals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-luxury-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                New Arrivals
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                The latest additions to our curated collection of luxury menswear
              </p>
            </div>
            <button className="luxury-button-outline hidden md:block">
              View All New
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </motion.div>
        
        {/* Featured Collections */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-black to-luxury-charcoal" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
              <h3 className="font-luxury-serif text-3xl font-bold mb-4">
                Italian Craftsmanship
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Discover heritage pieces from Italy's finest ateliers
              </p>
              <button className="self-start px-6 py-3 border-2 border-white text-white font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-colors">
                Explore Collection
              </button>
            </div>
          </div>
          
          <div className="relative h-96 rounded-lg overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold to-amber-600" />
            <div className="relative z-10 p-8 h-full flex flex-col justify-end text-white">
              <h3 className="font-luxury-serif text-3xl font-bold mb-4">
                Limited Editions
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Exclusive pieces available for a limited time
              </p>
              <button className="self-start px-6 py-3 border-2 border-white text-white font-medium uppercase tracking-wide hover:bg-white hover:text-luxury-gold transition-colors">
                Shop Limited
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Sale Items */}
        {saleProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-luxury-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Luxury Sale
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Select pieces from our premium collections, now at exceptional values
                </p>
              </div>
              <button className="luxury-button-outline hidden md:block">
                View All Sale
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {saleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}