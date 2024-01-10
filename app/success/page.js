import React from "react";

const page = () => {
	return (
		<>
			<div>
				<div className="sm:w-[650px] xl:w-[800px] mx-auto my-36">
					<h1 className="sm:mx-28 xl:mx-32 pb-2 border-b-[6px] border-red-600 font-bold drop-shadow-md sm:text-4xl xl:text-5xl text-center">
						Thanks for your order!
					</h1>
					<div className="sm:py-6 xl:py-10 sm:text-2xl xl:text-3xl">
						<p>
							We appreciate your business! If you have any
							questions, please email{" "}
							<a
								className="text-red-700"
								href="mailto:orders@example.com"
							>
								orders@example.com
							</a>
							.
						</p>
						<p className="pt-4">
							Our customer support is here to help with any
							concerns or questions. Explore our website for
							alternative products. We appreciate your
							consideration and hope to serve you in the future.
							Thank you for choosing CoffeeShop.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default page;
