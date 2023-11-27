"use client";

import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import axios from "axios";
import { AuthenticationContext } from "../context/AuthContext";
import EditModal from "./EditModal";

const ReviewCard = ({ review }) => {
	const { data } = useContext(AuthenticationContext);

	const deleteReview = async () => {
		try {
			const response = await axios.delete(
				"http://localhost:3000/api/deleteReview",
				{
					data: { id: review.id },
				}
			);
			window.location.reload();
		} catch (error) {
			console.error(error);
		}
	};

	const renderButtons = () => {
		if (review.user_id === data?.id) {
			return (
				<div>
					<Button
						variant="contained"
						className="bg-red-500 text-white m-2"
						onClick={deleteReview}
					>
						Delete
					</Button>
					<EditModal review={review}/>
				</div>
			);
		} else {
			return <></>;
		}
	};

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
			{renderButtons()}
		</div>
	);
};

export default ReviewCard;
