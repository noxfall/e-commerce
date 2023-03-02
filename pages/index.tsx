import Head from 'next/head';

import { Product, FooterBanner, HeroBanner } from '@/components/';

export default function Home() {
  return (
    <>
      <Head>
        <title>Noxfall Labs, Inc</title>
        <meta name="description" content="Created by Milos G." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <main className="app">
        <HeroBanner />
        <div className="products-heading">
          <h2>Best Selling Products</h2>
          <p>Speakers of many variations</p>
        </div>
        <div className="products-container">
          {['Product 1', 'Product 2'].map((product) => product)}
        </div>
        <FooterBanner />
      </main>
    </>
  )
}
