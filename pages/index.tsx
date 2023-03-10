import Head from 'next/head';

import { client } from '@/lib/client';
import { Product, FooterBanner, HeroBanner } from '@/components/';

export default function Home({ products, bannerData }) {
  return (
    <>
      <Head>
        <title>Noxfall Labs, Inc.</title>
        <meta name="description" content="Created by Milos G." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <main className="app">
        <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
        <div className="products-heading">
          <h2>Best Selling Products</h2>
          <p>Speakers of many variations</p>
        </div>
        <div className="products-container">
          {products?.map((product) => <Product key={product._id} product={product} />)}
        </div>
        <FooterBanner footerBanner={bannerData && bannerData[0]} />
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
};
