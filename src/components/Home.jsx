import React from 'react'
import Button from './Button'

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('https://images.pexels.com/photos/6059778/pexels-photo-6059778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat ">
      <div className='w-full lg:w-2/3 space-y-5'>
        <h1 className="font-semibold text-6xl">ExpressEats</h1><br></br>
        <p className=" ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <div className=" lg:pl-44">
            <Button title="Order Now"/>
        </div>
      </div>
    </div>
  )
}

export default Home
