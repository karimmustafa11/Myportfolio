import React from 'react'
import Nav from './Components/Nav.jsx'
import { BrowserRouter } from 'react-router';
import AnimatedTitle from './effects/AnimatedTitle.jsx';
import './App.css'
import SocialMediaIcons from './Components/SocialMedia/icons.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <div className='w-full overflow-x-hidden'>
        <Nav />
      </div>
      <div className=' flex items-start justify-evenly'>
        <div className='mt-30 text-center w-[50%] animate-left-slide'>
          <h1>
            <AnimatedTitle />
          </h1>
          <h2 className="pulsing-text mt-5" style={{ color: '#e04444', fontSize: '1.5em' }} >Full Stack Web Developer</h2>
          <a
            href="mailto:karimmustafa495@gmail.com"
            className='
              /* كلاسات Tailwind اللي بتدي شكل الزرار */
              mt-4 cursor-pointer 
              text-white 
              py-3 px-6 rounded-lg 
              font-semibold shadow-xl 
              transition-all duration-300 ease-in-out
              
              /* كلاسات التدرج والحركة */
              bg-gradient-to-r from-red-600 to-blue-600 
              shadow-red-500/50 hover:shadow-blue-500/70
              hover:from-blue-600 hover:to-red-600 
              hover:scale-[1.05]
              inline-block 
            '
          >
            Get in Touch
          </a>
          <SocialMediaIcons />
        </div>
        <div className='-mt-20 flex justify-center items-center animate-right-slide'>
          <img src="barcaAI2.png" alt="" width={400} height={300} />
        </div>
      </div>
    </BrowserRouter>
  )
}
