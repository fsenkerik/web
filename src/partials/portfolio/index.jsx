/*
This is the Portfolio section
It retrieves items data from the MDX files and passes it through context to other components
It also handles the lightbox state and dispatching actions
*/

import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useRef,
  useReducer,
} from 'react'
import SectionWrapper from 'root/src/components/section-wrapper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { css } from '@emotion/react'
import { cx } from '@emotion/css'
import { Pagination } from 'swiper'
import Button from 'root/src/components/button'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import DateToText from 'root/src/components/datetotext/DateToText'
import { Col, Nav, Row, Container } from 'react-bootstrap'
import Shuffle from 'shufflejs'
import MdxRenderer from 'root/src/components/mdx-renderer'
import { capitalizeFirstLetter } from 'root/utils'
import Lightbox from 'root/src/components/lightbox'
import LangBlock from 'root/src/components/lang-block'
import { useLanguage } from 'root/src/context/LanguageContext'
import styled from './style'

// Define where the MDX files are located
export const PortfolioDataPath = 'src/partials/portfolio/data/*.mdx'

// Create a Context for passing data between components
const Context = createContext({})

/*
Renders a navigation bar for filtering portfolio items by category
*/
const MansoryNav = (props) => {
  const [navIndex, setNavIndex] = useState(0)
  const { t } = useLanguage()

  // Keep Czech values as internal filter keys; display translated labels
  const rawList = Array.from(props.list).sort()
  const list = [null, ...rawList] // null = "All"

  return (
    <Nav css={styled.MansoryNav} as='ul'>
      {list.map((category, index) => (
        <Nav.Link
          className={cx({ '--active': index === navIndex }, '_item')}
          key={category ?? '__all__'}
          onClick={() => {
            props.setCategory(index === 0 ? Shuffle.ALL_ITEMS : category)
            setNavIndex(index)
          }}
        >
          {index === 0
            ? t.portfolio.all
            : capitalizeFirstLetter(
                t.portfolio.categories[category] || category,
              )}
        </Nav.Link>
      ))}
    </Nav>
  )
}

// Component that represents a single item
const MansoryItem = (props) => {
  const { dispatch } = useContext(Context)
  const { t: portfolioT } = useLanguage()

  const clickEvent = () => {
    dispatch({ type: 'data', data: props.node })
  }

  const [showOverlay, setShowOverlay] = useState(false)

  // Throw error if processed images are missing
  if (!props.scope.frontmatter.processedImages)
    throw new Error('ProcessedImages does not exist')

  // JSON stringify categories
  const categoriesJson = JSON.stringify(props.scope.frontmatter.categories)

  return (
    <Col
      className='mansory-item'
      css={styled.MansoryItem}
      data-categories={categoriesJson}
      xs='6'
      lg='4'
      onMouseEnter={() => {
        setShowOverlay(true)
      }}
      onMouseLeave={() => {
        setShowOverlay(false)
      }}
    >
      <div
        onClick={clickEvent}
        onKeyDown={clickEvent}
        style={{
          aspectRatio: '15/16',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Image element */}
        <Image
          className='_grid-image'
          css={css`
            filter: brightness(${showOverlay ? '10%' : '100%'});
          `}
          src={props.scope.frontmatter.processedImages.thumbnail[0].url}
          fill
          sizes='
            (max-width: 992px) 50vw,
            (min-width: 992px) 33.33vw
          '
          placeholder='blur'
          blurDataURL={
            props.scope.frontmatter.processedImages.thumbnail[0].blurData
          }
          alt='Portfolio item thumbnail'
          role={'button'}
          tabIndex={0}
        />

        {/* Overlay element */}
        <div
          className='_grid-overlay'
          css={css`
            // Fade in overlay on hover
            opacity: ${showOverlay ? '1' : '0'};
            opacity: ${showOverlay ? 'visible' : 'hidden'};
          `}
        >
          <div className='_content'>
            <h6 className='_title'>{props.scope.frontmatter?.title}</h6>
            <span className='_action'>{portfolioT.moreInfo}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}

// Component that represents the grid of items
const Mansory = () => {
  // Get fetched data from context
  const { fetchedData } = useContext(Context)

  // State to store shuffle instance
  const [shuffle, setShuffle] = useState(null)

  // Ref to pass to shuffle
  const elementRef = useRef({})

  // State to store category filter
  const [category, setCategory] = useState(Shuffle.ALL_ITEMS)

  useEffect(() => {
    // Create shuffle instance
    const shuffleInstance = new Shuffle(elementRef.current, {
      itemSelector: '.mansory-item',
    })

    // Constants for shuffle
    Shuffle.ALL_ITEMS = 'all'
    Shuffle.FILTER_ATTRIBUTE_KEY = 'categories'

    // Set shuffle state
    setShuffle(shuffleInstance)
  }, [])

  useEffect(() => {
    // Filter shuffle on category change
    if (shuffle) {
      shuffle.filter(category)
    }
  }, [category, shuffle])

  // Extract categories from fetched data
  const categories = fetchedData.flatMap((mdx) =>
    mdx.scope.frontmatter.categories.map((string) => string.toLowerCase()),
  )

  // Get unique categories
  const uniqueCategories = [...new Set(categories)]

  return (
    <>
      {/* Categories nav */}
      <MansoryNav
        setCategory={(value) => {
          setCategory(value)
        }}
        list={uniqueCategories}
      />

      <Row ref={elementRef}>
        {/* Map over each parsed MDX file */}
        {fetchedData.map((mdxItem, i) => (
          <MansoryItem
            node={mdxItem}
            scope={mdxItem.scope}
            key={`${i}`}
          ></MansoryItem>
        ))}
      </Row>
    </>
  )
}

// Component to display lightbox carousel
const LightboxCarousel = () => {
  // Get data from context
  const { state } = useContext(Context)

  // Get gallery images from MDX frontmatter
  const { gallery } = state.data.scope.frontmatter.processedImages

  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      autoHeight
      modules={[Pagination]}
    >
      {/* Map over gallery images */}
      {gallery.map((image, index) => (
        // Renders image in a slider
        <SwiperSlide
          style={{ display: 'flex', justifyContent: 'center' }}
          key={index}
        >
          <Image
            src={image.url}
            css={css`
              display: block;
              height: auto;
              max-width: 100%;
              width: ${image.metadata.width}px;
            `}
            width={image.metadata.width}
            height={image.metadata.height}
            placeholder='blur'
            sizes='
              (max-width: 992px) 100vw,
              (min-width: 992px) 41.66vw
            '
            blurDataURL={image.blurData}
            alt='Portfolio item image'
          ></Image>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

/*
 Component to display item info like key-value pairs
 along with a button
*/
const LightboxContentInfo = (props) => {
  const { projectUrl, articleInfo } = props
  const { t } = useLanguage()

  return (
    <>
      <ul css={styled.LightboxContentInfo} className='list-inline'>
        {articleInfo.map((item, i) => (
          <li key={i} className='list-inline-item _single-info'>
            <span className='info-variable'>{item.key}:</span>
            <span className='info-value'>{item.value}</span>
          </li>
        ))}
      </ul>
      <Button target='_blank' href={projectUrl}>
        {t.portfolio.visitSite}
      </Button>
    </>
  )
}

// Layout component for lightbox
const PortfolioLightboxLayout = (props) => {
  // Destructure props
  const { state } = useContext(Context)
  const { children, contentInfo, carousel } = props

  // Get title from context
  const { title } = state.data.scope.frontmatter

  return (
    <Row css={styled.PortfolioLightboxLayout}>
      {/* Renders carousel */}
      <Col className='d-flex align-items-center' xs='12' lg='5'>
        {carousel}
      </Col>
      {/* Displays content */}
      <Col xs='12' lg='7'>
        <div className='_content'>
          <h1 className='_title'>{title}</h1>
          <span className='_description'>{children}</span>
          {contentInfo}
        </div>
      </Col>
    </Row>
  )
}

// Component to display portfolio lightbox
const PortfolioLightbox = () => {
  // Get state and dispatch from context
  const { state, dispatch } = useContext(Context)

  /*
  Defines components passed to the MdxRenderer
  and can be called from within the MDX file
  */
  const components = {
    // Layout component
    PortfolioLightboxLayout,

    // Content info component
    LightboxContentInfo,

    // Carousel component
    LightboxCarousel,

    // Component to format categories as text (translated)
    CategoriesToText: () => {
      const { t } = useLanguage()
      const treatedArray = state.data.scope.frontmatter.categories.map(
        (element) =>
          capitalizeFirstLetter(t.portfolio.categories[element] || element),
      )

      if (treatedArray.length === 1)
        return <a className='link'>{treatedArray[0]}</a>

      return treatedArray.reduce((prev, curr) => (
        <>
          <a className='link'>{prev}</a>, <a className='link'>{curr}</a>
        </>
      ))
    },

    DateToText: () => {
      const { t } = useLanguage()
      return (
        <DateToText
          date={state.data.scope.frontmatter.date}
          locale={t.dateLocale}
        />
      )
    },

    LangBlock,
  }

  // Return lightbox component
  return (
    <Lightbox
      css={styled.PortfolioLightbox}
      show={state.show}
      onClose={() => {
        // Close the lightbox
        dispatch({ type: 'data', data: false })
      }}
    >
      <Container>
        {/* Populates the lightbox with MDX content on item click */}
        {state.data && (
          <MdxRenderer serializedSource={state.data} components={components} />
        )}
      </Container>
    </Lightbox>
  )
}

// Component to display portfolio as a whole
const Portfolio = (props) => {
  // Destructure props
  const { data, ...otherProps } = props

  // Initial state values
  const initialState = {
    filter: '*',
    show: false,
    data: false,
  }

  // State reducer function
  const stateReducer = (state, action) => {
    // Switch on action type
    switch (action.type) {
      // Set show and data
      case 'data':
        if (action.data) return { ...state, show: true, data: action.data }
        return { ...state, show: false }

      // Set show
      case 'show':
        return { ...state, show: action.show }

      // Set filter
      case 'filter':
        return { ...state, filter: action.filter }

      // Default return original state
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(stateReducer, initialState)
  const { t } = useLanguage()

  const contextData = {
    fetchedData: data,
    state,
    dispatch,
  }

  return (
    <SectionWrapper
      css={styled.Portfolio}
      headerData={{
        title: t.portfolio.sectionTitle,
        description: t.portfolio.sectionDesc,
      }}
      {...otherProps}
    >
      <Row>
        <Col xs='12'>
          {/* Provide context */}
          <Context.Provider value={contextData}>
            <Mansory />

            <PortfolioLightbox />
          </Context.Provider>
        </Col>
      </Row>
    </SectionWrapper>
  )
}

export default Portfolio
