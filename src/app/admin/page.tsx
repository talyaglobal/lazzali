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
  Search,
  X,
  Save,
  Crown,
  Award,
  Star,
  Percent,
  Send,
  Facebook,
  MessageCircle,
  Instagram
} from 'lucide-react'
import { products, brands } from '@/lib/data'
import ImportExportButtons from '@/components/ImportExportButtons'

interface NewProduct {
  id: string
  name: string
  brand: string
  brandId: string
  price: number
  originalPrice?: number
  category: string
  subcategory: string
  description: string
  images: string[]
  sizes: string[]
  colors: string[]
  materials: string[]
  inStock: boolean
  isLimitedEdition: boolean
  isNew: boolean
  craftedIn: string
  gender: string
  sizeType: string
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showAddProduct, setShowAddProduct] = useState(false)
  const [showEditProduct, setShowEditProduct] = useState(false)
  const [editingProduct, setEditingProduct] = useState<NewProduct | null>(null)
  const [productsList, setProductsList] = useState(products)
  const [showAddMember, setShowAddMember] = useState(false)
  
  const [newProduct, setNewProduct] = useState<NewProduct>({
    id: '',
    name: '',
    brand: '',
    brandId: '',
    price: 0,
    category: '',
    subcategory: '',
    description: '',
    images: [''],
    sizes: [],
    colors: [],
    materials: [],
    inStock: true,
    isLimitedEdition: false,
    isNew: true,
    craftedIn: '',
    gender: 'unisex',
    sizeType: 'clothing'
  })

  // Mock data
  const stats = {
    totalOrders: 1247,
    totalProducts: productsList.length,
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

  // MEN'S VIP CLUB Loyalty System Data
  const [vipMembers, setVipMembers] = useState([
    {
      id: 'VIP001',
      name: 'Emre Kızıltan',
      email: 'emre@example.com',
      phone: '+90 532 123 45 67',
      tier: 'Diamond',
      points: 15420,
      totalSpent: 45600,
      dealerType: 'Premium Dealer',
      region: 'İstanbul',
      joinDate: '2024-03-15',
      lastPurchase: '2025-01-20',
      commission: 12,
      status: 'Active'
    },
    {
      id: 'VIP002', 
      name: 'Serkan Özdemir',
      email: 'serkan@example.com',
      phone: '+90 535 987 65 43',
      tier: 'Platinum',
      points: 8940,
      totalSpent: 28400,
      dealerType: 'Regional Dealer',
      region: 'Ankara',
      joinDate: '2024-07-22',
      lastPurchase: '2025-01-18',
      commission: 8,
      status: 'Active'
    },
    {
      id: 'VIP003',
      name: 'Burak Yaman', 
      email: 'burak@example.com',
      phone: '+90 538 456 78 90',
      tier: 'Gold',
      points: 4560,
      totalSpent: 15200,
      dealerType: 'Local Dealer',
      region: 'İzmir',
      joinDate: '2024-11-10',
      lastPurchase: '2025-01-15',
      commission: 5,
      status: 'Active'
    }
  ])

  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    phone: '',
    tier: 'Bronze',
    dealerType: 'Local Dealer', 
    region: '',
    commission: 5
  })

  // Campaign Management Data
  const [campaigns, setCampaigns] = useState([
    {
      id: 'winter2025',
      title: 'Kış Koleksiyonu İndirimi',
      description: 'Kış ürünlerinde %40\'a varan indirim fırsatı',
      discount: '40%',
      validUntil: '2025-02-28',
      image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg',
      category: 'outerwear',
      active: true
    },
    {
      id: 'luxury2025', 
      title: 'Luxury Brands Special',
      description: 'Premium markalarda özel fiyat avantajı',
      discount: '25%',
      validUntil: '2025-02-15',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      category: 'luxury',
      active: true
    },
    {
      id: 'spring2025',
      title: 'Bahar Hazırlığı',
      description: 'Yeni sezon ürünlerinde erken rezervasyon indirimi',
      discount: '15%',
      validUntil: '2025-03-31',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      category: 'clothing',
      active: true
    }
  ])

  // Social Media Integration
  const [socialPosts, setSocialPosts] = useState([
    {
      id: 'post1',
      title: 'Kış Koleksiyonu Lansmanı',
      content: 'Yeni kış koleksiyonumuz artık mağazalarımızda! Premium markalardan özel seçimler sizi bekliyor.',
      platform: 'facebook',
      image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg',
      scheduledDate: '2025-01-27',
      status: 'published',
      engagement: 1250
    },
    {
      id: 'post2',
      title: 'Burberry Trench Coat',
      content: 'Zamanless elegance with Burberry Heritage Trench Coat. Now available at Lazzali.',
      platform: 'instagram',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      scheduledDate: '2025-01-26',
      status: 'published',
      engagement: 3420
    },
    {
      id: 'post3',
      title: 'VIP Üyelere Özel',
      content: 'VIP Club üyelerimize özel %30 indirim fırsatı! Detaylar için mağazamızı ziyaret edin.',
      platform: 'whatsapp',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      scheduledDate: '2025-01-25',
      status: 'scheduled',
      engagement: 0
    }
  ])

  const [showAddCampaign, setShowAddCampaign] = useState(false)
  const [showCreatePost, setShowCreatePost] = useState(false)

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.brand || !newProduct.price) {
      alert('Lütfen zorunlu alanları doldurun')
      return
    }

    const product = {
      ...newProduct,
      id: newProduct.id || `product-${Date.now()}`,
      images: newProduct.images.filter(img => img.trim() !== ''),
    }

    setProductsList([...productsList, product])
    setNewProduct({
      id: '',
      name: '',
      brand: '',
      brandId: '',
      price: 0,
      category: '',
      subcategory: '',
      description: '',
      images: [''],
      sizes: [],
      colors: [],
      materials: [],
      inStock: true,
      isLimitedEdition: false,
      isNew: true,
      craftedIn: '',
      gender: 'unisex',
      sizeType: 'clothing'
    })
    setShowAddProduct(false)
    alert('Ürün başarıyla eklendi!')
  }

  const handleEditProduct = (product: any) => {
    setEditingProduct({
      ...product,
      gender: product.gender || 'unisex',
      sizeType: product.sizeType || 'clothing'
    })
    setShowEditProduct(true)
  }

  const handleUpdateProduct = () => {
    if (!editingProduct) return

    setProductsList(productsList.map((p: any) => 
      p.id === editingProduct.id ? editingProduct : p
    ))
    setShowEditProduct(false)
    setEditingProduct(null)
    alert('Ürün başarıyla güncellendi!')
  }

  const handleDeleteProduct = (productId: string) => {
    if (confirm('Bu ürünü silmek istediğinizden emin misiniz?')) {
      setProductsList(productsList.filter((p: any) => p.id !== productId))
      alert('Ürün başarıyla silindi!')
    }
  }

  const handleImportProducts = (importedData: any[]) => {
    const newProducts = importedData.map(data => ({
      ...data,
      id: data.id || `imported-${Date.now()}-${Math.random()}`,
      price: parseInt(data.price) || 0,
      originalPrice: data.originalPrice ? parseInt(data.originalPrice) : undefined,
      images: typeof data.images === 'string' ? data.images.split(',') : data.images || [''],
      sizes: typeof data.sizes === 'string' ? data.sizes.split(',') : data.sizes || [],
      colors: typeof data.colors === 'string' ? data.colors.split(',') : data.colors || [],
      materials: typeof data.materials === 'string' ? data.materials.split(',') : data.materials || [],
      inStock: data.inStock === 'true' || data.inStock === true,
      isLimitedEdition: data.isLimitedEdition === 'true' || data.isLimitedEdition === true,
      isNew: data.isNew === 'true' || data.isNew === true,
    }))
    
    setProductsList([...productsList, ...newProducts])
  }

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
              <li>
                <button
                  onClick={() => setActiveTab('loyalty')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'loyalty' 
                      ? 'bg-green-100 text-green-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Crown className="h-5 w-5" />
                  <span>MEN'S VIP CLUB</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('campaigns')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'campaigns' 
                      ? 'bg-green-100 text-green-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Percent className="h-5 w-5" />
                  <span>Kampanya Yönetimi</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('social')}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'social' 
                      ? 'bg-green-100 text-green-700' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Send className="h-5 w-5" />
                  <span>Sosyal Medya</span>
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'dashboard' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
                <ImportExportButtons
                  data={recentOrders}
                  filename="dashboard_orders"
                  entityName="sipariş"
                />
              </div>
              
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
                      <p className="text-2xl font-bold text-gray-900">{stats.totalRevenue.toLocaleString('tr-TR')} TL</p>
                      <p className="text-sm text-green-600">+{stats.todayRevenue.toLocaleString('tr-TR')} TL bugün</p>
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
                <div className="flex items-center space-x-4">
                  <ImportExportButtons
                    data={productsList}
                    filename="products"
                    onImport={handleImportProducts}
                    entityName="ürün"
                  />
                  <button 
                    onClick={() => setShowAddProduct(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Yeni Ürün</span>
                  </button>
                </div>
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
                      {productsList.map((product: any) => (
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
                              <button 
                                onClick={() => handleEditProduct(product)}
                                className="text-green-600 hover:text-green-800"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                              <button 
                                onClick={() => handleDeleteProduct(product.id)}
                                className="text-red-600 hover:text-red-800"
                              >
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
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Sipariş Yönetimi</h2>
                <ImportExportButtons
                  data={recentOrders}
                  filename="orders"
                  entityName="sipariş"
                />
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-600">Sipariş yönetimi sayfası geliştiriliyor...</p>
              </div>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Kullanıcı Yönetimi</h2>
                <ImportExportButtons
                  data={[{ id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com', type: 'VIP' }]}
                  filename="users"
                  entityName="kullanıcı"
                />
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-gray-600">Kullanıcı yönetimi sayfası geliştiriliyor...</p>
              </div>
            </div>
          )}

          {activeTab === 'loyalty' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Crown className="h-8 w-8 text-yellow-600" />
                  <h2 className="text-2xl font-bold text-gray-900">MEN'S VIP CLUB - Loyalty & Dealer System</h2>
                </div>
                <div className="flex items-center space-x-4">
                  <ImportExportButtons
                    data={vipMembers}
                    filename="vip_members"
                    entityName="VIP üye"
                  />
                  <button 
                    onClick={() => setShowAddMember(true)}
                    className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 flex items-center space-x-2"
                  >
                    <Crown className="h-4 w-4" />
                    <span>Yeni VIP Üye</span>
                  </button>
                </div>
              </div>

              {/* VIP Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 rounded-lg text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-yellow-100">Diamond Üyeler</p>
                      <p className="text-2xl font-bold">
                        {vipMembers.filter(m => m.tier === 'Diamond').length}
                      </p>
                    </div>
                    <Star className="h-8 w-8 text-yellow-200" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-400 to-gray-600 p-6 rounded-lg text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-100">Platinum Üyeler</p>
                      <p className="text-2xl font-bold">
                        {vipMembers.filter(m => m.tier === 'Platinum').length}
                      </p>
                    </div>
                    <Award className="h-8 w-8 text-gray-200" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-400 to-amber-600 p-6 rounded-lg text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-amber-100">Gold Üyeler</p>
                      <p className="text-2xl font-bold">
                        {vipMembers.filter(m => m.tier === 'Gold').length}
                      </p>
                    </div>
                    <Crown className="h-8 w-8 text-amber-200" />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-400 to-green-600 p-6 rounded-lg text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">Toplam Komisyon</p>
                      <p className="text-2xl font-bold">
                        {vipMembers.reduce((sum, member) => sum + (member.totalSpent * member.commission / 100), 0).toLocaleString('tr-TR')} TL
                      </p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-200" />
                  </div>
                </div>
              </div>

              {/* VIP Members Table */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">VIP Üyeler & Bayiler</h3>
                    <div className="flex items-center space-x-4">
                      <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                        <option value="">Tüm Seviyeler</option>
                        <option value="Diamond">Diamond</option>
                        <option value="Platinum">Platinum</option>
                        <option value="Gold">Gold</option>
                        <option value="Bronze">Bronze</option>
                      </select>
                      <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                        <option value="">Tüm Bayiler</option>
                        <option value="Premium Dealer">Premium Dealer</option>
                        <option value="Regional Dealer">Regional Dealer</option>
                        <option value="Local Dealer">Local Dealer</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Üye</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Seviye</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Bayi Tipi</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Puan</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Toplam Harcama</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Komisyon %</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Bölge</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">Durum</th>
                        <th className="text-left p-4 text-sm font-medium text-gray-600">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vipMembers.map(member => (
                        <tr key={member.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold ${
                                member.tier === 'Diamond' ? 'bg-yellow-500' :
                                member.tier === 'Platinum' ? 'bg-gray-500' :
                                member.tier === 'Gold' ? 'bg-amber-500' : 'bg-orange-500'
                              }`}>
                                {member.name.charAt(0)}
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{member.name}</p>
                                <p className="text-xs text-gray-500">{member.email}</p>
                                <p className="text-xs text-gray-500">{member.phone}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                              member.tier === 'Diamond' ? 'bg-yellow-100 text-yellow-800' :
                              member.tier === 'Platinum' ? 'bg-gray-100 text-gray-800' :
                              member.tier === 'Gold' ? 'bg-amber-100 text-amber-800' : 'bg-orange-100 text-orange-800'
                            }`}>
                              {member.tier === 'Diamond' ? '💎' : 
                               member.tier === 'Platinum' ? '⚪' :
                               member.tier === 'Gold' ? '🟡' : '🟤'} {member.tier}
                            </span>
                          </td>
                          <td className="p-4 text-sm text-gray-900">{member.dealerType}</td>
                          <td className="p-4 text-sm font-medium text-gray-900">
                            {member.points.toLocaleString('tr-TR')}
                          </td>
                          <td className="p-4 text-sm text-gray-900">
                            {member.totalSpent.toLocaleString('tr-TR')} TL
                          </td>
                          <td className="p-4 text-sm font-medium text-green-600">
                            %{member.commission}
                          </td>
                          <td className="p-4 text-sm text-gray-900">{member.region}</td>
                          <td className="p-4">
                            <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                              member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                            }`}>
                              {member.status === 'Active' ? 'Aktif' : 'Pasif'}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center space-x-2">
                              <button className="text-blue-600 hover:text-blue-800">
                                <Eye className="h-4 w-4" />
                              </button>
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

              {/* Loyalty Tiers Info */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-yellow-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">💎</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Diamond</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 50,000+ TL harcama</li>
                    <li>• %12 komisyon</li>
                    <li>• Premium Dealer statüsü</li>
                    <li>• Özel ürün erişimi</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">⚪</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Platinum</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 25,000+ TL harcama</li>
                    <li>• %8 komisyon</li>
                    <li>• Regional Dealer statüsü</li>
                    <li>• Öncelikli destek</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🟡</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Gold</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 10,000+ TL harcama</li>
                    <li>• %5 komisyon</li>
                    <li>• Local Dealer statüsü</li>
                    <li>• Ücretsiz kargo</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-orange-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🟤</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">Bronze</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 0+ TL harcama</li>
                    <li>• %2 komisyon</li>
                    <li>• Temel üye statüsü</li>
                    <li>• Puan biriktirme</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Campaigns Tab */}
          {activeTab === 'campaigns' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Kampanya Yönetimi</h2>
                <div className="flex space-x-3">
                  <ImportExportButtons
                    data={campaigns}
                    filename="campaigns"
                    entityName="kampanya"
                  />
                  <button
                    onClick={() => setShowAddCampaign(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Yeni Kampanya</span>
                  </button>
                </div>
              </div>

              {/* Active Campaigns Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Aktif Kampanyalar</p>
                      <p className="text-2xl font-bold text-gray-900">{campaigns.filter(c => c.active).length}</p>
                    </div>
                    <Percent className="h-8 w-8 text-red-600" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Ortalama İndirim</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {Math.round(campaigns.reduce((acc, c) => acc + parseInt(c.discount), 0) / campaigns.length)}%
                      </p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Kampanya Geliri</p>
                      <p className="text-2xl font-bold text-gray-900">87,450 TL</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
              </div>

              {/* Campaigns Table */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Tüm Kampanyalar</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kampanya</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İndirim</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bitiş Tarihi</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {campaigns.map(campaign => (
                        <tr key={campaign.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full object-cover" src={campaign.image} alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{campaign.title}</div>
                                <div className="text-sm text-gray-500">{campaign.description}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              -{campaign.discount}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize">{campaign.category}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{campaign.validUntil}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              campaign.active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {campaign.active ? 'Aktif' : 'Pasif'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-green-600 hover:text-green-900 mr-3">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Social Media Tab */}
          {activeTab === 'social' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Sosyal Medya Yönetimi</h2>
                <div className="flex space-x-3">
                  <ImportExportButtons
                    data={socialPosts}
                    filename="social_media_posts"
                    entityName="gönderi"
                  />
                  <button
                    onClick={() => setShowCreatePost(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Yeni Gönderi</span>
                  </button>
                </div>
              </div>

              {/* Social Media Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Facebook Gönderileri</p>
                      <p className="text-2xl font-bold text-gray-900">{socialPosts.filter(p => p.platform === 'facebook').length}</p>
                    </div>
                    <Facebook className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Instagram Gönderileri</p>
                      <p className="text-2xl font-bold text-gray-900">{socialPosts.filter(p => p.platform === 'instagram').length}</p>
                    </div>
                    <Instagram className="h-8 w-8 text-pink-600" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">WhatsApp Mesajları</p>
                      <p className="text-2xl font-bold text-gray-900">{socialPosts.filter(p => p.platform === 'whatsapp').length}</p>
                    </div>
                    <MessageCircle className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Toplam Etkileşim</p>
                      <p className="text-2xl font-bold text-gray-900">24,587</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-lg text-white">
                  <Facebook className="h-8 w-8 mb-3" />
                  <h3 className="font-semibold mb-2">Facebook'ta Paylaş</h3>
                  <p className="text-sm text-blue-100 mb-4">Yeni ürünleri ve kampanyaları Facebook'ta paylaş</p>
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 font-medium">
                    Gönderi Oluştur
                  </button>
                </div>

                <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-6 rounded-lg text-white">
                  <Instagram className="h-8 w-8 mb-3" />
                  <h3 className="font-semibold mb-2">Instagram'da Paylaş</h3>
                  <p className="text-sm text-pink-100 mb-4">Görsel içerikler ile Instagram'da etkileşim arttır</p>
                  <button className="bg-white text-pink-600 px-4 py-2 rounded-lg hover:bg-pink-50 font-medium">
                    Story/Post Oluştur
                  </button>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-lg text-white">
                  <MessageCircle className="h-8 w-8 mb-3" />
                  <h3 className="font-semibold mb-2">WhatsApp Kampanyası</h3>
                  <p className="text-sm text-green-100 mb-4">VIP üyelere özel kampanya mesajları gönder</p>
                  <button className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 font-medium">
                    Mesaj Gönder
                  </button>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Son Paylaşımlar</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İçerik</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Etkileşim</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {socialPosts.map(post => (
                        <tr key={post.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-lg object-cover" src={post.image} alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{post.title}</div>
                                <div className="text-sm text-gray-500">{post.content.substring(0, 50)}...</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {post.platform === 'facebook' && <Facebook className="h-5 w-5 text-blue-600 mr-2" />}
                              {post.platform === 'instagram' && <Instagram className="h-5 w-5 text-pink-600 mr-2" />}
                              {post.platform === 'whatsapp' && <MessageCircle className="h-5 w-5 text-green-600 mr-2" />}
                              <span className="capitalize">{post.platform}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{post.scheduledDate}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              post.status === 'published' ? 'bg-green-100 text-green-800' : 
                              post.status === 'scheduled' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {post.status === 'published' ? 'Yayınlandı' : 
                               post.status === 'scheduled' ? 'Zamanlandı' : 'Taslak'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{post.engagement || 0}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">
                              <Edit className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Add Product Modal */}
      {showAddProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Yeni Ürün Ekle</h3>
              <button
                onClick={() => setShowAddProduct(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ürün Adı *</label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Ürün adını girin"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Marka *</label>
                  <select
                    value={newProduct.brandId}
                    onChange={(e) => {
                      const selectedBrand = brands.find((b: any) => b.id === e.target.value)
                      setNewProduct({
                        ...newProduct, 
                        brandId: e.target.value,
                        brand: selectedBrand?.name || ''
                      })
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Marka seçin</option>
                    {brands.map((brand: any) => (
                      <option key={brand.id} value={brand.id}>{brand.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fiyat *</label>
                  <input
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({...newProduct, price: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Fiyat girin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Kategori seçin</option>
                    <option value="clothing">Giyim</option>
                    <option value="footwear">Ayakkabı</option>
                    <option value="accessories">Aksesuar</option>
                    <option value="outerwear">Dış Giyim</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Alt Kategori</label>
                  <input
                    type="text"
                    value={newProduct.subcategory}
                    onChange={(e) => setNewProduct({...newProduct, subcategory: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Alt kategori"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Üretim Yeri</label>
                  <input
                    type="text"
                    value={newProduct.craftedIn}
                    onChange={(e) => setNewProduct({...newProduct, craftedIn: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Üretim yeri"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Ürün açıklaması"
                />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedenler (virgülle ayırın)</label>
                  <input
                    type="text"
                    onChange={(e) => setNewProduct({...newProduct, sizes: e.target.value.split(',').map(s => s.trim())})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="S, M, L, XL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Renkler (virgülle ayırın)</label>
                  <input
                    type="text"
                    onChange={(e) => setNewProduct({...newProduct, colors: e.target.value.split(',').map(c => c.trim())})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Siyah, Beyaz, Mavi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Malzemeler (virgülle ayırın)</label>
                  <input
                    type="text"
                    onChange={(e) => setNewProduct({...newProduct, materials: e.target.value.split(',').map(m => m.trim())})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Cotton, Polyester"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center space-x-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newProduct.inStock}
                    onChange={(e) => setNewProduct({...newProduct, inStock: e.target.checked})}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Stokta</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newProduct.isNew}
                    onChange={(e) => setNewProduct({...newProduct, isNew: e.target.checked})}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Yeni Ürün</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={newProduct.isLimitedEdition}
                    onChange={(e) => setNewProduct({...newProduct, isLimitedEdition: e.target.checked})}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Sınırlı Edisyon</span>
                </label>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => setShowAddProduct(false)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                İptal
              </button>
              <button
                onClick={handleAddProduct}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>Ürün Ekle</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {showEditProduct && editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Ürün Düzenle</h3>
              <button
                onClick={() => {
                  setShowEditProduct(false)
                  setEditingProduct(null)
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ürün Adı *</label>
                  <input
                    type="text"
                    value={editingProduct.name}
                    onChange={(e) => setEditingProduct({...editingProduct, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Ürün adını girin"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Marka *</label>
                  <select
                    value={editingProduct.brandId}
                    onChange={(e) => {
                      const selectedBrand = brands.find((b: any) => b.id === e.target.value)
                      setEditingProduct({
                        ...editingProduct, 
                        brandId: e.target.value,
                        brand: selectedBrand?.name || ''
                      })
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Marka seçin</option>
                    {brands.map((brand: any) => (
                      <option key={brand.id} value={brand.id}>{brand.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fiyat *</label>
                  <input
                    type="number"
                    value={editingProduct.price}
                    onChange={(e) => setEditingProduct({...editingProduct, price: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Fiyat girin"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kategori</label>
                  <select
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({...editingProduct, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Kategori seçin</option>
                    <option value="clothing">Giyim</option>
                    <option value="footwear">Ayakkabı</option>
                    <option value="accessories">Aksesuar</option>
                    <option value="outerwear">Dış Giyim</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Alt Kategori</label>
                  <input
                    type="text"
                    value={editingProduct.subcategory}
                    onChange={(e) => setEditingProduct({...editingProduct, subcategory: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Alt kategori"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Üretim Yeri</label>
                  <input
                    type="text"
                    value={editingProduct.craftedIn}
                    onChange={(e) => setEditingProduct({...editingProduct, craftedIn: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Üretim yeri"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Açıklama</label>
                <textarea
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({...editingProduct, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Ürün açıklaması"
                />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bedenler (virgülle ayırın)</label>
                  <input
                    type="text"
                    value={editingProduct.sizes.join(', ')}
                    onChange={(e) => setEditingProduct({...editingProduct, sizes: e.target.value.split(',').map(s => s.trim())})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="S, M, L, XL"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Renkler (virgülle ayırın)</label>
                  <input
                    type="text"
                    value={editingProduct.colors.join(', ')}
                    onChange={(e) => setEditingProduct({...editingProduct, colors: e.target.value.split(',').map(c => c.trim())})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Siyah, Beyaz, Mavi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Malzemeler (virgülle ayırın)</label>
                  <input
                    type="text"
                    value={editingProduct.materials.join(', ')}
                    onChange={(e) => setEditingProduct({...editingProduct, materials: e.target.value.split(',').map(m => m.trim())})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Cotton, Polyester"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center space-x-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editingProduct.inStock}
                    onChange={(e) => setEditingProduct({...editingProduct, inStock: e.target.checked})}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Stokta</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editingProduct.isNew}
                    onChange={(e) => setEditingProduct({...editingProduct, isNew: e.target.checked})}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Yeni Ürün</span>
                </label>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={editingProduct.isLimitedEdition}
                    onChange={(e) => setEditingProduct({...editingProduct, isLimitedEdition: e.target.checked})}
                    className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Sınırlı Edisyon</span>
                </label>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end space-x-4">
              <button
                onClick={() => {
                  setShowEditProduct(false)
                  setEditingProduct(null)
                }}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                İptal
              </button>
              <button
                onClick={handleUpdateProduct}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
              >
                <Save className="h-4 w-4" />
                <span>Güncelle</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}