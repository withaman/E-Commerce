import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div>
      <div className='flex mt-5 items-center'>
        <p className='text-7xl font-semibold w-3/5 leading-[5rem]'>Welcome to CodewareIT Online E-Commerce Store – Where Style Meets Quality.</p>
        <img className="w-2/5" src={assets.about_img} alt="" />
      </div>
      <div className='px-20 py-10 text-lg'>
      <h1 className='text-center font-bold text-xl mt-3 text-gray-700'>About Us</h1>
      <p className='mt-2'>At CodewareIT Store, we're more than just an online clothing store — we're your ultimate fashion destination. Born from a passion for great style and even greater quality, we bring you a curated selection of the latest fashion trends, premium fabric, and standout brands that redefine everyday wear.</p>
      <p>Whether you're looking for classic comfort or bold statements, our handpicked collections cater to every style and occasion. Each piece is crafted with attention to detail and a commitment to top-tier fabric quality — because you deserve clothes that feel as good as they look.</p>
      <p>We're proud to deliver fashion that's not only stylish but also dependable. With new arrivals dropping regularly, you’ll always find something fresh and exciting to elevate your wardrobe.</p>
      </div>
    </div>
  )
}

export default About