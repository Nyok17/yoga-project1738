import React from 'react';
import Price1 from '../data/images/price1.jpg';
import Price2 from '../data/images/price2.jpg';
import Price3 from '../data/images/price3.jpg';

const Pricing = () => {
  return (
    <div className='w-full min-h-sreen'>
      <div className='flex flex-col justify-center items-center m-4'>
        <h1>CLASS PACKS</h1>
        <p>Whether you're a seasoned yogi or just starting out on your journey, we offer a wide range of options
          to suit schedule and commitment
        </p>
      </div>
      <div className='flex flex-wrap gap-5 justify-center items-center'>
      <div className='w-96 h-[600px] rounded-lg bg-custom3 shadow-gray-800 shadow-lg'>
        <h1 className='font-bold text-customBrown flex justify-center mt-4'>SINGLE CLASS DROP-IN</h1>
        <div className='flex justify-center text-lg text-white font-semibold w-full h-8 mt-8 mb-4 bg-customBrown'>$15 per class</div>
        <img className='w-full h-[250px]' src={Price3} alt='price-img' />
        <p className='flex justify-center p-4'>
          Perfect for those with a busy schedule or new in our studio, the drop-in option 
          gives you the ability to attend any class of your choice without commitment.
        </p>
        <div className='flex justify-center mt-4 p-2'> <button className='rounded-xl text-white bg-customBrown p-2'>BUY NOW</button></div>
      </div>
      <div className='w-96 h-[600px] rounded-lg bg-custom1 shadow-gray-800 shadow-lg'>
      <h1 className='font-bold text-customBrown flex justify-center mt-4'>5-CLASS PACK</h1>
        <div className='flex justify-center text-lg text-white font-semibold w-full h-8 mt-8 mb-4 bg-customBrown'>$65 (Save $10)</div>
      <img className='w-full h-[250px]' src={Price2} alt='price-img' />
      <p className='flex justify-center p-4'>
        Ideal for those who want to practice regularly but with a little flexibility, our 5-class pack gives you the
        freedom to attend any of our classes at your own pace, with no expiration date.
      </p>
      <div className='flex justify-center mt-4 p-2'>
      <button className='rounded-xl text-white bg-customBrown p-2'>BUY NOW</button>
      </div>
      </div>
      <div className='w-96 h-[600px] rounded-lg bg-custom3 shadow-gray-800 shadow-lg'>
      <h1 className='font-bold text-customBrown flex justify-center mt-4'>MONTHLY UNLIMITED</h1>
        <div className='flex justify-center text-lg text-white font-semibold w-full h-8 mt-8 mb-4 bg-customBrown'>$90 per month</div>
      <img className='w-full h-[250px]' src={Price1} alt='price-img' />
      <p className='flex justify-center p-4'>
      Unlimited Monthly Yoga" is suitable for a variety of people, particularly those who want regular access to 
      yoga classes without the restriction of a class limit.</p>
      <div className='flex justify-center mt-4 p-2'><button className='rounded-xl text-white bg-customBrown p-2'>BUY NOW</button></div>
      </div>
    </div>
    </div>
  )
}

export default Pricing