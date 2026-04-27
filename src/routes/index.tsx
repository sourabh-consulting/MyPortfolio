import { ArrowRight, BadgeCheck, BriefcaseBusiness, MapPin } from 'lucide-react'
import { focusAreas, profile, proofPoints, skills } from '@/data/profile'

export function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="site-shell hero-grid-layout">
          <div className="hero-copy">
            <p className="eyebrow">Career-first portfolio</p>
            <h1>
              {profile.headline}
            </h1>
            <p className="hero-lede">{profile.summary}</p>
            <div className="hero-actions">
              <a href="/resume" className="primary-button">
                View experience
                <ArrowRight size={18} />
              </a>
              <a href="/projects" className="secondary-button">
                Project scaffold
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <MapPin size={16} />
                {profile.location}
              </span>
              <span>
                <BriefcaseBusiness size={16} />
                Open to architect and senior AI engineering roles
              </span>
            </div>
          </div>

          <div className="profile-panel" aria-label="Profile summary">
            <img src="/headshot-on-white.jpg" alt={`${profile.name} professional headshot`} />
            <div className="profile-panel-copy">
              <span className="status-pill">
                <BadgeCheck size={15} />
                Evidence-backed profile
              </span>
              <h2>{profile.name}</h2>
              <p>{profile.role}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-band">
        <div className="site-shell proof-grid">
          {proofPoints.map((item) => (
            <div key={item.label} className="proof-item">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="page-section">
        <div className="site-shell section-heading-row">
          <div>
            <p className="eyebrow">Focus</p>
            <h2>Where I can contribute immediately</h2>
          </div>
          <p className="section-lede">
            Practical AI architecture, conversational product delivery, and engineering judgment for teams that need
            systems to hold up after the demo.
          </p>
        </div>

        <div className="site-shell focus-grid">
          {focusAreas.map(({ title, description, icon: Icon }) => (
            <article key={title} className="info-card">
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section muted-section">
        <div className="site-shell split-section">
          <div>
            <p className="eyebrow">Stack signal</p>
            <h2>A senior profile around AI, cloud, and implementation.</h2>
          </div>
          <div className="skill-grid">
            {skills.map(({ label, icon: Icon }) => (
              <span key={label} className="skill-chip">
                <Icon size={15} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-shell cta-band">
          <div>
            <p className="eyebrow">Dual mode</p>
            <h2>Recruiter-safe by default. Consulting mode when intentionally shared.</h2>
            <p>
              The public portfolio stays focused on stable career positioning. A hidden consulting view is available
              for AI workflow audits, bot modernization, and MVP architecture conversations.
            </p>
          </div>
          <a href="/consulting" className="secondary-button">
            Open consulting mode
          </a>
        </div>
      </section>
    </>
  )
}
