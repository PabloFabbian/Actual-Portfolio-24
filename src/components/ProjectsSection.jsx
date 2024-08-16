import React from 'react';
import ChevronSVG from '../assets/svg/chevron-arrow-icon.svg';

function ProjectsSection() {
    return (
        <>
            <div style={{ height: '150px', overflow: 'hidden' }}
                className="bg-[#E6CCB2]">
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    style={{ height: '100%', width: '100%' }}
                >
                    <path
                        d="M-43.73,193.92 C128.38,-52.77 372.17,-43.89 562.36,206.75 L246.89,203.80 L233.92,202.80 Z"
                        style={{ stroke: 'none', fill: '#7F5539' }}
                    />
                </svg>
            </div>
            <section className="bg-[#7F5539] py-12">
                <div className="container mx-auto flex flex-col items-center mb-24">
                    <div className="relative flex flex-col items-center -mt-36">
                        <img
                            src={ChevronSVG}
                            className="h-12 w-12 rotate-180 mb-4"
                            aria-hidden="true"
                        />
                        <h2 className="font-lt-soul text-8xl font-extrabold text-center text-[#FFD275]">
                            Projects
                        </h2>
                    </div>
                </div>
                <ul className="space-y-4 text-lg text-[#FFD275] mx-16">
                    <li className="flex justify-between items-center p-2 rounded-md hover:cursor-pointer">
                        <span className="text-6xl font-lt-soul">Redline Project</span>
                        <div className="text-right">
                            <span className="">Website Design</span><br />
                            <span className="">Sales Funnel</span>
                        </div>
                    </li>
                    <hr className="border-t-1 border-[#FFD275]" />
                    <li className="flex justify-between items-center p-2 rounded-md hover:cursor-pointer">
                        <span className="text-6xl font-lt-soul">Kuta Coffee</span>
                        <div className="text-right">
                            <span className="">React Development</span><br />
                            <span className="">Website Design</span>
                        </div>
                    </li>
                    <hr className="border-t-1 border-[#FFD275]" />
                    <li className="flex justify-between items-center p-2 rounded-md hover:cursor-pointer">
                        <span className="text-6xl font-lt-soul">PixelPulse Studio</span>
                        <div className="text-right">
                            <span className="">Website Design</span><br />
                            <span className="">React Development</span>
                        </div>
                    </li>
                    <hr className="border-t-1 border-[#FFD275]" />
                    <li className="flex justify-between items-center p-2 rounded-md hover:cursor-pointer">
                        <span className="text-6xl font-lt-soul">Vooid Indumentaria</span>
                        <div className="text-right">
                            <span className="">Branding</span><br />
                            <span className="">React Development</span><br />
                            <span className="">Website Design</span>
                        </div>
                    </li>
                    <hr className="border-t-1 border-[#FFD275]" />
                    <li className="flex justify-between items-center p-2 rounded-md hover:cursor-pointer">
                        <span className="text-6xl font-lt-soul">Tower Software</span>
                        <div className="text-right">
                            <span className="">Webflow Development</span><br />
                            <span className="">React Development</span><br />
                            <span className="">Website Design</span>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default ProjectsSection;