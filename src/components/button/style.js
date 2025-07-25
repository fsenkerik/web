/*
Styles for the component
*/

import { css } from '@emotion/react'

export default {
  Button: css`
    padding: 10px 38px;
    font-size: 14px;
    border-radius: 30px;

    // Displays a light colored button when the class is passed
    &.btn-light {
      border: 1px solid #c5c5c5;
      background: #fff;
      &:hover {
        background-color: #bfbfbf;
        border: 1px solid #c5c5c5;
      }
    }
  `,
}
