import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ChevronSVG from '../assets/svg/chevron-arrow-icon.svg';
import RedlineImage from '../assets/ProjectsImg/Redline.png';
import KutaCoffeeImage from '../assets/ProjectsImg/Kuta.png';
import PixelPulseImage from '../assets/ProjectsImg/Pixelpulse.png';
import VooidImage from '../assets/ProjectsImg/Vooid.png';
import TowerSoftwareImage from '../assets/ProjectsImg/Tower.png';
import RucaviImage from '../assets/ProjectsImg/Rucavi.png'

function ProjectsSection() {
    const [hoveredProject, setHoveredProject] = useState('Tower Software'); // Estado para el proyecto seleccionado

    // Mapeo de proyectos a sus descripciones e imágenes respectivas
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

    return (
        <>
            {/* SVG Background Wave */}
            <div style={{ height: '150px', overflow: 'hidden' }} className="bg-[#F3D5B5]" id="Projects">
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

            {/* Projects Title Section */}
            <section className="bg-[#7F5539] py-12">
                <div className="container mx-auto flex flex-col items-center mb-8">
                    <div className="relative flex flex-col items-center -mt-36">
                        <img
                            src={ChevronSVG}
                            className="h-10 w-10 rotate-180 mb-4"
                            aria-hidden="true"
                        />
                        <h2 className="font-lt-soul text-7xl font-medium text-center text-[#FFD275]">
                            Projects
                        </h2>
                    </div>
                </div>

                {/* Contenedor Principal de Proyectos */}
                <div className="container mx-auto flex flex-row items-start space-x-8">
                    {/* Acordeón de Proyectos (Izquierda) */}
                    <div className="w-1/3 overflow-y-auto max-h-[36rem] custom-scrollbar">
                        <div className="flex flex-col items-start space-y-4">
                            {Object.keys(projects).map((project, index) => (
                                <motion.div
                                    key={project}
                                    className={`w-full p-4 cursor-pointer transition-all duration-300 ${hoveredProject === project
                                        ? 'text-[#FFD275]' // Color del texto cuando se selecciona el proyecto
                                        : 'text-[#E6BD6A]' // Color del texto cuando no está seleccionado
                                        } ${index < Object.keys(projects).length - 1 ? 'border-b border-[#FFD275]' : ''}`}
                                    onMouseEnter={() => setHoveredProject(project)}
                                    onClick={() => setHoveredProject(project)}
                                >
                                    <h3 className="text-6xl font-lt-soul">{project}</h3>
                                    {hoveredProject === project && (
                                        <motion.p
                                            className="text-lg mt-2"
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

                    {/* Imagen del Proyecto (Derecha) */}
                    <div className="w-2/3 relative mt-1.5">
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
                </div>
            </section>
        </>
    );
}

export default ProjectsSection;