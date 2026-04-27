import { useMemo, useState } from 'react'
import { ExternalLink, Filter, Github } from 'lucide-react'
import { allProjects } from 'content-collections'

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const allTags = useMemo(() => ['All', ...Array.from(new Set(allProjects.flatMap((p) => p.tags)))], [])
  const filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter((project) => project.tags.includes(activeFilter))

  return (
    <section className="page-hero">
      <div className="site-shell">
        <div className="section-heading-row">
          <div>
            <p className="eyebrow">Project scaffold</p>
            <h1>Projects are intentionally still placeholders.</h1>
            <p className="section-lede">
              The cards and markdown structure remain in place so you can replace each project later without losing
              the portfolio layout.
            </p>
          </div>
        </div>

        <div className="filter-bar" aria-label="Project filters">
          <Filter size={16} />
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveFilter(tag)}
              className={activeFilter === tag ? 'filter-pill active' : 'filter-pill'}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {filtered.map((project) => (
            <ProjectCard key={project._meta.path} project={project} />
          ))}
        </div>
      </div>
    </section>
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
    <article className="project-card">
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} loading="lazy" />
        ) : (
          <span>{project.title.charAt(0)}</span>
        )}
      </div>
      <div className="project-body">
        <span className="draft-label">Placeholder to replace</span>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github size={15} />
              Source
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} />
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
