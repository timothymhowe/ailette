import React from 'react';

const ProjectDrawer = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-x-0 bottom-0 bg-black border-t border-white/20 z-50 transition-transform duration-300 max-h-[90vh] overflow-auto ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-4xl mx-auto p-8 md:p-12">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-light mb-4">{project.title}</h2>
              <p className="text-gray-400 leading-relaxed">{project.description}</p>
            </div>

            {/* Image */}
            <div className="aspect-video w-full bg-white/5 overflow-hidden">
              <img
                src={project.image ? (project.image.startsWith('http') ? `/api/proxy-image?url=${encodeURIComponent(project.image)}` : project.image) : `https://picsum.photos/seed/${project.id}/640/360`}
                alt={project.title}
                className="w-full h-full object-cover opacity-60"
              />
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-sm text-gray-500 mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-sm border border-white/10 px-3 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Link */}
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm border border-white/20 hover:border-white/40 hover:bg-white/5 px-6 py-3 transition-all duration-200"
              >
                Visit Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDrawer; 