// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET /api/orders/[id] - Get single order by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const { data, error } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (
          *,
          products (
            name,
            slug,
            brands (name),
            product_images (url, is_primary)
          )
        )
      `)
      .eq('id', id)
      .single()

    if (error || !data) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ data })

  } catch (error) {
    console.error('Get order error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/orders/[id] - Update order status (Admin only)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    // TODO: Add admin authentication check
    
    const { status, payment_status, tracking_number } = body

    const updateData: any = {
      updated_at: new Date().toISOString()
    }

    if (status) updateData.status = status
    if (payment_status) updateData.payment_status = payment_status
    if (tracking_number) updateData.tracking_number = tracking_number

    const { data, error } = await supabase
      .from('orders')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      return NextResponse.json(
        { error: 'Failed to update order' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })

  } catch (error) {
    console.error('Update order error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// DELETE /api/orders/[id] - Cancel order
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    // Only allow canceling pending orders
    const { data: order } = await supabase
      .from('orders')
      .select('status')
      .eq('id', id)
      .single()

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      )
    }

    if (order.status !== 'pending') {
      return NextResponse.json(
        { error: 'Only pending orders can be cancelled' },
        { status: 400 }
      )
    }

    const { error } = await supabase
      .from('orders')
      .update({ 
        status: 'cancelled',
        updated_at: new Date().toISOString()
      })
      .eq('id', id)

    if (error) {
      return NextResponse.json(
        { error: 'Failed to cancel order' },
        { status: 500 }
      )
    }

    return NextResponse.json({ message: 'Order cancelled successfully' })

  } catch (error) {
    console.error('Cancel order error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}