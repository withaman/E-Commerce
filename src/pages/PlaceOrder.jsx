import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'

const PlaceOrder = () => {
  const [paymentMethod, setPaymentMethod] = useState(null)
  return (
    <div className='flex gap-10 border-t border-b py-14 flex-col sm:flex-row'>
      {/* Left side */}
      <div className='flex flex-col w-full sm:w-1/2 gap-2'>
        <div className='text-2xl'>
          <Title t1={"DELIVERY"} t2={"INFORMATION"} />
        </div>
        <div className='flex gap-2'>
          <input type="text" placeholder='First Name' className='w-full border py-2 px-3 rounded' />
          <input type="text" placeholder='Last Name' className='w-full border py-2 px-3 rounded' />
        </div>
        <input type="mail" placeholder='Email' className='w-full border py-2 px-3 rounded' />
        <input type="mail" placeholder='Street' className='w-full border py-2 px-3 rounded' />
        <div className='flex gap-2'>
          <input type="text" placeholder='City' className='w-full border py-2 px-3 rounded' />
          <input type="text" placeholder='State' className='w-full border py-2 px-3 rounded' />
        </div>
        <div className='flex gap-2'>
          <input type="text" placeholder='Pin/Zip Code' className='w-full border py-2 px-3 rounded' />
          <input type="text" placeholder='Country' className='w-full border py-2 px-3 rounded' />
        </div>
        <input type="text" placeholder='Phone' className='w-full border py-2 px-3 rounded' />
      </div>
      {/* Right Side */}
      <div className='flex flex-col w-full sm:w-1/2 gap-4'>
        <div className='min-w-80'>
          <CartTotal />
        </div>
        <div>
          <div className='text-lg'>
            <Title t1={"PAYMENT"} t2={"METHOD"} />
          </div>
          <div className='flex gap-3 justify-center'>
            <div className='flex items-center border gap-2 p-2 cursor-pointer'
              onClick={() => setPaymentMethod("razorpay")}>
              <p className={`w-3 h-3 rounded-full border border-black 
                ${paymentMethod == "razorpay" ? "bg-green-500" : ""}`}></p>
              <img src={assets.razorpay_logo} alt="" className='w-20' />
            </div>
            <div className='flex items-center border gap-2 p-2 cursor-pointer'
              onClick={() => setPaymentMethod("stripe")}>
              <p className={`w-3 h-3 rounded-full border border-black 
                ${paymentMethod == "stripe" ? "bg-green-500" : ""}`}></p>
              <img src={assets.stripe_logo} alt="" className='w-12' />
            </div>
            <div className='flex items-center border gap-2 p-2 cursor-pointer'
              onClick={() => setPaymentMethod("cod")}>
              <p className={`w-3 h-3 rounded-full border border-black 
                ${paymentMethod == "cod" ? "bg-green-500" : ""}`}>
              </p>
              <p className='font-bold'>CASH ON DELIVERY</p>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <p className='w-1/3 bg-black text-white text-center py-2 px-3 text-lg mt-2 cursor-pointer hover:bg-gray-900'>Place Order</p>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder