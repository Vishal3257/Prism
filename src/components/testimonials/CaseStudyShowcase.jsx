import { useEffect, useState } from 'react'

const CASE_STUDIES = [
  {
    client: 'Nimbus Retail',
    industry: 'E-commerce',
    icon: 'fa-cart-shopping',
    challenge: 'Struggling with a slow, outdated storefront losing customers at checkout.',
    approach: 'Rebuilt on a headless architecture with a streamlined 2-step checkout flow.',
    metrics: [
      { value: '2.4x', label: 'Conversion rate' },
      { value: '68%', label: 'Faster load time' },
      { value: '₹1.2Cr', label: 'Added revenue / yr' },
    ],
  },
  {
    client: 'FinEdge',
    industry: 'Fintech',
    icon: 'fa-coins',
    challenge: 'Legacy backend couldn\'t handle growing transaction volume during peak hours.',
    approach: 'Migrated to a microservices architecture with auto-scaling infrastructure.',
    metrics: [
      { value: '10x', label: 'Traffic handled' },
      { value: '99.9%', label: 'Uptime achieved' },
      { value: '3wk', label: 'Migration time' },
    ],
  },
  {
    client: 'Lumen Health',
    industry: 'Healthtech',
    icon: 'fa-heart-pulse',
    challenge: 'Patients dropping off during appointment booking due to a confusing flow.',
    approach: 'Redesigned the booking UX and added real-time slot availability.',
    metrics: [
      { value: '54%', label: 'Drop-off reduced' },
      { value: '3.1x', label: 'Bookings / month' },
      { value: '4.8★', label: 'App store rating' },
    ],
  },
  {
    client: 'Bharat Mart',
    industry: 'Marketplace',
    icon: 'fa-store',
    challenge: 'Manual inventory sync causing overselling across multiple warehouses.',
    approach: 'Built a real-time inventory engine synced across all sales channels.',
    metrics: [
      { value: '0', label: 'Overselling incidents' },
      { value: '5x', label: 'SKUs managed' },
      { value: '40%', label: 'Ops cost cut' },
    ],
  },
]

export default function CaseStudyShowcase() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = CASE_STUDIES[activeIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i === CASE_STUDIES.length - 1 ? 0 : i + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-section-bg)]">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 opacity-60
          [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--color-border)_60%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-border)_60%,transparent)_1px,transparent_1px)]
          [background-size:42px_42px]"
      />
      <div className="pointer-events-none absolute right-[-160px] top-[10%] -z-10 h-[380px] w-[380px] rounded-full bg-[var(--color-primary-blue)]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-160px] left-[-140px] -z-10 h-[380px] w-[380px] rounded-full bg-[var(--color-teal-accent)]/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        {/* Header */}
        <div className="mb-10 max-w-2xl lg:mb-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-blue)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-teal-accent)]" />
            Real Results
          </div>
          <h2 className="font-display text-3xl font-light leading-[1.1] tracking-[-0.03em] text-[var(--color-headings)] sm:text-4xl lg:text-5xl">
            Not just happy clients
            <span className="text-gradient block font-medium">— proven outcomes.</span>
          </h2>
          <p className="font-satoshi mt-5 max-w-xl text-base leading-7 text-[var(--color-body)]">
            Every project comes with a story: a real challenge, a clear approach, and numbers that back it up.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[280px_1fr] lg:gap-6">

          {/* LEFT — Case study selector list */}
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0 scrollbar-none">
            {CASE_STUDIES.map((study, index) => {
              const isActive = activeIndex === index
              return (
                <button
                  key={study.client}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`group relative shrink-0 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 w-[200px] lg:w-full ${
                    isActive
                      ? 'border-[var(--color-primary-blue)]/40 bg-[var(--color-primary-blue)]/5'
                      : 'border-[var(--color-border)] bg-[var(--color-card-bg)] hover:border-[var(--color-primary-blue)]/25'
                  }`}
                >
                  {isActive && (
                    <span
                      key={`fill-${activeIndex}`}
                      className="bg-gradient-primary absolute inset-x-0 top-0 h-[3px] origin-left animate-[progress_6s_linear] lg:bottom-0 lg:left-0 lg:top-0 lg:h-full lg:w-[3px]"
                    />
                  )}
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm transition-colors duration-300 ${
                        isActive
                          ? 'bg-gradient-primary text-white'
                          : 'bg-[var(--color-primary-blue)]/8 text-[var(--color-primary-blue)]'
                      }`}
                    >
                      <i className={`fa-solid ${study.icon}`} />
                    </div>
                    <div className="min-w-0">
                      <p
                        className={`font-satoshi truncate text-sm font-semibold ${
                          isActive ? 'text-[var(--color-primary-blue)]' : 'text-[var(--color-headings)]'
                        }`}
                      >
                        {study.client}
                      </p>
                      <p className="font-satoshi text-xs text-[var(--color-muted)]">{study.industry}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* RIGHT — Active case study detail panel */}
          <div
            key={activeIndex}
            className="relative animate-[fadeIn_0.5s_ease] rounded-3xl border border-[var(--color-border)] bg-[var(--color-card-bg)] p-6 shadow-sm lg:p-8"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-satoshi text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
                  {active.industry}
                </p>
                <h3 className="font-display mt-1 text-2xl font-medium text-[var(--color-headings)] sm:text-3xl">
                  {active.client}
                </h3>
              </div>
              <div className="bg-gradient-primary flex h-12 w-12 items-center justify-center rounded-2xl text-lg text-white">
                <i className={`fa-solid ${active.icon}`} />
              </div>
            </div>

            {/* Challenge -> Approach */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-section-bg)] p-4">
                <p className="font-satoshi mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  The Challenge
                </p>
                <p className="font-satoshi text-sm leading-6 text-[var(--color-body)]">{active.challenge}</p>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-section-bg)] p-4">
                <p className="font-satoshi mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-teal-accent)]">
                  Our Approach
                </p>
                <p className="font-satoshi text-sm leading-6 text-[var(--color-body)]">{active.approach}</p>
              </div>
            </div>

            {/* Metrics row */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[var(--color-border)] pt-6 sm:gap-4">
              {active.metrics.map((metric) => (
                <div key={metric.label} className="text-center sm:text-left">
                  <p className="font-display text-2xl font-semibold text-[var(--color-headings)] sm:text-3xl lg:text-4xl">
                    {metric.value}
                  </p>
                  <p className="font-satoshi mt-1 text-[11px] leading-tight text-[var(--color-muted)] sm:text-xs">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  )
}