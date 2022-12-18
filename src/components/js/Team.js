import React from 'react';
import "../css/team.css";
import profile1 from "../images/Rohit.jpeg";
import profile2 from "../images/pranav.jpeg";

const Team = () => {
  return (
    <div className='Team'>
        <div className="headteamss"></div>
        <h1 className='teamhead' id='team'>Our Team</h1>

        <div className='profilediv '>
        <div className="teamperson spacepro1">
            <div className="uppercontainer">
              <div className="imgh">
              <img src={profile1} className="profilephoto" alt='none'/>
              </div>
            </div>

            <div className="lowercontainer">
              <h3 className='lowhead'>Full-Stack Developer</h3>
              <p>"Hey there, I am Rohit Pandey a CSE undergrad student. I am a Full-stack developer.Have working experience with 3+ Startups"</p>
              <div className='lowstacks'>
                My Stacks: ReactJs, Django, React-Native. 
              </div>
            </div>
        </div>


        <div className="teamperson spacepro2">
            <div className="uppercontainer">
              <div className="imgh">
              <img src={profile2} className="profilephoto" alt='none'/>
              </div>
            </div>

            <div className="lowercontainer">
              <h3 className='lowhead'>Full-Stack Developer</h3>
              <p>"Hey there, I am Pranav Kumar  a CSE undergrad student. I am a Full-stack developer. Have a working experience as a Freelancer."</p>
              <div className='lowstacks'>
                My Stacks:  Django, React-Native. 
              </div>
            </div>

        </div>

       </div>


        

    </div>
  )
}

export default Team