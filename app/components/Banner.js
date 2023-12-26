"use client";

import React from "react";
import Image from "next/image";
import coffeeBgHero from "../../public/coffeeBgHero.jpeg";
import { Button } from "@mui/material";

const Banner = () => {
	return (
		<>
			<div className="overflow-hidden position: relative w-full sm:h-[70rem] md:h-[65rem]">
				<Image
					className="object-cover transform scale-x-[-1]"
					fill={true}
					src={coffeeBgHero}
					alt="from freepik.com"
				/>
				<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
					<div className="w-[40rem] h-[30rem] text-white">
						<h1 className="font-bold drop-shadow-xl text-8xl mb-3 text-center">
							The Best Coffee is Artisanal
						</h1>
						<p className="drop-shadow-xl text-3xl mt-12 mb-5 text-center">
							We'll match you to coffee that's personalized to
							your taste and delivered to your door.
						</p>
						<div className="text-center">
							<Button
								variant="contained"
								className="bg-[#f53c32] hover:bg-[#d34d43] text-[24px] py-3 px-14 mt-8"
							>
								Get Started
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
