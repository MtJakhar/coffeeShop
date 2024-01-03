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
				className="text-center border-2 rounded-xl shadow-md hover:shadow-xl hover:scale-105 mt-5 mx-5 w-[450px] h-[650px] flex-none transition-transform duration-300 bg-white"
				onClick={handleClick}
			>
				{/* smoke white #F5F5F5,off white #FAF9F6, bone white #F9F6EE, Ivory #FFFFF0 */}
				<Image
					className="mx-auto rounded-t-xl bg-[#F5F5F5]"
					src={coffee.image[1]}
					width={500}
					height={500}
					alt="Coffee Image"
				/>

				<div className="pt-6">
					<h3 className="text-xl font-semibold">
						{brand?.name.toUpperCase()}
					</h3>
					<h1 className="text-3xl font-bold m-2">{coffee.name}</h1>
					<p className="text-xl font-semibold">${coffee.price}</p>
				</div>
			</div>
		</>
	);
};

export default CoffeeCard;
