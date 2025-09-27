'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Heart, ShoppingBag, Truck, RotateCcw, Shield, Star } from 'lucide-react'
import { products } from '@/lib/data'
import { useStore } from '@/lib/store'

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === params.id)
  const { addToCart, addToWishlist } = useStore()
  
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ürün bulunamadı</h1>
          <Link href="/products" className="text-luxury-gold hover:underline">
            Ürünlere dön
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      alert('Lütfen bir beden seçin')
      return
    }
    if (product.colors && product.colors.length > 0 && !selectedColor) {
      alert('Lütfen bir renk seçin')
      return
    }
    
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    alert('Ürün sepete eklendi!')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link 
          href="/products" 
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Ürünlere Dön</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage] || product.images[0]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index 
                        ? 'border-luxury-gold' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Brand and Title */}
            <div>
              <p className="text-sm font-medium text-luxury-gold mb-2">{product.brand}</p>
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex items-center space-x-2 mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(124 değerlendirme)</span>
              </div>
            </div>

            {/* Price */}
            <div>
              <p className="text-3xl font-bold text-gray-900">
                {product.price.toLocaleString('tr-TR')} TL
              </p>
              {product.isLimitedEdition && (
                <p className="text-sm text-luxury-gold font-medium mt-1">Sınırlı Edisyon</p>
              )}
              {product.isNew && (
                <p className="text-sm text-green-600 font-medium mt-1">Yeni Ürün</p>
              )}
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Beden</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-luxury-gold bg-luxury-gold text-white'
                          : 'border-gray-300 text-gray-900 hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Renk</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                        selectedColor === color
                          ? 'border-luxury-gold bg-luxury-gold text-white'
                          : 'border-gray-300 text-gray-900 hover:border-gray-400'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Adet</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleAddToCart}
                className="w-full bg-luxury-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Sepete Ekle</span>
              </button>
              
              <button
                onClick={() => addToWishlist(product)}
                className="w-full border border-gray-300 text-gray-900 py-3 px-6 rounded-lg font-medium hover:border-gray-400 transition-colors flex items-center justify-center space-x-2"
              >
                <Heart className="h-5 w-5" />
                <span>Favorilere Ekle</span>
              </button>
            </div>

            {/* Product Features */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-start space-x-3">
                <Truck className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Ücretsiz Kargo</p>
                  <p className="text-sm text-gray-600">2000 TL üzeri siparişlerde</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <RotateCcw className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">30 Gün İade</p>
                  <p className="text-sm text-gray-600">Koşulsuz iade garantisi</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Orijinallik Garantisi</p>
                  <p className="text-sm text-gray-600">%100 orijinal ürün güvencesi</p>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Ürün Detayları</h3>
              <div className="space-y-2 text-sm">
                {product.materials && (
                  <div className="flex">
                    <span className="text-gray-600 w-24">Malzeme:</span>
                    <span className="text-gray-900">{product.materials.join(', ')}</span>
                  </div>
                )}
                <div className="flex">
                  <span className="text-gray-600 w-24">Üretim:</span>
                  <span className="text-gray-900">{product.craftedIn}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-24">Kategori:</span>
                  <span className="text-gray-900">{product.category}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 w-24">Stok:</span>
                  <span className={product.inStock ? 'text-green-600' : 'text-red-600'}>
                    {product.inStock ? 'Mevcut' : 'Tükendi'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}