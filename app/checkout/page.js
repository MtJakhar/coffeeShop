import React from "react";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";

export default function page() {
	return (
		<>
			<div className="bg-[#222222] text-white">
				<div>Cart Checkout Page!!!</div>
				<div className="grid sm:grid-cols-5 xl:grid-cols-6 gap-4">
					<Cart />
					<Checkout />
				</div>
			</div>
		</>
	);
}
