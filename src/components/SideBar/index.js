import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/appContext'
import './sidebar.css'

export const SideBar = () => {
  const {getPokemons, setMenu, sidebar, menu, loading} = useContext(AppContext)
  
  useEffect(() => {
    getPokemons({limit: 60, offset: 0})
    // eslint-disable-next-line
  }, [])

  return (
    <div className="sidebar">    
      { !loading && sidebar && menu 
        ? <div className="sidebar-wrapper">
            <ul>
              {sidebar.map((p, i) => (
                <li key={p}>
                  <NavLink activeClassName="active" className="nav-link" to={`/pokemon/${i+1}`}>
                    <img 
                      width='60' 
                      height='60' 
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`} 
                      alt={p} 
                    />
                    <span>{p}</span>
                  </NavLink>
                </li>
              ))}
            </ul> 
            <div className="backdrop" onClick={() => setMenu(!menu)}></div>
          </div>
        : null 
      }
      {!menu && <button onClick={() => setMenu(!menu)}>menu</button>} 
    </div>
  )
}