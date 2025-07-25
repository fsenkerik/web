/*
Styles for the component
*/

import { css } from '@emotion/react'
import bs from 'root/src/styles/bootstrap'
import theme from 'root/src/styles/theme'

export default {
  Testimonials: css`
    display: block;
    .swiper {
      padding-right: calc(var(--bs-gutter-x) * 0.5);
      padding-left: calc(var(--bs-gutter-x) * 0.5);
      .swiper-wrapper {
        padding-bottom: 53px;
      }
      .swiper-pagination {
        bottom: 5px;

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #869791;
          opacity: var(--swiper-pagination-bullet-inactive-opacity, 0.3);
          &:hover,
          &.swiper-pagination-bullet-active {
            opacity: var(--swiper-pagination-bullet-opacity, 1);
          }
        }
      }
    }
  `,
  Testimonial: css`
    padding: 40px 30px;
    background-color: #fff;
    text-align: center;
    border: 1px solid rgba(214, 214, 214, 0.8);
    ._icon {
      width: 50px;
      margin-bottom: 18px;
      display: inline-block;
      fill: ${theme().primary};
      @media (max-width: ${bs['breakpoint-max-md']}) {
        width: 58px;
        margin-bottom: 22px;
      }
    }
    ._message {
      margin-bottom: 24px;
      @media (max-width: ${bs['breakpoint-max-md']}) {
        margin-bottom: 28px;
      }
    }
    ._avatar {
      object-fit: cover;
      border-radius: 50%;
      width: 56px;
      margin-bottom: 10px;
      display: inline-block;
    }
    ._name {
      font-size: 14px;
      display: block;
      font-weight: 600;
      color: #3c3c3c;
    }
  `,
}
