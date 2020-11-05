import {GET_POKEMONS, GET_POKEMON, SET_LOADING, GET_SIDEBAR, SET_MENU} from './types'

const handlers = {
  [GET_SIDEBAR]: (state, {payload}) => ({...state, sidebar: payload, loading: false}),
  [GET_POKEMONS]: (state, {payload}) => ({...state, pokemons: payload, loading: false}),
  [GET_POKEMON]: (state, {payload}) => ({...state, pokemon: payload, loading: false}),
  [SET_LOADING]: state => ({...state, loading: true}),
  [SET_MENU]: (state, {payload}) => ({...state, menu: payload}),
  DEFAULT: state => state
}

export const appReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}