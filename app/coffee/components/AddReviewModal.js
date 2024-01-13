"use client";

import React, { useContext, useState, useEffect } from "react";
import { AuthenticationContext } from "../../context/AuthContext";
import { Alert, Box, Modal, Rating, TextField } from "@mui/material";
import axios from "axios";

const AddReviewModal = ({ coffee }) => {
	const { data } = useContext(AuthenticationContext);
	const [open, setOpen] = useState(false);
	const [error, setError] = useState(null);

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

			const response = await axios.post("/api/createReview", {
				first_name: newData.first_name,
				last_name: newData.last_name,
				text: newData.text,
				rating: newData.rating,
				coffee_id: newData.coffee_id,
				user_id: newData.user_id,
			});

			setNewData({
				first_name: data.firstName,
				last_name: data.lastName,
				text: "",
				rating: 3,
				coffee_id: coffee,
				user_id: data.id,
			});
			handleClose();
			window.location.reload();
		} catch (error) {
			console.error("Error creating data", error);
			setError(error.response.data.errorMessage);
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
				<div>
					<button
						type="button"
						className="text-white w-[240px] h-16  shadow-[#505050] hover:shadow-[rgb(80,80,80)] rounded-md bg-[#f53c32] hover:shadow-md hover:bg-[#d34d43] text-[24px] uppercase"
						onClick={handleOpen}
					>
						Add Review
					</button>
					<Modal open={open} onClose={handleClose}>
						<Box sx={style}>
							<div className="mt-2 m-4">
								{error ? (
									<Alert severity="error" className="mb-4">
										{error}
									</Alert>
								) : null}
								<Rating
									value={newData.rating}
									name="rating"
									className="text-red-500 mb-4"
									onChange={onChangeRating}
								/>
								<div>
									<TextField
										label="Review"
										id="text"
										name="text"
										color="warning"
										type="text"
										value={newData.text}
										onChange={onChangeHandler}
										fullWidth
										multiline
										rows={12}
									/>
								</div>
								<div className="flex mt-7 justify-between">
									<button
										type="button"
										className="block w-44 h-12 shadow shadow-[#505050] hover:shadow-[#505050] rounded bg-[#f53c32] hover:shadow-md hover:bg-[#d34d43] text-xl text-white uppercase"
										onClick={postReview}
									>
										Post
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
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default AddReviewModal;
