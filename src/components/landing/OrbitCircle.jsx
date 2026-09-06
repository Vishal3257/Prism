import { useEffect, useRef, useState } from 'react'
import { SERVICES } from '../../data/companyData'
import BrandLogo from '../common/BrandLogo'

export default function OrbitCircle() {
  const containerRef = useRef(null)
  const [radius, setRadius] = useState(170)
  const [isMobile, setIsMobile] = useState(false)

  const orbitServices = [
    'Website Development',
    'Mobile App Development',
    'Odoo ERP Solutions',
    'Blockchain Technology',
    'Digital Marketing & SEO',
  ]

  const serviceConfig = {
    'Website Development': {
      displayName: 'Website Dev',
      tag: 'Web & UI',
      color: '#2563EB',
      accentColor: '#38BDF8',
      glow: 'rgba(37, 99, 235, 0.45)',
      lightBg: 'rgba(37, 99, 235, 0.08)',
      darkBg: 'rgba(37, 99, 235, 0.16)',
      borderColorLight: '#BFDBFE',
      borderColorDark: 'rgba(59, 130, 246, 0.5)',
    },
    'Mobile App Development': {
      displayName: 'Mobile App',
      tag: 'iOS & Android',
      color: '#6366F1',
      accentColor: '#818CF8',
      glow: 'rgba(99, 102, 241, 0.45)',
      lightBg: 'rgba(99, 102, 241, 0.08)',
      darkBg: 'rgba(99, 102, 241, 0.16)',
      borderColorLight: '#C7D2FE',
      borderColorDark: 'rgba(99, 102, 241, 0.5)',
    },
    'Odoo ERP Solutions': {
      displayName: 'Odoo ERP',
      tag: 'ERP & Business',
      color: '#875A7B',
      accentColor: '#A06A92',
      glow: 'rgba(135, 90, 123, 0.45)',
      lightBg: 'rgba(135, 90, 123, 0.09)',
      darkBg: 'rgba(135, 90, 123, 0.18)',
      borderColorLight: '#E9D5FF',
      borderColorDark: 'rgba(168, 85, 247, 0.5)',
    },
    'Blockchain Technology': {
      displayName: 'Blockchain',
      tag: 'Web3 & Security',
      color: '#0D9488',
      accentColor: '#35B8A5',
      glow: 'rgba(13, 148, 136, 0.45)',
      lightBg: 'rgba(53, 184, 165, 0.08)',
      darkBg: 'rgba(53, 184, 165, 0.16)',
      borderColorLight: '#99F6E4',
      borderColorDark: 'rgba(45, 212, 191, 0.5)',
    },
    'Digital Marketing & SEO': {
      displayName: 'Marketing',
      tag: 'SEO & Growth',
      color: '#EA580C',
      accentColor: '#F97316',
      glow: 'rgba(234, 88, 12, 0.45)',
      lightBg: 'rgba(234, 88, 12, 0.08)',
      darkBg: 'rgba(234, 88, 12, 0.16)',
      borderColorLight: '#FED7AA',
      borderColorDark: 'rgba(249, 115, 22, 0.5)',
    },
  }

  // Filter and enrich items with metadata & image assets
  const items = orbitServices
    .map((serviceName) => {
      const found = SERVICES.find((s) => s.name === serviceName)
      const config = serviceConfig[serviceName]
      if (!found || !config) return null
      return {
        id: found.id,
        rawName: found.name,
        name: config.displayName,
        tag: config.tag,
        icon: found.icon,
        image: found.image,
        config,
      }
    })
    .filter(Boolean)

  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth
        const mobile = width <= 640
        setIsMobile(mobile)
        const nextRadius = Math.min(172, width * (mobile ? 0.33 : 0.38))
        setRadius(nextRadius)
      }
    }

    updateRadius()
    window.addEventListener('resize', updateRadius)
    return () => window.removeEventListener('resize', updateRadius)
  }, [])

  const angles = items.map((_, index) => (index / items.length) * Math.PI * 2 - Math.PI / 2)
  const itemHalf = isMobile ? 37 : 43

  const handleServiceClick = () => {
    const el = document.getElementById('services')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="orbit-container" ref={containerRef}>
      {/* Decorative Rotating Orbital Rings with Accent Dots */}
      <div className="orbit-ring">
        <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500/80 shadow-[0_0_10px_#3B82F6]" />
        <span className="absolute -bottom-1 left-1/3 w-2 h-2 rounded-full bg-teal-400/80 shadow-[0_0_8px_#35B8A5]" />
      </div>
      <div className="orbit-ring-inner">
        <span className="absolute top-1/4 -right-1 w-2 h-2 rounded-full bg-indigo-500/80 shadow-[0_0_8px_#6366F1]" />
        <span className="absolute bottom-1/4 -left-1 w-2.5 h-2.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_#06B6D4]" />
      </div>

      {/* Orbiting Service Badges */}
      <div className="orbit-items">
        {items.map((item, index) => {
          const angle = angles[index]
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle)

          return (
            <div
              key={item.name}
              role="button"
              tabIndex={0}
              title={`Explore ${item.rawName}`}
              onClick={handleServiceClick}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleServiceClick()
                }
              }}
              className="orbit-item group"
              style={{
                // Position via CSS variables instead of a direct `transform: translate(...)`.
                // The base .orbit-item CSS reads these vars for its resting transform, and the
                // :hover state re-applies them alongside `scale(...)` so hovering only grows the
                // item in place instead of resetting/jumping its position.
                '--x': `${x - itemHalf}px`,
                '--y': `${y - itemHalf}px`,
                '--item-color': item.config.color,
                '--item-accent': item.config.accentColor,
                '--item-glow': item.config.glow,
                '--item-border-light': item.config.borderColorLight,
                '--item-border-dark': item.config.borderColorDark,
                '--item-bg-light': item.config.lightBg,
                '--item-bg-dark': item.config.darkBg,
              }}
            >
              <div className="orbit-item-content">
                {/* Visual Icon / Logo Container */}
                <div
                  className={`orbit-icon-container ${item.rawName.toLowerCase().includes('odoo') ? '!bg-white dark:!bg-white/95 shadow-xs' : ''}`}
                  style={{
                    backgroundColor: item.rawName.toLowerCase().includes('odoo') ? '#ffffff' : item.config.lightBg,
                  }}
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="orbit-item-img"
                      loading="lazy"
                    />
                  ) : (
                    <i
                      className={`fa-solid ${item.icon} orbit-item-icon`}
                      style={{ color: item.config.color }}
                    />
                  )}
                </div>

                {/* Service Label */}
                <span className="orbit-item-label font-medium">{item.name}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Center Brand Core */}
      <div className="orbit-center-wrapper">
        <div className="orbit-center-pulse" />
        <div
          className="orbit-center !p-0 group"
          role="button"
          tabIndex={0}
          title="Prism Infotech Digital Solutions"
          onClick={handleServiceClick}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleServiceClick()
            }
          }}
        >
          <BrandLogo className="!w-16 !h-16 sm:!w-20 sm:!h-20 object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md" />
        </div>
      </div>
    </div>
  )
}