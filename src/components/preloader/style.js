/*
Styles for the component
*/

import { keyframes, css } from '@emotion/react'

const beat = keyframes`
   0%,100%,40% {
        transform: scale(0)
    }

    40% {
        transform: scale(1)
    }`

export default {
  Beatloader: ({ loading }) => css`
    line-height: 100%;
    opacity: ${loading ? 1 : 0};
    visibility: ${loading ? 'visible' : 'hidden'};
    transition: 'all .4s';
    & > span {
      animation-name: ${beat};
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      display: inline-block;
      border-radius: 50%;
      animation-fill-mode: none;
    }
  `,
  Background: ({ showBackground, backgroundColor }) => css`
    background-color: ${backgroundColor};
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${showBackground ? 1 : 0};
    visibility: ${showBackground ? 'visible' : 'hidden'};
    transition: all 0.7s;
  `,
}
