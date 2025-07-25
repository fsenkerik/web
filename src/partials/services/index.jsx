/*
This is the services section
*/

import { Row, Col } from 'react-bootstrap'
import * as icons from '@swiftcarrot/react-ionicons'
import SectionWrapper from 'root/src/components/section-wrapper'
import styled from './style'

// Single service component
const SingleService = (props) => {
  // Destructure props
  const { cols, Icon, description, title } = props

  return (
    <Col {...cols}>
      <div css={styled.Service}>
        <Icon className='_icon' />
        <h6 className='_title'>{title}</h6>
        <p className='_description'>{description}</p>
      </div>
    </Col>
  )
}

// Services component
const Services = (props) => (
  <SectionWrapper
    css={styled.Services}
    altBg={true}
    headerData={{
      title: 'Služby',
      description: 'Služby, které nabízím',
    }}
    {...props}
  >
    {/* List of services */}
    <Row>
      <SingleService
        Icon={icons.ArchiveSharp}
        title='Designové trendy'
        description='Tvořím weby, které vypadají svěže, moderně a odpovídají aktuálním trendům.'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
      <SingleService
        Icon={icons.CheckmarkDoneCircleSharp}
        title='Zajištění funkčnosti'
        description='Postarám se, aby web fungoval spolehlivě na všech zařízeních a bez zbytečných zádrhelů.'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
      <SingleService
        Icon={icons.Earth}
        title='SEO Optimalizace'
        description='Web nemá jen existovat, ale měl by jít najít. Postarám se, aby ho Google i Seznam našly.'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
      <SingleService
        Icon={icons.PaperPlaneSharp}
        title='Nastavení interaktivity'
        description='Formuláře, tlačítka nebo galerie nastavím tak, aby vše na webu fungovalo hladce a plynule.'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
      <SingleService
        Icon={icons.PhonePortraitSharp}
        title='Responzivita'
        description='Ať se na web koukneš z mobilu nebo počítače, vždycky to sedí.'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
      <SingleService
        Icon={icons.RocketSharp}
        title='Individuální přístup'
        description='Každý web dělám trochu jinak – podle toho, co komu dává smysl.'
        cols={{ xs: '12', md: '6', lg: '4' }}
      />
    </Row>
  </SectionWrapper>
)

export default Services
