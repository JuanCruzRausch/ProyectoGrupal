import React from 'react'
import {FaStar} from 'react-icons/fa'
function Rating({rating}) {
  return (
    <div>
        {[...Array(rating)].map((star, i) =>{     
        return (
        <label>
            <input className='radioInput'
            type="radio" 
            name='rating' 
            value={rating} 
            />
            <FaStar color={"#f1dd01"} className='star'
            size={25}
            />
        </label>)
        })}
    </div>
  )
}

export default Rating