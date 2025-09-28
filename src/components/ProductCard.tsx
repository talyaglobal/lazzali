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
      id: `${product.id}-${product.sizes[0]}-${product.colors[0]}`,
      productId: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.images[0],
      size: product.sizes[0],
      color: product.colors[0]
    })
  }
  
  return (
    <Link href={`/products/${product.id}`} className="block">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="product-card group"
      >
      {/* Product Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 space-y-2">
          {product.isNew && (
            <span className="bg-luxury-gold text-white text-xs font-medium px-3 py-1 rounded-full">
              YENİ
            </span>
          )}
          {product.isLimitedEdition && (
            <span className="bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
              SINIRLI
            </span>
          )}
          {product.originalPrice && (
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
            {product.brand}
          </p>
          <h3 className="font-medium text-gray-900 hover:text-luxury-gold transition-colors cursor-pointer">
            {product.name}
          </h3>
        </div>
        
        <div className="flex items-center space-x-2">
          {product.originalPrice ? (
            <>
              <span className="text-lg font-bold text-gray-900">
                {formatPriceWithoutSymbol(product.price)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {formatPriceWithoutSymbol(product.originalPrice)}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-gray-900">
              {formatPriceWithoutSymbol(product.price)}
            </span>
          )}
        </div>
        
        {/* Colors */}
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">{product.colors.length} renk</span>
          <div className="flex space-x-1">
            {product.colors.slice(0, 4).map((color: string, index: number) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full border border-gray-200 ${
                  color.toLowerCase() === 'black' ? 'bg-black' :
                  color.toLowerCase() === 'white' ? 'bg-white' :
                  color.toLowerCase() === 'navy' ? 'bg-blue-900' :
                  color.toLowerCase() === 'brown' ? 'bg-amber-800' :
                  'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
        
        <p className="text-xs text-gray-500">{product.craftedIn} yapımı</p>
      </div>
      </motion.div>
    </Link>
  )
}