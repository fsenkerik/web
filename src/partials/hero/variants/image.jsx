/*
Represents the background image used in the Hero section
which is also exported to be used in other variants
*/

import { ImageTemplate } from 'root/src/components/section-wrapper'
import heroImg from 'root/public/partials/hero/background.jpg'

const Image = () => (
  <ImageTemplate
    {...{
      alt: 'Hero background',
      src: heroImg,
      brightness: '32%',
      placeholder: 'blur',
      priority: true,
    }}
  />
)

export default Image
