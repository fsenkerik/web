/*
This is the Blog section
It retrieves blog post data from the MDX files and passes it through context to other components
It also handles the lightbox state and dispatching actions
*/

import { useContext, createContext, useReducer, useState } from 'react'
import SectionWrapper from 'root/src/components/section-wrapper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import { css } from '@emotion/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Card, Col, Container, Row } from 'react-bootstrap'
import MdxRenderer from 'root/src/components/mdx-renderer'
import { capitalizeFirstLetter } from 'root/utils'
import { cx } from '@emotion/css'
import dayjs from 'dayjs'
import Lightbox from 'root/src/components/lightbox'
import styled from './style'

// Define where the MDX files are located
export const BlogDataPath = 'src/partials/blog/data/*.mdx'

// Create a Context for passing data between components
const Context = createContext({})

// Renders a preview card for each blog post
const Post = ({ data }) => {
  const { dispatch } = useContext(Context)

  // Populates the data state with content, causing the lightbox to show
  const clickEvent = () => {
    dispatch({ type: 'data', data })
  }

  // Destructure passed data
  const { title, date, tags, summary } = data.scope.frontmatter
  const thumbnailObj = data.scope.frontmatter.processedImages.thumbnail[0]

  // Populates the blog post card with passed tags
  const tagsToText = (array) => {
    // Capitalizes first letter of each tag
    const treatedArray = array.map((element) => capitalizeFirstLetter(element))

    // Checks length for singular/plural formatting
    if (treatedArray.length === 1)
      return <a className='link'>{treatedArray[0]}</a>

    // Joins tags for plural display
    return treatedArray.reduce((prev, curr) => (
      <>
        <span className='_tag'>{prev}</span>
        <span className='_delimiter'>/</span>
        <span className='_tag'>{curr}</span>
      </>
    ))
  }

  // Format passed plain text date
  const dateToText = (dateInput) => dayjs(dateInput).format('MMMM D, YYYY')

  return (
    <Card css={styled.Post}>
      {/* Blog post card image */}
      <span onClick={clickEvent} className='_image-wrapper'>
        <Image
          className='card-img-top'
          style={{
            width: '100%',
            objectFit: 'cover',
          }}
          fill
          sizes='
            (max-width: 767.98px) 100vw,
            (min-width: 768px) and (max-width: 991.98px) 50vw,
            (min-width: 992px) 33.33vw
          '
          placeholder='blur'
          blurDataURL={thumbnailObj.blurData}
          src={thumbnailObj.url}
          alt='Blog post thumbnail'
        ></Image>
        <span className='_date'>{dateToText(date)}</span>
      </span>
      {/* Blog post card body */}
      <Card.Body className='_content'>
        <Card.Title onClick={clickEvent} className='_title'>
          {title}
        </Card.Title>
        <Card.Text className='_summary'>{summary}</Card.Text>
        <div className='_tags'>
          <span className='_key'>Tags: </span>
          <span className='_list'>{tagsToText(tags)}</span>
        </div>
      </Card.Body>
    </Card>
  )
}

/*
Renders a swiper component to display blog post cards
Handles navigation between posts
*/
const PostsList = () => {
  // Get fetched data from context
  const { fetchedData } = useContext(Context)

  // State to store Swiper instance and slide edge status
  const [swiperInstance, setSwiperInstance] = useState(null)
  const [slideEdge, setSlideEdge] = useState([null, null])

  // Handle navigation clicks
  const handleNav = (action) => {
    // Check if Swiper instance exists
    if (!swiperInstance) return

    // Switch on action to call prev/next methods
    switch (action) {
      case 'PREV':
        // Go to previous slide
        swiperInstance.slidePrev()
        break
      case 'NEXT':
        // Go to next slide
        swiperInstance.slideNext()
        break
      default:
        break
    }
  }

  return (
    <div css={styled.PostsList}>
      <Row>
        {/* Navigation buttons */}
        <div className='_nav'>
          <span
            className={cx({
              '--active': !slideEdge[0],
            })}
            onClick={() => handleNav('PREV')}
          >
            PREV
          </span>
          <span
            className={cx({
              '--active': !slideEdge[1],
            })}
            onClick={() => handleNav('NEXT')}
          >
            NEXT
          </span>
        </div>

        {/* Swiper component */}
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          onSlideChange={(swiper) => {
            // Update slide edge status
            setSlideEdge([swiper.isBeginning, swiper.isEnd])
          }}
          onInit={(swiper) => {
            // Set initial swiper instance and slide edge
            setSwiperInstance(swiper)
            setSlideEdge([swiper.isBeginning, swiper.isEnd])
          }}
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
          {/* Map over each blog post and embed it in slider */}
          {fetchedData.map((mdxItem, i) => (
            <SwiperSlide key={i}>
              <Post data={mdxItem} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
    </div>
  )
}

/*
Layout for post content in lightbox modal
Renders title, summary and MDX content
*/
const PostLightboxLayout = (props) => {
  // Get context from Context provider
  const { state } = useContext(Context)

  // Destructure Frontmatter data
  const { title, summary } = state.data.scope.frontmatter

  // Destructure children (MDX content)
  const { children } = props

  return (
    <Row css={styled.PostLightboxLayout} className='justify-content-center'>
      {/* Render content within a column for responsiveness */}
      <Col xs='12' lg='9'>
        <div className='_post-wrapper'>
          <h1 className='_title'>{title}</h1>
          <p className='_summary'>{summary}</p>
          <div className='_content'>{children}</div>
        </div>
      </Col>
    </Row>
  )
}

/*
Main lightbox modal component
Renders selected post content
*/
const PostLightbox = () => {
  // Get state and dispatch from context
  const { state, dispatch } = useContext(Context)

  /*
  Defines components passed to the MdxRenderer
  and can be called from within the MDX file
  */
  const components = {
    // Layout component for lightbox
    PostLightboxLayout,

    // Thumbnail component that renders image
    LightboxThumbnail: () => (
      <Image
        className='_post-thumbnail'
        src={state.data.scope.frontmatter.processedImages.thumbnail[0].url}
        css={css`
          width: ${state.data.scope.frontmatter.processedImages.thumbnail[0]
            .metadata.width}px;
        `}
        width={
          state.data.scope.frontmatter.processedImages.thumbnail[0].metadata
            .width
        }
        height={
          state.data.scope.frontmatter.processedImages.thumbnail[0].metadata
            .height
        }
        placeholder='blur'
        blurDataURL={
          state.data.scope.frontmatter.processedImages.thumbnail[0].blurData
        }
        sizes='
          (max-width: 991.98px) 100vw,
          (min-width: 992px) 75vw
        '
        alt='Blog post thumbnail'
      />
    ),
  }

  return (
    <Lightbox
      css={styled.PostLightbox}
      show={state.show}
      onClose={() => {
        // Close lightbox
        dispatch({ type: 'data', data: false })
      }}
    >
      <Container>
        {/* Check for post data */}
        {state.data && (
          // Render MDX content
          <MdxRenderer serializedSource={state.data} components={components} />
        )}
      </Container>
    </Lightbox>
  )
}

/*
Main Blog component page.
Handles data fetching, context and lightbox state.
*/
const Blog = (props) => {
  // Destructure props
  const { data, ...otherProps } = props

  // Initial state
  const initialState = {
    show: false,
    data: false,
  }

  // State reducer
  const stateReducer = (state, action) => {
    switch (action.type) {
      // Set data and show lightbox
      case 'data':
        if (action.data) return { ...state, show: true, data: action.data }
        return { ...state, show: false }

      // Toggle lightbox show
      case 'show':
        return { ...state, show: action.show }

      default:
        return state
    }
  }

  // State and dispatch from useReducer
  const [state, dispatch] = useReducer(stateReducer, initialState)

  // Context data
  const contextData = {
    fetchedData: data,
    state,
    dispatch,
  }

  return (
    <SectionWrapper
      headerData={{
        title: 'My Blog',
        description: 'Check out my latest blog posts',
      }}
      altBg={false}
      {...otherProps}
    >
      <Row>
        <Col xs='12'>
          {/* Provide context */}
          <Context.Provider value={contextData}>
            <PostsList />
            <PostLightbox />
          </Context.Provider>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default Blog
