/*
_document.jsx is a special Next.js file that serves as the entry point for the application
It is responsible for initializing the pages
Read more: https://nextjs.org/docs/pages/building-your-application/routing/custom-document
*/

import { Html, Head, Main, NextScript } from 'next/document'
import { HeadContent } from './_app'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Include the <head> content defined in _app.jsx */}
        <HeadContent />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
