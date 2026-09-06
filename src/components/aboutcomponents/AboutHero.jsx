const FEATURES = [
    {
        title: 'Custom Software',
        description: 'Built for your unique business needs',
        // Position along the spectrum (0 = blue end, 1 = teal end)
        stop: 0,
    },
    {
        title: 'Secure & Scalable',
        description: 'Enterprise-grade security that grows with you',
        stop: 0.5,
    },
    {
        title: 'Modern & Future-Ready',
        description: "Cutting-edge technology for tomorrow's challenges",
        stop: 1,
    },
]

// Shared spectrum stops, derived only from the two brand colors already
// defined site-wide (--color-primary-blue, --color-teal-accent) so the
// "prism" motif is literally built from the existing brand palette rather
// than introducing arbitrary new hues.
const spectrumColor = (t) =>
    `color-mix(in srgb, var(--color-primary-blue) ${Math.round((1 - t) * 100)}%, var(--color-teal-accent) ${Math.round(t * 100)}%)`

export default function AboutHero() {
    return (
        <section data-cursor="hero" className="relative isolate">
            {/* ================= FULL-BLEED BACKGROUND PHOTO ================= */}
            <div className="relative h-[560px] w-full overflow-hidden rounded-b-[32px] sm:h-[640px] lg:h-[760px]">
                <img
                    src="/about/img1.png"
                    alt="Inside the Prism Infotech studio"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                {/* Legibility gradient so headline/copy stay readable over the photo */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/60" />
                {/* Faint brand-color wash so the photo still reads as part of this
                    palette rather than a stock insert */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-primary-blue)]/20 to-[var(--color-teal-accent)]/15 mix-blend-overlay" />

                <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-center px-5 sm:px-8 lg:px-12">
                    {/* ================= OVERSIZED HEADLINE ================= */}
                    {/* Type-first: the headline is the layout's anchor. Each line
                        reveals on load, once. */}
                    <h1 className="font-general font-light text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.94] tracking-[-0.03em] text-white">
                        <span className="reveal-line block overflow-hidden">
                            <span className="reveal-line-inner block">Built to turn ideas</span>
                        </span>
                        <span className="reveal-line block overflow-hidden" style={{ animationDelay: '90ms' }}>
                            <span className="reveal-line-inner block" style={{ animationDelay: '90ms' }}>into digital experiences</span>
                        </span>
                    </h1>

                    <p className="font-satoshi font-light mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
                        We're a team of developers, designers, and problem solvers building
                        scalable, secure software that drives real business impact.
                    </p>

                    {/* Team signature strip — real photos, styled to sit on top of
                        the photo background */}
                    <div className="mt-7 flex items-center gap-3">
                        <div className="flex -space-x-3">
                            <img
                                src="/about/img1.png"
                                alt="A member of the Prism Infotech team at work"
                                className="h-10 w-10 rounded-full border-2 border-white/80 object-cover shadow-sm"
                            />
                            <img
                                src="/about/img2.png"
                                alt="Prism Infotech team members collaborating"
                                className="h-10 w-10 rounded-full border-2 border-white/80 object-cover shadow-sm"
                            />
                        </div>
                        <span className="font-satoshi text-xs font-medium text-white/70">
                            The team behind the builds
                        </span>
                    </div>
                </div>
            </div>

            {/* ================= OVERLAPPING FEATURE BAR ================= */}
            {/* Pulled up over the photo's bottom edge with a negative margin —
                the same bridging device the reference used for its search bar,
                sized to 70% of the container width. */}
            <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
                <div className="relative z-20 mx-auto -mt-14 w-[70%] min-w-[280px] rounded-2xl border border-[var(--color-border)] bg-[var(--color-card-bg)] px-6 py-5 shadow-xl shadow-black/15 sm:-mt-16 sm:px-10 sm:py-6">
                    <div className="mb-4 flex h-1.5 w-full overflow-hidden rounded-full">
                        {FEATURES.map((feature) => (
                            <div
                                key={feature.title}
                                className="h-full flex-1"
                                style={{ backgroundColor: spectrumColor(feature.stop) }}
                            />
                        ))}
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3 sm:gap-6 sm:divide-x sm:divide-[var(--color-border)]">
                        {FEATURES.map((feature) => (
                            <div key={feature.title} className="sm:pl-6 sm:first:pl-0">
                                <h3 className="font-general font-medium text-sm text-[var(--color-headings)] sm:text-base tracking-[-0.025em]">
                                    {feature.title}
                                </h3>
                                <p className="font-satoshi font-light mt-1 text-xs leading-relaxed text-[var(--color-muted)] sm:text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* One orchestrated reveal on load: headline lines slide up into
                place. Disabled entirely for reduced-motion users. */}
            <style>{`
                .reveal-line-inner {
                    transform: translateY(105%);
                    animation: reveal-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
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