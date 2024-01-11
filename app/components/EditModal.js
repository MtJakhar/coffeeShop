"use client";

import React, { useState } from "react";
import { Modal, Box, Rating, TextField } from "@mui/material";
import axios from "axios";
import RedButton from "./RedButton";

const EditModal = ({ review }) => {
	const [open, setOpen] = useState(false);
	const [reviewData, setReviewData] = useState({
		text: review.text,
		rating: review.rating,
	});

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleChangeInput = (e) => {
		setReviewData({
			...reviewData,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeRating = (e) => {
		setReviewData({
			...reviewData,
			[e.target.name]: parseInt(e.target.value),
		});
	};

	const updateReview = async () => {
		try {
			const response = await axios.patch(
				"http://localhost:3000/api/updateReview",
				{
					id: review.id,
					rating: reviewData.rating,
					text: reviewData.text,
				}
			);
			handleClose();
			window.location.reload();
		} catch (error) {
			console.error("Error updating data", error);
		}
	};

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 500,
		height: 500,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	return (
		<>
			<RedButton text={"edit"} click={handleOpen} disabled={false} />
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					<div className="mt-2 m-4">
						<Rating
							value={reviewData.rating}
							name="rating"
							className="text-red-500 mb-4"
							onChange={handleChangeRating}
						/>
						<div>
							<TextField
								label="Review"
								id="text"
								name="text"
								color="warning"
								type="text"
								value={reviewData.text}
								onChange={handleChangeInput}
								fullWidth
								multiline
								rows={12}
							/>
						</div>

						<div className="flex mt-7 justify-between">
							<button
								type="button"
								className="block w-44 h-12 shadow shadow-[#505050] hover:shadow-[#505050] rounded bg-[#f53c32] hover:shadow-md hover:bg-[#d34d43] text-xl text-white uppercase"
								onClick={updateReview}
							>
								Submit
							</button>

							<button
								type="button"
								className="block w-44 h-12 shadow shadow-[#505050] hover:shadow-[#505050] rounded bg-[#f53c32] hover:shadow-md hover:bg-[#d34d43] text-xl text-white uppercase"
								onClick={handleClose}
							>
								Close
							</button>
						</div>
					</div>
				</Box>
			</Modal>
		</>
	);
};

export default EditModal;
