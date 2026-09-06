const FEATURES = [
  {
    icon: 'fa-code',
    title: 'Custom Software',
    description: 'Bespoke architectures built for your unique business needs.',
    accent: 'from-[#2563EB] to-[#3B82F6]',
    tag: 'Engineered',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Secure & Scalable',
    description: 'Enterprise-grade stability and cloud performance that grows with you.',
    accent: 'from-[#3B82F6] to-[#35B8A5]',
    tag: 'Reliable',
  },
  {
    icon: 'fa-bolt-lightning',
    title: 'Future-Ready Tech',
    description: 'Cutting-edge modern stacks built to outperform tomorrow’s standards.',
    accent: 'from-[#35B8A5] to-[#42C7B5]',
    tag: 'Optimized',
  },
]

export default function AboutHero() {
  return (
    <section data-cursor="hero" className="relative isolate overflow-visible">
      {/* ================= FULL-BLEED BACKGROUND HERO ================= */}
      <div className="relative h-[560px] w-full overflow-hidden rounded-b-[28px] sm:h-[640px] sm:rounded-b-[36px] lg:h-[720px] lg:rounded-b-[44px]">
        {/* Studio Background Image */}
        <img
          src="/about/img1.png"
          alt="Inside the Prism Infotech engineering studio"
          className="absolute inset-0 h-full w-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out hover:scale-105"
        />

        {/* Dynamic Multi-stop Cinematic Overlay for Contrast & Legibility */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#060B14]/85 via-[#0A1220]/45 to-[#060B14]/90" />

        {/* Brand Aura Lighting: Blue & Teal subtle glow behind headline */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-[350px] w-[350px] rounded-full bg-[#2563EB]/25 blur-[120px] mix-blend-screen" />
        <div className="pointer-events-none absolute right-10 top-1/3 h-[300px] w-[300px] rounded-full bg-[#35B8A5]/20 blur-[120px] mix-blend-screen" />

        {/* Subtle dot matrix pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        {/* Hero Content Container */}
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-5 pb-10 sm:px-8 sm:pb-12 lg:px-12">
          {/* Eyebrow Pill Badge */}
          <div className="mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-100 backdrop-blur-md shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#35B8A5] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#35B8A5]" />
            </span>
            <span className="font-satoshi uppercase tracking-[0.15em] text-[11px] text-blue-200">
              About Prism Infotech
            </span>
          </div>

          {/* Oversized Type-First Headline */}
          <h1 className="font-general font-light text-[clamp(2.5rem,7.2vw,5.75rem)] leading-[0.96] tracking-[-0.03em] text-white">
            <span className="reveal-line block overflow-hidden">
              <span className="reveal-line-inner block">Built to turn ideas</span>
            </span>
            <span className="reveal-line block overflow-hidden" style={{ animationDelay: '100ms' }}>
              <span className="reveal-line-inner block" style={{ animationDelay: '100ms' }}>
                into <span className="bg-gradient-to-r from-[#60A5FA] via-[#38BDF8] to-[#42C7B5] bg-clip-text text-transparent font-normal">digital experiences</span>
              </span>
            </span>
          </h1>

          {/* Subtitle / Value Prop */}
          <p className="font-satoshi font-light mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-200/90">
            We are a tight-knit collective of software engineers, product designers, and AI specialists building high-velocity, scalable digital products that drive real commercial impact.
          </p>

          {/* Social Proof & Team Signature Strip */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 rounded-full border border-white/15 bg-slate-900/60 py-1.5 pl-2 pr-4 backdrop-blur-md">
              <div className="flex -space-x-2.5">
                <img
                  src="/about/img1.png"
                  alt="Prism Infotech Team member"
                  className="h-8 w-8 rounded-full border-2 border-white/80 object-cover shadow-sm"
                />
                <img
                  src="/about/img2.png"
                  alt="Prism Infotech Engineer"
                  className="h-8 w-8 rounded-full border-2 border-white/80 object-cover shadow-sm"
                />
                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/80 bg-gradient-to-br from-[#2563EB] to-[#35B8A5] text-[10px] font-bold text-white">
                  +18
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-satoshi text-xs font-semibold text-white">
                  Engineering &amp; Design Team
                </span>
                <span className="font-satoshi text-[10px] text-slate-300">
                  Kota · Global Delivery
                </span>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="hidden sm:inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 backdrop-blur-md">
               <span className="font-satoshi text-xs font-light text-emerald-300">
                Available for Q1–Q2 Projects
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= OVERLAPPING FLOATING FEATURE BRIDGE ================= */}
      {/* Elegantly pulled upward over the photo's bottom edge using negative margin */}
      <div className="relative z-20 mx-auto -mt-12 sm:-mt-16 w-[92%] sm:w-[88%] lg:w-[80%] max-w-5xl mb-8 sm:mb-12">
        <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white/95 p-6 shadow-xl shadow-slate-900/10 backdrop-blur-xl transition-all duration-300 dark:border-[#1D2A3D] dark:bg-[#0A1220]/95 dark:shadow-black/50 sm:p-8">
          {/* Top Spectrum Brand Line */}
          <div className="mb-6 flex h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div className="h-full w-1/3 bg-gradient-to-r from-[#2563EB] to-[#3B82F6]" />
            <div className="h-full w-1/3 bg-gradient-to-r from-[#3B82F6] to-[#35B8A5]" />
            <div className="h-full w-1/3 bg-gradient-to-r from-[#35B8A5] to-[#42C7B5]" />
          </div>

          {/* 3 Pillars Grid with Divider lines on tablet/desktop */}
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-6 sm:divide-x sm:divide-slate-200/80 dark:sm:divide-slate-800/80">
            {FEATURES.map((feature, idx) => (
              <div
                key={feature.title}
                className={`group/item flex flex-col justify-between transition-all duration-300 ${
                  idx !== 0 ? 'sm:pl-6' : ''
                }`}
              >
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] transition-colors duration-300 group-hover/item:bg-[#2563EB] group-hover/item:text-white dark:bg-[#101A2B] dark:text-[#3B82F6] dark:group-hover/item:bg-[#3B82F6] dark:group-hover/item:text-white">
                      <i className={`fa-solid ${feature.icon} text-sm`} />
                    </div>
                    <span className="font-number font-space rounded-full border border-slate-200/80 bg-slate-50 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider text-slate-500 dark:border-slate-800 dark:bg-[#101A2B] dark:text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-general font-medium text-base sm:text-lg tracking-[-0.025em] text-[#0B1220] dark:text-[#F8FAFC] transition-colors duration-300 group-hover/item:text-[#2563EB] dark:group-hover/item:text-[#3B82F6]">
                    {feature.title}
                  </h3>
                  <p className="font-satoshi font-light mt-1.5 text-xs sm:text-sm leading-relaxed text-[#475569] dark:text-[#B8C2D1]">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-[#2563EB] opacity-0 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:translate-x-1 dark:text-[#38BDF8]">
                  <span>Explore approach</span>
                  <i className="fa-solid fa-arrow-right text-[9px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smooth Reveal Keyframe Animation */}
      <style>{`
        .reveal-line-inner {
          transform: translateY(105%);
          animation: reveal-up 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes reveal-up {
          to { transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal-line-inner {
            animation: none;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}