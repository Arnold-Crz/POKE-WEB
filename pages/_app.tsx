import '../styles/globals.css'

import { darkTheme } from '../themes';

import { NextUIProvider } from '@nextui-org/react';

import type { AppProps } from 'next/app'


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <NextUIProvider theme={darkTheme} >
       <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
