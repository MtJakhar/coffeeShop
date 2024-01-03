import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function deleteReview(req, res) {
	// req data should be the review data which the user selects, so just ensure that you are looking for the review.id when deleting the review
	const data = req.body;

	if (req.method === "DELETE") {
		try {
			const deletedReview = await prisma.review.delete({
				where: {
					id: data.id,
				},
			});
			res.status(200).json(deletedReview);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	} else {
		res.status(404).json({
			error: "Server could not find client-requested information",
		});
	}
}
