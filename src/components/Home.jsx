import React from 'react'
import Button from './Button'

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('https://images.playground.com/9361ff41cb154632a5b6c8d668b90b7a.jpeg')] bg-cover bg-no-repeat ">
      <div className='w-full lg:w-2/3 space-y-5 flex flex-col'>
        <h1 className="font-semibold text-6xl text-white">ExpressEats</h1><br></br>
        <p className=" text-white ">
          Fast, Flavorful Delights!
        </p>

        <div>
            <Button title="Order Now"/>
        </div>
      </div>
    </div>
  )
}

export default Home
