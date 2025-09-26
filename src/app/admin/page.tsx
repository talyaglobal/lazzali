'use client'

import { useState } from 'react'
import { 
  ShoppingBag, 
  Package, 
  Users, 
  TrendingUp, 
  DollarSign,
  Eye,
  Plus,
  Edit,
  Trash2,
  Search
} from 'lucide-react'
import { products } from '@/lib/data'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')

  // Mock data
  const stats = {
    totalOrders: 1247,
    totalProducts: products.length,
    totalUsers: 523,
    totalRevenue: 485760,
    todayOrders: 23,
    todayRevenue: 8940
  }

  const recentOrders = [
    { id: '1001', customer: 'Ahmet Yılmaz', amount: 2850, status: 'Tamamlandı', date: '2025-01-26' },
    { id: '1002', customer: 'Mehmet Kaya', amount: 1650, status: 'Kargo', date: '2025-01-26' },
    { id: '1003', customer: 'Ali Demir', amount: 425, status: 'Beklemede', date: '2025-01-25' },
    { id: '1004', customer: 'Fatih Özkan', amount: 340, status: 'Tamamlandı', date: '2025-01-25' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900">Lazzali Admin</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Admin User</span>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-screen sticky top-0">
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'dashboard' 
                      ? 'bg-green-100 text-green-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <TrendingUp className="h-5 w-5" />
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('products')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'products' 
                      ? 'bg-green-100 text-green-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Package className="h-5 w-5" />
                  <span>Ürünler</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'orders' 
                      ? 'bg-green-100 text-green-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ShoppingBag className="h-5 w-5" />
                  <span>Siparişler</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('users')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'users' 
                      ? 'bg-green-100 text-green-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Users className="h-5 w-5" />
                  <span>Kullanıcılar</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Toplam Sipariş</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
                      <p className="text-sm text-green-600">+{stats.todayOrders} bugün</p>
                    </div>
                    <ShoppingBag className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Toplam Ürün</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
                      <p className="text-sm text-gray-500">aktif</p>
                    </div>
                    <Package className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Toplam Kullanıcı</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalUsers}</p>
                      <p className="text-sm text-gray-500">kayıtlı</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Toplam Gelir</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalRevenue.toLocaleString('tr-TR')}₺</p>
                      <p className="text-sm text-green-600">+{stats.todayRevenue.toLocaleString('tr-TR')}₺ bugün</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Son Siparişler</h3>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 text-sm font-medium text-gray-600">Sipariş ID</th>
                          <th className="text-left py-2 text-sm font-medium text-gray-600">Müşteri</th>
                          <th className="text-left py-2 text-sm font-medium text-gray-600">Tutar</th>
                          <th className="text-left py-2 text-sm font-medium text-gray-600">Durum</th>
                          <th className="text-left py-2 text-sm font-medium text-gray-600">Tarih</th>
                          <th className="text-left py-2 text-sm font-medium text-gray-600">İşlem</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentOrders.map(order => (
                          <tr key={order.id} className="border-b border-gray-100">
                            <td className="py-3 text-sm font-medium">#{order.id}</td>
                            <td className="py-3 text-sm text-gray-900">{order.customer}</td>
                            <td className="py-3 text-sm text-gray-900">{order.amount.toLocaleString('tr-TR')}₺</td>
                            <td className="py-3">
                              <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                                order.status === 'Tamamlandı' ? 'bg-green-100 text-green-800' :
                                order.status === 'Kargo' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {order.status}
                              </span>
                            </td>
                            <td className="py-3 text-sm text-gray-600">{order.date}</td>
                            <td className="py-3">
                              <button className="text-green-600 hover:text-green-800">
                                <Eye className="h-4 w-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Ürün Yönetimi</h2>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Yeni Ürün</span>
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Ürün ara..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Ürün</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Marka</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Kategori</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Fiyat</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Stok</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.slice(0, 10).map(product => (
                        <tr key={product.id} className="border-b border-gray-100">
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{product.name}</p>
                                <p className="text-xs text-gray-500">ID: {product.id}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-sm text-gray-900">{product.brand}</td>
                          <td className="p-4 text-sm text-gray-900">{product.category}</td>
                          <td className="p-4 text-sm text-gray-900">{product.price.toLocaleString('tr-TR')}₺</td>
                          <td className="p-4">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {product.inStock ? 'Stokta' : 'Tükendi'}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <button className="text-green-600 hover:text-green-800">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-800">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sipariş Yönetimi</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-600">Sipariş yönetimi sayfası geliştiriliyor...</p>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kullanıcı Yönetimi</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-600">Kullanıcı yönetimi sayfası geliştiriliyor...</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}