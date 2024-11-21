import React from 'react';

const Footer = () => {
    const date= new Date()
    const myYear= date.getFullYear()
  return (
    <div className='flex justify-center relative min-h-screen'>
        <h4 className='absolute bottom-0 p-4 text-gray-700'>Mistic Yoga | © Nyok Kong'or {myYear}</h4>
    </div>
  )
}

export default Footer