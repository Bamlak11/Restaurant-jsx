import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <h1>ExpressEats</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div>
          <h1>Links</h1>
            <nav>
              <a className='' href="/">Menu</a>
              <a className='' href="/">Favorites</a>
              <a className='' href="/">About</a>
              <a className='' href="/">Reviews</a>
            </nav>
        </div>
      </div>
    </div>
  )
}

export default Footer
