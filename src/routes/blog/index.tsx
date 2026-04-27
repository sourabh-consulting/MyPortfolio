import { Calendar, ArrowRight } from 'lucide-react'
import { allBlogs } from 'content-collections'

export { BlogPost } from './$slug'

export function BlogIndex() {
  const posts = [...allBlogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return (
    <section className="page-hero">
      <div className="site-shell narrow-shell">
        <p className="eyebrow">Writing scaffold</p>
        <h1>Blog placeholders stay for now.</h1>
        <p className="section-lede">
          These posts are intentionally untouched so the future writing structure remains visible and easy to replace.
        </p>

        <div className="blog-list">
          {posts.map((post) => (
            <a key={post._meta.path} href={`/blog/${post._meta.path}`} className="blog-card">
              <div>
                <span className="draft-label">Placeholder to replace</span>
                <h2>{post.title}</h2>
                <p>{post.summary}</p>
                <div className="blog-meta">
                  <Calendar size={14} />
                  <time>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </time>
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <ArrowRight size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
