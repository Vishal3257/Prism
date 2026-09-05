import OrbitCircle from './OrbitCircle'

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      data-cursor="hero"
      className="relative pt-2 pb-12 sm:pt-4 sm:pb-14 lg:pt-4 lg:pb-4 overflow-hidden bg-[#F7F9FC] dark:bg-slate-950 transition-colors duration-400"
    >
      {/* Ambient background glows using Primary Brand (#2563EB) & Teal Accent (#35B8A5) */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#2563EB]/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#35B8A5]/12 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center justify-items-center">
          {/* Left Column: Copy */}
          <div className="text-center lg:text-left w-full max-w-xl mx-auto">
            {/* Pill Badge: White background, Border #E4E9F0, Primary Brand #2563EB, Teal Accent dot, Muted bullets #7C8799 */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-[#FFFFFF] text-[#2563EB] dark:bg-blue-950/60 dark:text-blue-300 border border-[#E4E9F0] dark:border-blue-800/60 mb-6 shadow-xs">
            
              <span>
                Digital Solutions <span className="text-[#7C8799] dark:text-slate-500">•</span> Marketing{' '}
                <span className="text-[#7C8799] dark:text-slate-500">•</span> Technology
              </span>
            </span>

            {/* Headings: General Sans Light with -0.025em tracking */}
            <h1 className="font-general font-light text-4xl sm:text-5xl lg:text-6xl text-[#0B1220] dark:text-white tracking-[-0.025em] leading-[1.12]">
              Transform Your Ideas <br />
              <span className="bg-gradient-to-r from-[#2563EB] to-[#35B8A5] bg-clip-text text-transparent">
                Into Digital Experiences
              </span>
            </h1>

            {/* Body: Satoshi Light */}
            <p className="mt-5 text-base sm:text-lg text-[#475569] dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-satoshi font-light">
              Web development <span className="text-[#7C8799] dark:text-slate-600">•</span> Mobile apps{' '}
              <span className="text-[#7C8799] dark:text-slate-600">•</span> Digital marketing{' '}
              <span className="text-[#7C8799] dark:text-slate-600">•</span> SEO{' '}
              <span className="text-[#7C8799] dark:text-slate-600">•</span> UI/UX{' '}
              <span className="text-[#7C8799] dark:text-slate-600">•</span> Software{' '}
              <span className="text-[#7C8799] dark:text-slate-600">•</span> E-commerce{' '}
              <span className="text-[#7C8799] dark:text-slate-600">•</span> Branding
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              {/* Primary Button: Gradient from #2563EB to #35B8A5 with White #FFFFFF text */}
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#2563EB] to-[#35B8A5] text-[#FFFFFF] font-bold px-7 py-3.5 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                Start Your Project
              </button>

              {/* Secondary Button: White Sections (#FFFFFF) surface, Border (#E4E9F0), Primary Brand (#2563EB) text */}
              <button
                type="button"
                onClick={() => scrollToSection('services')}
                className="bg-[#FFFFFF] text-[#2563EB] border border-[#E4E9F0] dark:bg-slate-800/80 dark:text-blue-400 dark:border-blue-700/60 font-bold px-7 py-3.5 rounded-full shadow-xs hover:bg-[#F7F9FC] dark:hover:bg-slate-700/50 hover:-translate-y-0.5 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                Explore Services
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Orbit */}
          <div className="flex justify-center items-center w-full max-w-xl mx-auto">
            <OrbitCircle />
          </div>
        </div>
      </div>
    </section>
  )
}

