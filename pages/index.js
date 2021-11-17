import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Clafiya - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/dashboard">
        <a>
          See Dashboard
        </a>
      </Link>
    </div>
  )
}
