import React from "react";
import Image from "next/image";

const CoffeeCard = ({ brandName, coffee }) => {
	return (
		<>
			<div className="justify-center border-2 border-black text-center">
				<Image
					className="mx-auto"
					src={coffee.image[0]}
					width={500}
					height={500}
					alt="Coffee Image"
				/>
				<hr />
				<h3>{brandName.name}</h3>
				<h1>{coffee.name}</h1>
				<p>{coffee.price}</p>
			</div>
		</>
	);
};

export default CoffeeCard;
