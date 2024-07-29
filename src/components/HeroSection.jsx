import React from 'react'
import Olas from '../assets/olas.jpg'

function HeroSection() {
  return (
    <>
      <section className="bg-[#E6CCB2] py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="flex-1 md:mr-12 mb-6 md:mb-0">
            <h2 className="text-5xl font-extrabold text-orange-600">Pablo Fabbian</h2>
            <p className="text-xl text-gray-800 mt-4">is a frontend developer who’s passionate about UX/UI and creating beautiful and functional digital experiences.</p>
            <div className="flex items-center mt-4 text-gray-600">
              {/* location icon from heroicons */}
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 7 7 13 7 13s7-6 7-13c0-3.87-3.13-7-7-7zm0 9.75A2.75 2.75 0 119 9c0 1.518 1.232 2.75 2.75 2.75z"></path>
              </svg>
              Buenos Aires, Argentina
            </div>
          </div>
          <img src={Olas} alt="Avatar" className="w-48 h-48 rounded-full" />
        </div>
      </section>
    </>
  )
}

export default HeroSection