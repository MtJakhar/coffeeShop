import React from 'react'
import { StarRounded, StarOutlineRounded } from '@mui/icons-material';

const Stars = ({ rating }) => {
  let stars = [];

  for( let i = 0; i < 5; i++) {
    if(i < rating) { 
      stars.push(<StarRounded className='text-red-500'/>)
    } else {
      stars.push(<StarOutlineRounded className='text-red-500'/>)
    }
  }


  return (
    <div className='flex'>
      {stars.map(star => {
        return star
      })}
    </div>
  )
}

export default Stars