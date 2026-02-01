import React, { useContext, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { categoryItem } from '../data'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const { products, addToCart } = useContext(ShopContext)
  const [category, setCategory] = useState('All')

  return (
    <div className='px-4 py-12 max-w-7xl mx-auto'>

      {/* ===== SHOP BY CATEGORY ===== */}
      <div className='text-center mb-10'>
        <h1 className='text-4xl font-bold'>Shop By Category</h1>
      </div>

      <div className='flex justify-center gap-10 mb-16 flex-wrap'>
        {categoryItem.map((item, index) => {
          const isActive = category === item.category_title

          return (
            <div
              key={index}
              onClick={() => setCategory(item.category_title)}
              className='cursor-pointer flex flex-col items-center'
            >
              <div
                className={`h-32 w-32 rounded-full overflow-hidden border-4 transition-all duration-300
                  ${isActive
                    ? 'border-amber-500 scale-105'
                    : 'border-gray-300 hover:scale-105'}
                `}
              >
                <img
                  src={item.image}
                  alt={item.category_title}
                  className='h-full w-full object-cover'
                />
              </div>

              <span
                className={`mt-2 px-4 py-1 rounded-full text-sm font-semibold
                  ${isActive
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-200 text-gray-700'}
                `}
              >
                {item.category_title}
              </span>
            </div>
          )
        })}
      </div>

      {/* ===== PRODUCTS ===== */}
      <h2 className='text-4xl text-center font-semibold mb-8'>
        Our Collections
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {products
          .filter(
            product =>
              category === 'All' ||
              product.category.toLowerCase() === category.toLowerCase()
          )
          .map(product => (
            <div
              key={product.id}
              className='bg-white border border-gray-200 rounded-lg p-4'
            >
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-full h-[250px] object-contain'
                />
              </Link>

              <h4 className='text-lg font-medium mt-2'>
                {product.name}
              </h4>

              <p className='font-bold text-center text-lg'>
                ₹{product.price}
              </p>

              <button
                onClick={() => addToCart(product, product.id)}
                className='w-full mt-4 py-2 border border-amber-600 rounded hover:bg-amber-600 hover:text-white transition'
              >
                Add To Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default ProductList
