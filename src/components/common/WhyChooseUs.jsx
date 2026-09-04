const FEATURES = [
  {
    id: '01',
    icon: 'fa-layer-group',
    title: 'Modern Tech Stack',
    desc: 'We engineer with modern frameworks (React, Next.js, Node.js, Python) and cloud-native architectures built for high speed and durability.',
    tag: 'Next-Gen Scalability',
  },
  {
    id: '02',
    icon: 'fa-users-gear',
    title: 'Elite Engineering Team',
    desc: 'Senior developers and architects committed to clean code standards, thorough code reviews, and high-conversion UX design.',
    tag: 'Senior Dedicated Talent',
  },
  {
    id: '03',
    icon: 'fa-handshake',
    title: 'Transparent Collaboration',
    desc: 'Direct communication via Slack & WhatsApp, bi-weekly sprint demos, live milestones, and zero hidden billing surprises.',
    tag: '100% Milestone Clarity',
  },
  {
    id: '04',
    icon: 'fa-arrow-trend-up',
    title: 'Scalable Architecture',
    desc: 'Engineered from day one to handle rapid user growth, sub-second API responses, and seamless database clustering.',
    tag: 'High Velocity & Uptime',
  },
  {
    id: '05',
    icon: 'fa-rocket',
    title: 'High-Velocity Sprints',
    desc: 'Rapid agile cycles that move your concept from prototype to production-ready solution in weeks, not quarters.',
    tag: '48h Sprint Kickoff',
  },
  {
    id: '06',
    icon: 'fa-shield-halved',
    title: 'Enterprise Security & SLA',
    desc: 'Bank-grade encryption, strict NDA protection, 100% IP & code ownership, and proactive 24/7 post-launch maintenance.',
    tag: '24/7 Long-Term SLA',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-3 sm:py-3 lg:py-5 relative overflow-hidden bg-slate-50/60 dark:bg-[#0A1220] border-y border-slate-200/60 dark:border-[#1D2A3D] transition-colors duration-300"
    >
      {/* Ambient background decorative glow orbs */}
      <div
        className="absolute top-1/4 -left-36 w-110 h-110 bg-blue-500/5 dark:bg-blue-600/10  blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-36 w-110 h-110 bg-teal-400/5 dark:bg-teal-500/10  blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-blue-500/10 text-blue-600 dark:bg-blue-500/15 dark:text-[#42C7B5] border border-blue-500/20 dark:border-[#42C7B5]/30 mb-4 shadow-xs backdrop-blur-md">
            <i className="fa-solid fa-shield-halved text-xs text-blue-600 dark:text-[#42C7B5]" />
            <span>Why Prism Infotech • Our Core Edge</span>
          </div>

          <h2 className="font-general font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-[#F8FAFC] tracking-[-0.025em] leading-[1.18]">
            Engineered for Precision,{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 dark:from-[#3B82F6] dark:via-[#60A5FA] dark:to-[#42C7B5] bg-clip-text text-transparent block sm:inline">
              Built to Scale.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-slate-600 dark:text-[#B8C2D1] leading-relaxed">
            We bridge the gap between ambitious business ideas and flawless technical execution. Here is why industry leaders trust us with their critical digital products.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 sm:p-7 lg:p-8 bg-white dark:bg-[#101A2B] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle hover gradient wash inside card */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] via-transparent to-teal-500/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              {/* Top-Left 90° Corner Border Bracket (Hover only - sharp right angle) */}
              <span
                className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-b-0 border-r-0 border-transparent group-hover:border-blue-500 dark:group-hover:border-[#3B82F6] transition-colors duration-300 pointer-events-none z-20"
                aria-hidden="true"
              />

              {/* Bottom-Right 90° Corner Border Bracket (Hover only - sharp right angle) */}
              <span
                className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-t-0 border-l-0 border-transparent group-hover:border-teal-400 dark:group-hover:border-[#42C7B5] transition-colors duration-300 pointer-events-none z-20"
                aria-hidden="true"
              />

              {/* Card Header: Icon & Index Number */}
              <div className="relative z-10 flex items-center justify-between mb-5">
                <div className="w-13 h-13 bg-slate-50 dark:bg-[#0A1220] border border-slate-200/80 dark:border-[#1D2A3D] flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-xs">
                  <i
                    className={`fa-solid ${feature.icon} text-2xl bg-gradient-to-r from-[#1457E8] via-[#1268DF] to-[#19B3AC] bg-clip-text text-transparent inline-block`}
                  />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-slate-200 dark:text-[#1D2A3D] group-hover:text-blue-500/30 dark:group-hover:text-[#3B82F6]/30 transition-colors font-['Space_Grotesk'] tracking-tight select-none">
                  {feature.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-lg sm:text-xl font-medium font-general tracking-[-0.025em] text-slate-900 dark:text-[#F8FAFC] group-hover:text-blue-600 dark:group-hover:text-[#3B82F6] transition-colors mb-2.5">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm sm:text-[15px] text-slate-600 dark:text-[#B8C2D1] leading-relaxed mb-5">
                {feature.desc}
              </p>

              {/* Feature Tag / Quality Chip */}
              <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-[#1D2A3D]/70 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-[#77859A]">
                <span className="inline-flex items-center gap-1.5 text-slate-700 dark:text-[#B8C2D1]">
                  <i className="fa-solid fa-circle-check text-[11px] text-teal-500 dark:text-[#42C7B5]" />
                  {feature.tag}
                </span>
                <i className="fa-solid fa-arrow-right-long text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-600 dark:text-[#3B82F6]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
