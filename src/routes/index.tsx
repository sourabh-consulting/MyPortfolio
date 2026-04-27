import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, ExternalLink, Github, Briefcase, Zap } from 'lucide-react'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Alex Morgan — Full-Stack Developer & Digital Craftsman' },
      { name: 'description', content: 'Full-stack developer crafting high-performance digital experiences that convert. Available for freelance and full-time opportunities.' },
    ],
  }),
  component: HomePage,
})

const techStack = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Docker', icon: '🐳' },
  { name: 'GraphQL', icon: '◈' },
]

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Shipped' },
  { value: '25+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
]

const featuredProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack store with real-time inventory, Stripe payments, and a custom admin dashboard.',
    tags: ['React', 'Node.js', 'Stripe'],
    gradient: 'from-indigo-500/20 to-purple-500/10',
    accentColor: 'text-indigo-400',
  },
  {
    title: 'AI Content Dashboard',
    description: 'SaaS analytics platform powered by GPT-4 for automated content insights and reporting.',
    tags: ['Python', 'FastAPI', 'OpenAI'],
    gradient: 'from-cyan-500/20 to-blue-500/10',
    accentColor: 'text-cyan-400',
  },
  {
    title: 'Real-time Chat App',
    description: 'Scalable messaging platform with WebSocket support, end-to-end encryption, and file sharing.',
    tags: ['Next.js', 'Socket.io', 'Redis'],
    gradient: 'from-violet-500/20 to-pink-500/10',
    accentColor: 'text-violet-400',
  },
]

function HomePage() {
  return (
    <div className="hero-grid">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-3xl">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for new projects
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6">
              I craft digital{' '}
              <span className="gradient-text">experiences</span>
              {' '}that convert
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Full-stack developer with 5+ years turning ambitious ideas into polished, performant products.
              Whether you need a freelancer for your next project or a senior engineer for your team — let's build something remarkable.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 text-base"
              >
                <Briefcase size={18} />
                Hire Me for a Project
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base"
              >
                View My Work
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Tech stack pills */}
            <div className="mt-14">
              <p className="text-xs text-slate-600 uppercase tracking-widest font-medium mb-4">Tech I work with</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] border border-white/[0.07] rounded-full text-sm text-slate-300 hover:border-indigo-500/40 hover:text-white transition-colors"
                  >
                    <span>{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/8 bg-white/[0.02] py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-extrabold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-2">Featured Work</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects that speak for themselves</h2>
            </div>
            <Link to="/projects"
              className="hidden sm:inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors"
            >
              View all <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <div key={project.title}
                className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${project.gradient} hover:-translate-y-1 transition-all duration-300 hover:glow-indigo group cursor-pointer`}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Zap size={18} className={project.accentColor} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-white/5 border border-white/8 rounded-md text-xs text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link to="/projects"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
            >
              View all projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-3xl overflow-hidden glass-card p-10 sm:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-500/10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-indigo-500/50 to-transparent" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to build something <span className="gradient-text">extraordinary?</span>
              </h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                Whether you need a freelancer for a short-term project or a full-time team member, I bring the same level of dedication and craft to every engagement.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                Let's Talk
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
