import React from 'react';
import "../css/home.css";
import homelogo from "../images/nbuds.png";

const Home = () => {
  return (
    <div className='Home' id='home'>
        <img src={homelogo} className="homelogo" alt="none"/>
        <div className="homedescription">
            <div className="homehead">Let's take</div>
            <div className="homehead">Your Bussiness Online!</div>
            <div className="hometext">We N-Buds is a freelancing company that helps our clients to grow their bussiness online by making websites for them. Contact us to know more.</div>
            <a href="#contactus"><button className="homebtn">Contact us</button></a>
        </div>
    </div>
  )
}

export default Home