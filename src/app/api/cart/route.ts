// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { cookies } from 'next/headers'

// Helper function to get user from session
async function getUser(request: NextRequest) {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('supabase-auth-token')?.value
  
  if (sessionToken) {
    const { data: { user } } = await supabase.auth.getUser(sessionToken)
    return user
  }
  return null
}

// GET /api/cart - Get user's cart items
export async function GET(request: NextRequest) {
  try {
    const user = await getUser(request)
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId')

    if (!user && !sessionId) {
      return NextResponse.json(
        { error: 'User session or session ID required' },
        { status: 401 }
      )
    }

    // Find or create cart
    let cartQuery = supabase.from('cart').select('id')
    
    if (user) {
      cartQuery = cartQuery.eq('user_id', user.id)
    } else {
      cartQuery = cartQuery.eq('session_id', sessionId)
    }

    const { data: carts } = await cartQuery
    
    if (!carts || carts.length === 0) {
      return NextResponse.json({ data: [] })
    }

    const cartId = carts[0].id

    // Get cart items with product details
    const { data, error } = await supabase
      .from('cart_items')
      .select(`
        *,
        products:product_id (
          id,
          name,
          slug,
          price,
          currency,
          brands:brand_id (name),
          product_images!inner (url, alt_text, is_primary)
        )
      `)
      .eq('cart_id', cartId)
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch cart items' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })

  } catch (error) {
    console.error('Cart API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/cart - Add item to cart
export async function POST(request: NextRequest) {
  try {
    const user = await getUser(request)
    const body = await request.json()
    const { productId, quantity = 1, sessionId } = body

    if (!user && !sessionId) {
      return NextResponse.json(
        { error: 'User session or session ID required' },
        { status: 401 }
      )
    }

    // Get product details
    const { data: product, error: productError } = await supabase
      .from('products')
      .select('id, price, is_active')
      .eq('id', productId)
      .single()

    if (productError || !product || !product.is_active) {
      return NextResponse.json(
        { error: 'Product not found or inactive' },
        { status: 404 }
      )
    }

    // Find or create cart
    let cart
    let cartQuery = supabase.from('cart').select('id')
    
    if (user) {
      cartQuery = cartQuery.eq('user_id', user.id)
    } else {
      cartQuery = cartQuery.eq('session_id', sessionId)
    }

    const { data: existingCarts } = await cartQuery

    if (existingCarts && existingCarts.length > 0) {
      cart = existingCarts[0]
    } else {
      // Create new cart
      const { data: newCart, error: cartError } = await supabase
        .from('cart')
        .insert([{
          user_id: user?.id,
          session_id: !user ? sessionId : null
        }])
        .select('id')
        .single()

      if (cartError) {
        return NextResponse.json(
          { error: 'Failed to create cart' },
          { status: 500 }
        )
      }

      cart = newCart
    }

    // Check if item already exists in cart
    const { data: existingItems } = await supabase
      .from('cart_items')
      .select('id, quantity')
      .eq('cart_id', cart.id)
      .eq('product_id', productId)

    let result
    if (existingItems && existingItems.length > 0) {
      // Update existing item quantity
      const { data, error } = await supabase
        .from('cart_items')
        .update({ 
          quantity: existingItems[0].quantity + quantity,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingItems[0].id)
        .select()
        .single()

      result = { data, error }
    } else {
      // Add new item to cart
      const { data, error } = await supabase
        .from('cart_items')
        .insert([{
          cart_id: cart.id,
          product_id: productId,
          quantity,
          unit_price: product.price
        }])
        .select()
        .single()

      result = { data, error }
    }

    if (result.error) {
      return NextResponse.json(
        { error: 'Failed to add item to cart' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data: result.data }, { status: 201 })

  } catch (error) {
    console.error('Add to cart error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}