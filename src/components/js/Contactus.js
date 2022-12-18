import React from 'react';
import "../css/contactus.css";
import {FaEnvelope, FaHome, FaPhoneAlt, FaTeamspeak} from "react-icons/fa";

const Contactus = () => {
  return (
    <div className='Contactus'>
        <h1 className='teamhead' id="contactus">Contact us</h1>
        <div className="contactuscontainer">
            <div className="addresscont">
              <p className='addressheader'>Get in Contact with us!</p>
              <div className="emailss"><FaEnvelope className='contactslogo'/> <span className='contactspan'>alpharohit777@gmail.com</span></div>
              <div className="emailss"><FaPhoneAlt className='contactslogo'/> <span className='contactspan'>8001091778</span></div>
              <div className="emailss"><FaHome className='contactslogo'/> <span className='contactspan'>Poddar Vihar near Kaikhali,Kolkata,West Bengal.</span></div>
              <div className='messagetexte'><FaTeamspeak className='speaklogo'/></div>
            </div>
            
            <div className='sendmessagecont'>
              <p>Send us a message anytime.</p>
              <input type="text" className='contactinputs cp1' placeholder='name'/>
              <input type="number" className='contactinputs' placeholder='contact number '/>
              <input type="email" className='contactinputs' placeholder='email address'/>
              <textarea className='contacttextarea' placeholder='mesage...'/>
              <button className='contactbtn'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contactus