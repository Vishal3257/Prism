import { useEffect, useRef, useState } from 'react'
import { SERVICES } from '../../data/companyData'
import BrandLogo from '../common/BrandLogo'

export default function OrbitCircle() {
  const containerRef = useRef(null)
  const [radius, setRadius] = useState(170)

  const orbitServices = [
    'Website Development',
    'Mobile App Development',
    'Odoo ERP Solutions',
    'Blockchain Technology',
    'Digital Marketing & SEO',
  ]

  const displayNames = {
    'Website Development': 'Website Dev',
    'Mobile App Development': 'Mobile App Dev',
    'Odoo ERP Solutions': 'Odoo ERP',
    'Blockchain Technology': 'Blockchain',
    'Digital Marketing & SEO': 'Digital Marketing',
  }

  const items = SERVICES.filter((service) => orbitServices.includes(service.name)).map((service) => ({
    name: displayNames[service.name],
    icon: service.icon,
  }))

  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth
        const nextRadius = Math.min(170, width * (width <= 640 ? 0.32 : 0.37))
        setRadius(nextRadius)
      }
    }

    updateRadius()
    window.addEventListener('resize', updateRadius)
    return () => window.removeEventListener('resize', updateRadius)
  }, [])

  const angles = items.map((_, index) => (index / items.length) * Math.PI * 2 - Math.PI / 2)
  const itemHalf = 38

  return (
    <div className="orbit-container" ref={containerRef}>
      <div className="orbit-ring" />
      <div className="orbit-ring-inner" />

      <div className="orbit-items">
        {items.map((item, index) => {
          const angle = angles[index]
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle)

          return (
            <div
              key={item.name}
              className="orbit-item"
              style={{
                transform: `translate(${x - itemHalf}px, ${y - itemHalf}px)`,
              }}
            >
              <div className="orbit-item-content">
                <i className={`fa-solid ${item.icon}`} />
                <span>{item.name}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="orbit-center !p-0 flex items-center justify-center">
        <BrandLogo className="!w-20 !h-20 sm:!w-24 sm:!h-24 object-contain transition-transform duration-300 hover:scale-105" />
      </div>
    </div>
  )
}
