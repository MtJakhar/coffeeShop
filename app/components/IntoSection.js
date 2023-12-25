import Image from "next/image";
import React from "react";
import certified from "../../public/certified.png";
import cup from "../../public/cup.png";
import deliveryMan from "../../public/deliveryMan.png";

const IntoSection = () => {
	const introData = [
		{
			header: "Artisanal Roasters.",
			text: `Our Artisanal roasters, driven by a commitment to
		excellence, transform carefully selected coffee beans into
		extraordinary brews.`,
			image: cup,
		},
		{
			header: "Sourced from Ethical Growers.",
			text: `Embrace the goodness in every sip knowing that our coffees
		are sourced directly from ethical growers who prioritize
		sustainable and responsible practices.`,
			image: certified,
		},
		{
			header: "Roasted fresh to order.",
			text: `Our coffee undergoes roasting within 48 hours before being shipped directly from the roaster to ensure freshness.`,
			image: deliveryMan,
		},
	];

	return (
		<div className="grid sm:grid-cols-1 md:grid-cols-3 ">
			{introData.map((element) => {
				return (
					<div className="text-center mt-20 mb-40 mx-4 w-1/3">
						<Image
							className="mx-auto my-8"
							width={100}
							height={100}
							src={element.image}
							alt="image"
						/>
						<h1 className="text-3xl font-bold mb-8">
							{element.header}
						</h1>
						<p className=" text-xl mx-auto px-2 w-80 h-20">
							{element.text}
						</p>
					</div>
				);
			})}
		</div>
	);
};

export default IntoSection;
