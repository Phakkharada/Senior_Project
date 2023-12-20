import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Kanit } from 'next/font/google'
import Layout from "@/components/Layout";
import Head from 'next/head';

const kanit = Kanit({
  display: 'fallback',
  weight: ['400', '700'],
  subsets: ['thai']
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BTS</title>
        <link rel="icon" href="/logo2.png" type="image/png" />
        {/* Add other meta tags, stylesheets, etc. as needed */}
      </Head>
      <div className={`${kanit.className}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  )
}
