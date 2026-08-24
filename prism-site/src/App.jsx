import React, { useState, useEffect, useRef, useCallback, createContext, useContext } from 'react';
import './prism.css';

// ---------- CONFIGURATION ----------
const COMPANY = {
  name: 'Prism Infotech',
  tagline: 'AI-POWERED DEVELOPMENT STUDIO · KOTA, RAJASTHAN',
  email: 'contact.prisminfotech@gmail.com',
  phone: '+91 8239239239',
  whatsappNumber: '918239239239', // without +
  address: 'Kota, Rajasthan, India',
  logoText: 'PI',
};

const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/prism-infotech-solution/',
  whatsapp: `https://wa.me/${COMPANY.whatsappNumber}`,
  instagram: 'https://www.instagram.com/prisminfotechsolution/',
  telegram: 'https://t.me/Software84747',
};

const WHATSAPP_NUMBER = COMPANY.whatsappNumber;

// Service data
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
];

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
];

const TESTIMONIALS = [
  { id: 1, name: 'Henry King', company: 'US', rating: 5, text: 'Great cooperation and fast delivery. The team understood our needs and delivered an excellent result.', avatar: 'https://i.pravatar.cc/100?img=12' },
  { id: 2, name: 'Wladimir Morsakov', company: 'Germany', rating: 5, text: 'Good cooperation & fast delivery.', avatar: 'https://i.pravatar.cc/100?img=13' },
];

const PROJECTS = [
  { id: 1, name: 'OdooFlow ERP', category: 'Odoo', tech: ['Odoo', 'Python', 'PostgreSQL'], desc: 'A unified sales, inventory, and finance workspace for a multi-location distributor.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85' },
  { id: 2, name: 'FieldOps 360', category: 'Odoo', tech: ['Odoo', 'Python', 'MySQL'], desc: 'Operations automation that connects field teams, service tickets, and live reporting.', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85' },
  { id: 3, name: 'KroMeta', category: 'Blockchain', tech: ['Blockchain', 'React', 'Node.js'], desc: 'A modern blockchain ecosystem focused on secure digital ownership and community growth.', image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=900&q=85' },
  { id: 4, name: 'Mooning Monkey', category: 'Blockchain', tech: ['Web3', 'React', 'Node.js'], desc: 'A playful Web3 website with an immersive community-first digital experience.', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=85', url: 'https://mooning-monkey.vercel.app/' },
  { id: 5, name: 'QuickBite', category: 'App', tech: ['React Native', 'Firebase'], desc: 'A food delivery app built around fast discovery, live order updates, and easy checkout.', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85' },
  { id: 6, name: 'Cartly', category: 'App', tech: ['Flutter', 'Supabase'], desc: 'A clean e-commerce app for browsing products, saving favorites, and managing orders.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85' },
  { id: 7, name: 'BrightSmile Dental', category: 'Web', tech: ['Next.js', 'UI/UX'], desc: 'A trustworthy dental website designed to turn local searches into appointment inquiries.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=85' },
  { id: 8, name: 'SunGrid Energy', category: 'Web', tech: ['React', 'Node.js', 'SEO'], desc: 'A high-converting solar website explaining clean-energy solutions with clear lead journeys.', image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85' },
];

// ---------- CONTEXT / THEME ----------
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored === 'dark';
  });
  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);
  const toggle = () => setDark(prev => !prev);
  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}

// Simple Brand logo fallback component (use public/prismlogo.png if you add it)
function BrandLogo({ size = 40 }) {
  // If you add an image to public/prismlogo.png, switch to <img src="/prismlogo.png" />
  const style = {
    width: size,
    height: size,
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#2563eb',
    color: '#fff',
    fontWeight: 800,
    fontSize: size * 0.45,
  };
  return <div className="brand-logo" style={style} aria-hidden>{COMPANY.logoText}</div>;
}

// ---------- COMPONENTS ----------

function Navbar() {
  const { dark, toggle } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = ['Home', 'About', 'Services', 'Technologies', 'Testimonials', 'Contact'];
  const scrollToSection = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
          <BrandLogo size={40} />
          <span className="font-bold text-lg">{COMPANY.name}</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(link => (
            <button key={link} onClick={() => scrollToSection(link)} className="hover:text-primary transition-colors">
              {link}
            </button>
          ))}
          <button onClick={toggle} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button onClick={() => scrollToSection('contact')} className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm hover:shadow-lg transition-all">
            Get Started
          </button>
        </nav>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={toggle} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            <i className={`fa-solid ${dark ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass px-4 py-4 flex flex-col gap-3 text-center">
          {navLinks.map(link => (
            <button key={link} onClick={() => scrollToSection(link)} className="py-2 hover:text-primary transition-colors">
              {link}
            </button>
          ))}
          <button onClick={() => { scrollToSection('contact'); setIsOpen(false); }} className="bg-gradient-primary text-white px-4 py-2 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

function OrbitCircle() {
  const initialWidth = typeof window !== 'undefined' ? window.innerWidth : 1024;
  const [radius, setRadius] = useState(() => Math.min(170, initialWidth <= 640 ? 340 * 0.32 : initialWidth * 0.37));
  const containerRef = useRef(null);
  const orbitServices = ['Website Development', 'Mobile App Development', 'Odoo ERP Solutions', 'Blockchain Technology', 'Digital Marketing & SEO'];
  const displayNames = {
    'Website Development': 'Website Dev',
    'Mobile App Development': 'Mobile App Dev',
    'Odoo ERP Solutions': 'Odoo ERP',
    'Blockchain Technology': 'Blockchain',
    'Digital Marketing & SEO': 'Digital Marketing',
  };
  const items = SERVICES.filter(service => orbitServices.includes(service.name)).map(s => ({ name: displayNames[s.name], icon: s.icon }));
  const itemHalf = initialWidth <= 640 ? 31 : 38;

  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        setRadius(Math.min(170, width * (width <= 640 ? 0.32 : 0.37)));
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const angles = items.map((_, i) => (i / items.length) * 2 * Math.PI - Math.PI / 2);

  return (
    <div className="orbit-container" ref={containerRef}>
      <div className="orbit-ring" />
      <div className="orbit-ring-inner" />
      <div className="orbit-items">
        {items.map((item, idx) => {
          const angle = angles[idx];
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <div
              key={idx}
              className="orbit-item"
              style={{ transform: `translate(${x - itemHalf}px, ${y - itemHalf}px)`, transformOrigin: 'center', borderColor: 'rgba(96, 165, 250, 0.62)' }}
            >
              <div className="orbit-item-content">
                <i className={`fa-solid ${item.icon}`} />
                <span className="text-[10px] leading-tight">{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="orbit-center">
        <BrandLogo size={56} />
        <div className="logo-text">{COMPANY.name}</div>
      </div>
    </div>
  );
}

function Stats() {
  const stats = [
    { label: 'Projects Delivered', value: 50, suffix: '+' },
    { label: 'Happy Clients', value: 30, suffix: '+' },
    { label: 'Digital Services', value: 10, suffix: '+' },
    { label: 'Years Experience', value: 3, suffix: '+' },
  ];
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        stats.forEach((s, i) => {
          let start = 0;
          const end = s.value;
          const duration = 1500;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[i] = Math.floor(start);
              return newCounts;
            });
          }, 16);
        });
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section ref={ref} className="py-12 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-gradient">{counts[idx]}{s.suffix}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Building Digital Experiences <br /><span className="text-gradient">That Drive Growth</span></h2>
            <p className="text-muted-foreground mb-6">We combine technology, creativity, marketing, strategy, and business understanding to deliver solutions that make an impact.</p>
            <ul className="grid grid-cols-2 gap-3">
              <li className="flex items-center gap-2"><i className="fa-solid fa-check-circle text-primary" /> Client-focused solutions</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check-circle text-primary" /> Modern technologies</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check-circle text-primary" /> Scalable architecture</li>
              <li className="flex items-center gap-2"><i className="fa-solid fa-check-circle text-primary" /> Performance-focused</li>
            </ul>
          </div>
          <div className="relative">
            <div className="bg-gradient-primary p-1 rounded-2xl shadow-xl">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85" alt="Digital development workspace" className="rounded-2xl w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our <span className="text-gradient">Digital Services</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(service => (
            <div key={service.id} className="service-card bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-primary/30">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl mb-4"><i className={`fa-solid ${service.icon}`} /></div>
              <h3 className="font-bold text-lg mb-2">{service.name}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
              <div className="mt-4 text-primary"><i className="fa-solid fa-arrow-right" /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Technologies() {
  const solidIcons = new Set(['fa-arrow-right', 'fa-database', 'fa-leaf', 'fa-fire', 'fa-mobile-button', 'fa-mobile-screen', 'fa-chart-simple', 'fa-magnifying-glass', 'fa-code-branch', 'fa-cloud']);
  return (
    <section id="technologies" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Technologies <span className="text-gradient">We Work With</span></h2>
        <div className="flex flex-wrap justify-center gap-4">
          {TECHNOLOGIES.map((tech, idx) => (
            <span key={idx} tabIndex="0" className="tech-chip px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-2 text-sm" style={{ ['--tech-color']: tech.color }}>
              <i className={`${solidIcons.has(tech.icon) ? 'fa-solid' : 'fa-brands'} ${tech.icon} tech-icon`} />
              <span>{tech.name}</span>
              <span className="tech-tooltip" role="tooltip">{tech.name} stack</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    { icon: 'fa-microchip', title: 'Modern Technology', desc: 'We use the latest tools and frameworks.' },
    { icon: 'fa-users', title: 'Experienced Team', desc: 'Our team has years of industry expertise.' },
    { icon: 'fa-comments', title: 'Transparent Communication', desc: 'We keep you informed at every step.' },
    { icon: 'fa-expand', title: 'Scalable Solutions', desc: 'Built to grow with your business.' },
    { icon: 'fa-clock', title: 'Fast Delivery', desc: 'We respect your timelines.' },
    { icon: 'fa-headset', title: 'Long-Term Support', desc: 'We are here for you after launch.' },
  ];
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why <span className="text-gradient">Choose Us?</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all">
              <div className="text-3xl text-primary mb-3"><i className={`fa-solid ${f.icon}`} /></div>
              <h3 className="font-bold text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { step: '01', title: 'Discover', desc: "Understand the client's business and requirements." },
    { step: '02', title: 'Strategy', desc: 'Create the right technical and marketing strategy.' },
    { step: '03', title: 'Build', desc: 'Design and develop the solution.' },
    { step: '04', title: 'Grow', desc: 'Launch, optimize and continuously improve.' },
  ];
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our <span className="text-gradient">Work Process</span></h2>
        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((s, idx) => (
            <div key={idx} className="relative p-6 rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="text-4xl font-bold text-primary/20 mb-2">{s.step}</div>
              <h3 className="font-bold text-xl">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              {idx < steps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const [activeTab, setActiveTab] = useState('All');
  const projectTabs = ['All', 'Odoo', 'Blockchain', 'App', 'Web'];
  const techIcons = { Odoo: 'fa-cubes', Python: 'fa-python', PostgreSQL: 'fa-database', MySQL: 'fa-database', Ethereum: 'fa-link', Blockchain: 'fa-link', Web3: 'fa-link', React: 'fa-react', 'Node.js': 'fa-node-js', 'React Native': 'fa-mobile-screen', Flutter: 'fa-mobile-screen', Supabase: 'fa-fire', 'Next.js': 'fa-arrow-right', 'UI/UX': 'fa-pen-ruler', SEO: 'fa-magnifying-glass' };
  const solidTechIcons = new Set(['fa-cubes', 'fa-database', 'fa-link', 'fa-mobile-screen', 'fa-fire', 'fa-arrow-right', 'fa-pen-ruler', 'fa-magnifying-glass']);
  const visibleProjects = activeTab === 'All' ? PROJECTS : PROJECTS.filter(project => project.category === activeTab);
  return (
    <section id="projects" className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured <span className="text-gradient">Projects</span></h2>
        <div className="project-tabs" role="tablist" aria-label="Project categories">
          {projectTabs.map(tab => (
            <button key={tab} type="button" role="tab" aria-selected={activeTab === tab} className={`project-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProjects.map(proj => (
            <div key={proj.id} className="project-card rounded-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
              <div className="project-media">
                {proj.url ? <a href={proj.url} target="_blank" rel="noreferrer" className="project-media-link" aria-label={`Open ${proj.name} website`}><img src={proj.image} alt={`${proj.name} project preview`} /></a> : <img src={proj.image} alt={`${proj.name} project preview`} />}
                <span className="project-category">{proj.category}</span>
              </div>
              <div className="p-4">
                <h3 className="font-bold">{proj.name}</h3>
                <div className="flex gap-2 mt-2 flex-wrap">{proj.tech.map(t => <span key={t} className="project-tech text-xs px-2 py-1 rounded-full inline-flex items-center gap-1"><i className={`${solidTechIcons.has(techIcons[t]) ? 'fa-solid' : 'fa-brands'} ${techIcons[t] || 'fa-code'} text-[11px]`} />{t}</span>)}</div>
                <p className="text-sm mt-2">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  useEffect(() => { const timer = setInterval(next, 5000); return () => clearInterval(timer); }, []);
  const t = TESTIMONIALS[current];
  return (
    <section id="testimonials" className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-8"><span className="text-gradient">Testimonials</span></h2>
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex justify-center mb-4"><img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-primary" /></div>
          <div className="flex justify-center text-yellow-400 text-xl mb-2">{Array(t.rating).fill('★').join('')}{Array(5 - t.rating).fill('☆').join('')}</div>
          <p className="text-lg italic">"{t.text}"</p>
          <p className="mt-4 font-bold">{t.name}</p>
          <p className="text-sm text-muted-foreground">{t.company}</p>
          <div className="flex justify-center gap-4 mt-6"><button onClick={prev} className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"><i className="fa-solid fa-chevron-left" /></button><button onClick={next} className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"><i className="fa-solid fa-chevron-right" /></button></div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16 bg-gradient-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
        <p className="text-lg mb-6 opacity-90">Let's turn your idea into a powerful digital experience.</p>
        <div className="flex flex-wrap justify-center gap-4"><button className="bg-white text-primary px-8 py-3 rounded-full hover:shadow-xl transition-all hover:scale-105">Start a Project</button><button className="border border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-all hover:scale-105">Talk to Us</button></div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState(null);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); const { name, email, phone, company, service, message } = form; const txt = `Hello, I am interested in your services.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nService: ${service}\nMessage: ${message}`; const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(txt)}`; window.open(url, '_blank'); setStatus('Redirecting to WhatsApp...'); setTimeout(() => setStatus(null), 3000); };
  return (
    <section id="contact" className="py-16 bg-gradient-subtle">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Get In <span className="text-gradient">Touch</span></h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80" />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80" />
            <input name="company" placeholder="Company" value={form.company} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80" />
          </div>
          <select name="service" value={form.service} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 w-full"><option value="">Select Service</option>{SERVICES.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}</select>
          <textarea name="message" placeholder="Your Message" rows="4" value={form.message} onChange={handleChange} className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 w-full" />
          <button type="submit" className="w-full bg-gradient-primary text-white py-3 rounded-full hover:shadow-lg transition-all">Send Inquiry via WhatsApp</button>
          {status && <p className="text-center text-primary">{status}</p>}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  const quickLinks = ['Home', 'About', 'Services', 'Technologies', 'Testimonials', 'Contact'];
  const serviceLinks = SERVICES.map(s => s.name);
  return (
    <footer className="bg-gray-900 text-white dark:bg-black pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4"><BrandLogo size={40} /><span className="font-bold">{COMPANY.name}</span></div>
            <p className="text-sm text-gray-400">{COMPANY.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">{quickLinks.map(link => <li key={link}><a href={`#${link.toLowerCase()}`} className="hover:text-white transition-colors">{link}</a></li>)}</ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">{serviceLinks.slice(0,6).map(s => <li key={s}>{s}</li>)}</ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><i className="fa-solid fa-envelope mr-2" />{COMPANY.email}</li>
              <li><i className="fa-solid fa-phone mr-2" />{COMPANY.phone}</li>
              <li><i className="fa-solid fa-location-dot mr-2" />{COMPANY.address}</li>
              <li><i className="fa-brands fa-whatsapp mr-2" /><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank">WhatsApp</a></li>
            </ul>
            <div className="flex gap-4 mt-4 text-xl"><a href={SOCIAL_LINKS.linkedin} target="_blank" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" /></a><a href={SOCIAL_LINKS.whatsapp} target="_blank" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" /></a><a href={SOCIAL_LINKS.instagram} target="_blank" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a><a href={SOCIAL_LINKS.telegram} target="_blank" aria-label="Telegram @Software84747"><i className="fa-brands fa-telegram" /></a></div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors">
        <Navbar />
        <section id="home" className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/5 rounded-full blur-2xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="inline-block bg-gradient-subtle px-4 py-1 rounded-full text-sm font-medium text-primary border border-primary/10">Digital Solutions • Marketing • Technology</span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 leading-tight">Transform Your Ideas <br /><span className="text-gradient">Into Digital Experiences</span></h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">Web development • Mobile apps • Digital marketing • SEO • UI/UX • Software • E-commerce • Branding</p>
                <div className="mt-6 flex flex-nowrap gap-2 sm:gap-4 justify-center lg:justify-start"><button className="bg-gradient-primary text-white px-4 sm:px-8 py-3 rounded-full text-sm sm:text-base whitespace-nowrap hover:shadow-xl transition-all hover:scale-105">Start Your Project</button><button className="border border-primary text-primary px-4 sm:px-8 py-3 rounded-full text-sm sm:text-base whitespace-nowrap hover:bg-primary/10 transition-all hover:scale-105">Explore Services</button></div>
              </div>
              <div className="flex justify-center"><OrbitCircle /></div>
            </div>
          </div>
        </section>
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
        <Footer />
      </div>
    </ThemeProvider>
  );
}
