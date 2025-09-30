'use client'

import { useState, useEffect } from 'react'
import { 
  ArrowLeft, 
  ShoppingBag, 
  CreditCard, 
  Truck, 
  Shield, 
  CheckCircle,
  Lock,
  Plus,
  Minus
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useStore } from '@/lib/store'

interface ShippingInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  district: string
  postalCode: string
  country: string
}

interface PaymentInfo {
  cardNumber: string
  expiryDate: string
  cvv: string
  cardName: string
  installments: string
}

export default function CheckoutPage() {
  const { cart, cartTotal, cartCount, updateQuantity, removeFromCart } = useStore()
  const [currentStep, setCurrentStep] = useState(1)
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    postalCode: '',
    country: 'Türkiye'
  })
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    installments: '1'
  })
  
  const shippingCost = cartTotal > 500 ? 0 : 29.99
  const totalWithShipping = cartTotal + shippingCost

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate shipping info
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city']
    const isValid = requiredFields.every(field => shippingInfo[field as keyof ShippingInfo])
    
    if (isValid) {
      setCurrentStep(2)
    } else {
      alert('Lütfen tüm zorunlu alanları doldurun')
    }
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Validate payment info
    const requiredFields = ['cardNumber', 'expiryDate', 'cvv', 'cardName']
    const isValid = requiredFields.every(field => paymentInfo[field as keyof PaymentInfo])
    
    if (isValid) {
      setCurrentStep(3)
      // Here you would integrate with payment processor
      setTimeout(() => {
        alert('Siparişiniz başarıyla tamamlandı!')
        window.location.href = '/account'
      }, 2000)
    } else {
      alert('Lütfen tüm kart bilgilerini doldurun')
    }
  }

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = matches && matches[0] || ''
    const parts = []
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return v
    }
  }

  if (cartCount === 0) {
    return (
      <div className="min-h-screen bg-luxury-platinum">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-luxury-serif text-luxury-charcoal mb-4">
            Sepetiniz Boş
          </h2>
          <p className="text-gray-600 mb-8">
            Ödeme işlemine devam etmek için sepetinize ürün eklemelisiniz.
          </p>
          <Link 
            href="/products"
            className="inline-block bg-luxury-gold text-white px-8 py-3 rounded-lg font-medium hover:bg-luxury-gold/90 transition-colors"
          >
            Alışverişe Devam Et
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-luxury-platinum">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          href="/products" 
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Alışverişe Devam Et</span>
        </Link>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[
              { step: 1, title: 'Teslimat Bilgileri' },
              { step: 2, title: 'Ödeme Bilgileri' },
              { step: 3, title: 'Onay' }
            ].map((item) => (
              <div key={item.step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  currentStep >= item.step 
                    ? 'bg-luxury-gold text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > item.step ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    item.step
                  )}
                </div>
                <span className={`ml-2 font-medium ${
                  currentStep >= item.step ? 'text-luxury-charcoal' : 'text-gray-600'
                }`}>
                  {item.title}
                </span>
                {item.step < 3 && (
                  <div className={`w-16 h-1 ml-4 ${
                    currentStep > item.step ? 'bg-luxury-gold' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-luxury-serif text-luxury-charcoal mb-6">
                  Teslimat Bilgileri
                </h2>
                
                <form onSubmit={handleShippingSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ad *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.firstName}
                        onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Soyad *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.lastName}
                        onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        required
                        value={shippingInfo.email}
                        onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={shippingInfo.phone}
                        onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                        placeholder="0555 123 45 67"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Adres *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                      placeholder="Mahalle, Sokak, Apartman No, Daire No"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        İl *
                      </label>
                      <input
                        type="text"
                        required
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        İlçe
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.district}
                        onChange={(e) => setShippingInfo({...shippingInfo, district: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Posta Kodu
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.postalCode}
                        onChange={(e) => setShippingInfo({...shippingInfo, postalCode: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                        placeholder="34000"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-luxury-gold text-white py-3 px-6 rounded-lg font-medium hover:bg-luxury-gold/90 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Devam Et</span>
                      <Truck className="h-5 w-5" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {currentStep === 2 && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-luxury-serif text-luxury-charcoal mb-6">
                  Ödeme Bilgileri
                </h2>
                
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-green-800 font-medium">Güvenli Ödeme</span>
                    </div>
                    <p className="text-green-700 text-sm mt-1">
                      Kart bilgileriniz SSL ile şifrelenerek korunmaktadır.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kart Numarası *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={paymentInfo.cardNumber}
                        onChange={(e) => setPaymentInfo({...paymentInfo, cardNumber: formatCardNumber(e.target.value)})}
                        className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                      />
                      <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Son Kullanma Tarihi *
                      </label>
                      <input
                        type="text"
                        required
                        value={paymentInfo.expiryDate}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, '')
                          if (value.length >= 2) {
                            value = value.substring(0, 2) + '/' + value.substring(2, 4)
                          }
                          setPaymentInfo({...paymentInfo, expiryDate: value})
                        }}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV *
                      </label>
                      <input
                        type="text"
                        required
                        value={paymentInfo.cvv}
                        onChange={(e) => setPaymentInfo({...paymentInfo, cvv: e.target.value.replace(/\D/g, '')})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kart Üzerindeki İsim *
                    </label>
                    <input
                      type="text"
                      required
                      value={paymentInfo.cardName}
                      onChange={(e) => setPaymentInfo({...paymentInfo, cardName: e.target.value.toUpperCase()})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                      placeholder="JOHN DOE"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Taksit Seçenekleri
                    </label>
                    <select
                      value={paymentInfo.installments}
                      onChange={(e) => setPaymentInfo({...paymentInfo, installments: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:border-luxury-gold"
                    >
                      <option value="1">Peşin - {totalWithShipping.toLocaleString('tr-TR')} TL</option>
                      <option value="3">3 Taksit - {(totalWithShipping / 3).toLocaleString('tr-TR')} TL</option>
                      <option value="6">6 Taksit - {(totalWithShipping / 6).toLocaleString('tr-TR')} TL</option>
                      <option value="9">9 Taksit - {(totalWithShipping / 9).toLocaleString('tr-TR')} TL</option>
                    </select>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Geri
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-luxury-gold text-white py-3 px-6 rounded-lg font-medium hover:bg-luxury-gold/90 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Lock className="h-4 w-4" />
                      <span>Ödemeyi Tamamla</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {currentStep === 3 && (
              <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h2 className="text-2xl font-luxury-serif text-luxury-charcoal mb-4">
                  Siparişiniz Alındı!
                </h2>
                <p className="text-gray-600 mb-6">
                  Siparişiniz başarıyla tamamlandı. Kargo bilgileri e-posta adresinize gönderilecek.
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600 mb-2">Sipariş Numarası</p>
                  <p className="font-mono text-lg font-bold">LZ-{Date.now().toString().slice(-8)}</p>
                </div>
                <Link 
                  href="/account"
                  className="inline-block bg-luxury-gold text-white px-8 py-3 rounded-lg font-medium hover:bg-luxury-gold/90 transition-colors"
                >
                  Siparişlerimi Görüntüle
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-luxury-serif text-luxury-charcoal mb-4">
                Sipariş Özeti
              </h3>
              
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={`${item.productId}-${item.size}-${item.color}`} className="flex items-center space-x-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-xs text-gray-500">Resim Yok</div>';
                          }
                        }}
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">
                        {item.size && `Beden: ${item.size}`} {item.color && `Renk: ${item.color}`}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity - 1)}
                            className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.size, item.color, item.quantity + 1)}
                            className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-medium text-sm">
                          {(item.price * item.quantity).toLocaleString('tr-TR')} TL
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Ara Toplam</span>
                  <span>{cartTotal.toLocaleString('tr-TR')} TL</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Kargo</span>
                  <span className={shippingCost === 0 ? 'text-green-600' : ''}>
                    {shippingCost === 0 ? 'Ücretsiz' : `${shippingCost.toLocaleString('tr-TR')} TL`}
                  </span>
                </div>
                {shippingCost === 0 && (
                  <p className="text-xs text-green-600">
                    500 TL üzeri kargo bedava!
                  </p>
                )}
                <div className="flex justify-between font-bold text-lg border-t pt-2">
                  <span>Toplam</span>
                  <span>{totalWithShipping.toLocaleString('tr-TR')} TL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}