import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>すよはる</title>
        <meta name="description" content="工事中" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>工事中</h1>
        <div>
          (´・ω・`)
        </div>
        <address>
          <p><s>Twitter</s><span> </span><a href="https://links.suyoharu.net/x">X: @suyo_haru</a></p>
        </address>
      </main>
    </>
  )
}
