/*
Styled button component with reasonable defaults
*/

import { Button as BSButton } from 'react-bootstrap'
import styled from './style'

const Button = (props) => {
  // Destructure props
  const { children, ...otherProps } = props
  return (
    <BSButton css={styled.Button} {...otherProps}>
      {children}
    </BSButton>
  )
}

export default Button
