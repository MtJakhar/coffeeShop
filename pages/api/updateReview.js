import { PrismaClient } from "@prisma/client";
import validator from "validator";

const prisma = new PrismaClient();

export default async function updateReview(req, res) {
	const data = req.body;

	try {
		if (
			!validator.isLength(data.text, {
				min: 10,
			})
		) {
			return res.status(400).json({
				errorMessage:
					"Review is too short, must be longer than 10 characters",
			});
		}
		if (
			!validator.isLength(data.text, {
				max: 500,
			})
		) {
			return res.status(400).json({
				errorMessage:
					"Review is too long, must be shorter than 500 characters",
			});
		}

		if (req.method === "PATCH") {
			const updatedReview = await prisma.review.update({
				where: {
					id: data.id,
				},
				data: {
					rating: data.rating,
					text: data.text,
				},
			});
			res.status(200).json(updatedReview);
		} else {
			console.error(error);
			res.status(500).json({ error: "Invalid Request Method" });
		}
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
}
