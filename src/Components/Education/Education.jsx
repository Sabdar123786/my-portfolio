import React from 'react'
import './Education.css'
import School_1 from "../../img/school_1.png";
import School_2 from "../../img/school_2.png";
import Graduation from "../../img/graduation.png";
import Card from '../Card/Card';
import Resume from "./resume.pdf";

const Education = () => {
  return (
    <div className='education' id='Education'>
        {/* left-side */}
        <div className="awesome">
            <span>Education</span>
            <span>“Education is not the filling of a Pail, But the Lighting of a Fire”</span>
            <a href={Resume}download>
            <button className='button s-button'>Download Resume</button>
            </a>
            <div className='blur s-blur1'style={{background:"#ADD8E6"}}></div>
        </div>
        {/* right-side */}
        <div className="cards">
           <div style={{left:'17rem',top:'-1rem', padding: '30px'}}>
               <Card
            //    first-card
                pic = {School_1}
                heading = {'Matriculation '}
                detail1 = {'Board : State-Board'}
                detail2=   {'Year  : 2016'}
                detail3=   {' Percentage : 86%'}
                detail4=   {'School : V.N.J.I.College '}
                detail5=   {'Maharajaganj ,Uttar Pradesh'}
                />
           </div>
           <div style={{left:'-9rem',top:'10rem'}}>
               <Card
            //    second-card
                pic = {School_2}
                heading = {'Intermediate'}
                detail1 = {'Board : State-Board'}
                detail2=   {'Year  : 2018'}
                detail3=   {' Percentage :   82%'}
                detail4=   {'School : Jubilee Inter college'}
                detail5=   {'Gorakhpur ,Uttar Pradesh'}
                />
           </div>

           <div style={{left:'11rem',top:'18rem'}}>
               <Card
            //    Third-card
                pic = {Graduation}
                heading = {'Engineering'}
                detail2=   {'Year  : 2023'}
                detail3=   {' CGPA : 7/10(70)'}
                detail4=   {'Uni: Chandigarh University'}
                />
           </div>
           <div className='blur s-blur2'style={{background:"var(--purple)"}}></div>



        </div>
        

    </div>
  )
}

export default Education