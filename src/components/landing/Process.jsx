import { useState } from 'react'

export default function Process() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)

  const steps = [
    {
      step: '01',
      title: 'Discover',
      desc: 'Deep-dive into your requirements, brand vision, target market, and technical constraints.',
      timeframe: 'Days 1 - 5',
      deliverables: ['Requirements Specification Doc (SRS)', 'User Persona & Journey Maps', 'Technical Architecture Blueprint'],
      icon: 'fa-compass-drafting',
    },
    {
      step: '02',
      title: 'Strategy & UX',
      desc: 'Architecting a high-performance roadmap, tech stack selection, and interactive wireframes.',
      timeframe: 'Week 1 - 2',
      deliverables: ['Figma High-Fidelity Prototypes', 'Database Schema & API Contracts', 'Milestone & Sprint Schedule'],
      icon: 'fa-diagram-project',
    },
    {
      step: '03',
      title: 'Agile Build',
      desc: 'Rapid, agile engineering with clean code standards, continuous integration, and QA audits.',
      timeframe: 'Weeks 3 - 6',
      deliverables: ['Bi-weekly Staging Demos', 'Automated Unit & E2E Testing', 'Code Review & Security Audits'],
      icon: 'fa-code',
    },
    {
      step: '04',
      title: 'Deploy & Grow',
      desc: 'Seamless deployment, SEO optimization, analytics integration, and long-term scaling support.',
      timeframe: 'Week 7+',
      deliverables: ['Production CI/CD Pipeline', 'Core Web Vitals 95+ Tuning', 'Post-launch 30-day Hypercare'],
      icon: 'fa-rocket',
    },
  ]

  const activeStep = steps[activeStepIndex]

  return (
    <section className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Execution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Our <span className="text-gradient">Work Process</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A structured, repeatable methodology from initial discovery to high-impact production launch. Click any phase to inspect deliverables.
          </p>
        </div>

        {/* 4 Interactive Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="tablist" aria-label="Process stages">
          {steps.map((item, index) => {
            const isCurrent = activeStepIndex === index
            return (
              <button
                key={item.step}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                onClick={() => setActiveStepIndex(index)}
                className={`relative p-7 rounded-2xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isCurrent
                    ? 'bg-white dark:bg-slate-800 border-2 border-blue-500 shadow-xl shadow-blue-500/10 -translate-y-1 scale-[1.02]'
                    : 'bg-white/70 dark:bg-slate-850/60 backdrop-blur-sm border border-slate-200/70 dark:border-slate-800 hover:border-blue-400/60 hover:-translate-y-0.5'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-3xl sm:text-4xl font-black tracking-tighter transition-colors ${
                        isCurrent ? 'text-blue-600 dark:text-blue-400' : 'text-slate-300 dark:text-slate-700'
                      }`}
                    >
                      {item.step}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                      {item.timeframe}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                  <span>{isCurrent ? 'Active Phase' : 'Click to inspect'}</span>
                  <i className={`fa-solid ${isCurrent ? 'fa-circle-dot' : 'fa-chevron-right'} text-[10px]`} />
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-blue-500/30 -translate-y-1/2 pointer-events-none z-10" />
                )}
              </button>
            )
          })}
        </div>

        {/* Phase Deliverables Spotlight */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-slate-850/70 border border-slate-200/80 dark:border-slate-800 shadow-md backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <i className={`fa-solid ${activeStep.icon} text-blue-500 text-lg`} />
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Phase {activeStep.step} Quality Gates & Deliverables ({activeStep.title})
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-xl">
              Each sprint phase is bound to strict acceptance criteria, verifiable deliverables, and continuous client communication.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
            {activeStep.deliverables.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/70 border border-blue-200/60 dark:border-blue-800/60 text-xs font-semibold text-blue-700 dark:text-blue-300"
              >
                <i className="fa-solid fa-check text-teal-500 text-[11px]" />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

