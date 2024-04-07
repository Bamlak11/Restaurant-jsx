import React from 'react'
import MenuCard from './MenuCard'

const CustomerFavorite = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Favorites
      </h1>
      {/* section for top 3 featured foods */}
      <div className=" flex flex-wrap gap-8 justify-center">
      <MenuCard img="https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Steak" price="$15.99"/>
      <MenuCard img="https://images.pexels.com/photos/7904958/pexels-photo-7904958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" title="Tacos" price="$8.99"/>
      <MenuCard img="https://cdn.pixabay.com/photo/2021/05/31/01/10/fried-rice-6297407_1280.jpg" title="Fried Rice" price="$14.99"/>
      </div>

    </div>
  )
}

export default CustomerFavorite
