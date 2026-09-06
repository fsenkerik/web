/*
This is the Hire section
*/

import SectionWrapper from 'root/src/components/section-wrapper'
import hireImg from 'root/public/partials/hire/background.jpg'
import { Col, Row } from 'react-bootstrap'
import Button from 'root/src/components/button'
import { Link as ScrollLink } from 'react-scroll'
import { useLanguage } from 'root/src/context/LanguageContext'
import styled from './style'

const Hire = (props) => {
  const { t } = useLanguage()
  const h = t.hire

  return (
    <SectionWrapper
      css={styled.Hire}
      backgroundProps={{
        alt: 'Hire background',
        src: hireImg,
        brightness: '17%',
      }}
      {...props}
    >
      <Row className='_row'>
        <Col className='_wrapper' xs='12' md='8'>
          <h1 className='_title'>{h.title}</h1>
          <p className='_description'>{h.desc}</p>
        </Col>
        <Col className='_wrapper' xs='12' md='4'>
          <div className='_button-wrapper'>
            <Button
              as={ScrollLink}
              to={'contact'}
              spy={true}
              smooth={true}
              duration={600}
              className='_button'
            >
              {h.btn}
            </Button>
          </div>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default Hire
