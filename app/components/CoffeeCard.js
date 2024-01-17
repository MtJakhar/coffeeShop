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
				className="text-center border-2 rounded-xl shadow-md hover:shadow-xl hover:scale-105 mx-4 my-4 w-[350px] h-[500px] flex-none transition-transform duration-300 bg-white"
				onClick={handleClick}
			>
				<Image
					className="mx-auto rounded-t-xl bg-[#F5F5F5]"
					src={coffee.image[1]}
					width={350}
					height={350}
					alt="Coffee Image"
				/>

				<div className="pt-6">
					<h3 className=" font-semibold">
						{brand?.name.toUpperCase()}
					</h3>
					<h1 className="text-xl font-bold m-2">{coffee.name}</h1>
					<p className=" font-semibold">${coffee.price}</p>
				</div>
			</div>
		</>
	);
};

export default CoffeeCard;
