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
import styled from './style'

// Mobile navbar component
const MobileNav = ({ children }) => {
  // Ref for navbar element
  const navbarRef = useRef(null)

  // State to manage the expansion status of the navbar
  const [expanded, setExpanded] = useState(false)

  // Ref for toggle button
  const navbarToggleRef = useRef(null)

  // Ref for menu
  const NavbarMenuRef = useRef(null)

  // Navbar toggler
  const toggleMobileNav = () => {
    setExpanded((preValue) => !preValue)
  }

  useEffect(() => {
    // Function to handle clicks on the navbar toggle
    function handleToggleClick(event) {
      // Check if click was on navbar toggle element
      const targetInToggle = navbarToggleRef?.current?.contains(event.target)

      // If navbar is collapsed and click was on toggle part, expand it
      if (!expanded && targetInToggle) {
        toggleMobileNav()
      }

      // If navbar is already expanded, collapse it
      else if (expanded) {
        toggleMobileNav()
      }
    }

    // Add mouseup event listener to document
    document.addEventListener('mouseup', handleToggleClick)

    // Cleanup the event listener
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
          src='/logo_top_menu.png' // nebo "/partials/nav/Logo_cerne.png" podle bodu 2
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

      {/* Navbar collapse */}
      {/* Navbar collapse */}
      <Navbar.Collapse className='_nav' id='nav'>
        {/* Logo uprostřed */}
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
        {/* Sociální ikony dole */}
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

// Component to render the sidebar
// ...existing code...
const Sidebar = ({ children }) => {
  // Data to populate sidebar
  const data = {
    toggler: 'Menu',
    status: 'K dispozici',
    author: 'Šenkeřík Filip',
  }

  return (
    <header css={styled.Sidebar}>
      {/* Custom scrollbar for the sidebar */}
      <SimpleBar className='d-none d-lg-flex justify-content-center align-items-center _wrapper'>
        <div>
          {/* Header part */}
          <div className='_header'>
            {/* Avatar image */}
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

            {/* Author name */}
            <span className='_name'>{data.author}</span>

            {/* Author status */}
            <p className='_status'>{data.status}</p>
          </div>

          {/*  Menu part */}
          <div className='_menu'>
            {/*  Menu items container */}
            <div className='_list'>{children}</div>
          </div>
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          {/* Horní logo/profilovka */}

          {/* Spodní logo */}
          <div
            className='_sidebar-logo'
            style={{
              marginTop: 'auto',
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

// ...existing code...

// ...data a další kód...

// ...existing code...

// Main component which renders both mobile navbar and sidebar
const Nav = ({ children }) => (
  <>
    <MobileNav>{children}</MobileNav>
    <Sidebar>{children}</Sidebar>
  </>
)

export default Nav
