export default function WhyChooseUs() {
  const features = [
    { icon: 'fa-microchip', title: 'Modern Technology', desc: 'We leverage latest tools, cutting-edge frameworks, and AI workflows.' },
    { icon: 'fa-users', title: 'Experienced Team', desc: 'Industry veterans committed to engineering excellence and crisp design.' },
    { icon: 'fa-comments', title: 'Transparent Communication', desc: 'Real-time updates, clear milestones, and complete transparency.' },
    { icon: 'fa-expand', title: 'Scalable Solutions', desc: 'Built from day one to handle high traffic and rapid business expansion.' },
    { icon: 'fa-clock', title: 'Fast Delivery', desc: 'Agile sprints designed to launch your solutions ahead of deadlines.' },
    { icon: 'fa-headset', title: 'Long-Term Support', desc: 'Reliable post-launch maintenance, security patches, and continuous improvements.' },
  ]

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-gradient-subtle border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Our Edge
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Why <span className="text-gradient">Choose Us?</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A trusted technology partner focused on measurable outcomes, technical precision, and enduring client success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-slate-850/60 backdrop-blur-sm border border-slate-200/70 dark:border-slate-800 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-5">
                <i className={`fa-solid ${feature.icon}`} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
