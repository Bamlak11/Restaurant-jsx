import React from 'react'
import Button from './Button'
import { Link } from 'react-scroll';

const About = () => {
  return (
    // about section
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img className=' rounded-3xl mb-8 lg:mb-0 lg:mr-8' src="https://images.pexels.com/photos/5638730/pexels-photo-5638730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About Image" width={700} />

      <div className='space-y-4 lg:pt-14'>
        <h1 className=" font-semibold text-4xl text-center md:text-start">Why ExpressEats?</h1>
        <p>
        Welcome to ExpressEats, where fast meets flavor! Our mission is simple: to provide you with mouthwatering meals delivered swiftly to your door.
        From succulent steaks to tantalizing tacos, our menu offers a variety of options to satisfy every craving.


        </p>
        <p>
        With ExpressEats, convenience and quality go hand in hand, making every dining experience a delight.
        Join us today and experience the joy of delicious food, delivered in a flash!
        </p>
        <div className=" flex justify-center lg:justify-start">
        <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            {/* links to the reviews section of page */}
            <Button title="Reviews"/> 
            </Link>
        </div>
      </div>
    </div>

  )
}

export default About
