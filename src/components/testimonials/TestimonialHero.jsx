import { useEffect, useState } from 'react'

const SPOTLIGHT_TESTIMONIALS = [
  {
    quote:
      "Prism Infotech didn't just build our platform — they understood our business model better than we did. The launch happened two weeks early.",
    name: 'Ananya Sharma',
    role: 'Founder & CEO',
    company: 'Nimbus Retail',
    rating: 5,
  },
  {
    quote:
      'From the first call to go-live, communication was crystal clear. Our app now handles 10x the traffic without breaking a sweat.',
    name: 'Rohan Malhotra',
    role: 'VP Engineering',
    company: 'FinEdge',
    rating: 5,
  },
  {
    quote:
      "The team felt like an extension of ours, not an agency. They caught issues we hadn't even thought to ask about.",
    name: 'Priya Nair',
    role: 'Product Head',
    company: 'Lumen Health',
    rating: 5,
  },
]

const WALL_COLUMN_A = [
  { name: 'Karan Verma', role: 'Nexa Labs', quote: 'Shipped our MVP in 6 weeks flat.', rating: 5 },
  { name: 'Sneha Iyer', role: 'Orbit Studio', quote: 'Best dev partner we\'ve worked with.', rating: 5 },
  { name: 'Aditya Rao', role: 'PixelForge', quote: 'Clean code, zero surprises.', rating: 5 },
  { name: 'Meera Joshi', role: 'CloudNine', quote: 'They actually listen to feedback.', rating: 4 },
]

const WALL_COLUMN_B = [
  { name: 'Vikram Shah', role: 'Trade Vista', quote: 'ROI showed up within a month.', rating: 5 },
  { name: 'Divya Menon', role: 'Healthify', quote: 'Support after launch is excellent.', rating: 5 },
  { name: 'Arjun Kapoor', role: 'Bharat Mart', quote: 'On time, on budget, every sprint.', rating: 5 },
  { name: 'Ishita Roy', role: 'Vertex AI', quote: 'Genuinely impressed by their QA.', rating: 5 },
]

function StarRow({ count }) {
  return (
    <div className="flex gap-0.5 text-[var(--color-teal-accent)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <i key={i} className={`fa-solid fa-star text-[10px] ${i < count ? '' : 'opacity-20'}`} />
      ))}
    </div>
  )
}

export default function TestimonialHero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = SPOTLIGHT_TESTIMONIALS[activeIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((i) => (i === SPOTLIGHT_TESTIMONIALS.length - 1 ? 0 : i + 1))
    }, 5000)
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
      <div className="pointer-events-none absolute left-[-160px] top-[10%] -z-10 h-[380px] w-[380px] rounded-full bg-[var(--color-primary-blue)]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-160px] right-[-140px] -z-10 h-[380px] w-[380px] rounded-full bg-[var(--color-teal-accent)]/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

          {/* LEFT — Spotlight quote */}
          <div className="relative flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-card-bg)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-blue)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-teal-accent)]" />
              Loved by teams everywhere
            </div>

            {/* Oversized quotation mark */}
            <span className="font-display select-none text-7xl leading-none text-[var(--color-primary-blue)]/15 lg:text-8xl">
              &ldquo;
            </span>

            {/* Rotating spotlight quote */}
            <div key={activeIndex} className="-mt-8 animate-[fadeIn_0.6s_ease] lg:-mt-10">
              <p className="font-display max-w-xl text-2xl font-light leading-snug tracking-[-0.015em] text-[var(--color-headings)] sm:text-3xl lg:text-4xl">
                {active.quote}
              </p>

              <div className="mt-7 flex items-center gap-4">
                <div className="bg-gradient-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-base font-semibold text-white">
                  {active.name.split(' ').map((w) => w[0]).join('')}
                </div>
                <div>
                  <p className="font-satoshi text-sm font-semibold text-[var(--color-headings)]">
                    {active.name}
                  </p>
                  <p className="font-satoshi text-xs text-[var(--color-muted)]">
                    {active.role} · {active.company}
                  </p>
                </div>
                <div className="ml-auto hidden sm:block">
                  <StarRow count={active.rating} />
                </div>
              </div>
            </div>

            {/* Dot nav */}
            <div className="mt-8 flex items-center gap-1.5">
              {SPOTLIGHT_TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  type="button"
                  aria-label={`Show testimonial from ${t.name}`}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i
                      ? 'w-6 bg-[var(--color-primary-blue)]'
                      : 'w-1.5 bg-[var(--color-border)] hover:bg-[var(--color-muted)]'
                  }`}
                />
              ))}
            </div>

            {/* Aggregate stat */}
            <div className="mt-9 flex items-center gap-5 border-t border-[var(--color-border)] pt-6">
              <div>
                <p className="font-display text-3xl font-semibold text-[var(--color-headings)]">4.9/5</p>
                <p className="font-satoshi mt-1 text-xs text-[var(--color-muted)]">from 200+ reviews</p>
              </div>
              <div className="h-8 w-px bg-[var(--color-border)]" />
              <div>
                <p className="font-display text-3xl font-semibold text-[var(--color-headings)]">98%</p>
                <p className="font-satoshi mt-1 text-xs text-[var(--color-muted)]">would recommend us</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Vertical marquee wall of love */}
          <div className="relative grid h-[520px] grid-cols-2 gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
            {/* Column A — scrolls up */}
            <div className="group overflow-hidden">
              <div className="flex flex-col gap-4 animate-[marqueeUp_22s_linear_infinite] group-hover:[animation-play-state:paused]">
                {[...WALL_COLUMN_A, ...WALL_COLUMN_A].map((t, i) => (
                  <WallCard key={`${t.name}-${i}`} t={t} />
                ))}
              </div>
            </div>

            {/* Column B — scrolls down */}
            <div className="group overflow-hidden">
              <div className="flex -translate-y-1/2 flex-col gap-4 animate-[marqueeDown_26s_linear_infinite] group-hover:[animation-play-state:paused]">
                {[...WALL_COLUMN_B, ...WALL_COLUMN_B].map((t, i) => (
                  <WallCard key={`${t.name}-${i}`} t={t} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marqueeUp {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes marqueeDown {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

function WallCard({ t }) {
  return (
    <div className="shrink-0 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-bg)] p-4 shadow-sm shadow-slate-900/5">
      <StarRow count={t.rating} />
      <p className="font-satoshi mt-2.5 text-sm leading-6 text-[var(--color-body)]">
        {t.quote}
      </p>
      <p className="font-satoshi mt-3 text-xs font-semibold text-[var(--color-headings)]">
        {t.name}
        <span className="font-normal text-[var(--color-muted)]"> · {t.role}</span>
      </p>
    </div>
  )
}