/*
Styles for the component
*/

import { css } from '@emotion/react'
import theme from 'root/src/styles/theme'
import { rgba } from 'polished'

export const vars = {
  menuWidth: '235px',
}

export default {
  MobileNav: css`
    padding: 14px 26px;
    &:before {
      content: '';
      background-color: #222;
      width: 100%;
      height: 58px;
      position: absolute;
      top: 0;
      right: 0;
    }
    ._toggler {
      border-color: #222;
      background-color: #333;
      outline: none;
      padding: 4px 10px;
      font-size: 14px;
      border-radius: 3px;
      position: relative;
      display: block;
      color: ${rgba('#fff', 0.8)};
      line-height: 20px;
      font-weight: 300;
      letter-spacing: 1px;
    }
    ._menu {
      width: 200px;
      background-color: #222;
      z-index: 2;
      position: relative;
      padding: 8px 20px;
      top: 8px;
      .nav-link {
        color: ${rgba('#fff', 0.6)};
        font-weight: 400;
        font-size: 14px;
        padding: 7px 0;
        cursor: pointer;
        margin-top: auto;
        &:hover,
        &:focus {
          color: #fff;
        }
      }
    }
    .nav-link {
      color: ${rgba('#fff', 0.6)};
      font-weight: 400;
      font-size: 14px;
      padding: 7px 0;
      cursor: pointer;
      margin-top: auto;
      &:hover,
      &:focus {
        color: #fff;
      }
    }
    ._mobile-logo img {
      width: 40px;
      height: 40px;
    }
    ._mobile-social {
      gap: 40px;
    }
    ._mobile-social a svg,
    ._mobile-social a img {
      width: 40px;
      height: 40px;
    }

    // Zvýraznění pouze pro mobilní zobrazení
    @media (max-width: 991.98px) {
      ._menu .nav-link {
        font-size: 22px;
        line-height: 1.6;
      }
      ._menu a:not(:last-child) {
        margin-bottom: 36px;
      }
    }
    // filepath: c:\Users\filip\Desktop\filipsenkerik.cz\codex-next\src\partials\nav\style.js
    .navbar-collapse._nav {
      position: fixed !important;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #181818;
      z-index: 2000;
      display: flex !important;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0;
      opacity: 0;
      pointer-events: none;
      transform: translateY(-20px);
      transition:
        opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),
        transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .navbar-collapse._nav.show {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
    .navbar-collapse.collapse:not(.show) {
      /* display: none !important;  Odstraň nebo zakomentuj tento řádek */
    }
    ._menu {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .navbar-collapse.collapse:not(.show) {
      display: none !important;
    }
    ._toggler {
      margin-left: auto;
      /* případně další styly */
    }
    ._toggler {
      margin-left: auto;
      background: none;
      border: none;
      box-shadow: none;
      padding: 12px;
      display: flex;
      align-items: center;
      cursor: pointer;
      z-index: 2100;
    }

    .hamburger {
      display: inline-block;
      width: 28px;
      height: 22px;
      position: relative;
    }

    .hamburger span {
      display: block;
      height: 3px;
      width: 100%;
      background: #fff;
      border-radius: 2px;
      position: absolute;
      left: 0;
      transition: 0.3s;
    }

    .hamburger span:nth-child(1) {
      top: -4px;
    }
    .hamburger span:nth-child(2) {
      top: 5px;
    }
    .hamburger span:nth-child(3) {
      top: 14px;
    }
    @media (max-width: 992px) {
      ._mobile-logo img {
        width: 230px !important;
        height: 230px !important;
      }
      ._mobile-social {
        gap: 70px !important;
      }
      ._mobile-social a svg,
      ._mobile-social a img {
        width: 57px !important;
        height: 57px !important;
        bottom: 15px !important;
      }
    }
    @media (max-width: 720px) {
      ._mobile-logo img {
        width: 230px !important;
        height: 230px !important;
      }
      ._mobile-social {
        gap: 70px !important;
      }
      ._mobile-social a svg,
      ._mobile-social a img {
        width: 57px !important;
        height: 57px !important;
        bottom: 15px !important;
      }
    }
    @media (max-width: 480px) {
      ._mobile-logo img {
        width: 150px !important;
        height: 150px !important;
      }
      ._mobile-social {
        gap: 20px !important;
      }
      ._mobile-social a svg,
      ._mobile-social a img {
        width: 35px !important;
        height: 35px !important;
        bottom: 15px !important;
      }
    }
    @media (max-width: 380px) {
      ._mobile-logo img {
        width: 100px !important;
        height: 100px !important;
      }
      ._mobile-social {
        gap: 20px !important;
        bottom: 50px !important;
      }
      ._mobile-social a svg,
      ._mobile-social a img {
        width: 35px !important;
        height: 35px !important;
      }
    }

    /* Aktivní stav - křížek */
    ._toggler._toggler--active .hamburger span:nth-child(1) {
      top: 5px;
      transform: rotate(45deg);
    }
    ._toggler._toggler--active .hamburger span:nth-child(2) {
      opacity: 0;
    }
    ._toggler._toggler--active .hamburger span:nth-child(3) {
      top: 5px;
      transform: rotate(-45deg);
    }
  `,
  Sidebar: css`
    ._wrapper {
      background-color: #111;
      height: 100%;
      left: 0;
      position: fixed;
      top: 0;
      width: ${vars.menuWidth};
      z-index: 999;
      flex-wrap: wrap;
      .simplebar-content-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
      }
      ._sidebar-logo {
        margin-top: auto;
        margin-bottom: 32px;
        width: 100%;
        display: flex;
        justify-content: center;
      }

      ._sidebar-social {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 12px; /* mezera mezi ikonami */
        margin-bottom: 16px; /* případně uprav podle potřeby */
      }

      .simplebar-track {
        .simplebar-scrollbar {
          &:before {
            background: #fff;
          }

          &.simplebar-visible:before {
            opacity: 0.5;
          }
        }

        &.simplebar-vertical {
          width: 10px;

          .simplebar-scrollbar {
            height: auto;
          }
        }

        &.simplebar-horizontal {
          height: 10px;

          .simplebar-scrollbar {
            width: auto;
          }
        }
      }
      ._header {
        padding-top: 24px;
        padding-bottom: 60px;
        text-align: center;
      }
      ._avatar {
        border-radius: 50%;
        object-fit: cover;
        border: 5px solid #484848 !important;
        margin-bottom: 16px !important;
      }
      ._name {
        display: block;
        color: #fff;
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 8px;
      }
      ._status {
        color: #8a8a8a;
        line-height: 100%;
        margin-top: 9px;
        display: block;
        margin-bottom: 0;
        font-size: 14px;
      }
      ._menu {
        padding-bottom: 24px;
      }
      ._list {
        margin-bottom: 0;
        text-align: center;
        line-height: 100%;
        a:not(:last-child) {
          margin-bottom: 28px;
        }
        .nav-link {
          &.--active {
            color: ${theme().primary}!important;
          }
          color: ${rgba('#e8e8e8', 0.95)}!important;
          font-size: 16px;
          letter-spacing: 0.5px;
          line-height: 100%;
          padding: 0;
          cursor: pointer;
        }
      }
    }
  `,
}
