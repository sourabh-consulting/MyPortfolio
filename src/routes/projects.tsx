import { createFileRoute } from '@tanstack/react-router'
import { allProjects } from 'content-collections'
import { useState } from 'react'
import { ExternalLink, Github, Filter } from 'lucide-react'

export const Route = createFileRoute('/projects')({
  head: () => ({
    meta: [
      { title: 'Projects — Alex Morgan' },
      { name: 'description', content: 'Explore Alex Morgan\'s portfolio of full-stack projects spanning e-commerce, AI, mobile, and developer tooling.' },
    ],
  }),
  component: ProjectsPage,
})

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const allTags = ['All', ...Array.from(new Set(allProjects.flatMap((p) => p.tags)))]

  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter((p) => p.tags.includes(activeFilter))

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Things I've <span className="gradient-text">built</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            A curated collection of projects — from polished SaaS products to open-source tools and experimental ideas.
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex items-center gap-2 flex-wrap mb-10">
          <Filter size={14} className="text-slate-500" />
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === tag
                  ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-white/5 border border-white/8 text-slate-400 hover:text-white hover:border-white/16'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project._meta.path} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No projects found for this filter.
          </div>
        )}
      </div>
    </div>
  )
}

type Project = {
  _meta: { path: string }
  title: string
  description: string
  tags: string[]
  github?: string
  liveUrl?: string
  image?: string
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-white/8 hover:border-indigo-500/25 transition-all duration-300 hover:-translate-y-1 group flex flex-col">
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 flex-shrink-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-5xl font-extrabold gradient-text opacity-30 select-none">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span key={tag}
              className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4 pt-4 border-t border-white/8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <Github size={15} />
              <span>Source</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
            >
              <ExternalLink size={15} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
