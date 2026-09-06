/*
This is the services section
*/

import { Row, Col } from 'react-bootstrap'
import * as icons from '@swiftcarrot/react-ionicons'
import SectionWrapper from 'root/src/components/section-wrapper'
import { useLanguage } from 'root/src/context/LanguageContext'
import styled from './style'

const SingleService = (props) => {
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

const serviceIcons = [
  icons.ArchiveSharp,
  icons.CheckmarkDoneCircleSharp,
  icons.Earth,
  icons.PaperPlaneSharp,
  icons.PhonePortraitSharp,
  icons.RocketSharp,
]

const Services = (props) => {
  const { t } = useLanguage()
  const s = t.services

  return (
    <SectionWrapper
      css={styled.Services}
      altBg={true}
      headerData={{ title: s.sectionTitle, description: s.sectionDesc }}
      {...props}
    >
      <Row>
        {s.items.map((item, i) => (
          <SingleService
            key={i}
            Icon={serviceIcons[i]}
            title={item.title}
            description={item.desc}
            cols={{ xs: '12', md: '6', lg: '4' }}
          />
        ))}
      </Row>
    </SectionWrapper>
  )
}

export default Services
