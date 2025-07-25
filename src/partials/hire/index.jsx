/*
This is the Hire section
*/

import SectionWrapper from 'root/src/components/section-wrapper'
import hireImg from 'root/public/partials/hire/background.jpg'
import { Col, Row } from 'react-bootstrap'
import Button from 'root/src/components/button'
import { Link as ScrollLink } from 'react-scroll'
import styled from './style'

const Hire = (props) => (
  <SectionWrapper
    css={styled.Hire}
    backgroundProps={{
      alt: 'Hire background',
      src: hireImg,
      brightness: '17%',
    }}
    {...props}
  >
    {/* Title and description part */}
    <Row className='_row'>
      <Col className='_wrapper' xs='12' md='8'>
        <h1 className='_title'>Chceš web, co bude fungovat i vypadat dobře?</h1>

        <p className='_description'>
          Ať už máš jasnou představu, nebo jen myšlenku v hlavě, probereme to.
          Jsem otevřený novým spolupracím i zajímavým nápadům.
        </p>
      </Col>
      {/* Button part */}
      <Col className='_wrapper' xs='12' md='4'>
        <div className='_button-wrapper'>
          {/* Button component linked to contact section */}
          <Button
            as={ScrollLink}
            to={'contact'}
            spy={true}
            smooth={true}
            duration={600}
            className='_button'
          >
            Napiš mi
          </Button>
        </div>
      </Col>
    </Row>
  </SectionWrapper>
)

export default Hire
