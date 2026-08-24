import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import './App.css'
import prismLogo from './assets/prismlogo.png'

const COMPANY = {
  name: 'Prism Infotech',
  tagline: 'AI-POWERED DEVELOPMENT STUDIO · KOTA, RAJASTHAN',
  email: 'contact.prisminfotech@gmail.com',
  phone: '+91 8239239239',
  whatsappNumber: '918239239239',
  address: 'Kota, Rajasthan, India',
}

const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/prism-infotech-solution/',
  whatsapp: `https://wa.me/${COMPANY.whatsappNumber}`,
  instagram: 'https://www.instagram.com/prisminfotechsolution/',
  telegram: 'https://t.me/Software84747',
}

const SERVICES = [
  { id: 1, name: 'Website Development', icon: 'fa-globe', desc: 'Modern, fast and scalable websites built for businesses and brands.' },
  { id: 2, name: 'Mobile App Development', icon: 'fa-mobile-screen', desc: 'Responsive and powerful mobile applications for modern businesses.' },
  { id: 3, name: 'CRM & ERP Solutions', icon: 'fa-chart-line', desc: 'Connected business systems that streamline operations and improve growth.' },
  { id: 4, name: 'AI Chatbots', icon: 'fa-robot', desc: 'Intelligent conversational assistants that support your customers around the clock.' },
  { id: 5, name: 'AI Calling Solutions', icon: 'fa-phone-volume', desc: 'Automated voice experiences that help your team engage customers efficiently.' },
  { id: 6, name: 'AI Automation', icon: 'fa-wand-magic-sparkles', desc: 'Smart automations that reduce repetitive work and improve productivity.' },
  { id: 7, name: 'Odoo ERP Solutions', icon: 'fa-cubes', desc: 'Flexible Odoo implementations tailored to your business workflows.' },
  { id: 8, name: 'Blockchain Technology', icon: 'fa-link', desc: 'Secure and scalable blockchain solutions for modern digital products.' },
  { id: 9, name: 'Logo & Branding', icon: 'fa-paintbrush', desc: 'Distinctive brand identities that make your business memorable.' },
  { id: 10, name: 'Digital Marketing & SEO', icon: 'fa-bullhorn', desc: 'Performance-focused marketing strategies that grow your online presence.' },
]

const TECHNOLOGIES = [
  { name: 'HTML', icon: 'fa-html5', color: '#e34f26' },
  { name: 'CSS', icon: 'fa-css3-alt', color: '#1572b6' },
  { name: 'JavaScript', icon: 'fa-js', color: '#d6a800' },
  { name: 'React', icon: 'fa-react', color: '#149eca' },
  { name: 'Next.js', icon: 'fa-arrow-right', color: '#111827' },
  { name: 'Vue', icon: 'fa-vuejs', color: '#42b883' },
  { name: 'Node.js', icon: 'fa-node-js', color: '#3c873a' },
  { name: 'PHP', icon: 'fa-php', color: '#777bb4' },
  { name: 'Laravel', icon: 'fa-laravel', color: '#ff2d20' },
  { name: 'Python', icon: 'fa-python', color: '#3776ab' },
  { name: 'Django', icon: 'fa-python', color: '#0c4b33' },
  { name: 'MySQL', icon: 'fa-database', color: '#00758f' },
  { name: 'PostgreSQL', icon: 'fa-database', color: '#336791' },
  { name: 'MongoDB', icon: 'fa-leaf', color: '#47a248' },
  { name: 'Supabase', icon: 'fa-fire', color: '#3ecf8e' },
  { name: 'Firebase', icon: 'fa-fire', color: '#f58220' },
  { name: 'React Native', icon: 'fa-mobile-button', color: '#149eca' },
  { name: 'Flutter', icon: 'fa-mobile-screen', color: '#02569b' },
  { name: 'Google Ads', icon: 'fa-google', color: '#4285f4' },
  { name: 'Meta Ads', icon: 'fa-facebook', color: '#1877f2' },
  { name: 'Google Analytics', icon: 'fa-chart-simple', color: '#f9ab00' },
  { name: 'Search Console', icon: 'fa-magnifying-glass', color: '#34a853' },
  { name: 'Git', icon: 'fa-git-alt', color: '#f05032' },
  { name: 'GitHub', icon: 'fa-github', color: '#24292f' },
  { name: 'Vercel', icon: 'fa-code-branch', color: '#111827' },
  { name: 'Netlify', icon: 'fa-cloud', color: '#00a89d' },
  { name: 'AWS', icon: 'fa-aws', color: '#ff9900' },
]

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Henry King',
    company: 'US',
    rating: 5,
    text: 'Great cooperation and fast delivery. The team understood our needs and delivered an excellent result.',
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    id: 2,
    name: 'Wladimir Morsakov',
    company: 'Germany',
    rating: 5,
    text: 'Good cooperation & fast delivery.',
    avatar: 'https://i.pravatar.cc/100?img=13',
  },
]

const PROJECTS = [
  { id: 1, name: 'OdooFlow ERP', category: 'Odoo', tech: ['Odoo', 'Python', 'PostgreSQL'], desc: 'A unified sales, inventory, and finance workspace for a multi-location distributor.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85' },
  { id: 2, name: 'FieldOps 360', category: 'Odoo', tech: ['Odoo', 'Python', 'MySQL'], desc: 'Operations automation that connects field teams, service tickets, and live reporting.', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85' },
  { id: 3, name: 'KroMeta', category: 'Blockchain', tech: ['Blockchain', 'React', 'Node.js'], desc: 'A modern blockchain ecosystem focused on secure digital ownership and community growth.', image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=900&q=85' },
  { id: 4, name: 'Mooning Monkey', category: 'Blockchain', tech: ['Web3', 'React', 'Node.js'], desc: 'A playful Web3 website with an immersive community-first digital experience.', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=85', url: 'https://mooning-monkey.vercel.app/' },
  { id: 5, name: 'QuickBite', category: 'App', tech: ['React Native', 'Firebase'], desc: 'A food delivery app built around fast discovery, live order updates, and easy checkout.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85' },
  { id: 6, name: 'Cartly', category: 'App', tech: ['Flutter', 'Supabase'], desc: 'A clean e-commerce app for browsing products, saving favorites, and managing orders.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85' },
  { id: 7, name: 'BrightSmile Dental', category: 'Web', tech: ['Next.js', 'UI/UX'], desc: 'A trustworthy dental website designed to turn local searches into appointment inquiries.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85' },
  { id: 8, name: 'SunGrid Energy', category: 'Web', tech: ['React', 'Node.js', 'SEO'], desc: 'A high-converting solar website explaining clean-energy solutions with clear lead journeys.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85' },
]

const ThemeContext = createContext(null)

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme')
    return stored === 'dark'
  })

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark((prev) => !prev) }}>
      {children}
    </ThemeContext.Provider>
  )
}

function useTheme() {
  return useContext(ThemeContext)
}

function BrandLogo({ large = false }) {
  return <img className={`brand-mark ${large ? 'brand-mark-lg' : ''}`} src={prismLogo} alt="Prism Infotech logo" />
}

function Navbar() {
  const { dark, toggle } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = ['Home', 'About', 'Services', 'Technologies', 'Testimonials', 'Contact']

  const scrollToSection = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-inner">
        <button type="button" className="brand-wrap" onClick={() => scrollToSection('home')}>
          <BrandLogo />
          <span className="brand-name">{COMPANY.name}</span>
        </button>

        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <button key={link} type="button" className="nav-link" onClick={() => scrollToSection(link)}>
              {link}
            </button>
          ))}
          <button type="button" className="icon-button" onClick={toggle} aria-label="Toggle theme">
            <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'}`} />
          </button>
          <button type="button" className="primary-btn nav-cta" onClick={() => scrollToSection('contact')}>
            Get Started
          </button>
        </nav>

        <div className="mobile-actions">
          <button type="button" className="icon-button" onClick={toggle} aria-label="Toggle theme">
            <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'}`} />
          </button>
          <button type="button" className="menu-button" onClick={() => setIsOpen((prev) => !prev)} aria-label="Toggle menu">
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`} />
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
        <div className="container mobile-menu-inner">
          {navLinks.map((link) => (
            <button key={link} type="button" className="nav-link mobile-link" onClick={() => scrollToSection(link)}>
              {link}
            </button>
          ))}
          <button type="button" className="primary-btn nav-cta" onClick={() => scrollToSection('contact')}>
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />
      <div className="background-glow glow-three" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Digital Solutions • Marketing • Technology</span>
          <h1>
            Transform Your Ideas <br />
            <span className="text-gradient">Into Digital Experiences</span>
          </h1>
          <p>
            Web development • Mobile apps • Digital marketing • SEO • UI/UX • Software • E-commerce • Branding
          </p>
          <div className="button-row">
            <button type="button" className="primary-btn">Start Your Project</button>
            <button type="button" className="secondary-btn">Explore Services</button>
          </div>
        </div>

        <div className="orbit-wrap">
          <OrbitCircle />
        </div>
      </div>
    </section>
  )
}

function OrbitCircle() {
  const containerRef = useRef(null)
  const [radius, setRadius] = useState(170)

  const orbitServices = ['Website Development', 'Mobile App Development', 'Odoo ERP Solutions', 'Blockchain Technology', 'Digital Marketing & SEO']
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

      <div className="orbit-center">
        <BrandLogo large />
        <div className="logo-text">{COMPANY.name}</div>
      </div>
    </div>
  )
}

function Stats() {
  const stats = [
    { label: 'Projects Delivered', value: 50, suffix: '+' },
    { label: 'Happy Clients', value: 30, suffix: '+' },
    { label: 'Digital Services', value: 10, suffix: '+' },
    { label: 'Years Experience', value: 3, suffix: '+' },
  ]

  const [counts, setCounts] = useState(stats.map(() => 0))
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return

        stats.forEach((stat, index) => {
          let start = 0
          const end = stat.value
          const duration = 1500
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              start = end
              clearInterval(timer)
            }
            setCounts((previous) => {
              const next = [...previous]
              next[index] = Math.floor(start)
              return next
            })
          }, 16)
        })

        observer.disconnect()
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="stats-section">
      <div className="container stats-grid">
        {stats.map((stat, index) => (
          <div key={stat.label} className="stat-card">
            <div className="stat-number">
              {counts[index]}
              {stat.suffix}
            </div>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="content-section">
      <div className="container about-grid">
        <div>
          <h2 className="section-title">
            Building Digital Experiences <br />
            <span className="text-gradient">That Drive Growth</span>
          </h2>
          <p className="section-copy">
            We combine technology, creativity, marketing, strategy, and business understanding to deliver solutions that make an impact.
          </p>
          <ul className="feature-list">
            <li><i className="fa-solid fa-check-circle" /> Client-focused solutions</li>
            <li><i className="fa-solid fa-check-circle" /> Modern technologies</li>
            <li><i className="fa-solid fa-check-circle" /> Scalable architecture</li>
            <li><i className="fa-solid fa-check-circle" /> Performance-focused</li>
          </ul>
        </div>

        <div className="about-photo-card">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85"
            alt="Digital development workspace"
          />
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="content-section section-muted">
      <div className="container">
        <h2 className="section-title text-center">
          Our <span className="text-gradient">Digital Services</span>
        </h2>

        <div className="services-grid">
          {SERVICES.map((service) => (
            <article key={service.id} className="service-card">
              <div className="service-icon">
                <i className={`fa-solid ${service.icon}`} />
              </div>
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
              <div className="service-arrow">
                <i className="fa-solid fa-arrow-right" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Technologies() {
  const solidIcons = new Set([
    'fa-arrow-right',
    'fa-database',
    'fa-leaf',
    'fa-fire',
    'fa-mobile-button',
    'fa-mobile-screen',
    'fa-chart-simple',
    'fa-magnifying-glass',
    'fa-code-branch',
    'fa-cloud',
  ])

  return (
    <section id="technologies" className="content-section">
      <div className="container">
        <h2 className="section-title text-center">
          Technologies <span className="text-gradient">We Work With</span>
        </h2>

        <div className="tech-list">
          {TECHNOLOGIES.map((tech, index) => (
            <span
              key={`${tech.name}-${index}`}
              className="tech-chip"
              style={{ '--tech-color': tech.color }}
              tabIndex={0}
            >
              <i className={`${solidIcons.has(tech.icon) ? 'fa-solid' : 'fa-brands'} ${tech.icon}`} />
              <span>{tech.name}</span>
              <span className="tech-tooltip">{tech.name} stack</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const features = [
    { icon: 'fa-microchip', title: 'Modern Technology', desc: 'We use the latest tools and frameworks.' },
    { icon: 'fa-users', title: 'Experienced Team', desc: 'Our team has years of industry expertise.' },
    { icon: 'fa-comments', title: 'Transparent Communication', desc: 'We keep you informed at every step.' },
    { icon: 'fa-expand', title: 'Scalable Solutions', desc: 'Built to grow with your business.' },
    { icon: 'fa-clock', title: 'Fast Delivery', desc: 'We respect your timelines.' },
    { icon: 'fa-headset', title: 'Long-Term Support', desc: 'We are here for you after launch.' },
  ]

  return (
    <section className="content-section section-muted">
      <div className="container">
        <h2 className="section-title text-center">
          Why <span className="text-gradient">Choose Us?</span>
        </h2>

        <div className="why-grid">
          {features.map((feature) => (
            <div key={feature.title} className="info-card">
              <div className="info-icon">
                <i className={`fa-solid ${feature.icon}`} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  const steps = [
    { step: '01', title: 'Discover', desc: 'Understand the client\'s business and requirements.' },
    { step: '02', title: 'Strategy', desc: 'Create the right technical and marketing strategy.' },
    { step: '03', title: 'Build', desc: 'Design and develop the solution.' },
    { step: '04', title: 'Grow', desc: 'Launch, optimize and continuously improve.' },
  ]

  return (
    <section className="content-section">
      <div className="container">
        <h2 className="section-title text-center">
          Our <span className="text-gradient">Work Process</span>
        </h2>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={step.step} className="process-card">
              <div className="process-number">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              {index < steps.length - 1 && <div className="process-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const [activeTab, setActiveTab] = useState('All')
  const projectTabs = ['All', 'Odoo', 'Blockchain', 'App', 'Web']
  const techIcons = {
    Odoo: 'fa-cubes',
    Python: 'fa-python',
    PostgreSQL: 'fa-database',
    MySQL: 'fa-database',
    Blockchain: 'fa-link',
    React: 'fa-react',
    'Node.js': 'fa-node-js',
    'React Native': 'fa-mobile-screen',
    Flutter: 'fa-mobile-screen',
    Supabase: 'fa-fire',
    'Next.js': 'fa-arrow-right',
    'UI/UX': 'fa-pen-ruler',
    SEO: 'fa-magnifying-glass',
    Web3: 'fa-link',
  }

  const visibleProjects = activeTab === 'All' ? PROJECTS : PROJECTS.filter((project) => project.category === activeTab)

  return (
    <section id="projects" className="content-section section-muted">
      <div className="container">
        <h2 className="section-title text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="project-tabs" role="tablist" aria-label="Project categories">
          {projectTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={`project-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visibleProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-media">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer" className="project-media-link" aria-label={`Open ${project.name} website`}>
                    <img src={project.image} alt={`${project.name} project preview`} />
                  </a>
                ) : (
                  <img src={project.image} alt={`${project.name} project preview`} />
                )}
                <span className="project-badge">{project.category}</span>
              </div>

              <div className="project-body">
                <h3>{project.name}</h3>
                <div className="tech-badges">
                  {project.tech.map((tech) => (
                    <span key={tech} className="project-tech">
                      <i className={`fa-solid ${techIcons[tech] || 'fa-code'}`} />
                      {tech}
                    </span>
                  ))}
                </div>
                <p>{project.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  const testimonial = TESTIMONIALS[current]

  return (
    <section id="testimonials" className="content-section">
      <div className="container testimonial-wrap">
        <h2 className="section-title text-center">
          <span className="text-gradient">Testimonials</span>
        </h2>

        <div className="testimonial-card">
          <div className="testimonial-avatar-wrap">
            <img src={testimonial.avatar} alt={testimonial.name} />
          </div>

          <div className="stars">
            {'★'.repeat(testimonial.rating)}
            {'☆'.repeat(5 - testimonial.rating)}
          </div>

          <p className="testimonial-quote">“{testimonial.text}”</p>
          <p className="testimonial-name">{testimonial.name}</p>
          <p className="testimonial-company">{testimonial.company}</p>

          <div className="testimonial-controls">
            <button type="button" className="nav-arrow" onClick={prev} aria-label="Previous testimonial">
              <i className="fa-solid fa-chevron-left" />
            </button>
            <button type="button" className="nav-arrow" onClick={next} aria-label="Next testimonial">
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-section">
      <div className="container cta-panel">
        <h2>Have a Project in Mind?</h2>
        <p>Let&apos;s turn your idea into a powerful digital experience.</p>
        <div className="cta-actions">
          <button type="button" className="primary-btn light-btn">Start a Project</button>
          <button type="button" className="secondary-btn light-btn-alt">Talk to Us</button>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (event) => {
    setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { name, email, phone, company, service, message } = form
    const text = `Hello, I am interested in your services.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nService: ${service}\nMessage: ${message}`
    const url = `https://wa.me/${COMPANY.whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setStatus('Redirecting to WhatsApp...')
    setTimeout(() => setStatus(null), 3000)
  }

  return (
    <section id="contact" className="content-section section-muted">
      <div className="container contact-wrap">
        <h2 className="section-title text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <form onSubmit={handleSubmit} className="contact-card">
          <div className="form-grid">
            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
            <input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
          </div>
          <select name="service" value={form.service} onChange={handleChange}>
            <option value="">Select Service</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          <textarea name="message" rows="4" placeholder="Your Message" value={form.message} onChange={handleChange} />
          <button type="submit" className="primary-btn submit-btn">
            Send Inquiry via WhatsApp
          </button>
          {status && <p className="status-text">{status}</p>}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  const quickLinks = ['Home', 'About', 'Services', 'Technologies', 'Testimonials', 'Contact']

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-wrap footer-brand">
            <BrandLogo />
            <span className="brand-name">{COMPANY.name}</span>
          </div>
          <p className="footer-copy">{COMPANY.tagline}</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul className="footer-links">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.id}>{service.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-links footer-contact">
            <li><i className="fa-solid fa-envelope" /> {COMPANY.email}</li>
            <li><i className="fa-solid fa-phone" /> {COMPANY.phone}</li>
            <li><i className="fa-solid fa-location-dot" /> {COMPANY.address}</li>
            <li>
              <i className="fa-brands fa-whatsapp" />
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            </li>
          </ul>
          <div className="socials">
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp" />
            </a>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noreferrer" aria-label="Telegram @Software84747">
              <i className="fa-brands fa-telegram" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
      </div>
    </footer>
  )
}

function App() {
  return (
    <ThemeProvider>
      <div className="app-shell">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <About />
          <Services />
          <Technologies />
          <WhyChooseUs />
          <Process />
          <Portfolio />
          <Testimonials />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
