
'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function ProductCard() {
    const searchParams = useSearchParams()
    const category = searchParams.get('category')
    const price = searchParams.get('price')
    console.log("searchParams",searchParams)
  return (
    <div>ProductCard {category} {price}</div>
  )
}

export default ProductCard