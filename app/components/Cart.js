"use client";

import { Skeleton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
	const { cart } = useContext(CartContext);
	const [hydrated, setHydrated] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setHydrated(true);
		}
	}, []);

	return (
		<>
			<div className="sm:col-span-3 xl:col-span-4 flex justify-center bg-white text-black m-6 rounded-lg p-4">
				<div>
					<h1 className="text-5xl font-bold text-center pt-8 pb-12">
						Shopping Cart
					</h1>
					<div>
						{!hydrated ? (
							<div className="">
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
								<Skeleton
									className="mx-20 my-3"
									variant="rounded"
									width={300}
									height={300}
								/>
							</div>
						) : (
							<div className="">
								{cart.map((cartItem) => {
									return (
										<CartItem
											key={cartItem.itemId}
											id={cartItem.itemId}
											coffee={cartItem.stripeData}
											isModal={false}
										/>
									);
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Cart;
