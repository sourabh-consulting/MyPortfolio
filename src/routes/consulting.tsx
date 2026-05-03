import { ArrowRight, LockKeyhole, Mail } from 'lucide-react'
import { caseStudies, consultingOffers, profile } from '@/data/profile'

export function ConsultingPage() {
  return (
    <>
      <section className="hero-section consulting-hero">
        <div className="site-shell hero-grid-layout">
          <div className="hero-copy">
            <p className="eyebrow">Hidden consulting mode</p>
            <h1>Focused AI architecture help without turning the public portfolio into a sales page.</h1>
            <p className="hero-lede">
              This view is meant for direct links: fixed-scope AI workflow audits, agentic AI readiness reviews, and
              GenAI MVP architecture sprints for teams that need production judgment before they overbuild.
            </p>
            <div className="hero-actions">
              <a href="/contact" className="primary-button">
                Start a conversation
                <ArrowRight size={18} />
              </a>
              <a href="/" className="secondary-button">
                Back to career view
              </a>
            </div>
          </div>

          <aside className="consulting-note">
            <LockKeyhole size={22} />
            <h2>Deliberately separate</h2>
            <p>
              Recruiters see the career-first site by default. Consulting leads can receive this URL when a service
              conversation is relevant.
            </p>
          </aside>
        </div>
      </section>

      <section className="page-section">
        <div className="site-shell section-heading-row">
          <div>
            <p className="eyebrow">Offers</p>
            <h2>Useful scopes for small teams and builders</h2>
          </div>
          <p className="section-lede">
            The goal is not vague AI advice. Each scope should end with decisions, risks, architecture notes, and a
            next-step plan.
          </p>
        </div>
        <div className="site-shell focus-grid">
          {consultingOffers.map(({ title, price, timeline, description, icon: Icon }) => (
            <article key={title} className="info-card">
              <Icon size={22} />
              <h3>{title}</h3>
              <p className="offer-meta">{price} - {timeline}</p>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section muted-section">
        <div className="site-shell">
          <div className="section-heading-row">
            <div>
              <p className="eyebrow">Public-safe proof</p>
              <h2>Anonymized patterns, not confidential details</h2>
            </div>
            <p className="section-lede">
              Case-study language stays careful: no client secrets, no protected architecture, and no claims that are
              not supported by public-safe experience.
            </p>
          </div>
          <div className="case-study-grid">
            {caseStudies.map((item) => (
              <article key={item.label} className="case-card">
                <h3>{item.label}</h3>
                <p>{item.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-shell cta-band">
          <div>
            <p className="eyebrow">Availability</p>
            <h2>Share context first. Then decide if there is a fit.</h2>
            <p>
              Send the current problem, rough goal, and constraints. I can help shape the architecture conversation
              before anyone commits to a build.
            </p>
          </div>
          <a href={`mailto:${profile.email}`} className="primary-button">
            <Mail size={17} />
            Email Sourabh
          </a>
        </div>
      </section>
    </>
  )
}
