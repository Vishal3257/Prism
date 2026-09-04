import PageHeader from '../components/common/PageHeader'
import Contact from '../components/contact/Contact'

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Let's Build Something Great"
        subtitle="Whether you're starting a new venture or modernizing enterprise software, our team in Kota is ready to help."
        badge="Free Project Estimation"
        breadcrumb="Contact"
      />
      <Contact />
    </div>
  )
}
