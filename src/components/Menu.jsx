import React from 'react';
import MenuCard from './MenuCard';
import { useCart } from 'react-use-cart';

//food menu section
function Menu() {
  const { addItem } = useCart();

  const handleAddToCart = (item) => {
    addItem(item);
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">Our Menu</h1>

      {/* menu img, name , price, etc */}
      <div className=" flex flex-wrap gap-8 justify-center">
        <MenuCard img="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Steak" price="$15.99" onAddToCart={() => handleAddToCart({ id: 'steak', title: 'Steak', price: 15.99 })}/>
        <MenuCard img="https://images.pexels.com/photos/17499948/pexels-photo-17499948/free-photo-of-top-view-of-spaghetti-pasta-with-tomato-sauce.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Pasta" price="$10.99" onAddToCart={() => handleAddToCart({ id: 'pasta', title: 'Pasta', price: 10.99 })}/>
        <MenuCard img="https://cdn.pixabay.com/photo/2021/05/31/01/10/fried-rice-6297407_1280.jpg" title="Fried Rice" price="$14.99" onAddToCart={() => handleAddToCart({ id: 'steak', title: 'Steak', price: 15.99 })}/>
        <MenuCard img="https://images.pexels.com/photos/7904958/pexels-photo-7904958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Tacos" price="$8.99" onAddToCart={() => handleAddToCart({ id: 'tacos', title: 'Tacos', price: 8.99 })}/>
        <MenuCard img="https://images.pexels.com/photos/10296408/pexels-photo-10296408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Sushi" price="$7.99" onAddToCart={() => handleAddToCart({ id: 'sushi', title: 'Sushi', price: 7.99 })}/>
        <MenuCard img="https://images.pexels.com/photos/12035555/pexels-photo-12035555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Cake" price="$2.99" onAddToCart={() => handleAddToCart({ id: 'cake', title: 'Cake', price: 2.99 })}/>
      </div>
    </div>
  )
}

export default Menu
