import { useEffect, useState } from 'react'

const SERVICES = [
    {
        title: 'Web Development',
        shortTitle: 'Web',
        description:
            'Scalable, high-performance websites and web applications built around your business goals.',
        icon: 'fa-code',
    },
    {
        title: 'UI/UX Design',
        shortTitle: 'Design',
        description:
            'Modern and intuitive digital experiences designed to turn visitors into loyal customers.',
        icon: 'fa-pen-ruler',
    },
    {
        title: 'Mobile App Development',
        shortTitle: 'Mobile',
        description:
            'Fast, reliable and engaging mobile applications crafted for iOS and Android platforms.',
        icon: 'fa-mobile-screen-button',
    },
    {
        title: 'Digital Marketing',
        shortTitle: 'Marketing',
        description:
            'Data-driven digital marketing strategies that increase visibility, traffic and conversions.',
        icon: 'fa-chart-line',
    },
    {
        title: 'Cloud & Technology',
        shortTitle: 'Cloud',
        description:
            'Secure, flexible and future-ready cloud solutions designed to scale with your business.',
        icon: 'fa-cloud',
    },
]

const HERO_IMAGE = '/servicehero/service_1.jpg'

export default function ServiceHero() {
    const [activeIndex, setActiveIndex] = useState(0)

    const activeService = SERVICES[activeIndex]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((currentIndex) =>
                currentIndex === SERVICES.length - 1 ? 0 : currentIndex + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section data-cursor="hero" className="relative isolate min-h-[440px] overflow-hidden sm:min-h-[500px] lg:min-h-[560px]">
            {/* Full Background Image */}
            <img
                src={HERO_IMAGE}
                alt="Prism Infotech services"
                className="absolute inset-0 -z-20 h-full w-full object-cover"
            />

            {/* Readability Overlay — darker on left/bottom where text sits */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/25" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

            <div className="relative z-10 mx-auto flex min-h-[440px] max-w-7xl flex-col justify-center px-5 py-10 sm:min-h-[500px] sm:px-8 sm:py-12 lg:min-h-[560px] lg:px-10 lg:py-14">

                {/* LEFT CONTENT */}
                <div className="max-w-2xl">
                    {/* Eyebrow */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                        <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-[var(--color-teal-accent)]" />
                        Digital Solutions For Modern Business
                    </div>

                    {/* Heading — animates on service change */}
                    <div key={`heading-${activeIndex}`} className="animate-[fadeIn_0.6s_ease]">
                        <h1 className="font-display text-5xl font-light leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
                            We build
                            <span className="block bg-gradient-to-r from-[var(--color-primary-blue)] to-[var(--color-teal-accent)] bg-clip-text font-medium text-transparent">
                                {activeService.title}
                            </span>
                            <span className="block text-white/60">
                                that move brands forward.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="font-sans mt-5 max-w-xl text-base font-light leading-8 text-white/75 sm:text-lg">
                            {activeService.description}
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <button className="bg-gradient-primary inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                            Explore Services
                            <i className="fa-solid fa-arrow-right text-xs" />
                        </button>

                        <button className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:border-white/50 hover:bg-white/20">
                            Let's Talk
                        </button>
                    </div>

                    {/* Service Progress */}
                    <div className="mt-9 flex max-w-xl items-center gap-2">
                        {SERVICES.map((service, index) => (
                            <button
                                key={service.title}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Show ${service.title}`}
                                className="group flex flex-1 flex-col gap-2 text-left"
                            >
                                <div className="h-1 overflow-hidden rounded-full bg-white/20">
                                    {activeIndex === index && (
                                        <div className="bg-gradient-primary h-full w-full origin-left animate-[progress_5s_linear]" />
                                    )}
                                </div>

                                <span
                                    className={`hidden text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 sm:block ${
                                        activeIndex === index ? 'text-white' : 'text-white/45'
                                    }`}
                                >
                                    {service.shortTitle}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Bottom-right Service Label */}
                <div
                    key={`label-${activeIndex}`}
                    className="absolute bottom-8 right-6 z-20 hidden animate-[fadeIn_0.5s_ease] items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-3.5 backdrop-blur-md sm:flex xl:right-14"
                >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                        <i className={`fa-solid ${activeService.icon}`} />
                    </div>
                    <div>
                        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
                            What we do
                        </p>
                        <p className="font-display text-base text-white">
                            {activeService.title}
                        </p>
                    </div>
                </div>
            </div>

            {/* Animation Keyframes */}
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes progress {
                    from { transform: scaleX(0); }
                    to { transform: scaleX(1); }
                }
            `}</style>
        </section>
    )
}