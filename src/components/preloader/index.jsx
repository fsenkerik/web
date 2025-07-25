/*
Page preloader component. Displays a loading indicator while the page loads
*/

import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import styled from './style'

// Beatloader component displays an animated "beat" loading effect
const Beatloader = (props) => {
  // Merge additional styles with base styles
  const mergeDotStyle = (additionalStyles) => css`
    ${props.dotsStyle};
    ${additionalStyles}
  `
  return (
    <span css={styled.Beatloader({ loading: props.loading })}>
      {/* Individual dots with staggered delays */}
      <span
        css={mergeDotStyle(css`
          animation-delay: -0.3s;
        `)}
      />
      <span
        css={mergeDotStyle(css`
          animation-delay: -0.15555s;
        `)}
      />
      <span
        css={mergeDotStyle(css`
          animation-delay: -0s;
        `)}
      />
    </span>
  )
}

// Preloader component displays beatloader and background
const Preloader = (props) => {
  const { backgroundColor, loading, ...dotsStyle } = props

  // State to control background visibility
  const [showBackground, setShowBackground] = useState(loading)

  // Show background after a very short delay
  useEffect(() => {
    setTimeout(() => {
      setShowBackground(loading)
    }, 100)
  }, [loading])
  return (
    <div css={styled.Background({ showBackground, backgroundColor })}>
      <Beatloader {...{ loading }} {...dotsStyle} />
    </div>
  )
}

export default Preloader
