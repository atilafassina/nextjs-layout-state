const PokemonData = ({ pokemon }) => {
  return (
    <section>
      <h2>
        <code>state</code>
      </h2>
      <p>Your Pokemon is: {pokemon.name}</p>
      <img src={pokemon.sprites.front_default} />
    </section>
  )
}

export { PokemonData }
