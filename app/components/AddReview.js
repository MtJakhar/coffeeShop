"use client";

import React, { useContext, useState, useEffect } from "react";
import { AuthenticationContext } from "../context/AuthContext";
import { Rating, TextField, Button } from "@mui/material";
import axios from "axios";

const AddReview = ({ coffee }) => {
	const { data } = useContext(AuthenticationContext);
	const [addReviewBtn, setAddReviewBtn] = useState(false);
  
	const [newData, setNewData] = useState({
    first_name: data?.firstName,
		last_name: data?.lastName,
		text: "",
		rating: 3,
		coffee_id: coffee,
		user_id: data?.id,
	});
  
	const clickHandler = () => {
		setAddReviewBtn(!addReviewBtn);
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
      const response = await axios.post("http://localhost:3000/api/createReview", {
        first_name: newData.first_name,
        last_name: newData.last_name,
        text: newData.text,
        rating: newData.rating,
        coffee_id: newData.coffee_id,
        user_id: newData.user_id,
      })

      console.log("Data Posted", response.newData);

      setNewData({
        first_name: data?.firstName,
        last_name: data?.lastName,
        text: "",
        rating: 3,
        coffee_id: coffee,
        user_id: data?.id,
      })
      setAddReviewBtn(false);
    } catch (error) {
      console.error("Error creating data", error);
    }
  };
  
  useEffect(() => {
    if(data) {
      setNewData({
        ...newData,
        first_name: data.firstName,
        last_name: data.lastName,
        user_id: data.id
      });
    }
  }, [data]);
  

	return (
		<>
			{data ? (
				<div>
					<p className="cursor-pointer m-5" onClick={clickHandler}>
						Add Review
					</p>
					{addReviewBtn ? (
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
              <Button variant="contained" className="bg-red-500" onClick={postReview}>Post</Button>
						</div>
					) : (
						<></>
					)}
				</div>
			) : (
				<></>
			)}
		</>
	);
};

export default AddReview;
