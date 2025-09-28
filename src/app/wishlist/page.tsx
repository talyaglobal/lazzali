'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Heart, Star, ShoppingBag, Trash2, Eye, Share, X } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadWishlistItems()
  }, [])

  const loadWishlistItems = async () => {
    try {
      // TODO: Replace with actual authenticated user ID
      // For now, we'll just load some sample data from products table
      const { data: wishlistData, error } = await supabase
        .from('products')
        .select(`
          id,
          name,
          price,
          compare_price,
          currency,
          created_at,
          brands:brand_id (name),
          product_images (url, is_primary),
          inventory (quantity)
        `)
        .eq('is_featured', true)
        .limit(4)

      if (error) {
        console.error('Error loading wishlist:', error)
        return
      }

      // Transform data to match component expectations
      const transformedData = wishlistData?.map((item: any) => ({
        id: item.id,
        name: item.name,
        brand: item.brands?.name || 'Luxury Brand',
        price: item.price,
        originalPrice: item.compare_price,
        currency: item.currency,
        images: item.product_images?.find((img: any) => img.is_primary)?.url ? 
          [item.product_images.find((img: any) => img.is_primary).url] : 
          ['/placeholder-product.jpg'],
        inStock: item.inventory?.[0]?.quantity > 0,
        rating: 4.5 + Math.random() * 0.5, // Mock rating
        reviewCount: Math.floor(Math.random() * 200) + 50, // Mock review count
        sizes: ['S', 'M', 'L', 'XL'], // Mock sizes
        colors: ['Black', 'Navy', 'White'], // Mock colors
        addedDate: item.created_at
      })) || []

      setWishlistItems(transformedData)
    } catch (error) {
      console.error('Error loading wishlist:', error)
    } finally {
      setLoading(false)
    }
  }

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
          
          {loading ? (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-gold mx-auto mb-4"></div>
              <p className="text-gray-600">Favorileriniz yükleniyor...</p>
            </div>
          ) : wishlistItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-12 text-center">
              <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">Favori listeniz boş</h3>
              <p className="text-gray-600 mb-6">Beğendiğiniz ürünleri favorilerinize ekleyerek daha sonra kolayca bulabilirsiniz.</p>
              <Link
                href="/products"
                className="inline-flex items-center px-6 py-3 bg-luxury-gold text-white rounded-lg hover:bg-luxury-gold/90 transition-colors"
              >
                Alışverişe Başla
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {wishlistItems.map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
                    {/* Product Image */}
                    <div className="relative aspect-square">
                      {item.images && item.images[0] && item.images[0] !== '/placeholder-product.jpg' ? (
                        <img 
                          src={item.images[0]} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <div className="text-gray-400 text-sm">Ürün Görseli</div>
                        </div>
                      )}
                      
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