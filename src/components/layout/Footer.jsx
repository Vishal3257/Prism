import { Link } from 'react-router-dom'
import { COMPANY, SERVICES, SOCIAL_LINKS } from '../../data/companyData'

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
    <footer className="bg-slate-950 text-slate-400 pt-12 sm:pt-16 pb-14 sm:pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 lg:gap-10 mb-12">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1 lg:col-span-4">
            <Link to="/" className="inline-block mb-4 hover:opacity-90 transition-opacity" aria-label="Prism Infotech Home">
              <img
                src="/logo/logos/logo2.png"
                alt={COMPANY.name}
                className="w-[160px] sm:w-[190px] object-contain transition-transform duration-200 hover:scale-[1.02]"
              />
            </Link>
            <p className="text-xs leading-relaxed text-slate-400 mb-3 max-w-sm">
              {COMPANY.tagline}
            </p>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm mb-5">
              Transforming innovative concepts into scalable, revenue-generating digital products with AI and modern software engineering.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors"></span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-1 lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    to="/services" 
                    className="hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors"></span>
                    <span className="leading-snug">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Socials */}
          <div className="col-span-2 md:col-span-1 lg:col-span-3">
            <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
              Direct Contact
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5 mb-3">
              {/* Email */}
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800/80 hover:border-blue-500/40 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
                  <i className="fa-solid fa-envelope text-xs" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Email Us</span>
                  <span className="block text-xs text-slate-300 group-hover:text-blue-400 transition-colors truncate">
                    {COMPANY.email}
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/70 hover:bg-slate-900 border border-slate-800/80 hover:border-emerald-500/40 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                  <i className="fa-solid fa-phone text-xs" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Call Directly</span>
                  <span className="block text-xs text-slate-300 group-hover:text-emerald-400 transition-colors">
                    {COMPANY.phone}
                  </span>
                </div>
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/50 text-slate-400 mb-5">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 mt-0.5">
                <i className="fa-solid fa-location-dot text-xs" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="block text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Office Location</span>
                <span className="block text-xs leading-relaxed text-slate-300">
                  {COMPANY.address}
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <span className="block text-[10px] uppercase font-semibold text-slate-500 tracking-wider mb-2.5">
                Connect With Us
              </span>
              <div className="grid grid-cols-4 gap-2 sm:flex sm:items-center sm:gap-2.5">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 sm:w-9 sm:h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin text-sm" />
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 sm:w-9 sm:h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp text-sm" />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 sm:w-9 sm:h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600 hover:border-pink-600 transition-all"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram text-sm" />
                </a>
                <a
                  href={SOCIAL_LINKS.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 sm:w-9 sm:h-9 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-500 hover:border-sky-500 transition-all"
                  aria-label="Telegram"
                >
                  <i className="fa-brands fa-telegram text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center gap-5 sm:gap-6">
            <Link to="/about" className="hover:text-slate-400 transition-colors">About</Link>
            <Link to="/services" className="hover:text-slate-400 transition-colors">Services</Link>
            <Link to="/portfolio" className="hover:text-slate-400 transition-colors">Portfolio</Link>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
