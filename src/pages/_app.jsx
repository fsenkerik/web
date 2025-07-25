/*
_app.jsx is a special Next.js file that serves as the entry point for the application
It is responsible for initializing the pages
Read more: https://nextjs.org/docs/pages/building-your-application/routing/custom-app
*/

/* eslint-disable @next/next/no-page-custom-font */
import 'src/styles/bootstrap/index.scss'
import 'simplebar-react/dist/simplebar.min.css'
import styled from 'root/src/styles/global'
import { useState, useEffect } from 'react'
import { css, Global } from '@emotion/react'
import Preloader from '../components/preloader'

// Defines elements to be included in the <head>
export const HeadContent = () => (
  <>
    {/* Google Fonts */}
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link
      rel='preconnect'
      href='https://fonts.gstatic.com'
      crossOrigin='anonymous'
    />
    <link
      href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap'
      rel='stylesheet'
    />
  </>
)

// Defines the main component used for _app.jsx
const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <>
      {/* Displays a preloader when the page is still loading */}
      <Preloader
        loading={loading}
        dotsStyle={css`
          height: 13px;
          width: 13px;
          background-color: #fff;
          margin: 7px;
          animation-duration: 1.2s;
        `}
        backgroundColor='#0e0e0e'
      />
      <Global styles={styled.Global} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
