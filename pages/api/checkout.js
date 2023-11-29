import Stripe from "stripe";

export default async function handler(req, res) {
  const stripe = new Stripe(process.env.STRIPE_SECRET);
  const data = req.body

  if(req.method === "POST") {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [{
          price_data: {
            currency: "usd",
            product_data: {
              name: data.name,
              description: data.description,
              images: [data.image]
            },
            unit_amount_decimal: parseFloat(data.price) * 100,
          },
          quantity: data.quantity
        }],
        mode: "payment",
        success_url: "https://localhost:3000/shop",
        cancel_url: "https://localhost:3000/shop"
      });
      res.status(200).json({ url: session.url });
    } catch(error) {
      res.status(error.statusCode || 500).json(error.message)
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}