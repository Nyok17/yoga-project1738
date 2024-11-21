import React, { useContext, useEffect, useRef } from 'react';
import Yoga1 from '../data/images/yoga1.jpg';
import Yoga6 from '../data/images/yoga6.jpg';
import Yoga3 from '../data/images/yoga3.jpg';
import Yoga8 from '../data/images/yoga8.jpg';
import Typed from 'typed.js';
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const typedElement = useRef(null);
  const{quotes, stars}= useContext(GlobalContext);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ['', 'Bhagavad Gita'],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])


  return (
    <div className='flex flex-col justify w-full min-h-sreen bg-customPink2'>
        <div className='text-left p-4 '>
          <h1 className='text-[70px] text-customBrown'>
          ❝Yoga is the journey of the self,
            <br />through the self, to the self❞,
            <span className='text-[40px] text-customBrown' ref={typedElement}></span>
          </h1>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <div className='flex justify-center w-[500px] h-[500px] bg-customWhite rounded-full'>
            <div className='flex justify-center gap-5'>
              <img className='w-72 h-96 mt-24 rounded-lg' src={Yoga1} alt='yoga-img' />
              <img className='w-72 h-96 mt-24 rounded-lg' src={Yoga6} alt='yoga-img' />
              <img className='w-72 h-96 mt-24 rounded-lg' src={Yoga3} alt='yoga-img' />
            </div>
          </div>
        <div className='flex p-4 w-full bg-customPink2 mt-16'>
          <img className='relative w-[500px] h-[600px] rounded-lg ml-8' src={Yoga8} alt='yoga8' />
          <div className='relative ml-32'>
            <h1 className='text-customBrown font-bold text-lg'>WHY PRACTICE WITH MISTIC YOGA?</h1>
            <div className='m-4'>
              <h4 className='font-semibold text-customBrown'>1. Discover Your Inner Peace:</h4>
              <p>This encourages individuals to explore and connect with a deeper sense of calm and tranquility through yoga. It implies that inner peace is already within them, waiting to be discovered.</p>
            </div>
            <div className='m-4'>
              <h4 className='font-semibold text-customBrown'>2. Balance Mind, Body, and Spirit:</h4>
              <p>
                Highlights the holistic benefits of yoga, which aims to bring equilibrium to physical, mental, and emotional aspects of one’s life. It implies that yoga helps create harmony in all parts of your being.
              </p>
            </div>
            <div className='m-4'>
              <h4 className='font-semibold text-customBrown'>3. Awaken Your Inner Bliss:</h4>
              <p>Implies that joy and happiness already exist within, and yoga can help bring them to the surface. It promotes the idea of unlocking a state of joy through the practice.
              </p>
            </div>
            <div className='m-4'>
              <h4 className='font-semibold text-customBrown'>4. Reconnect with Your True Self:</h4>
              <p>Suggests that yoga is a path to realigning with one’s authentic identity, away from the stress and distractions of daily life. It promotes self-awareness and self-discovery.</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center p-8 m-4 items-center w-full h-[300px] bg-gray-200 mt-8'>
          <h1 className='flex text-[70px] m-4 font-playwrite'>BEGIN YOUR JOURNEY</h1>
          <p>❝{quotes.content}❞</p>
          <h3 className='text-[20px]'>{quotes.author}</h3>
          <NavLink to={'/class-booking'}>
          <button className='p-2 m-4 bg-white text-lg rounded-lg shadow-black shadow-md'>BOOK A CLASS</button>
          </NavLink>
        </div>
        <div className='mt-4 mb-8'>
          <h1 className='flex justify-center m-8 text-[50px]'>TESTIMONIALS</h1>
        <div className='flex wrap justify-center gap-5'>
          <div className='flex flex-col items-center w-72 h-96 rounded-lg shadow-black shadow-lg bg-customPink2'>
            <div className='flex mt-4 pl-8 pr-8 text-[20px] text-yellow-400 border border-solid border-2 rounded-[20px] h-12 items-center'>
            {
           stars.map((_, index)=>(
            <h1 key={index}><FontAwesomeIcon icon={faStar} /></h1>
           ))
            }
            </div>
            <div className='mt-4 p-4'>
          <p>❝The retreat organized by Mistic Yoga was beyond incredible. From the scenic location to the guided meditations, everything was perfect. I left feeling rejuvenated and ready to take on life with a new perspective❞,</p>
          <h3 className='mt-16 font-semibold'>-Nyok Kong'or, student</h3>
          </div>
          </div>
          <div className='flex flex-col items-center w-64 h-96 rounded-lg shadow-black shadow-lg  bg-customPink2'>
            <div className='flex mt-4 pl-8 pr-8 text-[20px] text-yellow-400 border border-solid border-2 rounded-[20px] h-12 items-center'>{
           stars.map((_, index)=>(
            <h1 key={index}><FontAwesomeIcon icon={faStar} /></h1>
           ))
            }
          </div>
          <div className='mt-4 p-4'>
          <p>❝Practicing at Mistic Yoga has been a life-changing journey for me. Not only have I gained strength and flexibility, but I have also learned to manage my stress better and find inner peace❞,</p>
          <h3 className='mt-16 font-semibold'>-Klaus Michaelson, new student</h3>
          </div>
          </div>

          <div className='flex flex-col items-center w-64 h-96 rounded-lg shadow-black shadow-lg  bg-customPink2'>
            <div className='flex mt-4 pl-8 pr-8 text-[20px] text-yellow-400 border border-solid border-2 rounded-[20px] h-12 items-center'>
            {
           stars.map((_, index)=>(
            <h1 key={index}><FontAwesomeIcon icon={faStar} /></h1>
           ))
            }
          </div>
          <div className='mt-4 p-4'>
          <p>❝I was nervous about trying yoga for the first time, but the beginner classes at Mistic Yoga were so welcoming and easy to follow. The instructors made sure I felt comfortable, and now I feel more energized and stress-free❞,</p>
          <h3 className='mt-12 font-semibold'>-Judge Judy, alumnus</h3>
          </div>
          </div>

          <div className='flex flex-col items-center w-64 h-96 rounded-lg shadow-black shadow-lg  bg-customPink2'>
            <div className='flex mt-4 pl-8 pr-8 text-[20px] text-yellow-400 border border-solid border-2 rounded-[20px] h-12 items-center'>
            {
           stars.map((_, index)=>(
            <h1 key={index}><FontAwesomeIcon icon={faStar} /></h1>
           ))
            }
          </div>
          <div className='mt-4 p-4'> <p className='flex'>❝Mistic Yoga has completely transformed my yoga practice. The instructors are knowledgeable, and the peaceful atmosphere makes every class a wonderful experience. Highly recommended for anyone looking to reconnect with themselves❞,</p>
          <h3 className=' font-semibold'>-Cristiano Ronaldo, student</h3>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
 
  )
}

export default Home