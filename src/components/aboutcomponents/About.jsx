export default function About() {
  const highlights = [
    'Client-focused digital architectures',
    'Modern high-velocity tech stack',
    'Scalable cloud-native engineering',
    'Data-driven performance optimization'
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F9FC] py-12 transition-colors duration-300 dark:bg-[#060B14] sm:py-16 lg:py-20"
    >
      {/* Ambient lighting glows */}
      <div className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-blue-500/8 blur-3xl dark:bg-blue-600/12" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-[#35B8A5]/8 blur-3xl dark:bg-teal-500/12" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Visual with Glassmorphism Metric Badge */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-2.5 shadow-2xl shadow-blue-500/5 transition-all duration-300 dark:border-[#1D2A3D] dark:bg-[#101A2B]">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
                alt="Digital development workspace"
                className="h-80 w-full rounded-2xl object-cover sm:h-96 lg:h-[430px]"
                loading="lazy"
              />

              {/* Floating Glassmorphism Metric Badge */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/40 bg-white/85 p-4 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#060B14]/85 sm:left-6 sm:right-auto sm:max-w-xs">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#35B8A5] text-white shadow-md">
                    <i className="fa-solid fa-award text-lg" />
                  </div>
                  <div>
                    <div className="font-general font-light text-xl text-slate-900 dark:text-white tracking-[-0.025em]">
                      99.8%
                    </div>
                    <div className="font-satoshi font-light text-xs text-slate-600 dark:text-[#B8C2D1]">
                      Client Satisfaction & Delivery
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Highlights (Swiss Minimalist / Apple Style) */}
          <div>
            {/* Eyebrow Tag */}
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/70 px-3.5 py-1 text-xs uppercase tracking-[0.2em] text-[#2563EB] dark:border-blue-900/60 dark:bg-blue-950/40 dark:text-[#3B82F6]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB] animate-pulse dark:bg-[#3B82F6]" />
              <span className="font-satoshi font-semibold">ABOUT PRISM INFOTECH</span>
            </div>

            {/* Main Headline: General Sans Light with -0.025em tracking */}
            <h2 className="font-general font-light text-3xl leading-[1.14] tracking-[-0.025em] text-[#0B1220] dark:text-[#F8FAFC] sm:text-4xl lg:text-[45px] xl:text-[52px]">
              Building Digital Experiences <br />
              <span className="bg-gradient-to-r from-[#2563EB] via-blue-500 to-[#35B8A5] bg-clip-text text-transparent dark:from-[#3B82F6] dark:via-blue-400 dark:to-[#42C7B5]">
                That Drive Real Growth.
              </span>
            </h2>

            {/* Accent divider */}
            <div className="my-5 h-0.5 w-12 rounded-full bg-gradient-to-r from-[#2563EB] to-[#35B8A5] dark:from-[#3B82F6] dark:to-[#42C7B5]" />

            {/* Description Paragraph with Satoshi Light */}
            <p className="font-satoshi font-light text-base leading-relaxed text-[#475569] dark:text-[#B8C2D1] sm:text-lg">
              We combine advanced engineering, creative design, digital marketing, and strategic clarity to create products that generate enterprise value. Whether you are scaling an existing brand or launching an ambitious new product, our team delivers high-velocity, future-ready results.
            </p>

            {/* Feature Highlights Grid */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/70 p-3 shadow-xs transition-all duration-200 hover:border-blue-300 hover:bg-white hover:shadow-sm dark:border-[#1D2A3D] dark:bg-[#101A2B]/60 dark:hover:border-blue-800 dark:hover:bg-[#101A2B]"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-100/80 text-blue-600 transition-colors group-hover:bg-[#2563EB] group-hover:text-white dark:bg-blue-950/80 dark:text-blue-400 dark:group-hover:bg-[#3B82F6] dark:group-hover:text-[#060B14]">
                    <i className="fa-solid fa-check text-[11px] font-bold" />
                  </div>
                  <span className="font-satoshi font-medium text-sm text-slate-800 dark:text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
