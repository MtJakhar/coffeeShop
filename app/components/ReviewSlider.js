import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewSlider = ({ reviewData, coffee }) => {
  return (
    <div>
      <h1>Reviews for {coffee.name}</h1>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-6 m-4'>
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