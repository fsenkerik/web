/*
Styles for the component
*/

import { css } from '@emotion/react'
import theme from 'root/src/styles/theme'
import bs from 'root/src/styles/bootstrap'

export default {
  Services: css`
    display: block;
    padding-bottom: calc(85px - 30px);
    @media (max-width: ${bs['breakpoint-max-sm']}) {
      padding-bottom: calc(65px - 30px);
    }
  `,
  Service: css`
    text-align: center;
    padding: 38px 24px;
    margin-bottom: 30px;
    background-color: #fff;
    border: 1px solid rgba(214, 214, 214, 0.8);
    ._icon {
      width: 50px;
      fill: ${theme().primary};
      margin-bottom: 22px;
      display: inline-block;
    }
    ._title {
      font-size: 18px;
      font-weight: 700;
      letter-spacing: -0.5px;
      margin-bottom: 12px;
      color: #333;
    }
    ._description {
      margin-bottom: 0;
    }
  `,
}
