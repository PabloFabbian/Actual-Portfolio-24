import React from 'react'

function SelfSummary() {
    return (
        <>
            <section className="bg-gradient-to-b from-orange-100 to-orange-300 py-12" id="About">
                {/* Container to Center the Content */}
                <div className="container mx-auto text-center">
                    {/* Title */}
                    <h2 className="text-5xl font-extrabold text-orange-700 mb-8">Self-Summary</h2>
                    {/* Grid Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* First Grid: Avatar and Name */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
                            <div className="flex items-center mb-4">
                                {/* Avatar Image */}
                                <img src="avatar.jpg" alt="Pablo Fabbian" className="w-16 h-16 rounded-full mr-4" />
                                <div>
                                    {/* Name */}
                                    <h3 className="text-xl font-bold text-orange-700">Pablo Fabbian</h3>
                                    {/* Job Title */}
                                    <p className="text-gray-700">Frontend React Developer</p>
                                </div>
                            </div>
                            {/* Description */}
                            <p className="text-gray-800">Graduated in Frontend React Development, passionate about creating intuitive and attractive interfaces. I enjoy collaborating in a team and am looking for a job that allows me to grow professionally while continuing my education.</p>
                        </div>
                        {/* Second Grid: Work Experience */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
                            <h4 className="text-lg font-semibold text-orange-600">EXPERIENCE</h4>
                            <p className="text-gray-700 mt-2">Trial Class Manager | Kodland, Londres, UK</p>
                            <p className="text-gray-600 text-sm mt-2">Capacitación a empleados de diversas áreas, soporte y control de actividades.</p>
                        </div>
                        {/* Third Grid: Education */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
                            <h4 className="text-lg font-semibold text-orange-600">EDUCATION</h4>
                            <p className="text-gray-700 mt-2">2007 - 2009 | Bachiller en Ciencias Sociales</p>
                            <p className="text-gray-700 mt-2">Coderehouse, e-learning Universidad de Buenos Aires</p>
                        </div>
                        {/* Fourth Grid: Current Education */}
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
                            <h4 className="text-lg font-semibold text-orange-600">EDUCATION</h4>
                            <p className="text-gray-700 mt-2">2022 - Actualidad | Technical Degree in Frontend React</p>
                            <p className="text-gray-600 text-sm mt-2">Implementation of efficient systems in diverse environments.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SelfSummary