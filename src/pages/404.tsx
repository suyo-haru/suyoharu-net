import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Page404() {
  return (
    <>
      <Head>
        <title>404 - suyoharu</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>ページがみつかりません。</h1>
        <div>
          (´・ω・`)
        </div>
      </main>
    </>
  )
}
