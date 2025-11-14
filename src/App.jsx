import React, { useEffect, useRef,  useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trustedby from './components/Trustedby';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';
import ContactUs from './components/ContactUs';
import {Toaster} from 'react-hot-toast'
import Footer from './components/Footer';

const App = () => {

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  // Refa for Custom Cursor Position tracking
 const mouse = useRef({x:0, y:0});
 const position = useRef({x:0, y:0});

 useEffect(() => {
  const handleMouseMove = (e) => {
    mouse.current.x = e.clientX;
    mouse.current.y = e.clientY;

    // Positioning the dot cursor
    if(dotRef.current){
      dotRef.current.style.top = mouse.current.y + 'px';
      dotRef.current.style.left = mouse.current.x + 'px';
    }
  }

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  }
 }, []);
 

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <div className='dark:bg-black relative'>
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
      <Trustedby />
      <Services />
    <OurWork />
    <Teams />
    <ContactUs />
    <Footer theme={theme} />

    {/* Custom Cursor Ring */}
    <div ref={outlineRef} className='fixed top-0 left-0 h-10 w-10
    rounded-full border-primary pointer-events-none z-[9999]' 
    style={{transition: 'transform 0.1s ease-out'}}></div>

      {/* Custom Cursor Dot */}
      <div ref={dotRef} className='fixed top-0 left-0 h-3 w-3
      rounded-full bg-primary pointer-events-none z-[9999]'>

      

    </div>
    </div>
  )
}

export default App