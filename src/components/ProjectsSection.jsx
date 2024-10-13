import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ChevronSVG from '../assets/svg/chevron-arrow-icon.svg';
import RedlineImage from '../assets/ProjectsImg/Redline2.webp';
import KutaCoffeeImage from '../assets/ProjectsImg/Kuta2.webp';
import PixelPulseImage from '../assets/ProjectsImg/Pixelpulse2.webp';
import VooidImage from '../assets/ProjectsImg/Vooid2.webp';
import TowerSoftwareImage from '../assets/ProjectsImg/Tower2.webp';
import RucaviImage from '../assets/ProjectsImg/Rucavi2.webp';

function ProjectsSection() {
    const [hoveredProject, setHoveredProject] = useState('Tower Software');
    const [isMobile, setIsMobile] = useState(false);
    const [isImageHovered, setIsImageHovered] = useState(false);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const projectRefs = useRef([]);

    const projects = [
        { name: 'Tower Software', description: 'Colaboré en el Frontend de esta página utilizando React. Integrando Next UI, Tailwind CSS y Framer Motion para el diseño visual, mejorando la experiencia de usuario con i18next para la gestión de idiomas.', image: TowerSoftwareImage },
        { name: 'Rucavi', description: 'Landing page para una consultora de IT, desarrollada con React, empleando Tailwind y CSS3 para estilos consistentes y responsivos, junto a EmailJS para un envío de formularios eficiente.', image: RucaviImage },
        { name: 'Vooid Indumentaria', description: 'Desarrollé una tienda online diseñada en Figma, usando React para una experiencia de usuario fluida con Radix UI e integrando pagos con Mercado Pago.', image: VooidImage },
        { name: 'PixelPulse Studio', description: 'Un sitio web creativo desarrollado en React, con Framer Motion, Flowbite UI y Tailwind CSS para un diseño responsive y atractivo. Para optimizar el flujo de trabajo, utilicé Vite y ESlint.', image: PixelPulseImage },
        { name: 'Red Line', description: 'Primer proyecto desarrollado en HTML5 y CSS3, con animaciones nativas y un carrito de compras funcional mediante local storage.', image: RedlineImage },
        { name: 'Kuta Coffee', description: 'Desarrollo en React y diseño de un sitio web para una marca de café, utilizando Tailwind CSS para estilos, Toastify para notificaciones, Firestore para la gestión de datos, y React Router junto con Bootstrap para una navegación fluida y responsiva.', image: KutaCoffeeImage },
    ];

    const handleNextProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
        setIsLoading(true);
    };

    const handlePreviousProject = () => {
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
        setIsLoading(true);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1440);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleProjectHover = (index) => {
        setHoveredProject(projects[index].name);
        setCurrentProjectIndex(index);
        setIsLoading(true);
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = projectRefs.current.indexOf(entry.target);
                    if (index >= 0) {
                        entry.target.classList.add('animate-fade-in');
                    }
                }
            });
        }, options);

        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [projectRefs]);

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
                            loading='lazy'
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
                    <div className="w-11/12 sm:10/12 md:w-2/3 relative mx-auto mt-1.5 md:order-2 md:mx-10 mb-6 hover:cursor-pointer">
                        <div
                            className="overflow-hidden relative h-[27.5vh] sm:h-[90vh] md:h-[68vh] max-h-[36rem] rounded-md shadow-lg"
                            onMouseEnter={() => setIsImageHovered(true)}
                            onMouseLeave={() => setIsImageHovered(false)}
                        >
                            {isLoading && (
                                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-lg">
                                    <div className="h-full w-full bg-gray-100 rounded-lg"></div>
                                </div>
                            )}
                            <motion.div
                                key={projects[currentProjectIndex].name}
                                className="absolute inset-0 bg-cover bg-top"
                                style={{
                                    backgroundImage: `url(${projects[currentProjectIndex]?.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPositionY: isImageHovered ? '100%' : '0%',
                                }}
                                onLoad={() => setIsLoading(false)}
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
                                className="text-[#FFD275] text-3xl px-4 -mt-1.5"
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
                                    className="text-md text-[#FFD275] mt-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        transitionDelay: '0.5s',
                                    }}
                                >
                                    {projects[currentProjectIndex].description}
                                </motion.p>
                            </div>

                            {/* Flecha derecha */}
                            <button
                                onClick={handleNextProject}
                                className="text-[#FFD275] text-3xl px-4 -mt-1.5"
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
                                        className={`w-full p-4 cursor-pointer transition-all duration-300 ${hoveredProject === project.name ? 'text-[#FFD275]' : 'text-[rgba(230,189,106,0.9)] transition transform'} ${index < projects.length - 1 ? 'border-b border-[#FFD275] delay-300' : ''}`}
                                        onMouseEnter={() => handleProjectHover(index)}
                                        onClick={() => handleProjectHover(index)}
                                    >
                                        <motion.h3
                                            className="text-4xl md:text-6xl font-lt-soul"
                                            initial={{ opacity: 0, x: -100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            {project.name}
                                        </motion.h3>
                                        {hoveredProject === project.name && (
                                            <motion.p
                                                className="text-lg mt-2 mb-1.5"
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: 'easeInOut',
                                                    delay: 0.075,
                                                }}
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