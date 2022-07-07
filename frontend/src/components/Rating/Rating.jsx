import React from 'react'
import {FaStar} from 'react-icons/fa'
function Rating() {
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
            />
            <FaStar color={"#c2af01"} className='star'
            size={25}
            />
        </label>)
        })}
    </div>
  )
}

export default Rating