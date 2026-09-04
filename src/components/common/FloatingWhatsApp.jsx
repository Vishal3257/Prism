import { COMPANY } from '../../data/companyData'

export default function FloatingWhatsApp() {
  const handleClick = () => {
    const text = encodeURIComponent('Hello Prism team, I would like to inquire about your digital & AI software services.')
    window.open(`https://wa.me/${COMPANY.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-5 right-5 z-40 flex items-center group">
      {/* Tooltip / Label */}
      <span className="hidden sm:inline-block mr-2.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 shadow-lg border border-slate-200/80 dark:border-slate-800 opacity-95 group-hover:opacity-100 transition-opacity">
        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
        Chat with Us
      </span>

      {/* Floating Button */}
      <button
        type="button"
        onClick={handleClick}
        aria-label="Chat on WhatsApp with Prism Infotech"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center text-2xl shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
      >
        <i className="fa-brands fa-whatsapp text-2xl" />
      </button>
    </aside>
  )
}
