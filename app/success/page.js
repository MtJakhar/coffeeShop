import React from "react";

const page = () => {
	return (
		<>
			<div className="w-4/5 lg:w-3/5 mx-auto my-16 border-2 rounded-xl lg:py-16 lg:px-20 py-12 px-16">
				<h1 className="pb-2 lg:pb-4 border-b-[4px] lg:border-b-[6px] border-red-600 font-bold drop-shadow-md text-3xl lg:text-4xl text-center">
					Thanks for your order!
				</h1>
				<div className="pt-2 lg:pt-4 text-xl lg:text-2xl">
					<p>
						We appreciate your business! If you have any questions,
						please email{" "}
						<a
							className="text-red-700"
							href="mailto:orders@example.com"
						>
							orders@example.com
						</a>
						.
					</p>
					<p className="pt-2 lg:pt-4">
						Our customer support is here to help with any concerns
						or questions. Explore our website for alternative
						products. We appreciate your consideration and hope to
						serve you in the future. Thank you for choosing
						CoffeeShop.
					</p>
				</div>
			</div>
		</>
	);
};

export default page;
