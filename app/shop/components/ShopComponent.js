"use client";

import React, { useEffect, useState } from "react";
import CoffeeCard from "../../components/CoffeeCard";
import AccordionShop from "./AccordionShop";
import PaginationControlled from "../../components/PaginationControlled";

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

	const coffeeDataRender = newCoffeeData.map((coffee) => {
		return (
			<CoffeeCard
				key={coffee.id}
				coffee={coffee}
				brand={brandData.find((brand) => brand.id === coffee.brand_id)}
			/>
		);
	});

	const [currentPage, setCurrentPage] = useState(1);
	const cardsPerPage = 12;
	const totalPages = Math.ceil(coffeeDataRender.length / cardsPerPage);
	let indexOfLastCoffeeCard = currentPage * cardsPerPage;
	let indexOfFirstCoffeeCard = indexOfLastCoffeeCard - cardsPerPage;
	let currentCoffeeData = coffeeDataRender.slice(
		indexOfFirstCoffeeCard,
		indexOfLastCoffeeCard
	);

	const handleCurrentPage = (event, value) => {
		setCurrentPage(value);
	};

	useEffect(() => {
		setCurrentPage(1);
	}, [coffeeDataRender.length]);

	return (
		<div className="ml-8 mr-4">
			<div>
				<h1 className="text-7xl pt-4 font-bold">All Coffee</h1>
				<p className="py-4 md:w-3/4">
					Choose from a wide variety of coffee from the top roasters
					in the US. All our specialty coffee is roasted to order and
					shipped fresh to your door.
				</p>
			</div>
			<div className="flex">
				<div className="pt-5">
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

				<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 mx-auto mb-14">
					{currentCoffeeData}
					<div className="mx-auto mt-8 lg:col-span-3 md:col-span-2 col-span-1">
						<PaginationControlled
							currentPage={currentPage}
							handleCurrentPage={handleCurrentPage}
							totalPages={totalPages}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopComponent;
