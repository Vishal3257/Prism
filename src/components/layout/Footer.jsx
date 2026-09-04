import { Link } from 'react-router-dom'
import { COMPANY, SERVICES, SOCIAL_LINKS } from '../../data/companyData'
import BrandLogo from '../common/BrandLogo'

export default function Footer() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Industries', path: '/industries' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4 text-white hover:opacity-90 transition-opacity">
              <BrandLogo />
              <span className="font-bold text-lg tracking-tight">{COMPANY.name}</span>
            </Link>
            <p className="text-xs leading-relaxed text-slate-400 mb-6">
              {COMPANY.tagline}
            </p>
            <p className="text-xs text-slate-500">
              Transforming innovative concepts into scalable, revenue-generating digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="hover:text-blue-400 transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Socials */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-envelope text-blue-400 text-xs" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-blue-400 transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-blue-400 text-xs" />
                <a href={`tel:${COMPANY.phone}`} className="hover:text-blue-400 transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-blue-400 text-xs" />
                <span>{COMPANY.address}</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin text-sm" />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp text-sm" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram text-sm" />
              </a>
              <a
                href={SOCIAL_LINKS.telegram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all"
                aria-label="Telegram"
              >
                <i className="fa-brands fa-telegram text-sm" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
