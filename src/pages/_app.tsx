import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marvel</title>
        <meta name="description" content="NextJS" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
