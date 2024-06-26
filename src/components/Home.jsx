import React from 'react'
import Button from './Button'
import { Link } from 'react-scroll';


const Home = () => {
  // hero section of website
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('https://images.playground.com/9361ff41cb154632a5b6c8d668b90b7a.jpeg')] bg-cover bg-no-repeat ">
      <div className='w-full lg:w-2/3 space-y-5 flex flex-col'>
        <h1 className="font-semibold text-6xl text-white">ExpressEats</h1>
        <p className=" text-white ">
          Fast, Flavorful Delights!
        </p>

        <div>
        <br></br>

        <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
             {/* links to the food menu */}
            <Button title="Order Now"/> 
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Home
