import { useState, useEffect } from 'react'
import { PROJECTS } from '../../data/companyData'

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeProjectId, setActiveProjectId] = useState(null)

  const projectTabs = ['All','Web','App','Blockchain','Odoo' ]

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
    Firebase: 'fa-fire',
    'Next.js': 'fa-arrow-right',
    'UI/UX': 'fa-pen-ruler',
    SEO: 'fa-magnifying-glass',
    Web3: 'fa-link',
  }

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProject(null)
    }
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  // Click outside to deactivate active project card and trigger smooth reverse slide-down
  useEffect(() => {
    if (!activeProjectId) return
    const handleOutsideClick = (e) => {
      if (!e.target.closest('#portfolio')) {
        setActiveProjectId(null)
      }
    }
    document.addEventListener('pointerdown', handleOutsideClick)
    return () => document.removeEventListener('pointerdown', handleOutsideClick)
  }, [activeProjectId])

  const handleProjectCardClick = (project) => {
    const isTouchOrMobile =
      typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth < 1024)

    if (!isTouchOrMobile) {
      // Desktop mouse: open modal directly on click
      setSelectedProject(project)
      return
    }

    // Touch / Mobile: toggle active state (bottom to top on active, reverse slide down on unactive)
    if (activeProjectId === project.id) {
      setActiveProjectId(null)
    } else {
      setActiveProjectId(project.id)
    }
  }

  const handleOpenProjectModal = (project, e) => {
    e.stopPropagation()
    setSelectedProject(project)
  }

  const filteredProjects = PROJECTS.filter((p) => {
    const matchesCategory = activeTab === 'All' || p.category === activeTab
    const query = searchQuery.trim().toLowerCase()
    if (!query) return matchesCategory

    const matchesName = p.name.toLowerCase().includes(query)
    const matchesDesc = p.desc.toLowerCase().includes(query)
    const matchesTech = p.tech.some((t) => t.toLowerCase().includes(query))
    const matchesClient = p.client?.toLowerCase().includes(query)

    return matchesCategory && (matchesName || matchesDesc || matchesTech || matchesClient)
  })

  // Count helper
  const getTabCount = (tab) => {
    if (tab === 'All') return PROJECTS.length
    return PROJECTS.filter((p) => p.category === tab).length
  }

  const handleInquireProject = (project) => {
    const serviceName =
      project.category === 'Odoo'
        ? 'Odoo ERP Solutions'
        : project.category === 'Blockchain'
        ? 'Blockchain Technology'
        : project.category === 'App'
        ? 'Mobile App Development'
        : 'Website Development'

    window.dispatchEvent(
      new CustomEvent('prism:select-inquiry', {
        detail: {
          service: serviceName,
          message: `Hello Prism team, I saw your ${project.name} project and would like to explore a similar solution.`,
        },
      })
    )
    setSelectedProject(null)
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="projects"
      className="py-3 sm:py-4 lg:py-5 bg-gradient-subtle border-y border-slate-200/60 dark:border-slate-800/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
            Work Archive
          </span>
          <h2 className="font-general font-light text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white mt-2 tracking-[-0.025em]">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            A selection of custom enterprise platforms, mobile applications, and Web3 products delivered by our team.
          </p>
        </div>

        {/* Filter Controls: Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-nowrap lg:overflow-y-hidden overflow-x-auto sm:flex-wrap justify-start gap-2 pb-2 sm:pb-0 w-full sm:w-auto" role="tablist" aria-label="Project categories">
            {projectTabs.map((tab) => {
              const count = getTabCount(tab)
              const isActive = activeTab === tab
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    isActive
                      ? 'bg-gradient-primary text-white shadow-md shadow-blue-500/25 scale-105'
                      : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{tab}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs pointer-events-none" />
            <input
              type="search"
              aria-label="Filter projects by keyword"
              placeholder="Search tech, name, or client..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2 text-xs sm:text-sm rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                aria-label="Clear search"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs cursor-pointer p-0.5"
              >
                <i className="fa-solid fa-xmark" />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div
            role="status"
            className="text-center py-16 px-4 rounded-3xl bg-white/50 dark:bg-slate-850/40 border border-dashed border-slate-300 dark:border-slate-700 max-w-lg mx-auto"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl mx-auto mb-4">
              <i className="fa-solid fa-filter-circle-xmark" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">No matching projects found</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Try adjusting your search query or switching to another category.
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveTab('All')
                setSearchQuery('')
              }}
              className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors cursor-pointer shadow-sm"
            >
              <i className="fa-solid fa-arrows-rotate text-xs" />
              <span>Reset Filters</span>
            </button>
          </div>
        ) : (
          <div
            key={`${activeTab}-${searchQuery}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                style={{ animationDelay: `${Math.min(idx * 45, 360)}ms` }}
                onClick={() => handleProjectCardClick(project)}
                className={`card-gradient-interactive animate-card-enter group rounded-2xl bg-white dark:bg-[#101A2B] border border-slate-200/80 dark:border-[#1D2A3D] shadow-xs flex flex-col justify-between cursor-pointer select-none ${
                  activeProjectId === project.id ? 'is-card-active' : ''
                }`}
              >
                {/* Bottom-to-Top Sliding Fill Background Animation (and reverse on unactive) */}
                <div aria-hidden="true" className="card-sliding-bg" />

                {/* Card Content Layer */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div
                      className="relative h-48 overflow-hidden cursor-pointer"
                      onClick={(e) => handleOpenProjectModal(project, e)}
                    >
                      <img
                        src={project.image}
                        alt={`${project.name} preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3.5"
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-900 shadow-md backdrop-blur-xs">
                          <i className="fa-solid fa-expand text-[10px]" />
                          Quick View
                        </span>
                      </div>
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900/80 text-white backdrop-blur-xs border border-white/20">
                        {project.category}
                      </span>
                      {project.duration && (
                        <span className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-slate-900/60 text-slate-200 backdrop-blur-xs">
                          {project.duration}
                        </span>
                      )}
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3
                          className="card-text-white font-general font-medium tracking-[-0.025em] text-lg text-slate-900 dark:text-[#F8FAFC] transition-colors duration-300 cursor-pointer"
                          onClick={(e) => handleOpenProjectModal(project, e)}
                        >
                          {project.name}
                        </h3>
                        {project.client && (
                          <span
                            className="card-text-subtle text-[10px] font-medium text-slate-400 dark:text-[#77859A] transition-colors duration-300 truncate max-w-[110px]"
                          >
                            {project.client}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="card-badge-active inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 dark:bg-slate-900/90 text-blue-700 dark:text-[#3B82F6] border border-blue-200/50 dark:border-[#1D2A3D] transition-all duration-300"
                          >
                            <i className={`fa-solid ${techIcons[tech] || 'fa-code'} text-[10px]`} />
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p
                        className="card-text-muted text-sm text-slate-600 dark:text-[#B8C2D1] transition-colors duration-300 leading-relaxed line-clamp-3"
                      >
                        {project.desc}
                      </p>
                    </div>
                  </div>

                  <div
                    className="card-border-active px-5 pb-5 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-[#1D2A3D] mt-2 pt-3 transition-colors duration-300"
                  >
                    <button
                      type="button"
                      onClick={(e) => handleOpenProjectModal(project, e)}
                      className="card-text-white inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-[#3B82F6] transition-colors duration-300 cursor-pointer"
                    >
                      <span>View Case</span>
                      <i
                        className="card-arrow-active fa-solid fa-arrow-right text-[10px] transition-transform"
                      />
                    </button>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="card-text-white inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-blue-600 dark:text-[#77859A] dark:hover:text-white transition-colors duration-300 cursor-pointer"
                        aria-label={`Open live site for ${project.name}`}
                      >
                        <span>Live Demo</span>
                        <i
                          className="card-arrow-active fa-solid fa-arrow-up-right-from-square text-[9px] transition-transform"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Interactive Project Quick-View Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-md transition-opacity"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null)
          }}
        >
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#101A2B] rounded-3xl border border-slate-200 dark:border-[#1D2A3D] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            {/* Modal Header Media */}
            <div className="relative h-56 sm:h-64 shrink-0 overflow-hidden bg-slate-900">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 flex items-center justify-center border border-white/20 transition-all cursor-pointer"
              >
                <i className="fa-solid fa-xmark text-sm" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-xs">
                    {selectedProject.category}
                  </span>
                  {selectedProject.client && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-xs">
                      {selectedProject.client}
                    </span>
                  )}
                  {selectedProject.duration && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-xs">
                      <i className="fa-regular fa-clock mr-1 text-[10px]" />
                      {selectedProject.duration}
                    </span>
                  )}
                </div>
                <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Project Overview</h4>
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedProject.desc}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Technologies Deployed</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800/60"
                    >
                      <i className={`fa-solid ${techIcons[tech] || 'fa-code'} text-xs`} />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Key Highlights</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                        <i className="fa-solid fa-circle-check text-teal-500 mt-1 shrink-0 text-xs" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:px-8 sm:py-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3 shrink-0">
              {selectedProject.url ? (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                  <span>Open Live Project</span>
                </a>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={() => handleInquireProject(selectedProject)}
                className="bg-gradient-primary text-white font-bold px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all text-xs sm:text-sm flex items-center gap-2 cursor-pointer ml-auto"
              >
                <span>Request Similar Project</span>
                <i className="fa-solid fa-arrow-right text-xs" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

