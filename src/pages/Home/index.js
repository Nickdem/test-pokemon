import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Loader } from '../../components/Loader'
import { AppContext } from '../../context/appContext'
import './home.css'

export const Home = () => {
  const {getPokemons, pokemons, loading} = useContext(AppContext)
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    getPokemons({limit: 20, offset: counter})
    // eslint-disable-next-line
  }, [counter])

  const clickHandler = (value) => {
    setCounter(counter + value)
  }

  return (
    <div className="container">
      {(counter > 0) && <button className="nav-btn" onClick={() => clickHandler(-20)}>&lt;</button>}
      { !loading 
        ? <div className="cards">
            {pokemons.map((p, i) => (
              <Card key={p} pokemonWiev={{name: p, imgUrl: i+1+counter}} />
            ))}
          </div> 
        : <Loader />}
      {(counter < 40) && <button className="nav-btn" onClick={() => clickHandler(20)}>&gt;</button>}
    </div>
  )
}