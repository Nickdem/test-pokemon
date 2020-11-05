import React from 'react'
import { useHistory } from 'react-router-dom'
import './card.css'

export const Card = ({pokemonWiev}) => {
  const history = useHistory()

  return (
    <div 
      className="card" 
      onClick={() => history.push('/pokemon/' + pokemonWiev.imgUrl)}
    >
      <h1>{pokemonWiev.name}</h1>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonWiev.imgUrl}.png`} 
        alt={pokemonWiev.name} 
      />
    </div>  
  )
}