import { createContext, useContext, useState } from 'react'

const PokemonContext = createContext(undefined)

export function PokemonProvider({ children }) {
  const [pokemon, setPokemon] = useState({})
  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  )
}

export function usePokemon() {
  const context = useContext(PokemonContext)

  if (!context)
    throw new Error('usePokemon must be used inside a `PokemonProvider`')

  return context
}
