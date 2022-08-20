import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'
import '../styles/main.css'
import '../styles/cards.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfólio Web - Rafael Rocha Souza</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
