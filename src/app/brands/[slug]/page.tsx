'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { brands, products } from '@/lib/data'
import { motion } from 'framer-motion'

interface BrandPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params
  const brand = brands.find(b => b.id === slug)
  
  if (!brand) {
    notFound()
  }

  const brandProducts = products.filter(p => p.brandId === brand.id)

  return (
    <div className="min-h-screen bg-luxury-platinum">
      <Header />
      
      <main>
        {/* Brand Hero */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700"></div>
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <motion.div 
                className="max-w-4xl mx-auto text-center text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Brand Logo */}
                <div className="mb-8">
                  <div className="w-32 h-32 mx-auto bg-white rounded-lg flex items-center justify-center p-4">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-luxury-serif font-bold mb-6">
                  {brand.name}
                </h1>
                <p className="text-xl md:text-2xl mb-4 opacity-90">
                  {brand.description}
                </p>
                <div className="flex items-center justify-center space-x-4 text-lg">
                  <span>{brand.country}</span>
                  <span>•</span>
                  <span>{brand.founded} yılından beri</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Brand Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-luxury-serif font-bold mb-6">Marka Hikayesi</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {brand.heritage}
                </p>
              </motion.div>

              {/* Brand Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-luxury-black mb-2">{brand.founded}</div>
                  <div className="text-gray-600">Kuruluş Yılı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-luxury-black mb-2">{brand.country}</div>
                  <div className="text-gray-600">Menşei</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-luxury-black mb-2">
                    {brand.category === 'ultra-luxury' ? 'Ultra Lüks' : 
                     brand.category === 'contemporary' ? 'Çağdaş' : 'Premium'}
                  </div>
                  <div className="text-gray-600">Kategori</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Products */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-3xl font-luxury-serif font-bold text-center mb-12">
                {brand.name} Koleksiyonu
              </h2>
              
              {brandProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {brandProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-gray-600 text-lg">
                    Bu marka için ürünler yakında eklenecek.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}