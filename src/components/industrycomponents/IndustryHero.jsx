import { useEffect, useState } from 'react'

const BRANCHES = [
    {
        name: 'Frontend',
        eyebrow: 'Frontend Development',
        title: 'Build interfaces people',
        highlight: 'love to use.',
        description:
            'We create fast, responsive and modern user interfaces using React, Next.js, JavaScript and modern frontend technologies.',
        icon: 'fa-code',
    },
    {
        name: 'Backend',
        eyebrow: 'Backend Development',
        title: 'Power products with',
        highlight: 'strong foundations.',
        description:
            'Scalable APIs, secure authentication, business logic and reliable backend systems built with modern server-side technologies.',
        icon: 'fa-server',
    },
    {
        name: 'DevOps',
        eyebrow: 'DevOps & Cloud',
        title: 'Ship faster with',
        highlight: 'better infrastructure.',
        description:
            'Automated deployments, containerization, CI/CD pipelines, cloud infrastructure and monitoring designed for reliable delivery.',
        icon: 'fa-cloud',
    },
    {
        name: 'Database',
        eyebrow: 'Database Engineering',
        title: 'Turn data into a',
        highlight: 'reliable foundation.',
        description:
            'Design, optimize and manage scalable data systems with PostgreSQL, MySQL, MongoDB and other modern database technologies.',
        icon: 'fa-database',
    },
    {
        name: 'Blockchain',
        eyebrow: 'Blockchain Development',
        title: 'Build trust with',
        highlight: 'decentralized technology.',
        description:
            'Secure blockchain applications, smart contracts and decentralized solutions designed for transparency and scalability.',
        icon: 'fa-link',
    },
    {
        name: 'AI & ML',
        eyebrow: 'AI & Machine Learning',
        title: 'Make technology more',
        highlight: 'intelligent.',
        description:
            'AI-powered applications, intelligent automation, data-driven systems and modern machine learning solutions for real business needs.',
        icon: 'fa-brain',
    },
]

export default function IndustryHero() {
    const [activeIndex, setActiveIndex] = useState(0)

    const activeBranch = BRANCHES[activeIndex]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((currentIndex) =>
                currentIndex === BRANCHES.length - 1
                    ? 0
                    : currentIndex + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section
            className="
                relative
                isolate
                overflow-hidden
                bg-white
                text-slate-950
            "
        >
            {/* Background Grid */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    -z-20
                    opacity-70
                    [background-image:linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)]
                    [background-size:40px_40px]
                "
            />

            {/* Blue Glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-180px]
                    top-[-150px]
                    -z-10
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-blue-100/70
                    blur-[130px]
                "
            />

            {/* Teal Glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-180px]
                    left-[-150px]
                    -z-10
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-teal-100/50
                    blur-[130px]
                "
            />

            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-5
                    py-10
                    sm:px-8
                    lg:px-10
                    lg:py-16
                "
            >

                {/* Branch Navigation */}
                <nav
                    className="
                        relative
                        z-20
                        overflow-x-auto
                        pb-2
                        scrollbar-none
                    "
                >
                    <div
                        className="
                            flex
                            min-w-max
                            items-center
                            gap-2
                        "
                    >
                        {BRANCHES.map((branch, index) => {
                            const isActive = activeIndex === index

                            return (
                                <button
                                    key={branch.name}
                                    type="button"
                                    onClick={() =>
                                        setActiveIndex(index)
                                    }
                                    className={`
                                        flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        border
                                        px-4
                                        py-2.5
                                        text-sm
                                        font-medium
                                        whitespace-nowrap
                                        transition-all
                                        duration-300

                                        ${
                                            isActive
                                                ? `
                                                    border-transparent
                                                    bg-gradient-to-r
                                                    from-[#1457E8]
                                                    to-[#19B3AC]
                                                    text-white
                                                    shadow-lg
                                                    shadow-blue-500/20
                                                `
                                                : `
                                                    border-slate-200
                                                    bg-white
                                                    text-slate-500
                                                    hover:border-blue-200
                                                    hover:text-slate-900
                                                `
                                        }
                                    `}
                                >
                                    <i
                                        className={`
                                            fa-solid
                                            ${branch.icon}
                                            text-xs
                                        `}
                                    />

                                    {branch.name}
                                </button>
                            )
                        })}
                    </div>
                </nav>

                {/* Main Content */}
                <div
                    className="
                        mt-14
                        grid
                        min-h-[520px]
                        items-center
                        lg:grid-cols-[1fr_0.55fr]
                        lg:gap-20
                    "
                >
                    {/* Left Content */}
                    <div
                        key={activeBranch.name}
                        className="
                            max-w-3xl
                            animate-[branchContent_0.6s_ease]
                        "
                    >
                        {/* Eyebrow */}
                        <div
                            className="
                                mb-6
                                inline-flex
                                items-center
                                gap-2.5
                                rounded-full
                                border
                                border-blue-100
                                bg-blue-50
                                px-4
                                py-2
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.16em]
                                text-[#1457E8]
                            "
                        >
                            <span
                                className="
                                    h-1.5
                                    w-1.5
                                    rounded-full
                                    bg-[#19B3AC]
                                "
                            />

                            {activeBranch.eyebrow}
                        </div>

                        {/* Heading */}
                        <h1
                            className="
                                font-display
                                text-5xl
                                font-light
                                leading-[0.95]
                                tracking-[-0.055em]
                                text-slate-950
                                sm:text-6xl
                                lg:text-7xl
                            "
                        >
                            {activeBranch.title}

                            <span
                                className="
                                    block
                                    bg-gradient-to-r
                                    from-[#1457E8]
                                    via-[#1268DF]
                                    to-[#19B3AC]
                                    bg-clip-text
                                    font-medium
                                    text-transparent
                                "
                            >
                                {activeBranch.highlight}
                            </span>
                        </h1>

                        {/* Description */}
                        <p
                            className="
                                mt-7
                                max-w-2xl
                                text-base
                                font-light
                                leading-8
                                text-slate-500
                                sm:text-lg
                            "
                        >
                            {activeBranch.description}
                        </p>

                        {/* CTA */}
                        <div
                            className="
                                mt-9
                                flex
                                flex-wrap
                                items-center
                                gap-4
                            "
                        >
                            <button
                                type="button"
                                className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    bg-gradient-to-r
                                    from-[#1457E8]
                                    to-[#19B3AC]
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-lg
                                    shadow-blue-500/20
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:shadow-xl
                                "
                            >
                                Explore {activeBranch.name}

                                <i
                                    className="
                                        fa-solid
                                        fa-arrow-right
                                        text-xs
                                    "
                                />
                            </button>

                            <button
                                type="button"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-slate-200
                                    bg-white
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-medium
                                    text-slate-700
                                    shadow-sm
                                    transition-all
                                    duration-300
                                    hover:border-blue-200
                                    hover:text-[#1457E8]
                                "
                            >
                                Talk to an expert
                            </button>
                        </div>
                    </div>

                    {/* Right Branch Card */}
                    <div
                        className="
                            relative
                            hidden
                            min-h-[400px]
                            items-center
                            justify-center
                            lg:flex
                        "
                    >
                        {/* Outer Ring */}
                        <div
                            className="
                                absolute
                                h-[340px]
                                w-[340px]
                                rounded-full
                                border
                                border-blue-100
                            "
                        />

                        {/* Dashed Ring */}
                        <div
                            className="
                                absolute
                                h-[280px]
                                w-[280px]
                                rounded-full
                                border
                                border-dashed
                                border-teal-200
                            "
                        />

                        {/* Main Card */}
                        <div
                            key={activeBranch.name}
                            className="
                                relative
                                z-10
                                flex
                                h-[230px]
                                w-[230px]
                                flex-col
                                items-center
                                justify-center
                                rounded-[2rem]
                                border
                                border-slate-200
                                bg-white
                                text-center
                                shadow-2xl
                                shadow-slate-900/10
                                animate-[branchCard_0.6s_ease]
                            "
                        >
                            {/* Icon */}
                            <div
                                className="
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-gradient-to-br
                                    from-[#1457E8]
                                    to-[#19B3AC]
                                    text-2xl
                                    text-white
                                    shadow-lg
                                    shadow-blue-500/20
                                "
                            >
                                <i
                                    className={`
                                        fa-solid
                                        ${activeBranch.icon}
                                    `}
                                />
                            </div>

                            {/* Name */}
                            <h2
                                className="
                                    mt-5
                                    font-display
                                    text-2xl
                                    font-semibold
                                    text-slate-900
                                "
                            >
                                {activeBranch.name}
                            </h2>

                            {/* Label */}
                            <p
                                className="
                                    mt-2
                                    text-xs
                                    uppercase
                                    tracking-[0.16em]
                                    text-slate-400
                                "
                            >
                                Expertise
                            </p>
                        </div>

                        {/* Decorative Dots */}
                        <span
                            className="
                                absolute
                                left-4
                                top-20
                                h-2
                                w-2
                                rounded-full
                                bg-[#1457E8]
                            "
                        />

                        <span
                            className="
                                absolute
                                bottom-20
                                right-4
                                h-2
                                w-2
                                rounded-full
                                bg-[#19B3AC]
                            "
                        />

                        <span
                            className="
                                absolute
                                right-16
                                top-8
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-blue-300
                            "
                        />
                    </div>
                </div>

                {/* Bottom Progress */}
                <div
                    className="
                        mt-8
                        grid
                        grid-cols-3
                        gap-x-3
                        gap-y-5
                        border-t
                        border-slate-200
                        pt-7
                        sm:grid-cols-6
                    "
                >
                    {BRANCHES.map((branch, index) => {
                        const isActive = activeIndex === index

                        return (
                            <button
                                key={branch.name}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                className="
                                    group
                                    text-left
                                "
                            >
                                <div
                                    className="
                                        mb-2
                                        h-1
                                        overflow-hidden
                                        rounded-full
                                        bg-slate-200
                                    "
                                >
                                    <div
                                        className={`
                                            h-full
                                            rounded-full
                                            bg-gradient-to-r
                                            from-[#1457E8]
                                            to-[#19B3AC]
                                            transition-all
                                            duration-500

                                            ${
                                                isActive
                                                    ? 'w-full'
                                                    : 'w-0'
                                            }
                                        `}
                                    />
                                </div>

                                <span
                                    className={`
                                        text-xs
                                        font-medium
                                        transition-colors
                                        duration-300

                                        ${
                                            isActive
                                                ? 'text-[#1457E8]'
                                                : 'text-slate-400 group-hover:text-slate-700'
                                        }
                                    `}
                                >
                                    {branch.name}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Animations */}
            <style>{`
                @keyframes branchContent {
                    from {
                        opacity: 0;
                        transform: translateY(14px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes branchCard {
                    from {
                        opacity: 0;
                        transform: scale(0.94);
                    }

                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </section>
    )
}