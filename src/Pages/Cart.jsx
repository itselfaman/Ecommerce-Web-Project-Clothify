import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'

const Cart = () => {
  const {
    cart,
    clearCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    quantity,
    total,
  } = useContext(ShopContext)

  return (
    <div className='max-w-7xl mx-auto mt-28 px-6 flex flex-col lg:flex-row gap-8 mb-20'>

      {/* LEFT : SHOPPING CART */}
      <div className='lg:w-2/3 bg-white rounded-lg shadow p-6'>
        {/* Header */}
        <div className='flex justify-between items-center border-b pb-4'>
          <h1 className='text-2xl font-semibold'>Shopping Cart</h1>
          <div className='flex items-center gap-6'>
            <span className='text-gray-600'>Items: ({quantity})</span>
            <FiTrash2
              onClick={clearCart}
              className='text-red-500 text-xl cursor-pointer'
            />
          </div>
        </div>

        {/* Table Head */}
        <div className='grid grid-cols-[3fr_1fr_1fr_1fr] text-gray-500 font-semibold mt-6 pb-2 border-b'>
          <span>Products Description</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>

        {/* Items */}
        {cart.length > 0 ? (
          cart.map(item => (
            <div
              key={item.id}
              className='grid grid-cols-[3fr_1fr_1fr_1fr] items-center py-4 border-b'
            >
              {/* Product */}
              <div className='flex items-center gap-4'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-16 h-16 object-cover rounded'
                />
                <div>
                  <p className='font-medium'>{item.name}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className='flex items-center gap-1 text-red-500 text-sm mt-1'
                  >
                    <FiTrash2 /> Remove
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className='flex items-center gap-3'>
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center'
                >
                  <IoMdRemove />
                </button>

                <span>{item.amount}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                  className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center'
                >
                  <IoMdAdd />
                </button>
              </div>

              {/* Price */}
              <p>${item.price}</p>

              {/* Total */}
              <p className='font-semibold'>
                ${item.price * item.amount}
              </p>
            </div>
          ))
        ) : (
          <p className='text-gray-500 mt-6'>Your cart is empty</p>
        )}
      </div>

      {/* RIGHT : CART SUMMARY */}
      <div className='lg:w-1/3 bg-gray-50 rounded-lg shadow p-6 h-fit'>
        <h2 className='text-lg font-semibold border-b pb-4'>
          Cart Summary
        </h2>

        <div className='flex justify-between mt-4 text-gray-700'>
          <span>Items:</span>
          <span>{quantity}</span>
        </div>

        <div className='flex justify-between mt-2 text-gray-700'>
          <span>Subtotal</span>
          <span>{total}</span>
        </div>

        <div className='flex justify-between mt-2 text-gray-700'>
          <span>Shipping Fee</span>
          <span>Free</span>
        </div>

        <div className='flex justify-between mt-3 font-semibold text-lg'>
          <span>Total Cost</span>
          <span>{total}</span>
        </div>

        <button className='w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded mt-6 text-lg'>
          CHECKOUT
        </button>
      </div>
    </div>
  )
}

export default Cart
