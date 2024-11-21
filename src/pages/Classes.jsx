import React from 'react';
import VinyasaFlow from '../data/images/vinyasaflow.jpg';
import PowerYoga from '../data/images/poweryoga.jpg';
import SlowFlow from '../data/images/slowflow.png';
import YinYoga from '../data/images/yinyoga.jpg';
import Meditation from '../data/images/meditation.jpg';
import Breathwork from '../data/images/breathwork.jpg';


const Classes = () => {
  return (
    <div className='w-full h-full bg-customPink2'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='mt-4 font-serif font-bold text-64 text-customBrown'>OUR CLASSES</h1>
        <p className='flex justify-center ml-12 mr-12'>We offer a diverse range of classes designed to suit every level of experience
          . From energizing flows and meditative breathwork to claiming yin practices, our expert instructors are
          here to guide you on your wellness journey. Explore our class offerings below to find perfect fit for your body and mind.
        </p>
        </div>
        <div className='flex justify-center mt-8 flex-wrap gap-5 items-center'>
          <div className='w-96 h-[600px] rounded-lg bg-custom3 shadow-stone-400 shadow-md'>
            <img className='w-full h-64 rounded-t-lg transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rounded-lg' src={VinyasaFlow} alt='vinyasa-img'/>
            <div className='flex flex-col items-center justify-center mt-8'>
              <h2 className='font-bold text-customBrown text-16'>VINYASA FLOW</h2>
              <p className='p-6'>Vinyasa yoga links breath with movement, creating a dynamic flow 
                through a series of postures. Each movement is synchronized withan inhale or exhale
                , promoting mindfulness and enhancing flexibility, strength and balance</p>
            </div>
          </div>
          <div className='w-96 h-[600px] rounded-lg bg-custom3 shadow-stone-400 shadow-md'>
            <img className='w-full h-64 rounded-t-lg transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rounded-lg' src={PowerYoga} alt='power-img' />
            <div className='flex flex-col items-center justify-center mt-8'>
              <h2 className='font-bold text-customBrown text-16'>POWER YOGA</h2>
              <p className='p-6'>
              Power yoga is a vigorous and fitness-focused style of yoga that combines traditional yoga 
              postures with more dynamic and physically challenging sequences. It emphasizes strength, flexibility, and stamina, 
              and is often practiced in a faster-paced and more intense manner compared to other forms of yoga.
              </p>
            </div>
          </div>
          <div className='w-96 h-[600px] rounded-lg bg-custom3 shadow-stone-400 shadow-md'>
            <img className='w-full h-64 rounded-t-lg transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rounded-lg' src={SlowFlow} alt='slow-img' />
            <div className='flex flex-col items-center justify-center mt-8'>
              <h2 className='font-bold text-customBrown text-16'>SLOW FLOW</h2>
              <p className='p-6'>Slow flow yoga is a gentle and mindful style of Vinyasa yoga that focuses on slow-paced transitions between 
                poses. It emphasizes deliberate movement, breath awareness, and extended holds, allowing practitioners to connect 
                deeply with their bodies and find relaxation while improving flexibility and strength.</p>
            </div>
          </div>
          <div className='w-96 h-[600px] rounded-lg bg-custom3 shadow-stone-400 shadow-md'>
            <img className='w-full h-64 rounded-t-lg transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rounded-lg' src={YinYoga} alt='yin-img' />
            <div className='flex flex-col items-center justify-center mt-8'>
              <h2 className='font-bold text-customBrown text-16'>YIN YOGA</h2>
              <p className='p-6'>Yin yoga is a slow-paced, meditative style of yoga that involves holding poses for an extended
                 period, usually between 3 to 5 minutes or even longer. It focuses on deep stretching and 
                 relaxation, targeting the connective tissues of the body such as ligaments, joints, and fascia. Yin yoga is the opposite of more dynamic (yang) styles of yoga, such as Vinyasa or 
                power yoga, and aims to cultivate stillness and mindfulness.</p>
            </div>
          </div>
          <div className='w-96 h-[600px] rounded-lg bg-custom3 shadow-stone-400 shadow-md'>
            <img className='w-full h-64 rounded-t-lg transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rounded-lg' src={Meditation} alt='meditation-img' />
            <div className='flex flex-col items-center justify-center mt-8'>
              <h2 className='font-bold text-customBrown text-16'>MEDITATION</h2>
              <p className='p-6'>Meditation is a mental practice that involves focusing the mind and eliminating the stream of thoughts 
                that may be crowding it. The goal of meditation is to achieve a state of mental clarity, 
                relaxation, and heightened awareness. It is often used as a tool for reducing stress, 
                enhancing concentration, and cultivating a deeper sense of peace and self-awareness.</p>
            </div>
          </div>
          <div className='w-96 h-[600px] rounded-lg bg-custom3 shadow-stone-400 shadow-md'>
            <img className='w-full h-64 rounded-t-lg transform transition-transform duration-500 ease-in-out hover:scale-110 hover:rounded-lg' src={Breathwork} alt='breathwork' />
            <div className='flex flex-col items-center justify-center mt-8'>
              <h2 className='font-bold text-customBrown text-16'>BREATHWORK</h2>
              <p className='p-6'>Breathwork refers to various breathing techniques and exercises that are used to improve physical, mental, 
                and spiritual well-being. It is a practice that involves conscious control of breathing to help 
                reduce stress, boost energy, improve focus, and achieve a sense of relaxation and balance. 
                Breathwork has roots in many ancient practices, such as yoga (pranayama), 
                qigong, and meditation, and is increasingly being used in modern wellness and therapy contexts.
                </p>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Classes