/*
Global styles
*/

import { css } from '@emotion/react'
import theme from 'root/src/styles/theme'

export default {
  Global: css`
    /* Global styles */

    ::selection {
      color: #fff;
      background-color: ${theme().primary};
    }

    body {
      font-size: 14px;
      line-height: 1.95;
      font-weight: 400;
      position: relative;
      color: #333;
      background-color: #fff;
      font-family: 'Open Sans', sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    .h1,
    .h2,
    .h3,
    .h4,
    .h5,
    .h6 {
      color: #222;
    }

    a:not(.btn) {
      color: ${theme().primary};
      text-decoration: none;
      &:hover,
      &:focus {
        color: ${theme().secondary};
      }
    }

    b {
      font-weight: bold;
    }

    .h-100 {
      height: 100% !important;
    }
  `,
}
