/*
Styles for the component
*/

import { css } from '@emotion/react'
import bs from 'root/src/styles/bootstrap'
import { vars as navVars } from '../../partials/nav/style'

export default {
  ScrollWrapper: css`
    ._sections {
      position: relative;
      padding-left: ${navVars.menuWidth};
      @media (max-width: ${bs['breakpoint-max-lg']}) {
        padding-left: 0;
      }
    }
  `,
}
