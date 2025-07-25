/*
This is the home page but with a "snow" particles effect for the Hero section
*/

import ScrollWrapper from 'root/src/components/scroll-wrapper'
import Hero from 'root/src/partials/hero'
import About from 'root/src/partials/about'
import Services from 'root/src/partials/services'
import Hire from 'root/src/partials/hire'
import Portfolio, { PortfolioDataPath } from 'root/src/partials/portfolio'
import Blog, { BlogDataPath } from 'root/src/partials/blog'
import Contact from 'root/src/partials/contact'
import Footer from 'root/src/partials/footer'
import parseAllMdx from 'root/src/lib/parseAllMdx'
import Metadata from 'root/src/metadata'
import Testimonials, { testimonialsDataPath } from '../partials/testimonials'

const HomeSnow = ({ portfolioData, testimonialsData, blogData }) => (
  /* Wrap all sections within a scroll-wrapper that adds a functional navbar/sidebar feature */
  <ScrollWrapper>
    {/* Include website metadata */}
    <Metadata />

    {/* Hero section with "snow" particles variant */}
    <Hero nav='Home' id='home' variant='particles' preset='snow' />

    {/* Include the rest of sections, some with passed MDX data */}
    <About nav='About' id='about' />
    <Services nav='Services' id='services' />
    <Hire id='hire' />
    <Portfolio nav='Portfolio' id='portfolio' data={portfolioData} />
    <Testimonials nav='Clients' id='testimonials' data={testimonialsData} />
    <Blog nav='Blog' id='blog' data={blogData} />
    <Contact nav='Contact' id='contact' />
    <Footer id='footer' />
  </ScrollWrapper>
)

export default HomeSnow

/*
This is a special Next.js function that allows fetching data
at build-time which is known as Static Site Generation (SSG).
In this context it is retrieving data from MDX files to be passed to page sections
Read more: https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props
*/
export const getStaticProps = async () => ({
  props: {
    portfolioData: await parseAllMdx(PortfolioDataPath),
    testimonialsData: await parseAllMdx(testimonialsDataPath),
    blogData: await parseAllMdx(BlogDataPath),
  },
})
