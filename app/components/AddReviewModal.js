"use client";

import React, { useContext, useState, useEffect } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import { Button, Box, Modal, Rating, TextField } from "@mui/material";
import axios from "axios";

const AddReviewModal = ({ coffee }) => {
	const { data } = useContext(AuthenticationContext);
	const [open, setOpen] = useState(false);

	const [newData, setNewData] = useState({
		first_name: data?.firstName,
		last_name: data?.lastName,
		text: "",
		rating: 3,
		coffee_id: coffee,
		user_id: data?.id,
	});

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const onChangeRating = (e) => {
		setNewData({
			...newData,
			[e.target.name]: parseInt(e.target.value),
		});
	};

	const onChangeHandler = (e) => {
		setNewData({
			...newData,
			[e.target.name]: e.target.value,
		});
	};

	const postReview = async () => {
		try {
			setNewData({
				...newData,
				user_id: data.id,
			});

			const response = await axios.post(
				"http://localhost:3000/api/createReview",
				{
					first_name: newData.first_name,
					last_name: newData.last_name,
					text: newData.text,
					rating: newData.rating,
					coffee_id: newData.coffee_id,
					user_id: newData.user_id,
				}
			);

			setNewData({
				first_name: data.firstName,
				last_name: data.lastName,
				text: "",
				rating: 3,
				coffee_id: coffee,
				user_id: data.id,
			});
			setAddReviewBtn(false);
			window.location.reload();
		} catch (error) {
			console.error("Error creating data", error);
		}
	};

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 500,
		bgcolor: "background.paper",
		border: "2px solid #000",
		boxShadow: 24,
		p: 4,
	};

	useEffect(() => {
		if (data) {
			setNewData({
				...newData,
				first_name: data.firstName,
				last_name: data.lastName,
				user_id: data.id,
			});
		}
	}, [data]);

	return (
		<>
			{data ? (
				<div className="m-4">
					<Button
						variant="contained"
						className="bg-red-500"
						onClick={handleOpen}
					>
						Add Review
					</Button>
					<Modal open={open} onClose={handleClose}>
						<Box sx={style}>
							<div className="m-5">
								<Rating
									value={newData.rating}
									name="rating"
									onChange={onChangeRating}
								/>
								<div>
									<TextField
										label="Review"
										id="text"
										name="text"
										type="text"
										value={newData.text}
										onChange={onChangeHandler}
										fullWidth
										multiline
										rows={5}
									/>
								</div>
								<Button
									variant="contained"
									className="bg-red-500"
									onClick={postReview}
								>
									Post
								</Button>
								<Button
									variant="contained"
									className="bg-red-500"
									onClick={handleClose}
								>
									Close
								</Button>
							</div>
						</Box>
					</Modal>
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default AddReviewModal;
