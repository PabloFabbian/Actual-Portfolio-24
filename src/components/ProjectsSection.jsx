import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ChevronSVG from '../assets/svg/chevron-arrow-icon.svg';
import RedlineImage from '../assets/ProjectsImg/Redline.png';
import KutaCoffeeImage from '../assets/ProjectsImg/Kuta2.png';
import PixelPulseImage from '../assets/ProjectsImg/Pixelpulse2.png';
import VooidImage from '../assets/ProjectsImg/Vooid.png';
import TowerSoftwareImage from '../assets/ProjectsImg/Tower2.png';
import RucaviImage from '../assets/ProjectsImg/Rucavi.png';

function ProjectsSection() {
    const [hoveredProject, setHoveredProject] = useState('Tower Software');
    const [isMobile, setIsMobile] = useState(false);
    const [isImageHovered, setIsImageHovered] = useState(false);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const projects = [
        {
            name: 'Tower Software',
            description: 'Webflow and React development for a software company.',
            image: TowerSoftwareImage,
        },
        {
            name: 'Rucavi',
            description: 'React development for an IT consultancy company.',
            image: RucaviImage,
        },
        {
            name: 'Vooid Indumentaria',
            description: 'Branding, React development, and e-commerce website design.',
            image: VooidImage,
        },
        {
            name: 'PixelPulse Studio',
            description: 'Creative website design and React development for a digital studio.',
            image: PixelPulseImage,
        },
        {
            name: 'Red Line',
            description: 'Website design and sales funnel optimization.',
            image: RedlineImage,
        },
        {
            name: 'Kuta Coffee',
            description: 'React development and website design for a coffee brand.',
            image: KutaCoffeeImage,
        },
    ];

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePreviousProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleProjectHover = (index) => {
        setHoveredProject(projects[index].name);
        setCurrentProjectIndex(index);
    };

    return (
        <>
            <div className={`bg-[#F3D5B5] overflow-hidden ${isMobile ? 'h-16' : 'h-[150px]'} -mt-2 md:mt-0`} id="Projects">
                <svg
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                    className="h-full w-full"
                >
                    <path
                        d="M-43.73,193.92 C128.38,-52.77 372.17,-43.89 562.36,206.75 L246.89,203.80 L233.92,202.80 Z"
                        style={{ stroke: 'none', fill: '#7F5539' }}
                    />
                </svg>
            </div>

            <section className="bg-[#7F5539] py-12 relative">
                <div className="container mx-auto flex flex-col items-center mb-8">
                    <div className="relative flex flex-col items-center -mt-16 md:-mt-36">
                        <img
                            src={ChevronSVG}
                            className="h-10 w-10 rotate-180 mb-4"
                            aria-hidden="true"
                        />
                        <h2 className="font-lt-soul text-5xl md:text-7xl font-medium text-center text-[#FFD275]">
                            Projects
                        </h2>
                    </div>
                </div>

                <div className="container mx-auto flex flex-col md:flex-row items-start">
                    {/* Imagen del Proyecto (Derecha) */}
                    <div className="w-11/12 md:w-2/3 relative mx-auto mt-1.5 md:order-2 md:mx-10 mb-6f">
                        <div
                            className="overflow-hidden relative h-[27.5vh] md:h-[68vh] rounded-md shadow-lg"
                            onMouseEnter={() => setIsImageHovered(true)}
                            onMouseLeave={() => setIsImageHovered(false)}
                        >
                            <motion.div
                                key={projects[currentProjectIndex].name}
                                className="absolute inset-0 bg-cover bg-top"
                                style={{
                                    backgroundImage: `url(${projects[currentProjectIndex]?.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPositionY: isImageHovered ? '100%' : '0%',
                                }}
                                animate={{ backgroundPositionY: isImageHovered ? '100%' : '0%' }}
                                transition={{
                                    duration: 5,
                                    ease: "easeInOut",
                                }}
                            >
                                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Carrusel en Mobile */}
                    {isMobile && (
                        <div className="flex justify-between items-center w-full mt-4">
                            {/* Flecha izquierda */}
                            <button
                                onClick={handlePreviousProject}
                                className="text-[#FFD275] text-3xl px-4 -mt-5"
                            >
                                &#8249;
                            </button>

                            {/* Proyecto Actual */}
                            <div className="flex flex-col items-center text-center mx-4 mt-2">
                                <motion.h3
                                    className="text-4xl md:text-6xl font-lt-soul text-[#FFD275]"
                                    key={projects[currentProjectIndex].name}
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {projects[currentProjectIndex].name}
                                </motion.h3>
                                <motion.p
                                    className="text-lg text-[#FFD275] mt-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {projects[currentProjectIndex].description}
                                </motion.p>
                            </div>

                            {/* Flecha derecha */}
                            <button
                                onClick={handleNextProject}
                                className="text-[#FFD275] text-3xl px-4 -mt-5"
                            >
                                &#8250;
                            </button>
                        </div>
                    )}

                    {/* Acordeón de Proyectos en Escritorio */}
                    {!isMobile && (
                        <div className="w-full md:w-1/3 overflow-x-auto max-h-[36rem] custom-scrollbar mt-4 md:-mt-0 order-2 md:order-1">
                            <div className="flex flex-col items-start">
                                {projects.map((project, index) => (
                                    <motion.div
                                        key={project.name}
                                        className={`w-full p-4 cursor-pointer transition-all duration-300 ${hoveredProject === project.name ? 'text-[#FFD275]' : 'text-[#E6BD6A]'} ${index < projects.length - 1 ? 'border-b border-[#FFD275]' : ''}`}
                                        onMouseEnter={() => handleProjectHover(index)}
                                        onClick={() => handleProjectHover(index)}
                                    >
                                        <h3 className="text-4xl md:text-6xl font-lt-soul">
                                            {project.name}
                                        </h3>
                                        {hoveredProject === project.name && (
                                            <motion.p
                                                className="text-lg mt-2"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            >
                                                {project.description}
                                            </motion.p>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default ProjectsSection;