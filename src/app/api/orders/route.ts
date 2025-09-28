// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET /api/orders - Get user's orders
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    const offset = (page - 1) * limit

    // TODO: Add proper user authentication
    // For now, return mock orders data
    
    let query = supabase
      .from('orders')
      .select(`
        *,
        order_items (
          *,
          products (
            name,
            product_images (url, is_primary)
          )
        )
      `)
      .order('created_at', { ascending: false })
      .range(offset, offset + limit - 1)

    if (status) {
      query = query.eq('status', status)
    }

    const { data, error, count } = await query

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch orders' },
        { status: 500 }
      )
    }

    // Calculate pagination
    const total = count || 0
    const totalPages = Math.ceil(total / limit)
    const hasNextPage = page < totalPages
    const hasPrevPage = page > 1

    return NextResponse.json({
      data: data || [],
      pagination: {
        page,
        limit,
        total,
        totalPages,
        hasNextPage,
        hasPrevPage
      }
    })

  } catch (error) {
    console.error('Orders API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST /api/orders - Create new order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // TODO: Add proper user authentication
    // For now, return a mock response
    
    const {
      items,
      shipping_address,
      billing_address,
      payment_method
    } = body

    if (!items || !items.length) {
      return NextResponse.json(
        { error: 'Order items are required' },
        { status: 400 }
      )
    }

    // Generate order number
    const orderNumber = `ORD-${Date.now()}`
    
    // Calculate totals
    const subtotal = items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0)
    const taxAmount = subtotal * 0.20 // 20% tax
    const shippingAmount = subtotal > 2000 ? 0 : 50 // Free shipping over 2000 TRY
    const totalAmount = subtotal + taxAmount + shippingAmount

    // Create order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        order_number: orderNumber,
        subtotal,
        tax_amount: taxAmount,
        shipping_amount: shippingAmount,
        total_amount: totalAmount,
        currency: 'TRY',
        shipping_address,
        billing_address,
        status: 'pending',
        payment_status: 'pending'
      })
      .select()
      .single()

    if (orderError) {
      return NextResponse.json(
        { error: 'Failed to create order' },
        { status: 500 }
      )
    }

    // Create order items
    const orderItems = items.map((item: any) => ({
      order_id: order.id,
      product_id: item.product_id,
      product_name: item.name,
      product_sku: item.sku,
      quantity: item.quantity,
      unit_price: item.price,
      total_price: item.price * item.quantity
    }))

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems)

    if (itemsError) {
      return NextResponse.json(
        { error: 'Failed to create order items' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      data: {
        ...order,
        items: orderItems
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Create order error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}