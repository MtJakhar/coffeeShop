import { PrismaClient } from "@prisma/client";
import validator from "validator";

const prisma = new PrismaClient();

export default async function createReview(req, res) {
	if (req.method === "POST") {
		const { first_name, last_name, text, rating, coffee_id, user_id } =
			req.body;

		if (
			!validator.isLength(text, {
				min: 10,
			})
		) {
			return res.status(400).json({
				errorMessage:
					"Review is too short, must be longer than 10 characters",
			});
		}
		if (
			!validator.isLength(text, {
				max: 500,
			})
		) {
			return res.status(400).json({
				errorMessage:
					"Review is too long, must be shorter than 500 characters",
			});
		}

		try {
			const createdReview = await prisma.review.create({
				data: {
					first_name: first_name,
					last_name: last_name,
					text: text,
					rating: rating,
					coffee_id: coffee_id,
					user_id: user_id,
				},
			});

			res.status(201).json(createdReview);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	} else {
		res.status(404).json({ error: "Unknown Endpoint" });
	}
}
