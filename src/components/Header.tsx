import { useEffect, useState } from 'react'
import { BriefcaseBusiness, Menu, X } from 'lucide-react'
import { profile } from '@/data/profile'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/resume', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

type HeaderProps = {
  currentPath: string
}

export default function Header({ currentPath }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [currentPath])

  const linkClass = (href: string) => {
    const active = href === '/' ? currentPath === '/' : currentPath.startsWith(href)
    return `nav-link ${active ? 'nav-link-active' : ''}`
  }

  return (
    <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`}>
      <div className="site-shell">
        <div className="header-row">
          <a href="/" className="brand-lockup" aria-label={`${profile.name} home`}>
            <span className="brand-mark">{profile.initials}</span>
            <span>
              <span className="brand-name">{profile.name}</span>
              <span className="brand-role">{profile.role}</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a href="/consulting" className="consulting-link" title="Private consulting view">
              <BriefcaseBusiness size={16} />
              <span>Consulting</span>
            </a>
            <button
              type="button"
              className="mobile-menu-button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </a>
            ))}
            <a href="/consulting" className="mobile-consulting-link">
              Consulting mode
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
