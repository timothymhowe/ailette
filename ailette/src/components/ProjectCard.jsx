import React, { useState, useRef } from 'react';
import Image from 'next/image';

const ProjectCard = ({ project, onProjectClick }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const cardRef = useRef(null);
  
  // Function to check if URL is external
  const isExternalUrl = (url) => {
    return url && (url.startsWith('http://') || url.startsWith('https://'));
  };

  // Function to get proxied image URL if needed
  const getImageUrl = (url) => {
    if (isExternalUrl(url)) {
      // Use proxy API for external images to avoid CORS issues
      return `/api/proxy-image?url=${encodeURIComponent(url)}`;
    }
    return url;
  };

  const handleClick = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      onProjectClick(project, {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height
      });
    } else {
      onProjectClick(project);
    }
  };

  return (
    <div 
      ref={cardRef}
      className="bg-[rgba(20,20,20,0.8)] rounded-lg overflow-hidden transition-all duration-300 h-full flex flex-col border border-white/5 hover:-translate-y-1 hover:shadow-xl hover:border-white/10 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[rgba(30,30,30,0.8)]">
        {project.image && !imageError ? (
          <div className="relative w-full h-full">
            <img
              src={getImageUrl(project.image)}
              alt={project.title}
              className="w-full h-full object-cover transition-opacity duration-300"
              style={{ opacity: isLoading ? 0 : 1 }}
              onLoad={() => setIsLoading(false)}
              onError={() => {
                console.error(`Failed to load image: ${project.image}`);
                setImageError(true);
                setIsLoading(false);
              }}
            />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-white/10 bg-gradient-to-r from-[#222] to-[#333]">
            <span>{project.title[0]}</span>
          </div>
        )}
        
        {/* Domain badge */}
        {project.url && (
          <div className="absolute bottom-3 left-3 bg-black/60 px-2 py-1 rounded text-xs text-white/70 backdrop-blur-sm">
            {new URL(project.url).hostname.replace('www.', '')}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-normal tracking-widest mb-3 text-white">{project.title}</h3>
        <p className="text-sm text-gray-400 mb-4 leading-relaxed flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-white/5 py-1 px-2 rounded text-gray-400 font-light tracking-wide">
              {tech}
            </span>
          ))}
        </div>
        <button
          className="self-start text-sm text-gray-300 no-underline py-2 px-4 border border-white/10 rounded transition-all duration-200 tracking-wider uppercase hover:bg-white/5 hover:border-white/20"
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            handleClick();
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard; 