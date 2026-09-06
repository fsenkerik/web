/*
This component defines a mobile navbar and sidebar
The mobile navbar is designed for small screens, while the sidebar is intended for larger screens
Both components function and behave similarly
This component is consumed by the ScrollWrapper component, which populates it with data
*/

import React, { useState, useRef, useEffect } from 'react'
import * as icons from '@swiftcarrot/react-ionicons'
import SocialIcon from 'root/src/components/SocialIcon'
import { Nav as BSNav, Navbar } from 'react-bootstrap'
import SimpleBar from 'simplebar-react'
import Image from 'next/image'
import authorImg from 'root/public/partials/nav/avatar.jpg'
import LanguageSwitcher from 'root/src/components/language-switcher'
import { useLanguage } from 'root/src/context/LanguageContext'
import styled from './style'

// Mobile navbar component
const MobileNav = ({ children }) => {
  const navbarRef = useRef(null)
  const [expanded, setExpanded] = useState(false)
  const navbarToggleRef = useRef(null)
  const NavbarMenuRef = useRef(null)

  const toggleMobileNav = () => {
    setExpanded((preValue) => !preValue)
  }

  useEffect(() => {
    function handleToggleClick(event) {
      const targetInToggle = navbarToggleRef?.current?.contains(event.target)
      if (!expanded && targetInToggle) {
        toggleMobileNav()
      } else if (expanded) {
        toggleMobileNav()
      }
    }
    document.addEventListener('mouseup', handleToggleClick)
    return () => {
      document.removeEventListener('mouseup', handleToggleClick)
    }
  }, [expanded])

  return (
    <Navbar
      ref={navbarRef}
      expanded={expanded}
      css={styled.MobileNav}
      className='d-md-block d-lg-none'
      variant='dark'
      expand='lg'
      fixed='top'
    >
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Image
          src='/logo_top_menu.png'
          alt='Logo'
          width={57}
          height={57}
          style={{
            display: 'block',
            zIndex: 1500,
            position: 'relative',
            marginTop: '-15px',
          }}
        />
        {/* Language switcher in mobile top bar — always visible, not in hamburger */}
        <div style={{ marginLeft: 12, marginTop: -15, zIndex: 1500, position: 'relative' }}>
          <LanguageSwitcher />
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <Navbar.Toggle
            className={`_toggler${expanded ? ' _toggler--active' : ''}`}
            ref={navbarToggleRef}
            aria-controls='nav'
          >
            <span className='hamburger'>
              <span />
              <span />
              <span />
            </span>
          </Navbar.Toggle>
        </div>
      </div>

      <Navbar.Collapse className='_nav' id='nav'>
        <div
          className='_mobile-logo'
          style={{
            position: 'absolute',
            left: '50%',
            top: 10,
            transform: 'translateX(-50%)',
            zIndex: 2101,
            pointerEvents: 'none',
          }}
        >
          <Image
            src='/logo_hamburger.png'
            alt='Logo'
            width={230}
            height={230}
            style={{ display: 'block' }}
          />
        </div>
        <BSNav ref={NavbarMenuRef} className='me-auto _menu'>
          {children}
        </BSNav>
        <div
          className='_mobile-social'
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: 50,
            position: 'absolute',
            left: 0,
            bottom: 80,
            zIndex: 2101,
          }}
        >
          <SocialIcon
            url='https://www.instagram.com/f.senkerik/'
            Icon={icons.LogoInstagram}
            color='#C32361'
            size={60}
          />
          <SocialIcon
            url='https://www.facebook.com/filip.senkerik.56'
            Icon={icons.LogoFacebook}
            color='#3B5998'
            size={60}
          />
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

const Sidebar = ({ children }) => {
  const { t } = useLanguage()

  return (
    <header css={styled.Sidebar}>
      <SimpleBar className='d-none d-lg-flex justify-content-center align-items-center _wrapper'>
        <div>
          <div className='_header'>
            <a style={{ overflow: 'hidden' }} href='#home'>
              <Image
                className='_avatar'
                src={authorImg}
                width={110}
                height={110}
                sizes='110px'
                placeholder='blur'
                alt='Profile avatar'
                priority={true}
              />
            </a>
            <span className='_name'>Šenkeřík Filip</span>
            <p className='_status'>{t.sidebar.status}</p>
          </div>

          <div className='_menu'>
            <div className='_list'>{children}</div>
          </div>
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          {/* Language switcher centered between nav and logo */}
          <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto 0', marginBottom: 32 }}>
            <LanguageSwitcher />
          </div>
          <div
            className='_sidebar-logo'
            style={{
              marginBottom: 32,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Image
              src='/Logo_cerne.png'
              alt='Logo'
              width={80}
              height={80}
              style={{ display: 'block' }}
            />
          </div>
          <div className='_sidebar-social'>
            <SocialIcon
              url='https://www.instagram.com/f.senkerik/'
              Icon={icons.LogoInstagram}
              color='#C32361'
            />
            <SocialIcon
              url='https://www.facebook.com/filip.senkerik.56'
              Icon={icons.LogoFacebook}
              color='#3B5998'
            />
          </div>
        </div>
      </SimpleBar>
    </header>
  )
}

const Nav = ({ children }) => (
  <>
    <MobileNav>{children}</MobileNav>
    <Sidebar>{children}</Sidebar>
  </>
)

export default Nav
