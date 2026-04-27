import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Send, CheckCircle2, Github, Linkedin, Twitter, Dribbble } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact — Alex Morgan' },
      { name: 'description', content: 'Get in touch with Alex Morgan for freelance projects, full-time opportunities, or just to say hello.' },
    ],
  }),
  component: ContactPage,
})

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-white' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-400' },
  { icon: Twitter, label: 'Twitter / X', href: 'https://twitter.com', color: 'hover:text-sky-400' },
  { icon: Dribbble, label: 'Dribbble', href: 'https://dribbble.com', color: 'hover:text-pink-400' },
]

const projectTypes = [
  'Select a project type…',
  'New web application',
  'Mobile app',
  'E-commerce store',
  'API / Backend development',
  'UI/UX design & implementation',
  'Performance audit & optimization',
  'Full-time employment',
  'Other',
]

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Message Sent!</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Thanks for reaching out. I read every message personally and typically respond within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Let's build something{' '}
            <span className="gradient-text">great</span> together
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Whether you need a freelancer or a full-time team member, I'm ready to help. Describe your project and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={(e) => {
                e.preventDefault()
                const form = e.currentTarget
                const formData = new FormData(form)
                fetch('/contact.html', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
                }).then(() => setSubmitted(true))
              }}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Smith"
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.06] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.06] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project-type" className="block text-sm font-medium text-slate-300 mb-2">
                  Project Type
                </label>
                <select
                  id="project-type"
                  name="project-type"
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.06] transition-all appearance-none cursor-pointer"
                >
                  {projectTypes.map((type) => (
                    <option key={type} value={type === projectTypes[0] ? '' : type}
                      className="bg-[#1a1a2e] text-white"
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-slate-300 mb-2">
                  Budget Range <span className="text-slate-600">(optional)</span>
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  placeholder="e.g. $5k–$10k"
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.06] transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Describe your project, goals, timeline, or any questions you have..."
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.06] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/25 hover:-translate-y-0.5"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Direct contact */}
            <div className="glass-card rounded-2xl p-6 border border-white/8">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                <Mail size={18} className="text-indigo-400" />
              </div>
              <h3 className="text-white font-semibold mb-1">Email directly</h3>
              <a href="mailto:hello@alexmorgan.dev" className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm">
                hello@alexmorgan.dev
              </a>
              <p className="text-slate-500 text-xs mt-2">Response within 24 hours</p>
            </div>

            {/* Social links */}
            <div className="glass-card rounded-2xl p-6 border border-white/8">
              <h3 className="text-white font-semibold mb-4">Find me online</h3>
              <div className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-slate-400 ${color} transition-colors group`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/8 flex items-center justify-center group-hover:border-white/16 transition-colors">
                      <Icon size={15} />
                    </div>
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-sm font-semibold">Currently Available</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Taking on new freelance projects and open to full-time opportunities starting immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
