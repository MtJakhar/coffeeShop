"use client";

import React, { useState } from "react";
import CoffeeCard from "./CoffeeCard";
import AccordionShop from "./AccordionShop";

const ShopComponent = ({
	brandData,
	coffeeData,
	countryData,
	regionData,
	roastData,
}) => {
	const [userInput, setUserInput] = useState({
		brand: [],
		country: [],
		region: [],
		roast: [],
	});

	const filterCoffeeData = (coffeeData, userInput) => {
		return coffeeData.filter((coffee) => {
			// Check if each user input category is not an empty array and matches the coffee data
			return (
				(!userInput.brand.length ||
					userInput.brand.includes(coffee.brand_id)) &&
				(!userInput.country.length ||
					userInput.country.includes(coffee.country_id)) &&
				(!userInput.region.length ||
					userInput.region.includes(coffee.region_id)) &&
				(!userInput.roast.length ||
					userInput.roast.includes(coffee.roast_id))
			);
		});
	};

	let newCoffeeData = filterCoffeeData(coffeeData, userInput);

	return (
		<div>
			<h1>{newCoffeeData.length}</h1>
			<div className="flex">
				<div>
					<AccordionShop
						coffeeData={newCoffeeData}
						brandData={brandData}
						countryData={countryData}
						regionData={regionData}
						roastData={roastData}
						userInput={userInput}
						setUserInput={setUserInput}
					/>
				</div>
				<div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6 mx-auto">
					{newCoffeeData.map((coffee) => {
						return (
							<CoffeeCard
								key={coffee.id}
								coffee={coffee}
								brand={brandData.find(
									(brand) => brand.id === coffee.brand_id
								)}
							/>
						);
					})}
					;
				</div>
			</div>
		</div>
	);
};

export default ShopComponent;
