/*
Styles for the component
*/

import { css } from '@emotion/react'
import { lighten } from 'polished'
import theme from 'root/src/styles/theme'
import bs from 'root/src/styles/bootstrap'

export default {
  Contact: css`
    ._group {
      margin-bottom: 50px;
      @media (max-width: ${bs['breakpoint-max-xl']}) {
        margin-bottom: 40px;
      }
    }
    .form-control {
      padding: 9px 14px;
      height: 41px;
      border: none;
      font-size: 14px;
      border-radius: 0;
      border-bottom: 1px solid #d4d4d4;
      background-color: #fff;
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-text-fill-color: #555 !important;
        -webkit-box-shadow: 0 0 0px 1000px #fff inset;
        transition: background-color 5000s ease-in-out 0s;
      }
      &,
      &::placeholder {
        color: #555;
      }
      &:focus {
        box-shadow: none;
        border-bottom: 1px solid ${lighten(0.1, theme().primary)};
      }
    }
    #formMessage {
      height: auto;
    }
    ._submit {
      padding: 10px 30px;
    }
    ._feedback {
      margin: 0;
      margin-top: 8px;
      display: none;
    }
  `,
}
