import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png";

import Github from "@iconscout/react-unicons/icons/uil-github"
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin"

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave}alt="" 
        style={{width:'100%'}}/>
        <div className="f-content">
            <span>sabdarkhan2001s@gmail.com</span>
            <div className="f-icons">
            <a href="https://github.com/Sabdar123786">
                <Github color='white' size="3rem"/>
            </a>
            <a href="https://www.linkedin.com/in/sabdar-khan-3b7516218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <LinkedIn color='white' size="3rem"/>
            </a>
               
            </div>

        </div>

    </div>
  )
}

export default Footer