import MarqueeLib from 'react-fast-marquee'
import { TECHNOLOGIES } from '../../data/companyData'

// Handle CJS/ESM interop in Vite
const Marquee = MarqueeLib?.default || MarqueeLib

export default function Technologies() {
  const solidIcons = new Set([
    'fa-arrow-right',
    'fa-database',
    'fa-leaf',
    'fa-fire',
    'fa-mobile-button',
    'fa-mobile-screen',
    'fa-chart-simple',
    'fa-magnifying-glass',
    'fa-code-branch',
    'fa-cloud',
  ])

  // Split TECHNOLOGIES into 3 balanced rows
  const row1 = TECHNOLOGIES.slice(0, 9)
  const row2 = TECHNOLOGIES.slice(9, 18)
  const row3 = TECHNOLOGIES.slice(18)

  const renderCard = (tech) => {
    const isSolid = solidIcons.has(tech.icon)
    return (
      <div
        key={tech.name}
        className="mx-2 sm:mx-2.5 flex items-center gap-3 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl bg-white dark:bg-[#101A2B] border border-slate-200 dark:border-[#1D2A3D] shadow-xs hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/40 dark:hover:border-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default select-none group"
      >
        <div
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center text-base sm:text-lg shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${tech.color}18`, color: tech.color }}
        >
          <i className={`${isSolid ? 'fa-solid' : 'fa-brands'} ${tech.icon}`} />
        </div>

        <div className="flex flex-col text-left">
          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-[#F8FAFC] whitespace-nowrap leading-tight">
            {tech.name}
          </span>
          <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 dark:text-[#77859A] whitespace-nowrap mt-0.5">
            {tech.category}
          </span>
        </div>
      </div>
    )
  }

  return (
    <section id="technologies" className="py-4 sm:py-6 overflow-hidden w-full">
      {/* 3-Row Professional Infinite Marquee */}
      <div className="relative w-full space-y-3 sm:space-y-4 marquee-mask select-none">
        {/* Row 1: Left moving */}
        <Marquee
          gradient={false}
          direction="left"
          speed={38}
          pauseOnHover={true}
          autoFill={true}
          className="py-1 overflow-y-hidden"
        >
          {row1.map(renderCard)}
        </Marquee>

        {/* Row 2: Right moving */}
        <Marquee
          gradient={false}
          direction="right"
          speed={32}
          pauseOnHover={true}
          autoFill={true}
          className="py-1 overflow-y-hidden"
        >
          {row2.map(renderCard)}
        </Marquee>

        {/* Row 3: Left moving */}
        <Marquee
          gradient={false}
          direction="left"
          speed={40}
          pauseOnHover={true}
          autoFill={true}
          className="py-1 overflow-y-hidden"
        >
          {row3.map(renderCard)}
        </Marquee>
      </div>
    </section>
  )
}
