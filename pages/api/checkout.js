import Stripe from "stripe";

export default async function handler(req, res) {
	const stripe = new Stripe(process.env.STRIPE_SECRET);
	const data = req.body;
	const domain = process.env.DOMAIN_NAME;

	if (req.method === "POST") {
		try {
			const session = await stripe.checkout.sessions.create({
				line_items: data,
				mode: "payment",
				success_url: `${domain}/success`,
				cancel_url: `${domain}/cancel`,
			});
			res.status(200).json({ url: session.url });
		} catch (error) {
			res.status(error.statusCode || 500).json(error.message);
		}
	} else {
		res.setHeader("Allow", "POST");
		res.status(405).end("Method Not Allowed");
	}
}
