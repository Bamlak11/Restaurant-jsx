import React from 'react'
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Menu from './components/Menu'
import About from './components/About';
import CustomerFavorite from './components/CustomerFavorite'

const App = () => {
  return (
    <div>
      <Navbar/>

      <main>
        <div id='home'>
          <Home/>
        </div>

        <div id='menu'>
          <Menu/>
        </div>

        <div>
          <CustomerFavorite/>
        </div>

        <div id="about">
          <About/>
        </div>

      </main>
    </div>
  )
}

export default App
