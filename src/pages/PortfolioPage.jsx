 
import Portfolio from '../components/portfolio/Portfolio'
import Stats from '../components/common/Stats'
import CTA from '../components/common/CTA'
import SuccessMatra from '../components/portfolio/SuccessMatra'
import PortfolioHero from '../components/portfolio/PortfolioHero'
export default function PortfolioPage() {
  return (
    <div>
      <PortfolioHero />
      <Portfolio />
      <SuccessMatra />

      <Stats />
      <CTA />
    </div>
  )
}
