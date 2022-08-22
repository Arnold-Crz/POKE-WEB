import Head from 'next/head';

import { Navbar } from '../ui';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

const origin = typeof window !== 'undefined' ? window.location.origin : '';

export function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon'}</title>
        <meta name="author" content="Arnold Cruz" />
        <meta name="description" content={`Informacion del pokemon ${title}`} />
        <meta
          name="keywords"
          content={`${title} pokemon, pokeapi, react, next `}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content={`Informacion del pokemon${title}`} />
        <meta
          property="og:description"
          content={`Esta es la pagina del pokemon ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/pokeportada.jpg`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0 1rem',
        }}
      >
        {children}
      </main>
    </>
  );
}
