import React, { useState } from 'react';
import "../css/navbar.css";
import {MdViewHeadline} from "react-icons/md";


const Navbar = () => {
  const [navscrollcol, setnavscrollcol] = useState(true);
  const [navhid, setnavhid] = useState(true);

  const changecol=()=>{
    if(window.scrollY>=80){
      setnavscrollcol(false);
    }
    else{
      setnavscrollcol(true)
    }
  }
  
  window.addEventListener('scroll',changecol);
  
  return (
    <div className="headnav">
    <div className={(navscrollcol)?'navbar':'navbar addcol'} >
        <div className="logo">
         <a href="#home" className={(navscrollcol)?'':'addcol1'}>N-Buds</a>
        </div>
       
          <ul className={(navhid)?'navlist':'navlist navhide'}>
            <li><a href="#home" className={(navscrollcol)?'':'addcol1'}>Home</a></li>
            {/* <li><a href="#aboutus" className={(navscrollcol)?'':'addcol1'}>About us</a></li> */}
            <li><a href="#services" className={(navscrollcol)?'':'addcol1'}>Services</a></li>
            <li><a href="#team" className={(navscrollcol)?'':'addcol1'}>Our Team</a></li>
            <li><a href="#contactus" className={(navscrollcol)?'':'addcol1'}>Contact us</a></li>
          </ul>
        <MdViewHeadline className='hamburgermenu' onClick={()=>{setnavhid(!navhid)}}/>
    </div>
    </div>
  )
}

export default Navbar