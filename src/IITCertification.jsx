import React from 'react'
import IIT from 'D:/website/CodingNinjas-Clone/src/assets/guwahati.jpg'
import IITM from 'D:/website/CodingNinjas-Clone/src/assets/pravartak.webp'

function IITCertification() {
  return (
    <div className='flex flex-col gap-y-15 gap-6 w-full max-w-5xl bg-orange-50 h-full '>
      {/* Extra Part 2 */}

      <div className="flex flex-col gap-y-10">
        {/* Title2 */}
        <div className="flex items-center gap-6 w-full max-w-5xl h-full">
          <p className="text-zinc-800 text-2xl font-semibold flex flex-col gap-y-5">
            <span className='flex items-center gap-5'><i className="fa-solid fa-campground text-2xl text-yellow-500"></i>
              IIT Certification</span> <span className="text-white ml-10 p-1 pl-3 rounded-3xl items-center bg-yellow-800">For graduates</span>
          </p>
        </div>

        {/* Card 1 */}
        <div className='flex gap-10'>
          <div className="bg-slate-100 w-180 shadow-md rounded-2xl p-6 hover:shadow-lg/40 shadow-gray-300 cursor-pointer">
            <div className="flex flex-col items-center gap-4">
              <img src={IIT} className="h-32 w-62 rounded-2xl opacity-70" />
              <span className="text-xl font-bold text-zinc-800">
                PG Certification in Data Analytics with GenAI
              </span>
            </div>
            <div className="flex gap-6 mt-4 text-gray-600 text-sm">
              <span className='bg-orange-50 text-yellow-900 font-semibold p-2 rounded-xl'>E&ICT Academy, IIT Guwahati</span>
            </div>
            <div className='flex justify-end pt-17'>
              <span>6 Months</span>
            </div>
          </div>
          {/* Card 2 */}

          <div className="bg-slate-100 w-180 shadow-md rounded-2xl p-6 hover:shadow-lg/40 shadow-gray-300 cursor-pointer">
            <div className="flex flex-col items-center gap-4">
              <img src={IIT} className="h-32 w-62 rounded-2xl opacity-70" />
              <span className="text-xl font-bold text-zinc-800">
                PG Certification in Data Science with GenAI
              </span>
            </div>
            <div className="flex gap-6 mt-4 text-gray-600 text-sm">
              <span className='bg-orange-50 text-yellow-900 font-semibold p-2 rounded-xl'>E&ICT Academy, IIT Guwahati</span>
            </div>
            <div className='flex justify-end pt-17'>
              <span>9 Months</span>
            </div>
          </div>
          {/* Card 3 */}


          <div className="bg-slate-100 shadow-md rounded-2xl p-6 w-180 h-100 hover:shadow-lg/40 shadow-gray-300 cursor-pointer">
            <div className="flex flex-col gap-y-5  items-center gap-4">
              <img src={IITM} className="h-32 w-62 rounded-2xl opacity-70" />
              <div className=''>
                <span className="text-xl font-bold text-zinc-800">
                  Advanced Certification in GenAI for Non-Tech Professionals
                </span>
              </div>
            </div>
            <div className="flex gap-6 mt-4 text-gray-600 text-sm">
              <span className='bg-orange-50 text-yellow-900 font-semibold p-2 rounded-xl'>IITM Pravartak, TIH IIT Madras</span>
            </div>
            <div className='flex justify-end pt-10'>
              <span>6 Months</span>
            </div>
          </div>
        </div>
      </div>

      {/* For College Students */}

      <div className="flex flex-col gap-y-10 w-full max-w-5xl bg-orange-50 h-full">
        {/* Title2 */}
        <div className="flex items-center gap-6 w-full max-w-5xl h-full">
          <p className="text-zinc-800 text-2xl font-semibold flex flex-col gap-y-5">
           <span className="text-white ml-10 p-1 pl-3 pr-3 rounded-3xl items-center bg-yellow-800">For College-Students</span>
          </p>
        </div>

        {/* Card 1 */}
        <div className='flex gap-10'>
          <div className="bg-slate-100 w-180 shadow-md rounded-2xl p-6 hover:shadow-lg/40 shadow-gray-300 cursor-pointer">
            <div className="flex flex-col items-center gap-4">
              <img src={IITM} className="h-32 w-62 rounded-2xl opacity-70" />
              <span className="text-xl font-bold text-zinc-800">
               Training and Internship Certification in Advanced DSA
              </span>
            </div>
            <div className="flex gap-6 mt-4 text-gray-600 text-sm">
              <span className='bg-orange-50 text-yellow-900 font-semibold p-2 rounded-xl'>IITM Pravartak, TIH IIT Madras</span>
            </div>
            <div className='flex justify-end pt-17'>
              <span>4 Months</span>
            </div>
          </div>
          {/* Card 2 */}

          <div className="bg-slate-100 w-180 shadow-md rounded-2xl p-6 hover:shadow-lg/40 shadow-gray-300 cursor-pointer">
            <div className="flex flex-col items-center gap-4">
              <img src={IIT} className="h-32 w-62 rounded-2xl opacity-70" />
              <span className="text-xl font-bold text-zinc-800">
                Training and Internship Certification in Data Analytics
              </span>
            </div>
            <div className="flex gap-6 mt-4 text-gray-600 text-sm">
              <span className='bg-orange-50 text-yellow-900 font-semibold p-2 rounded-xl'>E&ICT Academy, IIT Guwahati</span>
            </div>
            <div className='flex justify-end pt-17'>
              <span>6 Months</span>
            </div>
          </div>
          {/* Card 3 */}


          <div className="bg-slate-100 shadow-md rounded-2xl p-6 w-180 h-105 hover:shadow-lg/40 shadow-gray-300 cursor-pointer">
            <div className="flex flex-col gap-y-5  items-center gap-4">
              <img src={IITM} className="h-32 w-62 rounded-2xl opacity-70" />
              <div className=''>
                <span className="text-xl font-bold text-zinc-800">
                  Training and Internship Certification in Full Stack Web Development
                </span>
              </div>
            </div>
            <div className="flex gap-6 mt-4 text-gray-600 text-sm">
              <span className='bg-orange-50 text-yellow-900 font-semibold p-2 rounded-xl'>IITM Pravartak, TIH IIT Madras</span>
            </div>
            <div className='flex justify-end pt-17'>
              <span>9 Months</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default IITCertification
