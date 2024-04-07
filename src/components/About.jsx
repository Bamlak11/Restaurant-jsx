import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src="https://images.pexels.com/photos/5638730/pexels-photo-5638730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Image" />

      <div className='space-y-4 lg:pt-14'>
        <h1 className=" font-semibold text-4xl text-center md:text-start">Why ExpressEats?</h1>
      </div>
    </div>

  )
}

export default About
