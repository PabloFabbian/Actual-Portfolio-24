import React from 'react';
import CvDoble from '../assets/CvDoble.png'

function SelfSummary() {
    const pdfUrl = "https://drive.google.com/file/d/1bgoJh80yXdfkdtZQ6FeTzuAWuGxHMjYt/view?usp=sharing";

    return (
        <section className="bg-[#7F5539] pt-12" id="About">
            <div className="container mx-auto px-4">
                <h2 className="font-lt-soul text-7xl font-medium text-center text-[#FFD275] mb-12">
                    Self-Summary
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Professional Profile */}
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-6 rounded-lg shadow-lg col-span-2 text-white">
                        <h3 className="text-2xl font-bold mb-4">Brief Professional Profile</h3>
                        <p className="mb-2">
                            <strong>What Inspires Me:</strong> Technology and creativity. My goal is to connect technical solutions with meaningful human experiences.
                        </p>
                        <p>
                            <strong>Personal Vision:</strong> Minimalism and functionality are key to solving future problems with smart designs.
                        </p>
                    </div>

                    {/* Fun Facts */}
                    <div className="bg-gradient-to-br from-green-400 to-blue-500 p-6 rounded-lg shadow-lg text-white">
                        <h3 className="text-2xl font-bold mb-4">Fun Facts</h3>
                        <p>
                            Besides software development, I enjoy urban photography and long-distance cycling. These hobbies help me keep a clear and creative mind.
                        </p>
                    </div>

                    {/* PDF Thumbnail */}
                    <div className="relative rounded-lg shadow-lg overflow-hidden h-48">
                        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                            <img
                                src={CvDoble}
                                alt="Curriculum Vitae Thumbnail"
                                className="w-full h-full object-contain cursor-pointer"
                            />
                        </a>
                    </div>

                    {/* Featured Projects */}
                    <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg text-white col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Featured Projects</h3>
                        <p className="mb-2">
                            <strong>Key Achievement:</strong> Developed an e-commerce platform that allowed over 500 local stores to increase their online sales during the pandemic.
                        </p>
                        <p>
                            <strong>Impact:</strong> Increased conversions by 35% through optimizing the user interface and improving load times.
                        </p>
                    </div>

                    {/* Personal Quote */}
                    <div className="bg-gradient-to-br from-pink-500 to-red-500 p-6 rounded-lg shadow-lg text-white">
                        <h3 className="text-2xl font-bold mb-4">Personal Quote</h3>
                        <p className="text-xl italic">
                            "Design is not just what it looks like and feels like. Design is how it works."
                        </p>
                    </div>

                    {/* Work Style */}
                    <div className="bg-gradient-to-br from-teal-400 to-blue-500 p-6 rounded-lg shadow-lg text-white">
                        <h3 className="text-2xl font-bold mb-4">Work Style</h3>
                        <p className="mb-2">
                            <strong>Methodology:</strong> I work with agile methodologies to deliver iterative results that meet clients' changing needs.
                        </p>
                        <p>
                            <strong>Collaboration:</strong> I enjoy working in teams, sharing ideas, and learning from others to build products that have a positive impact.
                        </p>
                    </div>

                    {/* Image 2 */}
                    <div className="relative rounded-lg shadow-lg overflow-hidden h-50">
                        <img src="https://via.placeholder.com/384x192" alt="Curriculum Vitae Thumbnail" className="w-full h-full object-cover cursor-pointer" />
                    </div>
                </div>
            </div>

            <div style={{ height: '150px', overflow: 'hidden' }} className="bg-[#F3D5B5]">
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    style={{ height: '100%', width: '100%', transform: 'rotate(180deg)' }}
                >
                    <path
                        d="M-43.73,193.92 C128.38,-52.77 372.17,-43.89 562.36,206.75 L246.89,203.80 L233.92,202.80 Z"
                        style={{ stroke: 'none', fill: '#7F5539' }}
                    />
                </svg>
            </div>
        </section>
    );
}

export default SelfSummary;