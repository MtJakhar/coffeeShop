"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CoffeeCard = ({ brand, coffee }) => {
	const router = useRouter();

	const handleClick = (e) => {
		e.preventDefault();
		router.push(`/coffee/${coffee.webAddress}`);
	};

	return (
		<>
			<div
				className="justify-center border-2 border-black text-center"
				onClick={handleClick}
			>
				<Image
					className="mx-auto"
					src={coffee.image[0]}
					width={500}
					height={500}
					alt="Coffee Image"
				/>
				<hr />
				<h3>{brand.name}</h3>
				<h1>{coffee.name}</h1>
				<p>${coffee.price}</p>
			</div>
		</>
	);
};

export default CoffeeCard;
