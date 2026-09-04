import PageHeader from '../components/common/PageHeader'
import Portfolio from '../components/portfolio/Portfolio'
import Stats from '../components/common/Stats'
import CTA from '../components/common/CTA'

export default function PortfolioPage() {
  return (
    <div>
      <PageHeader
        title="Our Work & Case Studies"
        subtitle="Explore our portfolio of high-impact web applications, cross-platform mobile apps, and enterprise platforms."
        badge="Proven Results"
        breadcrumb="Portfolio"
      />
      <Portfolio />
      <Stats />
      <CTA />
    </div>
  )
}
