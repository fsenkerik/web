/*
This is the footer section
*/

import { Col, Row } from 'react-bootstrap'
import * as icons from '@swiftcarrot/react-ionicons'
import { css } from '@emotion/react'
import { darken } from 'polished'
import SectionWrapper from 'root/src/components/section-wrapper'
import styled from './style'

// Single block component to display icon and content
const SingleBlock = (props) => {
  const { cols, Icon, content } = props
  return (
    <Col {...cols}>
      <div css={styled.SingleBlock}>
        {/* Icon to display */}
        <Icon className='_icon' />
        {/* Content to display */}
        <p className='_content'>{content}</p>
      </div>
    </Col>
  )
}

// Social icon component
const SocialIcon = (props) => {
  const { url, Icon, color } = props
  return (
    <a
      href={url}
      css={css`
        background-color: ${color};
        &:focus,
        &:hover {
          background-color: ${darken(0.08, color)};
        }
        ${styled.SocialIcon}
      `}
    >
      {/* Icon to display */}
      <Icon className='_icon' />
    </a>
  )
}

// Footer component
const Footer = (props) => (
  <SectionWrapper css={styled.Footer} {...props}>
    {/* List contact information blocks */}
    <Row className='_contact'>
      <SingleBlock
        Icon={icons.MapSharp}
        content={
          <a
            href='https://www.google.com/maps/place/Vala%C5%A1sk%C3%A9+Klobouky,+766+01+Vala%C5%A1sk%C3%A9+Klobouky/@49.1469691,17.9688131,13z/data=!3m1!4b1!4m6!3m5!1s0x4713793623698cc3:0x8d27fcfa062aa546!8m2!3d49.139564!4d18.0084701!16zL20vMGRoZ3do?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D'
            target='_blank'
          >
            Valašské Klobouky, CZ
          </a>
        }
        cols={{ xs: '12', sm: '4' }}
      />
      <SingleBlock
        Icon={icons.CallSharp}
        content={<a href='tel:+420731028228'>+420 731 028 228</a>}
        cols={{ xs: '12', sm: '4' }}
      />
      <SingleBlock
        Icon={icons.SendSharp}
        content={
          <a href='mailto:f.senkerik98@gmail.com'>f.senkerik98@gmail.com</a>
        }
        cols={{ xs: '12', sm: '4' }}
      />
    </Row>
    {/* List social media icons and copyright notice */}
    <Row className='_row _mini'>
      <Col xs='12' lg='5' className='_socials'>
        <SocialIcon
          url='https://www.instagram.com/f.senkerik/'
          Icon={icons.LogoInstagram}
          color='#C32361'
        />
        <SocialIcon
          url='https://www.facebook.com/filip.senkerik.56'
          Icon={icons.LogoFacebook}
          color='#3B5998'
        />
      </Col>
      <Col as='p' xs='12' lg='7' className='_copyright-notice'>
        Copyright © 2025 Šenkeřík Filip
      </Col>
    </Row>
  </SectionWrapper>
)

export default Footer
