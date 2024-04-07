import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import Button from './Button';
import { useCart } from 'react-use-cart';

const MenuCard = (props) => {
  const { addItem } = useCart(); //start of my cart function

  const handleAddToCart = () => {

    addItem({
      id: props.title,
      title: props.title,
      price: props.price,
      img: props.img
    });
  };

  return (
    <div className=" w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
      <img className=" rounded-xl duration-300 hover:scale-105 " src={props.img} alt="image" />
      <div className=" space-y-4">
        <h3 className=" font-semibold text-center text-xl pt-6">{props.title}</h3>
        <div className=" flex flex-row justify-center">
          <BsStarFill className=" text-red-400" /> // star rating for each food item
          <BsStarFill className=" text-red-400" />
          <BsStarFill className=" text-red-400" />
          <BsStarFill className=" text-red-400" />
          <BsStarHalf className=" text-red-400" />
        </div>

        <div className=" flex flex-row items-center justify-center gap-4">
        <h3 className=" font-semibold text-lg">{props.price}</h3> //the price
        <Button title="Add to Cart" onClick={handleAddToCart} /> //add to cart button
        </div>
      </div>
    </div>
  )
}

export default MenuCard
