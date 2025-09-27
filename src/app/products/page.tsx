'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { products, brands, categories } from '@/lib/data'
import { useTranslation } from '@/lib/i18n'
import { Filter, Grid, List } from 'lucide-react'

function ProductsContent() {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedBrand, setSelectedBrand] = useState<string>('')
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [sortBy, setSortBy] = useState<string>('name')

  // Handle URL parameters
  useEffect(() => {
    const category = searchParams.get('category')
    const brand = searchParams.get('brand')
    const sort = searchParams.get('sort')
    const view = searchParams.get('view')
    
    if (category) setSelectedCategory(category)
    if (brand) setSelectedBrand(brand)
    if (sort) setSortBy(sort)
    if (view === 'list' || view === 'grid') setViewMode(view)
  }, [searchParams])

  const filteredProducts = products
    .filter(product => !selectedBrand || product.brandId === selectedBrand)
    .filter(product => !selectedCategory || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price
      if (sortBy === 'name') return a.name.localeCompare(b.name)
      return 0
    })

  return (
    <div className="min-h-screen bg-luxury-platinum">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter className="mr-2 h-5 w-5" />
                Filtreler
              </h3>
              
              {/* Brand Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">{t('brands')}</h4>
                <select 
                  value={selectedBrand} 
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Tüm Markalar</option>
                  {brands.map(brand => (
                    <option key={brand.id} value={brand.id}>{brand.name}</option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">{t('categories')}</h4>
                <select 
                  value={selectedCategory} 
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="">Tüm Kategoriler</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{t(category.id as any)}</option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">{filteredProducts.length} ürün</span>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="p-2 border rounded-md"
                >
                  <option value="name">İsme Göre</option>
                  <option value="price">Fiyata Göre</option>
                </select>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Products */}
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-4"
            }>
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsContent />
    </Suspense>
  )
}