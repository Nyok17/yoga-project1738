import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
 
  return (
    <div className='sticky top-0 p-4 z-50  bg-customPink2'>
    <nav className='flex justify-between'>
      <h1 className='text-2xl font-bold text-customBrown'><NavLink to={'/'}>Mistic yoga</NavLink></h1>
      <ul className='flex space-x-4 text-customBrown font-sans font-semibold text-lg'>
        <li>
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li>
          <NavLink to={'/classes'}>Classes</NavLink>
        </li>
        <li>
          <NavLink to={'/pricing'}>Pricing</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar