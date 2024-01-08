"use client";

import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import RedButton from "./RedButton";
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
				<div className="space-x-[4.8rem]">
					<EditModal review={review} />
					<RedButton text={"delete"} click={deleteReview} />
				</div>
			);
		} else {
			return <></>;
		}
	};

	return (
		<div className="flex-none relative sm:m-2 xl:m-0 border-2 w-[400px] h-[400px] border-[#D3D3D3] rounded-lg">
			<div className="m-8">
				<h1 className="font-bold text-2xl">
					{review.first_name} {review.last_name}
				</h1>
				<div className="py-4">
					<Rating
						value={review.rating}
						className="text-red-500"
						size="large"
						readOnly
					/>
				</div>
				<p className="text-xl h-full max-h-48">"{review.text}"</p>
				<div className="absolute bottom-8">{renderButtons()}</div>
			</div>
		</div>
	);
};

export default ReviewCard;
