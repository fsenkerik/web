/*
Styles for the component
*/

import { css } from '@emotion/react'
import bs from 'root/src/styles/bootstrap'
import theme from 'root/src/styles/theme'
import { rgba } from 'polished'

export default {
  About: css`
    @media (max-width: ${bs['breakpoint-max-sm']}) {
      padding-bottom: 51px;
    }
    ._image {
      img {
        background-color: transparent;
        border-color: ${rgba('#000', 0.18)};
        padding: 0.25rem;
        max-width: 100%;
        height: auto;
        width: 430px;
        @media (min-width: ${bs['breakpoint-max-lg']}) and (max-width: ${bs[
            'breakpoint-max-xl'
          ]}) {
          height: 440px;
          object-fit: cover;
        }
        @media (max-width: ${bs['breakpoint-max-lg']}) {
          object-fit: cover;
          height: 250px;
          width: 250px;
          display: block;
          margin: 0 auto 40px auto;
          border-radius: 50%;
        }
        @media (max-width: ${bs['breakpoint-max-md']}) {
          height: 200px;
          width: 200px;
        }
        @media (max-width: ${bs['breakpoint-max-sm']}) {
          margin: 0 auto 32px auto;
        }
      }
    }
    ._subtitle {
      font-size: 22px;
      margin-bottom: 8px;
      color: ${theme().primary};
      font-weight: 400;
      @media (min-width: ${bs['breakpoint-max-lg']}) and (max-width: ${bs[
          'breakpoint-max-xl'
        ]}) {
        display: none;
      }
      @media (max-width: ${bs['breakpoint-max-lg']}) {
        font-size: 18px;
      }
      @media (max-width: ${bs['breakpoint-max-sm']}) {
        font-size: 17px;
      }
    }
    ._title {
      font-weight: 700;
      margin-bottom: 15px;
      font-size: 28px;
      line-height: 1.5;
      @media (min-width: ${bs['breakpoint-max-lg']}) and (max-width: ${bs[
          'breakpoint-max-xl'
        ]}) {
        font-size: 22px;
      }
      @media (max-width: ${bs['breakpoint-max-lg']}) {
        font-size: 24px;
      }
      @media (max-width: ${bs['breakpoint-max-sm']}) {
        font-size: 22px;
      }
    }
    ._description {
      font-size: 15px;
      @media (min-width: ${bs['breakpoint-max-lg']}) and (max-width: ${bs[
          'breakpoint-max-xl'
        ]}) {
        font-size: 14px;
        p:last-child {
          padding-bottom: 20px !important;
        }
      }
      @media (max-width: ${bs['breakpoint-max-lg']}) {
        font-size: 14px;
        p:last-child {
          padding-bottom: 24px !important;
        }
      }

      p:last-child {
        padding-bottom: 27px;
        margin-bottom: 0;
        border-bottom: 2px solid rgba(0, 0, 0, 0.08);
      }
    }
    ._address {
      font-size: 15px;
      padding: 27px 0;
      margin-bottom: 4px;
      @media (min-width: ${bs['breakpoint-max-lg']}) and (max-width: ${bs[
          'breakpoint-max-xl'
        ]}) {
        font-size: 14px;
        padding: 20px 0;
      }
      @media (max-width: ${bs['breakpoint-max-lg']}) {
        font-size: 14px;
        padding: 24px 0;
        margin-bottom: 0;
      }

      & > .row:last-child {
        ._info {
          margin-bottom: 0;
          @media (max-width: ${bs['breakpoint-max-md']}) {
            margin-bottom: 10px;
          }
        }
      }
      ._info {
        margin-bottom: 10px;

        & > span {
          font-weight: 600;
          margin-right: 10px;
          color: #333;
        }

        & > p {
          display: inline-block;
          margin-bottom: 0;
        }
      }
    }
    ._button {
      margin-right: 16px;
      @media (max-width: ${bs['breakpoint-max-sm']}) {
        margin-bottom: 14px;
      }
    }
  `,
}
