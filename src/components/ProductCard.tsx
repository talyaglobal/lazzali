'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Eye } from 'lucide-react'
import { useStore } from '@/lib/store'
import { formatPriceWithoutSymbol } from '@/lib/utils'

interface ProductCardProps {
  product: any
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useStore()
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation to product page
    e.stopPropagation()
    addToCart({
      id: product.id,
      productId: product.id,
      name: product.name,
      brand: product.brands?.name || 'Luxury Brand',
      price: product.price,
      image: product.product_images?.[0]?.url || '/placeholder-product.jpg',
      size: 'Standard',
      color: 'Default',
      inStock: true
    })
  }
  
  return (
    <Link href={`/products/${product.slug || product.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="product-card group"
      >
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          {product.product_images?.[0]?.url ? (
            <Image
              src={product.product_images[0].url}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="text-6xl font-luxury-serif text-gray-400">
              {product.name?.charAt(0) || 'P'}
            </div>
          )}
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {product.is_featured && (
            <span className="bg-luxury-gold text-white text-xs font-medium px-3 py-1 rounded-full">
              ÖNE ÇIKAN
            </span>
          )}
          {product.tags?.includes('limited') && (
            <span className="bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
              SINIRLI
            </span>
          )}
          {product.compare_price && product.compare_price > product.price && (
            <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
              İNDİRİM
            </span>
          )}
        </div>
        
        {/* Hover Actions */}
        <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50"
          >
            <Heart className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50"
          >
            <Eye className="w-5 h-5" />
          </motion.button>
        </div>
        
        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-luxury-black text-white py-3 font-medium text-sm tracking-wide uppercase hover:bg-luxury-charcoal transition-colors"
          >
            Hızlı Ekle
          </motion.button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6 space-y-3">
        <div className="space-y-1">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            {product.brands?.name || 'Luxury Brand'}
          </p>
          <h3 className="font-medium text-gray-900 hover:text-luxury-gold transition-colors cursor-pointer">
            {product.name}
          </h3>
        </div>
        
        <div className="flex items-center space-x-2">
          {product.compare_price && product.compare_price > product.price ? (
            <>
              <span className="text-lg font-bold text-gray-900">
                {formatPriceWithoutSymbol(product.price)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {formatPriceWithoutSymbol(product.compare_price)}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900">
              {formatPriceWithoutSymbol(product.price)} {product.currency || 'TRY'}
            </span>
          )}
        </div>
        
        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="flex items-center space-x-1 flex-wrap gap-1">
            {product.tags.slice(0, 3).map((tag: string, index: number) => (
              <span key={index} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {product.country_of_origin && (
          <p className="text-xs text-gray-500">{product.country_of_origin} yapımı</p>
        )}
      </div>
      </motion.div>
    </Link>
  )
}