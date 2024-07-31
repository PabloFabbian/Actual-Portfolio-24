import React from 'react';
import Olas from '../assets/olas.jpg';

function HeroSection() {
  return (
    <>
      <section className="bg-[#E6CCB2] pt-24" id="Home">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-[65vh] pb-16 -mb-32">
          <div className="flex-1 md:mr-12 md:-mb-6">
            <h2 className="text-[5rem] font-extrabold inline-flex items-center text-gradient -mb-3">
              Pablo Fabbian
              <svg className="h-[4.5rem] ml-6 -mb-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFB524">
                      <animate attributeName="stop-color" values="#FFB524; #FF873E; #FFB524" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#FF873E">
                      <animate attributeName="stop-color" values="#FF873E; #FFB524; #FF873E" dur="3s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                </defs>
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    stroke="url(#gradient)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                    d="M11.28 5.72a.75.75 0 010 1.06l-4 4a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 011.06-1.06l.97.97 3.47-3.47a.75.75 0 011.06 0z"
                  ></path>
                  <path
                    fill="none"
                    stroke="url(#gradient)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.1"
                    d="M6.402 1.22a2.75 2.75 0 013.196 0l.69.493c.154.11.332.184.519.215l.865.146a2.75 2.75 0 012.254 2.254l.146.866c.031.187.105.364.215.518l.493.69a2.75 2.75 0 010 3.197l-.493.69c-.11.154-.184.33-.215.518l-.146.865a2.75 2.75 0 01-2.254 2.254l-.865.146a1.25 1.25 0 00-.519.216l-.69.492a2.75 2.75 0 01-3.196 0l-.69-.492a1.25 1.25 0 00-.519-.216l-.865-.146a2.75 2.75 0 01-2.254-2.254l-.146-.865a1.25 1.25 0 00-.215-.519l-.493-.69a2.75 2.75 0 010-3.196l.493-.69a1.25 1.25 0 00.215-.518l.146-.866a2.75 2.75 0 012.254-2.254l.865-.146a1.25 1.25 0 00.519-.215l.69-.493zm2.324 1.22a1.25 1.25 0 00-1.453 0l-.69.493a2.75 2.75 0 01-1.14.474l-.865.146a1.25 1.25 0 00-1.025 1.025l-.146.865a2.75 2.75 0 01-.474 1.141l-.492.69a1.25 1.25 0 000 1.453l.492.69c.243.339.405.729.474 1.14l.146.865c.089.525.5.936 1.025 1.025l.865.146c.411.07.801.232 1.14.474l.69.493a1.25 1.25 0 001.454 0l.69-.493a2.75 2.75 0 011.14-.474l.865-.146a1.25 1.25 0 001.025-1.024l.146-.866a2.75 2.75 0 01.474-1.14l.492-.69a1.25 1.25 0 000-1.453l-.492-.69a2.75 2.75 0 01-.474-1.14l-.146-.866a1.25 1.25 0 00-1.025-1.025l-.865-.146a2.75 2.75 0 01-1.14-.474l-.69-.492z"
                  ></path>
                </g>
              </svg>
            </h2>
            <p className="font-lt-soul font-semibold text-4xl text-[#9C6644] ml-1 mt-4 pr-40 pb-2">is a frontend developer who’s passionate about UX/UI and creating beautiful and functional digital experiences.</p>
            <div className="flex items-center mt-4 text-xl text-gray-600">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 7 7 13 7 13s7-6 7-13c0-3.87-3.13-7-7-7zm0 9.75A2.75 2.75 0 119 9c0 1.518 1.232 2.75 2.75 2.75z"></path>
              </svg>
              Buenos Aires, Argentina
            </div>
          </div>
          <img src={Olas} alt="Avatar" className="w-80 h-80 rounded-full" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;