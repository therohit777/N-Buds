import React from 'react';
import "../css/home.css";
import homelogo from "../images/nbuds.png";
import { MdEast } from "react-icons/md";

const Home = () => {
  return (
    <div className='Home' id='home'>
        <img src={homelogo} className="homelogo"/>
        <div className="homedescription">
            <div className="homehead">Let's take</div>
            <div className="homehead">Your Bussiness Online!</div>
            <div className="hometext">We N-Buds is a freelancing company that helps our clients to grow their bussiness online by making websites for them. Contact us to know more.</div>
            <a href="#contactus"><button className="homebtn">Contact us</button></a>
        </div>
        {/* <div className="contactbox">
            <div className="contacttext">Contact us</div>
            <input type="text" placeholder='contact number'/>
            <input type="text" placeholder='email'/>
            <textarea cols="30" rows="6" placeholder='message...'/>
            <div className="sendeeesbtn"><button>send</button></div>
        </div> */}
    </div>
  )
}

export default Home