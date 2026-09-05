// import PageHeader from '../components/common/PageHeader'
import Services from '../components/services/Services'
import Process from '../components/landing/Process'
import Technologies from '../components/services/Technologies'
import CTA from '../components/common/CTA'
import ServiceHero from '../components/services/ServiceHero'

export default function ServicesPage() {
  return (
    <div>
    
      <ServiceHero />
      <Services />
      <Process />
      <Technologies />
      <CTA />
    </div>
  )
}
