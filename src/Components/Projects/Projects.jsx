import React from 'react';
import './Projects.css';
import Basket from '../../img/basket.png';
import Online_Chat from '../../img/chat.png';

import ProjectCards from '../Project_cards/Project_cards';

const Projects = () => {
  return (
    <>
      <div className='projects' id='Projects'>
        <div className='awsome'>
          {/* heading */}
          <span>Projects</span>
        </div>

        {/* center-side */}
        <div className="card_project">
          <div style={{ left: '27rem', top: '-1rem',  marginTop: '90px'}}>
            <ProjectCards
              // first-card
              pic={Online_Chat}
              heading={'E-Learning Platform'}
              detail1={' I have developed an online platform that allows users to browse and order food from a variety of restaurants and cuisines.'}
              detail2={'Technology Used: React.js, CSS, html, jsx, Api'}
              link={''}
            />
          </div>
          <div style={{ left: '4rem', top: '8rem' , marginTop: '90px'}}>
            <ProjectCards
              // second-card
               pic={Basket}
              heading={'E-Commerce Website'}
              detail1={'Developed a front end  online E commerce  website using React js.'}
              detail2={'Technology Used: React.js, CSS, Html, Jsx. Api '}
              link={''}
            />
          </div>
          {/* <div style={{ left:'37rem', top:'9.5rem' }}>
            <ProjectCards
              // Third-card
              pic={Graduation}
              heading={'Engineering'}
              detail2={'Year  : 2023'}
              detail3={' CGPA : 7.86/10(78.6)'}
              detail4={'Uni: Chandigarh University'}
            />
          </div> */}
          <div className='blur s-blur2' style={{ background: 'var(--purple)' }}></div>
        </div>
        
      </div>
    </>
  );
}

export default Projects;
