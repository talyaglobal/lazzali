import { Brand, Product } from '@/types'

export const brands: Brand[] = [
  {
    id: 'prada',
    name: 'Prada',
    description: 'Yenilikçi malzemeler ve ilerici tasarımlarıyla tanınan İtalyan lüks moda evi',
    logo: '/brands/prada.png',
    heritage: 'Founded in Milan, Prada has been synonymous with luxury and innovation since 1913.',
    founded: 1913,
    country: 'Italy',
    category: 'ultra-luxury'
  },
  {
    id: 'moncler',
    name: 'Moncler',
    description: 'Alp geleneğini çağdaş lüksle birleştiren premium dış giyim markası',
    logo: '/brands/moncler.svg',
    heritage: 'Born in the French Alps, Moncler creates exceptional outerwear for urban explorers.',
    founded: 1952,
    country: 'France',
    category: 'ultra-luxury'
  },
  {
    id: 'burberry',
    name: 'Burberry',
    description: 'Ikonik trench coat ve miras desenleriyle ünlü İngiliz lüks moda evi',
    logo: '/brands/burberry.png',
    heritage: 'A British icon since 1856, defining timeless elegance and innovative craftsmanship.',
    founded: 1856,
    country: 'United Kingdom',
    category: 'ultra-luxury'
  },
  {
    id: 'dolce-gabbana',
    name: 'Dolce & Gabbana',
    description: 'İtalyan kültürü ve işçiliğini kutlayan Sicilya lüks modası',
    logo: '/brands/DG.png',
    heritage: 'Celebrating Sicilian culture through luxury fashion since 1985.',
    founded: 1985,
    country: 'Italy',
    category: 'ultra-luxury'
  },
  {
    id: 'stone-island',
    name: 'Stone Island',
    description: 'Teknik inovasyon ve kumaş araştırmasıyla ünlü İtalyan spor giyim markası',
    logo: '/brands/stone-island.png',
    heritage: 'Pioneering technical clothing with innovative materials since 1982.',
    founded: 1982,
    country: 'Italy',
    category: 'contemporary'
  },
  {
    id: 'tommy-hilfiger',
    name: 'Tommy Hilfiger',
    description: 'Preppy sofistikasyona sahip Amerikan premium yaşam tarzı markası',
    logo: '/brands/tommy.png',
    heritage: 'Defining American cool with preppy elegance since 1985.',
    founded: 1985,
    country: 'United States',
    category: 'contemporary'
  },
  {
    id: 'calvin-klein',
    name: 'Calvin Klein',
    description: 'Temiz çizgiler ve modern estetikle minimalist Amerikan lüksü',
    logo: '/brands/calvin.png',
    heritage: 'Pioneering minimalist luxury since 1968.',
    founded: 1968,
    country: 'United States',
    category: 'contemporary'
  },
  {
    id: 'lacoste',
    name: 'Lacoste',
    description: 'Tenis mirası ve zamansız polo gömlekleriyle Fransız zarafeti',
    logo: '/brands/lacoste.png',
    heritage: 'Tennis elegance and French sophistication since 1933.',
    founded: 1933,
    country: 'France',
    category: 'accessible-premium'
  },
  {
    id: 'nike',
    name: 'Nike',
    description: 'Premium yaşam tarzı koleksiyonlarıyla atletik lüks',
    logo: '/brands/nike.png',
    heritage: 'Just Do It - Innovation and athletic excellence since 1971.',
    founded: 1971,
    country: 'United States',
    category: 'accessible-premium'
  },
  {
    id: 'adidas',
    name: 'Adidas',
    description: 'Alman mühendisliği sokak lüksü ve performansla buluşuyor',
    logo: '/brands/adidas.png',
    heritage: 'The three stripes of excellence since 1949.',
    founded: 1949,
    country: 'Germany',
    category: 'accessible-premium'
  },
  {
    id: 'timberland',
    name: 'Timberland',
    description: 'Premium işçilik ve sürdürülebilirlikle outdoor mirası',
    logo: '/brands/timberland.png',
    heritage: 'Built for the outdoors, crafted to last since 1973.',
    founded: 1973,
    country: 'United States',
    category: 'accessible-premium'
  },
  {
    id: 'columbia',
    name: 'Columbia',
    description: 'Lüks konumlandırma ve inovasyonla teknik outdoor giyim',
    logo: '/brands/columbia.png',
    heritage: 'Pacific Northwest outdoor innovation since 1938.',
    founded: 1938,
    country: 'United States',
    category: 'accessible-premium'
  }
]

export const products: Product[] = [
  // Prada Products
  {
    id: 'prada-nylon-jacket-001',
    name: 'Re-Nylon Gabardine Jacket',
    brand: 'Prada',
    brandId: 'prada',
    price: 2850,
    category: 'outerwear',
    subcategory: 'jackets',
    description: 'Innovative Re-Nylon gabardine jacket with sleek silhouette and technical functionality.',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    materials: ['Re-Nylon', 'Gabardine'],
    inStock: true,
    isLimitedEdition: false,
    isNew: true,
    craftedIn: 'Italy'
  },
  {
    id: 'prada-leather-loafers-001',
    name: 'Saffiano Leather Penny Loafers',
    brand: 'Prada',
    brandId: 'prada',
    price: 1200,
    category: 'footwear',
    subcategory: 'loafers',
    description: 'Classic penny loafers in signature Saffiano leather with timeless elegance.',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg'
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    colors: ['Black', 'Brown'],
    materials: ['Saffiano Leather'],
    inStock: true,
    isLimitedEdition: false,
    isNew: false,
    craftedIn: 'Italy'
  },
  
  // Moncler Products
  {
    id: 'moncler-down-jacket-001',
    name: 'Maya Down Jacket',
    brand: 'Moncler',
    brandId: 'moncler',
    price: 1650,
    category: 'outerwear',
    subcategory: 'down-jackets',
    description: 'Iconic shiny nylon down jacket with signature quilting and premium goose down.',
    images: [
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Red'],
    materials: ['Nylon', 'Goose Down'],
    inStock: true,
    isLimitedEdition: false,
    isNew: true,
    craftedIn: 'Europe'
  },
  
  // Burberry Products
  {
    id: 'burberry-trench-coat-001',
    name: 'Heritage Trench Coat',
    brand: 'Burberry',
    brandId: 'burberry',
    price: 2390,
    originalPrice: 2590,
    category: 'outerwear',
    subcategory: 'trench-coats',
    description: 'The iconic Burberry trench coat in cotton gabardine with heritage check lining.',
    images: [
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Honey', 'Black', 'Navy'],
    materials: ['Cotton Gabardine'],
    inStock: true,
    isLimitedEdition: false,
    isNew: false,
    craftedIn: 'United Kingdom'
  },
  
  // Stone Island Products
  {
    id: 'stone-island-hoodie-001',
    name: 'Garment Dyed Hoodie',
    brand: 'Stone Island',
    brandId: 'stone-island',
    price: 425,
    category: 'clothing',
    subcategory: 'hoodies',
    description: 'Premium cotton hoodie with signature compass badge and garment dyeing process.',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Olive', 'Navy', 'White'],
    materials: ['Cotton'],
    inStock: true,
    isLimitedEdition: false,
    isNew: true,
    craftedIn: 'Italy'
  },
  
  // Nike Products
  {
    id: 'nike-air-max-001',
    name: 'Air Max 90 Premium',
    brand: 'Nike',
    brandId: 'nike',
    price: 340,
    category: 'footwear',
    subcategory: 'sneakers',
    description: 'Classic Air Max 90 with premium materials and iconic visible air cushioning.',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg'
    ],
    sizes: ['40', '41', '42', '43', '44', '45', '46'],
    colors: ['White', 'Black', 'Grey'],
    materials: ['Leather', 'Suede', 'Mesh'],
    inStock: true,
    isLimitedEdition: false,
    isNew: false,
    craftedIn: 'Vietnam'
  },
  
  // Tommy Hilfiger Products
  {
    id: 'tommy-polo-001',
    name: 'Classic Fit Polo Shirt',
    brand: 'Tommy Hilfiger',
    brandId: 'tommy-hilfiger',
    price: 89,
    category: 'clothing',
    subcategory: 'polo-shirts',
    description: 'Timeless polo shirt in premium pique cotton with signature flag logo.',
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
      'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'White', 'Red', 'Light Blue'],
    materials: ['Cotton Pique'],
    inStock: true,
    isLimitedEdition: false,
    isNew: false,
    craftedIn: 'Turkey'
  }
]

export const categories = [
  { id: 'outerwear', name: 'Outerwear', count: 45 },
  { id: 'clothing', name: 'Clothing', count: 128 },
  { id: 'footwear', name: 'Footwear', count: 67 },
  { id: 'accessories', name: 'Accessories', count: 89 },
  { id: 'bags', name: 'Bags', count: 34 },
  { id: 'watches', name: 'Watches', count: 23 }
]

export const featuredCollections = [
  {
    id: 'winter-luxury',
    name: 'Winter Luxury',
    description: 'Premium outerwear for the discerning gentleman',
    image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg',
    productCount: 24
  },
  {
    id: 'italian-craftsmanship',
    name: 'Italian Craftsmanship',
    description: 'Heritage pieces from Italy\'s finest ateliers',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg',
    productCount: 18
  },
  {
    id: 'athletic-luxury',
    name: 'Athletic Luxury',
    description: 'Where performance meets premium style',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    productCount: 32
  }
]