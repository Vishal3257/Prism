import PageHeader from '../components/common/PageHeader'
import CTA from '../components/common/CTA'
import { INDUSTRIES } from '../data/companyData'
import { Link } from 'react-router-dom'

export default function IndustriesPage() {
  return (
    <div>
      <PageHeader
        title="Industries We Transform"
        subtitle="We deliver industry-tailored technology architecture, enterprise compliance, and frictionless user experiences for high-growth sectors."
        badge="Domain Expertise"
        breadcrumb="Industries"
      />

      <section className="py-10 sm:py-14 lg:py-16 bg-[#F7F9FC] dark:bg-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] dark:text-blue-400 mb-3 block">
              Vertical Solutions
            </span>
            <h2 className="font-general font-light text-3xl sm:text-4xl text-[#0B1220] dark:text-white tracking-[-0.025em]">
              Engineered for Your Domain&apos;s Specific Challenges
            </h2>
            <p className="mt-4 text-[#475569] dark:text-slate-300 text-base sm:text-lg font-satoshi font-light">
              Every industry has unique workflows, regulatory standards, and consumer expectations. We build software tailored to your specific ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="group relative rounded-2xl p-6 sm:p-7 bg-white dark:bg-slate-900 border border-[#E4E9F0] dark:border-slate-800 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[#2563EB] dark:text-blue-400 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 shadow-xs">
                    <i className={`fa-solid ${ind.icon}`} />
                  </div>

                  <h3 className="font-general font-medium text-xl text-[#0B1220] dark:text-white mb-2.5 tracking-[-0.025em] group-hover:text-[#2563EB] dark:group-hover:text-blue-400 transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] dark:text-slate-400 leading-relaxed mb-5">
                    {ind.desc}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#7C8799] dark:text-slate-500 block">
                      Core Solutions
                    </span>
                    {ind.solutions.map((sol, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#0B1220] dark:text-slate-300">
                        <i className="fa-solid fa-check text-[#35B8A5] mt-0.5 text-[10px]" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E4E9F0] dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-[#35B8A5]">
                    {ind.stats}
                  </span>
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-[#2563EB] dark:text-blue-400 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1"
                  >
                    Consult →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}
