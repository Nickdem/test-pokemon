import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/Loader'
import { AppContext } from '../../context/appContext'
import './pokemon.css'

export const Pokemon = ({match}) => {
  const {getPokemon, setMenu, pokemon, loading } = useContext(AppContext)
  const urlName = match.params.id
  
  useEffect(() => {
    getPokemon(urlName)
    setMenu(false)
    // eslint-disable-next-line
  }, [urlName])

  return (
    <div className="container">
      <Link className="home" to={'/'}>home</Link>
      { !loading 
        ? <div className="pokemon">
            <div className="pokemon-image">
              <img 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${urlName}.png`} 
                alt={pokemon.name} 
              />
            </div>
            <div className="pokemon-info">
              <h1>Name: {pokemon.pokemonName}</h1>
              <p>Base experience: {pokemon.experience}</p>
              <p>Height: {pokemon.height}</p>
              <p>Weight: {pokemon.weight}</p>
              <h1>Stats:</h1>
              <ul>
                {pokemon.stats && pokemon.stats.map((s) => (
                  <li key={s.statName}>{s.statName}: {s.baseStat}</li>
                ))}
              </ul>
            </div>
          </div>
        : <Loader />
      }
    </div>
  )
}
