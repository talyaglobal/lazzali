'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Heart, Star, ShoppingBag, Trash2, Eye, Share, X } from 'lucide-react'

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: 'Burberry Classic Check Scarf',
      brand: 'Burberry',
      price: 1200.00,
      originalPrice: 1400.00,
      currency: 'TRY',
      images: ['/api/placeholder/400/400'],
      inStock: true,
      rating: 4.8,
      reviewCount: 124,
      sizes: ['One Size'],
      colors: ['Camel Check', 'Navy Check', 'Black Check'],
      addedDate: '2024-01-10'
    },
    {
      id: 2,
      name: 'Prada Milano Logo T-Shirt',
      brand: 'Prada',
      price: 445.00,
      originalPrice: null,
      currency: 'TRY',
      images: ['/api/placeholder/400/400'],
      inStock: true,
      rating: 4.6,
      reviewCount: 89,
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['White', 'Black', 'Navy'],
      addedDate: '2024-01-15'
    },
    {
      id: 3,
      name: 'Moncler Down Jacket',
      brand: 'Moncler',
      price: 1150.00,
      originalPrice: null,
      currency: 'TRY',
      images: ['/api/placeholder/400/400'],
      inStock: false,
      rating: 4.9,
      reviewCount: 203,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Navy', 'Black', 'Red'],
      addedDate: '2024-01-20'
    },
    {
      id: 4,
      name: 'Bottega Veneta Intrecciato Wallet',
      brand: 'Bottega Veneta',
      price: 3200.00,
      originalPrice: null,
      currency: 'TRY',
      images: ['/api/placeholder/400/400'],
      inStock: true,
      rating: 4.7,
      reviewCount: 67,
      sizes: ['One Size'],
      colors: ['Black', 'Brown', 'Navy'],
      addedDate: '2024-01-25'
    }
  ])

  const removeFromWishlist = (itemId: number) => {
    setWishlistItems(items => items.filter(item => item.id !== itemId))
  }

  const moveToCart = (itemId: number) => {
    // Here you would typically add the item to the cart
    console.log('Moving item to cart:', itemId)
    // Optionally remove from wishlist after adding to cart
    removeFromWishlist(itemId)
  }

  return (
    <div className="min-h-screen bg-luxury-platinum">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl lg:text-4xl font-luxury-serif text-luxury-charcoal">
              Favorilerim
            </h1>
            <div className="text-gray-600">
              {wishlistItems.length} ürün
            </div>
          </div>
          
          {wishlistItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">Favori listeniz boş</h3>
              <p className="text-gray-600 mb-6">Beğendiğiniz ürünleri favorilerinize ekleyerek daha sonra kolayca bulabilirsiniz.</p>
              <a
                href="/products"
                className="inline-flex items-center px-6 py-3 bg-luxury-gold text-white rounded-lg hover:bg-luxury-gold/90 transition-colors"
              >
                Alışverişe Başla
              </a>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wishlistItems.map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
                    {/* Product Image */}
                    <div className="relative aspect-square">
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <div className="text-gray-400 text-sm">Ürün Görseli</div>
                      </div>
                      
                      {/* Discount Badge */}
                      {item.originalPrice && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
                          %{Math.round((1 - item.price / item.originalPrice) * 100)} İndirim
                        </div>
                      )}
                      
                      {/* Stock Status */}
                      {!item.inStock && (
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                          <span className="text-white font-medium">Stokta Yok</span>
                        </div>
                      )}
                      
                      {/* Action Buttons */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="space-y-2">
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                            <Share className="h-4 w-4" />
                          </button>
                          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Product Info */}
                    <div className="p-4">
                      <div className="mb-2">
                        <p className="text-sm text-gray-600">{item.brand}</p>
                        <h3 className="font-medium text-gray-900 line-clamp-2">{item.name}</h3>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center space-x-1 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(item.rating) 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {item.rating} ({item.reviewCount})
                        </span>
                      </div>
                      
                      {/* Price */}
                      <div className="flex items-center space-x-2 mb-4">
                        <span className="font-semibold text-gray-900">
                          {item.price.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} {item.currency}
                        </span>
                        {item.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {item.originalPrice.toLocaleString('tr-TR', { minimumFractionDigits: 2 })} {item.currency}
                          </span>
                        )}
                      </div>
                      
                      {/* Size and Color Options */}
                      <div className="space-y-2 mb-4">
                        {item.sizes.length > 1 && (
                          <div>
                            <p className="text-xs text-gray-600 mb-1">Bedenler:</p>
                            <div className="flex flex-wrap gap-1">
                              {item.sizes.slice(0, 3).map(size => (
                                <span key={size} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                                  {size}
                                </span>
                              ))}
                              {item.sizes.length > 3 && (
                                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                                  +{item.sizes.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                        
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Renkler:</p>
                          <div className="flex flex-wrap gap-1">
                            {item.colors.slice(0, 2).map(color => (
                              <span key={color} className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                                {color}
                              </span>
                            ))}
                            {item.colors.length > 2 && (
                              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                                +{item.colors.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Actions */}
                      <div className="space-y-2">
                        <button
                          onClick={() => moveToCart(item.id)}
                          disabled={!item.inStock}
                          className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                            item.inStock
                              ? 'bg-luxury-gold text-white hover:bg-luxury-gold/90'
                              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          <ShoppingBag className="h-4 w-4" />
                          <span>{item.inStock ? 'Sepete Ekle' : 'Stokta Yok'}</span>
                        </button>
                        
                        <div className="text-xs text-gray-500 text-center">
                          Favorilere eklendi: {new Date(item.addedDate).toLocaleDateString('tr-TR')}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Wishlist Actions */}
              <div className="bg-white rounded-lg shadow-sm p-6 mt-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Favori Listesi Yönetimi</h3>
                    <p className="text-sm text-gray-600">
                      Favori listenizi arkadaşlarınızla paylaşabilir veya tümünü sepete ekleyebilirsiniz.
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="px-4 py-2 text-sm font-medium text-luxury-gold border border-luxury-gold rounded-lg hover:bg-luxury-gold hover:text-white transition-colors">
                      Listeyi Paylaş
                    </button>
                    <button
                      onClick={() => {
                        const inStockItems = wishlistItems.filter(item => item.inStock)
                        inStockItems.forEach(item => moveToCart(item.id))
                      }}
                      className="px-4 py-2 text-sm font-medium text-white bg-luxury-gold rounded-lg hover:bg-luxury-gold/90 transition-colors"
                    >
                      Tümünü Sepete Ekle
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}