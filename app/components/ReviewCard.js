import React from 'react'

const ReviewCard = ({ review }) => {
  return (
    <div>
      <h1>{review.first_name} {review.last_name}</h1>
      <h2>*****</h2>
      <p>{review.text}</p>
    </div>
  )
}

export default ReviewCard