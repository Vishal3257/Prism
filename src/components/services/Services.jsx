import { useState, useEffect } from 'react'
import { SERVICES } from '../../data/companyData'

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)
  const [activeServiceId, setActiveServiceId] = useState(null)

  // ESC key listener to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null)
    }
    if (selectedService) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedService])

  // Click outside to deactivate active card and trigger smooth reverse slide-down
  useEffect(() => {
    if (!activeServiceId) return
    const handleOutsideClick = (e) => {
      if (!e.target.closest('#services')) {
        setActiveServiceId(null)
      }
    }
    document.addEventListener('pointerdown', handleOutsideClick)
    return () => document.removeEventListener('pointerdown', handleOutsideClick)
  }, [activeServiceId])

  const handleCardClick = (service) => {
    const isTouchOrMobile =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024)

    if (!isTouchOrMobile) {
      // Desktop mouse: open modal directly on click
      setSelectedService(service)
      return
    }

    // Touch / Mobile: toggle active state (bottom to top on active, reverse slide down on unactive)
    if (activeServiceId === service.id) {
      setActiveServiceId(null)
    } else {
      setActiveServiceId(service.id)
    }
  }

  const handleExploreClick = (service, e) => {
    e.stopPropagation()
    setSelectedService(service)
    setActiveServiceId(null)
  }

  const handleBookService = (service) => {
    window.dispatchEvent(
      new CustomEvent('prism:select-inquiry', {
        detail: {
          service: service.name,
          message: `Inquiring about ${service.name}. Features required: ${service.features.join(', ')}`,
        },
      })
    )
    setSelectedService(null)
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="services" data-cursor="services" className="py-14 sm:py-20 lg:py-24 bg-[#F7F9FC] dark:bg-[#060B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100/70 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 mb-3 border border-blue-200/60 dark:border-blue-800/40">
            What We Deliver
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-general text-slate-900 dark:text-[#F8FAFC] tracking-[-0.025em]">
            Engineering & <span className="text-gradient">Digital Services</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            End-to-end development, automation, and digital intelligence crafted to transform and accelerate modern business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              onClick={() => handleCardClick(service)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleCardClick(service)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${service.name}`}
              className={`card-gradient-interactive group p-5 rounded-2xl bg-white dark:bg-[#101A2B] border border-slate-200/80 dark:border-[#1D2A3D] shadow-xs flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 select-none ${
                activeServiceId === service.id ? 'is-card-active' : ''
              }`}
            >
              {/* Bottom-to-Top Sliding Fill Background Animation (and reverse top-to-bottom on unactive) */}
              <div aria-hidden="true" className="card-sliding-bg" />

              {/* Card Content (z-10 to stay above the sliding background) */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div
                    className="card-icon-active w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-900/90 border border-blue-200/60 dark:border-[#1D2A3D] flex items-center justify-center text-blue-600 dark:text-[#3B82F6] text-xl mb-5 transition-all duration-300 p-2 shadow-xs"
                  >
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-16 h-16 object-contain transition-transform duration-300"
                      />
                    ) : (
                      <i className={`fa-solid ${service.icon}`} />
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="card-text-white text-lg font-medium font-general tracking-[-0.025em] text-slate-900 dark:text-[#F8FAFC] transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>

                  <p className="card-text-muted text-sm text-slate-600 dark:text-[#B8C2D1] transition-colors duration-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div
                  onClick={(e) => handleExploreClick(service, e)}
                  className="card-border-active mt-4 pt-3.5 border-t border-slate-100 dark:border-[#1D2A3D] flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-[#3B82F6] transition-all duration-300 cursor-pointer"
                >
                  <span className="card-text-white group-hover:underline">Explore Details</span>
                  <i
                    className="card-arrow-active card-text-white fa-solid fa-arrow-right text-[11px] transition-transform duration-300"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md transition-opacity"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedService(null)
          }}
        >
          <div className="relative w-full max-w-lg bg-white dark:bg-[#101A2B] rounded-3xl border border-slate-200 dark:border-[#1D2A3D] shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              aria-label="Close service modal"
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="fa-solid fa-xmark text-sm" />
            </button>

            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl border border-blue-500/20 p-2">
                {selectedService.image ? (
                  <img
                    src={selectedService.image}
                    alt={selectedService.name}
                    className="w-7 h-7 object-contain"
                  />
                ) : (
                  <i className={`fa-solid ${selectedService.icon}`} />
                )}
              </div>
              <div>
                <h3 id="service-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {selectedService.name}
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <i className="fa-regular fa-clock text-[11px]" />
                  <span>Est. Turnaround: {selectedService.turnaround}</span>
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              {selectedService.desc}
            </p>

            {selectedService.features && (
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Included Capabilities & Standards
                </span>
                <ul className="space-y-2.5">
                  {selectedService.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <i className="fa-solid fa-circle-check text-blue-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleBookService(selectedService)}
                className="w-full bg-gradient-primary text-white font-bold py-3 px-5 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get a Quote for this Service</span>
                <i className="fa-solid fa-arrow-right text-xs" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

