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

// GET /api/wishlist - Get user's wishlist items
export async function GET(request: NextRequest) {
  try {
    const user = await getUser(request)

    if (!user) {
      return NextResponse.json(
        { error: 'User authentication required' },
        { status: 401 }
      )
    }

    // Get user's default wishlist
    const { data: wishlists } = await supabase
      .from('wishlists')
      .select('id')
      .eq('user_id', user.id)
      .limit(1)

    if (!wishlists || wishlists.length === 0) {
      return NextResponse.json({ data: [] })
    }

    const wishlistId = wishlists[0].id

    // Get wishlist items with product details
    const { data, error } = await supabase
      .from('wishlist_items')
      .select(`
        *,
        products:product_id (
          id,
          name,
          slug,
          price,
          compare_price,
          currency,
          is_featured,
          brands:brand_id (name),
          categories:category_id (name),
          product_images!inner (url, alt_text, is_primary)
        )
      `)
      .eq('wishlist_id', wishlistId)
      .order('added_at', { ascending: false })

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch wishlist items' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })

  } catch (error) {
    console.error('Wishlist API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/wishlist - Add item to wishlist
export async function POST(request: NextRequest) {
  try {
    const user = await getUser(request)
    const body = await request.json()
    const { productId } = body

    if (!user) {
      return NextResponse.json(
        { error: 'User authentication required' },
        { status: 401 }
      )
    }

    // Get or create user's default wishlist
    let wishlist
    const { data: existingWishlists } = await supabase
      .from('wishlists')
      .select('id')
      .eq('user_id', user.id)
      .limit(1)

    if (existingWishlists && existingWishlists.length > 0) {
      wishlist = existingWishlists[0]
    } else {
      // Create default wishlist
      const { data: newWishlist, error: wishlistError } = await supabase
        .from('wishlists')
        .insert([{
          user_id: user.id,
          name: 'İstek Listem',
          is_public: false
        }])
        .select('id')
        .single()

      if (wishlistError) {
        return NextResponse.json(
          { error: 'Failed to create wishlist' },
          { status: 500 }
        )
      }

      wishlist = newWishlist
    }

    // Check if item already exists
    const { data: existingItems } = await supabase
      .from('wishlist_items')
      .select('id')
      .eq('wishlist_id', wishlist.id)
      .eq('product_id', productId)

    if (existingItems && existingItems.length > 0) {
      return NextResponse.json(
        { message: 'Item already in wishlist' },
        { status: 409 }
      )
    }

    // Add item to wishlist
    const { data, error } = await supabase
      .from('wishlist_items')
      .insert([{
        wishlist_id: wishlist.id,
        product_id: productId
      }])
      .select()
      .single()

    if (error) {
      return NextResponse.json(
        { error: 'Failed to add item to wishlist' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data }, { status: 201 })

  } catch (error) {
    console.error('Add to wishlist error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE /api/wishlist?productId={id} - Remove item from wishlist
export async function DELETE(request: NextRequest) {
  try {
    const user = await getUser(request)
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get('productId')

    if (!user) {
      return NextResponse.json(
        { error: 'User authentication required' },
        { status: 401 }
      )
    }

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID required' },
        { status: 400 }
      )
    }

    // Get user's wishlist
    const { data: wishlists } = await supabase
      .from('wishlists')
      .select('id')
      .eq('user_id', user.id)
      .limit(1)

    if (!wishlists || wishlists.length === 0) {
      return NextResponse.json(
        { error: 'Wishlist not found' },
        { status: 404 }
      )
    }

    const wishlistId = wishlists[0].id

    // Remove item from wishlist
    const { error } = await supabase
      .from('wishlist_items')
      .delete()
      .eq('wishlist_id', wishlistId)
      .eq('product_id', productId)

    if (error) {
      return NextResponse.json(
        { error: 'Failed to remove item from wishlist' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Item removed from wishlist' })

  } catch (error) {
    console.error('Remove from wishlist error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}