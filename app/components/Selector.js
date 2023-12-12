import React from "react";
import { Box ,FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Selector = ({ itemQuant, handleChange }) => {
  const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: 200,
			},
		},
	};

  const MenuItems = (number) => {
		let array = [];
		for (let i = 0; i < number; i++) {
			array.push(
				<MenuItem key={i} value={i + 1}>
					{i + 1}
				</MenuItem>
			);
		}
		return array;
	};

	return (
		<>
			<Box sx={{ minWidth: 120 }}>
				<FormControl>
					<InputLabel id="demo-simple-select-label">Qty</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={itemQuant}
						label="quantity"
						onChange={handleChange}
						MenuProps={MenuProps}
					>
						{MenuItems(10)}
					</Select>
				</FormControl>
			</Box>
		</>
	);
};

export default Selector;
