import PageHeader from '../components/common/PageHeader'
import Testimonials from '../components/testimonials/Testimonials'
import CTA from '../components/common/CTA'

export default function TestimonialsPage() {
  return (
    <div>
      <PageHeader
        title="Client Reviews & Trust"
        subtitle="Read feedback from founders, product managers, and enterprise partners who have scaled with Prism Infotech."
        badge="Client Stories"
        breadcrumb="Testimonials"
      />
      <Testimonials />
      <CTA />
    </div>
  )
}
