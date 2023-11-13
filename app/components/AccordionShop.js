"use client";

import React from "react";
import { useState } from "react";
import AccordionCard from "./AccordionCard";

const AccordionShop = ({ brandData, newCoffeeData, countryData, regionData, userInput, setUserInput  }) => {

	const handleCheckBox = (key, selectedValue) => {
		if (userInput[key].includes(selectedValue)) {
			setUserInput((prevData) => ({
				...prevData,
				[key]: prevData[key].filter(
					(element) => element !== selectedValue
				),
			}));
		} else {
			setUserInput((prevData) => ({
				...prevData,
				[key]: [...prevData[key], selectedValue],
			}));
		}
	};

	const roastData = [
	  {
			name: "Light",
	    data: "LIGHT"
	  },
	  {
			name: "Light Medium",
	    data: "LIGHT_MEDIUM"
	  },
	  {
			name: "Medium",
	    data: "MEDIUM"
	  },
	  {
			name: "Medium Dark",
	    data: "MEDIUM_DARK"
	  },
	  {
			name: "Dark",
	    data: "DARK"
	  },
	  {
			name: "Extra Dark",
	    data: "EXTRA_DARK"
	  },
	];

	const listedItems = [
		{
			name: "brand",
			data: brandData,
		},
		{
			name: "country",
			data: countryData,
		},
		{
			name: "region",
			data: regionData,
		},
		{
			name: "roast",
			data: roastData,
		},
	];

	console.log(userInput)
	return (
		<div>
			{listedItems.map((item) => {
				return (
					<AccordionCard
						key={item.name}
						name={item.name}
						data={item.data}
						handleCheckBox={handleCheckBox}
					/>
				);
			})}
		</div>
	);
};

export default AccordionShop;
