import PageHeader from '../components/common/PageHeader'
import Services from '../components/services/Services'
import Process from '../components/landing/Process'
import Technologies from '../components/services/Technologies'
import CTA from '../components/common/CTA'

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Our Capabilities & Services"
        subtitle="End-to-end digital engineering services designed to turn your business vision into scalable, revenue-generating software."
        badge="Full-Lifecycle Engineering"
        breadcrumb="Services"
      />
      <Services />
      <Process />
      <Technologies />
      <CTA />
    </div>
  )
}
