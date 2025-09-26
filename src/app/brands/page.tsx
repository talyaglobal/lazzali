'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BrandCard from '@/components/BrandCard'
import { brands } from '@/lib/data'
import { useTranslation } from '@/lib/i18n'

export default function BrandsPage() {
  const { t } = useTranslation()

  const luxuryBrands = brands.filter(brand => brand.category === 'ultra-luxury')
  const contemporaryBrands = brands.filter(brand => brand.category === 'contemporary')
  const accessibleBrands = brands.filter(brand => brand.category === 'accessible-premium')

  return (
    <div className="min-h-screen bg-luxury-platinum">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-luxury-serif text-luxury-charcoal mb-6">
            Premium Markalar
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dünyanın en prestijli moda markalarından özenle seçilmiş koleksiyonlar
          </p>
        </div>

        {/* Ultra-Luxury Brands */}
        <section className="mb-16">
          <h2 className="text-3xl font-luxury-serif text-luxury-charcoal mb-8">
            Ultra Lüks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryBrands.map(brand => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </section>

        {/* Contemporary Brands */}
        <section className="mb-16">
          <h2 className="text-3xl font-luxury-serif text-luxury-charcoal mb-8">
            Çağdaş Lüks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contemporaryBrands.map(brand => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </section>

        {/* Accessible Premium */}
        <section>
          <h2 className="text-3xl font-luxury-serif text-luxury-charcoal mb-8">
            Premium Koleksiyon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessibleBrands.map(brand => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}