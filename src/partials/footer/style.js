/*
Styles for the component
*/

import { css } from '@emotion/react'
import { lighten } from 'polished'
import bs from 'root/src/styles/bootstrap'
import theme from 'root/src/styles/theme'

export default {
  Footer: css`
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    background-color: #111;
    color: #fff;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    ._contact {
      padding: 80px 0;
      border-bottom: 2px solid rgba(85, 85, 85, 0.2);
      @media (max-width: ${bs['breakpoint-max-sm']}) {
        [class*='col-']:not(:last-of-type) {
          [class$='SingleBlock'] {
            margin-bottom: 55px;
          }
        }
      }
    }
    ._mini {
      padding: 44px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: ${bs['breakpoint-max-lg']}) {
        padding: 25px 0;
        text-align: center;
        display: block;
      }
    }
    ._socials {
      margin-bottom: 0;
      line-height: 100%;
      @media (max-width: ${bs['breakpoint-max-lg']}) {
        margin-bottom: 14px;
      }
    }
    ._copyright-notice {
      margin-bottom: 0;
      color: #c7c7c7;
      text-align: right;
      @media (max-width: ${bs['breakpoint-max-lg']}) {
        margin-bottom: 0;
        text-align: center;
      }
      @media (max-width: ${bs['breakpoint-max-sm']}) {
        font-size: 13px;
      }
    }
  `,
  SingleBlock: css`
    text-align: center;
    ._icon {
      width: 41px;
      display: inline-block;
      margin-bottom: 16px;
      margin-top: 3px;
      fill: ${theme().primary};
    }
    ._content {
      margin-bottom: 0;
      margin-top: 8px;
      font-size: 15px;
      color: #dcdcdc;
      a {
        color: #dcdcdc;
        &:hover,
        &:focus {
          color: ${lighten(0.05, '#dcdcdc')};
        }
      }
    }
  `,
  SocialIcon: css`
    fill: #fff;
    height: 26px;
    width: 26px;
    text-align: center;
    display: inline-block;
    border-radius: 20%;
    line-height: 23px;
    margin: 0 6px;
    transition: all 0.1s ease-in-out;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
    ._icon {
      width: 16px;
    }
  `,
}
