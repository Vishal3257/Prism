import Hero from '../components/landing/Hero'
import Stats from '../components/common/Stats'
import Services from '../components/services/Services'
import Technologies from '../components/services/Technologies'
import WhyChooseUs from '../components/common/WhyChooseUs'
import Process from '../components/landing/Process'
import Portfolio from '../components/portfolio/Portfolio'
import Testimonials from '../components/testimonials/Testimonials'
import CTA from '../components/common/CTA'
import Contact from '../components/contact/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Technologies />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  )
}
