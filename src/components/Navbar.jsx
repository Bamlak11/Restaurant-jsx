import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <span></span>
            <h1>ExpressEats</h1>
          </div>
          <nav>
          <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
            >
              Home
            </Link>

            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer"
            >
              Menu
            </Link>

            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer"
            >
              About
            </Link>

            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className=" cursor-pointer"
            >
              Reviews
            </Link>
            
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
