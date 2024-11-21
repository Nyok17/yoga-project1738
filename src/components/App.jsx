import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Classes from '../pages/Classes';
import Contact from '../pages/Contact';
import Pricing from '../pages/Pricing';
import Navbar from './Navbar';
import Footer from './Footer';
import Auth from '../firebase/Auth';
import ClassBooking from '../pages/ClassBooking';

const App = () => {

  return (
      <div className='w-full min-h-screen bg-customPink2'>
      <Navbar />
        <Routes>
          <Route path='/'
            element={<Home />} />

          <Route path='/classes'
            element={<Classes />} />

            <Route
            path='/pricing' 
            element={<Pricing />}
            />

          <Route path='/contact'
            element={<Contact />} />

            <Route path='/login'
            element={<Auth />}
            />

            <Route path='/class-booking'
            element={<ClassBooking />} 
            />
        </Routes>
        <Footer />
      </div>
  )
}

export default App