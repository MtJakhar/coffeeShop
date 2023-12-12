"use client";

import { Skeleton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
	const { cart } = useContext(CartContext);
	const [ hydrated, setHydrated ] = useState(false);

	useEffect(() => {
		if (typeof window !== "undefined") {
			setHydrated(true);
		}
	}, []);

	return (
		<>
			<div className="grid grid-cols-1 gap-2">
        <h1>Shopping Cart</h1>
				{!hydrated ? (
          <div>
            <Skeleton className="mx-20 my-3" variant="rounded" width={300} height={300}/>
            <Skeleton className="mx-20 my-3" variant="rounded" width={300} height={300}/>
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
		</>
	);
};

export default Cart;
