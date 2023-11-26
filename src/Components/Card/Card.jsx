import React from 'react'
import './Card.css'
const Card = ({pic,heading,detail1,detail2,detail3,detail4,detail5}) => {
  return (
    <div className='card'>
        <img src={pic} alt="" />
        <span style={{textAlign: 'center', marginBottom: '-5px'}}>{heading}</span>
        
        <span>{detail1}</span>
        <span>{detail2}</span>
        <span>{detail3}</span>
        <span>{detail4}</span>
        <span>{detail5}</span>
        {/* <button className='c-button'> GitHub</button> */}


    </div>
  )
}

export default Card