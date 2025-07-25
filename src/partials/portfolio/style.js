/*
Styles for the component
*/

import { css } from '@emotion/react'
import bs from 'root/src/styles/bootstrap'
import theme from 'root/src/styles/theme'
import { rgba } from 'polished'

export default {
  Portfolio: css`
    padding-bottom: calc(85px - 30px);
    @media (max-width: ${bs['breakpoint-max-sm']}) {
      padding-bottom: calc(65px - 30px);
    }
  `,
  MansoryNav: css`
    margin-bottom: 14px;
    ._item {
      font-weight: 600;
      padding: 0;
      font-size: 14px;
      cursor: pointer;
      border-bottom: 1px solid transparent;
      transition: all 0.1s ease-in-out;
      position: relative;
      letter-spacing: 0.3px;
      color: #444;
      &:not(:last-child) {
        margin-right: 16px;
      }
      &.--active,
      &:hover,
      &:focus {
        color: ${theme().primary};

        &:before {
          content: '';
          height: 1px;
          background-color: ${theme().primary};
          width: 100%;
          position: absolute;
          bottom: 0;
        }
      }
    }
  `,
  MansoryItem: css`
    margin-bottom: 30px;
    ._grid-image {
      object-fit: cover;
      transition: all 0.15s ease-in-out;
    }
    ._grid-overlay {
      cursor: pointer;
      position: absolute;
      transition: all 0.15s ease-in-out;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ._content {
      text-align: center;
      padding: 3px 18px;
      width: 100%;
    }
    ._title {
      font-size: 15px;
      font-weight: 400;
      margin-bottom: 10px;
      line-height: 1.8;
      color: #fff;
      @media (max-width: ${bs['breakpoint-max-sm']}) {
        font-size: 14px;
      }
    }
    ._action {
      font-weight: 600;
      display: inline-block;
      color: ${rgba(133, 133, 133, 1)};
      color: ${theme().primary};
    }
  `,
  PortfolioLightbox: css`
    .modal-body {
      .swiper {
        @media (max-width: ${bs['breakpoint-max-lg']}) {
          margin-bottom: 35px;
        }
      }
    }
  `,
  PortfolioLightboxLayout: css`
    margin-top: 58px;
    margin-bottom: 60px;
    ._content {
      margin-left: 12px;
      @media (max-width: ${bs['breakpoint-max-lg']}) {
        margin-left: 0;
      }
    }
    ._title {
      font-weight: 700;
      margin-bottom: 25px;
      font-size: 42px;
      @media (max-width: ${bs['breakpoint-max-sm']}) {
        font-size: 36px;
      }
    }

    ._description {
      p {
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 30px;
        }
      }
    }
  `,
  LightboxContentInfo: css`
    margin-bottom: 40px;
    ._single-info {
      width: 50%;
      margin-bottom: 15px;

      @media (max-width: ${bs['breakpoint-max-sm']}) {
        width: auto;
        display: block;
        margin-bottom: 10px;
      }

      &:not(:last-child) {
        margin-right: 0;
      }

      &:nth-last-of-type(-n + 2) {
        margin-bottom: 0;
        @media (max-width: ${bs['breakpoint-max-sm']}) {
          margin-bottom: 10px;
        }
      }

      & > span {
        margin-right: 10px;
        color: #444;

        &.info-variable {
          font-weight: 600;
        }
        &.info-value {
          display: inline-block;
          margin-bottom: 0;
          a {
            cursor: default;
          }
        }
      }
    }
  `,
}
