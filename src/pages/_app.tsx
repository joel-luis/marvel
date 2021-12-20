import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/global'
import ModalProvider from 'context/modalContext'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Marvel</title>
        <meta name="description" content="NextJS" />
      </Head>
      <ModalProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ModalProvider>
    </>
  )
}

export default App
