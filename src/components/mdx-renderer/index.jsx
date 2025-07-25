/*
MdxRenderer component that takes compiled MDX code and displays it in JSX
*/

import { MDXRemote } from 'next-mdx-remote'
import { MDXProvider } from '@mdx-js/react'

const MdxRenderer = (props) => {
  // Destructure props
  const { frontmatter, compiledSource, scope } = props.serializedSource
  return (
    <MDXProvider components={props.components}>
      <MDXRemote
        frontmatter={frontmatter}
        compiledSource={compiledSource}
        scope={scope}
      />
    </MDXProvider>
  )
}

export default MdxRenderer
