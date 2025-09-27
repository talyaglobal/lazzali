import { Brand, Product } from '@/types'

export const brands: Brand[] = [
  {
    id: 'prada',
    name: 'Prada',
    description: 'Yenilikçi malzemeler ve ilerici tasarımlarıyla tanınan İtalyan lüks moda evi',
    logo: '/brands/prada.png',
    heritage: '1913\'te Milano\'da kurulan Prada, lüks ve yenilikçiliğin eş anlamlısı haline gelmiştir.',
    founded: 1913,
    country: 'Italy',
    category: 'ultra-luxury'
  },
  {
    id: 'moncler',
    name: 'Moncler',
    description: 'Alp geleneğini çağdaş lüksle birleştiren premium dış giyim markası',
    logo: '/brands/moncler.svg',
    heritage: 'Fransız Alplerinde doğan Moncler, şehirli kaşifler için olağanüstü dış giyim üretiyor.',
    founded: 1952,
    country: 'France',
    category: 'ultra-luxury'
  },
  {
    id: 'burberry',
    name: 'Burberry',
    description: 'Ikonik trench coat ve miras desenleriyle ünlü İngiliz lüks moda evi',
    logo: '/brands/burberry.png',
    heritage: '1856\'dan beri İngiliz ikonu olan Burberry, zamansız zarafet ve yenilikçi işçiliği tanımlıyor.',
    founded: 1856,
    country: 'United Kingdom',
    category: 'ultra-luxury'
  },
  {
    id: 'dolce-gabbana',
    name: 'Dolce & Gabbana',
    description: 'İtalyan kültürü ve işçiliğini kutlayan Sicilya lüks modası',
    logo: '/brands/dolce-gabbana.png',
    heritage: '1985\'ten beri lüks moda aracılığıyla Sicilya kültürünü kutluyor.',
    founded: 1985,
    country: 'Italy',
    category: 'ultra-luxury'
  },
  {
    id: 'stone-island',
    name: 'Stone Island',
    description: 'Teknik inovasyon ve kumaş araştırmasıyla ünlü İtalyan spor giyim markası',
    logo: '/brands/stone-island.png',
    heritage: '1982\'den beri yenilikçi malzemelerle teknik giyim öncülüğü yapıyor.',
    founded: 1982,
    country: 'Italy',
    category: 'contemporary'
  },
  {
    id: 'tommy-hilfiger',
    name: 'Tommy Hilfiger',
    description: 'Preppy sofistikasyona sahip Amerikan premium yaşam tarzı markası',
    logo: '/brands/tommy.png',
    heritage: '1985\'ten beri preppy zarafetle Amerikan havalılığını tanımlıyor.',
    founded: 1985,
    country: 'United States',
    category: 'contemporary'
  },
  {
    id: 'calvin-klein',
    name: 'Calvin Klein',
    description: 'Temiz çizgiler ve modern estetikle minimalist Amerikan lüksü',
    logo: '/brands/calvin.png',
    heritage: '1968\'den beri minimalist lüksün öncüsü.',
    founded: 1968,
    country: 'United States',
    category: 'contemporary'
  },
  {
    id: 'lacoste',
    name: 'Lacoste',
    description: 'Tenis mirası ve zamansız polo gömlekleriyle Fransız zarafeti',
    logo: '/brands/lacoste.png',
    heritage: '1933\'ten beri tenis zarafeti ve Fransız sofistikasyonu.',
    founded: 1933,
    country: 'France',
    category: 'accessible-premium'
  },
  {
    id: 'nike',
    name: 'Nike',
    description: 'Premium yaşam tarzı koleksiyonlarıyla atletik lüks',
    logo: '/brands/nike.png',
    heritage: 'Just Do It - 1971\'den beri yenilikçilik ve atletik mükemmellik.',
    founded: 1971,
    country: 'United States',
    category: 'accessible-premium'
  },
  {
    id: 'adidas',
    name: 'Adidas',
    description: 'Alman mühendisliği sokak lüksü ve performansla buluşuyor',
    logo: '/brands/adidas.png',
    heritage: '1949\'dan beri mükemmelliğin üç çizgisi.',
    founded: 1949,
    country: 'Germany',
    category: 'accessible-premium'
  },
  {
    id: 'timberland',
    name: 'Timberland',
    description: 'Premium işçilik ve sürdürülebilirlikle outdoor mirası',
    logo: '/brands/timberland.png',
    heritage: '1973\'ten beri doğa için yapıldı, kalıcı olacak şekilde tasarlandı.',
    founded: 1973,
    country: 'United States',
    category: 'accessible-premium'
  },
  {
    id: 'columbia',
    name: 'Columbia',
    description: 'Lüks konumlandırma ve inovasyonla teknik outdoor giyim',
    logo: '/brands/columbia.png',
    heritage: '1938\'den beri Pasifik Kuzeybatı outdoor inovasyonu.',
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
  },

  // Ev Tekstili Products - Home Textiles
  {
    id: 'luxury-bathrobe-001',
    name: 'Premium Egyptian Cotton Bathrobe',
    brand: 'Lazzali Home',
    brandId: 'lazzali-home',
    price: 349,
    category: 'home-textiles',
    subcategory: 'bathrobes',
    description: 'Lüks Mısır pamuğu bornoz. Yumuşak dokulu, emici ve konforlu. Spa kalitesinde ev deneyimi.',
    images: [
      'https://images.pexels.com/photos/6045328/pexels-photo-6045328.jpeg',
      'https://images.pexels.com/photos/6045344/pexels-photo-6045344.jpeg'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Cream', 'Navy', 'Grey'],
    materials: ['100% Egyptian Cotton'],
    inStock: true,
    isLimitedEdition: false,
    isNew: true,
    craftedIn: 'Turkey'
  },
  {
    id: 'luxury-towel-set-001',
    name: 'Premium Turkish Cotton Towel Set',
    brand: 'Lazzali Home',
    brandId: 'lazzali-home',
    price: 199,
    category: 'home-textiles',
    subcategory: 'towels',
    description: '6 parça lüks Türk pamuğu havlu seti. 2 banyo havlusu, 2 el havlusu, 2 yüz havlusu.',
    images: [
      'https://images.pexels.com/photos/6045357/pexels-photo-6045357.jpeg',
      'https://images.pexels.com/photos/6045380/pexels-photo-6045380.jpeg'
    ],
    sizes: ['Standard'],
    colors: ['White', 'Cream', 'Stone Grey', 'Soft Blue'],
    materials: ['100% Turkish Cotton'],
    inStock: true,
    isLimitedEdition: false,
    isNew: true,
    craftedIn: 'Turkey'
  },
  {
    id: 'luxury-sheet-set-001',
    name: 'Percale Cotton Sheet Set',
    brand: 'Lazzali Home',
    brandId: 'lazzali-home',
    price: 289,
    category: 'home-textiles',
    subcategory: 'bed-sheets',
    description: 'Premium perkal pamuk çarşaf takımı. Nefes alabilir, serin ve dayanıklı. 4 parça set.',
    images: [
      'https://images.pexels.com/photos/6045462/pexels-photo-6045462.jpeg',
      'https://images.pexels.com/photos/6045488/pexels-photo-6045488.jpeg'
    ],
    sizes: ['Single', 'Double', 'King', 'Super King'],
    colors: ['White', 'Off-White', 'Stone', 'Sage Green'],
    materials: ['100% Percale Cotton'],
    inStock: true,
    isLimitedEdition: false,
    isNew: true,
    craftedIn: 'Portugal'
  },
  {
    id: 'silk-pillowcase-set-001',
    name: 'Mulberry Silk Pillowcase Set',
    brand: 'Lazzali Home',
    brandId: 'lazzali-home',
    price: 159,
    category: 'home-textiles',
    subcategory: 'pillowcases',
    description: 'İpek yastık kılıfı çifti. Saça ve cilde bakım etkisi. Termostat özellikli.',
    images: [
      'https://images.pexels.com/photos/6045512/pexels-photo-6045512.jpeg',
      'https://images.pexels.com/photos/6045535/pexels-photo-6045535.jpeg'
    ],
    sizes: ['Standard', 'King'],
    colors: ['Champagne', 'Pearl Grey', 'Ivory', 'Blush Pink'],
    materials: ['100% Mulberry Silk'],
    inStock: true,
    isLimitedEdition: true,
    isNew: true,
    craftedIn: 'China'
  },
  {
    id: 'cashmere-throw-001',
    name: 'Cashmere Throw Blanket',
    brand: 'Lazzali Home',
    brandId: 'lazzali-home',
    price: 449,
    category: 'home-textiles',
    subcategory: 'throws',
    description: 'Yumuşak kaşmir battaniye. Sıcak, hafif ve lüks. Oturma odası ve yatak odası için ideal.',
    images: [
      'https://images.pexels.com/photos/6045598/pexels-photo-6045598.jpeg',
      'https://images.pexels.com/photos/6045615/pexels-photo-6045615.jpeg'
    ],
    sizes: ['Standard'],
    colors: ['Camel', 'Grey', 'Cream', 'Navy'],
    materials: ['100% Cashmere'],
    inStock: true,
    isLimitedEdition: true,
    isNew: false,
    craftedIn: 'Scotland'
  },
  {
    id: 'luxury-duvet-set-001',
    name: 'Down Alternative Duvet Set',
    brand: 'Lazzali Home',
    brandId: 'lazzali-home',
    price: 389,
    category: 'home-textiles',
    subcategory: 'duvets',
    description: 'Hypoalerjenik sentetik tüylü yorgan seti. Çok katmanlı, sıcak ve yıkanabilir.',
    images: [
      'https://images.pexels.com/photos/6045678/pexels-photo-6045678.jpeg',
      'https://images.pexels.com/photos/6045695/pexels-photo-6045695.jpeg'
    ],
    sizes: ['Single', 'Double', 'King'],
    colors: ['White', 'Natural'],
    materials: ['Microfiber Fill', 'Cotton Cover'],
    inStock: true,
    isLimitedEdition: false,
    isNew: true,
    craftedIn: 'Germany'
  },

  // Perfume Products - Parfüm Ürünleri
  {
    id: 'chanel-no5-parfum-001',
    name: 'Chanel N°5 Eau de Parfum',
    brand: 'Chanel',
    brandId: 'chanel',
    price: 1299,
    category: 'accessories',
    subcategory: 'perfumes',
    description: 'İkonik N°5 parfümü. Zamansız elegans ve sofistike kadınlığın simgesi. 100ml.',
    images: [
      'https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg',
      'https://images.pexels.com/photos/1190830/pexels-photo-1190830.jpeg'
    ],
    sizes: ['50ml', '100ml', '150ml'],
    colors: ['Gold'],
    materials: ['Glass', 'Fragrance'],
    inStock: true,
    isLimitedEdition: false,
    isNew: false,
    craftedIn: 'France'
  },
  {
    id: 'dior-sauvage-parfum-001',
    name: 'Dior Sauvage Eau de Parfum',
    brand: 'Dior',
    brandId: 'dior',
    price: 1149,
    category: 'accessories',
    subcategory: 'perfumes',
    description: 'Erkek parfümü. Vahşi ve serbest ruh. Bergamot, ambroxan ve vanilla notaları.',
    images: [
      'https://images.pexels.com/photos/1070849/pexels-photo-1070849.jpeg',
      'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg'
    ],
    sizes: ['60ml', '100ml', '200ml'],
    colors: ['Blue'],
    materials: ['Glass', 'Fragrance'],
    inStock: true,
    isLimitedEdition: false,
    isNew: true,
    craftedIn: 'France'
  },
  {
    id: 'tom-ford-oud-wood-001',
    name: 'Tom Ford Oud Wood',
    brand: 'Tom Ford',
    brandId: 'tom-ford',
    price: 2299,
    category: 'accessories',
    subcategory: 'perfumes',
    description: 'Lüks unisex parfüm. Oud, gül ağacı ve sandal ağacı karışımı. Egzotik ve sıcak.',
    images: [
      'https://images.pexels.com/photos/1381560/pexels-photo-1381560.jpeg',
      'https://images.pexels.com/photos/1381561/pexels-photo-1381561.jpeg'
    ],
    sizes: ['50ml', '100ml'],
    colors: ['Brown'],
    materials: ['Glass', 'Fragrance'],
    inStock: true,
    isLimitedEdition: true,
    isNew: false,
    craftedIn: 'USA'
  },
  {
    id: 'ysl-libre-parfum-001',
    name: 'Yves Saint Laurent Libre',
    brand: 'Yves Saint Laurent',
    brandId: 'ysl',
    price: 1049,
    category: 'accessories',
    subcategory: 'perfumes',
    description: 'Kadın parfümü. Özgürlük ve cesaret. Lavanta, portakal çiçeği ve vanilya.',
    images: [
      'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg',
      'https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg'
    ],
    sizes: ['30ml', '50ml', '90ml'],
    colors: ['Gold'],
    materials: ['Glass', 'Fragrance'],
    inStock: true,
    isLimitedEdition: false,
    isNew: true,
    craftedIn: 'France'
  },
  {
    id: 'versace-eros-parfum-001',
    name: 'Versace Eros Flame',
    brand: 'Versace',
    brandId: 'versace',
    price: 899,
    category: 'accessories',
    subcategory: 'perfumes',
    description: 'Ateşli erkek parfümü. Turuncu, karabiber, vanilya ve tonka fasulyesi.',
    images: [
      'https://images.pexels.com/photos/1070842/pexels-photo-1070842.jpeg',
      'https://images.pexels.com/photos/1070843/pexels-photo-1070843.jpeg'
    ],
    sizes: ['50ml', '100ml', '200ml'],
    colors: ['Red'],
    materials: ['Glass', 'Fragrance'],
    inStock: true,
    isLimitedEdition: false,
    isNew: false,
    craftedIn: 'Italy'
  },
  {
    id: 'creed-aventus-parfum-001',
    name: 'Creed Aventus',
    brand: 'Creed',
    brandId: 'creed',
    price: 3499,
    category: 'accessories',
    subcategory: 'perfumes',
    description: 'Prestijli erkek parfümü. Ananas, elma, karabiber ve sandal ağacı. Güç ve başarı.',
    images: [
      'https://images.pexels.com/photos/1381559/pexels-photo-1381559.jpeg',
      'https://images.pexels.com/photos/1381558/pexels-photo-1381558.jpeg'
    ],
    sizes: ['50ml', '100ml', '250ml'],
    colors: ['Silver'],
    materials: ['Glass', 'Fragrance'],
    inStock: true,
    isLimitedEdition: true,
    isNew: true,
    craftedIn: 'France'
  }
]

export const categories = [
  { id: 'outerwear', name: 'Outerwear', count: 45 },
  { id: 'clothing', name: 'Clothing', count: 128 },
  { id: 'footwear', name: 'Footwear', count: 67 },
  { id: 'accessories', name: 'Accessories', count: 95 },
  { id: 'bags', name: 'Bags', count: 34 },
  { id: 'watches', name: 'Watches', count: 23 },
  { id: 'home-textiles', name: 'Home Textiles', count: 6 }
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