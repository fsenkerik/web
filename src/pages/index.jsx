/*
This is the home page but with just an image background for the Hero section
*/

import ScrollWrapper from 'root/src/components/scroll-wrapper'
import Hero from 'root/src/partials/hero'
import About from 'root/src/partials/about'
import Services from 'root/src/partials/services'
import Hire from 'root/src/partials/hire'
import Portfolio, { PortfolioDataPath } from 'root/src/partials/portfolio'
import Contact from 'root/src/partials/contact'
import Footer from 'root/src/partials/footer'
import parseAllMdx from 'root/src/lib/parseAllMdx'
import Metadata from 'root/src/metadata'
import { useLanguage } from 'root/src/context/LanguageContext'

const HomeImage = ({ portfolioData }) => {
  const { t } = useLanguage()
  return (
    /* Wrap all sections within a scroll-wrapper that adds a functional navbar/sidebar feature */
    <ScrollWrapper>
      {/* Include website metadata */}
      <Metadata />

      {/* Hero section with an image background */}
      <Hero nav={t.nav.home} id='home' variant='particles' preset='lines' />

      {/* Include the rest of sections, some with passed MDX data */}
      <About nav={t.nav.about} id='about' />
      <Services nav={t.nav.services} id='services' />
      <Hire id='hire' />
      <Portfolio nav={t.nav.portfolio} id='portfolio' data={portfolioData} />
      <Contact nav={t.nav.contact} id='contact' />
      <Footer id='footer' />
    </ScrollWrapper>
  )
}

export default HomeImage

/*
This is a special Next.js function that allows fetching data
at build-time which is known as Static Site Generation (SSG).
In this context it is retrieving data from MDX files to be passed to page sections
Read more: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props
*/
export const getStaticProps = async () => ({
  props: {
    portfolioData: await parseAllMdx(PortfolioDataPath),
  },
})
