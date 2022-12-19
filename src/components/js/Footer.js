import React from 'react';
import "../css/footer.css";
import { FaGithub,FaLinkedinIn,FaInstagram,FaFacebook,FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerhead">N-Buds</div>
      <div className="footerdescription">N-Buds is a Freelancing platform where we build Webites/Apps for our clients in order to grow and scale their bussiness online.</div>
      <div className="footerlogo">
        <div className="logo1"><a href="https://m.facebook.com/100063734421533/" target="_blank"><FaFacebook/></a></div>
        <div className="logo1"><a href="https://www.instagram.com/devrohit778/" target="_blank"><FaInstagram/></a></div>
        <div className="logo1"><a href="https://www.linkedin.com/in/rohit-pandey-8a6896174/" target="_blank"><FaLinkedinIn/></a></div>
        <div className="logo1"><a href="https://github.com/therohit777" target="_blank"><FaGithub/></a></div>
        <div className="logo1"><a href="https://twitter.com/rohit_dev7" target="_blank"><FaTwitter/></a></div>
      </div>
      <div className="footercopywrite">Copyright &copy;2022 N-Buds.All rights reserved.</div>
    </div>
  )
}

export default Footer