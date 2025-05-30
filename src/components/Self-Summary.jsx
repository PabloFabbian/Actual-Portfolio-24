    import React, { useState, useEffect, useRef } from 'react'; 
    import CvDoble from '../assets/CvDoble.webp';
    import desarrolloImg from '../assets/Certificates/Desarrollo.webp';
    import javascriptImg from '../assets/Certificates/Javascript.webp';
    import reactImg from '../assets/Certificates/React.webp';
    import frontendImg from '../assets/Certificates/Frontend.webp';
    import campImg from '../assets/Certificates/Camp.webp';

    const images = [
        desarrolloImg,
        javascriptImg,
        reactImg,
        frontendImg,
        campImg,
    ];

    function SelfSummary() {
        const [hovered, setHovered] = useState(false);
        const [isMobile, setIsMobile] = useState(false);
        const [currentIndex, setCurrentIndex] = useState(0);
        const [isTransitioning, setIsTransitioning] = useState(true);

        const totalImages = images.length;
        const transitionDuration = 1000;
        const carouselRef = useRef(null);

        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth < 1280);
            };

            handleResize();
            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, []);

        useEffect(() => {
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => prevIndex + 1);
            }, 3500);
            return () => clearInterval(intervalId);
        }, []);

        useEffect(() => {
            if (currentIndex === totalImages + 1) {
                setTimeout(() => {
                    setIsTransitioning(false);
                    setCurrentIndex(1);
                }, transitionDuration);
            }

            if (currentIndex === 0) {
                setTimeout(() => {
                    setIsTransitioning(false);
                    setCurrentIndex(totalImages);
                }, transitionDuration);
            }
        }, [currentIndex, totalImages]);

        useEffect(() => {
            if (!isTransitioning) {
                setTimeout(() => {
                    setIsTransitioning(true);
                }, 50);
            }
        }, [isTransitioning]);

        return (
            <section className="bg-gradient-to-r from-[#7C4A3A] to-[#5A3A2C] pt-24 md:pt-0 2xl:pt-12 z-20" id="About">
                <div className="container mx-auto px-6 md:mb-10 w-[96vw] md:scale-90 2xl:scale-100">
                    <h2 className="font-lt-soul text-5xl md:text-6xl 2xl:text-7xl font-extrabold text-center text-[#FFE8D6] mb-8 md:mb-10 2xl:mb-12">
                        Self-Summary
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-gradient-to-br from-[#B08968]/50 to-[#7F5539]/50 p-6 md:p-8 rounded-lg shadow-xl col-span-1 md:col-span-2 text-white w-full h-full transition transform hover:scale-105 duration-300">
                            <div className="flex items-center justify-center w-10 md:h-12 2xl:h-16 h-10 md:w-12 2xl:w-16 mb-4 bg-gradient-to-br from-[#9C6644]/50 to-[#7F5539]/50 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-6 2xl:h-8 w-6 md:w-6 2xl:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-2xl 2xl:text-3xl font-bold mb-4">Brief Professional Profile</h3>
                            <p className="md:text-sm 2xl:text-base mb-2">
                                <strong>What Inspires Me:</strong> Technology and creativity. My goal is to connect technical solutions with meaningful human experiences.
                            </p>
                            <p className="md:text-sm 2xl:text-base mb-2">
                                <strong>Personal Vision:</strong> Minimalism and functionality are key to solving future problems with smart designs.
                            </p>
                            <p className="md:text-sm 2xl:text-base ">
                                <strong>Core Values:</strong> I believe continuous learning and adaptability are essential for growth in all areas of life.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[#9C6644]/50 to-[#7F5539]/50 p-6 md:p-8 rounded-lg shadow-xl text-white w-full h-full transition transform hover:scale-105 duration-300">
                            <div className="flex items-center justify-center w-10 md:h-12 2xl:h-16 h-10 md:w-12 2xl:w-16 mb-4 bg-gradient-to-br from-[#9C6644]/50 to-[#7F5539]/50 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-6 2xl:h-8 w-6 md:w-6 2xl:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m-6-8h6m-9 8h.01M3 12h.01M3 16h.01M3 8h.01M21 12h.01M21 16h.01M21 8h.01M12 21a9 9 0 100-18 9 9 0 000 18z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-2xl 2xl:text-3xl font-bold mb-4">Fun Facts</h3>
                            <p className="md:text-sm 2xl:text-base">
                            Beyond software development, I am fervently passionate about immersive gaming experiences, exploring literature on personal development, and curating compelling content for social media.
                            </p>
                        </div>

                        <div 
                            className="bg-gradient-to-br from-[#000000]/60 to-[#1a1a1a]/60 relative rounded-lg shadow-xl overflow-hidden h-52 md:h-[17.2rem] transition transform hover:scale-105 duration-300"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <a 
                                href='/Pablo_Fabbian-Frontend_Developer.pdf'
                                download="Pablo_Fabbian-Frontend_Developer.pdf"
                                className="w-full h-full flex items-center justify-center"
                            >
                                <img
                                    src={CvDoble}
                                    alt="Curriculum Vitae Thumbnail"
                                    className="w-[97%] h-full object-contain rounded-lg"
                                />
                                {(hovered || isMobile) && (
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white md:text-sm 2xl:text-lg font-bold">
                                        <svg viewBox="0 0 24 24" fill="white" className="h-7 md:h-8 2xl:h-10 w-7 md:w-8 2xl:w-10" stroke="white" strokeWidth="0.5">
                                            <path d="M17.07,20.61H9.79a2,2,0,0,1-2-2,2,2,0,0,1,2-2h1.87L5,9.86a2,2,0,0,1-.19-2.65,1.88,1.88,0,0,1,1.47-.68,1.84,1.84,0,0,1,1.35.55l4.06,4.06,4.08-3.06a1.91,1.91,0,0,1,2.5.18h0A17.18,17.18,0,0,1,22.42,15l.06.19"></path>
                                            <path d="M10.63,10.12A4.73,4.73,0,0,0,11,8.17A4.78,4.78,0,1,0,6.26,13a4.67,4.67,0,0,0,1.55-.26"></path>
                                        </svg>
                                        Click to download my CV
                                    </div>
                                )}
                            </a>
                        </div>

                        <div className="bg-gradient-to-br from-[#B08968]/70 to-[#9C7F5C]/70 p-6 md:p-8 rounded-lg shadow-xl text-white col-span-1 md:col-span-2 w-full h-full transition transform hover:scale-105 duration-300">
                            <div className="flex items-center justify-center w-10 md:h-12 2xl:h-16 h-10 md:w-12 2xl:w-16 mb-4 bg-gradient-to-br from-[#9C6644]/50 to-[#7F5539]/50 rounded-full">
                                {/* Icono SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-6 2xl:h-8 w-6 md:w-6 2xl:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-2xl 2xl:text-3xl font-bold mb-4">Featured Projects</h3>
                            <p className="md:text-sm 2xl:text-base mb-2">
                                <strong>Key Achievement:</strong> Successfully delivered multiple freelance projects that improved user experiences and client satisfaction.
                            </p>
                            <p className="md:text-sm 2xl:text-base">
                                <strong>Impact:</strong> Transitioned a WordPress site to React, significantly enhancing performance and increasing load speeds by a considerable percentage.
                            </p>
                        </div>

                        <div className="bg-gradient-to-tr from-[#9C6644]/70 to-[#8A4E36]/70 p-6 md:p-8 rounded-lg shadow-xl text-white w-full md:h-[19rem] 2xl:h-[22rem] transition transform hover:scale-105 duration-300">
                            <div className="flex items-center justify-center w-10 md:h-12 2xl:h-16 h-10 md:w-12 2xl:w-16 mb-4 bg-gradient-to-br from-[#9C6644]/50 to-[#7F5539]/50 rounded-full">
                                {/* Icono SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-6 2xl:h-8 w-6 md:w-6 2xl:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-2xl 2xl:text-3xl font-bold md:mb-2">Personal Quote</h3>
                            <div className="flex flex-col items-center justify-center min-h-[142.5px]">
                                <p className="text-lg md:text-lg 2xl:text-[1.6rem] italic font-lt-soul text-center md:leading-7 2xl:leading-9">
                                    "Design goes beyond appearance and sensation; it encompasses functionality."
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-[#B08968]/70 to-[#A17757]/70 p-6 md:p-8 rounded-lg shadow-xl text-white w-full md:h-[19rem] 2xl:h-[22rem] transition transform hover:scale-105 duration-300">
                            <div className="flex items-center justify-center w-10 md:h-12 2xl:h-16 h-10 md:w-12 2xl:w-16 mb-4 bg-gradient-to-br from-[#9C6644]/50 to-[#7F5539]/50 rounded-full">
                                {/* Icono SVG */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 md:h-6 2xl:h-8 w-6 md:w-6 2xl:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl md:text-2xl 2xl:text-3xl font-bold mb-4">Work Style</h3>
                            <p className="md:text-sm 2xl:text-base md:mt-4 2xl:mt-6 mb-2 2xl:mb-4">
                                <strong>Methodology:</strong> I work with agile methodologies to deliver iterative results that meet clients' changing needs.
                            </p>
                            <p className="md:text-sm 2xl:text-base">
                                <strong>Collaboration:</strong> I enjoy working in teams, sharing ideas, and learning from others to build products that have a positive impact.
                            </p>
                        </div>

                        <div className="relative rounded-lg shadow-xl overflow-hidden h-5/6 md:h-[19rem] 2xl:h-[22rem]">
                            <div
                                className={`flex w-full h-full transition-transform duration-${transitionDuration} ease-in-out`}
                                ref={carouselRef}
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                    transition: isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : 'none'
                                }}
                            >
                                <img
                                    src={images[totalImages - 1]}
                                    alt={`Imagen duplicada`}
                                    className="w-full h-full object-contain bg-[#1c1d1e]/70"
                                    style={{ flexShrink: 0, width: '100%' }}
                                />

                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Imagen ${index + 1}`}
                                        className="w-full h-full object-contain bg-[#1c1d1e]/70"
                                        style={{ flexShrink: 0, width: '100%' }}
                                    />
                                ))}

                                <img
                                    src={images[0]}
                                    alt={`Imagen duplicada`}
                                    className="w-full h-full object-contain bg-[#1c1d1e]/70"
                                    style={{ flexShrink: 0, width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ height: '100px', overflow: 'hidden' }} className={`bg-[#F3D5B5] ${isMobile ? 'h-16' : 'h-[150px]'} -mt-2 md:mt-0`}>
                    <svg
                        viewBox="0 0 500 150"
                        preserveAspectRatio="none"
                        style={{
                            height: isMobile ? '70%' : '100%',
                            width: '100%',
                            transform: 'rotate(180deg)',
                        }}
                    >
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#5A3A2C', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#7C4A3A', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path
                            d="M-43.73,193.92 C128.38,-52.77 372.17,-43.89 562.36,206.75 L246.89,203.80 L233.92,202.80 Z"
                            style={{ stroke: 'none', fill: 'url(#grad1)' }}
                        ></path>
                    </svg>
                </div>
            </section>
        );
    }

    export default SelfSummary;