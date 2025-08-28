import React from 'react'
import logo from 'D:/website/CodingNinjas-Clone/src/assets/logo.png'

function Navbar() {
  return (
    <div className=' flex h-18 bg-white items-center content-center gap-20 justify-center'>
      <div className="logo">
        <img className='h-6' src={logo} alt="Logo" />
      </div>
      <div className=' flex gap-20'>
        <a className=' hover:bg-gray-100 rounded-lg active:border-2 h-10 w-35 text-center content-center text-slate-700 font-bold' href="#">Job Bootcamp <i className=" font-semibold ph ph-caret-down"></i></a>
        <a className=' hover:bg-gray-100 rounded-lg active:border-2 h-10 w-35 text-center content-center text-slate-700 font-bold' href="#">IIT Certification <i className=" font-semibold ph ph-caret-down"></i></a>
        <a className=' hover:bg-gray-100 rounded-lg active:border-2 h-10 w-35 text-center content-center text-slate-700 font-bold' href="#">New Launches <i className=" font-semibold ph ph-caret-down"></i></a>
      </div>
      <div>
        <button className=' bg-orange-500 text-white h-10 cursor-pointer hover:bg-orange-300 rounded-lg w-20 text-center items-center'>Login</button>
      </div>
    </div>
  )
}

export default Navbar
