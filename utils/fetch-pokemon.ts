import type { PokemonProps } from './types'

export const API = 'https://pokeapi.co/api/v2/'

export const fetchPkm = async () => {
  const resp = await fetch(
    `${API}pokemon?offset=${Math.floor(Math.random() * (1000 + 1))}`
  )

  const {
    results,
  }: {
    results: {
      name: string
    }[]
  } = await resp.json()

  return {
    pokemon: results[0].name,
  }
}

export const fetchPkmProps = async (character: string) => {
  const resp = await fetch(`${API}pokemon/${character}`)
  const pkmProps: PokemonProps = await resp.json()

  return pkmProps
}

export const fetchRandomPkm = async () => {
  const { pokemon: randomPokemon } = await fetchPkm()
  const pokemonData = await fetchPkmProps(randomPokemon)

  return pokemonData
}
