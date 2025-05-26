import React from 'react';
import { motion } from 'framer-motion';

function ProjectItem({ 
    project, 
    index, 
    isHovered, 
    isSelected, 
    isLastItem, 
    onHover, 
    onLeave, 
    onClick 
}) {
    return (
        <motion.div
            className={`w-full p-4 transition-all duration-300 cursor-pointer ${
                !isLastItem ? 'border-b border-[#FFD275] delay-300' : ''
            }`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onClick}
        >
            <motion.h3
                className={`text-4xl md:text-5xl 2xl:text-6xl font-lt-soul transition-colors duration-300 ${
                    isHovered ? 'text-[#FFD275]' : 'text-[rgba(230,189,106,0.7)]'
                }`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
            >
                {project.name}
            </motion.h3>
            {isSelected && (
                <motion.p
                    className="md:text-base 2xl:text-lg mt-1 mb-1.5 text-[#FFD275]"
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
    );
}

export default ProjectItem;