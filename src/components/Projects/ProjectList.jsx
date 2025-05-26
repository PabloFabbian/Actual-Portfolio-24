import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({ 
    projects, 
    hoveredProject, 
    selectedProject, 
    onProjectHover, 
    onProjectLeave, 
    onProjectClick 
}) {
    return (
        <div className="w-full md:w-1/3 overflow-x-auto md:max-h-[28.4rem] 2xl:max-h-[36rem] custom-scrollbar mt-4 md:-mt-4 md:mx-6 2xl:mx-5 order-2 md:order-1">
            <div className="flex flex-col items-start">
                {projects.map((project, index) => (
                    <ProjectItem
                        key={project.name}
                        project={project}
                        index={index}
                        isHovered={hoveredProject === project.name}
                        isSelected={selectedProject === project.name}
                        isLastItem={index === projects.length - 1}
                        onHover={() => onProjectHover(project.name)}
                        onLeave={onProjectLeave}
                        onClick={() => onProjectClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProjectList;