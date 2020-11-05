import React, {useReducer} from 'react'
import {AppContext} from './appContext'
import {appReducer} from './appReducer'
import {GET_POKEMONS, GET_POKEMON, SET_LOADING, GET_SIDEBAR, SET_MENU} from './types'

export const AppState = ({children}) => {
  const initialState = {
    menu: false,
    pokemon: {},
    sidebar: [],
    pokemons: [],
    loading: false
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const fetchPokemons = async value => {
    const responce = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${value.limit}&offset=${value.offset}`)
    const json = await responce.json()
    const names = []
    await json.results.forEach(p => {
      names.push(p.name)
    });

    return names
  }

  const getPokemons = async value => {
    setLoading()

    const data = await fetchPokemons(value)
    await dispatch({
      type: (value.limit === 60) ? GET_SIDEBAR : GET_POKEMONS,
      payload: data
    })
  }

  const getPokemon = async name => {
    setLoading()
    const responce = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const json = await responce.json()
    const pok = {
      pokemonName: json.name,
      experience: json.base_experience,
      height: json.height,
      weight: json.weight,
      stats: json.stats.map(s => ({baseStat: s.base_stat, statName: s.stat.name}))
    }
    await dispatch({
      type: GET_POKEMON,
      payload: pok
    })
  }

  const setLoading = () => dispatch({type: SET_LOADING})

  const setMenu = (value) => dispatch({type: SET_MENU, payload: value})

  const {pokemon, pokemons, loading, sidebar, menu} = state

	return (
		<AppContext.Provider value={{
        setLoading, getPokemons, getPokemon, setMenu,
        pokemon, pokemons, loading, sidebar, menu
      }}
    >
			{children}
		</AppContext.Provider>
	)
}