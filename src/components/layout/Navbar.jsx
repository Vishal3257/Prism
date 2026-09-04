import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useTheme } from "../../context/useTheme";
import { COMPANY } from "../../data/companyData";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { dark, toggle } = useTheme();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Industries", path: "/industries" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Testimonials", path: "/testimonials" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-950/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800 shadow-[0_2px_10px_rgba(0,0,0,0.03)] transition-colors duration-300">
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

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