import { useEffect, useState, useCallback } from 'react'
import { TESTIMONIALS } from '../../data/companyData'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const total = TESTIMONIALS.length

  // Responsive items-per-view calculation: 1 on mobile, 2 on tablet, 3 on desktop
  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth
      if (width < 768) {
        setVisibleCount(1) // Phone: 1 at a time
      } else if (width < 1024) {
        setVisibleCount(2) // Tablet: 2 at a time
      } else {
        setVisibleCount(3) // Laptop: 3 at a single row
      }
    }

    updateVisible()
    window.addEventListener('resize', updateVisible)
    return () => window.removeEventListener('resize', updateVisible)
  }, [])

  const maxIndex = Math.max(0, total - visibleCount)

  // Ensure current index stays within valid range when resizing
  if (currentIndex > maxIndex) {
    setCurrentIndex(maxIndex)
  }

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Autoplay with pause on hover
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next, isPaused])

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    }
  }

  // Touch Swipe handlers for mobile
  const minSwipeDistance = 45
  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) next()
    if (distance < -minSwipeDistance) prev()
  }

  const totalDots = maxIndex + 1

  return (
    <section id="testimonials" className="py-3   lg:py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              Client Feedback
            </span>
            <h2 className="font-general font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mt-1.5 tracking-[-0.025em]">
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Real feedback from founders and tech leaders worldwide who scaled their vision with Prism Infotech.
            </p>
          </div>

          {/* Desktop Nav Arrows */}
          <div className="flex items-center gap-2.5 self-start md:self-end">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-[#1D2A3D] bg-white dark:bg-[#101A2B] text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:border-blue-500 dark:hover:text-[#42C7B5] dark:hover:border-[#42C7B5] flex items-center justify-center transition-all cursor-pointer shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <i className="fa-solid fa-chevron-left text-xs" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-[#1D2A3D] bg-white dark:bg-[#101A2B] text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:border-blue-500 dark:hover:text-[#42C7B5] dark:hover:border-[#42C7B5] flex items-center justify-center transition-all cursor-pointer shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <i className="fa-solid fa-chevron-right text-xs" />
            </button>
          </div>
        </div>

        {/* Carousel Slider Container */}
        <div
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          aria-roledescription="carousel"
          aria-label="Client testimonials carousel"
          className="relative focus:outline-none"
        >
          {/* Slider Window */}
          <div className="overflow-hidden py-2 -mx-3 px-3">
            <div
              className="flex transition-transform duration-500 ease-out will-change-transform"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  className="shrink-0 px-2.5 sm:px-3 transition-all duration-300"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="h-full p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#101A2B] border border-slate-200/80 dark:border-[#1D2A3D] hover:border-blue-500/50 dark:hover:border-[#42C7B5]/50 shadow-xs hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative group">
                    {/* Decorative Watermark Quote */}
                    <div className="absolute top-5 right-5 text-3xl text-blue-500/10 dark:text-blue-400/10 group-hover:text-blue-500/20 transition-colors pointer-events-none">
                      <i className="fa-solid fa-quote-right" />
                    </div>

                    <div>
                      {/* Rating Stars */}
                      <div
                        className="flex items-center gap-1 text-amber-400 text-sm mb-4"
                        aria-label={`Rating: ${t.rating} out of 5 stars`}
                      >
                        {[...Array(t.rating)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star text-xs" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <blockquote className="text-sm sm:text-base text-slate-600 dark:text-[#B8C2D1] leading-relaxed mb-6 line-clamp-4 font-normal">
                        “{t.text}”
                      </blockquote>
                    </div>

                    {/* Client Information */}
                    <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 dark:border-[#1D2A3D] mt-auto">
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-blue-500/30 dark:border-blue-400/30 shrink-0 shadow-xs"
                        loading="lazy"
                      />
                      <div className="flex flex-col text-left overflow-hidden">
                        <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-[#F8FAFC] truncate">
                          {t.name}
                        </span>
                        <span className="text-[11px] font-medium text-slate-400 dark:text-[#77859A] truncate">
                          {t.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Indicators / Dots */}
          <div className="mt-8 flex items-center justify-center gap-2" role="tablist" aria-label="Testimonial slider navigation">
            {[...Array(totalDots)].map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={currentIndex === i}
                aria-label={`Go to testimonial slide ${i + 1}`}
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === i
                    ? 'w-8 bg-gradient-primary shadow-xs shadow-blue-500/30'
                    : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
