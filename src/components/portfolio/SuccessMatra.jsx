import { useState } from 'react'

const PANELS = [
    {
        title: 'Research',
        description:
            'Well Researched Website Development Company in BangaloreResearchWe are committed to finding the finest solutions to meet the needs of our clients. We are always updated with the latest trends and technologies. Information gathering and requirement understanding becomes an integral part of this phase.',
        image: '/success_mantra_imgs/research.webp',
        icon: 'fa-magnifying-glass-chart',
    },
    {
        title: 'Wireframing',
        description:
            'Wireframe or prototype are the essential ways to communicate in any web or app development process. While wireframe communicates the structure, the prototype focuses on the workflow along with the design.',
        image: '/success_mantra_imgs/wireframing.webp',
        icon: 'fa-pen-ruler',
    },
    {
        title: 'Development',
        description:
            'This is the phase where the approved wireframe or prototype gets life. We create a website, usually focused on aesthetic factors like layout, user interface, and other visual elements along with building the functionality.',
        image: '/success_mantra_imgs/developement.webp',
        icon: 'fa-code',
    },
    {
        title: 'Testing',
        description:
            'Quality assurance is an essential part of the project development. Before the user accepts the build, testing is done to evaluate and rectify the bugs, issues and errors which will help in the betterment of the deliverables.',
        image: '/success_mantra_imgs/testing.webp',
        icon: 'fa-shield-halved',
    },
    {
        title: 'Marketing',
        description:
            'Its the time to reach out to the potential customers once the brand/product gets its online presence. Effective collaboration to accelerate the brand visibility, create omni channel engagement and generate ROI is the key to a marketing success',
        image: '/success_mantra_imgs/marketing.webp',
        icon: 'fa-chart-line',
    },
]

export default function SuccessMantra() {
    const [activeIndex, setActiveIndex] = useState(null)

    const handleKeyDown = (event, index) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setActiveIndex(index)
        }
    }

    return (
        <section className="w-full border-t border-slate-200/60 bg-slate-50 py-2 transition-colors duration-300 dark:border-[#1D2A3D] dark:bg-[#0A1220] sm:py-4 lg:py-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="mb-8 max-w-3xl text-left sm:mb-12">
                    <h2 className="font-general font-light text-3xl tracking-[-0.025em] text-slate-900 dark:text-[#F8FAFC] sm:text-4xl lg:text-5xl">
                        Our <span className=" border-b border-gray-900 border-b-3 text-gradient">Success Mantra</span>
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-[#B8C2D1] sm:text-lg">
                        Being one of the fastest-growing web design and development
                        companies in India, we have always worked towards elevating a
                        brand’s true purpose by delivering uniquely personalised
                        experience. Our clientele is one happy group that has been
                        content and satisfied with our association.
                    </p>
                </div>

                {/* Panels */}
                <div
                    className="flex h-auto w-full flex-col gap-2.5 overflow-hidden rounded-2xl sm:gap-3 lg:h-[500px] lg:flex-row"
                    onMouseLeave={() => setActiveIndex(null)}
                >
                    {PANELS.map((panel, index) => {
                        const isActive = activeIndex === index
                        const hasActivePanel = activeIndex !== null

                        return (
                            <article
                                key={panel.title}
                                role="button"
                                tabIndex={0}
                                aria-label={`View ${panel.title} details`}
                                aria-pressed={isActive}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => setActiveIndex(index)}
                                onKeyDown={(event) =>
                                    handleKeyDown(event, index)
                                }
                                style={{
                                    flex: hasActivePanel
                                        ? isActive
                                            ? '4.5 1 0%'
                                            : '0.7 1 0%'
                                        : '1 1 0%',
                                }}
                                className={`
                                    relative
                                    min-w-0
                                    cursor-pointer
                                    overflow-hidden
                                    rounded-2xl
                                    border border-slate-200/70
                                    shadow-lg shadow-slate-900/10
                                    transition-all
                                    duration-700
                                    ease-[cubic-bezier(0.22,1,0.36,1)]
                                    dark:border-[#1D2A3D]
                                    dark:shadow-black/40

                                    ${hasActivePanel
                                        ? isActive
                                            ? 'min-h-[380px] lg:min-h-0 ring-2 ring-blue-500/50'
                                            : 'min-h-[96px] lg:min-h-0'
                                        : 'min-h-[96px] lg:min-h-0'
                                    }
                                `}
                            >
                                {/* Background Image */}
                                <img
                                    src={panel.image}
                                    alt={panel.title}
                                    loading="lazy"
                                    draggable={false}
                                    className={`absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                                        isActive ? 'scale-105' : 'scale-100'
                                    }`}
                                />

                                {/* Dark Overlay */}
                                <div
                                    className={`
                                        absolute inset-0
                                        bg-gradient-to-t
                                        from-slate-950/90
                                        via-slate-950/40
                                        to-slate-950/20
                                        transition-opacity duration-500
                                        ${isActive
                                            ? 'opacity-0'
                                            : 'opacity-100'
                                        }
                                    `}
                                />
                                {/* Vertical / Rotating Title */}
                                <div
                                    className={`
                                        absolute
                                        bottom-0
                                        left-0
                                        z-20
                                        flex
                                        h-14
                                        origin-bottom-left
                                        items-center
                                        justify-center
                                        overflow-hidden
                                        rounded-t-xl
                                        bg-gradient-to-r
                                        from-[#1457E8]
                                        via-[#1268DF]
                                        to-[#19B3AC]
                                        transition-all
                                        duration-700
                                        ease-[cubic-bezier(0.22,1,0.36,1)]
                                        ${isActive
                                            ? 'w-full rotate-0 translate-x-0'
                                            : 'w-36 -rotate-90 translate-x-14'
                                        }
                                    `}
                                >
                                    <span
                                        className="
                                            whitespace-nowrap
                                            font-general
                                            text-sm
                                            font-bold
                                            uppercase
                                            tracking-[0.2em]
                                            text-white
                                        "
                                    >
                                        {panel.title}
                                    </span>
                                </div>

                                {/* Active Content */}
                                <div
                                    className={`
                                        absolute
                                        inset-0
                                        z-[15]
                                        flex
                                        flex-col
                                        justify-start
                                        border
                                        border-white/15
                                        bg-black/20
                                        p-6
                                        pt-8
                                        backdrop-blur-md
                                        transition-all
                                        duration-500
                                        dark:bg-[#060B14]/85
                                        sm:p-8
                                        sm:pt-10
                                        ${isActive
                                            ? 'pointer-events-auto translate-y-0 opacity-100'
                                            : 'pointer-events-none translate-y-4 opacity-0'
                                        }
                                    `}
                                >
                                    <div className="max-w-lg">
                                        {/* Description */}
                                        <p className="font-satoshi font-light text-sm leading-relaxed text-slate-200 dark:text-[#B8C2D1] sm:text-base">
                                            {panel.description}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}