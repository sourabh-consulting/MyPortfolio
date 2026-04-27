import { Calendar, GraduationCap, MapPin, ShieldCheck } from 'lucide-react'
import { certifications, education, experience, profile, skills } from '@/data/profile'

export function ResumePage() {
  return (
    <>
      <section className="page-hero">
        <div className="site-shell narrow-shell">
          <p className="eyebrow">Experience</p>
          <h1>AI architecture, conversational systems, and full-stack delivery.</h1>
          <p className="section-lede">
            A career profile for hiring managers and technical leaders evaluating AI architect, GenAI, conversational
            AI, and senior engineering roles.
          </p>
          <div className="hero-meta compact-meta">
            <span>
              <MapPin size={16} />
              {profile.location}
            </span>
            <span>
              <ShieldCheck size={16} />
              Public-safe, evidence-backed summary
            </span>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-shell timeline-layout">
          <div>
            <p className="eyebrow">Work</p>
            <h2>Professional experience</h2>
          </div>
          <div className="timeline">
            {experience.map((company) => (
              <article key={company.company} className="timeline-company">
                <div className="timeline-company-heading">
                  <div>
                    <h3>{company.company}</h3>
                    <p>{company.location}</p>
                  </div>
                </div>
                <div className="role-list">
                  {company.roles.map((role) => (
                    <div key={`${company.company}-${role.title}`} className="role-item">
                      <div className="role-heading">
                        <h4>{role.title}</h4>
                        <span>
                          <Calendar size={14} />
                          {role.dates}
                        </span>
                      </div>
                      <p>{role.summary}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section muted-section">
        <div className="site-shell two-column-section">
          <div>
            <p className="eyebrow">Education</p>
            <h2>Academic foundation</h2>
            <div className="stacked-list">
              {education.map((item) => (
                <article key={item.school} className="compact-card">
                  <GraduationCap size={20} />
                  <div>
                    <h3>{item.school}</h3>
                    <p>{item.credential}</p>
                    <span>{item.dates} - {item.detail}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Certifications</p>
            <h2>Cloud and GenAI credentials</h2>
            <div className="stacked-list">
              {certifications.map((certification) => (
                <div key={certification} className="cert-row">
                  <ShieldCheck size={17} />
                  <span>{certification}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-shell split-section">
          <div>
            <p className="eyebrow">Skills</p>
            <h2>Tools and judgment areas</h2>
            <p className="section-lede">
              The site intentionally avoids a downloadable resume in v1. This page gives the public, curated version
              while a sanitized PDF can be added later.
            </p>
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
    </>
  )
}
