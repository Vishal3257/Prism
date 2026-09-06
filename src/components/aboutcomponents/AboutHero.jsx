
const FEATURES = [
    {
        title: 'Custom Software',
        description: 'Built for your unique business needs',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                <path d="M12 3 20 7v10l-8 4-8-4V7l8-4Z" />
                <path d="m4 7 8 4 8-4M12 11v10" />
            </svg>
        ),
    },
    {
        title: 'Secure & Scalable',
        description: 'Enterprise-grade security that grows with you',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                <path d="M12 3 19 6v5c0 4.7-2.8 8.3-7 10-4.2-1.7-7-5.3-7-10V6l7-3Z" />
                <path d="m9 12 2 2 4-4" />
            </svg>
        ),
    },
    {
        title: 'Modern & Future-Ready',
        description: "Cutting-edge technology for tomorrow's challenges",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
                <path d="m14 4 6 6-8.5 8.5L8 19l-1-3.5L15.5 7 14 4Z" />
                <path d="m13 5 6 6" />
                <path d="M5 21h4" />
                <path d="m3 13 2-2" />
                <path d="M11 3V1" />
            </svg>
        ),
    },
]

export default function AboutHero() {
    return (
        <section data-cursor="hero" className="relative isolate overflow-hidden bg-[var(--color-section-bg)]">
            {/* Background Grid */}
            <div
                className="pointer-events-none absolute inset-0 -z-10 opacity-70
                    [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--color-border)_60%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-border)_60%,transparent)_1px,transparent_1px)]
                    [background-size:38px_38px]"
            />

            {/* Soft Blue Glow */}
            <div className="pointer-events-none absolute left-[10%] top-0 -z-10 h-[420px] w-[420px] rounded-full bg-[var(--color-primary-blue)]/10 blur-[110px]" />
            {/* Soft Teal Glow */}
            <div className="pointer-events-none absolute right-[-100px] top-1/4 -z-10 h-[340px] w-[340px] rounded-full bg-[var(--color-teal-accent)]/10 blur-[110px]" />

            <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

                {/* Heading row with inline pill images */}
                <div className="flex flex-col gap-1">
                    <h1 className="font-general font-light text-[clamp(2.4rem,6.5vw,5rem)] leading-[0.98] tracking-[-0.025em] text-[var(--color-headings)]">
                        Built to
                    </h1>

                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        <h1 className="font-general font-light text-[clamp(2.4rem,6.5vw,5rem)] leading-[0.98] tracking-[-0.025em] text-[var(--color-headings)]">
                            turn ideas
                        </h1>

                        <div className="hidden h-[60px] w-[185px] shrink-0 overflow-hidden rounded-full border border-[var(--color-border)] shadow-lg shadow-slate-900/10 sm:block lg:h-[74px] lg:w-[240px]">
                            <img src="/about/img1.png" alt="Team collaboration" className="h-full w-full object-cover" />
                        </div>

                        <div className="hidden h-[60px] w-[185px] shrink-0 overflow-hidden rounded-full border border-[var(--color-border)] shadow-lg shadow-slate-900/10 sm:block lg:h-[74px] lg:w-[240px]">
                            <img src="/about/img2.png" alt="Team working together" className="h-full w-full object-cover" />
                        </div>
                    </div>

                    <h1 className="font-general font-light text-[clamp(2.4rem,6.5vw,5rem)] leading-[0.98] tracking-[-0.025em] text-[var(--color-headings)]">
                        into digital
                    </h1>

                    <div className="flex flex-wrap items-center gap-6">
                        <h1 className="text-gradient font-general font-light text-[clamp(2.4rem,6.5vw,5rem)] leading-[0.98] tracking-[-0.025em]">
                            experiences
                        </h1>

                        {/* Circle graphic + connecting line */}
                        <div className="relative hidden items-center md:flex">
                            <div className="h-px w-16 bg-[var(--color-border)] lg:w-50" />
                            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-card-bg)] shadow-sm lg:h-20 lg:w-20">
                                <div className="bg-gradient-primary absolute right-0 top-0 h-full w-1/2 rounded-r-full" />
                                <div className="relative h-7 w-7 rounded-full bg-[var(--color-card-bg)] lg:h-9 lg:w-9" />
                            </div>
                            <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="ml-1 text-[var(--color-muted)]">
                                <path d="M3 9H15M15 9L10.5 4.5M15 9L10.5 13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* Mobile Images (shown below heading on small screens) */}
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:hidden">
                        <div className="h-24 overflow-hidden rounded-full">
                            <img src="/about/img1.png" alt="Team collaboration" className="h-full w-full object-cover" />
                        </div>
                        <div className="h-24 overflow-hidden rounded-full">
                            <img src="/about/img2.png" alt="Team collaboration" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Description */}
                <p className="font-satoshi font-light mt-8 max-w-2xl text-base leading-relaxed text-[var(--color-body)] sm:text-lg">
                    We are a team of developers, designers, and problem solvers passionate about building scalable, secure, and future-ready digital solutions that drive real business impact.
                </p>

                {/* Features */}
                <div className="mt-12 grid border-t border-[var(--color-border)] pt-8 sm:grid-cols-3">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`flex items-start gap-4 py-5 sm:px-6 sm:py-2 ${
                                index !== 0 ? 'border-t border-[var(--color-border)] sm:border-l sm:border-t-0' : ''
                            }`}
                        >
                            <div className="shrink-0 text-[var(--color-primary-blue)]">{feature.icon}</div>
                            <div>
                                <h3 className="font-general font-medium text-sm text-[var(--color-headings)] sm:text-base tracking-[-0.025em]">
                                    {feature.title}
                                </h3>
                                <p className="font-satoshi font-light mt-1 text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}