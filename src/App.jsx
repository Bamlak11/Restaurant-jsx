import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Favorites from './components/Favorites';
import Review from './components/Review';
import Footer from './components/Footer';
import { CartProvider } from 'react-use-cart';
import ShoppingCart from './components/ShoppingCart';

const App = () => {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    setMessage(`Added ${item.title} to the cart.`);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(cartItem => cartItem.id !== item.id));
    setMessage(`Removed ${item.title} from the cart.`);
  };

  const updateQuantity = (itemId, action) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: action === 'increment' ? item.quantity + 1 : item.quantity - 1
        };
      }
      return item;
    });

    if (action === 'decrement') {
      const filteredCart = updatedCart.filter((item) => item.quantity > 0);
      setCart(filteredCart);
    } else {
      setCart(updatedCart);
    }
  };

  return (
    <CartProvider>
      <Router>
        <div>
          <Navbar />

          <main>
            <div id='home'>
              <Home />
            </div>

            <div id="favorites">
              <Favorites />
            </div>

            <div id='menu'>
              <Menu addToCart={addToCart} />
            </div>

            <div id="about">
              <About />
            </div>

            <div id="reviews">
              <Review />
            </div>

            <Routes>
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>

            <div>
              <Footer />
            </div>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
