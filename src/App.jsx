import React from 'react'
import Navbar from './components/Navbar'
import Contact from './Contact'
import Hero from './Hero'
import Extra from './Extra'
import logo2 from 'D:/website/CodingNinjas-Clone/src/assets/logo2.png'
import About from './About'


function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <img src={logo2} className='h-11 w-11 fixed right-6 bottom-6 cursor-pointer opacity-80' />
      <Extra/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
