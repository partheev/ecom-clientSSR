import Header from '../components/NavBar/Header'
import { GlobalState } from '../StateManagement/GlobalState'
import '../styles/globals.css'
import { reducerContants } from '../utils/reducerContants'
// -------------CAROUSEL CSS---------------
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
// ----------------------------

function MyApp({ Component, pageProps }) {
  return (
    <GlobalState>
      <Header />
      <Component {...pageProps} />
    </GlobalState>
  )
}

export default MyApp
