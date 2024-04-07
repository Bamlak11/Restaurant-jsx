import React, { useState } from "react";
import { BiRestaurant } from "react-icons/bi";
import { Link } from "react-scroll";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className=" fixed w-full">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={32} />
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
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-blue-400 transition-all cursor-pointer"
            >
              Menu
            </Link>

            <Link
              to="favorites"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-blue-400 transition-all cursor-pointer"
            >
              Favorites
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-blue-400 transition-all cursor-pointer"
            >
              About
            </Link>

            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-blue-400 transition-all cursor-pointer"
            >
              Reviews
            </Link>

            <Button title="Login" />
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuFold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >

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
              to="favorites"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-blue-400 transition-all cursor-pointer"
            >
              Favorites
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-blue-400 transition-all cursor-pointer"
            >
              About
            </Link>

            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-blue-400 transition-all cursor-pointer"
            >
              Reviews
            </Link>

            <Button title="login" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
