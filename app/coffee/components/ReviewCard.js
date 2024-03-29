"use client";

import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import RedButton from "../../components/RedButton";
import axios from "axios";
import { AuthenticationContext } from "../../context/AuthContext";
import EditModal from "../../components/EditModal";

const ReviewCard = ({ review }) => {
	const { data } = useContext(AuthenticationContext);

	const deleteReview = async () => {
		try {
			const response = await axios.delete("/api/deleteReview", {
				data: { id: review.id },
			});
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
					<RedButton
						text={"delete"}
						click={deleteReview}
						disabled={false}
					/>
				</div>
			);
		} else {
			return <></>;
		}
	};

	return (
		<div className="flex-none relative m-2 border-2 w-[400px] h-[400px] border-[#D3D3D3] rounded-lg">
			<div className="m-8">
				<h1 className="font-bold text-xl">
					{review.first_name} {review.last_name}
				</h1>
				<div className="py-4">
					<Rating
						value={review.rating}
						className="text-red-500"
						readOnly
					/>
				</div>
				<p className="text-lg ">"{review.text}"</p>
				<div className="absolute bottom-8">{renderButtons()}</div>
			</div>
		</div>
	);
};

export default ReviewCard;
