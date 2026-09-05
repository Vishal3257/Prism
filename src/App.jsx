import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeProvider'
import ScrollToTop from './components/common/ScrollToTop'
import SmoothScroll from './components/common/SmoothScroll'
import GlassCursor from './components/common/GlassCursor'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingWhatsApp from './components/common/FloatingWhatsApp'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import CareerPages from './pages/CareerPages'
import PortfolioPage from './pages/PortfolioPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <SmoothScroll />
        <ScrollToTop />
        <GlassCursor />
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-300 transition-colors duration-400 ease-in-out antialiased selection:bg-blue-500 selection:text-white flex flex-col justify-between">
          <div>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/Careers" element={<CareerPages />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
          <Footer />
          <FloatingWhatsApp />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}
