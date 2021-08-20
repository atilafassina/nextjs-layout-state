import Head from 'next/head'
import Header from '@components/header'
import Footer from '@components/footer'
import { PokemonProvider } from 'context/main-data'

export default function MainLayout({ children }) {
  return (
    <PokemonProvider>
      <Head>
        <title>Layout State</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Header title="Layout State" />
        <main className="mainWrapper">{children}</main>
        <Footer />
      </div>
    </PokemonProvider>
  )
}
