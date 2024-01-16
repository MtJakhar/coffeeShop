"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CoffeeSlider from "./CoffeeSlider";

const CoffeeSection = ({
	coffeeData,
	lightRoasts,
	medRoasts,
	darkRoasts,
	brandData,
}) => {
	const router = useRouter();
	const [sliderData, setSliderData] = useState(coffeeData);
	const [buttonClicked, setButtonClicked] = useState(0);

	const handleRoast = () => {
		setSliderData(coffeeData);
		setButtonClicked(0);
	};

	const handleLightRoast = () => {
		setSliderData(lightRoasts);
		setButtonClicked(1);
	};

	const handleMedRoast = () => {
		setSliderData(medRoasts);
		setButtonClicked(2);
	};

	const handleDarkRoast = () => {
		setSliderData(darkRoasts);
		setButtonClicked(3);
	};

	const [buttonList, setButtonList] = useState([
		{
			title: "New Arrivals",
			handler: handleRoast,
			isClicked: true,
		},
		{
			title: "Light Roasts",
			handler: handleLightRoast,
			isClicked: false,
		},
		{
			title: "Medium Roasts",
			handler: handleMedRoast,
			isClicked: false,
		},
		{
			title: "Dark Roasts",
			handler: handleDarkRoast,
			isClicked: false,
		},
	]);

	const handleClick = (e) => {
		e.preventDefault();
		router.push(`shop/`);
	};

	const clickFunction = () => {
		setButtonList((prevList) => {
			return prevList.map((element, index) => ({
				...element,
				isClicked: index === buttonClicked ? true : false,
			}));
		});
	};

	useEffect(() => {
		clickFunction();
	}, [buttonClicked]);

	return (
		<>
			<div>
				<div className="mx-14 mt-20 text-center lg:text-left">
					<h1 className="text-5xl font-bold drop-shadow-md mb-8">
						Roasted by real (talented) people
					</h1>
					<p className="text-xl drop-shadow-md mx-8 md:mx-0 mb-8">
						We have more than a hundred coffees expertly crafted by
						the country’s top local roasters.
					</p>

					<div>
						{buttonList.map((element, index) => {
							return (
								<button
									type="button"
									key={index}
									className={
										element.isClicked === true
											? "w-40 h-10 border-[1px] mr-3 my-3 border-black text-lg text-white bg-black hover:bg-black hover:text-white font-bold rounded-full"
											: "w-40 h-10 border-[1px] mr-3 my-2 border-black text-lg text-black bg-white hover:bg-black hover:text-white font-bold rounded-full"
									}
									onClick={element.handler}
								>
									{element.title}
								</button>
							);
						})}
						<div></div>
					</div>
					<p
						className="underline text-lg hover:cursor-pointer mt-8"
						onClick={handleClick}
					>
						Shop All Coffee
					</p>
				</div>

				<CoffeeSlider coffeeData={sliderData} brandData={brandData} />
			</div>
		</>
	);
};

export default CoffeeSection;
