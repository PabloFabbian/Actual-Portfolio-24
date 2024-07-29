import React from 'react'

function ProjectsSection() {
    return (
        <>
            <section className="bg-[#7F5539] py-12">
                <div className="container mx-auto">
                    <h2 className="text-7xl font-extrabold text-center text-[#FFD275] mb-6">Projects</h2>
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
    )
}

export default ProjectsSection