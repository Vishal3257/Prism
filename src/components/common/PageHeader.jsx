import { Link } from 'react-router-dom'

export default function PageHeader({ title, subtitle, badge, breadcrumb }) {
  return (
    <section className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 overflow-hidden bg-gradient-to-b from-[#F7F9FC] to-[#FFFFFF] dark:from-slate-950 dark:to-slate-900 border-b border-[#E4E9F0] dark:border-slate-800 transition-colors duration-300">
      {/* Glow Effects */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#2563EB]/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-5 right-1/4 w-80 h-80 bg-[#35B8A5]/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <nav className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#7C8799] dark:text-slate-400 mb-4" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-[#2563EB] dark:hover:text-blue-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#2563EB] dark:text-blue-400">{breadcrumb}</span>
        </nav>

        {/* Badge */}
        {badge && (
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-white text-[#2563EB] dark:bg-blue-950/60 dark:text-blue-300 border border-[#E4E9F0] dark:border-blue-800/60 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35B8A5]" />
              {badge}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="font-general font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0B1220] dark:text-white tracking-[-0.025em] leading-tight mb-5">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#475569] dark:text-slate-300 leading-relaxed font-satoshi font-light">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
