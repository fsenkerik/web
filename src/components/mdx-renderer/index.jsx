/*
MdxRenderer component that takes compiled MDX code and displays it in JSX
*/

import { MDXRemote } from 'next-mdx-remote'

const MdxRenderer = (props) => {
  const { frontmatter, compiledSource, scope } = props.serializedSource
  return (
    <MDXRemote
      compiledSource={compiledSource}
      frontmatter={frontmatter}
      scope={scope}
      components={props.components}
    />
  )
}

export default MdxRenderer
