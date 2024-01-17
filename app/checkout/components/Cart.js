"use client";

import { Skeleton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem";
import { useRouter } from "next/navigation";
import Checkout from "./Checkout";

const Cart = () => {
	const router = useRouter();
	const { cart } = useContext(CartContext);
	const [hydrated, setHydrated] = useState(false);

	const handleShopClick = (e) => {
		e.preventDefault();
		router.push("/shop");
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			setHydrated(true);
		}
	}, []);

	return (
		<>
			<div className="lg:flex-auto lg:w-4/5 bg-white text-black shadow-lg my-6 mx-12 rounded-lg p-4">
				<div>
					<h1 className="text-5xl drop-shadow font-bold text-center pt-8 pb-12">
						Shopping Cart
					</h1>
					<div>
						{!hydrated ? (
							<div>
								<Skeleton
									className="mx-20 my-3"
									variant="rounded"
									width={300}
									height={300}
								/>
								<Skeleton
									className="mx-20 my-3"
									variant="rounded"
									width={300}
									height={300}
								/>
								<Skeleton
									className="mx-20 my-3"
									variant="rounded"
									width={300}
									height={300}
								/>
							</div>
						) : (
							<div>
								{cart.length === 0 ? (
									<div className="border-t-2 py-20 mx-24">
										<div className="text-center w-128">
											<p className="text-4xl font-bold text-neutral-400 mb-10 py-4">
												Your cart is craving delicious
												coffee.
											</p>
											<p
												className="text-xl font-bold border-b-[4px] pb-2 border-red-600 inline hover:cursor-pointer"
												onClick={handleShopClick}
											>
												Shop
											</p>
										</div>
									</div>
								) : (
									cart.map((cartItem) => {
										return (
											<CartItem
												key={cartItem.itemId}
												id={cartItem.itemId}
												coffee={cartItem.stripeData}
												isModal={false}
											/>
										);
									})
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
