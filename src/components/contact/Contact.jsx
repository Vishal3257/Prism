import { useState, useEffect } from 'react'
import { COMPANY, SERVICES } from '../../data/companyData'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: 'Flexible',
    timeline: '1-2 Months',
    message: '',
  })

  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [copied, setCopied] = useState(false)

  const budgetOptions = ['Flexible', '< $1k', '$1k - $3k', '$3k - $10k', '$10k+']
  const timelineOptions = ['Urgent (< 2 wks)', '1-2 Months', '3+ Months', 'Planning']

  // Validate form fields
  const validateField = (field, value) => {
    let err = ''
    if (field === 'name') {
      if (!value.trim()) err = 'Name is required'
      else if (value.trim().length < 2) err = 'Name must be at least 2 characters'
    } else if (field === 'email') {
      if (!value.trim()) err = 'Email address is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
        err = 'Please enter a valid email address'
      }
    } else if (field === 'service') {
      if (!value) err = 'Please select a service'
    } else if (field === 'phone') {
      if (value.trim() && !/^[+0-9\s\-()]{7,20}$/.test(value.trim())) {
        err = 'Please enter a valid phone number'
      }
    }
    return err
  }

  const validateAll = () => {
    const newErrors = {
      name: validateField('name', form.name),
      email: validateField('email', form.email),
      service: validateField('service', form.service),
      phone: validateField('phone', form.phone),
    }
    setErrors(newErrors)
    return !Object.values(newErrors).some(Boolean)
  }

  // Listen to cross-component inquiries
  useEffect(() => {
    const handleInquirySelect = (e) => {
      const { service, message } = e.detail || {}
      setForm((prev) => ({
        ...prev,
        service: service || prev.service,
        message: message || prev.message,
      }))
    }
    window.addEventListener('prism:select-inquiry', handleInquirySelect)
    return () => window.removeEventListener('prism:select-inquiry', handleInquirySelect)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }))
  }

  const buildBriefText = () => {
    const { name, email, phone, company, service, budget, timeline, message } = form
    return (
      `Hello Prism Infotech,\n\n` +
      `I would like to inquire about your engineering & digital services.\n\n` +
      `👤 Name: ${name}\n` +
      `📧 Email: ${email}\n` +
      `📱 Phone: ${phone || 'N/A'}\n` +
      `🏢 Company: ${company || 'N/A'}\n` +
      `🛠️ Service: ${service || 'General Inquiry'}\n` +
      `💰 Budget: ${budget}\n` +
      `⏱️ Timeline: ${timeline}\n` +
      `💬 Project Scope:\n${message || 'No additional details provided'}`
    )
  }

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, service: true, phone: true })
    if (!validateAll()) return

    const text = buildBriefText()
    const url = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setStatus('Opening WhatsApp chat...')
    setTimeout(() => setStatus(null), 4000)
  }

  const handleSendEmail = () => {
    setTouched({ name: true, email: true, service: true, phone: true })
    if (!validateAll()) return

    const subject = encodeURIComponent(`Project Inquiry: ${form.service || 'Digital Services'} - ${form.name}`)
    const body = encodeURIComponent(buildBriefText())
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`
    setStatus('Opening your default email client...')
    setTimeout(() => setStatus(null), 4000)
  }

  const handleCopyClipboard = async () => {
    const text = buildBriefText()
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch {
      // Fallback
      setStatus('Failed to copy to clipboard')
      setTimeout(() => setStatus(null), 3000)
    }
  }

  return (
    <section id="contact" className="py-10 sm:py-14 lg:py-16 bg-gradient-subtle border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Tell us about your project requirements. We prepare custom technical proposals within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmitWhatsApp}
          noValidate
          className="p-6 sm:p-10 rounded-3xl bg-white/80 dark:bg-slate-850/70 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-5"
        >
          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Your Name <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="e.g. John Doe"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'contact-name-error' : undefined}
                className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.name && touched.name
                    ? 'border-rose-500 focus:ring-rose-500/50'
                    : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                }`}
              />
              {errors.name && touched.name && (
                <p id="contact-name-error" className="text-xs text-rose-500 font-medium mt-1.5 flex items-center gap-1">
                  <i className="fa-solid fa-circle-exclamation text-[10px]" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Email Address <span className="text-rose-500">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="e.g. john@company.com"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.email && touched.email
                    ? 'border-rose-500 focus:ring-rose-500/50'
                    : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                }`}
              />
              {errors.email && touched.email && (
                <p id="contact-email-error" className="text-xs text-rose-500 font-medium mt-1.5 flex items-center gap-1">
                  <i className="fa-solid fa-circle-exclamation text-[10px]" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          {/* Phone & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Phone Number <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 transition-all ${
                  errors.phone && touched.phone
                    ? 'border-rose-500 focus:ring-rose-500/50'
                    : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
                }`}
              />
              {errors.phone && touched.phone && (
                <p id="contact-phone-error" className="text-xs text-rose-500 font-medium mt-1.5 flex items-center gap-1">
                  <i className="fa-solid fa-circle-exclamation text-[10px]" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-company" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Company / Organization <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                placeholder="Acme Technologies"
                value={form.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Service Selector */}
          <div>
            <label htmlFor="contact-service" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              Service Interested In <span className="text-rose-500">*</span>
            </label>
            <select
              id="contact-service"
              name="service"
              value={form.service}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-required="true"
              aria-invalid={!!errors.service}
              aria-describedby={errors.service ? 'contact-service-error' : undefined}
              className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 transition-all cursor-pointer ${
                errors.service && touched.service
                  ? 'border-rose-500 focus:ring-rose-500/50'
                  : 'border-slate-200 dark:border-slate-700 focus:ring-blue-500'
              }`}
            >
              <option value="">Select a Service Category</option>
              {SERVICES.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name} ({service.turnaround})
                </option>
              ))}
            </select>
            {errors.service && touched.service && (
              <p id="contact-service-error" className="text-xs text-rose-500 font-medium mt-1.5 flex items-center gap-1">
                <i className="fa-solid fa-circle-exclamation text-[10px]" />
                <span>{errors.service}</span>
              </p>
            )}
          </div>

          {/* Budget Selector Chips */}
          <div>
            <span className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              Estimated Project Budget
            </span>
            <div className="flex flex-wrap gap-2">
              {budgetOptions.map((opt) => {
                const isSelected = form.budget === opt
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, budget: opt }))}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
                    }`}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Timeline Selector Chips */}
          <div>
            <span className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              Target Launch Timeline
            </span>
            <div className="flex flex-wrap gap-2">
              {timelineOptions.map((opt) => {
                const isSelected = form.timeline === opt
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setForm((prev) => ({ ...prev, timeline: opt }))}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30'
                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400'
                    }`}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Message / Scope */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                Project Scope & Details
              </label>
              <span
                className={`text-[11px] font-medium ${
                  form.message.length > 550 ? 'text-amber-500' : 'text-slate-400'
                }`}
              >
                {form.message.length}/600 chars
              </span>
            </div>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              maxLength={600}
              placeholder="Tell us about your project goals, deliverables, specific integrations, or existing stack..."
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-3">
            <button
              type="submit"
              className="w-full bg-gradient-primary text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-lg" />
              <span>Send Inquiry via WhatsApp</span>
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleSendEmail}
                className="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <i className="fa-regular fa-envelope text-blue-500" />
                <span>Send via Email</span>
              </button>

              <button
                type="button"
                onClick={handleCopyClipboard}
                className="py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <i className={`fa-solid ${copied ? 'fa-check text-teal-500' : 'fa-copy text-blue-500'}`} />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Inquiry Brief'}</span>
              </button>
            </div>
          </div>

          {/* Live Status Toast */}
          {status && (
            <div
              role="status"
              className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-center text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-300 animate-in fade-in"
            >
              <i className="fa-solid fa-circle-info mr-1.5" />
              {status}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

