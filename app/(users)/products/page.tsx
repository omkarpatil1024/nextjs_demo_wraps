import React from 'react'
import ProductCard from './components/ProductCard'

async function Products(props:any) {
    const searchParams = await props.searchParams
  return (
    <>
    <div>Products Page {searchParams.category} {searchParams.price}</div>
    <ProductCard/>
    </>
  )
}

export default Products