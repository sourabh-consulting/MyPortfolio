import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'

export const Route = createFileRoute('/gallery')({
  head: () => ({
    meta: [
      { title: 'Gallery — Alex Morgan' },
      { name: 'description', content: 'Visual showcase of design work, UI screenshots, and project highlights by Alex Morgan.' },
    ],
  }),
  component: GalleryPage,
})

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

function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    document.body.style.overflow = ''
  }

  const prev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length)
  }

  const next = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((lightboxIndex + 1) % filtered.length)
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Visual Work</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Design <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Screenshots, UI designs, and visual explorations from projects I've worked on.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex gap-2 flex-wrap mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/5 border border-white/8 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid group relative rounded-xl overflow-hidden cursor-zoom-in border border-white/8 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.thumb}
                alt={image.alt}
                loading="lazy"
                className="w-full block group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
                <p className="text-cyan-400 text-xs mt-0.5">{image.category}</p>
              </div>
              <div className="absolute top-3 right-3 w-7 h-7 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn size={14} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <div className="max-w-4xl max-h-[85vh] px-16" onClick={(e) => e.stopPropagation()}>
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="text-center mt-4">
              <p className="text-white font-medium">{filtered[lightboxIndex].alt}</p>
              <p className="text-slate-500 text-sm mt-0.5">
                {lightboxIndex + 1} / {filtered.length} · {filtered[lightboxIndex].category}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  )
}
