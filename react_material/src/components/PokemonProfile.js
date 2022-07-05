import React from 'react'

function PokemonProfile(props) {
  const {match} = props
  const {params} = match
  const {pokemonId} = params

  return (
    <div>{`this is the pokemon profile page for pokemon  #${pokemonId}`}</div>
  )
}

export default PokemonProfile
