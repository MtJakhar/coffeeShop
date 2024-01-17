import React from "react";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

export default function page() {
	return (
		<>
			<div className="bg-[#FAF9F6]">
				<div className="lg:flex py-10">
					<Cart />
					<Checkout />
				</div>
			</div>
		</>
	);
}
