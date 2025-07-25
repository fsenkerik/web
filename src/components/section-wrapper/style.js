/*
Styles for the component
*/

import { css } from '@emotion/react'
import bs from 'root/src/styles/bootstrap'

export default {
  SectionHeader: css`
    text-align: left;
    margin-bottom: 48px;
    &.heading-center {
      text-align: center;
    }
    ._section-title {
      font-weight: 800;
      font-size: 40px;
      margin-bottom: 12px;
      letter-spacing: -0.25px;
      line-height: 100%;
      position: relative;
      z-index: 9;
      display: inline-block;
      @media (max-width: ${bs['breakpoint-max-sm']}) {
        font-size: 34px;
      }
    }
    ._section-description {
      font-size: 15px;
      @media (max-width: ${bs['breakpoint-max-md']}) {
        font-size: 14px;
      }
    }
  `,
  SectionWrapper: css`
    padding: 85px 40px;
    background-color: #fff;
    &.--alt-bg {
      background-color: #f7f7f7;
    }
    @media (max-width: ${bs['breakpoint-max-sm']}) {
      padding: 65px 15px;
    }
  `,
  Image: ({ brightness }) => css`
    object-fit: cover;
    height: 100%;
    width: 100%;
    filter: brightness(${brightness});
    position: absolute;
    top: 0;
    left: 0;
  `,
}
