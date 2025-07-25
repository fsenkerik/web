/*
SectionWrapper represents a section with reasonable defaults that
can enable various features such as displaying a background image
or title and description
 */

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'
import { cx } from '@emotion/css'
import styled from './style'

// Shows the header of a section including a title and a description
const SectionHeader = (props) => {
  const { title, description } = props
  return (
    <Row>
      <Col xs='12'>
        <div css={styled.SectionHeader}>
          <h1 className='_section-title'>{title}</h1>
          <p className='_section-description'>{description}</p>
        </div>
      </Col>
    </Row>
  )
}

// Used for showing an image background for sections
export const ImageTemplate = (props) => {
  const { brightness = '100%', alt, ...otherProps } = props
  return (
    <Image
      alt={alt}
      style={{
        objectFit: 'cover',
        height: '100%',
        width: '100%',
        filter: `brightness(${brightness})`,
        position: 'absolute',
        top: 0,
        left: 0,
      }}
      sizes='100vw'
      {...otherProps}
    />
  )
}

// Shows a section with all its necessary features
const SectionWrapper = (props) => {
  const {
    Root = 'section',
    innerRef,
    altBg,
    headerData,
    containerProps,
    children,
    className,
    backgroundProps,
    ...otherProps
  } = props
  return (
    <Root
      css={styled.SectionWrapper}
      className={cx(className, {
        '--alt-bg': altBg, // Uses an alternative background color if the altBg prop is passed
      })}
      ref={innerRef}
      {...otherProps}
    >
      {/* Only display section header when headerData is passed */}
      {headerData != null && (
        <Container>
          <SectionHeader
            title={headerData.title}
            description={headerData.description}
          />
        </Container>
      )}

      {/* Only display background image when backgroundProps is passed */}
      {backgroundProps != null && <ImageTemplate {...backgroundProps} />}

      <Container {...containerProps}>{children}</Container>
    </Root>
  )
}

export default SectionWrapper
