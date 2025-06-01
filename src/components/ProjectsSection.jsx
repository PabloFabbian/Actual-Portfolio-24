import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ChevronSVG from '../assets/svg/chevron-arrow-icon.svg';
import ResumatioImage from '../assets/ProjectsImg/Resumatio.webp';
import KutaCoffeeImage from '../assets/ProjectsImg/Kuta.webp';
import PixelPulseImage from '../assets/ProjectsImg/Pixelpulse.webp';
import VooidImage from '../assets/ProjectsImg/Vooid.webp';
import TowerSoftwareImage from '../assets/ProjectsImg/Tower.webp';
import RucaviImage from '../assets/ProjectsImg/Rucavi.webp';
import OnMentalImage from '../assets/ProjectsImg/OnMental.webp';

import ProjectHeader from './Projects/ProjectHeader';
import ProjectImage from './Projects/ProjectImage';
import ProjectList from './Projects/ProjectList';
import MobileProjectNav from './Projects/MobileProjectNav';

function ProjectsSection() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState('Tower Software');
    const [isMobile, setIsMobile] = useState(false);
    const [isImageHovered, setIsImageHovered] = useState(false);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [direction, setDirection] = useState(1);
    const projectRefs = useRef([]);

    const projects = [
        { name: 'Tower Software', description: 'Colaboré en el Frontend de esta página utilizando React. Integrando Next UI, Tailwind CSS y Framer Motion para el diseño visual, mejorando la experiencia de usuario con i18next para la gestión de idiomas.', image: TowerSoftwareImage },
        { name: 'PixelPulse Studio', description: 'Un sitio web creativo desarrollado en React, con Framer Motion, Flowbite UI y Tailwind CSS para un diseño responsive y atractivo. Para optimizar el flujo de trabajo, utilicé Vite y ESlint.', image: PixelPulseImage },
        { name: 'Rucavi', description: 'Landing page para una consultora de IT, desarrollada con React, empleando Tailwind y CSS3 para estilos consistentes y responsivos, junto a EmailJS para un envío de formularios eficiente.', image: RucaviImage },
        { name: 'On Mental', description: 'Desarrollé la sección de servicios, la tarjeta de certificación de entornos mentalmente saludables y el navbar de On Mental, utilizando React, Tailwind CSS y Framer Motion para un diseño dinámico y responsivo.', image: OnMentalImage },
        { name: 'Kuta Cafetería', description: 'Desarrollo de una web app para un café con React, utilizando Tailwind CSS para estilos, Toastify para notificaciones, Firestore para la gestión de datos y React Router junto con Bootstrap para una navegación fluida. Además, implementé date-fns, una biblioteca que facilita el formateo y la manipulación de fechas.', image: KutaCoffeeImage },
        { name: 'Vooid Indumentaria', description: 'Desarrollé una tienda online diseñada en Figma, usando React para una experiencia de usuario fluida con Radix UI e integrando pagos con Mercado Pago.', image: VooidImage },
        { name: 'Resumatio', description: 'Desarrollé el Frontend de una Landing Page con React, con una tienda de Paypal, Tailwind CSS para el diseño y Framer para las animaciones.', image: ResumatioImage },
    ];

    const handleNextProject = () => {
        setDirection(1);
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
        setIsLoading(true);
    };

    const handlePreviousProject = () => {
        setDirection(-1);
        setCurrentProjectIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
        setIsLoading(true);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleProjectClick = (index) => {
        setDirection(index > currentProjectIndex ? 1 : -1);
        setSelectedProject(projects[index].name);
        setCurrentProjectIndex(index);
        setIsLoading(true);
    };

    const handleProjectHover = (projectName) => {
        setHoveredProject(projectName);
    };

    const handleProjectLeave = () => {
        setHoveredProject(null);
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
            <ProjectHeader isMobile={isMobile} chevronSVG={ChevronSVG} />

            <section className="bg-gradient-to-r from-[#7C4A3A] to-[#5A3A2C] md:pb-6 md:pt-12 2xl:py-12 relative">
                <div className="container mx-auto flex flex-col items-center md:mb-4 2xl:mb-16 md:scale-90 2xl:scale-100">
                    <div className="relative flex flex-col items-center -mt-0 md:-mt-[9.5rem] 2xl:-mt-24">
                      <div
                        className="animate-bounce cursor-pointer"
                        onClick={() => {
                          const section = document.getElementById('Projects');
                          if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <img
                          src={ChevronSVG}
                          loading="lazy"
                          className="h-8 md:h-10 2xl:h-14 md:h-10 2xl:w-14 rotate-180 mb-3 -ml-1 md:-ml-1 2xl:-ml-2 2xl:mb-4 transition-transform hover:scale-110"
                          aria-hidden="true"
                        />
                      </div>
                      <h2 className="font-lt-soul text-5xl md:text-6xl 2xl:text-7xl font-medium text-center text-[#FFD275] mt-0 md:mt-10 2xl:mt-10">
                          Projects
                      </h2>
                    </div>
                </div>

                <div className="container mx-auto flex flex-col md:flex-row items-start md:scale-90 2xl:scale-100">
                    <ProjectImage
                        currentProject={projects[currentProjectIndex]}
                        isImageHovered={isImageHovered}
                        setIsImageHovered={setIsImageHovered}
                        setIsLoading={setIsLoading}
                        direction={direction}
                    />

                    {isMobile ? (
                        <MobileProjectNav
                            currentProject={projects[currentProjectIndex]}
                            onNext={handleNextProject}
                            onPrevious={handlePreviousProject}
                        />
                    ) : (
                        <ProjectList
                            projects={projects}
                            hoveredProject={hoveredProject}
                            selectedProject={selectedProject}
                            onProjectHover={handleProjectHover}
                            onProjectLeave={handleProjectLeave}
                            onProjectClick={handleProjectClick}
                        />
                    )}
                </div>
            </section>
        </>
    );
}

export default ProjectsSection;