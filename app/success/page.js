import React from "react";
import Head from "next/head";

const page = () => {
	return (
		<>
			<Head>
				<title>Success!</title>
			</Head>
			<h1>Thanks for your order!</h1>
			<p>
				We appreciate your business! If you have any questions, please
				email
				<a href="mailto:orders@example.com">orders@example.com</a>.
			</p>
		</>
	);
};

export default page;
