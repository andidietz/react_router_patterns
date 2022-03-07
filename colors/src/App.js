import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
