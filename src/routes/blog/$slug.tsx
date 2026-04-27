import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { marked } from 'marked'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Calendar } from 'lucide-react'

export const Route = createFileRoute('/blog/$slug')({
  head: ({ params }) => {
    const post = allBlogs.find((p) => p._meta.path === params.slug)
    return {
      meta: post
        ? [
            { title: `${post.title} — Alex Morgan` },
            { name: 'description', content: post.summary },
          ]
        : [{ title: 'Post Not Found — Alex Morgan' }],
    }
  },
  component: BlogPost,
})

function BlogPost() {
  const { slug } = Route.useParams()
  const post = allBlogs.find((p) => p._meta.path === slug)

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
          <Link to="/" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  const html = marked(post.content)

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-10 transition-colors text-sm"
        >
          <ArrowLeft size={15} />
          Back to home
        </Link>

        <article>
          <header className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-slate-500 text-sm mb-5">
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <time>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <span>·</span>
              <span>{post.author}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div
            className="prose prose-invert prose-slate max-w-none prose-headings:text-white prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-code:text-cyan-300 prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </div>
  )
}
