import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewSlider = ({ reviewData, coffee }) => {
  return (
    <div>
      <h1>Reviews for {coffee.name}</h1>
      <div>
        {reviewData.map((review) => {
          return (
            <ReviewCard review={review} />
          )
        })}
      </div>
    </div>
  )
}

export default ReviewSlider