import { useEffect, useRef, useState } from 'react'

const STATS = [
  { label: 'Projects Delivered', value: 50, suffix: '+' },
  { label: 'Happy Clients', value: 30, suffix: '+' },
  { label: 'Digital Services', value: 10, suffix: '+' },
  { label: 'Years Experience', value: 3, suffix: '+' },
]

export default function Stats() {
  const [counts, setCounts] = useState(STATS.map(() => 0))
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return

        STATS.forEach((stat, index) => {
          let start = 0
          const end = stat.value
          const duration = 1500
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              start = end
              clearInterval(timer)
            }
            setCounts((previous) => {
              const next = [...previous]
              next[index] = Math.floor(start)
              return next
            })
          }, 16)
        })

        observer.disconnect()
      },
      { threshold: 0.4 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-6 sm:py-8 bg-gradient-subtle border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-center">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className="p-4 sm:p-6 rounded-2xl bg-white/70 dark:bg-slate-850/60 backdrop-blur-sm border border-slate-200/70 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gradient mb-1">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
