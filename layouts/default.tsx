import Head from 'next/head'
import Header from '@components/header'
import Footer from '@components/footer'
import { LinksTable } from '@components/links-table'
import { Hints } from '@components/hints'

export default function DefaultLayout({ children }) {
  return (
    <>
      <Head>
        <title>Layout State!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Header title="Layout State" />
        <main className="mainWrapper">
          {children}
          <LinksTable />
          <Hints />
        </main>
        <Footer />
      </div>
    </>
  )
}
