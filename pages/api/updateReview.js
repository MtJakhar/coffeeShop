import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function updateReview(req, res) {
	const data = req.body;
  console.log(data)

	try {
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
