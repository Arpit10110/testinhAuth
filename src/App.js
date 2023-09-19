import React from 'react'
import Navbar  from './components/Navbar'
import Home  from './components/Home.jsx'
import "./style/style.css"
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Coin from './components/Coin'
const App = () => {
  return  ( 
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Coin' element={<Coin/>}/>
    </Routes>
  </Router>
    )
  
}

export default App
