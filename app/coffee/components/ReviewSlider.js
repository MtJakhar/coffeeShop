"use client";

import React from "react";
import ReviewCard from "./ReviewCard";
import { useContext } from "react";
import { AuthenticationContext } from "../../context/AuthContext";
import AddReviewModal from "./AddReviewModal";
import AuthModal from "../../components/AuthModal";

const ReviewSlider = ({ reviewData, coffee }) => {
	const { data } = useContext(AuthenticationContext);

	return (
		<>
			{reviewData.length > 0 ? (
				<div className="mb-28">
					<div className="w-4/5 mx-auto flex overflow-x-auto h-[450px] justify-normal items-center rounded-xl">
						{reviewData.map((review, index) => {
							return <ReviewCard key={index} review={review} />;
						})}
					</div>
					<div className="text-center mt-8">
						<AddReviewModal coffee={coffee.id} />
					</div>
				</div>
			) : (
				<div className="mt-10 mb-24">
					<div className="w-1/2 lg:w-1/4 mx-auto">
						<p className="text-3xl font-bold text-neutral-400 text-center mb-6">
							No reviews yet!!!
						</p>
						{data ? (
							<p className="text-3xl font-bold text-neutral-400 text-center">
								Dive into the taste experience and share your
								thoughts by clicking review button.
							</p>
						) : (
							<p className="text-3xl font-bold text-neutral-400 text-center">
								Dive into the taste experience and share your
								thoughts by logging on to leave a review.
							</p>
						)}
					</div>
					<div className="text-center mt-14">
						{data ? (
							<AddReviewModal coffee={coffee.id} />
						) : (
							<AuthModal btn={"review"} />
						)}
					</div>
				</div>
			)}
		</>
	);
};

export default ReviewSlider;
