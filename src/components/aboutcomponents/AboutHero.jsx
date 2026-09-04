import { Target, Eye, Gem } from 'lucide-react';
import heroBackground from '/about/about-right-part.png';

const pillars = [
    {
        icon: Target,
        title: "Our Mission",
        description:
            "To deliver innovative IT solutions that help businesses grow and succeed in the digital era.",
    },
    {
        icon: Eye,
        title: "Our Vision",
        description:
            "To be a global leader in IT services recognized for innovation, quality, and customer success.",
    },
    {
        icon: Gem,
        title: "Our Values",
        description:
            "Integrity, innovation, commitment, and excellence in everything we do.",
    },
];

function AboutHero() {
    return (
        <section
            id="about-hero"
            className="w-full overflow-hidden bg-[#F7F9FC] transition-colors duration-300 dark:bg-[#060B14]"
        >
            {/* Two-column grid: left = text, right = image */}
            <div className="w-full flex flex-col lg:flex-row lg:items-stretch">

                {/* ===== LEFT: Text Content ===== */}
                <div className="relative flex flex-1 flex-col justify-center
                        px-5 py-3
                        sm:px-10 sm:py-4
                        md:px-5
                        lg:min-h-[calc(100vh-12rem)] lg:max-h-[820px]
                        lg:py-5 lg:pl-16 lg:pr-10
                        xl:pl-6 xl:pr-12
                        2xl:pl-28">

                    {/* Eyebrow / Tagline */}
                    <div className="mb-2.5 sm:mb-3">
                        <span className="font-sans text-xs sm:text-[13px] font-extrabold tracking-[0.16em] text-[#2563EB] uppercase dark:text-[#3B82F6]">
                            ABOUT US
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="mb-3 font-general font-light text-3xl leading-[1.15] tracking-[-0.025em] text-[#0B1220]
                         sm:text-4xl
                         md:text-5xl
                         lg:text-[42px]
                         xl:text-[48px]
                         2xl:text-[52px]
                         dark:text-[#F8FAFC]">
                        Driven by Innovation. <br />
                        Focused on <span className="text-[#2563EB] dark:text-[#3B82F6]">Your Success.</span>
                    </h1>

                    {/* Accent Line under heading */}
                    <div className="mb-4 h-[3px] w-12 rounded-full bg-gradient-to-r from-[#2563EB] to-[#35B8A5] dark:from-[#3B82F6] dark:to-[#42C7B5] sm:mb-5" />

                    {/* Description Paragraph */}
                    <p className="mb-8 max-w-xl font-satoshi text-sm font-light leading-relaxed text-[#475569]
                        sm:text-[15px]
                        lg:text-[14.5px]
                        xl:text-[15.5px]
                        dark:text-[#B8C2D1]">
                        At Prism Infotech Solution, we empower businesses with smart IT solutions that drive growth, improve efficiency, and create long-term value.
                    </p>

                    {/* 3 Pillars / Feature Columns */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5 lg:gap-6 pt-1">
                        {pillars.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={item.title}
                                    className="group flex flex-col items-start rounded-2xl p-3 -m-3 transition-colors duration-300 hover:bg-[#EEF4FF] dark:hover:bg-[#101A2B]"
                                >
                                    {/* Rounded Icon Box */}
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF4FF] text-[#2563EB] shadow-sm transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white dark:bg-[#101A2B] dark:text-[#3B82F6] dark:group-hover:bg-[#3B82F6] dark:group-hover:text-[#060B14] sm:h-12 sm:w-12">
                                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.2} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="mt-3.5 font-general font-medium text-[15px] tracking-[-0.025em] text-[#0B1220] dark:text-[#F8FAFC] sm:text-[16px]">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-1.5 font-satoshi text-[12px] font-light leading-[1.6] text-[#7C8799] dark:text-[#77859A] sm:text-[12.5px]">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Decorative Dot Matrix (Subtle) */}
                    <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 grid-cols-3 gap-2 opacity-30 xl:grid">
                        {Array.from({ length: 18 }).map((_, i) => (
                            <span key={i} className="h-1 w-1 rounded-full bg-[#2563EB] dark:bg-[#3B82F6]" />
                        ))}
                    </div>

                </div>

                {/* ===== RIGHT: Hero Image ===== */}
                <div
                    className="relative hidden w-full overflow-hidden border-l border-[#E4E9F0] dark:border-[#1D2A3D]
                     lg:block lg:h-auto lg:min-h-full lg:w-[52%] lg:shrink-0
                     xl:w-[50%]"
                >
                    <img
                        src={heroBackground}
                        alt="Prism Infotech About Us"
                        className="h-full w-full object-fill"
                    />
                    {/* subtle gradient fade at the seam for a more premium blend with the text side */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F7F9FC] to-transparent dark:from-[#060B14]" />
                </div>

            </div>
        </section>
    );
}

export default AboutHero;