import React from 'react'
import Agent from 'D:/website/CodingNinjas-Clone/src/assets/Agent.png'
import NTech from 'D:/website/CodingNinjas-Clone/src/assets/Non-Tech.png'
import data from 'D:/website/CodingNinjas-Clone/src/assets/data.png'

function NewLaunches() {
  return (
    <div>
      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {/* Title */}
        <div className="flex items-center gap-3">
          <i class="ph ph-sparkle"></i>
          <p className="text-zinc-800 text-2xl font-semibold">
            New Launches <span className="text-zinc-800">For graduates</span>
          </p>
        </div>

        {/* Card 1 */}
        <div className='flex gap-10'>
          <div className="bg-slate-100 shadow-md rounded-2xl p-6 hover:shadow-lg/40 shadow-gray-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <img src={Agent} className="h-12 w-12" alt="Stack Logo" />
              <span className="text-xl font-bold text-zinc-800">
                Advanced Certification in GenAI & Multi Agent Systems
              </span>
            </div>
            <div className="flex gap-6 mt-4 text-gray-600 text-sm">
              <span>100+ Hrs of content</span>
              <span>300+ Problems</span>
              <span>576+ Learners</span>
            </div>
          </div>
          <div className="bg-slate-100 shadow-md rounded-2xl p-6 hover:shadow-lg/40 shadow-gray-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <img src={NTech} className="h-12 w-12" alt="Stack Logo" />
              <span className="text-xl font-bold text-zinc-800">
                Advanced Certification in GenAI for Non-tech Professionals
              </span>
            </div>
            <div className="flex gap-6 mt-4 text-gray-600 text-sm">
              <span>100+ Hrs of content</span>
              <span>300+ Problems</span>
              <span>523+ Learners</span>
            </div>
          </div>
          <div className="bg-slate-100 shadow-md rounded-2xl p-6 hover:shadow-lg/40 shadow-gray-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <img src={data} className="h-12 w-12" alt="Stack Logo" />
              <span className="text-xl font-bold text-zinc-800">
                Advanced Certification in Data Science with GenAI
              </span>
            </div>
            <div className="flex gap-6 mt-4 text-gray-600 text-sm">
              <span>140+ Hrs of content</span>
              <span>600+ Problems</span>
              <span>780+ Learners</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewLaunches
