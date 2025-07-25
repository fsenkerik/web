/*
This is the Testimonials section
It retrieves data from the MDX files and passes it through components
*/

import { Row } from 'react-bootstrap'
import SectionWrapper from 'root/src/components/section-wrapper'
import Image from 'next/image'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import MdxRenderer from 'root/src/components/mdx-renderer'
import styled from './style'

// Define where the MDX files are located
export const testimonialsDataPath = 'src/partials/testimonials/data/*.mdx'

const SingleTestimonial = (props) => {
  // Destructure props
  const { message, clientName, avatar } = props
  return (
    <div css={styled.Testimonial}>
      {/* Icon */}
      <svg
        className='_icon'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <path d='M96.4 416h77.1l50.9-96.6V96h-160v223.4h77.1L96.4 416zm224 0h77.1l50-96.6V96H288.4v223.4h82l-50 96.6z' />
      </svg>

      {/* Message */}
      {message}

      {/* Avatar */}
      {avatar}

      {/* Name */}
      <span className='_name'>{clientName}</span>
    </div>
  )
}

// Component to display testimonials
const Testimonials = (props) => {
  // Destructure props
  const { data, ...otherProps } = props

  return (
    <SectionWrapper
      css={styled.Testimonials}
      altBg={true}
      headerData={{
        title: 'Testimonials',
        description: 'What my clients think about me',
      }}
      {...otherProps}
    >
      {/* Testimonial slides */}
      <Row>
        <Swiper
          pagination={{
            clickable: true,
          }}
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Map over MDX files to generate slides */}
          {data.map((mdxItem, i) => {
            // Render MDX content
            const TestimonialMessage = (
              <MdxRenderer serializedSource={mdxItem} />
            )

            // Get avatar object
            const avatarObj =
              mdxItem.scope.frontmatter.processedImages.avatar[0]

            // Render avatar image
            const AvatarImage = (
              <div style={{ overflow: 'hidden' }}>
                <Image
                  src={avatarObj.url}
                  placeholder='blur'
                  blurDataURL={avatarObj.blurData}
                  alt='Client avatar'
                  className='_avatar'
                  sizes='56px'
                  width={56}
                  height={56}
                ></Image>
              </div>
            )

            // Render testimonial inside a slide
            return (
              <SwiperSlide key={i}>
                <SingleTestimonial
                  clientName={mdxItem.frontmatter.name}
                  message={TestimonialMessage}
                  avatar={AvatarImage}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Row>
    </SectionWrapper>
  )
}
export default Testimonials
