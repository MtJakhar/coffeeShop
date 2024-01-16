"use client";

import React from "react";
import Image from "next/image";
import coffeeFarmers from "../../public/coffeeFarmers.jpeg";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import AuthModal from "./AuthModal";
import { AuthenticationContext } from "../context/AuthContext";

const BannerTwo = () => {
	const router = useRouter();
	const { data } = useContext(AuthenticationContext);
	const handleShop = (e) => {
		e.preventDefault();
		router.push("/shop");
	};

	return (
		<>
			<div className="overflow-hidden position: relative w-full h-[550px] bg-[#FFE4C4]">
				<Image
					className="object-cover"
					fill={true}
					src={coffeeFarmers}
					alt="coffee farmers"
				/>
				<div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:transform-none lg:left-20 lg:top-1/4">
					<div className="w-[640px] text-center lg:text-left text-white">
						<h1 className="font-bold drop-shadow-xl text-5xl lg:text-6xl mb-4">
							Meet America's Best roasters.
						</h1>
						<p className="drop-shadow-xl text-xl">
							We bring the best in the US together for you. They
							pour their craft into the 100+ unique coffees you
							can try with Coffee Shop.
						</p>

						<div className="mt-6">
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

export default BannerTwo;
