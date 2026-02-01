import React, { useContext } from 'react'
import { productsData } from '../data'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const { addToCart } = useContext(ShopContext)
  const { id } = useParams()

  const product = productsData.find(
    product => product.id === Number(id)
  )

  if (!product) return <div>Product not found</div>

  return (
    <div className='mt-20 max-w-6xl mx-auto px-6 py-16 flex gap-10'>
      <img src={product.image} className='w-[460px]' />

      <div>
        <h3 className='text-3xl font-semibold'>{product.name}</h3>
        <p className='text-2xl text-red-500'>${product.price}</p>
        <p>{product.description}</p>

        <button
          onClick={() => addToCart(product, product.id)}
          className='bg-red-500 py-3 px-10'
        >
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
