import { useState, useRef, useMemo, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { COMPANY } from '../../data/companyData'

// const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
// const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID
// const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const JOB_ROLES = [
  'UI/UX Designer',
  'Digital Marketing Executive',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'React.js Developer',
  'Django Developer',
  'Node.js Developer',
  'DevOps Engineer',
  'Database Engineer',
  'Internship',
  'Other',
]

const inputClass =
  'font-satoshi w-full rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2 text-xs sm:text-sm text-[#0B1220] placeholder:text-slate-400 focus:border-[#2563EB] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2563EB] dark:border-slate-700/80 dark:bg-[#0A1220] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-[#3B82F6] dark:focus:ring-[#3B82F6] transition-colors'

const labelClass =
  'font-satoshi mb-1 block text-xs font-semibold text-[#0B1220] dark:text-slate-200'

const STATS = [
  { value: '20+', label: 'Team members' },
  { value: '50+', label: 'Projects done' },
  { value: '100%', label: 'Growth mindset' },
]

export default function CareerHero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    location: '',
    role: '',
    message: '',
  })
  const [resumeFile, setResumeFile] = useState(null)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef(null)

  // Auto-select role when triggered from job openings section
  useEffect(() => {
    const handleRoleSelect = (e) => {
      const { role } = e.detail || {}
      if (role) {
        setFormData((prev) => ({ ...prev, role }))
        const formEl = document.getElementById('career-apply-form')
        if (formEl) {
          formEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }
    }
    window.addEventListener('prism:select-job-role', handleRoleSelect)
    return () => window.removeEventListener('prism:select-job-role', handleRoleSelect)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status.message) setStatus({ type: '', message: '' })
  }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      setStatus({ type: 'error', message: 'Resume file size should be less than 5MB.' })
      return
    }
    setResumeFile(file)
    setStatus({ type: '', message: '' })
  }

  const handleRemoveFile = (e) => {
    e.stopPropagation()
    setResumeFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your full name.' })
      return
    }
    if (formData.name.trim().length < 2) {
      setStatus({ type: 'error', message: 'Name must be at least 2 characters.' })
      return
    }
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email address.' })
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' })
      return
    }
    if (!formData.contact.trim()) {
      setStatus({ type: 'error', message: 'Please enter your contact number.' })
      return
    }
    if (!/^[+0-9\s\-()]{7,20}$/.test(formData.contact.trim())) {
      setStatus({ type: 'error', message: 'Please enter a valid phone number (at least 7 digits).' })
      return
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error('EmailJS configuration error: Missing environment variables.')
      setStatus({
        type: 'error',
        message:
          'Email service configuration is not set in environment. Please apply via WhatsApp or contact contact.prisminfotech@gmail.com.',
      })
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    const resumeInfo = resumeFile
      ? `${resumeFile.name} (${(resumeFile.size / 1024).toFixed(1)} KB)`
      : 'Not uploaded via form'

    // Formatted candidate dossier ensuring complete info delivery without non-ASCII emojis
    const formattedApplicationDetails = [
      `===========================================`,
      `NEW JOB APPLICATION - PRISM INFOTECH`,
      `===========================================`,
      `Candidate Name  : ${formData.name.trim()}`,
      `Email Address   : ${formData.email.trim()}`,
      `Contact / Phone : ${formData.contact.trim()}`,
      `Location        : ${formData.location.trim() || 'Not specified'}`,
      `Desired Role    : ${formData.role || 'General Application'}`,
      `Resume File     : ${resumeInfo}`,
      ``,
      `Candidate Message / Portfolio Links:`,
      `${formData.message.trim() || 'No additional note provided'}`,
      `===========================================`,
    ].join('\n')

    const templateParams = {
      // Standard personal names
      name: formData.name.trim(),
      from_name: formData.name.trim(),
      user_name: formData.name.trim(),

      // Standard emails & reply-to
      email: formData.email.trim(),
      from_email: formData.email.trim(),
      user_email: formData.email.trim(),
      reply_to: formData.email.trim(),

      // Contact & location
      phone: formData.contact.trim(),
      phone_number: formData.contact.trim(),
      contact: formData.contact.trim(),
      location: formData.location.trim() || 'Not provided',
      city: formData.location.trim() || 'Not provided',

      // Role / service mapping
      role: formData.role || 'General Application',
      job_role: formData.role || 'General Application',
      position: formData.role || 'General Application',
      service: `Job Application: ${formData.role || 'General Application'}`,
      selected_service: `Job Application: ${formData.role || 'General Application'}`,
      company: 'Job Applicant',
      company_name: 'Job Applicant',

      // Resume info
      resume: resumeInfo,
      resume_name: resumeInfo,

      // Complete candidate dossier
      message: formattedApplicationDetails,
      project_details: formattedApplicationDetails,
      notes: formData.message.trim() || 'No additional note provided',

      // Routing info
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
        message:
          'Application submitted successfully! Our recruitment team will review your profile and contact you shortly.',
      })
      setFormData({ name: '', email: '', contact: '', location: '', role: '', message: '' })
      setResumeFile(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
    } catch (err) {
      console.error('EmailJS Career application error:', err)
      const errorMsg = err?.text || err?.message || ''
      setStatus({
        type: 'error',
        message: errorMsg
          ? `Failed to send application (${errorMsg}). Please try again or apply directly via WhatsApp / email (contact.prisminfotech@gmail.com).`
          : 'Failed to send application. Please try again or apply directly via WhatsApp / email (contact.prisminfotech@gmail.com).',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const whatsappUrl = useMemo(() => {
    const text =
      `*Job Application - Prism Infotech*\n\n` +
      `👤 *Name:* ${formData.name || 'Not provided'}\n` +
      `📧 *Email:* ${formData.email || 'Not provided'}\n` +
      `📱 *Contact:* ${formData.contact || 'Not provided'}\n` +
      `📍 *Location:* ${formData.location || 'Not provided'}\n` +
      `💼 *Role:* ${formData.role || 'General Application'}\n` +
      `📄 *Resume:* ${resumeFile ? resumeFile.name : 'Attached on request'}\n` +
      `💬 *Note:* ${formData.message || 'Looking forward to hearing from you!'}`
    return `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`
  }, [formData, resumeFile])

  const handleApplyWhatsApp = () => window.open(whatsappUrl, '_blank')

  return (
    <section
      data-cursor="hero"
      className="relative isolate overflow-hidden bg-[#F7F9FC] dark:bg-[#060B14] py-8 sm:py-10 lg:py-12 transition-colors duration-300"
    >
      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-50 dark:opacity-25
          [background-image:linear-gradient(to_right,rgba(148,163,184,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.15)_1px,transparent_1px)]
          [background-size:32px_32px]"
      />

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 -z-10 h-72 w-72 rounded-full bg-[#2563EB]/10 dark:bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-72 w-72 rounded-full bg-[#35B8A5]/12 dark:bg-teal-500/15 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-2">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 xl:gap-8">
          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col justify-start lg:-mt-4 xl:-mt-6">
            {/* Eyebrow badge */}
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="font-satoshi inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-semibold text-[#2563EB] shadow-xs dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-300">
                Careers at Prism
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-general font-light text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.025em] text-[#0B1220] dark:text-[#F8FAFC]">
              Join our team <br className="hidden sm:inline" />
              <span className="text-gradient font-light">& let&apos;s build</span>{' '}
              something great.
            </h1>

            {/* Supporting copy */}
            <p className="font-satoshi font-light mt-4 sm:mt-5 max-w-lg text-base sm:text-lg leading-relaxed text-[#475569] dark:text-[#B8C2D1]">
              Be part of a collaborative engineering team where innovation, curiosity, and rapid
              growth thrive. Work on impactful digital products, solve challenging problems, and
              fast-track your career.
            </p>

            {/* Stats row */}
            <div className="mt-6 sm:mt-8 grid max-w-lg grid-cols-3 divide-x divide-slate-200 border-y border-slate-200 py-3.5 dark:divide-slate-800 dark:border-slate-800">
              {STATS.map(({ value, label }) => (
                <div key={label} className="px-3 first:pl-0 first:pr-4 last:pr-0 last:pl-4">
                  <p className="font-number font-space text-2xl sm:text-3xl font-bold tracking-tight text-[#0B1220] dark:text-[#F8FAFC]">
                    {value}
                  </p>
                  <p className="font-['Outfit'] mt-1 text-[11px] sm:text-xs font-semibold text-[#64748B] dark:text-[#77859A]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT FORM CONTAINER ================= */}
          <div id="career-apply-form" className="relative w-full max-w-[430px] mx-auto lg:ml-auto lg:mr-0 scroll-mt-24">
            <div className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-[#2563EB]/15 to-[#35B8A5]/15 blur-lg" />

            <div className="rounded-2xl border border-slate-200/90 bg-white/95 p-5 sm:p-6 shadow-xl shadow-slate-900/5 backdrop-blur-md dark:border-slate-800 dark:bg-[#101A2B]/95 dark:shadow-black/40">
              {/* Form header */}
              <div className="mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <span className="font-satoshi text-[11px] font-semibold text-[#2563EB] dark:text-blue-400">
                      We&apos;re hiring
                    </span>
                  </div>
                  <span className="font-satoshi text-[11px] font-medium text-[#64748B] dark:text-[#77859A]">
                    Quick apply
                  </span>
                </div>

                <h2 className="font-general font-light mt-1.5 text-xl sm:text-2xl tracking-[-0.025em] text-[#0B1220] dark:text-[#F8FAFC]">
                  Let&apos;s connect
                </h2>
                <p className="font-satoshi font-light mt-1 text-xs sm:text-sm text-[#475569] dark:text-[#77859A]">
                  Tell us about your background and the role you are looking for.
                </p>
              </div>

              {status.message && (
                <div
                  role="alert"
                  className={`font-satoshi mb-3.5 flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                    status.type === 'error'
                      ? 'border border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-300'
                      : 'border border-teal-200 bg-teal-50 text-teal-800 dark:border-teal-900/50 dark:bg-teal-950/40 dark:text-teal-300'
                  }`}
                >
                  <i
                    className={`fa-solid ${
                      status.type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'
                    } text-sm`}
                  />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
                {/* Name & Email */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="career-name" className={labelClass}>
                      Name <span className="text-[#2563EB] dark:text-blue-400">*</span>
                    </label>
                    <input
                      id="career-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="career-email" className={labelClass}>
                      Email <span className="text-[#2563EB] dark:text-blue-400">*</span>
                    </label>
                    <input
                      id="career-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Contact & Location */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label htmlFor="career-contact" className={labelClass}>
                      Contact <span className="text-[#2563EB] dark:text-blue-400">*</span>
                    </label>
                    <input
                      id="career-contact"
                      name="contact"
                      type="tel"
                      required
                      value={formData.contact}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="career-location" className={labelClass}>
                      Location
                    </label>
                    <input
                      id="career-location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, State"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Job role */}
                <div>
                  <label htmlFor="career-role" className={labelClass}>
                    Desired role
                  </label>
                  <div className="relative">
                    <select
                      id="career-role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none pr-8`}
                    >
                      <option value="">Select a job role</option>
                      {JOB_ROLES.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                    <i className="fa-solid fa-chevron-down pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 dark:text-slate-500" />
                  </div>
                </div>

                {/* Resume upload */}
                <div>
                  <label htmlFor="career-resume" className={labelClass}>
                    Resume / Portfolio{' '}
                    <span className="text-[#64748B] dark:text-[#77859A] font-normal">
                      (PDF, DOCX &lt;5MB)
                    </span>
                  </label>

                  <label
                    htmlFor="career-resume"
                    className={`flex w-full min-w-0 cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed px-3 py-2 transition-all ${
                      resumeFile
                        ? 'border-[#35B8A5] bg-[#35B8A5]/5 dark:border-teal-500/60 dark:bg-teal-950/20'
                        : 'border-slate-300 bg-slate-50/50 hover:border-[#2563EB] hover:bg-slate-50 dark:border-slate-700/80 dark:bg-[#0A1220]/60 dark:hover:border-blue-500'
                    }`}
                  >
                    <div className="flex min-w-0 flex-1 items-center gap-2 overflow-hidden">
                      <i
                        className={`fa-solid ${
                          resumeFile ? 'fa-file-pdf text-[#35B8A5]' : 'fa-paperclip text-[#2563EB] dark:text-blue-400'
                        } text-sm shrink-0`}
                      />
                      <span
                        title={resumeFile ? resumeFile.name : undefined}
                        className="font-satoshi block min-w-0 flex-1 truncate text-xs font-medium text-[#475569] dark:text-slate-300"
                      >
                        {resumeFile ? resumeFile.name : 'Upload your resume'}
                      </span>
                    </div>

                    {resumeFile ? (
                      <button
                        type="button"
                        onClick={handleRemoveFile}
                        aria-label="Remove resume file"
                        className="shrink-0 text-xs text-rose-500 hover:text-rose-600 transition-colors p-1"
                      >
                        <i className="fa-solid fa-xmark" />
                      </button>
                    ) : (
                      <span className="font-satoshi shrink-0 rounded bg-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        Browse
                      </span>
                    )}
                  </label>

                  <input
                    ref={fileInputRef}
                    id="career-resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="career-message" className={labelClass}>
                    Message / Highlights
                  </label>
                  <textarea
                    id="career-message"
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Brief intro or link to your GitHub / LinkedIn / Portfolio..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-satoshi group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2563EB] to-[#35B8A5] py-2.5 px-4 text-xs sm:text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:from-[#1d4ed8] hover:to-[#2e9f8f] hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-circle-notch animate-spin text-xs" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit application</span>
                      <i className="fa-solid fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {/* WhatsApp quick link */}
                <div className="pt-1 text-center">
                  <button
                    type="button"
                    onClick={handleApplyWhatsApp}
                    className="font-satoshi inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    <i className="fa-brands fa-whatsapp text-xs" />
                    <span>Or apply instantly via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}