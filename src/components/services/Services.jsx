import { useState, useEffect } from 'react'
import { SERVICES } from '../../data/companyData'

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

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

  const handleBookService = (service) => {
    window.dispatchEvent(
      new CustomEvent('prism:select-inquiry', {
        detail: {
          service: service.name,
          message: `Hello Prism team, I would like to get a quote and discuss the scope for your ${service.name} service.`,
        },
      })
    )
    setSelectedService(null)
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-2 sm:py-5 lg:py-5 bg-gradient-subtle border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            What We Do
          </span>
          <h2 className="font-general font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mt-2 tracking-[-0.025em]">
            Our <span className="text-gradient">Digital Services</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            End-to-end development, automation, and digital intelligence crafted to transform and accelerate modern business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              onClick={() => setSelectedService(service)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedService(service)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${service.name}`}
              className="group relative overflow-hidden p-5 rounded-2xl bg-white dark:bg-[#101A2B] border border-slate-200/80 dark:border-[#1D2A3D] hover:border-blue-500 dark:hover:border-[#42C7B5] shadow-xs hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {/* Bottom-to-Top Sliding Fill Background Animation */}
              <div
                aria-hidden="true"
                className="absolute inset-0 z-0 bg-gradient-to-t from-[#1457E8] via-[#1268DF] to-[#19B3AC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none rounded-2xl"
              />

              {/* Card Content (z-10 to stay above the sliding background) */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-900/90 border border-blue-200/60 dark:border-[#1D2A3D] flex items-center justify-center text-blue-600 dark:text-[#3B82F6] text-xl mb-5 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40 group-hover:text-white transition-all duration-300 p-2 shadow-xs">
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    ) : (
                      <i className={`fa-solid ${service.icon}`} />
                    )}
                  </div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-medium font-general tracking-[-0.025em] text-slate-900 dark:text-[#F8FAFC] group-hover:text-white transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-[#B8C2D1] group-hover:text-white/90 transition-colors duration-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-[#1D2A3D] group-hover:border-white/25 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-[#3B82F6] group-hover:text-white transition-all duration-300">
                  <span className="group-hover:underline">Explore Details</span>
                  <i className="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1.5 transition-transform duration-300" />
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

