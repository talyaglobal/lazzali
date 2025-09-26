import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Lazzali - Luxury Menswear Collection',
  description: 'Discover the world\'s finest luxury menswear from heritage brands. Premium fashion, exceptional craftsmanship, and sophisticated style for the modern gentleman.',
  keywords: 'luxury menswear, designer clothing, premium fashion, Prada, Moncler, Burberry, high-end fashion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfairDisplay.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}