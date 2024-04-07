// components for each section of the page
import React from 'react'
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Menu from './components/Menu'
import About from './components/About';
import CustomerFavorite from './components/CustomerFavorite'
import Review from './components/Review'
import Footer from './components/Footer';

// where the components will be displayed
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

        <div id="favorites">
          <CustomerFavorite/>
        </div>

        <div id="about">
          <About/>
        </div>

        <div id="reviews">
          <Review/>
        </div>

        <div>
          <Footer/>
        </div>

      </main>
    </div>
  )
}

export default App
