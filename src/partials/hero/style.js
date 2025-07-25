/*
Styles for the component
*/

import bs from 'root/src/styles/bootstrap'
import theme from 'root/src/styles/theme'
import { rgba } from 'polished'
import { css } from '@emotion/react'

export default {
  Hero: css`
    padding: 0;
    background-position: center center;
    height: 100vh;
    position: relative;
    @media (max-width: ${bs['breakpoint-max-lg']}) {
      height: auto;
      padding: 160px 0;
      margin-top: 58px;
    }
    ._name {
      font-weight: 700;
      font-size: 68px;
      margin-bottom: 29px;
      letter-spacing: 0.3px;
      color: #fff;
      span {
        color: ${theme().primary};
      }
      @media (max-width: ${bs['breakpoint-max-lg']}) {
        font-size: 62px;
      }
      @media (max-width: ${bs['breakpoint-max-sm']}) {
        font-size: 48px;
      }
    }
    ._headline {
      color: #fff;
      font-weight: 400;
      font-size: 32px;
      margin-bottom: 0;
      letter-spacing: 0.3px;
      & > span {
        font-weight: 600;
      }
      @media (max-width: ${bs['breakpoint-max-lg']}) {
        font-size: 30px;
      }
      @media (max-width: ${bs['breakpoint-max-sm']}) {
        font-size: 26px;
      }
    }
  `,
  MouseShape: css`
    position: absolute;
    width: 29px;
    right: 0;
    bottom: 5.5%;
    left: 0;
    margin: 0 auto;
    box-sizing: content-box;
    cursor: pointer;
    @media (max-width: ${bs['breakpoint-max-lg']}) {
      display: none;
    }
    ._shape {
      width: 3px;
      padding: 5px 11px;
      height: 28px;
      border: 2px solid transparent;
      border-radius: 25px;
      opacity: 0.8;
      box-sizing: content-box;
      border-color: #fff;
      background-color: ${rgba('#000', 0.45)};
      ._wheel {
        background-color: #fff;
        width: 3px;
        height: 9px;
        border-radius: 25%;
        animation-name: scrollDown;
        animation-duration: 1.3s;
        animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
        animation-iteration-count: infinite;
      }

      @keyframes scrollDown {
        0% {
          opacity: 0;
        }

        10% {
          transform: translateY(0);
          opacity: 1;
        }

        100% {
          transform: translateY(15px);
          opacity: 0;
        }
      }
    }
  `,
}
