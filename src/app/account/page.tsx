'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { User, Package, Heart, Settings, CreditCard, MapPin } from 'lucide-react'

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-luxury-platinum">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-luxury-serif text-luxury-charcoal mb-8">
            Hesabım
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-16 h-16 bg-luxury-black rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-luxury-charcoal">Hoş Geldiniz</h3>
                    <p className="text-gray-600 text-sm">Premium Üye</p>
                  </div>
                </div>
                
                <nav className="space-y-2">
                  <a href="#profile" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-luxury-gold transition-colors">
                    <User className="h-5 w-5" />
                    <span>Profil Bilgileri</span>
                  </a>
                  <a href="#orders" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-luxury-gold transition-colors">
                    <Package className="h-5 w-5" />
                    <span>Siparişlerim</span>
                  </a>
                  <a href="#wishlist" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-luxury-gold transition-colors">
                    <Heart className="h-5 w-5" />
                    <span>Favorilerim</span>
                  </a>
                  <a href="#addresses" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-luxury-gold transition-colors">
                    <MapPin className="h-5 w-5" />
                    <span>Adreslerim</span>
                  </a>
                  <a href="#payment" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-luxury-gold transition-colors">
                    <CreditCard className="h-5 w-5" />
                    <span>Ödeme Yöntemlerim</span>
                  </a>
                  <a href="#settings" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 text-gray-700 hover:text-luxury-gold transition-colors">
                    <Settings className="h-5 w-5" />
                    <span>Ayarlar</span>
                  </a>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-luxury-serif text-luxury-charcoal mb-6">Hesaba Genel Bakış</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium text-luxury-charcoal mb-2">Son Siparişler</h3>
                    <p className="text-gray-600 text-sm">Henüz sipariş bulunmuyor</p>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium text-luxury-charcoal mb-2">Favoriler</h3>
                    <p className="text-gray-600 text-sm">0 ürün</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-xl font-luxury-serif text-luxury-charcoal mb-4">VIP Avantajları</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span className="text-gray-700">Ücretsiz kargo tüm siparişlerde</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span className="text-gray-700">Özel koleksiyonlara erken erişim</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                      <span className="text-gray-700">Kişisel alışveriş danışmanlığı</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}