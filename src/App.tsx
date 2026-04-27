import { useEffect, useMemo, useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Header from '@/components/Header'
import { pageMeta, profile } from '@/data/profile'
import { HomePage } from '@/routes'
import { BlogIndex, BlogPost } from '@/routes/blog'
import { ConsultingPage } from '@/routes/consulting'
import { ContactPage } from '@/routes/contact'
import { GalleryPage } from '@/routes/gallery'
import { ProjectsPage } from '@/routes/projects'
import { ResumePage } from '@/routes/resume'

function normalizePath(path: string) {
  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1)
  }
  return path || '/'
}

function getRoute(path: string) {
  if (path === '/') return { key: 'home', page: <HomePage /> }
  if (path === '/resume' || path === '/experience') return { key: 'resume', page: <ResumePage /> }
  if (path === '/projects') return { key: 'projects', page: <ProjectsPage /> }
  if (path === '/gallery') return { key: 'gallery', page: <GalleryPage /> }
  if (path === '/blog') return { key: 'blog', page: <BlogIndex /> }
  if (path.startsWith('/blog/')) {
    return { key: 'blog-post', page: <BlogPost slug={decodeURIComponent(path.replace('/blog/', ''))} /> }
  }
  if (path === '/contact') return { key: 'contact', page: <ContactPage /> }
  if (path === '/consulting') return { key: 'consulting', page: <ConsultingPage /> }
  return { key: 'not-found', page: <NotFound /> }
}

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname))
  const route = useMemo(() => getRoute(path), [path])

  useEffect(() => {
    const onPopState = () => setPath(normalizePath(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const anchor = target?.closest('a')
      if (!anchor) return

      const url = new URL(anchor.href)
      const isInternal = url.origin === window.location.origin
      const opensNewContext = anchor.target && anchor.target !== '_self'
      const isDownload = anchor.hasAttribute('download')

      if (!isInternal || opensNewContext || isDownload) return

      event.preventDefault()
      const nextPath = normalizePath(url.pathname)
      window.history.pushState({}, '', `${nextPath}${url.search}${url.hash}`)
      setPath(nextPath)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    const meta = pageMeta[path] ?? pageMeta[`/${route.key}`] ?? pageMeta['/']
    document.title = meta.title

    const description = document.querySelector('meta[name="description"]')
    description?.setAttribute('content', meta.description)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [path, route.key])

  return (
    <div className="app-shell">
      <Header currentPath={path} />
      <main>{route.page}</main>
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-copy">
            AI systems architect focused on conversational AI, cloud, and practical delivery.
          </p>
        </div>
        <div className="footer-links" aria-label="Social links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        <p className="footer-copy">Copyright 2026 {profile.name}. Built with React, Vite, and Netlify.</p>
      </div>
    </footer>
  )
}

function NotFound() {
  return (
    <section className="page-section centered-section">
      <div className="site-shell narrow-shell">
        <p className="eyebrow">404</p>
        <h1>That page is not part of the portfolio yet.</h1>
        <p className="section-lede">
          The route may be a future project, writing, or consulting page. Head back home and keep exploring from there.
        </p>
        <a href="/" className="primary-button">
          Back home
        </a>
      </div>
    </section>
  )
}
