"use client";

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
	cart: [],
	addToCart: () => {},
	subtractFromCart: () => {},
	updateItemQty: () => {},
});

export default function CartContextProvider({ children }) {
	// check if localStorage is available, window is a global object that represents the browser environment
	const isLocalStorage = typeof window !== "undefined" && window.localStorage;

	const storedCart = isLocalStorage
		? JSON.parse(localStorage.getItem("cart")) || []
		: [];
	const [cart, setCart] = useState(storedCart);

	useEffect(() => {
		// check if localStorage is available
		if (isLocalStorage) {
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	}, [cart, isLocalStorage]);
	// useEffect is activated when the dependencies of cart of isLocalStorage changes

	const addToCart = (item) => {
		const existingItem = cart.find((cartItem) => cartItem.itemId === item.itemId);

		if (existingItem) {
			// If the item exists, update the quantity
			setCart((prevArray) =>
				prevArray.map((element) =>
					element.itemId === item.itemId
						? {
								...element,
								stripeData: {
									...element.stripeData,
									quantity:
										element.stripeData.quantity +
										item.stripeData.quantity,
								},
						  }
						: element
				)
			);
		} else {
			setCart([...cart, item]);
		}
	};

	const subtractFromCart = (itemId) => {
		setCart((prevArray) =>
			prevArray.filter((element) => element.itemId !== itemId)
		);
	};

	const updateItemQty = (itemId, newQty) => {
		if (newQty <= 0) {
			setCart((prevArray) =>
				prevArray.filter((element) => element.itemId !== itemId)
			);
		} else {
			setCart((prevArray) =>
				prevArray.map((element) => {
					if (element.itemId === itemId) {
						return {
							...element,
							stripeData: { ...element.stripeData, quantity: newQty },
						};
					} else {
						return element;
					}
				})
			);
		}
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				subtractFromCart,
				updateItemQty,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
