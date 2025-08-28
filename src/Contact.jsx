import React from 'react'
import logo from 'D:/website/CodingNinjas-Clone/src/assets/logo-light.png'

function Contact() {
  return (
    <div className="bg-stone-900 py-12 px-20 text-gray-300">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1: Logo & Contact */}
        <div>
          <img className="h-18 w-36 mb-4" src={logo} alt="Coding Ninjas Logo" />
          <p className="text-white font-semibold mb-2">Contact us</p>
          <p><i className="fa-solid fa-phone mr-2"></i>1800-123-3598</p>
          <p><i className="fa-solid fa-envelope mr-2"></i>contact@codingninjas.com</p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-2">
          <p className="text-white font-semibold">Coding Ninjas</p>
          <a className="hover:text-orange-400 cursor-pointer">Careers</a>
          <a className="hover:text-orange-400 cursor-pointer">Privacy policy</a>
          <a className="hover:text-orange-400 cursor-pointer">Terms & conditions</a>
          <a className="hover:text-orange-400 cursor-pointer">Pricing & refund policy</a>
          <a className="hover:text-orange-400 cursor-pointer">Bug bounty</a>
          <a className="hover:text-orange-400 cursor-pointer">Review</a>
          <a className="hover:text-orange-400 cursor-pointer">Press release</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-2">
          <p className="text-white font-semibold">Products</p>
          <a className="hover:text-orange-400 cursor-pointer">Job Bootcamp</a>
          <a className="hover:text-orange-400 cursor-pointer">Code 360</a>
          <a className="hover:text-orange-400 cursor-pointer">Professional Certifications</a>
          <a className="hover:text-orange-400 cursor-pointer">Student Certifications</a>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col space-y-2">
          <p className="text-white font-semibold">Community</p>
          <a className="hover:text-orange-400 cursor-pointer">10X Club</a>
          <a className="hover:text-orange-400 cursor-pointer">Student Chapters</a>
          <a className="hover:text-orange-400 cursor-pointer">Hire from us</a>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-700" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <p>Copyright © Sunrise Mentors Pvt. Ltd.</p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <i className="fa-brands fa-instagram text-xl hover:text-orange-400 cursor-pointer"></i>
          <i className="fa-brands fa-facebook text-xl hover:text-orange-400 cursor-pointer"></i>
          <i className="fa-brands fa-linkedin text-xl hover:text-orange-400 cursor-pointer"></i>
          <i className="fa-brands fa-twitter text-xl hover:text-orange-400 cursor-pointer"></i>
          <i className="fa-brands fa-youtube text-xl hover:text-orange-400 cursor-pointer"></i>
        </div>
      </div>
    </div>
  )
}


export default Contact
