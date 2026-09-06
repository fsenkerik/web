/*
This is the Hero section
It supports different variants (image, video, particles) that can be rendered by passing a "variant" prop
*/

import { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Typed from 'typed.js'
import SectionWrapper from 'root/src/components/section-wrapper'
import { Link as ScrollLink } from 'react-scroll'
import ImageVariant from './variants/image'
import VideoVariant from './variants/video'
import ParticlesVariant from './variants/particles'
import { useLanguage } from 'root/src/context/LanguageContext'
import styled from './style'

const MouseShape = () => (
  <ScrollLink
    css={styled.MouseShape}
    to={'about'}
    spy={true}
    smooth={true}
    duration={600}
  >
    <div className='_shape'>
      <div className='_wheel' />
    </div>
  </ScrollLink>
)

const Hero = (props) => {
  const { variant, ...otherProps } = props
  const { lang, t } = useLanguage()

  useEffect(() => {
    const options = {
      strings: t.hero.roles,
      typeSpeed: 40,
      backSpeed: 40,
      loop: true,
      smartBackspace: false,
      backDelay: 2000,
    }
    const typed = new Typed('#typed', options)
    return () => {
      typed.destroy()
    }
  }, [lang])

  const setVariant = () => {
    switch (variant) {
      case 'image':
        return <ImageVariant />
      case 'video':
        return <VideoVariant />
      case 'particles':
        return <ParticlesVariant preset={props.preset} />
      default:
        return <ImageVariant />
    }
  }

  return (
    <SectionWrapper
      css={styled.Hero}
      containerProps={{ className: 'h-100' }}
      style={{ position: 'relative' }}
      {...otherProps}
    >
      {setVariant()}

      <Row
        style={{ position: 'relative', zIndex: 1 }}
        className='align-items-center justify-content-center h-100'
      >
        <Col xs='12' lg='8' className='text-center'>
          <h1 className='_name'>
            Šenkeřík
            <span> Filip</span>
          </h1>

          <h4 className='_headline'>
            {t.hero.iam} <span id='typed' />
          </h4>
        </Col>

        <MouseShape />
      </Row>
    </SectionWrapper>
  )
}

export default Hero
