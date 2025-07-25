/*
This is the About section
*/

import { Row, Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import Button from 'root/src/components/button'
import aboutImg from 'root/public/partials/about/picture.jpg'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import styled from './style'

const About = (props) => (
  <SectionWrapper
    css={styled.About}
    headerData={{ title: 'O mně', description: '' }}
    {...props}
  >
    <div className='row align-items-center'>
      {/* Image part - Displays profile image */}
      <Col xs='12' lg='5' className=' _image'>
        <Image
          className='img-thumbnail'
          sizes='
            (max-width: 992px) 250px,
            (min-width: 992px) 41.66vw
          '
          alt='About Picture'
          src={aboutImg}
        />
      </Col>

      {/* Text part - Displays name, description, contact details */}
      <Col xs='12' lg='7'>
        {/* Information part */}
        <h2 className='_subtitle'>Kdo jsem?</h2>

        <h2 className='_title'>
          Jmenuji se Šenkeřík Filip jsem webový vývojář <br></br>a pedagog
          <span className='_dot'>.</span>
        </h2>

        <div className='_description'>
          <p>
            Jsem pedagog na Masarykově gymnáziu, kde se snažím studentům předat
            nejen znalosti, ale hlavně je nadchnout pro informatiku a
            technologie. Kromě výuky se věnuji tvorbě webových stránek - od
            návrhu přes kódování, zabezpečení až po samotné zveřejnění na
            internetu. V práci se snažím být hlavně spolehlivý a vstřícný. Baví
            mě hledat řešení, která dávají smysl a zároveň respektují představy
            lidí, se kterými spolupracuji. Věřím, že dobrý výsledek vzniká z
            dobré domluvy.
          </p>
        </div>

        <address className='_address'>
          <Row>
            <Col className='_info' xs='12' md='6'>
              <span>Jméno:</span>
              <p>Šenkeřík Filip</p>
            </Col>
            <Col className='_info' xs='12' md='6'>
              <span>Email:</span>
              <p>
                <a href='mailto:f.senkerik98@gmail.com'>
                  f.senkerik98@gmail.com
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className='_info' xs='12' md='6'>
              <span>Věk:</span>
              <p>27</p>
            </Col>
            <Col className='_info' xs='12' md='6'>
              <span>Místo:</span>
              <p>Valašské Klobouky, CZ</p>
            </Col>
          </Row>
        </address>

        {/* Buttons part */}
        <Button className='_button' href='/partials/about/cv.pdf' download>
          Ceník
        </Button>

        <Button
          as={ScrollLink}
          to={'portfolio'}
          spy={true}
          smooth={true}
          duration={600}
          className='_button'
          variant='light'
        >
          Má práce
        </Button>
      </Col>
    </div>
  </SectionWrapper>
)

export default About
