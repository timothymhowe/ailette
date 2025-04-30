import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDrawer from './ProjectDrawer';
import projects from '../data/projects';

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [sourcePosition, setSourcePosition] = useState(null);
  
  const featuredProjects = projects.filter(project => project.featured);
  
  const handleProjectClick = (project, position) => {
    setSelectedProject(project);
    setSourcePosition(position);
    setIsDrawerOpen(true);
  };
  
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  
  return (
    <>
      <section className="w-full max-w-[1200px] my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {featuredProjects.map(project => (
            <div key={project.id} className="transition-all duration-300">
              <ProjectCard 
                project={project} 
                onProjectClick={handleProjectClick}
              />
            </div>
          ))}
        </div>
      </section>
      
      <ProjectDrawer 
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        sourcePosition={sourcePosition}
      />
    </>
  );
};

export default ProjectGallery; 