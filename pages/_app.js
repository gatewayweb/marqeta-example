import '../styles/globals.css';

import Head from 'next/head';

import Layout from '@components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/cropped-marqeta-favicon-512-32x32.png" />
        <meta name="description" content="Marqeta coding challenge." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
