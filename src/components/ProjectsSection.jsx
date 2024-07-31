import React from 'react';

function ProjectsSection() {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="w-full h-auto"
                id="Projects"
                style={{ backgroundColor: '#E6CCB2' }}
            >
                <path
                    fill="#7F5539"
                    fillOpacity="1"
                    d="M0,256L120,213.3C240,171,480,85,720,85.3C960,85,1200,171,1320,213.3L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
                />
            </svg>
            <section className="bg-[#7F5539] py-12">
                <div className="container mx-auto">
                    <h2 className="text-7xl font-extrabold text-center text-[#FFD275] -mt-64 mb-16 mb-6">Projects</h2>
                    <ul className="space-y-4 text-lg text-[#FFD275]">
                        <li className="flex justify-between items-center p-2 rounded-md">
                            <span className="text-5xl">Redline Project</span>
                            <span className="">Website Design</span>
                        </li>
                        <li className="flex justify-between items-center p-2 rounded-md">
                            <span className="text-5xl">Kuta Coffee</span>
                            <span className="">React Development</span>
                        </li>
                        <li className="flex justify-between items-center p-2 rounded-md">
                            <span className="text-5xl">PixelPulse Studio</span>
                            <span className="">Website Design</span>
                        </li>
                        <li className="flex justify-between items-center p-2 rounded-md">
                            <span className="text-5xl">Vooid Indumentaria</span>
                            <span className="">Branding</span>
                        </li>
                        <li className="flex justify-between items-center p-2 rounded-md">
                            <span className="text-5xl">Tower Software</span>
                            <span className="">Webflow Development</span>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default ProjectsSection;