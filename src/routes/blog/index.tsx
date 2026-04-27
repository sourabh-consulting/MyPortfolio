import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { Calendar, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/blog/')({
  head: () => ({
    meta: [
      { title: 'Blog — Alex Morgan' },
      { name: 'description', content: 'Thoughts on web development, design patterns, TypeScript, and building software products.' },
    ],
  }),
  component: BlogIndex,
})

function BlogIndex() {
  const posts = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="mb-14">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">Writing</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            The <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Thoughts on web development, design, and building things that last.
          </p>
        </div>

        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post._meta.path}
              to="/blog/$slug"
              params={{ slug: post._meta.path }}
              className="block group"
            >
              <div className="glass-card rounded-2xl p-6 border border-white/8 hover:border-indigo-500/25 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.summary}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                        <Calendar size={12} />
                        <time>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </time>
                      </div>
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-white/[0.04] border border-white/[0.06] rounded text-xs text-slate-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight size={18} className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
