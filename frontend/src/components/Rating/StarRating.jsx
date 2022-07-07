import React from 'react'
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './Rating.css'
function StarRating() {
    const [rating,setRating] = useState(null)
    const [hover,sethover] = useState(null)
  return (
    <div>
        {[...Array(5)].map((star, i) =>{
        const ratingValue = i+1;
        return (
        <label>
            <input className='radioInput'
            type="radio" 
            name='rating' 
            value={ratingValue} 
            onClick={()=>(setRating(ratingValue))}
            />
            <FaStar color={ratingValue <= (hover || rating) ? "#c2af01" : "#525252"} className='star'
            size={25}
            onMouseLeave={() => sethover(null)}
            onMouseEnter={()=> sethover(ratingValue)}
            />
        </label>)
        })}
    </div>
  )
}

export default StarRating