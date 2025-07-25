/*
Styles for the component
*/

import { css } from '@emotion/react'

export default {
  Lightbox: css`
    background-color: #fff;
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    transition: opacity 0.1s ease-in-out;
    .modal-dialog {
      transform: none !important;
    }
    .modal-header {
      border-bottom: 0;
      padding: 0;
      padding-top: 0;

      .btn-close {
        padding: 6px;
        background-size: 1.3em;
        position: fixed;
        right: 4vw;
        top: 30px;
        z-index: 99;
        margin-right: 0;
        opacity: 0.575;
      }
    }

    .modal-body {
      padding: 0;
      overflow-y: scroll;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  `,
}
