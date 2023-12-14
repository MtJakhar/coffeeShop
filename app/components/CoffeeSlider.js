import React from "react";
import CoffeeCard from "./CoffeeCard";

const CoffeeSlider = ({ coffees, brandData }) => {
	return (
		<>
			<h1>Other products offered by this company</h1>
			<div className="flex">
				{coffees.map((coffee) => {
					return (
						<CoffeeCard
							key={coffee.id}
							coffee={coffee}
							brand={brandData}
						/>
					);
				})}
			</div>
		</>
	);
};

export default CoffeeSlider;
