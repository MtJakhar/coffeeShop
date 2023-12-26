import React from "react";
import Image from "next/image";
import coffeeFarmers from "../../public/coffeeFarmers.jpeg";
import { Button } from "@mui/material";

const BannerTwo = () => {
	return (
		<>
			<div className="overflow-hidden position: relative w-full sm:h-[45rem] md:h-[40rem]">
				<Image
					className="object-cover"
					fill={true}
					src={coffeeFarmers}
				/>
				<div className="absolute sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2 md:transform-none md:left-[5rem] md:top-1/4">
					<div className="w-[40rem] h-[30rem] sm:text-center md:text-left text-white">
						<h1 className="font-bold drop-shadow-xl text-7xl mb-4">
							Meet America's Best roasters.
						</h1>
						<p className="drop-shadow-xl text-3xl">
							We bring the best in the US together for you. They
							pour their craft into the 100+ unique coffees you
							can try with Trade.
						</p>
						<Button
							variant="contained"
							className="bg-[#f53c32] hover:bg-[#d34d43] text-xl py-3 px-10 mt-4"
						>
							Get Started
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default BannerTwo;
