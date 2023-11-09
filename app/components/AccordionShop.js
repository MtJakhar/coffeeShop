"use client"

import React from "react";
import { useState } from "react";
import AccordionCard from "./AccordionCard";

const AccordionShop = ({ brandData, coffeeData, countryData, regionData }) => {
	const [userInput, setUserInput] = useState({
		brand: [],
		country: [],
		region: [],
		roast: []
	});

	const handleCheckBox = (key, selectedValue) => {
		if(userInput[key].includes(selectedValue)) {
			setUserInput((prevData) => ({
				...prevData,
				[key]: prevData[key].filter((element) => element !== selectedValue)
			}));
		} else {
				setUserInput((prevData) => ({
					...prevData,
					[key]: [...prevData[key], selectedValue]
			}));
		}
	}

  // const roastData = [
  //   {
  //     name: "Light",
  //   },
  //   {
  //     name: "Light Medium",
  //   },
  //   {
  //     name: "Medium",
  //   },
  //   {
  //     name: "Medium Dark",
  //   },
  //   {
  //     name: "Dark",
  //   },
  //   {
  //     name: "Extra Dark",
  //   },
  // ]

	// const listedItems = [
	// 	{
	// 		name: "Brand",
	// 		data: brandData,
	// 	},
	// 	{
	// 		name: "Country",
	// 		data: countryData,
	// 	},
	// 	{
	// 		name: "Region",
	// 		data: regionData,
	// 	},
	// 	{
	// 		name: "Roast Level",
	// 		data: roastData,
	// 	},
	// ];

	return (
		<div>
			<AccordionCard name="brand" data={brandData} handleCheckBox={handleCheckBox}/>
			<AccordionCard name="country" data={countryData} handleCheckBox={handleCheckBox}/>
			<AccordionCard name="region" data={regionData} handleCheckBox={handleCheckBox}/>
		</div>
	);
};

export default AccordionShop;
