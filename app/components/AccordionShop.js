"use client";

import React from "react";
import AccordionCard from "./AccordionCard";

const AccordionShop = ({ brandData, newCoffeeData, countryData, regionData, roastData, userInput, setUserInput  }) => {

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
