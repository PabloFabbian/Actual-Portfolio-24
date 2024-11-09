import React from 'react';
import { motion } from 'framer-motion';
import AvatarAI from '../assets/AI Profile 2.mp4';
import BuenosAiresSVG from '../assets/svg/world-location-icon.svg';
import LinkedinSVG from '../assets/svg/linkedin-icon.svg';
import GithubSVG from '../assets/svg/github-icon.svg';
import ThreadsSVG from '../assets/svg/twitter-icon.svg';

function HeroSection() {
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.75, when: "beforeChildren", staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };

  return (
    <section className="bg-[#F3D5B5] pt-12 md:pt-24 pb-12 md:pb-36 md:w-[90%] mx-auto" id="Home">
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center justify-center h-auto md:h-[65vh] pt-8 md:pt-16 pb-8 md:pb-16 -mb-16 md:-mb-32"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <div className="flex-1 text-center md:text-left">
          <motion.div className="-mt-20 md:mt-0 mb-6 drop-shadow-sm md:drop-shadow-none" variants={fadeInUp}>
            <motion.h1 className="text-[2.12rem] md:text-[3.6rem] 2xl:text-[5rem] font-extrabold inline-flex items-center text-[#FF6B4D]">
              Hi there, my name is&nbsp;
            </motion.h1>
            <motion.h2
              className="text-[2.12rem] md:text-[3.6rem] 2xl:text-[5rem] font-black md:font-extrabold inline-flex items-center text-gradient -mb-3 -mt-3 md:-mt-5 2xl:-mt-8"
              variants={fadeInUp}
            >
              Pablo Fabbian
              <svg className="h-[2.25rem] md:h-[3.8rem] 2xl:h-[4.5rem] ml-2 md:ml-8 mb-0 md:-mb-4 md:-mt-2 2xl:mt-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
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
                <path
                  stroke="url(#gradient)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.1"
                  d="M11.28 5.72a.75.75 0 010 1.06l-4 4a.75.75 0 01-1.06 0l-1.5-1.5a.75.75 0 011.06-1.06l.97.97 3.47-3.47a.75.75 0 011.06 0z"
                />
                <path
                  fill="none"
                  stroke="url(#gradient)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.1"
                  d="M6.402 1.22a2.75 2.75 0 013.196 0l.69.493c.154.11.332.184.519.215l.865.146a2.75 2.75 0 012.254 2.254l.146.866c.031.187.105.364.215.518l.493.69a2.75 2.75 0 010 3.197l-.493.69c-.11.154-.184.33-.215.518l-.146.865a2.75 2.75 0 01-2.254 2.254l-.865.146a1.25 1.25 0 00-.519.216l-.69.492a2.75 2.75 0 01-3.196 0l-.69-.492a1.25 1.25 0 00-.519-.216l-.865-.146a2.75 2.75 0 01-2.254-2.254l-.146-.865a1.25 1.25 0 00-.215-.519l-.493-.69a2.75 2.75 0 010-3.196l.493-.69a1.25 1.25 0 00.215-.518l.146-.866a2.75 2.75 0 012.254-2.254l.865-.146a1.25 1.25 0 00.519-.215l.69-.493zm2.324 1.22a1.25 1.25 0 00-1.453 0l-.69.493a2.75 2.75 0 01-1.14.474l-.865.146a1.25 1.25 0 00-1.025 1.025l-.146.865a2.75 2.75 0 01-.474 1.141l-.492.69a1.25 1.25 0 000 1.453l.492.69c.243.339.405.729.474 1.14l.146.865c.089.525.5.936 1.025 1.025l.865.146c.411.07.801.232 1.14.474l.69.493a1.25 1.25 0 001.454 0l.69-.493a2.75 2.75 0 011.14-.474l.865-.146a1.25 1.25 0 001.025-1.024l.146-.866a2.75 2.75 0 01.474-1.14l.492-.69a1.25 1.25 0 000-1.453l-.492-.69a2.75 2.75 0 01-.474-1.14l-.146-.866a1.25 1.25 0 00-1.025-1.025l-.865-.146a2.75 2.75 0 01-1.14-.474l-.69-.492z"
                />
              </svg>
            </motion.h2>
          </motion.div>
          <motion.p
            className="font-lt-soul font-semibold text-xl md:text-2xl 2xl:text-4xl text-[#9C6644] md:ml-1 mt-4 md:pr-40 pb-0 md:pb-0 2xl:pb-2 mx-1 text-pretty"
            variants={fadeInUp}
          >
            I'm a frontend developer who’s passionate about UX/UI and creating beautiful and functional digital experiences.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row items-center mt-4 md:text-md 2xl:text-lg text-gray-600"
            variants={container}
          >
            <motion.div className="social-pills flex items-center mb-4 md:mb-0 mt-4 md:mt-0" variants={item}>
              <img src={BuenosAiresSVG} alt="Buenos Aires, Argentina" className="w-5 md:w-5 2xl:w-6 w-5 md:h-5 2xl:h-6 md:ml-2 mr-2 md:mr-4" />
              Buenos Aires, Argentina
            </motion.div>
            <motion.div
              className="social-pills flex justify-center md:justify-left ml-0 md:ml-6 space-x-4 scale-90 order-first md:order-last"
              variants={container}
            >
              <motion.a href="https://www.linkedin.com/in/pablofabbian/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin Profile" className="linkedin-icon inline-flex items-center rounded-full border-[0.5px] border border-black py-1 md:h-8 2xl:h-12 w-auto px-3 2xl:px-4 text-sm 2xl:text-base group hover:cursor-none" variants={item} whileHover={{ scale: 1.1, borderColor: "#3b82f6", color: "#1d4ed8" }} >
                <img src={LinkedinSVG} alt="Linkedin" className="w-4 md:w-5 2xl:w-7 h-4 md:h-5 2xl:h-7 mr-2" /> Linkedin
              </motion.a>
              <motion.a href="https://github.com/PabloFabbian" target="_blank" rel="noopener noreferrer" aria-label="Github Profile" className="github-icon inline-flex items-center rounded-full border-[0.5px] border-black py-1 md:h-8 2xl:h-12 w-auto px-3 2xl:px-4 text-sm 2xl:text-base group hover:cursor-none" variants={item} whileHover={{ scale: 1.1, borderColor: "#8b5cf6", color: "#6d28d9" }} >
                <img src={GithubSVG} alt="Github" className="w-4 md:w-5 2xl:h-7 w-4 md:h-5 2xl:w-7 mr-2" /> Github
              </motion.a>
              <motion.a href="https://www.threads.net/@pablo.fabbian" target="_blank" rel="noopener noreferrer" aria-label="Threads Profile" className="threads-icon inline-flex items-center rounded-full border-[0.5px] border border-black py-1 md:h-8 2xl:h-12 w-auto px-3 2xl:px-4 text-sm 2xl:text-base group hover:cursor-none" variants={item} whileHover={{ scale: 1.1, borderColor: "#6366f1", color: "#4338ca" }} >
                <img src={ThreadsSVG} alt="Threads" className="w-4 md:w-5 2xl:h-7 w-4 md:h-5 2xl:w-7 mr-2" /> Threads
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="flex justify-center order-first md:order-last"
          variants={fadeInUp}
        >
          <video
            src={AvatarAI}
            className="w-60 md:w-72 2xl:w-96 h-auto rounded-full md:drop-shadow-xl mt-2 mb-4 md:mt-4 2xl:mt-8"
            autoPlay
            loop
            muted
          ></video>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;