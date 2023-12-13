import React from "react";
import Head from "next/head";

const page = () => {
	return (
		<>
      <Head>
        <title>Canceled</title>
      </Head>
      <h1>Your order has been canceled</h1>
			<p>
				We're sorry to hear that you've decided to cancel your order.
				Your satisfaction is important to us, and we want to ensure your
				experience with our online store is as positive as possible. If
				there's anything specific that led to your decision to cancel,
				please let us know. Your feedback is valuable and helps us
				improve our products and services. We're here to assist you, and
				if there's anything we can do to address your concerns, please
				don't hesitate to reach out to our customer support team. <a href="mailto:orders@example.com">orders@example.com</a> If you
				changed your mind or need further assistance, remember that our
				customer support team is available to help you with any
				questions or concerns you may have. Feel free to explore our
				website for other products that might better suit your needs. We
				appreciate your consideration and hope to have the opportunity
				to serve you in the future. Thank you for choosing CoffeeShop.
				Best regards, CoffeeShop
			</p>
		</>
	);
};

export default page;
