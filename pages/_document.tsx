import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react';

export default function Document() {
  return (
    <Html lang='es' >
      <Head >
        <meta charSet='utf-8' />
      
        <meta name='description' content='Aplicacion de Pokemon usando tecnologias web Next Js y TypeScript' />
        <meta name='author' content='Arnold_Cruz' />
        <meta name='keywords' content='pokemon, next, typescript, react, nextjs, js' />
        <meta name='robots' content='index, follow' />
        <meta name='language' content='es' />
        <meta name='copyright' content='Arnold_Cruz' />
        {CssBaseline.flush()}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}