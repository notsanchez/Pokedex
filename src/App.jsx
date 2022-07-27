import React from 'react'
import PokemonDetails from './components/PokemonDetails'
import PokemonList from './components/PokemonList'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<PokemonList />}/>
        <Route path='/details/:id' element={<PokemonDetails />}/>
      </Routes>
    </div>
  )
}

export default App