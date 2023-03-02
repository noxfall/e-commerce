import Head from 'next/head'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Noxfall Labs, Inc</title>
        <meta name="description" content="Created by Milos G." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </Head>
      <main className={styles.main}>
      </main>
    </>
  )
}
