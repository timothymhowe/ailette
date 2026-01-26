import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDrawer from './ProjectDrawer';
import projects from '../data/projects';

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const featuredProjects = projects.filter(project => project.featured);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsDrawerOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map(project => (
          <ProjectCard
            key={project.id}
            project={project}
            onProjectClick={handleProjectClick}
          />
        ))}
      </div>

      <ProjectDrawer
        project={selectedProject}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default ProjectGallery; 