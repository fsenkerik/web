/*
This file definies the website metadata tags
*/

import Head from 'next/head'

const Metadata = () => (
  <Head>
    <title>Šenkeřík Filip</title>
    <meta name='description' content='Webový vývojář a pedagog – Šenkeřík Filip' />
    <link rel='icon' href='/favicon-dark.png' sizes='192x192' media='(prefers-color-scheme: light)' />
    <link rel='icon' href='/favicon-light.png' sizes='192x192' media='(prefers-color-scheme: dark)' />
    <link rel='icon' href='/favicon-dark.png' sizes='192x192' />
    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
  </Head>
)

export default Metadata
