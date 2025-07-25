/*
ScrollWrapper is used to connect the navbar/sidebar links with page sections
Clicking on each navbar link will make the page scroll to the desired section
*/

import React, { useMemo, Children } from 'react'
import Nav from 'root/src/partials/nav'
import { Link as ScrollLink } from 'react-scroll'
import styled from './style'

const ScrollWrapper = ({ children }) => {
  // Count number of children (sections)
  const childrenLength = Children.count(children)

  // Create refs for each section
  const sectionRefs = useMemo(
    () =>
      Array(childrenLength)
        .fill(0)
        .map(() => React.createRef()),
    [childrenLength],
  )

  // Populate nav links and sections
  const populate = {
    menuNav: [],
    sections: [],
  }

  // Map over children
  React.Children.map(children, (child, i) => {
    // Get child props
    const childProps = child.props

    // Clone section with ref
    populate.sections.push(
      React.cloneElement(child, {
        innerRef: childProps.nav != null ? sectionRefs[i] : undefined,
        key: `${childProps.id}-section`,
      }),
    )

    // Add nav link if nav prop exists
    if (childProps.nav != null) {
      populate.menuNav.push(
        <ScrollLink
          key={`${childProps.id}-nav`}
          className='nav-link'
          activeClass='--active'
          to={child.props.id}
          spy={true}
          smooth={true}
          duration={600}
        >
          {child.props.nav}
        </ScrollLink>,
      )
    }
  })

  // Return nav and sections
  return (
    <div css={styled.ScrollWrapper}>
      <Nav>{populate.menuNav}</Nav>
      <div className='_sections'>{populate.sections}</div>
    </div>
  )
}

export default ScrollWrapper
