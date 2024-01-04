"use client";

import React, { useState } from "react";
import { Button, Modal, Box, Rating, TextField } from "@mui/material";
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
		width: 400,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	return (
		<>
			<RedButton text={"edit"} click={handleOpen} />
			<Modal open={open} onClose={handleClose}>
				<Box sx={style}>
					<div className="m-5">
						<Rating
							value={reviewData.rating}
							name="rating"
							onChange={handleChangeRating}
						/>
						<div>
							<TextField
								label="Review"
								id="text"
								name="text"
								type="text"
								value={reviewData.text}
								onChange={handleChangeInput}
								fullWidth
								multiline
								rows={5}
							/>
						</div>

						<RedButton text={"submit"} click={updateReview} />
						<RedButton text={"close"} click={handleClose} />
					</div>
				</Box>
			</Modal>
		</>
	);
};

export default EditModal;
