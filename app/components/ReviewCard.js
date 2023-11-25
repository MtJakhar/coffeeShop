"use client"

import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button"
import { AuthenticationContext } from "../context/AuthContext";

const ReviewCard = ({ review }) => {
	const { data } = useContext(AuthenticationContext);

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
			<Button variant="contained" className="bg-red-500 text-white m-2">Delete</Button>
			<Button variant="contained" className="bg-red-500 text-white m-2">Edit</Button>
		</div>
	);
};

export default ReviewCard;
