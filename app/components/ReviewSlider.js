import React from "react";
import ReviewCard from "./ReviewCard";

const ReviewSlider = ({ reviewData, coffee }) => {
	return (
		<>
			<div className="w-4/5 mx-auto flex m-10 overflow-x-auto h-[600px] justify-around items-center">
				{reviewData.map((review) => {
					return <ReviewCard review={review} />;
				})}
			</div>
		</>
	);
};

export default ReviewSlider;
