'use client'

import projects from '../data/projects';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <main className="w-full max-w-xl">
        {/* Header */}
        <header className="mb-6 pb-6 border-b border-neutral-200 flex gap-4">
          <img src="/ailette.svg" alt="Ailette logo" className="w-12 h-auto shrink-0 md:w-24 md:-ml-28" />
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-1">ailette, llc</h1>
            <h2 className="text-neutral-500 leading-relaxed font-normal">
              A project studio for solo ventures and freelance work.
            </h2>
          </div>
        </header>

        {/* Projects */}
        <section className="mb-6 pb-6 border-b border-neutral-200">
          <h2 className="text-lg font-medium text-neutral-900 mb-3">Featured Work</h2>
          <div className="divide-y divide-neutral-100">
            {featuredProjects.map((project) => {
              const Component = project.url ? 'a' : 'div';
              const linkProps = project.url ? {
                href: project.url,
                target: '_blank',
                rel: 'noopener noreferrer',
              } : {};

              return (
                <Component
                  key={project.id}
                  {...linkProps}
                  className={`block py-2 ${project.url ? 'group cursor-pointer' : ''}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h3 className={`font-medium text-neutral-900 ${project.url ? 'group-hover:text-blue-600' : ''} transition-colors`}>
                      {project.title}
                    </h3>
                    {project.url && (
                      <svg
                        className="w-4 h-4 text-neutral-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {project.description}
                  </p>
                  {project.tags && (
                    <div className="flex gap-1.5 mt-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs text-neutral-400 bg-neutral-100 px-1.5 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Component>
              );
            })}
          </div>
        </section>

        {/* Founder */}
        <section>
          <h2 className="text-lg font-medium text-neutral-900 mb-3">Founder</h2>
          <div className="flex gap-3 md:gap-4">
            <img
              src="/tmh-profile.png"
              alt="Timothy M. Howe"
              className="w-12 h-12 rounded object-cover shrink-0 md:w-24 md:h-24 md:-ml-28 md:-mt-8"
            />
            <div>
              <h3 className="font-medium text-neutral-900 mb-1">Timothy M. Howe</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-3">
                Full-stack engineer and builder with a focus on AI-powered products.
              </p>
              <div className="flex gap-4 text-sm">
                <a href="mailto:tim@ailette.io" className="text-neutral-400 hover:text-neutral-900 transition-colors">Email</a>
                <a href="https://github.com/timothymhowe" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/timothy-m-howe" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
} 