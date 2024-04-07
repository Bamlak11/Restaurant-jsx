import React from 'react'

const Footer = () => {
  return (
  <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
  <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
    <div className=" w-full md:w-1/4">
      <h1 className=" font-semibold text-xl pb-4">ExpressEats</h1>
      <p className=" text-sm">
      Fast, Flavorful Delights!
      </p>
    </div>

//footer links
    <div>
      <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
      <nav className=" flex flex-col gap-2">
        <a
          className=" hover:text-orange-400 transition-all cursor-pointer"
          href="#home"
        >
          Home
        </a>
        <a
          className=" hover:text-orange-400 transition-all cursor-pointer"
          href="#menu"
        >
          Menu
        </a>
        <a
          className=" hover:text-orange-400 transition-all cursor-pointer"
          href="#about"
        >
         About
        </a>
        <a
          className=" hover:text-orange-400 transition-all cursor-pointer"
          href="#reviews"
        >
          Reviews
        </a>
      </nav>
    </div>

    <div>
      <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
      <nav className=" flex flex-col gap-2">
        <a
          className=" hover:text-orange-400 transition-all cursor-pointer"
          href="/"
        >
          ExpressEats@email.com
        </a>
        <a
          className=" hover:text-orange-400 transition-all cursor-pointer"
          href="/"
        >
          +1 123 456 7890
        </a>
        <a
          className=" hover:text-orange-400 transition-all cursor-pointer"
          href="/"
        >
          Social media
        </a>
      </nav>
    </div>
  </div>
  <div>
    <p>
      <p className=" text-center py-4">
        @copyright |
        All rights reserved
      </p>
    </p>
  </div>
</div>
);
};

export default Footer
