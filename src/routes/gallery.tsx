import { useState } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react'

const galleryImages = [
  { id: 1, src: 'https://picsum.photos/seed/port01/800/600', thumb: 'https://picsum.photos/seed/port01/400/300', alt: 'E-Commerce Dashboard UI', category: 'UI Design' },
  { id: 2, src: 'https://picsum.photos/seed/port02/600/800', thumb: 'https://picsum.photos/seed/port02/300/400', alt: 'Mobile App Design', category: 'Mobile' },
  { id: 3, src: 'https://picsum.photos/seed/port03/800/500', thumb: 'https://picsum.photos/seed/port03/400/250', alt: 'Analytics Platform', category: 'Web App' },
  { id: 4, src: 'https://picsum.photos/seed/port04/700/700', thumb: 'https://picsum.photos/seed/port04/350/350', alt: 'Design System Components', category: 'UI Design' },
  { id: 5, src: 'https://picsum.photos/seed/port05/800/600', thumb: 'https://picsum.photos/seed/port05/400/300', alt: 'Real-time Chat Interface', category: 'Web App' },
  { id: 6, src: 'https://picsum.photos/seed/port06/600/900', thumb: 'https://picsum.photos/seed/port06/300/450', alt: 'Portfolio Landing Page', category: 'Web App' },
  { id: 7, src: 'https://picsum.photos/seed/port07/900/600', thumb: 'https://picsum.photos/seed/port07/450/300', alt: 'SaaS Onboarding Flow', category: 'UI Design' },
  { id: 8, src: 'https://picsum.photos/seed/port08/700/500', thumb: 'https://picsum.photos/seed/port08/350/250', alt: 'React Native Fitness App', category: 'Mobile' },
  { id: 9, src: 'https://picsum.photos/seed/port09/800/700', thumb: 'https://picsum.photos/seed/port09/400/350', alt: 'Dev Tools CLI Interface', category: 'Tools' },
  { id: 10, src: 'https://picsum.photos/seed/port10/600/600', thumb: 'https://picsum.photos/seed/port10/300/300', alt: 'Brand Identity System', category: 'UI Design' },
  { id: 11, src: 'https://picsum.photos/seed/port11/800/550', thumb: 'https://picsum.photos/seed/port11/400/275', alt: 'API Documentation Site', category: 'Tools' },
  { id: 12, src: 'https://picsum.photos/seed/port12/700/600', thumb: 'https://picsum.photos/seed/port12/350/300', alt: 'AI Content Generator UI', category: 'Web App' },
]

const categories = ['All', 'UI Design', 'Web App', 'Mobile', 'Tools']

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((image) => image.category === activeCategory)

  const closeLightbox = () => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const previous = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }

  const next = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }

  return (
    <section className="page-hero">
      <div className="site-shell">
        <p className="eyebrow">Gallery scaffold</p>
        <h1>Visual placeholders remain for later replacement.</h1>
        <p className="section-lede">
          This gallery keeps the original structure available, but the images are still placeholder assets.
        </p>

        <div className="filter-bar" aria-label="Gallery filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={activeCategory === category ? 'filter-pill active' : 'filter-pill'}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filtered.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img src={image.thumb} alt={image.alt} loading="lazy" />
              <span>
                <ZoomIn size={15} />
                {image.category}
              </span>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button type="button" className="lightbox-close" onClick={closeLightbox} aria-label="Close image">
            <X size={22} />
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            onClick={(event) => {
              event.stopPropagation()
              previous()
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            onClick={(event) => event.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            onClick={(event) => {
              event.stopPropagation()
              next()
            }}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  )
}
