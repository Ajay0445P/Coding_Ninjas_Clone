import React from 'react'
import stack from 'D:/website/CodingNinjas-Clone/src/assets/stack.png'
import graph from 'D:/website/CodingNinjas-Clone/src/assets/graph.png'
import IITCertification from './IITCertification'
import NewLaunches from './NewLaunches'


function Extra() {
  return (

    <div className="min-h-screen flex flex-col gap-y-10 items-center py-10">

      {/* Extra Part 1 */}

      {/* Section Title */}
      <p className="text-center text-8xl font-bold text-neutral-200 mb-10">
        OUR OFFERINGS
      </p>

      {/* Bootcamp Section */}
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {/* Title */}
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-campground text-2xl text-yellow-500"></i>
          <p className="text-zinc-800 text-2xl font-semibold">
            Job Bootcamp <span className="text-zinc-800">For graduates</span>
          </p>
        </div>

        {/* Card 1 */}
        <div className='flex gap-10'>
          <div className="bg-slate-100 shadow-md rounded-2xl p-6 hover:shadow-lg/40 shadow-gray-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <img src={stack} className="h-12 w-12" alt="Stack Logo" />
              <span className="text-xl font-bold text-zinc-800">
                Full Stack Web Development with GenAI
              </span>
            </div>
            <div className="flex gap-6 mt-4 text-gray-600 text-sm">
              <span>140+ Hrs of content</span>
              <span>600+ Problems</span>
              <span>10k+ Learners</span>
            </div>
          </div>
          <div className="bg-slate-100 shadow-md rounded-2xl p-6 hover:shadow-lg/40 shadow-gray-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <img src={graph} className="h-12 w-12" alt="Stack Logo" />
              <span className="text-xl font-bold text-zinc-800">
                Data Analytics with GenAI
              </span>
            </div>
            <div className="flex gap-6 mt-4 text-gray-600 text-sm">
              <span>100+ Hrs of content</span>
              <span>300+ Problems</span>
              <span>2000+ Learners</span>
            </div>
          </div>
        </div>
      </div>

      <IITCertification />

      <NewLaunches />

    </div>
  )
}

export default Extra
