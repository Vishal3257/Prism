import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useTheme } from "../../context/useTheme";
import { COMPANY, SERVICES } from "../../data/companyData";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const { dark, toggle } = useTheme();

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }

  // Clean up timer
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky py-2 lg:py-1 top-0 z-50 w-full bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-colors duration-300">
      <div className="w-full flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 md:px-8 lg:px-8 xl:px-12 2xl:px-16">

        {/* Logo (Left) - Switches to logo2.png in dark mode */}
        <Link to="/" className="shrink-0 flex items-center" aria-label="Prism Infotech Home">
          <img
            src={logo}
            alt="Prism Infotech Solution"
            className="w-[145px] sm:w-[175px] lg:w-[205px] object-contain nav-brand-logo transition-transform duration-200 hover:scale-[1.02] block dark:hidden"
          />
          <img
            src="/logo/logos/logo2.png"
            alt="Prism Infotech Solution"
            className="w-[145px] sm:w-[175px] lg:w-[205px] object-contain nav-brand-logo transition-transform duration-200 hover:scale-[1.02] hidden dark:block"
          />
        </Link>

        {/* Desktop Navigation (Center/Spaced) */}
        <div className="hidden items-center gap-5 xl:gap-7 2xl:gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.path);

            if (item.label === "Services") {
              return (
                <div
                  key={item.label}
                  className="relative py-2"
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={`relative flex items-center gap-1.5 py-2 text-[14.5px] xl:text-[15px] font-semibold tracking-[-0.2px] transition-colors duration-200 ${
                      isActive
                        ? "text-[#1559D6] dark:text-blue-400"
                        : "text-[#111A4A] dark:text-slate-200 hover:text-[#1559D6] dark:hover:text-blue-400"
                    }`}
                  >
                    <span>{item.label}</span>
                    <i
                      className={`fa-solid fa-chevron-down text-[10px] transition-transform duration-300 ${
                        servicesOpen ? "rotate-180 text-[#1559D6] dark:text-blue-400" : "text-slate-400"
                      }`}
                    />

                    {/* Active Blue Border */}
                    <span
                      className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#1559D6] dark:bg-blue-400 transition-all duration-300 ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </Link>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.path}
                className={`relative flex items-center py-2 text-[14.5px] xl:text-[15px] font-semibold tracking-[-0.2px] transition-colors duration-200 ${
                  isActive
                    ? "text-[#1559D6] dark:text-blue-400"
                    : "text-[#111A4A] dark:text-slate-200 hover:text-[#1559D6] dark:hover:text-blue-400"
                }`}
              >
                {item.label}

                {/* Active Blue Border */}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#1559D6] dark:bg-blue-400 transition-all duration-300 ${
                    isActive ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* Right CTA - Get In Touch & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={toggle}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-600 hover:text-[#1559D6] dark:text-slate-300 dark:hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-300 cursor-pointer active:scale-90"
            aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
          >
            <span className={`inline-block transition-transform duration-500 ease-out ${dark ? 'rotate-180 scale-100' : 'rotate-0 scale-100'}`}>
              <i className={`fa-solid ${dark ? 'fa-sun text-amber-400 text-lg' : 'fa-moon text-slate-600 text-base'}`} />
            </span>
          </button>

          <Link
            to="/contact"
            className="group inline-flex h-[46px] items-center justify-center gap-2 rounded-full bg-[#1559D6] px-6 text-[14px] font-semibold text-white shadow-[0_4px_14px_rgba(21,89,214,0.25)] transition-all duration-300 hover:bg-[#104DBD] hover:shadow-[0_6px_20px_rgba(21,89,214,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
          >
            <span>Get In Touch</span>
            <span className="text-[17px] leading-none transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggle}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-all duration-300 cursor-pointer active:scale-90"
            aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
          >
            <span className={`inline-block transition-transform duration-500 ease-out ${dark ? 'rotate-180 scale-100' : 'rotate-0 scale-100'}`}>
              <i className={`fa-solid ${dark ? 'fa-sun text-amber-400 text-lg' : 'fa-moon text-slate-600 dark:text-slate-300 text-base'}`} />
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-200 dark:border-slate-800"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-[2px] w-6 bg-[#111A4A] dark:bg-slate-200 transition-transform duration-200 ${
                  mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-[#111A4A] dark:bg-slate-200 transition-opacity duration-200 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-6 bg-[#111A4A] dark:bg-slate-200 transition-transform duration-200 ${
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

      </div>

      {/* Services 80% Width Mega Dropdown (Desktop) */}
      <div
        onMouseEnter={handleServicesMouseEnter}
        onMouseLeave={handleServicesMouseLeave}
        className={`hidden lg:block absolute top-full left-1/2 -translate-x-1/2 w-[80vw] max-w-6xl pt-2.5 transition-all duration-300 ease-out z-50 ${
          servicesOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 dark:bg-[#0A1220]/95 backdrop-blur-2xl border border-slate-200/80 dark:border-[#1D2A3D] rounded-3xl shadow-2xl shadow-blue-500/10 p-5 sm:p-6 overflow-hidden">
          
          {/* Header Row */}
          <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100 dark:border-[#1D2A3D]">
            <div className="flex items-center gap-2.5">
              <span className="flex h-2 w-2 rounded-full bg-[#1559D6] dark:bg-[#3B82F6] animate-pulse" />
              <span className="font-general font-medium text-xs uppercase tracking-[0.18em] text-[#1559D6] dark:text-[#3B82F6]">
                Our Services & Digital Capabilities
              </span>
            </div>
            <Link
              to="/services"
              onClick={() => setServicesOpen(false)}
              className="text-xs font-semibold text-[#1559D6] dark:text-blue-400 hover:underline inline-flex items-center gap-1.5"
            >
              <span>Explore All ({SERVICES.length})</span>
              <i className="fa-solid fa-arrow-right text-[10px]" />
            </Link>
          </div>

          {/* 10 Services Grid (Clean 3-column layout) */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to="/services"
                onClick={() => setServicesOpen(false)}
                className="group/item flex items-start gap-3 p-2.5 rounded-2xl border border-transparent hover:border-blue-100 dark:hover:border-blue-900/40 hover:bg-blue-50/60 dark:hover:bg-[#101A2B] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800/90 border border-blue-100/70 dark:border-slate-700/60 flex items-center justify-center shrink-0 text-blue-600 dark:text-[#3B82F6] text-base group-hover/item:scale-105 group-hover/item:bg-[#1559D6] group-hover/item:text-white transition-all duration-200 shadow-2xs p-2">
                  {service.image ? (
                    <img src={service.image} alt={service.name} className="w-6 h-6 object-contain" />
                  ) : (
                    <i className={`fa-solid ${service.icon}`} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-general font-medium text-[13.5px] text-slate-900 dark:text-[#F8FAFC] group-hover/item:text-[#1559D6] dark:group-hover/item:text-[#3B82F6] transition-colors truncate">
                      {service.name}
                    </h4>
                    <i className="fa-solid fa-arrow-right text-[9px] text-[#1559D6] dark:text-[#3B82F6] opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200 shrink-0" />
                  </div>
                  <p className="font-satoshi text-[11.5px] text-slate-500 dark:text-[#77859A] line-clamp-1 mt-0.5 leading-snug">
                    {service.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-[#1D2A3D] bg-slate-50/60 dark:bg-slate-900/40 -mx-6 -mb-6 px-6 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <i className="fa-solid fa-shield-check text-emerald-500 text-sm" />
              <span>Tailored digital solutions, rapid delivery & full-cycle engineering</span>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                onClick={() => setServicesOpen(false)}
                className="font-semibold text-[#1559D6] dark:text-blue-400 hover:underline inline-flex items-center gap-1"
              >
                <span>Request Custom Proposal Scope</span>
                <i className="fa-solid fa-arrow-right text-[10px]" />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              if (item.label === "Services") {
                return (
                  <div key={item.label}>
                    <div className="flex items-center justify-between py-2 text-[15px] font-semibold text-[#111A4A] dark:text-slate-200">
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={isActive ? "text-[#1559D6] dark:text-blue-400" : ""}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        aria-label="Toggle services list"
                      >
                        <i
                          className={`fa-solid fa-chevron-down text-xs transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180 text-[#1559D6] dark:text-blue-400" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {mobileServicesOpen && (
                      <div className="pl-3 pr-1 py-2 space-y-1.5 border-l-2 border-blue-100 dark:border-slate-800 ml-2 mb-2 max-h-60 overflow-y-auto">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.id}
                            to="/services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-2 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-[#1559D6] dark:hover:text-blue-400"
                          >
                            <i className={`fa-solid ${s.icon} text-[11px] text-blue-500 w-4`} />
                            <span className="truncate">{s.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2 text-[15px] font-semibold transition-colors ${
                    isActive ? "text-[#1559D6] dark:text-blue-400" : "text-[#111A4A] dark:text-slate-200"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex h-[44px] items-center justify-center gap-2 rounded-full bg-[#1559D6] text-[14px] font-semibold text-white shadow-md shadow-blue-500/20 active:scale-[0.98] transition-transform"
            >
              Get In Touch →
            </Link>

            {/* Client-Friendly Mobile Quick Actions */}
            <div className="pt-3 border-t border-gray-100 dark:border-slate-800 grid grid-cols-3 gap-2 mt-2">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 text-[11px] font-semibold hover:text-[#1559D6] transition-colors"
                aria-label="Direct Phone Call"
              >
                <i className="fa-solid fa-phone text-[#1559D6] text-xs mb-1" />
                <span>Call Us</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsappNumber}?text=Hello%20Prism%20team`}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold hover:bg-emerald-100 transition-colors"
                aria-label="Direct WhatsApp Chat"
              >
                <i className="fa-brands fa-whatsapp text-sm mb-1" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 text-[11px] font-semibold hover:text-[#1559D6] transition-colors"
                aria-label="Send Email"
              >
                <i className="fa-solid fa-envelope text-[#1559D6] text-xs mb-1" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;