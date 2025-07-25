import React from 'react'

const SocialIcon = ({ url, Icon, color = '#fff', size = 32 }) => (
  <a
    href={url}
    target='_blank'
    rel='noopener noreferrer'
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      color,
      margin: '0 8px',
      textDecoration: 'none',
    }}
    aria-label='Sociální síť'
  >
    <Icon width={size} height={size} fill={color} />
  </a>
)

export default SocialIcon
