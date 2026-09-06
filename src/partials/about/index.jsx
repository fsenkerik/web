/*
This is the About section
*/

import { Row, Col } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import Button from 'root/src/components/button'
import aboutImg from 'root/public/partials/about/picture.jpg'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import { useLanguage } from 'root/src/context/LanguageContext'
import styled from './style'

const About = (props) => {
  const { t } = useLanguage()
  const a = t.about

  return (
    <SectionWrapper
      css={styled.About}
      headerData={{ title: a.sectionTitle, description: '' }}
      {...props}
    >
      <div className='row align-items-center'>
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

        <Col xs='12' lg='7'>
          <h2 className='_subtitle'>{a.subtitle}</h2>

          <h2 className='_title'>
            {a.title}
            <span className='_dot'>.</span>
          </h2>

          <div className='_description'>
            <p>{a.bio}</p>
          </div>

          <address className='_address'>
            <Row>
              <Col className='_info' xs='12' md='6'>
                <span>{a.nameLabel}</span>
                <p>Šenkeřík Filip</p>
              </Col>
              <Col className='_info' xs='12' md='6'>
                <span>{a.emailLabel}</span>
                <p>
                  <a href='mailto:f.senkerik98@gmail.com'>
                    f.senkerik98@gmail.com
                  </a>
                </p>
              </Col>
            </Row>
            <Row>
              <Col className='_info' xs='12' md='6'>
                <span>{a.ageLabel}</span>
                <p>28</p>
              </Col>
              <Col className='_info' xs='12' md='6'>
                <span>{a.locationLabel}</span>
                <p>{a.locationValue}</p>
              </Col>
            </Row>
          </address>

          <Button className='_button' href='/partials/about/cv.pdf' download>
            {a.btnPricelist}
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
            {a.btnWork}
          </Button>
        </Col>
      </div>
    </SectionWrapper>
  )
}

export default About
