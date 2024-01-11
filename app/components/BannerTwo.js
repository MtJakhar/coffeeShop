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
			<div className="overflow-hidden position: relative w-full sm:h-[45rem] xl:h-[40rem]">
				<Image
					className="object-cover"
					fill={true}
					src={coffeeFarmers}
				/>
				<div className="absolute sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2 xl:transform-none xl:left-[5rem] xl:top-1/4">
					<div className="w-[40rem] h-[30rem] sm:text-center xl:text-left text-white">
						<h1 className="font-bold drop-shadow-xl text-7xl mb-4">
							Meet America's Best roasters.
						</h1>
						<p className="drop-shadow-xl text-3xl">
							We bring the best in the US together for you. They
							pour their craft into the 100+ unique coffees you
							can try with Coffee Shop.
						</p>

						<div className="mt-6">
							{data ? (
								<button
									type="button"
									className="text-white w-[240px] h-16  shadow-[#505050] hover:shadow-[rgb(80,80,80)] rounded-xl bg-[#f53c32] hover:shadow-xl hover:bg-[#d34d43] text-[24px] uppercase"
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
