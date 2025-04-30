import React, { useEffect, useState } from 'react';

const ProjectDrawer = ({ project, isOpen, onClose, sourcePosition }) => {
  const [chevronPosition, setChevronPosition] = useState(null);

  useEffect(() => {
    if (sourcePosition && isOpen) {
      // Calculate the horizontal center of the clicked project card
      const centerX = sourcePosition.left + (sourcePosition.width / 2);
      
      // Constrain the chevron position to stay within reasonable bounds
      const windowWidth = window.innerWidth;
      const minPosition = 40; // minimum distance from left edge
      const maxPosition = windowWidth - 40; // maximum distance from left edge
      
      const constrainedPosition = Math.max(minPosition, Math.min(centerX, maxPosition));
      setChevronPosition(constrainedPosition);
    }
  }, [sourcePosition, isOpen]);

  if (!project) return null;

  return (
    <>
      {/* Backdrop - darkens the background and closes drawer on click */}
      <div 
        className={`fixed inset-0 bg-black/70 z-40 transition-opacity duration-500 backdrop-blur-sm ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Drawer panel - slides from bottom */}
      <div 
        className={`fixed left-0 right-0 bottom-0 w-full bg-[#111] z-50 shadow-2xl transition-transform duration-500 ease-out overflow-auto max-h-[85vh] ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Chevron pointing to the source project */}
        {chevronPosition && (
          <div 
            className="absolute top-0 transform -translate-y-4 z-10 text-[#111]"
            style={{ left: `${chevronPosition}px`, marginLeft: '-12px' }}
          >
            <svg width="24" height="16" viewBox="0 0 24 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L24 16H0L12 0Z" />
            </svg>
          </div>
        )}
        
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          aria-label="Close drawer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        {/* Project content */}
        <div className="p-8 pt-16 pb-24 max-w-6xl mx-auto">
          {/* Header with project title */}
          <div className="mb-8">
            <h2 className="text-3xl font-light tracking-wider text-white mb-2">{project.title}</h2>
            {project.url && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center"
              >
                <span>{new URL(project.url).hostname.replace('www.', '')}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project image */}
            <div className="relative w-full aspect-video bg-[#0a0a0a] rounded-lg overflow-hidden">
              {project.image ? (
                <img 
                  src={project.image.startsWith('http') ? `/api/proxy-image?url=${encodeURIComponent(project.image)}` : project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-8xl font-bold text-white/10 bg-gradient-to-r from-[#222] to-[#333]">
                  <span>{project.title[0]}</span>
                </div>
              )}
            </div>
            
            <div>
              {/* Project description */}
              <div className="mb-8">
                <h3 className="text-xl font-light text-white/90 mb-4 tracking-wide">Overview</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>
                <p className="text-gray-400 leading-relaxed">
                  This project demonstrates innovative approaches to {project.technologies.slice(0, 2).join(' and ')} 
                  development, with a focus on user experience and performance optimization.
                </p>
              </div>
              
              {/* Technologies */}
              <div className="mb-8">
                <h3 className="text-xl font-light text-white/90 mb-4 tracking-wide">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-white/5 py-2 px-3 rounded text-gray-300 font-light tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Key features */}
          <div className="mt-8 mb-8">
            <h3 className="text-xl font-light text-white/90 mb-4 tracking-wide">Key Features</h3>
            <ul className="text-gray-400 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-white/30 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Responsive design optimized for all devices</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-white/30 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Advanced {project.technologies[0]} implementation</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-white/30 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Intuitive user interface with smooth animations</span>
              </li>
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-white/30 mt-1">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Comprehensive testing and documentation</span>
              </li>
            </ul>
          </div>
          
          {/* View project button */}
          <a
            href={project.link}
            className="inline-block bg-white/10 hover:bg-white/15 text-white py-3 px-6 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-lg tracking-wider"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW PROJECT
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDrawer; 