import React from "react";
import Rating from "@mui/material/Rating";

const ReviewCard = ({ review }) => {
	return (
		<div className="border-2 border-black">
			<h1>
				{review.first_name} {review.last_name}
			</h1>
			<div>
				<Rating
					value={review.rating}
					className="text-red-500"
					readOnly
				/>
			</div>
			<p>"{review.text}"</p>
		</div>
	);
};

export default ReviewCard;
