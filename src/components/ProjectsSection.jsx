import React, { useState, useEffect } from 'react';  
import { motion } from 'framer-motion';
import ChevronSVG from '../assets/svg/chevron-arrow-icon.svg';
import RedlineImage from '../assets/ProjectsImg/Redline.png';
import KutaCoffeeImage from '../assets/ProjectsImg/Kuta.png';
import PixelPulseImage from '../assets/ProjectsImg/Pixelpulse.png';
import VooidImage from '../assets/ProjectsImg/Vooid.png';
import TowerSoftwareImage from '../assets/ProjectsImg/Tower.png';
import RucaviImage from '../assets/ProjectsImg/Rucavi.png';

function ProjectsSection() {
    const [hoveredProject, setHoveredProject] = useState('Tower Software');
    const [isMobile, setIsMobile] = useState(false);

    const projects = {
        'Tower Software': {
            description: 'Webflow and React development for a software company.',
            image: TowerSoftwareImage,
        },
        'Rucavi': {
            description: 'React development for an IT consultancy company.',
            image: RucaviImage,
        },
        'Vooid Indumentaria': {
            description: 'Branding, React development, and e-commerce website design.',
            image: VooidImage,
        },
        'PixelPulse Studio': {
            description: 'Creative website design and React development for a digital studio.',
            image: PixelPulseImage,
        },
        'Red Line': {
            description: 'Website design and sales funnel optimization.',
            image: RedlineImage,
        },
        'Kuta Coffee': {
            description: 'React development and website design for a coffee brand.',
            image: KutaCoffeeImage,
        },
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640); // Ajusta el ancho según tus necesidades
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className={`bg-[#F3D5B5] overflow-hidden ${isMobile ? 'h-16' : 'h-[150px]'} -mt-5 md:mt-0`} id="Projects">
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

            <section className="bg-[#7F5539] py-12">
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
                    <div className="w-full md:w-2/3 relative mt-1.5 order-1 md:order-2 md:mx-10 mb-60">
                        <motion.div
                            className="absolute inset-0 bg-cover bg-center rounded-lg shadow-lg"
                            style={{
                                backgroundImage: `url(${projects[hoveredProject]?.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                height: '0',
                                paddingBottom: '56.25%',
                                width: '100%',
                            }}
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div>
                        </motion.div>
                    </div>

                    {/* Acordeón de Proyectos (Izquierda) */}
                    <div className={`w-full md:w-1/3 overflow-x-auto max-h-[36rem] custom-scrollbar mt-4 md:mt-0 order-2 md:order-1`}>
                        <div className={`flex ${isMobile ? 'flex-nowrap' : 'flex-col'} items-start`}>
                            {Object.keys(projects).map((project, index) => (
                                <motion.div
                                    key={project}
                                    className={`w-full p-4 cursor-pointer transition-all duration-300 ${hoveredProject === project
                                        ? 'text-[#FFD275]'
                                        : 'text-[#E6BD6A]'
                                        } ${index < Object.keys(projects).length - 1 ? 'border-b border-[#FFD275]' : ''} ${isMobile ? 'border-none' : ''}`}
                                    onMouseEnter={() => setHoveredProject(project)}
                                    onClick={() => setHoveredProject(project)}
                                >
                                    <h3 className={`text-4xl md:text-6xl font-lt-soul ${isMobile ? 'text-3xl' : ''}`}>{project}</h3>
                                    {hoveredProject === project && (
                                        <motion.p
                                            className={`text-lg ${isMobile ? 'text-base' : ''} mt-2`}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        >
                                            {projects[project].description}
                                        </motion.p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProjectsSection;