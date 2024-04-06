import React from 'react';
import MenuCard from './MenuCard';

function Menu() {
  return (
    <div>
      <h1>Our Menu</h1>

      <div>
        <MenuCard img="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Burger" price="$12.99"/>
        <MenuCard img="" title="Burger" price="$12.99"/>
        <MenuCard img="" title="Burger" price="$12.99"/>
        <MenuCard img="" title="Burger" price="$12.99"/>
        <MenuCard img="" title="Burger" price="$12.99"/>
        <MenuCard img="" title="Burger" price="$12.99"/>
      </div>
    </div>
  )
}

export default Menu
