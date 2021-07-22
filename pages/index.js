import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/NavBar'
import Footer from '../comps/Footer'
import Link from 'next/link'

export default function Home () {
  return (
    <>
      <Head>
        <title>MUTU | home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepge</h1>
        <p className={styles.text}>Next.js 为您提供生产环境所需的所有功能以及最佳的开发体验：包括静态及服务器端融合渲染、 支持 TypeScript、智能化打包、 路由预取等功能 无需任何配置。</p>
        <p className={styles.text}>Next.js 为您提供生产环境所需的所有功能以及最佳的开发体验：包括静态及服务器端融合渲染、 支持 TypeScript、智能化打包、 路由预取等功能 无需任何配置。</p>
        <Link href="/mutu">
          <a className={styles.btn}>See MUTU</a>
        </Link>
      </div>
    </>
  )
}
