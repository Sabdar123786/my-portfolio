import React from "react";
import './Intro.css'
import GitHub from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Gmail from "../../img/gmail.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import profile from "../../img/profile.jpg";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { Link } from "react-scroll";
import Education from "../Education/Education";
import Achievement from "../Achievement/Achievement";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

const Intro = () => {
 
  return (
    <>
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span style= {{marginTop: '30px'}}  >Hy! I Am</span>
          <span style= {{marginTop: '30px'}}  >Sabdar Khan</span>
          <span style= {{marginTop: '30px'}}  >
            I am committed to learning and self development so that I can
            consistently achieve better results
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
       <div className="i-icons">
         <a href="https://github.com/Sabdar123786">
         <img style= {{marginTop: '-100px'}}  src={GitHub} alt="" />
         </a>
         <a href="https://www.linkedin.com/in/sabdar-khan-3b7516218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
         <img style= {{marginTop: '-100px'}}  src={LinkedIn} alt="" />
         </a>
         <Link to="contact" smooth={true} spy={true}>
         <img style= {{marginTop: '-100px'}}  src={Gmail} alt="" />
          </Link>
       </div>
      </div>
      <div className="i-right">
        <img style= {{marginTop: '60px'}}  src={Vector1} alt="" />
        <img style= {{marginTop: '60px'}}  src={Vector2} alt="" />
        <img style= {{marginTop: '140px', borderRadius: '500px', border:'3px solid blue', marginLeft: '80px'}}  src={profile} alt="" />
        <img  style= {{marginTop: '70px'}} src={glassesimoji} 
         alt=""
          />
        <div style={{top:'4%',left:'65%'}}>
          <FloatingDiv style= {{marginTop: '60px'}}  image={Crown} txt1='CSE' txt2='Student'/>
        </div>
        <div style={{top:'18rem',left:'-2rem'}}>
          <FloatingDiv style= {{marginTop: '60px'}}   image={thumbup} txt1='Become' txt2='Developer'/>
        </div>
        {/* blur-divs */}
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur" style={{background:'# C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>

        
      </div>
      
     

    </div>
    <div>
      <Education/>
    </div>
    <div>
      <Achievement/>
    </div>
    <div>
      <Skills/>

    </div>
    <div>
      <Projects/>
    </div>
    <div>
      <Contact/>
    </div>
    </>
  );
};

export default Intro;