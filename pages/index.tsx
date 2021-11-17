import { useEffect } from 'react'
import MainLayout from '@layouts/main'
import { InferGetStaticPropsType } from 'next'
import { usePokemon } from 'context/main-data'
import { LinksTable } from '@components/links-table'
import { fetchRandomPkm } from 'utils/fetch-pokemon'

export default function StatefulPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { pokemon } = props
  const { setPokemon } = usePokemon()
  useEffect(() => {
    setPokemon(pokemon)
    console.log(props)
  }, [pokemon])
  return (
    <>
      <div className="description">
        <p>This is a proof-of-concept (PoC).</p>
        <p>
          The app is intentionally over-engineered to exemplify how to omit
          state from different pages in a Next.js application
        </p>
        <p>
          To learn more, check the article on{' '}
          <a href="https://www.smashingmagazine.com/2021/08/state-management-nextjs/" target="_blank" rel="noopener">
            Smashing Magazine
          </a>
        </p>
      </div>
      <LinksTable />
      <section>
        <h2>
          <code>state</code>
        </h2>
        <p>Your Pokemon is: {pokemon.name}</p>
        <img src={pokemon.sprites.front_default} />
      </section>
      <aside>
        <p>
          open your <b>DevTools</b> to check what <code>props</code> this page
          receives
        </p>
      </aside>
    </>
  )
}

StatefulPage.getLayout = (page) => <MainLayout>{page}</MainLayout>

export const getStaticProps = async () => {
  const pokemon = await fetchRandomPkm()
  return {
    props: {
      pokemon,
    },
  }
}
