/*
This file defines global styling related utilities
*/

import { darken } from 'polished'
import vars from './bootstrap'

// Function to get primary theme color from vars object
const getThemeColor = () => vars[`theme-${vars.theme}`]

// Function to get inverted theme color from vars object
const getThemeInvert = () => vars[`theme-${vars.invert}`]

// Theme object function
const theme = () => ({
  // Primary theme color
  primary: getThemeColor(),

  // Secondary theme color (darkened)
  secondary: darken(0.15, getThemeColor()),

  // Inverted theme color
  invert: getThemeInvert(),
})

// Export theme function
export default theme
