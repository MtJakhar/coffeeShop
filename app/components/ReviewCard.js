import React from 'react'
import Stars from './Stars'


const ReviewCard = ({ review }) => {
  return (
    <div className="border-2 border-black">
      <h1>{review.first_name} {review.last_name}</h1>
      <div>
        <Stars rating={review.rating}/>
      </div>
      <p>"{review.text}"</p>
    </div>
  )
}

export default ReviewCard