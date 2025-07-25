/*
Styles for the component
*/

import { css } from '@emotion/react'
import bs from 'root/src/styles/bootstrap'
import theme from 'root/src/styles/theme'

export default {
  Blog: css`
    display: block;
  `,
  PostsList: css`
    ._nav {
      margin-bottom: 7px;
      margin-top: -27px;
      display: flex;
      justify-content: flex-end;
      span {
        font-weight: 600;
        color: ${theme().primary};
        color: #444;
        cursor: pointer;
        &:not(:last-child) {
          margin-right: 9px;
        }
        &.--active {
          color: ${theme().primary};
        }
      }
    }
    .swiper {
      padding-right: calc(var(--bs-gutter-x) * 0.5);
      padding-left: calc(var(--bs-gutter-x) * 0.5);
    }
  `,
  Post: css`
    background-color: transparent;
    border: none;
    ._image-wrapper {
      cursor: pointer;
      position: relative;
      aspect-ratio: 45/28;
      overflow: hidden;
    }
    ._date {
      color: #fff;
      position: absolute;
      left: 0;
      bottom: 0;
      padding: 0 14px;
      display: inline-block;
      background-color: ${theme().primary};
    }
    ._content {
      padding: 15px 0 0 0;
    }
    ._title {
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 8px;
      letter-spacing: 0.1px;
      cursor: pointer;
    }
    ._summary {
      font-size: 13px;
      line-height: 1.7;
      margin-bottom: 8px;
      font-weight: 400;
    }
    ._tags {
      ._key {
        margin-right: 2px;
        color: #333;
      }
      ._list {
        display: inline-block;
      }
      ._tag {
        color: ${theme().primary};
        cursor: default;
      }
      ._delimiter {
        color: #333;
        margin-left: 6px;
        margin-right: 6px;
        display: inline-block;
      }
    }
  `,
  PostLightboxLayout: css`
    margin-top: 58px;
    margin-bottom: 60px;
    ._post-wrapper {
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: bold;
        margin-top: 40px;
        margin-bottom: 17px;
      }

      h1 {
        font-size: 34px;
      }

      h2 {
        font-size: 27px;
      }

      h3 {
        font-size: 21px;
      }
      ._title {
        font-weight: 700;
        font-size: 42px;
        @media (max-width: ${bs['breakpoint-max-sm']}) {
          font-size: 40px;
        }
      }
      ._summary {
        font-weight: 500;
        color: #555;
        font-size: 16px;
        margin-bottom: 32px;
        @media (max-width: ${bs['breakpoint-max-sm']}) {
          font-size: 15px;
        }
      }
      ._content {
        position: relative;
      }
      ._post-thumbnail {
        position: relative !important;
        display: block;
        height: auto;
        max-width: 100%;
      }
    }
  `,
  PostLightbox: css``,
}
