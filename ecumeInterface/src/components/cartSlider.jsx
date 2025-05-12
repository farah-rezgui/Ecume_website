import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const CartSlider = ({ isOpen, onClose }) => {
  const [showCheckout, setShowCheckout] = useState(false);
  const { cart, removeFromCart } = useCart();

  return (
    <div
      className={`fixed right-0 top-0 h-full w-96 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
      <div className='p-6 h-full flex flex-col'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold'>Votre Panier</h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-black transition-colors'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {showCheckout ? (
          <div className='flex-1'>
            <form className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Full Name
                </label>
                <input
                  type='text'
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow focus:ring-yellow'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Email
                </label>
                <input
                  type='email'
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow focus:ring-yellow'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700'>
                  Address
                </label>
                <textarea
                  className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow focus:ring-yellow'
                  rows='3'
                />
              </div>
              <button
                type='submit'
                className='w-full bg-yellow py-2 text-black font-semibold hover:bg-black hover:text-white transition-colors duration-300'>
                Complete Order
              </button>
              <button
                type='button'
                onClick={() => setShowCheckout(false)}
                className='w-full mt-2 bg-gray-200 py-2 text-gray-700 font-semibold hover:bg-gray-300 transition-colors duration-300'>
                Back to Cart
              </button>
            </form>
          </div>
        ) : (
          <>
            <div className='flex-1 overflow-y-auto'>
              {cart.items.length === 0 ? (
                <p className='text-center text-gray-500 mt-8'>
                  Your cart is empty
                </p>
              ) : (
                <div className='space-y-4'>
                  {cart.items.map((item, index) => (
                    <div
                      key={index}
                      className='flex items-center justify-between border-b pb-4'>
                      <div className='flex items-center space-x-4'>
                        <img
                          src={item.image}
                          alt={item.title}
                          className='w-16 h-16 object-cover rounded'
                        />
                        <div>
                          <h3 className='font-medium'>{item.title}</h3>
                          <p className='text-gray-500'>{item.price} DT</p>
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(index, item.price)}
                        className='text-red-500 hover:text-red-700 transition-colors'>
                        <svg
                          className='w-5 h-5'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className='mt-6 pt-6 border-t'>
              <div className='flex justify-between items-center mb-4'>
                <span className='text-lg font-medium'>Total:</span>
                <span className='text-xl font-bold'>{cart.total} DT</span>
              </div>
              <button
                onClick={() => setShowCheckout(true)}
                disabled={cart.items.length === 0}
                className={`w-full bg-yellow py-3 text-black font-semibold transition-colors duration-300 ${
                  cart.items.length === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-black hover:text-white"
                }`}>
                Commander
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSlider;
