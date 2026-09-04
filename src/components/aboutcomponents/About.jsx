export default function About() {
  const highlights = [
    'Client-focused solutions',
    'Modern technologies',
    'Scalable architecture',
    'Performance-focused',
  ]

  return (
    <section id="about" className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story */}
          <div>
            <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
              About Prism Infotech
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 mb-6 tracking-tight leading-tight">
              Building Digital Experiences <br />
              <span className="text-gradient">That Drive Growth</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              We combine technology, creativity, marketing, strategy, and business understanding to deliver solutions that make an impact. Whether you are scaling an existing enterprise or launching an ambitious new product, our team delivers high-velocity, future-ready results.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 font-semibold text-slate-700 dark:text-slate-200">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <i className="fa-solid fa-check text-xs" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="relative">
            <div className="p-2 rounded-3xl bg-gradient-primary shadow-2xl shadow-blue-500/20">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
                alt="Digital development workspace"
                className="rounded-2xl w-full h-80 sm:h-96 lg:h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
