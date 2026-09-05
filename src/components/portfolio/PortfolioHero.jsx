import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SERVICES = [
  {
    title: 'Web Development',
    category: 'Development',
    description: 'High-performance websites and scalable web applications.',
    icon: 'fa-code',
    gradient: 'from-[#2563EB] to-[#1d4ed8]',
  },
  {
    title: 'Mobile Apps',
    category: 'Mobile',
    description: 'Modern mobile experiences built for iOS and Android.',
    icon: 'fa-mobile-screen-button',
    gradient: 'from-[#2563EB] to-[#35B8A5]',
  },
  {
    title: 'UI / UX Design',
    category: 'Design',
    description: 'Clean interfaces and digital experiences users enjoy.',
    icon: 'fa-pen-ruler',
    gradient: 'from-[#35B8A5] to-[#0ea5a4]',
  },
  {
    title: 'Digital Marketing',
    category: 'Marketing',
    description: 'Strategies that improve visibility, traffic and growth.',
    icon: 'fa-chart-line',
    gradient: 'from-[#2563EB] to-[#42C7B5]',
  },
  {
    title: 'Cloud & DevOps',
    category: 'Infrastructure',
    description: 'Reliable infrastructure built to scale your business.',
    icon: 'fa-cloud',
    gradient: 'from-[#1d4ed8] to-[#2563EB]',
  },
  {
    title: 'Blockchain',
    category: 'Technology',
    description: 'Secure decentralized solutions for modern businesses.',
    icon: 'fa-link',
    gradient: 'from-[#35B8A5] to-[#2563EB]',
  },
]

const CARD_WIDTH = 220
const CARD_GAP = 16 // gap-4 = 1rem = 16px
const STEP = CARD_WIDTH + CARD_GAP

export default function PortfolioHero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((current) =>
        current === SERVICES.length - 1 ? 0 : current + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-section-bg)] transition-colors duration-300">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-60
          [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--color-border)_60%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-border)_60%,transparent)_1px,transparent_1px)]
          [background-size:42px_42px]"
      />

      {/* Blue Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-[30%] -z-10 h-[400px] w-[400px] rounded-full bg-[var(--color-primary-blue)]/10 blur-[130px]" />
      {/* Teal Glow */}
      <div className="pointer-events-none absolute bottom-[-150px] right-[-120px] -z-10 h-[400px] w-[400px] rounded-full bg-[var(--color-teal-accent)]/10 blur-[130px]" />

      <div className="mx-auto max-w-[1500px] px-10 py-6 sm:px-8 lg:px-12 lg:py-8">
        {/* MAIN LAYOUT */}
        <div className="grid min-h-[520px] items-stretch gap-3 lg:grid-cols-[50%_50%] xl:grid-cols-[48%_52%]">
          {/* ================= LEFT DIV ================= */}
          <div className="relative  z-30 flex flex-col justify-center">
            {/* Eyebrow Badge */}
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="font-satoshi inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card-bg)] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-blue)] shadow-xs">
                 Digital Solutions & Work
              </span>
            </div>

            {/* Heading (General Sans - Swiss Minimal Style) */}
            <h1 className="font-general max-w-lg text-4xl font-light leading-[0.95] tracking-[-0.025em] text-[var(--color-headings)] sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">WEB.</span>
              <span className="block">MOBILE.</span>
              <span className="block">GRAPHIC.</span>
              <span className="text-gradient block font-normal">MARKETING Skil</span>
            </h1>

            {/* Description (Satoshi) */}
            <p className="font-satoshi mt-6 max-w-md text-sm font-light leading-relaxed text-[var(--color-body)] sm:text-base">
              We design and build digital solutions that help ambitious businesses transform ideas into scalable and meaningful experiences.
            </p>

            {/* CTA + mini stat row */}
            <div className="mt-7 flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => navigate('/contact')}
                className="font-satoshi bg-gradient-primary group inline-flex w-fit cursor-pointer items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30"
              >
                Get in Touch
                <i className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {SERVICES.slice(0, 3).map((s) => (
                    <span
                      key={s.title}
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--color-section-bg)] bg-gradient-to-br text-[11px] text-white ${s.gradient}`}
                    >
                      <i className={`fa-solid ${s.icon}`} />
                    </span>
                  ))}
                </div>
                <p className="font-satoshi text-xs leading-tight text-[var(--color-muted)]">
                  6 disciplines,
                  <br />
                  one team
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT DIV — full height, heading top, cards bottom ================= */}
          <div className="relative flex h-full min-w-0  flex-col overflow-hidden">
            {/* Decorative Heading — top of right column, bigger now */}
            <div className="hidden flex-col items-center pt-8 text-center lg:flex">
              <p className="font-general text-2xl font-light tracking-[-0.03em] text-[var(--color-headings)] sm:text-3xl lg:text-4xl xl:text-[2.75rem]">
                WE DESIGN DIGITAL
              </p>
              <p className="text-gradient font-general text-2xl font-light tracking-[-0.03em] sm:text-3xl lg:text-4xl xl:text-[2.75rem]">
                SOLUTIONS
              </p>
              <span className="mt-4 h-px w-14 bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
            </div>

            {/* Cards Viewport — pinned to bottom */}
            <div
              className="relative px-5 mt-auto w-full overflow-hidden py-5"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
         
 
              {/* Animated Track */}
              <div
                className="flex w-max gap-2 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${activeIndex * STEP}px)` }}
              >
                {[...SERVICES, ...SERVICES].map((service, index) => {
                  const isActive = index % SERVICES.length === activeIndex

                  return (
                    <article
                      key={`${service.title}-${index}`}
                      className={`group relative h-[240px] w-[220px] shrink-0 overflow-hidden rounded-[1.5rem] border bg-[var(--color-card-bg)] shadow-xl shadow-slate-900/5 transition-all duration-500 hover:-translate-y-2 dark:shadow-black/30 ${
                        isActive
                          ? 'border-[var(--color-primary-blue)]/40 ring-2 ring-[var(--color-primary-blue)]/15'
                          : 'border-[var(--color-border)]'
                      }`}
                    >
                      {/* Gradient Top Border */}
                      <div className={`absolute left-0 right-0 top-0 h-1.5 bg-gradient-to-r ${service.gradient}`} />

                      {/* Decorative Circle */}
                      <div className="absolute -right-9 -top-9 h-24 w-24 rounded-full bg-[var(--color-primary-blue)]/8 transition-transform duration-700 group-hover:scale-150" />

                      {/* Icon */}
                      <div className={`relative z-10 ml-4 mt-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-base text-white shadow-md`}>
                        <i className={`fa-solid ${service.icon}`} />
                      </div>

                      {/* Card Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="font-satoshi mb-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                          {service.category}
                        </p>

                        <h2 className="font-general text-lg font-medium leading-snug tracking-[-0.025em] text-[var(--color-headings)]">
                          {service.title}
                        </h2>

                        <p className="font-satoshi mt-1.5 text-xs font-light leading-5 text-[var(--color-body)]">
                          {service.description}
                        </p>

                        {/* Explore */}
                        <div className="font-satoshi mt-3 flex items-center gap-1.5 text-xs font-semibold text-[var(--color-primary-blue)] transition-colors group-hover:text-[var(--color-teal-accent)]">
                          <span>Explore</span>
                          <i className="fa-solid fa-arrow-right text-[10px] transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            {/* Dot indicators — shows position, click to jump */}
            <div className="mt-4 hidden items-center justify-center gap-1.5 lg:flex">
              {SERVICES.map((service, index) => (
                <button
                  key={service.title}
                  type="button"
                  aria-label={`Go to ${service.title}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-6 bg-[var(--color-primary-blue)]'
                      : 'w-1.5 bg-[var(--color-border)] hover:bg-[var(--color-muted)]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}