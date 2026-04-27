import { marked } from 'marked'
import { ArrowLeft, Calendar } from 'lucide-react'
import { allBlogs } from 'content-collections'

type BlogPostProps = {
  slug: string
}

export function BlogPost({ slug }: BlogPostProps) {
  const post = allBlogs.find((item) => item._meta.path === slug)

  if (!post) {
    return (
      <section className="page-section centered-section">
        <div className="site-shell narrow-shell">
          <p className="eyebrow">Missing post</p>
          <h1>Post not found.</h1>
          <a href="/blog" className="secondary-button">
            Back to blog
          </a>
        </div>
      </section>
    )
  }

  const html = marked.parse(post.content, { async: false }) as string

  return (
    <article className="page-hero">
      <div className="site-shell narrow-shell">
        <a href="/blog" className="back-link">
          <ArrowLeft size={15} />
          Back to blog
        </a>
        <header className="article-header">
          <span className="draft-label">Placeholder to replace</span>
          <h1>{post.title}</h1>
          <div className="blog-meta">
            <Calendar size={14} />
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>{post.author}</span>
          </div>
          <div className="tag-row">
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>
        <div className="article-body" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </article>
  )
}
