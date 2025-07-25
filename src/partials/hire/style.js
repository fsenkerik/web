/*
Styles for the component
*/

import { css } from '@emotion/react'
import bs from 'root/src/styles/bootstrap'

export default {
  Hire: css`
    padding-top: 68px !important;
    padding-bottom: 68px !important;
    position: relative;
    ._row {
      align-items: center;
      position: relative;
      z-index: 1;
    }
    ._wrapper {
      @media (max-width: ${bs['breakpoint-max-md']}) {
        text-align: center;
      }
    }
    ._button-wrapper {
      display: flex;
      justify-content: flex-end;
      @media (max-width: ${bs['breakpoint-max-md']}) {
        justify-content: center;
      }
      ._button {
        padding: 12px 54px;
        @media (max-width: ${bs['breakpoint-max-md']}) {
          padding: 10px 38px;
        }
      }
    }
    ._title {
      font-weight: 700;
      margin-bottom: 14px;
      color: #f0f0f0;
      font-size: 2.5rem;
      @media (max-width: ${bs['breakpoint-max-md']}) {
        font-size: 34px;
      }
      @media (max-width: ${bs['breakpoint-max-sm']}) {
        margin-bottom: 18px;
      }
    }
    ._description {
      font-size: 15px;
      margin-bottom: 0;
      color: #9f9f9f;
      @media (max-width: ${bs['breakpoint-max-md']}) {
        margin-bottom: 26px;
        font-size: 14px;
      }
    }
  `,
}
