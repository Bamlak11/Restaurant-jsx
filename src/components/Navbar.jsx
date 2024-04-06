import React from "react";
import { BiRestaurant } from "react-icons/bi";
import { Link } from "react-scroll";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className=" fixed w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32}/>
            </span>
            <h1>ExpressEats</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
          <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-blue-400 transition-all cursor-pointer"
            >
              Home
            </Link>

            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-blue-400 transition-all cursor-pointer"
            >
              Menu
            </Link>

            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-blue-400 transition-all cursor-pointer"
            >
              About
            </Link>

            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-blue-400 transition-all cursor-pointer"
            >
              Reviews
            </Link>
            
            <Button title="Login"/>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
