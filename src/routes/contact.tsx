import { FormEvent, useState } from 'react'
import { CheckCircle2, Github, Linkedin, Mail, Send } from 'lucide-react'
import { profile } from '@/data/profile'

const projectTypes = [
  'Career conversation',
  'AI architecture discussion',
  'Conversational AI / bot work',
  'MVP architecture support',
  'Speaking / writing / collaboration',
  'Other',
]

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      form.reset()
      setSubmitted(true)
    } catch {
      setError(`Something went wrong. You can email me directly at ${profile.email}.`)
    }
  }

  if (submitted) {
    return (
      <section className="page-section centered-section">
        <div className="site-shell narrow-shell success-panel">
          <CheckCircle2 size={42} />
          <h1>Message sent.</h1>
          <p className="section-lede">
            Thanks for reaching out. I will review it and reply when I can.
          </p>
          <button type="button" className="secondary-button" onClick={() => setSubmitted(false)}>
            Send another message
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="page-hero">
      <div className="site-shell contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>For roles, architecture conversations, or focused consulting.</h1>
          <p className="section-lede">
            The default site stays career-safe, but this form supports both recruiter conversations and intentionally
            shared consulting inquiries.
          </p>

          <div className="contact-card">
            <Mail size={20} />
            <div>
              <h2>Email directly</h2>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>

          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <Github size={18} />
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>

          <label>
            Name
            <input name="name" type="text" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required placeholder="you@company.com" />
          </label>
          <label>
            Conversation type
            <select name="project-type" defaultValue={projectTypes[0]}>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={6}
              required
              placeholder="Tell me what you are exploring, hiring for, or trying to build."
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="primary-button full-button">
            <Send size={17} />
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
