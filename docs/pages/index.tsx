import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>

        <h1 className={'text-purple-500 flex items-center tracking-wider'}>
          - Hello Logseq -
        </h1>

      </main>

      <footer className={styles.footer}>
        <h3 className={'flex items-center'}>
          Footer
        </h3>
      </footer>
    </div>
  )
}

export default Home
