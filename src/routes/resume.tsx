import { createFileRoute, Link } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Download, MapPin, Calendar, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  head: () => ({
    meta: [
      { title: 'About — Alex Morgan' },
      { name: 'description', content: 'Learn about Alex Morgan — full-stack developer with 5+ years of experience building scalable web applications.' },
    ],
  }),
  component: AboutPage,
})

const skills = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'FastAPI', 'GraphQL', 'REST APIs', 'WebSockets'] },
  { category: 'Data & Cloud', items: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS', 'Docker', 'Kubernetes'] },
  { category: 'Tools', items: ['Git', 'CI/CD', 'Figma', 'Jest', 'Playwright', 'Storybook'] },
]

function AboutPage() {
  const jobs = [...allJobs].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
  )
  const educations = [...allEducations]

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Hero / Bio */}
        <section className="mb-20">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
                Building the web,{' '}
                <span className="gradient-text">one pixel at a time</span>
              </h1>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm Alex Morgan, a full-stack developer based in San Francisco with over 5 years of experience designing and building digital products that people love. I specialize in React, TypeScript, and Node.js ecosystems.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8">
                From early-stage startups to Fortune 500 companies, I've helped teams ship products faster, write cleaner code, and create experiences that convert. I believe in writing code that's not just functional, but maintainable, tested, and a joy to work with.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-500/25"
                >
                  <Download size={16} />
                  Download Resume
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-white/20 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 opacity-30 blur-lg" />
                <div className="relative w-64 h-72 rounded-2xl overflow-hidden glass-card border border-white/10">
                  <img
                    src="/headshot-on-white.jpg"
                    alt="Alex Morgan — Professional Photo"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 px-4 py-3 glass-card rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-300 font-medium">Open to work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
          {[
            { icon: <MapPin size={16} />, label: 'Location', value: 'San Francisco, CA' },
            { icon: <Calendar size={16} />, label: 'Experience', value: '5+ Years' },
            { icon: <ExternalLink size={16} />, label: 'Availability', value: 'Freelance & Full-time' },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-xl p-5 border border-white/8">
              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium uppercase tracking-wider mb-2">
                {item.icon} {item.label}
              </div>
              <div className="text-white font-semibold">{item.value}</div>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">
            <span className="gradient-text">Skills</span> & Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-indigo-500/20 transition-colors">
                <h3 className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item}
                      className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.07] rounded-full text-sm text-slate-300 hover:border-indigo-400/40 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/20 to-transparent" />
            <div className="space-y-8">
              {jobs.map((job, i) => (
                <div key={`${job.jobTitle}-${i}`} className="relative pl-12">
                  <div className="absolute left-3 top-5 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#0a0a0f] -translate-x-1/2 shadow-lg shadow-indigo-500/50" />
                  <div className="glass-card rounded-2xl p-6 border border-white/8 hover:border-indigo-500/20 transition-all hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{job.jobTitle}</h3>
                        <p className="text-indigo-400 font-medium">{job.company}</p>
                        <p className="text-slate-500 text-sm">{job.location}</p>
                      </div>
                      <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs rounded-full font-medium">
                        {job.startDate} – {job.endDate || 'Present'}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{job.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded-md text-xs text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="space-y-4">
            {educations.map((edu, i) => (
              <div key={`${edu.school}-${i}`} className="glass-card rounded-2xl p-6 border border-white/8 hover:border-cyan-500/20 transition-all hover:-translate-y-0.5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                    <p className="text-cyan-400 font-medium text-sm mt-1">{edu.summary}</p>
                  </div>
                  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs rounded-full font-medium">
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded-md text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
