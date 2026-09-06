import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { COMPANY, SERVICES } from '../../data/companyData'

const EMAILJS_SERVICE_ID="service_y95hkk2"
const EMAILJS_TEMPLATE_ID="template_7m8oeto"
const EMAILJS_PUBLIC_KEY="tGl_BQ3_4xRvXwJZA"

export default function Contact() {
   
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState(null) // { type: 'success' | 'error' | 'info', message: string }

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

  // Handle direct EmailJS submission to company email
  const handleSubmitEmail = async (e) => {
    e.preventDefault()
    setTouched({ name: true, email: true, service: true, phone: true })
    if (!validateAll()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields marked with * before submitting.',
      })
      return
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS configuration error: Missing environment variables.')
      setStatus({
        type: 'error',
        message:
          'Email service configuration is not set in environment. Please contact us directly via WhatsApp or email.',
      })
      return
    }

    setIsSubmitting(true)
    setStatus(null)

    // Match all common template variable naming schemes used in EmailJS templates
    const templateParams = {
      name: form.name,
      from_name: form.name,
      user_name: form.name,

      email: form.email,
      from_email: form.email,
      user_email: form.email,
      reply_to: form.email,

      phone: form.phone || 'Not provided',
      phone_number: form.phone || 'Not provided',

      company: form.company || 'Not provided',
      company_name: form.company || 'Not provided',

      service: form.service,
      service_name: form.service,
      selected_service: form.service,

      message: form.message || 'No project description provided',
      project_details: form.message || 'No project description provided',

      to_email: COMPANY.email || 'contact.prisminfotech@gmail.com',
      to_name: COMPANY.name || 'Prism Infotech',
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We will get back to you within 24 hours.',
      })

      // Reset form on success
      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
      setTouched({})
      setErrors({})
    } catch (err) {
      console.error('EmailJS submit error:', err)
      const errorMsg = err?.text || err?.message || ''
      setStatus({
        type: 'error',
        message: errorMsg
          ? `Unable to send message via EmailJS (${errorMsg}). Please check your connection or contact us directly on WhatsApp.`
          : 'Unable to send message via EmailJS right now. Please check your connection or contact us directly on WhatsApp.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Optional WhatsApp quick forward
  const handleSendWhatsApp = () => {
    setTouched({ name: true, email: true, service: true, phone: true })
    if (!validateAll()) return

    const text =
      `Hello Prism Infotech,\n\n` +
      `I would like to inquire about your engineering & digital services.\n\n` +
      `👤 Name: ${form.name}\n` +
      `📧 Email: ${form.email}\n` +
      `📱 Phone: ${form.phone || 'N/A'}\n` +
      `🏢 Company: ${form.company || 'N/A'}\n` +
      `🛠️ Service: ${form.service || 'General Inquiry'}\n` +
      `💬 Project Scope:\n${form.message || 'No additional details provided'}`

    const url = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <section id="contact" className="py-2 sm:py-3 lg:py-4 bg-gradient-subtle border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Let&apos;s Connect
          </span>
          <h2 className="font-general font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mt-2 tracking-[-0.025em]">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Tell us about your project requirements. We prepare custom technical proposals within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmitEmail}
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
            {/* Primary Submit Button: Triggers EmailJS */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-primary text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <i className="fa-solid fa-circle-notch fa-spin text-lg" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane text-base" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {/* Secondary Option: WhatsApp */}
            <div>
              <button
                type="button"
                onClick={handleSendWhatsApp}
                className="py-2.5 px-4 w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-emerald-500 text-base" />
                <span>Or Chat with Us on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Feedback Status Toast */}
          {status && (
            <div
              role="status"
              className={`p-4 rounded-xl border text-xs sm:text-sm font-medium flex items-center gap-2.5 animate-in fade-in transition-all ${
                status.type === 'success'
                  ? 'bg-emerald-50 dark:bg-emerald-950/70 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/70 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200'
              }`}
            >
              <i
                className={`text-base shrink-0 ${
                  status.type === 'success'
                    ? 'fa-solid fa-circle-check text-emerald-600 dark:text-emerald-400'
                    : 'fa-solid fa-triangle-exclamation text-rose-600 dark:text-rose-400'
                }`}
              />
              <span>{status.message}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
