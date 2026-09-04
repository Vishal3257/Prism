import PageHeader from '../components/common/PageHeader'
import About from '../components/aboutcomponents/About'
import Stats from '../components/common/Stats'
import WhyChooseUs from '../components/common/WhyChooseUs'
import CTA from '../components/common/CTA'

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        title="About Prism Infotech"
        subtitle="Empowering startups and enterprises worldwide with high-performance digital products, AI automation, and bespoke software solutions."
        badge="About Us"
        breadcrumb="About"
      />
      <About />
      <Stats />
      <WhyChooseUs />
      <CTA />
    </div>
  )
}
