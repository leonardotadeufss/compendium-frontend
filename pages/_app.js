import GlobalStyles from '../styles/globalstyle'
import { SeriesProvider } from '../src/providers/series'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Compendium RPG</title>
      </Head>
      <SeriesProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </SeriesProvider>

    </>
  )
}

export default MyApp
