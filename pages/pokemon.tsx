import { PokemonData } from '@components/pokemon-data'
import MainLayout from '@layouts/main'
import { usePokemon } from 'context/main-data'

export default function PokemonPage() {
  const { pokemon } = usePokemon()
  return (
    <>
      <p>
        This page collects <code>state</code> from <code>MainLayout</code>.
      </p>
      <p>
        It could use the `setPokemon` method to also alters the state, so
        potentially fetching when the user comes straight to this one.
      </p>
      <p>
        If you{' '}
        <button
          type="button"
          onClick={() => {
            window.location.reload()
          }}
        >
          refresh the page
        </button>{' '}
        you can notice the <code>state</code> becomes empty
      </p>
      {Boolean(pokemon.name) ? (
        <PokemonData pokemon={pokemon} />
      ) : (
        <span>--- pokemon data ---</span>
      )}
    </>
  )
}

PokemonPage.getLayout = (page) => <MainLayout>{page}</MainLayout>
