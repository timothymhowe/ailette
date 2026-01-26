import React, { useState } from 'react';

const ProjectCard = ({ project, onProjectClick }) => {
  const [imageError, setImageError] = useState(false);

  const getImageUrl = (url) => {
    if (url?.startsWith('http')) {
      return `/api/proxy-image?url=${encodeURIComponent(url)}`;
    }
    return url;
  };

  return (
    <div
      onClick={() => onProjectClick(project)}
      className="group cursor-pointer border border-white/10 hover:border-white/20 transition-all duration-300 bg-white/5 hover:bg-white/10"
    >
      {/* Image */}
      <div className="aspect-video w-full overflow-hidden bg-black/50">
        <img
          src={imageError || !project.image ? `https://picsum.photos/seed/${project.id}/640/360` : getImageUrl(project.image)}
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
          onError={() => setImageError(true)}
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-light">{project.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-xs text-gray-500 border border-white/10 px-2 py-1">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 