import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { SideBar } from './components/SideBar'
import { AppState } from './context/AppState'
import { Home } from './pages/Home'
import { Pokemon } from './pages/Pokemon'

const App = () => {
  return (
    <AppState>
      <BrowserRouter>
        <SideBar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/pokemon/:id" component={Pokemon} />
        </Switch>
      </BrowserRouter>
    </AppState>
  )
}

export default App
