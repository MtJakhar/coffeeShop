"use client";

import React from "react";
import Image from "next/image";
import coffeeBgHero from "../../public/coffeeBgHero.jpeg";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import AuthModal from "./AuthModal";
import { AuthenticationContext } from "../context/AuthContext";

const Banner = () => {
	const router = useRouter();
	const { data } = useContext(AuthenticationContext);
	const handleShop = (e) => {
		e.preventDefault();
		router.push("/shop");
	};

	return (
		<>
			<div className="overflow-hidden position: relative w-full sm:h-[70rem] xl:h-[65rem]">
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
						<div className="text-center mt-14">
							{data ? (
								<button
									type="button"
									className="text-white w-[240px] h-16  shadow-[#505050] hover:shadow-[rgb(80,80,80)] rounded-md bg-[#f53c32] hover:shadow-md hover:bg-[#d34d43] text-[24px] uppercase"
									onClick={handleShop}
								>
									Shop Coffee
								</button>
							) : (
								<AuthModal btn={"banner"} />
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
