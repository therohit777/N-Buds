import React from 'react';
import "../css/services.css";
import { FaNetworkWired,FaPalette,FaLaptopCode,FaChartPie,FaMobileAlt,FaChartLine } from "react-icons/fa";

const Services = () => {
  return (
    <div className='Services'>
       <h1 className='teamhead' id="services">Services</h1>
       
       <div className='servicepart1'>
          <div className='servicecont'>
            <FaLaptopCode className='servicelogo'/>
            <h3>Web Development</h3>
            <p>Develop optimised and SEO friendly web apps to increase reach of our clients</p>
          </div>

          <div className='servicecont'>
            <FaChartLine className='servicelogo'/>
            <h3>Marketing</h3>
            <p>We have got a good marketing team even that helps to scale the bussiness.</p>
          </div>

          <div className='servicecont'>
            <FaPalette className='servicelogo'/>
            <h3>Graphics</h3>
            <p>Could build companies logos,UI/Ux of the Web and App interfaces as well.</p>
          </div>

       </div>

       <div className='servicepart1 servicepart2'>
          <div className='servicecont'>
            <FaMobileAlt className='servicelogo'/>
            <h3>App Development</h3>
            <p>Develop Android/IOS using React-Native that serves the requirements of our clients.</p>
          </div>

          <div className='servicecont'>
            <FaChartPie className='servicelogo'/>
            <h3>Data Analysis</h3>
            <p>We analyse how the apps perform in the market and share feedbacks to our clients.</p>
          </div>

          <div className='servicecont'>
            <FaNetworkWired className='servicelogo'/>
            <h3>Networking</h3>
            <p>We help our clients to their network in order to scale their bussiness.</p>
          </div>

       </div>

         {/* <div>
          <FaMobileAlt/>
          <h4>App Development</h4>
          <p>Develop optimised web apps</p>
        </div>

        <div>
          <FaChartPie/>
          <h4>Data Analysis</h4>
          <p>Develop optimised web apps</p>
        </div>

        
        <div>
          <FaPalette/>
          <h4>Web Design</h4>
          <p>Develop optimised web apps</p>
        </div>

         <div>
          <FaChartLine/>
          <h4>Marketing</h4>
          <p>Develop optimised web apps</p>
        </div> */}




    </div>
  )
}

export default Services