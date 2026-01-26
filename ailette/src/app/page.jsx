'use client'

import projects from '../data/projects';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <main className="w-full max-w-xl">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">Ailette</h1>
          <p className="text-neutral-500">Project Studio</p>
        </header>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-neutral-400 mb-6">Projects</h2>
          <div className="divide-y divide-neutral-100">
            {featuredProjects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 group"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <svg
                    className="w-4 h-4 text-neutral-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Founder */}
        <section className="mb-12">
          <h2 className="text-sm font-medium text-neutral-400 mb-6">Founder</h2>
          <div className="flex gap-4">
            <img
              src="/tmh-profile.png"
              alt="Timothy M. Howe"
              className="w-16 h-16 rounded object-cover"
            />
            <div>
              <h3 className="font-medium text-neutral-900 mb-1">Timothy M. Howe</h3>
              <p className="text-sm text-neutral-500 leading-relaxed mb-3">
                Software engineer with a focus on building products that solve real problems.
              </p>
              <div className="flex gap-4 text-sm">
                <a href="mailto:tim@ailette.io" className="text-neutral-400 hover:text-neutral-900 transition-colors">Email</a>
                <a href="https://github.com/tmhowe" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/tmhowe" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
} 