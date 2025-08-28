import React from 'react'

function Hero() {
  return (
    <div className='bg-neutral-900 h-200 text-white flex justify-center items-center '>
      <div className='absolute left-45 top-50'>
        <p className='text-green-400 text-lg'>Restricted by Opportunities?</p>
        <div className='pt-3'>
          <p className='font-bold text-5xl'>Get the tech Career</p>
          <p className='font-bold text-5xl'>you deserve. Faster</p>
        </div>
        <div className='absolute top-50'>
          
          <p className='text-xl w-150'>
            <i className=" text-green-500 pr-10 border border-white h-10 pl-5 content-center fa-solid fa-circle-check"></i>
            <span className='font-bold pl-5 '>128% average hike</span> via our placement cell</p>
          <p className='text-xl w-150 pt-15'>
            <i className=" text-green-500 pr-10 border border-white h-10 pl-5 content-center fa-solid fa-circle-check"></i>
            <span className='font-bold pl-5'>1.5 Lac+ learners</span> cracked top tech companies</p>

          <p className='text-xl w-150 pt-15'>
            <i className=" text-green-500 pr-10 border border-white h-10 pl-5 content-center fa-solid fa-circle-check"></i>
            <span className='font-bold pl-5'>1,400+ alumni in MAANG</span> & 103 unicorn startups</p>

        </div>
      </div>
      <div className=' ml-100 bg-white text-black h-180 pt-5 border-5 w-100 rounded-3xl shadow-[0_0_30px_5px_rgba(255,200,0,0.7)] '>
        <form className='text-left pl-10'>
          <p className='text-lg font-medium pb-5'>Let's find the right course for you</p>
          <div className='font-normal text-left '>
            <label className='text-xs text-gray-900'>Experience</label> <br /> <br />
            <input type="radio" /> Working Professional - Technical Roles <br />
            <input type="radio" /> Working Professional - Non Technical <br />
            <input type="radio" /> CollegeStudent - Final Year <br />
            <input type="radio" /> CollegeStudent - 1st to Pre-final Year <br />
            <input type="radio" /> Others <br />
          </div>
          <br />

          <label className='text-xs text-gray-900'>Select topic of interest</label> <br />
          <input className='border-1 h-10 content-center w-80 pl-2 rounded-md' type="text" list='courses' placeholder='Select your options/choices' /><datalist id='courses' className='text-white'>
            <option className='text-white' value="Full Stack Development">Full Stack Development</option>
            <option value="Data Anlytics">Data Analytics</option>
          </datalist><br />

          <label className='text-xs text-gray-900'>Name</label> <br />
          <input className='border-1 h-10 content-center w-80 pl-2 rounded-md' type="text" placeholder='Enter name' /> <br />

          <label className='text-xs text-gray-900' htmlFor="">Phone Number</label> <br />
          <input className='border-1 h-10 content-center w-80 pl-2 rounded-md' type="text" placeholder='Enter phone number' /> <br />

          <label className='text-xs text-gray-900' htmlFor="">Email</label> <br />
          <input className='border-1 h-10 content-center w-80 pl-2 rounded-md' type="text" placeholder='Enter Email' /> <br /> <br />

          <button className='bg-orange-500 text-white h-8 w-80 rounded-sm font-semibold text-center cursor-pointer hover:bg-orange-300'>Find your Course</button>
          <br /> <br />

          <p className='text-[10px] text-left'>I authorise Coding Ninjas to contact me with course update &offer via <br />
            Email/SMS/Whatsapp/Call. I have read and agree to <u>Privacy Policy</u> & <u>Terms of use</u></p>

        </form>
      </div>
    </div>
  )
}

export default Hero
