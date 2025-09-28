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

// GET /api/profile - Get user profile
export async function GET(request: NextRequest) {
  try {
    const user = await getUser(request)

    if (!user) {
      return NextResponse.json(
        { error: 'User authentication required' },
        { status: 401 }
      )
    }

    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (error) {
      // If profile doesn't exist, create a basic one
      if (error.code === 'PGRST116') {
        const { data: newProfile, error: createError } = await supabase
          .from('user_profiles')
          .insert([{
            id: user.id,
            full_name: user.email?.split('@')[0] || 'User',
            preferred_language: 'tr',
            preferred_currency: 'TRY'
          }])
          .select()
          .single()

        if (createError) {
          return NextResponse.json(
            { error: 'Failed to create profile' },
            { status: 500 }
          )
        }

        return NextResponse.json({ data: newProfile })
      }

      return NextResponse.json(
        { error: 'Failed to fetch profile' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })

  } catch (error) {
    console.error('Profile API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PUT /api/profile - Update user profile
export async function PUT(request: NextRequest) {
  try {
    const user = await getUser(request)
    const body = await request.json()

    if (!user) {
      return NextResponse.json(
        { error: 'User authentication required' },
        { status: 401 }
      )
    }

    const { data, error } = await supabase
      .from('user_profiles')
      .update({
        full_name: body.full_name,
        phone: body.phone,
        birth_date: body.birth_date,
        gender: body.gender,
        preferred_language: body.preferred_language,
        preferred_currency: body.preferred_currency,
        avatar_url: body.avatar_url,
        updated_at: new Date().toISOString()
      })
      .eq('id', user.id)
      .select()
      .single()

    if (error) {
      return NextResponse.json(
        { error: 'Failed to update profile' },
        { status: 500 }
      )
    }

    return NextResponse.json({ data })

  } catch (error) {
    console.error('Update profile error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}