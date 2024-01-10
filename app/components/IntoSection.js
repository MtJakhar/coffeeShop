import Image from "next/image";
import React from "react";
import certified from "../../public/certified.png";
import cup from "../../public/cup.png";
import deliveryMan from "../../public/deliveryMan.png";

const IntoSection = () => {
	const introData = [
		{
			header: "Artisanal Roasters",
			text: `Our Artisanal roasters, driven by a commitment to
		excellence, transform carefully selected coffee beans into
		extraordinary brews.`,
			image: cup,
		},
		{
			header: "Sourced from Ethical Growers",
			text: `Embrace the goodness in every sip knowing that our coffees
		are sourced directly from ethical growers who prioritize
		sustainable and responsible practices.`,
			image: certified,
		},
		{
			header: "Roasted fresh to order",
			text: `Our coffee undergoes roasting within 48 hours before being shipped directly from the roaster to ensure freshness.`,
			image: deliveryMan,
		},
	];

	return (
		<div className="grid sm:grid-cols-1 xl:grid-cols-3 text-center sm:my-20  xl:my-32 sm:mx-28 xl:mx-0">
			{introData.map((element) => {
				return (
					<div
						className={
							introData.indexOf(element) === 1
								? "sm:border-y-2 sm:border-x-0 xl:border-y-0 xl:border-x-2  sm:py-16 xl:py-0 border-neutral-400"
								: "sm:my-16 xl:my-0"
						}
					>
						<Image
							className="mx-auto mb-10"
							width={100}
							height={100}
							src={element.image}
							alt="image"
						/>
						<h1 className="text-4xl font-bold mb-7">
							{element.header}
						</h1>
						<p className="text-2xl w-2/3 mx-auto">{element.text}</p>
					</div>
				);
			})}
		</div>
	);
};

export default IntoSection;
