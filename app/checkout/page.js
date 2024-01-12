import React from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

export default function page() {
	return (
		<>
			<div className="#FAF9F6">
				<div className="flex my-20">
					<Cart />
					<Checkout />
				</div>
			</div>
		</>
	);
}
