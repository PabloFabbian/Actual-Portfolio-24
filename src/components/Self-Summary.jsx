import React, { useState, useEffect } from 'react';
import CvDoble from '../assets/CvDoble.webp';
import desarrolloImg from '../assets/Certificates/Desarrollo.webp';
import javascriptImg from '../assets/Certificates/Javascript.webp';
import reactImg from '../assets/Certificates/React.webp';
import frontendImg from '../assets/Certificates/Frontend.webp';
import campImg from '../assets/Certificates/Camp.webp';
import designImg from '../assets/Certificates/Design.webp';

const images = [desarrolloImg, javascriptImg, reactImg, frontendImg, campImg, designImg];

const CardIcon = ({ path }) => (
    <div className="flex items-center justify-center w-10 md:h-12 2xl:h-16 h-10 md:w-12 2xl:w-16 mb-4 bg-gradient-to-br from-[#9C6644]/50 to-[#7F5539]/50 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-6 2xl:h-8 w-6 md:w-6 2xl:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
        </svg>
    </div>
);

const Card = ({ children, className = "", height = "" }) => (
    <div className={`bg-gradient-to-br ${className} p-6 md:p-6 rounded-3xl shadow-xl text-white w-full ${height} transition transform hover:scale-[1.025] duration-300`}>
        {children}
    </div>
);

function SelfSummary() {
    const [cvHovered, setCvHovered] = useState(false);
    const [certificatesHovered, setCertificatesHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1280);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1280);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-gradient-to-r from-[#7C4A3A] to-[#5A3A2C] pt-24 md:pt-0 2xl:pt-12 z-20" id="About">
            <div className="container mx-auto px-6 md:mb-10 w-[96vw] md:scale-90 2xl:scale-100">
                <h2 className="font-lt-soul text-5xl md:text-6xl 2xl:text-7xl font-extrabold text-center text-[#FFE8D6] mb-8 md:mb-10 2xl:mb-16">
                    Self-Summary
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="from-[#B08968]/50 to-[#7F5539]/50 col-span-1 md:col-span-2">
                        <CardIcon path="M12 4v16m8-8H4" />
                        <h3 className="text-2xl md:text-2xl 2xl:text-3xl font-bold mb-4">Brief Professional Profile</h3>
                        <p className="md:text-sm 2xl:text-base mb-2">
                            <strong>What Inspires Me:</strong> Technology and creativity. My goal is to connect technical solutions with meaningful human experiences.
                        </p>
                        <p className="md:text-sm 2xl:text-base mb-2">
                            <strong>Personal Vision:</strong> Minimalism and functionality are key to solving future problems with smart designs.
                        </p>
                        <p className="md:text-sm 2xl:text-base">
                            <strong>Core Values:</strong> I believe continuous learning and adaptability are essential for growth in all areas of life.
                        </p>
                    </Card>

                    <Card className="from-[#9C6644]/50 to-[#7F5539]/50">
                        <CardIcon path="M9 12h6m-6 4h6m-6-8h6m-9 8h.01M3 12h.01M3 16h.01M3 8h.01M21 12h.01M21 16h.01M21 8h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />
                        <h3 className="text-2xl md:text-2xl 2xl:text-3xl font-bold mb-4">Fun Facts</h3>
                        <p className="md:text-sm 2xl:text-base">
                            Beyond software development, I am fervently passionate about immersive gaming experiences, exploring literature on personal development, and curating compelling content for social media.
                        </p>
                    </Card>

                    <div 
                        className="bg-gradient-to-br from-[#000000]/60 to-[#1a1a1a]/60 relative rounded-2xl shadow-xl overflow-hidden h-52 md:h-[17.2rem] transition-transform duration-300"
                        onMouseEnter={() => setCvHovered(true)}
                        onMouseLeave={() => setCvHovered(false)}
                    >
                        <a 
                            href='/Pablo_Fabbian-Frontend_Developer.pdf' 
                            download="Pablo_Fabbian-Frontend_Developer.pdf" 
                            className="w-full h-full flex items-center justify-center"
                        >
                            <img 
                                src={CvDoble} 
                                alt="Curriculum Vitae Thumbnail" 
                                className="w-[97%] h-full object-contain rounded-lg transition-transform duration-300"
                            />

                            <div 
                                className={`
                                    absolute inset-0 flex flex-col items-center justify-center text-white
                                    bg-gradient-to-br from-black/70 to-black/50 transition-all duration-500 ease-in-out
                                    ${cvHovered || isMobile ? 'opacity-100 backdrop-blur-[3px]' : 'opacity-0 backdrop-blur-none'}
                                `}
                            >
                                <div className="flex flex-col items-center space-y-3">
                                    <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                                      <svg 
                                        viewBox="0 0 24 24" 
                                        id="Layer_1" 
                                        data-name="Layer 1" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="#000000" 
                                        stroke="#000000"
                                        className="h-8 md:h-8 2xl:h-12 w-8 md:w-8 2xl:w-12"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <defs>
                                                <style>{`.cls-1{fill:none;stroke:#ffffff;stroke-miterlimit:10;stroke-width:1.91px;}`}</style>
                                            </defs>
                                            <path className="cls-1" d="M17.07,20.61H9.79a2,2,0,0,1-2-2,2,2,0,0,1,2-2h1.87L5,9.86a2,2,0,0,1-.19-2.65,1.88,1.88,0,0,1,1.47-.68,1.84,1.84,0,0,1,1.35.55l4.06,4.06,4.08-3.06a1.91,1.91,0,0,1,2.5.18h0A17.18,17.18,0,0,1,22.42,15l.06.19"></path>
                                            <path className="cls-1" d="M10.63,10.12A4.73,4.73,0,0,0,11,8.17,4.78,4.78,0,1,0,6.26,13a4.67,4.67,0,0,0,1.55-.26"></path>
                                        </g>
                                    </svg>
                                    </div>
                                    <span className="text-md md:text-lg 2xl:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        Descargar CV
                                    </span>
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                                </div>
                                
                                {/* Decorative elements */}
                                <div className="absolute top-4 left-4 w-8 h-8 border border-white/20 rounded-full"></div>
                                <div className="absolute bottom-4 right-4 w-6 h-6 border border-white/20 rounded-full"></div>
                            </div>
                        </a>
                    </div>

                    <Card className="from-[#B08968]/70 to-[#9C7F5C]/70 col-span-1 md:col-span-2">
                        <CardIcon path="M5 12h14M12 5l7 7-7 7" />
                        <h3 className="text-2xl md:text-2xl 2xl:text-3xl font-bold mb-4">Featured Projects</h3>
                        <p className="md:text-sm 2xl:text-base mb-2">
                            <strong>Key Achievement:</strong> Successfully delivered multiple freelance projects that improved user experiences and client satisfaction.
                        </p>
                        <p className="md:text-sm 2xl:text-base">
                            <strong>Impact:</strong> Transitioned a WordPress site to React, significantly enhancing performance and increasing load speeds by a considerable percentage.
                        </p>
                    </Card>

                    <Card className="from-[#9C6644]/70 to-[#8A4E36]/70 md:h-[19rem] 2xl:h-[22rem]">
                        <CardIcon path="M5 12h14M12 5l7 7-7 7" />
                        <h3 className="text-2xl md:text-2xl 2xl:text-3xl font-bold md:mb-2">Personal Quote</h3>
                        <div className="flex flex-col items-center justify-center min-h-[142.5px]">
                            <p className="text-lg md:text-lg 2xl:text-[1.6rem] italic font-lt-soul text-center md:leading-7 2xl:leading-9">
                                "Design goes beyond appearance and sensation; it encompasses functionality."
                            </p>
                        </div>
                    </Card>

                    <Card className="from-[#B08968]/70 to-[#A17757]/70 md:h-[19rem] 2xl:h-[22rem]">
                        <CardIcon path="M12 4v16m8-8H4" />
                        <h3 className="text-2xl md:text-2xl 2xl:text-3xl font-bold mb-4">Work Style</h3>
                        <p className="md:text-sm 2xl:text-base md:mt-4 2xl:mt-6 mb-2 2xl:mb-4">
                            <strong>Methodology:</strong> I work with agile methodologies to deliver iterative results that meet clients' changing needs.
                        </p>
                        <p className="md:text-sm 2xl:text-base">
                            <strong>Collaboration:</strong> I enjoy working in teams, sharing ideas, and learning from others to build products that have a positive impact.
                        </p>
                    </Card>

                    <div 
                        className="relative rounded-2xl shadow-xl overflow-hidden h-5/6 md:h-[19rem] 2xl:h-[22rem]"
                        onMouseEnter={() => setCertificatesHovered(true)}
                        onMouseLeave={() => setCertificatesHovered(false)}
                    >
                        <div className="flex w-full h-full transition-transform duration-1000 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {images.map((image, index) => (
                                <img key={index} src={image} alt={`Certificate ${index + 1}`}
                                    className="w-full h-full object-contain bg-[#1c1d1e]/70 flex-none" />
                            ))}
                        </div>

                        <div 
                            className={`
                                absolute inset-0 flex flex-col items-center justify-center text-white px-8 py-6
                                bg-gradient-to-br from-black/70 to-black/50 transition-all duration-500 ease-in-out
                                ${certificatesHovered || isMobile ? 'opacity-100 backdrop-blur-[3px]' : 'opacity-0 backdrop-blur-none'}
                            `}
                        >
                            <div className="text-center space-y-4">
                                <h3 className="text-xl 2xl:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    Formaciones Completadas
                                </h3>
                                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
                                <div className="space-y-3 text-sm 2xl:text-base">
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        <span className="font-medium">Certificación Frontend - Coderhouse</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span className="font-medium">Certificación Diseño UX/UI - Platzi</span>
                                    </div>
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                        <span className="font-medium">Certificación en Desarrollo Tecnológico - Coderhouse</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-4 left-4 w-12 h-12 border border-white/20 rounded-full"></div>
                            <div className="absolute bottom-4 right-4 w-8 h-8 border border-white/20 rounded-full"></div>
                            <div className="absolute top-1/2 left-4 w-1 h-8 bg-gradient-to-b from-blue-400/50 to-transparent rounded-full"></div>
                            <div className="absolute top-1/2 right-4 w-1 h-8 bg-gradient-to-b from-purple-400/50 to-transparent rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`bg-[#F3D5B5] ${isMobile ? 'h-16' : 'h-[150px]'} -mt-2 md:mt-0 overflow-hidden`}>
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" 
                     className="w-full rotate-180" 
                     style={{ height: isMobile ? '70%' : '100%' }}>
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#5A3A2C" />
                            <stop offset="100%" stopColor="#7C4A3A" />
                        </linearGradient>
                    </defs>
                    <path d="M-43.73,193.92 C128.38,-52.77 372.17,-43.89 562.36,206.75 L246.89,203.80 L233.92,202.80 Z" 
                          fill="url(#grad1)" />
                </svg>
            </div>
        </section>
    );
}

export default SelfSummary;