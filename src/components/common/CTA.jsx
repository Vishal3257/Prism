import { useNavigate, useLocation } from 'react-router-dom'
import { COMPANY } from '../../data/companyData'

const TRUST_PILLARS = [
  { icon: 'fa-bolt', text: '48h Discovery & Kickoff' },
  { icon: 'fa-shield-halved', text: '100% Code & IP Ownership' },
  { icon: 'fa-file-contract', text: 'Strict NDA Protected' },
  { icon: 'fa-comments', text: 'Zero-Obligation Consultation' },
]

export default function CTA() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleStartProject = () => {
    if (location.pathname === '/') {
      const el = document.getElementById('contact')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    navigate('/contact')
  }

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Prism Infotech team! I have a project inquiry and would like to schedule a consultation.'
    )
    window.open(`https://wa.me/${COMPANY.whatsappNumber}?text=${text}`, '_blank')
  }

  return (
    <section className="py-3 sm:py-4 lg:py-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Luxury Outer Border Container with Subtle Gradient Ring */}
        <div className="relative p-[1px] rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-blue-500/25 via-slate-200/60 to-teal-400/25 dark:from-[#3B82F6]/40 dark:via-[#1D2A3D] dark:to-[#42C7B5]/30 shadow-[0_20px_50px_rgba(37,99,235,0.08)] dark:shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)] overflow-hidden transition-all duration-300">
          
          {/* Inner Card Container */}
          <div className="relative rounded-[calc(1.5rem-1px)] sm:rounded-[calc(2.5rem-1px)] bg-gradient-to-b from-white via-slate-50/70 to-blue-50/30 dark:from-[#0A1220] dark:via-[#101A2B] dark:to-[#0A1220] p-8 sm:p-12 lg:p-16 overflow-hidden text-center">
            
            {/* High-Tech Ambient Grid / Dot Matrix */}
            <div
              className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 dark:opacity-20 pointer-events-none"
              aria-hidden="true"
            />

            {/* Glowing Mesh Orbs */}
            <div
              className="absolute -top-24 -right-24 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-br from-blue-500/20 to-teal-400/20 dark:from-[#3B82F6]/25 dark:to-[#42C7B5]/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-24 -left-24 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-tr from-teal-400/15 to-blue-600/15 dark:from-[#42C7B5]/20 dark:to-[#3B82F6]/20 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            {/* Content Container */}
            <div className="relative z-10">
              {/* Status Pill Badge with Pulsing Live Indicator */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-700 dark:bg-blue-500/15 dark:text-[#42C7B5] border border-blue-500/20 dark:border-[#42C7B5]/30 mb-6 shadow-xs backdrop-blur-md">
                
                <span> Available for New Projects • 24h Response SLA</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F8FAFC] max-w-3xl mx-auto leading-[1.18] font-['Outfit']">
                Have an Ambitious Project in Mind?{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 dark:from-[#3B82F6] dark:via-[#60A5FA] dark:to-[#42C7B5] bg-clip-text text-transparent block mt-1.5 sm:mt-2.5">
                  Let&apos;s Build Something Extraordinary.
                </span>
              </h2>

              {/* Subheading / Value Copy */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-[#B8C2D1] max-w-2xl mx-auto leading-relaxed font-normal">
                Partner with an elite software studio. From modern websites &amp; mobile apps to AI chatbots and enterprise systems — we design, develop, and scale digital products that drive measurable growth.
              </p>

              {/* Trust Guarantees / Value Pillars */}
              <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto">
                {TRUST_PILLARS.map((item) => (
                  <div
                    key={item.text}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/80 dark:bg-[#101A2B]/90 border border-slate-200/80 dark:border-[#1D2A3D] text-xs sm:text-sm font-medium text-slate-700 dark:text-[#B8C2D1] shadow-xs backdrop-blur-xs"
                  >
                    <i className={`fa-solid ${item.icon} text-blue-600 dark:text-[#42C7B5] text-xs`} />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap gap-4 justify-center items-center">
                {/* Primary Button */}
                <button
                  type="button"
                  onClick={handleStartProject}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 dark:from-[#3B82F6] dark:to-[#2563EB] shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm sm:text-base cursor-pointer overflow-hidden"
                >
                  <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-out pointer-events-none" />
                  <span>Start Your Project</span>
                  <i className="fa-solid fa-arrow-right text-sm group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Secondary Button - WhatsApp Direct */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-semibold bg-white/90 dark:bg-[#101A2B] hover:bg-slate-50 dark:hover:bg-[#15233a] text-slate-800 dark:text-[#F8FAFC] border border-slate-200/90 dark:border-[#1D2A3D] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm sm:text-base cursor-pointer"
                >
                  <i className="fa-brands fa-whatsapp text-emerald-500 dark:text-emerald-400 text-xl" />
                  <span>Chat on WhatsApp</span>
                  <span className="text-[11px] font-normal text-slate-500 dark:text-[#77859A] hidden sm:inline">
                    (Instant Reply)
                  </span>
                </button>
              </div>

              {/* Direct Fast-Track Micro-Footnote */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-[#1D2A3D]/70 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 dark:text-[#77859A]">
                <span className="inline-flex items-center gap-1.5">
                  <i className="fa-solid fa-phone text-blue-600 dark:text-[#3B82F6]" />
                  <span>Direct Line:</span>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                    className="font-semibold text-slate-700 dark:text-[#B8C2D1] hover:text-blue-600 dark:hover:text-[#3B82F6] transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                </span>
                <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <i className="fa-solid fa-envelope text-teal-600 dark:text-[#42C7B5]" />
                  <span>Direct Email:</span>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-semibold text-slate-700 dark:text-[#B8C2D1] hover:text-teal-600 dark:hover:text-[#42C7B5] transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </span>
                <span className="hidden sm:inline text-slate-300 dark:text-slate-700">•</span>
                <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
                  <i className="fa-solid fa-circle-check text-xs" />
                  <span>Avg. response under 2 hours</span>
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
