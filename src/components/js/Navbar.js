import React from 'react';
import "../css/navbar.css";
import {MdViewHeadline} from "react-icons/md";

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
         <a href="#home">N-Buds</a>
        </div>
        <div className="navitems">
          <ul className='navlist'>
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutus">About us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Our Team</a></li>
            <li><a href="#contactus">Contact us</a></li>
          </ul>
        </div>
        <MdViewHeadline className='hamburgermenu'/>
    </div>
  )
}

export default Navbar