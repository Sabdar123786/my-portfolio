import React from 'react'
import './Project_cards.css'
const Project_cards = ({pic,heading,detail1,detail2,link}) => {
  return (
    <div className='projectcard' style={{paddingTop: '50px'}}>
        <img style={{width: '30px', padding: '15px'}} src={pic} alt="" />
        <span>{heading}</span>
        <span>{detail1}</span>
        <span>{detail2}</span>
        <a href={link}>
        
        </a>
        
        
        
       
    </div>
  )
}

export default Project_cards