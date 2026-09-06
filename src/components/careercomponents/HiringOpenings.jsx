import { COMPANY } from '../../data/companyData'

const OPENINGS = [
  {
    id: '01',
    title: 'UI/UX Designer',
    type: 'Full-time',
    seats: '01 Seat',
    experience: '1–2 Years',
    icon: 'fa-pen-ruler',
    department: 'Product Design',
  },
  {
    id: '02',
    title: 'Digital Marketing Executive',
    type: 'Full-time',
    seats: '01 Seat',
    experience: '1–3 Years',
    icon: 'fa-bullhorn',
    department: 'Digital Marketing',
  },
  {
    id: '03',
    title: 'AI Integration Developer',
    type: 'Internship',
    seats: '01 Seat',
    experience: 'Fresher',
    icon: 'fa-brain',
    department: 'AI & GenAI',
  },
]

export default function HiringOpenings() {
  const cleanPhone = COMPANY.whatsappNumber
    ? COMPANY.whatsappNumber.replace(/[^0-9]/g, '')
    : '918239239249'

  // Open WhatsApp with a pre-filled message for specific job role
  const handleApplyRoleWhatsApp = (opening) => {
    const message = [
      `Hello Prism Infotech Team,`,
      ``,
      `I would like to apply for the *${opening.title}* position.`,
      ``,
      `📋 *Application Details:*`,
      `• Role: ${opening.title}`,
      `• Department: ${opening.department}`,
      `• Experience: ${opening.experience}`,
      `• Employment Type: ${opening.type}`,
      ``,
      `I would like to share my resume and discuss this opportunity. Please let me know the next steps.`,
      ``,
      `Thank you!`,
    ].join('\n')

    window.open(
      `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

 

  return (
    <section className="relative isolate overflow-hidden bg-white dark:bg-[#060B14] py-10 sm:py-14 lg:py-18 transition-colors duration-300">
      {/* Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-20
          [background-image:linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)]
          [background-size:36px_36px]"
      />

      {/* Brand Ambient Glows */}
      <div className="pointer-events-none absolute -left-28 top-1/3 -z-10 h-80 w-80 rounded-full bg-[#2563EB]/8 dark:bg-blue-600/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-10 -z-10 h-80 w-80 rounded-full bg-[#35B8A5]/8 dark:bg-teal-500/12 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl sm:mb-12">
          {/* Eyebrow Tag */}
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="font-satoshi inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#2563EB] shadow-xs dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              We&apos;re Hiring
            </span>
          </div>

          {/* Title (General Sans) */}
          <h2 className="font-general font-light text-3xl sm:text-4xl lg:text-5xl leading-[1.12] tracking-[-0.025em] text-[#0B1220] dark:text-[#F8FAFC]">
            Find your place{' '}
            <span className="text-gradient font-light block sm:inline">
              with our team.
            </span>
          </h2>

          {/* Description (Satoshi) */}
          <p className="font-satoshi font-light mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-[#475569] dark:text-[#B8C2D1]">
            Explore our current open positions. Ready to apply? Click on any role to connect directly with our recruitment team on WhatsApp.
          </p>
        </div>

        {/* Openings Table / List */}
        <div className="border-t border-slate-200/80 dark:border-slate-800/80">
          {OPENINGS.map((opening) => (
            <div
              key={opening.id}
              className="group relative border-b border-slate-200/80 dark:border-slate-800/80 py-5 transition-all duration-300 hover:bg-slate-50/70 dark:hover:bg-white/[0.02] lg:px-4"
            >
              <div className="grid items-center gap-4 sm:gap-5 lg:grid-cols-[40px_1.4fr_130px_120px_120px_auto] lg:gap-5">
                {/* Index (Space Grotesk) */}
                <div className="hidden font-number font-space text-sm font-semibold text-slate-400 dark:text-slate-600 lg:block">
                  {opening.id}
                </div>

                {/* Role Title & Icon */}
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-slate-100/70 text-[#2563EB] transition-all duration-300 group-hover:border-[#2563EB]/40 group-hover:bg-[#2563EB]/10 dark:border-slate-800 dark:bg-[#101A2B] dark:text-[#35B8A5] dark:group-hover:border-blue-500/40 dark:group-hover:bg-blue-600/15">
                    <i className={`fa-solid ${opening.icon} text-sm`} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-number font-space text-[10px] font-semibold tracking-wider text-slate-400 dark:text-slate-500 lg:hidden">
                        #{opening.id}
                      </span>
                      <span className="font-satoshi text-[11px] font-medium text-slate-400 dark:text-slate-500">
                        {opening.department}
                      </span>
                    </div>

                    <h3 className="font-general font-medium text-lg sm:text-xl text-[#0B1220] transition-colors duration-300 group-hover:text-[#2563EB] dark:text-[#F8FAFC] dark:group-hover:text-[#35B8A5]">
                      {opening.title}
                    </h3>
                  </div>
                </div>

                {/* Job Type Badge */}
                <div className="flex items-center lg:block">
                  <span className="font-satoshi inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-[#475569] shadow-2xs dark:border-slate-800 dark:bg-[#101A2B] dark:text-[#B8C2D1]">
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {opening.type}
                  </span>
                </div>

                {/* Available Seats */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#475569] dark:text-[#B8C2D1]">
                  <i className="fa-solid fa-user-group text-xs text-[#35B8A5]" />
                  <span className="font-satoshi">Open:</span>
                  <span className="font-number font-space font-semibold text-[#0B1220] dark:text-[#F8FAFC]">
                    {opening.seats}
                  </span>
                </div>

                {/* Experience Required */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#475569] dark:text-[#B8C2D1]">
                  <i className="fa-solid fa-briefcase text-xs text-[#2563EB] dark:text-blue-400" />
                  <span className="font-satoshi">Exp:</span>
                  <span className="font-number font-space font-semibold text-[#0B1220] dark:text-[#F8FAFC]">
                    {opening.experience}
                  </span>
                </div>

                {/* Quick Apply Button -> WhatsApp */}
                <div className="flex items-center justify-start lg:justify-end">
                  <button
                    type="button"
                    onClick={() => handleApplyRoleWhatsApp(opening)}
                    className="font-satoshi group/btn inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-50/80 px-4 py-2 text-xs font-semibold text-emerald-700 shadow-2xs transition-all duration-300 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white dark:border-emerald-500/30 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-600 dark:hover:text-white cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-sm text-emerald-600 group-hover/btn:text-white dark:text-emerald-400 dark:group-hover/btn:text-white transition-colors" />
                    <span>Apply on WhatsApp</span>
                    <i className="fa-solid fa-arrow-right text-[10px] transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>

              {/* Subtle Bottom Hover Accent Line */}
              <div className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[#2563EB] to-[#35B8A5] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Bottom Card for General Inquiries */}
        <div className="mt-10 rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 sm:p-8 dark:border-slate-800/80 dark:bg-[#0A1220]/60 backdrop-blur-xs flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div>
            <h4 className="font-general font-medium text-base sm:text-lg text-[#0B1220] dark:text-[#F8FAFC]">
              Don&apos;t see the right role for your skills?
            </h4>
            <p className="font-satoshi font-light mt-1 text-xs sm:text-sm text-[#475569] dark:text-[#77859A]">
              We&apos;re always looking for talented developers, designers &amp; problem-solvers. Reach out on WhatsApp or email your CV to{' '}
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-[#2563EB] dark:text-blue-400 font-medium hover:underline"
              >
                {COMPANY.email}
              </a>
              .
            </p>
          </div>
 
        </div>
      </div>
    </section>
  )
}