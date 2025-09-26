export interface Brand {
  id: string
  name: string
  description: string
  logo: string
  heritage: string
  founded: number
  country: string
  category: 'ultra-luxury' | 'contemporary' | 'accessible-premium'
}

export interface Product {
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
}

export interface CartItem {
  id: string
  productId: string
  name: string
  brand: string
  price: number
  image: string
  size: string
  color: string
  quantity: number
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  membershipTier: 'standard' | 'vip' | 'elite'
  preferences: {
    brands: string[]
    categories: string[]
    priceRange: [number, number]
  }
}

export interface FilterState {
  brands: string[]
  categories: string[]
  priceRange: [number, number]
  sizes: string[]
  colors: string[]
  materials: string[]
  inStock: boolean
  isNew: boolean
  isLimitedEdition: boolean
}