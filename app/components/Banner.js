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
			<div className="overflow-hidden position: relative w-full h-[650px] bg-black">
				<Image
					className="object-cover transform scale-x-[-1]"
					fill={true}
					src={coffeeBgHero}
					alt="from freepik.com"
				/>
				<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
					<div className="text-white">
						<h1 className="font-bold drop-shadow-xl text-6xl text-center">
							The Best Coffee is Artisanal
						</h1>
						<p className="md:w-3/4 mx-auto drop-shadow-xl text-xl pt-10 text-center">
							We'll match you to coffee that's personalized to
							your taste and delivered to your door.
						</p>
						<div className="text-center mt-14">
							{data ? (
								<button
									type="button"
									className="text-white w-40 h-12 shadow-[#505050] hover:shadow-[rgb(80,80,80)] rounded-md bg-[#f53c32] hover:shadow-md hover:bg-[#d34d43] text-lg uppercase"
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
