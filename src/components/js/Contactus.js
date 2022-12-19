import React, { useRef } from 'react';
import "../css/contactus.css";
import emailjs from '@emailjs/browser';
import {FaEnvelope, FaHome, FaPhoneAlt, FaTeamspeak} from "react-icons/fa";

const Contactus = () => {
  
  const formss = useRef();
  const a = useRef();
  const b = useRef();
  const c = useRef();
  const d = useRef();
  const send=(e)=>{
    e.preventDefault();
    
    emailjs.sendForm('service_c0hxtxa', 'template_uug2efn', formss.current, 'lV1Z_BEvhVTm6mJnd')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
    console.log(formss.current);  
    a.current.value='';
    b.current.value='';
    c.current.value='';
    d.current.value='';
  }

  


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
            <form className='sendmessagecont' ref={formss} onSubmit={send}>
              <p>Send us a message anytime.</p>
              <input type="text" name='from_name' className='contactinputs cp1' placeholder='name' ref={a}/>
              <input type="number" name='phone' className='contactinputs' placeholder='contact number' ref={b}/>
              <input type="email" name='email' className='contactinputs' placeholder='email address' ref={c}/>
              <textarea name='message' className='contacttextarea' placeholder='mesage...' ref={d}/>
              <button className='contactbtn' type='submit'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contactus