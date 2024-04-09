// imported the things I needed fo the navbar
import React, { useState } from "react";
import { Link } from "react-scroll";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import { TiThMenuOutline } from "react-icons/ti";
import { useCart } from 'react-use-cart';
import { BiRun } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false); //for my menu toggle
  const { items } = useCart(); //attempt for the cart function


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
            <span className=" hover:cursor-default">
              <BiRun size={32} />
            </span>
            <h1 className=" hover:cursor-default"><Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" transition-all cursor-pointer"
            >
              ExpressEats
            </Link></h1>
          </div>
          {/* my navbar links and cart button */}
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-orange-400 transition-all cursor-pointer"
            >
              Menu
            </Link>

            <Link
              to="favorites"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-orange-400 transition-all cursor-pointer"
            >
              Favorites
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-orange-400 transition-all cursor-pointer"
            >
              About
            </Link>

            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-orange-400 transition-all cursor-pointer"
            >
              Reviews
            </Link>

            <div>
              <Button title={<FaShoppingCart />} />
            </div>

          </nav>

          
            {/* for mobile view menu toggle */}
          <div className="md:hidden flex items-center hover:cursor-pointer">
            {menu ? (
              <AiOutlineClose size={25} onClick={closeMenu} />
            ) : (
              <TiThMenuOutline size={25} onClick={handleChange} />
            )}
          </div>
          
        </div>

        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >

              <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-orange-400 transition-all cursor-pointer"
            >
              Menu
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-orange-400 transition-all cursor-pointer"
            >
              About
            </Link>

            <Link
              to="reviews"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-orange-400 transition-all cursor-pointer"
            >
              Reviews
            </Link>

            <div>
              <Button title={<FaShoppingCart />} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
